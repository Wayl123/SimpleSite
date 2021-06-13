import React from 'react'
import 'firebase/firestore'
import { useFirestoreCollectionData, useFirestore } from 'reactfire'
import NewCard from './components/NewCard'
import DetailCard from './components/DetailCard'

function App() {
  const databaseRef = useFirestore()
    .collection('simpleappdb')

  const orderedRef = databaseRef.orderBy('date', 'desc')

  const {status, data} = useFirestoreCollectionData(orderedRef)

  const addCard = async ({content, select, date}: any) => {
    databaseRef.add({content: content, select: select, date: date})
  }

  const editCard = async ({_id, content, select}: any) => {
    databaseRef.doc(_id).update({content: content, select: select})
  }
  
  const deleteCard = async ({_id}: any) => {
    databaseRef.doc(_id).delete()
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
              editCard={editCard}
              deleteCard={deleteCard}
            />
          ))
        :
          <p>No content</p>
      }
    </div>
  );
}

export default App;
