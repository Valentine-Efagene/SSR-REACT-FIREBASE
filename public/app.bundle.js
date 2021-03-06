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

/***/ "./src/csr/About.jsx":
/*!***************************!*\
  !*** ./src/csr/About.jsx ***!
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

/***/ "./src/csr/Contents.jsx":
/*!******************************!*\
  !*** ./src/csr/Contents.jsx ***!
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
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes.js */ "./src/csr/routes.js");
/* harmony import */ var _wrapPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrapPath.js */ "./src/csr/wrapPath.js");





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

/***/ "./src/csr/CreateArticle.jsx":
/*!***********************************!*\
  !*** ./src/csr/CreateArticle.jsx ***!
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
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withToast.jsx */ "./src/csr/withToast.jsx");







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

/***/ "./src/csr/EmailSignUp.jsx":
/*!*********************************!*\
  !*** ./src/csr/EmailSignUp.jsx ***!
  \*********************************/
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Alert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/ButtonToolbar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Image.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./withToast.jsx */ "./src/csr/withToast.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.js");
/* harmony import */ var _assets_images_home_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/images/home.png */ "./src/assets/images/home.png");
/* harmony import */ var _assets_css_styles_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/css/styles.css */ "./src/assets/css/styles.css");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable react/jsx-one-expression-per-line */

/* eslint-disable func-names */





 //import Spinner from './Spinner.jsx';






 //import img from '../assets/images/logo.svg';
//import './assets/css/styles.css';

function EmailSignUp(props) {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {
    return state.user;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
      valid = _useState4[0],
      setValid = _useState4[1];

  function onChange(event, naturalValue) {
    var _event$target = event.target,
        name = _event$target.name,
        textValue = _event$target.value;
    var prevUser = user;
    var value = naturalValue === undefined ? textValue : naturalValue;
    dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_10__.setUser)(_objectSpread(_objectSpread({}, prevUser), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, name, value))));
  }

  function signOut(_x) {
    return _signOut.apply(this, arguments);
  }

  function _signOut() {
    _signOut = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {
      var showSuccess, showError;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              showSuccess = props.showSuccess, showError = props.showError;
              setLoading(true); //---

              setLoading(false);
              showSuccess('Logged out');

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _signOut.apply(this, arguments);
  }

  function signUpWithEmail(_x2, _x3) {
    return _signUpWithEmail.apply(this, arguments);
  }

  function _signUpWithEmail() {
    _signUpWithEmail = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(email, password) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              firebase__WEBPACK_IMPORTED_MODULE_4__.default.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message; // ...
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _signUpWithEmail.apply(this, arguments);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (user.password === undefined || user.email === undefined || user.password === '' || user.email === '') {
      setValid(false);
    } else {
      setValid(true);
      signUpWithEmail(user.email, user.password);
    }
  }

  firebase__WEBPACK_IMPORTED_MODULE_4__.default.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_10__.setUser)(user));
    } else {
      console.log('Signed out');
    } // ...

  });
  var spinner = null;

  if (loading) {//spinner = <Spinner size={50} />;
  }

  var validationMessage;

  if (!valid) {
    validationMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default, {
      variant: "danger"
    }, "All fields must be filled");
  }

  if ((0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useSelector)(function (state) {
    return state.email;
  })) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
      disabled: false,
      bsStyle: "primary",
      onClick: signOut
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faSignOutAlt
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.default, {
    className: "justify-content-md-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default, {
    className: "col-centered",
    sm: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default.Title, {
    className: "text-center"
  }, "Email Sign Up ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faEnvelope
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_18__.default, {
    horizontal: true,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
    variant: "light",
    style: {
      border: 'none'
    },
    disabled: (user === null || user === void 0 ? void 0 : user.email) !== null,
    onClick: function onClick() {
      setNoAccout(true);
    }
  }, "Want to create an account?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_20__.default, {
    type: "email",
    placeholder: "Email",
    name: "email",
    onChange: onChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_20__.default, {
    name: "password",
    placeholder: "Password",
    type: "password",
    onChange: onChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_21__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
    disabled: false,
    variant: "primary",
    type: "submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faUser
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_22__.default.Link, {
    href: "/forgotpassword"
  }, "Forgot password?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default, {
    className: "col-centered"
  }, validationMessage))), spinner), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_23__.default, {
    className: "footer-image",
    src: _assets_images_home_png__WEBPACK_IMPORTED_MODULE_24__.default
  })))));
}

var EmailSignUpWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_8__.default)(EmailSignUp);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailSignUpWithToast);

/***/ }),

/***/ "./src/csr/Home.jsx":
/*!**************************!*\
  !*** ./src/csr/Home.jsx ***!
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
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./withToast.jsx */ "./src/csr/withToast.jsx");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store.js */ "./src/csr/store.js");








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

/***/ "./src/csr/LogIn.jsx":
/*!***************************!*\
  !*** ./src/csr/LogIn.jsx ***!
  \***************************/
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Image.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.esm.js");
/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ "./node_modules/react-firebaseui/StyledFirebaseAuth.js");
/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withToast.jsx */ "./src/csr/withToast.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.js");


/* eslint-disable react/jsx-one-expression-per-line */

/* eslint-disable func-names */





 //import Spinner from './Spinner.jsx';



 //import img from './assets/images/home.png';
//import './assets/css/styles.css';

function LogIn(props) {
  var img = '';
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    email: (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
      return state.email;
    })
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),
      showValidation = _useState6[0],
      setShowVaidation = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState7, 2),
      noAccount = _useState8[0],
      setNoAccout = _useState8[1];

  var loggedInEmail = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.email;
  });
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function signInSuccessWithAuthResult(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      } //uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      //document.getElementById('loader').style.display = 'none';
      //},

    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    //signInFlow: 'redirect',
    //signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [// Leave the lines as is for the providers you want to offer your users.
    firebase__WEBPACK_IMPORTED_MODULE_3__.default.auth.GoogleAuthProvider.PROVIDER_ID, firebase__WEBPACK_IMPORTED_MODULE_3__.default.auth.FacebookAuthProvider.PROVIDER_ID, firebase__WEBPACK_IMPORTED_MODULE_3__.default.auth.TwitterAuthProvider.PROVIDER_ID, firebase__WEBPACK_IMPORTED_MODULE_3__.default.auth.GithubAuthProvider.PROVIDER_ID, firebase__WEBPACK_IMPORTED_MODULE_3__.default.auth.EmailAuthProvider.PROVIDER_ID, firebase__WEBPACK_IMPORTED_MODULE_3__.default.auth.PhoneAuthProvider.PROVIDER_ID] // Terms of service url.
    //tosUrl: '<your-tos-url>',
    // Privacy policy url.
    //privacyPolicyUrl: '<your-privacy-policy-url>',

  };
  var signInUI;

  if (typeof window !== 'undefined') {
    signInUI = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement((react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_4___default()), {
      uiConfig: uiConfig,
      firebaseAuth: firebase__WEBPACK_IMPORTED_MODULE_3__.default.auth()
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: "justify-content-md-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
    className: "col-centered",
    sm: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default.Title, {
    className: "text-center"
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default.Body, null, signInUI), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_11__.default, {
    className: "footer-image",
    src: img
  })))));
}

var LoginWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_5__.default)(LogIn);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginWithToast);

/***/ }),

/***/ "./src/csr/NotFound.jsx":
/*!******************************!*\
  !*** ./src/csr/NotFound.jsx ***!
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

/***/ "./src/csr/Page.jsx":
/*!**************************!*\
  !*** ./src/csr/Page.jsx ***!
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");
/* harmony import */ var _Contents_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Contents.jsx */ "./src/csr/Contents.jsx");
/* harmony import */ var _wrapPath_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wrapPath.js */ "./src/csr/wrapPath.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* eslint-disable react/jsx-one-expression-per-line */
// import { useState } from 'react';







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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default.Brand, {
    href: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_8__.default)('/home')
  }, "React-Firebase ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
    color: "orange",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faFire
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default.Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default.Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
    className: "mr-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_8__.default)('/home')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_8__.default)('/redux-test')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, "Redux Test")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_8__.default)('/p5-test')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, "P5 Test")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_8__.default)('/about')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, null, "About"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_8__.default)('/create-article')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, null, "Create Article"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_8__.default)('/test')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, null, "Test"))), update, contactAdd)));
}

/***/ }),

