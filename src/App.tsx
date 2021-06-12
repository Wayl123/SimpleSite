import React, { useState, useEffect } from 'react'
import 'firebase/firestore'
import { useFirestoreCollectionData, useFirestore } from 'reactfire'
import NewCard from './components/NewCard'
import DetailCard from './components/DetailCard'

function App() {
  const databaseRef = useFirestore()
    .collection('simpleappdb')

  const {status, data} = useFirestoreCollectionData(databaseRef)
  
  console.log(data)
  
  return (
    <div>
      <h1>Simple Site</h1>
      <NewCard/>
      <DetailCard/>
    </div>
  );
}

export default App;
