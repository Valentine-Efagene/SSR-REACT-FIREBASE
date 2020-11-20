import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/firebase-database';
import { useState, useEffect } from 'react';

//import { useSelector, useDispatch } from 'react-redux';
//import { setInitialData } from '../redux/actions';

import withToast from './withToast.jsx';
import store from './store.js';

function Home(props) {
  const { showSuccess, showError } = props;
  const [data, setData] = useState(
    store.initialData ? store.initialData : null,
  );

  // Only gets called after rendering; so, won't be called in server-side code
  useEffect(() => {
    (async () => {
      try {
        //console.log('Before fetching: Data in useEffect');
        //console.log(data);
        //console.log('---------------------------------------------------');
        let fetchedData = data ? data : await fetchData();
        setData(fetchedData);
        //console.log('Fetched: Data in useEffect');
        //console.log(data);// Will not reflect change
      } catch (error) {
        showError('Home useEffect fetchData error: ' + error);
      }
    })();
  }, []);

  return (
    <>
      <Image
        src="assets/img/landscape.jpg"
        style={{ width: '100%', height: 'auto' }}
      />
      <Row>
        <Col xs xl="12">
          <div className="text-center">
            <h3>Server-Side Rendering</h3>
            <h3>{data ? data[1]?.name : null}</h3>
          </div>
        </Col>
      </Row>
    </>
  );
}

async function fetchData() {
  //console.log('Inside fetching function');
  const firestore = firebase.firestore();
  let users = [];

  try {
    const snapshot = await firestore.collection('contacts').get();
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
