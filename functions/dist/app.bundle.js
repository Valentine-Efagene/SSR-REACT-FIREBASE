/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./firebase_config.js":
/*!****************************!*\
  !*** ./firebase_config.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  apiKey: 'AIzaSyAQZch2fOfKBsdaWpL3KZ_kNFBS_Akn57s',
  authDomain: 'fir-ch2-5cbdb.firebaseapp.com',
  databaseURL: 'https://fir-ch2-5cbdb.firebaseio.com',
  projectId: 'fir-ch2-5cbdb',
  storageBucket: 'fir-ch2-5cbdb.appspot.com',
  messagingSenderId: '758456033077',
  appId: '1:758456033077:web:1765192f057cda6b9bb67c'
});

/***/ }),

/***/ "./src/redux/actions/index.js":
/*!************************************!*\
  !*** ./src/redux/actions/index.js ***!
  \************************************/
/*! namespace exports */
/*! export decrement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export increment [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setInitialData [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setSession [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setUserData [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "increment": () => /* binding */ increment,
/* harmony export */   "decrement": () => /* binding */ decrement,
/* harmony export */   "setInitialData": () => /* binding */ setInitialData,
/* harmony export */   "setUserData": () => /* binding */ setUserData,
/* harmony export */   "setSession": () => /* binding */ setSession
/* harmony export */ });
var increment = function increment(multiple) {
  return {
    type: 'INCREMENT',
    payload: multiple
  };
};
var decrement = function decrement() {
  return {
    type: 'DECREMENT'
  };
};
var setInitialData = function setInitialData(initialData) {
  return {
    type: 'SET_INITIAL_DATA',
    payload: initialData
  };
};
var setUserData = function setUserData(userData) {
  return {
    type: 'SET_USER_DATA',
    payload: userData
  };
};
var setSession = function setSession(session) {
  return {
    type: 'SET_SESSION',
    payload: session
  };
};

/***/ }),

/***/ "./src/redux/reducers/count.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/count.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var countReducer = function countReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INCREMENT':
      return state + (action.payload || 1);

    case 'DECREMENT':
      return state - (action.payload || 1);

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countReducer);

/***/ }),

/***/ "./src/redux/reducers/index.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.js ***!
  \*************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./count */ "./src/redux/reducers/count.js");
/* harmony import */ var _isLogged__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLogged */ "./src/redux/reducers/isLogged.js");
/* harmony import */ var _initialData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initialData */ "./src/redux/reducers/initialData.js");
/* harmony import */ var _userData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./userData */ "./src/redux/reducers/userData.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session */ "./src/redux/reducers/session.js");






var allReducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  count: _count__WEBPACK_IMPORTED_MODULE_1__.default,
  isLogged: _isLogged__WEBPACK_IMPORTED_MODULE_2__.default,
  initialData: _initialData__WEBPACK_IMPORTED_MODULE_3__.default,
  userData: _userData__WEBPACK_IMPORTED_MODULE_4__.default,
  session: _session__WEBPACK_IMPORTED_MODULE_5__.default
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allReducers);

/***/ }),

/***/ "./src/redux/reducers/initialData.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/initialData.js ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var initialDataReducer = function initialDataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_INITIAL_DATA':
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialDataReducer);

/***/ }),

/***/ "./src/redux/reducers/isLogged.js":
/*!****************************************!*\
  !*** ./src/redux/reducers/isLogged.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var loggedReducer = function loggedReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "SIGN_IN":
      return true;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loggedReducer);

/***/ }),

/***/ "./src/redux/reducers/session.js":
/*!***************************************!*\
  !*** ./src/redux/reducers/session.js ***!
  \***************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var sessionReducer = function sessionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_SESSION':
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sessionReducer);

/***/ }),

/***/ "./src/redux/reducers/userData.js":
/*!****************************************!*\
  !*** ./src/redux/reducers/userData.js ***!
  \****************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var userDataReducer = function userDataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_USER_DATA':
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userDataReducer);

/***/ }),

/***/ "./src/ssr/About.jsx":
/*!***************************!*\
  !*** ./src/ssr/About.jsx ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ About
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// npx babel src/About.jsx --out-dir functions/src
 //const React = require('react');

function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "React Server-Side Rendering Demo version 0.9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "API version 1.0"));
}

/***/ }),

