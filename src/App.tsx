import React, { useState, useEffect } from 'react'
import 'firebase/firestore'
import { useFirestoreCollectionData, useFirestore } from 'reactfire'
import NewCard from './components/NewCard'
import DetailCard from './components/DetailCard'

function App() {
  const databaseRef = useFirestore()
    .collection('simpleappdb')

  const {status, data} = useFirestoreCollectionData(databaseRef)

  return (
    <div>
      <h1>Simple Site</h1>
      <NewCard/>
      {
        status !== 'loading' && data.length > 0 ?
          data.map((post, index) => (
            <DetailCard 
              key={index}
              post={post}
            />
          ))
        :
          <p>No content</p>
      }
    </div>
  );
}

export default App;
