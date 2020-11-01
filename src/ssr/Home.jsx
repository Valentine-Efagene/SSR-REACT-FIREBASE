import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export default function Home() {
  return (
    <>
      <div className="text-center">
        <h3>Server-Side Rendering</h3>
      </div>
    </>
  );
}

Home.fetchData = async () => {
  let users = [];
  const db = firebase.firestore();
  const snapshot = await db.collection('users').get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
    user.push(doc.data());
  });

  return users;
};