/***/ "./src/ssr/Contents.jsx":
/*!******************************!*\
  !*** ./src/ssr/Contents.jsx ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Contents
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes.js */ "./src/ssr/routes.js");
/* harmony import */ var _wrapPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrapPath.js */ "./src/ssr/wrapPath.js");





function Contents() {
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)(); //console.log(location.pathname);

  var test = (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_4__.default)('/');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Redirect, {
    exact: true,
    from: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_4__.default)('/'),
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_4__.default)('/home')
  }), _routes_js__WEBPACK_IMPORTED_MODULE_2__.default.map(function (attrs) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attrs, {
      key: attrs.path
    }));
  }));
}

/***/ }),

/***/ "./src/ssr/CreateArticle.jsx":
/*!***********************************!*\
  !*** ./src/ssr/CreateArticle.jsx ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firebase-database */ "./node_modules/firebase/firebase-database.js");
/* harmony import */ var firebase_firebase_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_firebase_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withToast.jsx */ "./src/ssr/withToast.jsx");







 //import { useSelector, useDispatch } from 'react-redux';
//import { setInitialData } from '../redux/actions';



function CreateArticle(props) {
  var showSuccess = props.showSuccess,
      showError = props.showError;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1];

  firebase_app__WEBPACK_IMPORTED_MODULE_2__.default.auth().signInAnonymously().catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message; // ...
  });
  firebase_app__WEBPACK_IMPORTED_MODULE_2__.default.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      console.log('Anonymous ID: ');
      console.log(uid); // ...
    } else {
      console.log('Signed out');
    } // ...

  });

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var firestore = firebase_app__WEBPACK_IMPORTED_MODULE_2__.default.firestore();
    firestore.collection('text').add({
      text: text
    }).then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    }).catch(function (error) {
      console.error('Error adding document: ', error);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Create An Article"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: "justify-content-md-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
    xs: true,
    lg: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
    controlId: "createArticle.ControlInput1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default.Label, null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default.Control, {
    type: "text",
    placeholder: "Title",
    onChange: function onChange(event) {
      setTitle(event.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default.Group, {
    controlId: "createArticle.ControlTextarea1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default.Label, null, "Text"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default.Control, {
    as: "textarea",
    rows: 6,
    placeholder: "Write with love",
    onChange: function onChange(event) {
      setText(event.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
    variant: "primary",
    type: "submit"
  }, "Post"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
    xs: true,
    lg: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", null, "Preview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h5", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    style: {
      background: 'beige',
      wordBreak: 'break-all',
      textAlign: 'left',
      whiteSpace: 'pre-line'
    }
  }, text))))));
}

var CreateArticleWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_6__.default)(CreateArticle);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateArticleWithToast);

/***/ }),

/***/ "./src/ssr/Home.jsx":
/*!**************************!*\
  !*** ./src/ssr/Home.jsx ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_firebase_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firebase-database */ "./node_modules/firebase/firebase-database.js");
/* harmony import */ var firebase_firebase_database__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_firebase_database__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./withToast.jsx */ "./src/ssr/withToast.jsx");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store.js */ "./src/ssr/store.js");








 //import { useSelector, useDispatch } from 'react-redux';
//import { setInitialData } from '../redux/actions';




function Home(props) {
  var _data$;

  var showSuccess = props.showSuccess,
      showError = props.showError;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_store_js__WEBPACK_IMPORTED_MODULE_9__.default.initialData ? _store_js__WEBPACK_IMPORTED_MODULE_9__.default.initialData : null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1]; // Only gets called after rendering; so, won't be called in server-side code


  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var fetchedData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!data) {
                _context.next = 5;
                break;
              }

              _context.t0 = data;
              _context.next = 8;
              break;

            case 5:
              _context.next = 7;
              return fetchData();

            case 7:
              _context.t0 = _context.sent;

            case 8:
              fetchedData = _context.t0;
              setData(fetchedData); //console.log('Fetched: Data in useEffect');
              //console.log(data);// Will not reflect change

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t1 = _context["catch"](0);
              showError('Home useEffect fetchData error: ' + _context.t1);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 12]]);
    }))();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h3", null, "Server-Side Rendering"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("h3", null, data ? (_data$ = data[1]) === null || _data$ === void 0 ? void 0 : _data$.name : null)));
}