/***/ "./src/csr/PhoneSignUp.jsx":
/*!*********************************!*\
  !*** ./src/csr/PhoneSignUp.jsx ***!
  \*********************************/
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Alert.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FormGroup.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/FormControl.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/ButtonToolbar.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Image.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withToast.jsx */ "./src/csr/withToast.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable react/jsx-one-expression-per-line */

/* eslint-disable func-names */



 //import Spinner from './Spinner.jsx';



 //import img from './assets/images/home.png';
//import './assets/css/styles.css';

function PhoneSignUp(props) {
  var img = '';
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    email: (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
      return state.email;
    })
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState5, 2),
      showValidation = _useState6[0],
      setShowVaidation = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState7, 2),
      noAccount = _useState8[0],
      setNoAccout = _useState8[1];

  function onChange(event, naturalValue) {
    var _event$target = event.target,
        name = _event$target.name,
        textValue = _event$target.value;
    var prevUser = user;
    var value = naturalValue === undefined ? textValue : naturalValue;
    setUser(_objectSpread(_objectSpread({}, prevUser), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, name, value)));
  }

  function showValidation() {
    setShowVaidation(true);
  }

  function dismissValidation() {
    setShowVaidation(false);
  }

  function startLoading() {
    setLoading(true);
  }

  function stopLoading() {
    setLoading(false);
  }

  function signOut(_x) {
    return _signOut.apply(this, arguments);
  }

  function _signOut() {
    _signOut = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {
      var showSuccess, showError;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              showSuccess = props.showSuccess, showError = props.showError;
              startLoading();
              dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_8__.logOut)());
              stopLoading();
              showSuccess('Logged out');

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _signOut.apply(this, arguments);
  }

  function signUpWithPhone(_x2, _x3) {
    return _signUpWithPhone.apply(this, arguments);
  }

  function _signUpWithPhone() {
    _signUpWithPhone = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(phone, password) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_8__.logIn)(user.email));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _signUpWithPhone.apply(this, arguments);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (user.phone === undefined || user.password === undefined || user.phone === '' || user.password === '') {
      showValidation();
    } else {
      dismissValidation();
      signUpWithPhone(user.phone, user.password);
    }
  }

  var spinner = null;

  if (loading) {//spinner = <Spinner size={50} />;
  }

  var validationMessage;

  if (showValidation) {
    validationMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
      bsStyle: "danger",
      onClose: dismissValidation
    }, "All fields must be filled");
  }

  var btn = '';

  if ((0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
    return state.email;
  })) {
    btn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
      disabled: false,
      bsStyle: "primary",
      onClick: signOut
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faSignOutAlt
    }));
  } else {
    btn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
      disabled: false,
      bsStyle: "primary",
      type: "submit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faSignInAlt
    }));
  }

  if (noAccount) {
    btn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
      disabled: false,
      variant: "primary",
      onClick: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faUser
    }));
  }

  var loggedInEmail = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
    return state.email;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__.default, {
    className: "justify-content-md-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
    className: "col-centered",
    sm: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default.Title, {
    className: "text-center"
  }, "Phone Sign Up ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.faPhone
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_15__.default, {
    horizontal: true,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
    variant: "light",
    style: {
      border: 'none'
    },
    disabled: loggedInEmail !== null,
    onClick: function onClick() {
      setNoAccout(true);
    }
  }, "Want to create an account?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default, {
    type: "phone",
    placeholder: "+xxx",
    name: "phone",
    onChange: onChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_17__.default, {
    name: "password",
    placeholder: "Password",
    type: "password",
    onChange: onChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_18__.default, null, btn))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_19__.default.Link, {
    href: "/forgotpassword"
  }, "Forgot password?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_16__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_13__.default, {
    className: "col-centered"
  }, validationMessage))), spinner), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_14__.default.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_20__.default, {
    className: "footer-image",
    src: img
  })))));
}

var PhoneSignUpWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_6__.default)(PhoneSignUp);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneSignUpWithToast);

/***/ }),

/***/ "./src/csr/ReduxTest.js":
/*!******************************!*\
  !*** ./src/csr/ReduxTest.js ***!
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
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.js */ "./src/csr/store.js");





