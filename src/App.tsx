import React, { useState, useEffect } from 'react'
import 'firebase/firestore'
import { useFirestoreCollectionData, useFirestore } from 'reactfire'
import NewCard from './components/NewCard'
import DetailCard from './components/DetailCard'

function App() {
  const databaseRef = useFirestore()
    .collection('simpleappdb')

  const {status, data} = useFirestoreCollectionData(databaseRef)

  const addCard = async ({content, select}: any) => {
    databaseRef.add({content: content, select: select})
  }

  return (
    <div>
      <h1>Simple Site</h1>
      <NewCard
        addCard={addCard}
      />
      {
        status !== 'loading' && data.length > 0 ?
          data.map((card, index) => (
            <DetailCard 
              key={index}
              card={card}
            />
          ))
        :
          <p>No content</p>
      }
    </div>
  );
}

export default App;