function fetchData() {
  return _fetchData.apply(this, arguments);
}

function _fetchData() {
  _fetchData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
    var firestore, users, snapshot;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            //console.log('Inside fetching function');
            firestore = firebase_app__WEBPACK_IMPORTED_MODULE_4__.default.firestore();
            users = [];
            _context2.prev = 2;
            _context2.next = 5;
            return firestore.collection('contacts').get();

          case 5:
            snapshot = _context2.sent;
            snapshot.forEach(function (doc) {
              users.push(doc.data());
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](2);
            showError('Home Snapshot error: ' + _context2.t0);

          case 12:
            return _context2.abrupt("return", users);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 9]]);
  }));
  return _fetchData.apply(this, arguments);
}

var HomeWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_8__.default)(Home);
HomeWithToast.fetchData = fetchData;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeWithToast);

/***/ }),

/***/ "./src/ssr/NotFound.jsx":
/*!******************************!*\
  !*** ./src/ssr/NotFound.jsx ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Page Not Found");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ }),

/***/ "./src/ssr/Page.jsx":
/*!**************************!*\
  !*** ./src/ssr/Page.jsx ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Page
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/NavLink.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/NavItem.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");
/* harmony import */ var _Contents_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contents.jsx */ "./src/ssr/Contents.jsx");
/* harmony import */ var _wrapPath_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrapPath.js */ "./src/ssr/wrapPath.js");
/* eslint-disable react/jsx-one-expression-per-line */
// import { useState } from 'react';





var testInPage = (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_3__.default)('/');
function Page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavBar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Contents_jsx__WEBPACK_IMPORTED_MODULE_2__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Footer, null));
}

function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-center"
  }, "Full source code available at this", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://github.com/Valentine-Efagene/MERN"
  }, "Github repository")));
}

function NavBar(_ref) {
  var user = _ref.user;
  var contactAdd = '';
  var update = '';
  var isLogged = false;

  if (isLogged) {
    update = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
      to: "/update"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, "Update Details"));
  }

  if (user) {
    contactAdd = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
      to: "/ContactAdd"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, null, "Add Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
      fluid: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Contents_jsx__WEBPACK_IMPORTED_MODULE_2__.default, null)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
    bg: "light",
    expand: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default.Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default.Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: "mr-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_3__.default)('/home')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_3__.default)('/redux-test')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, "Redux Test")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_3__.default)('/about')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, null, "About"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_3__.default)('/create-article')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, null, "Create Article"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_3__.default)('/test')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, null, "Test"))), update, contactAdd)));
}

/***/ }),

/***/ "./src/ssr/ReduxTest.js":
/*!******************************!*\
  !*** ./src/ssr/ReduxTest.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store.js */ "./src/ssr/store.js");





function ReduxTest() {
  var _store$session;

  var initialCount = _store_js__WEBPACK_IMPORTED_MODULE_2__.default.count;
  var appVisits = (_store$session = _store_js__WEBPACK_IMPORTED_MODULE_2__.default.session) === null || _store$session === void 0 ? void 0 : _store$session.appVisits;
  var count;

  if (typeof window === 'undefined') {
    count = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function () {
      return initialCount;
    });
  } else {
    count = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
      return state.count;
    });
  } //const initialData = useSelector((state) => state.initialData);


  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "You have visited this app ", appVisits, ' ', appVisits === 1 ? 'time' : 'times', "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Counter ", count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.decrement)());
    }
  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_3__.increment)());
    }
  }, "+")));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReduxTest);

/***/ }),