function ReduxTest() {
  var _store$session;

  var initialCount = _store_js__WEBPACK_IMPORTED_MODULE_3__.default.count;
  var appVisits = (_store$session = _store_js__WEBPACK_IMPORTED_MODULE_3__.default.session) === null || _store$session === void 0 ? void 0 : _store$session.appVisits;
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
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.decrement)());
    }
  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.increment)());
    }
  }, "+")));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReduxTest);

/***/ }),

/***/ "./src/csr/SignUp.jsx":
/*!****************************!*\
  !*** ./src/csr/SignUp.jsx ***!
  \****************************/
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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Image.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _wrapPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wrapPath.js */ "./src/csr/wrapPath.js");
/* eslint-disable react/jsx-one-expression-per-line */

/* eslint-disable func-names */






function SignUp(props) {
  var img = '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
    className: "justify-content-md-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: "col-centered",
    sm: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Title, {
    className: "text-center"
  }, "Sign Up")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_6__.default)('/signup-email')
  }, "Email Sign Up ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faEnvelope
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
    href: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_6__.default)('/signup-phone')
  }, "Phone Sign Up ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPhone
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Body, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: "footer-image",
    src: img
  })))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

/***/ }),

/***/ "./src/csr/Test.jsx":
/*!**************************!*\
  !*** ./src/csr/Test.jsx ***!
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

/***/ "./src/csr/Toast.jsx":
/*!***************************!*\
  !*** ./src/csr/Toast.jsx ***!
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

/***/ "./src/csr/index.js":
/*!**************************!*\
  !*** ./src/csr/index.js ***!
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
/* harmony import */ var _Page_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Page.jsx */ "./src/csr/Page.jsx");
/* harmony import */ var _firebase_config_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase_config.js */ "./firebase_config.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store.js */ "./src/csr/store.js");













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

var preloadedState = {}; // https://github.com/zalmoxisus/redux-devtools-extension

var reduxStore = (0,redux__WEBPACK_IMPORTED_MODULE_11__.createStore)(_redux_reducers__WEBPACK_IMPORTED_MODULE_6__.default, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
react_dom__WEBPACK_IMPORTED_MODULE_1__.hydrate( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {
  store: reduxStore
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Page_jsx__WEBPACK_IMPORTED_MODULE_8__.default, null)))), document.getElementById('root'));

/***/ }),

/***/ "./src/csr/p5Test.jsx":
/*!****************************!*\
  !*** ./src/csr/p5Test.jsx ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_p5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-p5 */ "./node_modules/react-p5/build/index.js");
/* harmony import */ var react_p5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_p5__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {
  if (typeof window === 'undefined') {
    return null;
  }

  var x = 50;
  var y = 50;

  var setup = function setup(p5, canvasParentRef) {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  var draw = function draw(p5) {
    p5.background(0);
    p5.ellipse(x, y, 70, 70); // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes

    x++;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_p5__WEBPACK_IMPORTED_MODULE_1___default()), {
    setup: setup,
    draw: draw
  });
});

/***/ }),

/***/ "./src/csr/routes.js":
/*!***************************!*\
  !*** ./src/csr/routes.js ***!
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
/* harmony import */ var _NotFound_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound.jsx */ "./src/csr/NotFound.jsx");
/* harmony import */ var _Home_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.jsx */ "./src/csr/Home.jsx");
/* harmony import */ var _About_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.jsx */ "./src/csr/About.jsx");
/* harmony import */ var _Test_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Test.jsx */ "./src/csr/Test.jsx");
/* harmony import */ var _LogIn_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LogIn.jsx */ "./src/csr/LogIn.jsx");
/* harmony import */ var _SignUp_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignUp.jsx */ "./src/csr/SignUp.jsx");
/* harmony import */ var _ReduxTest_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReduxTest.js */ "./src/csr/ReduxTest.js");
/* harmony import */ var _EmailSignUp_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EmailSignUp.jsx */ "./src/csr/EmailSignUp.jsx");
/* harmony import */ var _PhoneSignUp_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PhoneSignUp.jsx */ "./src/csr/PhoneSignUp.jsx");
/* harmony import */ var _p5Test_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./p5Test.jsx */ "./src/csr/p5Test.jsx");
/* harmony import */ var _CreateArticle_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CreateArticle.jsx */ "./src/csr/CreateArticle.jsx");
/* harmony import */ var _wrapPath_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wrapPath.js */ "./src/csr/wrapPath.js");












