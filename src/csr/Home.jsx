import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firebase-database';
import { useState, useEffect } from 'react';

import withToast from './withToast.jsx';

function Home(props) {
  const [data, setData] = useState([]);
  const { showSuccess, showError } = props;

  useEffect(() => {
    (async () => {
      try {
        let temp = await fetchData();
        setData(temp);
        showSuccess('fetched');
      } catch (error) {
        showError('Home useEffect fetchData error: ' + error);
      }
    })();
  }, []);

  return (
    <>
      <div className="text-center">
        <h3>Server-Side Rendering</h3>
        <h3>{data[0]?.first}</h3>
      </div>
    </>
  );
}

async function fetchData() {
  const firestore = firebase.firestore();
  let users = [];

  try {
    const snapshot = await firestore.collection('users').get();
    snapshot.forEach((doc) => {
      users.push(doc.data());
    });
  } catch (e) {
    showError('Home Snapshot error: ' + e);
  }

  return users;
}

export default withToast(Home);