/***/ "./src/ssr/Test.jsx":
/*!**************************!*\
  !*** ./src/ssr/Test.jsx ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Example
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Toast.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");




function Example() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      showA = _useState2[0],
      setShowA = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      showB = _useState4[0],
      setShowB = _useState4[1];

  var toggleShowA = function toggleShowA() {
    return setShowA(!showA);
  };

  var toggleShowB = function toggleShowB() {
    return setShowB(!showB);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
    show: showA,
    onClose: toggleShowA
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    src: "holder.js/20x20?text=%20",
    className: "rounded mr-2",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("strong", {
    className: "mr-auto"
  }, "Bootstrap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("small", null, "11 mins ago")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Body, null, "Woohoo, you're reading this text in a Toast!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
    onClick: toggleShowA
  }, "Toggle Toast ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("strong", null, "with"), " Animation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
    xs: 6,
    className: "my-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
    onClose: toggleShowB,
    show: showB,
    animation: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    src: "holder.js/20x20?text=%20",
    className: "rounded mr-2",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("strong", {
    className: "mr-auto"
  }, "Bootstrap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("small", null, "11 mins ago")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Body, null, "Woohoo, you're reading this text in a Toast!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
    onClick: toggleShowB
  }, "Toggle Toast ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("strong", null, "without"), " Animation")));
}

/***/ }),

/***/ "./src/ssr/Toast.jsx":
/*!***************************!*\
  !*** ./src/ssr/Toast.jsx ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Toast
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Collapse.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Alert.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Toast = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Toast, _React$Component);

  var _super = _createSuper(Toast);

  function Toast() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Toast);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Toast, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props = this.props,
          showing = _this$props.showing,
          onDismiss = _this$props.onDismiss;

      if (showing) {
        clearTimeout(this.dismissTimer);
        this.dismissTimer = setTimeout(onDismiss, 5000);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.dismissTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          showing = _this$props2.showing,
          bsStyle = _this$props2.bsStyle,
          onDismiss = _this$props2.onDismiss,
          children = _this$props2.children;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
        in: showing
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement("div", {
        style: {
          position: 'fixed',
          bottom: 20,
          left: 20
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
        bsStyle: bsStyle,
        onDismiss: onDismiss
      }, children)));
    }
  }]);

  return Toast;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);



/***/ }),

/***/ "./src/ssr/index.js":
/*!**************************!*\
  !*** ./src/ssr/index.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firebase-database */ "./node_modules/firebase/firebase-database.js");
/* harmony import */ var firebase_firebase_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_firebase_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers */ "./src/redux/reducers/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Page_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Page.jsx */ "./src/ssr/Page.jsx");
/* harmony import */ var _firebase_config_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase_config.js */ "./firebase_config.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store.js */ "./src/ssr/store.js");













var config = _firebase_config_js__WEBPACK_IMPORTED_MODULE_9__.default;

if ( true && typeof window !== 'undefined') {
  if (window.location.hostname === 'localhost') {
    delete config.databaseURL;
    delete config.authDomain;
    delete config.storageBucket;

    if (firebase_app__WEBPACK_IMPORTED_MODULE_2__.default.apps.length == 0) {
      firebase_app__WEBPACK_IMPORTED_MODULE_2__.default.initializeApp(config);
      firebase_app__WEBPACK_IMPORTED_MODULE_2__.default.auth().useEmulator('http://localhost:9099/');
      firebase_app__WEBPACK_IMPORTED_MODULE_2__.default.database().useEmulator('localhost', 9000);
      firebase_app__WEBPACK_IMPORTED_MODULE_2__.default.firestore().useEmulator('localhost', 8080);
    }
  } else {
    if (firebase_app__WEBPACK_IMPORTED_MODULE_2__.default.apps.length == 0) {
      firebase_app__WEBPACK_IMPORTED_MODULE_2__.default.initializeApp(config);
    }
  }
}

var preloadedState = window.__PRELOADED_STATE__;
_store_js__WEBPACK_IMPORTED_MODULE_10__.default.initialData = preloadedState.initialData;
_store_js__WEBPACK_IMPORTED_MODULE_10__.default.count = preloadedState.count;
_store_js__WEBPACK_IMPORTED_MODULE_10__.default.session = preloadedState.session;
delete window.__PRELOADED_STATE__; // https://github.com/zalmoxisus/redux-devtools-extension

var reduxStore = (0,redux__WEBPACK_IMPORTED_MODULE_11__.createStore)(_redux_reducers__WEBPACK_IMPORTED_MODULE_6__.default, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
react_dom__WEBPACK_IMPORTED_MODULE_1__.hydrate( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {
  store: reduxStore
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Page_jsx__WEBPACK_IMPORTED_MODULE_8__.default, null)))), document.getElementById('root'));

/***/ }),