var routes = [{
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_11__.default)('/home'),
  component: _Home_jsx__WEBPACK_IMPORTED_MODULE_1__.default
}, {
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_11__.default)('/signup'),
  component: _SignUp_jsx__WEBPACK_IMPORTED_MODULE_5__.default
}, {
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_11__.default)('/signup-email'),
  component: _EmailSignUp_jsx__WEBPACK_IMPORTED_MODULE_7__.default
}, {
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_11__.default)('/signup-phone'),
  component: _PhoneSignUp_jsx__WEBPACK_IMPORTED_MODULE_8__.default
}, {
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_11__.default)('/about'),
  component: _About_jsx__WEBPACK_IMPORTED_MODULE_2__.default
}, {
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_11__.default)('/test'),
  component: _Test_jsx__WEBPACK_IMPORTED_MODULE_3__.default
}, {
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_11__.default)('/p5-test'),
  component: _p5Test_jsx__WEBPACK_IMPORTED_MODULE_9__.default
}, {
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_11__.default)('/login'),
  component: _LogIn_jsx__WEBPACK_IMPORTED_MODULE_4__.default
}, {
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_11__.default)('/redux-test'),
  component: _ReduxTest_js__WEBPACK_IMPORTED_MODULE_6__.default
}, {
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_11__.default)('/create-article'),
  component: _CreateArticle_jsx__WEBPACK_IMPORTED_MODULE_10__.default
}, {
  path: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_11__.default)('*'),
  component: _NotFound_jsx__WEBPACK_IMPORTED_MODULE_0__.default
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ "./src/csr/store.js":
/*!**************************!*\
  !*** ./src/csr/store.js ***!
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

/***/ "./src/csr/withToast.jsx":
/*!*******************************!*\
  !*** ./src/csr/withToast.jsx ***!
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
/* harmony import */ var _Toast_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Toast.jsx */ "./src/csr/Toast.jsx");








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

/***/ "./src/csr/wrapPath.js":
/*!*****************************!*\
  !*** ./src/csr/wrapPath.js ***!
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
function wrapPath(path) {
  return path;
}

/***/ }),

/***/ "./src/redux/actions/email.js":
/*!************************************!*\
  !*** ./src/redux/actions/email.js ***!
  \************************************/
/*! namespace exports */
/*! export logIn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export logOut [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logIn": () => /* binding */ logIn,
/* harmony export */   "logOut": () => /* binding */ logOut
/* harmony export */ });
var logIn = function logIn(email) {
  return {
    type: 'LOG_IN',
    payload: email
  };
};

var logOut = function logOut() {
  return {
    type: 'LOG_OUT'
  };
};



/***/ }),

/***/ "./src/redux/actions/index.js":
/*!************************************!*\
  !*** ./src/redux/actions/index.js ***!
  \************************************/
/*! namespace exports */
/*! export decrement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export increment [provided] [no usage info] [missing usage info prevents renaming] */
/*! export logIn [provided] [no usage info] [missing usage info prevents renaming] -> ./src/redux/actions/email.js .logIn */
/*! export logOut [provided] [no usage info] [missing usage info prevents renaming] -> ./src/redux/actions/email.js .logOut */
/*! export setInitialData [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setSession [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setUser [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logIn": () => /* reexport safe */ _email_js__WEBPACK_IMPORTED_MODULE_0__.logIn,
/* harmony export */   "logOut": () => /* reexport safe */ _email_js__WEBPACK_IMPORTED_MODULE_0__.logOut,
/* harmony export */   "increment": () => /* binding */ increment,
/* harmony export */   "decrement": () => /* binding */ decrement,
/* harmony export */   "setInitialData": () => /* binding */ setInitialData,
/* harmony export */   "setUser": () => /* binding */ setUser,
/* harmony export */   "setSession": () => /* binding */ setSession
/* harmony export */ });
/* harmony import */ var _email_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.js */ "./src/redux/actions/email.js");


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

