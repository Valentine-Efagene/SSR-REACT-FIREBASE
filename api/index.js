import firebase_config from '../firebase_config.js';
import * as firebase from '';

const config = firebase_config;

if (window.location.hostname === 'localhost') {
  config = {
    databaseURL: 'http://localhost:9000?ns=emulatorui',
  };
}
