import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firebase-database';
import { useState, useEffect } from 'react';

import withToast from './withToast.jsx';
import store from './store.js';

function Home(props) {
  const { showSuccess, showError } = props;
  const dbData = store.initialData?.dbData;
  const [data, setData] = useState(dbData ? dbData : []);

  // Only gets called after rendering; so, won't be called in server-side code
  useEffect(() => {
    (async () => {
      try {
        let fetchedData = await fetchData();
        setData(fetchedData);
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

const HomeWithToast = withToast(Home);
HomeWithToast.fetchData = fetchData;

export default HomeWithToast;