var setUser = function setUser(user) {
  return {
    type: 'SET_USER',
    payload: user
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
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/redux/reducers/user.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session */ "./src/redux/reducers/session.js");






var allReducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  count: _count__WEBPACK_IMPORTED_MODULE_1__.default,
  isLogged: _isLogged__WEBPACK_IMPORTED_MODULE_2__.default,
  initialData: _initialData__WEBPACK_IMPORTED_MODULE_3__.default,
  user: _user__WEBPACK_IMPORTED_MODULE_4__.default,
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

/***/ "./src/redux/reducers/user.js":
/*!************************************!*\
  !*** ./src/redux/reducers/user.js ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_USER':
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userReducer);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css ***!
  \*************************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer-image {\n  height: 30px;\n  width: 30px;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/styles.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;AACb","sourcesContent":[".footer-image {\n  height: 30px;\n  width: 30px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/css/styles.css":
/*!***********************************!*\
  !*** ./src/assets/css/styles.css ***!
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
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/assets/images/home.png":
/*!************************************!*\
  !*** ./src/assets/images/home.png ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAADKCAMAAAC7SK2iAAAA81BMVEX/////yyv/zC//yin1ggv/pQ7/pxP/pAz0gAr/qRf/pQD/ogDyfQv/oQDucQD/1kT7oA/+qQD/zibwkhH6nQz3rTv/yRX+/fr2tAD58+f44sH+rBT3xXb9+/X+9+j+7LX2iA73lAD4kg72qDfxtUL8whn06NX61JP9tTL9sST22Kj98dv9vVH8xGb96sn558z95Lr+0IH/tj/6zof6uVH/1JT4w2z/w17567r+0jX789j6ryz71l701KL715702o373Xj06cD62IH96KP7wEL/1VDswoH/4nzv4czx17f03Zr7z5fru171tCntypHqu2jqs0l3DuMGAAAIaElEQVR4nO2da1vbNgBGazu2ExmPJJhcCAGSJlASIGm4j8G6rmNlLZT//2sm3y1LTkxiW1LQefZtG9N5Xum1JHv0wweBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCARM0D7s0h4CJY4+HX+a0h4EFUY1TVNrY9rDoMGJVqlUwCntYVCge2yrV8AZ7YEUT7tmm1e0E9oDKZ4JcNQr4P013Y6nrs2atIdSNJ899QoY0R5K0Zz66trxO9vYNGdaxY/9gfZgimWv5ptXtM77in0MAvUKOKc9mkIZRdS1Wpv2cIrkMqoOdmkPp0iCgq9okNoh7fEUyIkWMdfe0ymm29Ei5tD9/RxeuwAx18AF7REVxhlAzKH7Du0hFYVb8FpEfUZ7SEVxDlBz6I4dXkfX16M1PNXN1Li6ehzTPKoBAD7TGV6e2AWvocQOr+2arqrq+jX/HtDi5jB25BSza0Bz1Vi7Bz4s+Lg5jD16ihnXVIe1u7YcAdxcUzuRU8yV4aob6/bAvySpa0ZYaodA9TDX7IF/TVRXa3v+P3Bq+OrGgOZAs+eYZA5jv/L+/iQIHbqv1W11s0NWVw3vWXYRVZ+3z2vv3/B1u3VGnO927Cfe31cjGMm31fu3cn3z96KGnQU7RoK69yybIergLunn7NclWVb+KG7gq3OZoO7N7qmpIhj35B/jmMtynaebPXLBa16pNe8MVB3Et/cunrncmBQ9/hWYqUnmqnH3YWRWddTdJL2k8M3lxn7hAkvT7pDUA82PllWtRs11g/CSIjCX639ScFiSPeI21qPat2x1PQxe13XzKP4zQnNZ+ULBYUnOCC0XeFrlgy3HPWKu6/GXFBFzWdrk50LjAVcPItYOSqWtLXvG6xFz3UTfTd1EzGXplp+KxwtejYReKh3Y7oi5roO9yA+IZm73HD/3GZh62GhVGLoTu+Wudt9cNyPvpm5Qc7nxFz2Xt9E9VpPMndAjseshYeyxzKE6NxW/ZySZq6oTeqnUt2NHzHXTv6qKZ85TxY/NRHM3dDd2S0fUde9Uh2UO1f+hbJQatOCjW5eqF7oXO2Kum9f2v0wwl6U6LwfXcyMh82qv7KuXCLGbE7I5RxV/CsjmkdDt2J2mQ9S3E8zlxg1tp5R8UonmSOik2K3eV5loLjf+pu2Uji5IMI+GXiq7D7iQqtX7dks256biw2ebitKPhh7sa3zzau/bZoK5xMtFTfD6ARXXq4h4PPZ55pJUpy2VjgdAMNfhYRUNHY3dmmsuNfh4uu0apNkeD92L3YLa6qLMoTofu/htQDTHQi+Vg9jnmHvqfNxRObdTalzdiov7sVd10zafJy5JfFR8G6h45qTQoXt/q2df2CyY7bY6F7v4iYGbE0P3Y1/QcK76LQ93VPcGNtv9GwpMHca+1UthDp9uPOzizw2CuUWY7tC8DB9w/TTmUoOHjy8uQFxc14mhQ/PyxsHBII05HxV/F1fXY+eWwBz+tfFbOnOJhzuqdg2b7sTQy07ov22nM+ei4r/rmDpppb8tc6i+SVtsMTvxliOudM88beZ2xe8t/m9T5jG21Ikr/a2Z24ud/W8rTrGWw0N/4zrnpeK34+p46J757C3mUuMrbbNFdDux6U44rC6RucTBRc1hvOWwc8tSmdsVz/ou/jD2hRAWur17fXvmPFT8A5I6flhdbrZzUfHnaMvFD6vLm7Nf8ddgXuhLz3Zb/Qttt/l075B9bGwLu0LmsOf+pS03n25NTw59JXNY8WxfSH9HW87Kzpz5u/ipgYR+UM7OnPWKv0TUrSzNWa/4q1AdHtkioa9uzvpFTfjNs46s9EXmadTZfg3RBOFsj670DDJn/aJmDALzaOiZmMMZz/IB5skIzcPQMzJnu+K9w4vz4riXtTnbFe8WvPuVhB96ZuYS0x8TnRieeRh6duYK0xc1Hd03r5bKmZuzXPHNWvAhXD8Hc4Xh70Unhmse3FBka64wXPFPphu5fxeZsbnC8Peil6bur/Q8zBWGK/7C8D7/c0LP3Fxh+I5qZnhfu+aSucLw060NIqEvuoFMrx6aKzKrFT/2Qy/nkznDFT81gy1sPubsqt+bfug5mSuN/2g7JnBleqF75h+zNleYfdPsPNtg6FncRhHNma34bscIQ88jc/sAw+ZFTdt0Pu/Oa527M57NN81j072Wyi9zZive2cH38tjJRNTZvKM6N72VnlvmUJ3N1xCw4J2Vntc6Z7fim7Dg7dBt81Une6K5IrNY8fDwUu1v5Js5nPEsHmDGplktbeRsrjRY/L3bIxOGnrc5m3dUP0yrlLs5mxW/a/ZzfKoF6l9oe+I0K1b+mUNuaYviNEEfZk4Wz9CcxdcQ414RmTO5i5+Wcl/nrjp7/0/zj7ucTixxdfYq/lEpxFwZ/qRtijN6HuY+2+vD1j2Lm/jm0bOSq7k0bJ2z1+8u7auWlJu5pLSuWP6Ve5PXYT7mUHzA+u9UnX4bZm8uKcNnDn6pdvPF77uszCXYbi8sthtOe7elZPhUs9uN5UWOMr6GfZeNOVzkP3n4ZQ0hO4NhWvkF4gPu/sCEJtzirGoOF/nzEx+LHKX7CPtuJfPh8wurW5hFtH+1lKXN4Vzf5afdcL6/zpefJ/6LxcvXt/A0mLPk57Ub63u3NNwn9l2iOGw32qPOhu4RedYniMMtDLfthnNI6rsE82Hrked2w5lgfZe0yH/y3m440+dhfYH5urQbRvO+NZxnDhf589r+KfX2kS7J3G63h/VpNxy45BPM4d6Nza+jsmM6gEueIP7K18l0KZr2FgdrN+5OpsvRfWxF5O29G5OX6/ngHun8Wl+jvVsa4JFuOFSU4drt3dJw+PLr9XV39P7EBQKBQCAQCAQCgUAgEAgEAoFAIFhn/gfeWPgiz7pexwAAAABJRU5ErkJggg==");

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
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			["./src/csr/index.js","vendor"]
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