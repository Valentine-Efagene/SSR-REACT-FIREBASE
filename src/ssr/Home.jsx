import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firebase-database';

import { useState, useEffect } from 'react';

//import { setInitialData } from '../redux/actions';
import withToast from './withToast.jsx';
//import { useDispatch, useSelector } from 'react-redux';
import store from './store.js';

function Home(props) {
  const { showSuccess, showError } = props;
  //const dispatch = useDispatch();
  // let initialData = useSelector((state) => state.initialData);
  let { initialData } = store;

  /*useEffect(() => {
    (async () => {
      if (!initialData.dbData) {
        try {
          initialData.dbData = await fetchData();
          dispatch(setInitialData(initialData));
          showSuccess('fetched');
        } catch (error) {
          showError('Home useEffect fetchData error: ' + error);
        }
      }
    })();
  }, []);*/

  const { dbData } = initialData;

  return (
    <>
      <div className="text-center">
        <h3>Server-Side Rendering</h3>
        <h3>{dbData ? dbData[0]?.first : ''}</h3>
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