/***/ "./src/ssr/routes.js":
/*!***************************!*\
  !*** ./src/ssr/routes.js ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _NotFound_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound.jsx */ "./src/ssr/NotFound.jsx");
/* harmony import */ var _Home_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.jsx */ "./src/ssr/Home.jsx");
/* harmony import */ var _About_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.jsx */ "./src/ssr/About.jsx");
/* harmony import */ var _Test_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Test.jsx */ "./src/ssr/Test.jsx");
/* harmony import */ var _ReduxTest_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReduxTest.js */ "./src/ssr/ReduxTest.js");
/* harmony import */ var _CreateArticle_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CreateArticle.jsx */ "./src/ssr/CreateArticle.jsx");
/* harmony import */ var _wrapPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wrapPath.js */ "./src/ssr/wrapPath.js");







var routes = [{
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_6__.default)('/home'),
  component: _Home_jsx__WEBPACK_IMPORTED_MODULE_1__.default
}, {
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_6__.default)('/about'),
  component: _About_jsx__WEBPACK_IMPORTED_MODULE_2__.default
}, {
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_6__.default)('/test'),
  component: _Test_jsx__WEBPACK_IMPORTED_MODULE_3__.default
}, {
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_6__.default)('/redux-test'),
  component: _ReduxTest_js__WEBPACK_IMPORTED_MODULE_4__.default
}, {
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_6__.default)('/create-article'),
  component: _CreateArticle_jsx__WEBPACK_IMPORTED_MODULE_5__.default
}, {
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_6__.default)('*'),
  component: _NotFound_jsx__WEBPACK_IMPORTED_MODULE_0__.default
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./src/ssr/store.js":
/*!**************************!*\
  !*** ./src/ssr/store.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var store = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/ssr/withToast.jsx":
/*!*******************************!*\
  !*** ./src/ssr/withToast.jsx ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ withToast
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Toast_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Toast.jsx */ "./src/ssr/Toast.jsx");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



function withToast(OriginalComponent) {
  return /*#__PURE__*/function (_React$Component) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ToastWrapper, _React$Component);

    var _super = _createSuper(ToastWrapper);

    function ToastWrapper(props) {
      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ToastWrapper);

      _this = _super.call(this, props);
      _this.state = {
        toastVisible: false,
        toastMessage: '',
        toastType: 'success'
      };
      _this.showSuccess = _this.showSuccess.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.showError = _this.showError.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      _this.dismissToast = _this.dismissToast.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
      return _this;
    }

    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ToastWrapper, [{
      key: "showSuccess",
      value: function showSuccess(message) {
        this.setState({
          toastVisible: true,
          toastMessage: message,
          toastType: 'success'
        });
      }
    }, {
      key: "showError",
      value: function showError(message) {
        this.setState({
          toastVisible: true,
          toastMessage: message,
          toastType: 'danger'
        });
      }
    }, {
      key: "dismissToast",
      value: function dismissToast() {
        this.setState({
          toastVisible: false
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            toastType = _this$state.toastType,
            toastVisible = _this$state.toastVisible,
            toastMessage = _this$state.toastMessage;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(OriginalComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          showError: this.showError,
          showSuccess: this.showSuccess,
          dismissToast: this.dismissToast
        }, this.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_Toast_jsx__WEBPACK_IMPORTED_MODULE_8__.default, {
          bsStyle: toastType,
          showing: toastVisible,
          onDismiss: this.dismissToast
        }, toastMessage));
      }
    }]);

    return ToastWrapper;
  }(react__WEBPACK_IMPORTED_MODULE_7__.Component);
}

/***/ }),

/***/ "./src/ssr/wrapPath.js":
/*!*****************************!*\
  !*** ./src/ssr/wrapPath.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ wrapPath
/* harmony export */ });
//const appendedPath = '/ssr';
var appendedPath = '/fir-ch2-5cbdb/us-central1/ssr';
function wrapPath(path) {
  return "".concat(appendedPath).concat(path); // Use this when you want to deploy functions live
  // Use on localhost

  /*if (__isFirebaseSSR__) {
    return `/fir-ch2-5cbdb/us-central1/ssr${path}`; 
  } else {
    return path;
  }*/
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/ssr/index.js","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkssr_react_firebase"] = self["webpackChunkssr_react_firebase"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=app.bundle.js.map