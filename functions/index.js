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

/***/ "./node_modules/react-loadable/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-loadable/lib/index.js ***!
  \**************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__, __webpack_require__.m, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = __webpack_require__(/*! react */ "react");

var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];

function isWebpackReady(getModuleIds) {
  if (( false ? 0 : _typeof(__webpack_require__.m)) !== "object") {
    return false;
  }

  return getModuleIds().every(function (moduleId) {
    return typeof moduleId !== "undefined" && typeof __webpack_require__.m[moduleId] !== "undefined";
  });
}

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  }).catch(function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function loadMap(obj) {
  var state = {
    loading: false,
    loaded: {},
    error: null
  };
  var promises = [];

  try {
    Object.keys(obj).forEach(function (key) {
      var result = load(obj[key]);

      if (!result.loading) {
        state.loaded[key] = result.loaded;
        state.error = result.error;
      } else {
        state.loading = true;
      }

      promises.push(result.promise);
      result.promise.then(function (res) {
        state.loaded[key] = res;
      }).catch(function (err) {
        state.error = err;
      });
    });
  } catch (err) {
    state.error = err;
  }

  state.promise = Promise.all(promises).then(function (res) {
    state.loading = false;
    return res;
  }).catch(function (err) {
    state.loading = false;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

function render(loaded, props) {
  return React.createElement(resolve(loaded), props);
}

function createLoadableComponent(loadFn, options) {
  var _class, _temp;

  if (!options.loading) {
    throw new Error("react-loadable requires a `loading` component");
  }

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    render: render,
    webpack: null,
    modules: null
  }, options);
  var res = null;

  function init() {
    if (!res) {
      res = loadFn(opts.loader);
    }

    return res.promise;
  }

  ALL_INITIALIZERS.push(init);

  if (typeof opts.webpack === "function") {
    READY_INITIALIZERS.push(function () {
      if (isWebpackReady(opts.webpack)) {
        return init();
      }
    });
  }

  return _temp = _class = function (_React$Component) {
    _inherits(LoadableComponent, _React$Component);

    function LoadableComponent(props) {
      _classCallCheck(this, LoadableComponent);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.retry = function () {
        _this.setState({
          error: null,
          loading: true,
          timedOut: false
        });

        res = loadFn(opts.loader);

        _this._loadModule();
      };

      init();
      _this.state = {
        error: res.error,
        pastDelay: false,
        timedOut: false,
        loading: res.loading,
        loaded: res.loaded
      };
      return _this;
    }

    LoadableComponent.preload = function preload() {
      return init();
    };

    LoadableComponent.prototype.componentWillMount = function componentWillMount() {
      this._mounted = true;

      this._loadModule();
    };

    LoadableComponent.prototype._loadModule = function _loadModule() {
      var _this2 = this;

      if (this.context.loadable && Array.isArray(opts.modules)) {
        opts.modules.forEach(function (moduleName) {
          _this2.context.loadable.report(moduleName);
        });
      }

      if (!res.loading) {
        return;
      }

      if (typeof opts.delay === "number") {
        if (opts.delay === 0) {
          this.setState({
            pastDelay: true
          });
        } else {
          this._delay = setTimeout(function () {
            _this2.setState({
              pastDelay: true
            });
          }, opts.delay);
        }
      }

      if (typeof opts.timeout === "number") {
        this._timeout = setTimeout(function () {
          _this2.setState({
            timedOut: true
          });
        }, opts.timeout);
      }

      var update = function update() {
        if (!_this2._mounted) {
          return;
        }

        _this2.setState({
          error: res.error,
          loaded: res.loaded,
          loading: res.loading
        });

        _this2._clearTimeouts();
      };

      res.promise.then(function () {
        update();
      }).catch(function (err) {
        update();
      });
    };

    LoadableComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this._mounted = false;

      this._clearTimeouts();
    };

    LoadableComponent.prototype._clearTimeouts = function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    };

    LoadableComponent.prototype.render = function render() {
      if (this.state.loading || this.state.error) {
        return React.createElement(opts.loading, {
          isLoading: this.state.loading,
          pastDelay: this.state.pastDelay,
          timedOut: this.state.timedOut,
          error: this.state.error,
          retry: this.retry
        });
      } else if (this.state.loaded) {
        return opts.render(this.state.loaded, this.props);
      } else {
        return null;
      }
    };

    return LoadableComponent;
  }(React.Component), _class.contextTypes = {
    loadable: PropTypes.shape({
      report: PropTypes.func.isRequired
    })
  }, _temp;
}

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

function LoadableMap(opts) {
  if (typeof opts.render !== "function") {
    throw new Error("LoadableMap requires a `render(loaded, props)` function");
  }

  return createLoadableComponent(loadMap, opts);
}

Loadable.Map = LoadableMap;

var Capture = function (_React$Component2) {
  _inherits(Capture, _React$Component2);

  function Capture() {
    _classCallCheck(this, Capture);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Capture.prototype.getChildContext = function getChildContext() {
    return {
      loadable: {
        report: this.props.report
      }
    };
  };

  Capture.prototype.render = function render() {
    return React.Children.only(this.props.children);
  };

  return Capture;
}(React.Component);

Capture.propTypes = {
  report: PropTypes.func.isRequired
};
Capture.childContextTypes = {
  loadable: PropTypes.shape({
    report: PropTypes.func.isRequired
  }).isRequired
};
Loadable.Capture = Capture;

function flushInitializers(initializers) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init());
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolve, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolve, reject);
  });
};

Loadable.preloadReady = function () {
  return new Promise(function (resolve, reject) {
    // We always will resolve, errors should be handled within loading UIs.
    flushInitializers(READY_INITIALIZERS).then(resolve, resolve);
  });
};

module.exports = Loadable;

/***/ }),

/***/ "./servers/firebase_server/render.jsx":
/*!********************************************!*\
  !*** ./servers/firebase_server/render.jsx ***!
  \********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase_firebase_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/firebase-database */ "firebase/firebase-database");
/* harmony import */ var firebase_firebase_database__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_firebase_database__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _firebase_config_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase_config.js */ "./firebase_config.js");
/* harmony import */ var _src_ssr_Page_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/ssr/Page.jsx */ "./src/ssr/Page.jsx");
/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./template.js */ "./servers/firebase_server/template.js");
/* harmony import */ var _src_ssr_routes_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/ssr/routes.js */ "./src/ssr/routes.js");
/* harmony import */ var _src_redux_reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/redux/reducers */ "./src/redux/reducers/index.js");
/* harmony import */ var _src_ssr_wrapPath_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../src/ssr/wrapPath.js */ "./src/ssr/wrapPath.js");
/* harmony import */ var _src_ssr_store_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/ssr/store.js */ "./src/ssr/store.js");

















async function render(req, res) {
  const context = {};
  let initialData;
  let userData;
  const session = req.session;
  console.log('Session: ' + session);
  console.log('Session App Visits: ' + session.appVisits);
  console.log('Session id: ' + session.id);

  if (session.appVisits) {
    session.appVisits++;
  } else {
    session.appVisits = 1;
  }

  console.log('Session App Visits: ' + session.appVisits);
  const requestUrl = (0,_src_ssr_wrapPath_js__WEBPACK_IMPORTED_MODULE_15__.default)(req.url);
  const requestPath = (0,_src_ssr_wrapPath_js__WEBPACK_IMPORTED_MODULE_15__.default)(req.path);
  const activeRoute = _src_ssr_routes_js__WEBPACK_IMPORTED_MODULE_12__.default.find(route => (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.matchPath)(requestPath, route));
  let config = _firebase_config_js__WEBPACK_IMPORTED_MODULE_9__.default;
  console.log('Hostname: ' + req.hostname);

  if (req.hostname === 'localhost') {
    delete config.databaseURL;
    delete config.authDomain;
    delete config.storageBucket;
    console.log('Using emulator settings in server side code');

    if ((firebase_app__WEBPACK_IMPORTED_MODULE_5___default().apps.length) == 0) {
      firebase_app__WEBPACK_IMPORTED_MODULE_5___default().initializeApp(config);
      firebase_app__WEBPACK_IMPORTED_MODULE_5___default().auth().useEmulator('http://localhost:9099/');
      firebase_app__WEBPACK_IMPORTED_MODULE_5___default().database().useEmulator('localhost', 9000);
      firebase_app__WEBPACK_IMPORTED_MODULE_5___default().firestore().useEmulator('localhost', 8080);
    }
  } else if ((firebase_app__WEBPACK_IMPORTED_MODULE_5___default().apps.length) == 0) {
    firebase_app__WEBPACK_IMPORTED_MODULE_5___default().initializeApp(config);
  }

  console.log('Active route : ');
  console.log(activeRoute);

  if (activeRoute && activeRoute.component.fetchData) {
    console.log('ActiveRoute and fetchData exist');
    const match = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.matchPath)(requestUrl, activeRoute);
    const index = requestUrl.indexOf('?');
    const search = index !== -1 ? requestUrl.substr(index) : null;

    try {
      const dbData = await activeRoute.component.fetchData(match, search, req.hostname);
      console.log('Database data from server: ');
      console.log(dbData);
      initialData = dbData;
    } catch (error) {
      console.log('Fetch Error: ' + error.message);
    }
  }

  const reduxStore = (0,redux__WEBPACK_IMPORTED_MODULE_3__.createStore)(_src_redux_reducers__WEBPACK_IMPORTED_MODULE_13__.default); // const preloadedState = reduxStore.getState();

  const preloadedState = {
    count: 9,
    isLogged: false,
    initialData,
    userData,
    session
  };
  _src_ssr_store_js__WEBPACK_IMPORTED_MODULE_14__.default.initialData = preloadedState.initialData;
  _src_ssr_store_js__WEBPACK_IMPORTED_MODULE_14__.default.count = preloadedState.count;
  _src_ssr_store_js__WEBPACK_IMPORTED_MODULE_14__.default.session = session;
  const element = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    store: reduxStore
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.StaticRouter, {
    location: requestUrl,
    context: context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_src_ssr_Page_jsx__WEBPACK_IMPORTED_MODULE_10__.default, null)));
  const body = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)(element);

  if (context.url) {
    console.log('context URL: ' + context.url);
    res.redirect(301, context.url);
  } else {
    console.log('No context URL');
    res.send((0,_template_js__WEBPACK_IMPORTED_MODULE_11__.default)(body, preloadedState));
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./servers/firebase_server/server.js":
/*!*******************************************!*\
  !*** ./servers/firebase_server/server.js ***!
  \*******************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase-functions */ "firebase-functions");
/* harmony import */ var firebase_functions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_functions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ssr_server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ssr_server.js */ "./servers/firebase_server/ssr_server.js");
/* harmony import */ var _session_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../session_test */ "./servers/session_test.js");





/*const csrApp = express();
csrApp.use(express.static(path.resolve(__dirname, 'dist/csr'))); // Tells where to load static resources like bundle.js from
csrApp.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/csr/index.html'));
});
exports.csr = functions.https.onRequest(csrApp);*/

exports.ssr = firebase_functions__WEBPACK_IMPORTED_MODULE_1__.https.onRequest(_ssr_server_js__WEBPACK_IMPORTED_MODULE_3__.default);
exports.sessiontest = firebase_functions__WEBPACK_IMPORTED_MODULE_1__.https.onRequest(_session_test__WEBPACK_IMPORTED_MODULE_4__.default); // // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = firebase_functions__WEBPACK_IMPORTED_MODULE_1__.https.onRequest((request, response) => {
  firebase_functions__WEBPACK_IMPORTED_MODULE_1__.logger.info('Hello logs!', {
    structuredData: true
  });
  response.send('Hello from Firebase!');
});
exports.bigben = firebase_functions__WEBPACK_IMPORTED_MODULE_1__.https.onRequest((req, res) => {
  const hours = new Date().getHours() % 12 + 1; // London is UTC + 1hr;

  res.status(200).send(`<!doctype html>
    <head>
      <title>Time</title>
    </head>
    <body>
      ${'BONG '.repeat(hours)}
    </body>
  </html>`);
});

/***/ }),

/***/ "./servers/firebase_server/ssr_server.js":
/*!***********************************************!*\
  !*** ./servers/firebase_server/ssr_server.js ***!
  \***********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _render_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./render.jsx */ "./servers/firebase_server/render.jsx");





dotenv__WEBPACK_IMPORTED_MODULE_3___default().config();
const secret = 'nskjdvnskj';
console.log('Secret: ' + secret);
const app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(express__WEBPACK_IMPORTED_MODULE_1___default().static(path__WEBPACK_IMPORTED_MODULE_0___default().resolve(__dirname, 'dist'))); // MaxAge is in milliseconds

app.use(express_session__WEBPACK_IMPORTED_MODULE_2___default()({
  secret: 'keyboard cat',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
})); // Placing the static middleware between the session middleware initializasion
// and the get request (right here) caused the sessions not to save.

app.get('*', _render_jsx__WEBPACK_IMPORTED_MODULE_4__.default);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./servers/firebase_server/template.js":
/*!*********************************************!*\
  !*** ./servers/firebase_server/template.js ***!
  \*********************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ template
/* harmony export */ });
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");
/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__);


function template(body, preloadedState) {
  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Server-side Rendering</title>
        <style type="text/css">${_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__.dom.css()}</style>
        <link rel="stylesheet" href="assets/css/styles.css" >
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" >
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <div id="root">${body}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serialize_javascript__WEBPACK_IMPORTED_MODULE_0___default()(preloadedState)}
        </script>
        <script type="text/javascript" src="app.bundle.js"></script>
        <script type="text/javascript" src="vendor.bundle.js"></script>
      </body>
    </html>
  `;
}

/***/ }),

/***/ "./servers/session_test.js":
/*!*********************************!*\
  !*** ./servers/session_test.js ***!
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
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_1__);


const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(express_session__WEBPACK_IMPORTED_MODULE_1___default()({
  secret: 'keyboard cat',
  cookie: {
    maxAge: 2 * 60 * 1000
  }
})); // Access the session as req.session

app.get('/', function (req, res, next) {
  if (req.session.views) {
    req.session.views++;
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>views: ' + req.session.views + '</p>');
    res.write('<p>expires in: ' + req.session.cookie.maxAge / 1000 + 's</p>');
    res.end();
  } else {
    req.session.views = 1;
    res.end('welcome to the session demo. refresh!');
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

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
const logIn = email => {
  return {
    type: 'LOG_IN',
    payload: email
  };
};

const logOut = () => {
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


const increment = multiple => {
  return {
    type: 'INCREMENT',
    payload: multiple
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

const setInitialData = initialData => {
  return {
    type: 'SET_INITIAL_DATA',
    payload: initialData
  };
};

const setUser = user => {
  return {
    type: 'SET_USER',
    payload: user
  };
};

const setSession = session => {
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
const countReducer = (state = 0, action) => {
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
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./count */ "./src/redux/reducers/count.js");
/* harmony import */ var _isLogged__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isLogged */ "./src/redux/reducers/isLogged.js");
/* harmony import */ var _initialData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initialData */ "./src/redux/reducers/initialData.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/redux/reducers/user.js");
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./session */ "./src/redux/reducers/session.js");






const allReducers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
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
const initialDataReducer = (state = {}, action) => {
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
const loggedReducer = (state = false, action) => {
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
const sessionReducer = (state = {}, action) => {
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
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;

    default:
      return state;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userReducer);

/***/ }),

/***/ "./src/ssr/About.jsx":
/*!***************************!*\
  !*** ./src/ssr/About.jsx ***!
  \***************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ About
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// npx babel src/About.jsx --out-dir functions/src
 //const React = require('react');

function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "React Server-Side Rendering Demo version 0.9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "API version 1.0"));
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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes.js */ "./src/ssr/routes.js");
/* harmony import */ var _wrapPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrapPath.js */ "./src/ssr/wrapPath.js");





function Contents() {
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)(); //console.log(location.pathname);

  const test = (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_4__.default)('/');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
    exact: true,
    from: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_4__.default)('/'),
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_4__.default)('/home')
  }), _routes_js__WEBPACK_IMPORTED_MODULE_3__.default.map(attrs => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, attrs, {
    key: attrs.path
  }))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_firebase_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firebase-database */ "firebase/firebase-database");
/* harmony import */ var firebase_firebase_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_firebase_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withToast.jsx */ "./src/ssr/withToast.jsx");






 //import { useSelector, useDispatch } from 'react-redux';
//import { setInitialData } from '../redux/actions';


let currentTextPos = 0;
let currentImgPos = 0;

function CreateArticle(props) {
  const {
    showSuccess,
    showError
  } = props;
  const [imgSrc, setImgSrc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [sequence, setSequence] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [imgDim, setImgDim] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  let textArea = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control, {
    as: "textarea",
    rows: 6,
    placeholder: "Write with love",
    onBlur: event => {
      let t = text;
      t.push(event.target.value);
      setText(t);
      let s = sequence;
      setSequence(s += '0');
      event.target.value = '';
    }
  });
  let textPos = 0;
  let imgPos = 0;
  let article = [...sequence].map(c => {
    if (c === '0') {
      let val = text[textPos];
      let ret = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        style: {
          background: 'beige',
          wordBreak: 'break-all',
          textAlign: 'left',
          whiteSpace: 'pre-line'
        },
        onClick: () => {
          currentTextPos = textPos;
          textArea.value = text[currentTextPos];
        }
      }, val);
      textPos++;
      return ret;
    } else {
      var _imgDim$imgPos, _imgDim$imgPos2;

      let ret = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Figure, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Figure.Image, {
        width: (_imgDim$imgPos = imgDim[imgPos]) === null || _imgDim$imgPos === void 0 ? void 0 : _imgDim$imgPos.width,
        height: (_imgDim$imgPos2 = imgDim[imgPos]) === null || _imgDim$imgPos2 === void 0 ? void 0 : _imgDim$imgPos2.height,
        alt: "171x180",
        src: imgSrc[imgPos],
        onClick: () => {
          currentImgPos = imgPos;
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Figure.Caption, null, "Nulla vitae elit libero, a pharetra augue mollis interdum."));
      imgPos++;
      return ret;
    }
  });
  firebase_app__WEBPACK_IMPORTED_MODULE_1___default().auth().signInAnonymously().catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message; // ...
  });
  firebase_app__WEBPACK_IMPORTED_MODULE_1___default().auth().onAuthStateChanged(function (user) {
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

  const handleSubmit = event => {
    event.preventDefault();
    const firestore = firebase_app__WEBPACK_IMPORTED_MODULE_1___default().firestore();
    firestore.collection('text').add({
      text
    }).then(function (docRef) {
      console.log('Document written with ID: ', docRef.id);
    }).catch(function (error) {
      console.error('Error adding document: ', error);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Container, {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Create An Article"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
    className: "justify-content-md-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    xs: true,
    lg: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form, {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
    controlId: "createArticle.ControlInput1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, null, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Control, {
    type: "text",
    placeholder: "Title",
    onChange: event => {
      setTitle(event.target.value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, {
    controlId: "createArticle.ControlTextarea1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Label, null, "Text"), textArea), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Form.File, {
    id: "custom-file",
    label: "Custom file input",
    custom: true,
    onChange: event => {
      let fileName = event.target.files[0]; //showSuccess(file.name);

      let reader = new FileReader();
      reader.readAsDataURL(fileName);

      reader.onload = () => {
        const file = reader.result;
        let img = new Image();

        img.onload = function () {
          let imd = imgDim;
          imd.push({
            width: img.width,
            height: img.height
          });
          setImgDim(imd);
        };

        img.src = file;
        let ims = imgSrc;
        ims.push(file);
        setImgSrc(ims);
        let s = sequence;
        setSequence(s += '1');
        const size = file.size ? file.size : 'NOT SUPPORTED';
        showSuccess(size);
      };

      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
    variant: "primary",
    type: "submit"
  }, "Post"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
    xs: true,
    lg: "6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Preview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, article)))));
}

const CreateArticleWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_6__.default)(CreateArticle);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateArticleWithToast);

/***/ }),

/***/ "./src/ssr/EmailSignUp.jsx":
/*!*********************************!*\
  !*** ./src/ssr/EmailSignUp.jsx ***!
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
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Spinner_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Spinner.jsx */ "./src/ssr/Spinner.jsx");
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./withToast.jsx */ "./src/ssr/withToast.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.js");
/* eslint-disable react/jsx-one-expression-per-line */

/* eslint-disable func-names */









 //import img from '../assets/images/home.png';

function EmailSignUp(props) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(state => state.user);
  var [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  var [valid, setValid] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); //const footerImage = typeof window == 'undefined' ? './assets/img/home.png' : img;

  function onChange(event, naturalValue) {
    const {
      name,
      value: textValue
    } = event.target;
    const prevUser = user;
    const value = naturalValue === undefined ? textValue : naturalValue;
    dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_9__.setUser)({ ...prevUser,
      [name]: value
    }));
  }

  async function signOut(event) {
    event.preventDefault();
    const {
      showSuccess,
      showError
    } = props;
    setLoading(true); //---

    setLoading(false);
    showSuccess('Logged out');
  }

  async function signUpWithEmail(email, password) {
    firebase__WEBPACK_IMPORTED_MODULE_0___default().auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message; // ...
    });
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

  firebase__WEBPACK_IMPORTED_MODULE_0___default().auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_9__.setUser)(user));
    } else {
      console.log('Signed out');
    } // ...

  });
  let spinner = null;

  if (loading && typeof window !== 'undefined') {
    spinner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Spinner_jsx__WEBPACK_IMPORTED_MODULE_6__.default, {
      size: 50
    });
  }

  let validationMessage;

  if (!valid) {
    validationMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      variant: "danger"
    }, "All fields must be filled");
  }

  if ((0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(state => state.email)) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
      disabled: false,
      bsStyle: "primary",
      onClick: signOut
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSignOutAlt
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
    className: "justify-content-md-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
    className: "col-centered",
    sm: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Title, {
    className: "text-center"
  }, "Email Sign Up ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faEnvelope
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form, {
    horizontal: true,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "light",
    style: {
      border: 'none'
    },
    disabled: (user === null || user === void 0 ? void 0 : user.email) !== null,
    onClick: () => {
      setNoAccout(true);
    }
  }, "Want to create an account?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
    type: "email",
    placeholder: "Email",
    name: "email",
    onChange: onChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
    name: "password",
    placeholder: "Password",
    type: "password",
    onChange: onChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ButtonToolbar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
    disabled: false,
    variant: "primary",
    type: "submit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faUser
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
    disabled: false,
    variant: "primary",
    onClick: () => {
      setLoading(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSpinner
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {
    href: "/forgotpassword"
  }, "Forgot password?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
    className: "col-centered"
  }, validationMessage))), spinner), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Image, {
    className: "footer-image",
    src: './assets/img/home.png'
  })))));
}

const EmailSignUpWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_7__.default)(EmailSignUp);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailSignUpWithToast);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ "firebase/firestore");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firebase-database */ "firebase/firebase-database");
/* harmony import */ var firebase_firebase_database__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_firebase_database__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withToast.jsx */ "./src/ssr/withToast.jsx");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store.js */ "./src/ssr/store.js");






 //import { useSelector, useDispatch } from 'react-redux';
//import { setInitialData } from '../redux/actions';




function Home(props) {
  var _data$;

  const {
    showSuccess,
    showError
  } = props;
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_store_js__WEBPACK_IMPORTED_MODULE_7__.default.initialData ? _store_js__WEBPACK_IMPORTED_MODULE_7__.default.initialData : null); // Only gets called after rendering; so, won't be called in server-side code

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      try {
        //console.log('Before fetching: Data in useEffect');
        //console.log(data);
        //console.log('---------------------------------------------------');
        let fetchedData = data ? data : await fetchData();
        setData(fetchedData); //console.log('Fetched: Data in useEffect');
        //console.log(data);// Will not reflect change
      } catch (error) {
        showError('Home useEffect fetchData error: ' + error);
      }
    })();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: "assets/img/landscape.jpg",
    style: {
      width: '100%',
      height: 'auto'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
    xs: true,
    xl: "12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Server-Side Rendering"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, data ? (_data$ = data[1]) === null || _data$ === void 0 ? void 0 : _data$.name : null)))));
}

async function fetchData() {
  //console.log('Inside fetching function');
  const firestore = firebase_app__WEBPACK_IMPORTED_MODULE_2___default().firestore();
  let users = [];

  try {
    const snapshot = await firestore.collection('contacts').get();
    snapshot.forEach(doc => {
      users.push(doc.data());
    });
  } catch (e) {
    showError('Home Snapshot error: ' + e);
  }

  return users;
}

const HomeWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_6__.default)(Home);
HomeWithToast.fetchData = fetchData;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeWithToast);

/***/ }),

/***/ "./src/ssr/LogIn.jsx":
/*!***************************!*\
  !*** ./src/ssr/LogIn.jsx ***!
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
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "firebase");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./withToast.jsx */ "./src/ssr/withToast.jsx");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* eslint-disable react/jsx-one-expression-per-line */

/* eslint-disable func-names */





 //import Spinner from './Spinner.jsx';



 //import img from './assets/images/home.png';
//import './assets/css/styles.css';

function LogIn(props) {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  var [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  var [showValidation, setShowVaidation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(state => state.user);

  function onChange(event, naturalValue) {
    const {
      name,
      value: textValue
    } = event.target;
    const prevUser = user;
    const value = naturalValue === undefined ? textValue : naturalValue;
    (0,_redux_actions__WEBPACK_IMPORTED_MODULE_7__.setUser)({ ...prevUser,
      [name]: value
    });
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

  async function signOut(event) {
    event.preventDefault();
    const {
      showSuccess,
      showError
    } = props;
    startLoading();
    dispatch(logOut());
    stopLoading();
    showSuccess('Logged out');
  }

  async function signInWithEmail(email, password) {
    const {
      showError,
      showSuccess
    } = props;
    startLoading();
    firebase__WEBPACK_IMPORTED_MODULE_0___default().auth().signInWithEmailAndPassword().catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message; // ...
    });

    try {} catch (err) {
      showError(err.message);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (user.password === undefined || user.email === undefined || user.password === '' || user.email === '') {
      showValidation();
    } else {
      dismissValidation();
      signInWithEmail(user.email, user.password);
    }
  }

  firebase__WEBPACK_IMPORTED_MODULE_0___default().auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_7__.setUser)(user));
    } else {
      console.log('Signed out');
    } // ...

  });
  let spinner = null;

  if (loading) {
    spinner = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Spinner, {
      size: 50
    });
  }

  let validationMessage;

  if (showValidation) {
    validationMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Alert, {
      variant: "danger",
      onClose: dismissValidation
    }, "All fields must be filled");
  }

  let btn = '';

  if ((0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(state => state.email)) {
    btn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
      disabled: false,
      bsStyle: "primary",
      onClick: signOut
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSignOutAlt
    }));
  } else {
    btn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
      disabled: false,
      bsStyle: "primary",
      type: "submit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faSignInAlt
    }));
  }

  if (noAccount) {
    btn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
      disabled: false,
      bsStyle: "primary",
      onClick: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faUser
    }));
  }

  const loggedInEmail = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(state => state.email);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
    className: "col-centered",
    sm: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Title, {
    className: "text-center"
  }, "Email Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Form, {
    horizontal: true,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "light",
    style: {
      border: 'none'
    },
    disabled: loggedInEmail !== null,
    onClick: () => {
      setNoAccout(true);
    }
  }, "Want to create an account?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
    type: "email",
    placeholder: "Email",
    name: "email",
    onChange: onChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
    name: "password",
    placeholder: "Password",
    type: "password",
    onChange: onChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ButtonToolbar, null, btn))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Nav.Link, {
    href: "/forgotpassword"
  }, "Forgot password?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
    className: "col-centered"
  }, validationMessage))), spinner), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Card.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Image, {
    className: "footer-image",
    src: img
  }))));
}

const LoginWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_6__.default)(LogIn);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginWithToast);

/***/ }),

/***/ "./src/ssr/NotFound.jsx":
/*!******************************!*\
  !*** ./src/ssr/NotFound.jsx ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Page Not Found");
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
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ Page
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-bootstrap */ "react-router-bootstrap");
/* harmony import */ var react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Contents_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contents.jsx */ "./src/ssr/Contents.jsx");
/* harmony import */ var _wrapPath_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wrapPath.js */ "./src/ssr/wrapPath.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* eslint-disable react/jsx-one-expression-per-line */
// import { useState } from 'react';







function Page() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavBar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Contents_jsx__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Footer, null));
}

function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("small", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-center"
  }, "Full source code available at this", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://github.com/Valentine-Efagene/MERN"
  }, "Github repository")));
}

function NavBar({
  user
}) {
  let contactAdd = '';
  let update = '';
  const isLogged = false;

  if (isLogged) {
    update = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__.LinkContainer, {
      to: "/update"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NavLink, null, "Update Details"));
  }

  if (user) {
    contactAdd = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__.LinkContainer, {
      to: "/ContactAdd"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NavItem, null, "Add Contact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
      fluid: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Contents_jsx__WEBPACK_IMPORTED_MODULE_3__.default, null)));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Navbar, {
    bg: "light",
    expand: "lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Navbar.Brand, {
    href: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_6__.default)('/home')
  }, "React-Firebase ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
    color: "orange",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faFire
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Navbar.Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Navbar.Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Nav, {
    className: "mr-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_6__.default)('/home')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NavLink, null, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_6__.default)('/redux-test')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NavLink, null, "Redux Test")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_6__.default)('/p5-test')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NavLink, null, "P5 Test")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_6__.default)('/about')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NavLink, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NavItem, null, "About"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_6__.default)('/create-article')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NavLink, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NavItem, null, "Create Article"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_bootstrap__WEBPACK_IMPORTED_MODULE_2__.LinkContainer, {
    to: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_6__.default)('/test')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NavLink, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NavItem, null, "Test"))), update, contactAdd)));
}

/***/ }),

/***/ "./src/ssr/PhoneSignUp.jsx":
/*!*********************************!*\
  !*** ./src/ssr/PhoneSignUp.jsx ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _withToast_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./withToast.jsx */ "./src/ssr/withToast.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.js");
/* eslint-disable react/jsx-one-expression-per-line */

/* eslint-disable func-names */



 //import Spinner from './Spinner.jsx';



 //import img from './assets/images/home.png';
//import './assets/css/styles.css';

function PhoneSignUp(props) {
  const img = '';
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  var [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.email)
  });
  var [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [showValidation, setShowVaidation] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  var [noAccount, setNoAccout] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function onChange(event, naturalValue) {
    const {
      name,
      value: textValue
    } = event.target;
    const prevUser = user;
    const value = naturalValue === undefined ? textValue : naturalValue;
    setUser({ ...prevUser,
      [name]: value
    });
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

  async function signOut(event) {
    event.preventDefault();
    const {
      showSuccess,
      showError
    } = props;
    startLoading();
    dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_6__.logOut)());
    stopLoading();
    showSuccess('Logged out');
  }

  async function signUpWithPhone(phone, password) {
    dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_6__.logIn)(user.email));
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

  let spinner = null;

  if (loading) {//spinner = <Spinner size={50} />;
  }

  let validationMessage;

  if (showValidation) {
    validationMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      bsStyle: "danger",
      onClose: dismissValidation
    }, "All fields must be filled");
  }

  let btn = '';

  if ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.email)) {
    btn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      disabled: false,
      bsStyle: "primary",
      onClick: signOut
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSignOutAlt
    }));
  } else {
    btn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      disabled: false,
      bsStyle: "primary",
      type: "submit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faSignInAlt
    }));
  }

  if (noAccount) {
    btn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
      disabled: false,
      variant: "primary",
      onClick: handleSubmit
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faUser
    }));
  }

  const loggedInEmail = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state.email);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
    className: "justify-content-md-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
    className: "col-centered",
    sm: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Title, {
    className: "text-center"
  }, "Phone Sign Up ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPhone
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form, {
    horizontal: true,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
    variant: "light",
    style: {
      border: 'none'
    },
    disabled: loggedInEmail !== null,
    onClick: () => {
      setNoAccout(true);
    }
  }, "Want to create an account?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
    type: "phone",
    placeholder: "+xxx",
    name: "phone",
    onChange: onChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
    name: "password",
    placeholder: "Password",
    type: "password",
    onChange: onChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.ButtonToolbar, null, btn))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
    className: "col-centered"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Nav.Link, {
    href: "/forgotpassword"
  }, "Forgot password?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.FormGroup, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
    className: "col-centered"
  }, validationMessage))), spinner), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Image, {
    className: "footer-image",
    src: img
  })))));
}

const PhoneSignUpWithToast = (0,_withToast_jsx__WEBPACK_IMPORTED_MODULE_4__.default)(PhoneSignUp);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneSignUpWithToast);

/***/ }),

/***/ "./src/ssr/ReduxTest.js":
/*!******************************!*\
  !*** ./src/ssr/ReduxTest.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions */ "./src/redux/actions/index.js");
/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.js */ "./src/ssr/store.js");





function ReduxTest() {
  var _store$session;

  const initialCount = _store_js__WEBPACK_IMPORTED_MODULE_3__.default.count;
  const appVisits = (_store$session = _store_js__WEBPACK_IMPORTED_MODULE_3__.default.session) === null || _store$session === void 0 ? void 0 : _store$session.appVisits;
  let count;

  if (typeof window === 'undefined') {
    count = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(() => initialCount);
  } else {
    count = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.count);
  } //const initialData = useSelector((state) => state.initialData);


  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "You have visited this app ", appVisits, ' ', appVisits === 1 ? 'time' : 'times', "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Counter ", count), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.decrement)())
  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => dispatch((0,_redux_actions__WEBPACK_IMPORTED_MODULE_2__.increment)())
  }, "+")));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReduxTest);

/***/ }),

/***/ "./src/ssr/SignUp.jsx":
/*!****************************!*\
  !*** ./src/ssr/SignUp.jsx ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wrapPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrapPath.js */ "./src/ssr/wrapPath.js");
/* eslint-disable react/jsx-one-expression-per-line */

/* eslint-disable func-names */






function SignUp(props) {
  const img = '';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
    className: "justify-content-md-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {
    className: "col-centered",
    sm: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Title, {
    className: "text-center"
  }, "Sign Up")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
    href: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_4__.default)('/signup-email')
  }, "Email Sign Up ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faEnvelope
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
    href: (0,_wrapPath_js__WEBPACK_IMPORTED_MODULE_4__.default)('/signup-phone')
  }, "Phone Sign Up ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faPhone
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Body, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Card.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Image, {
    className: "footer-image",
    src: img
  })))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);

/***/ }),

/***/ "./src/ssr/Spinner.jsx":
/*!*****************************!*\
  !*** ./src/ssr/Spinner.jsx ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react */ "@emotion/react");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners_DotLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners/DotLoader */ "react-spinners/DotLoader");
/* harmony import */ var react_spinners_DotLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_DotLoader__WEBPACK_IMPORTED_MODULE_2__);
/** @jsx jsx */

 //import { css } from '@emotion/core';


const override = _emotion_react__WEBPACK_IMPORTED_MODULE_1__.css`
  display: block;
  margin: 0 auto;
  border-color: white;
`;

function Spinner({
  size,
  color
}) {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)((react_spinners_DotLoader__WEBPACK_IMPORTED_MODULE_2___default()), {
    css: override,
    size: size,
    color: color || 'orange',
    loading: "true"
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./src/ssr/Test.jsx":
/*!**************************!*\
  !*** ./src/ssr/Test.jsx ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);



const Test = () => {
  let str = 'hello';
  let f = [...str].map(e => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, e);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
    fluid: true
  }, f);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);


class Toast extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  componentDidUpdate() {
    const {
      showing,
      onDismiss
    } = this.props;

    if (showing) {
      clearTimeout(this.dismissTimer);
      this.dismissTimer = setTimeout(onDismiss, 5000);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.dismissTimer);
  }

  render() {
    const {
      showing,
      bsStyle,
      onDismiss,
      children
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
      in: showing
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        position: 'fixed',
        bottom: 20,
        left: 20
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Alert, {
      bsStyle: bsStyle,
      onDismiss: onDismiss
    }, children)));
  }

}

/***/ }),

/***/ "./src/ssr/p5Test.jsx":
/*!****************************!*\
  !*** ./src/ssr/p5Test.jsx ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.e, __webpack_require__.t, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "@fortawesome/free-brands-svg-icons");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loadable */ "./node_modules/react-loadable/lib/index.js");
/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_3__);



 //import Sketch from 'react-p5';

function Loading() {
  return null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  if (typeof window === 'undefined') {
    return null;
  }

  const [dim, setDim] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    w: 0,
    h: 0
  });
  const Sketch = react_loadable__WEBPACK_IMPORTED_MODULE_3___default()({
    loader: () => __webpack_require__.e(/*! import() */ "vendors-node_modules_react-p5_build_index_js").then(__webpack_require__.t.bind(__webpack_require__, /*! react-p5 */ "./node_modules/react-p5/build/index.js", 7)),
    loading: Loading
  });
  const stageCanvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  const initDimensions = () => {
    let h = 0;
    let w = 0;

    if (stageCanvasRef.current) {
      h = stageCanvasRef.current.offsetHeight;
      w = stageCanvasRef.current.offsetWidth;
    }

    setDim({
      w,
      h
    });
  }; // useEffect will run on stageCanvasRef value assignment


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    initDimensions();
    window.addEventListener('resize', initDimensions);
    return () => {
      window.removeEventListener('resize', initDimensions);
    };
  }, [stageCanvasRef]);

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(dim.w, dim.h).parent(canvasParentRef);
  };

  let x = dim.w / 2;
  let y = dim.h / 2;
  let xVel = 3;
  let b;

  const draw = p5 => {
    let {
      mouseIsPressed,
      width
    } = p5;
    p5.background(129, 71, 109);
    b = new Bob(p5, x, y + 50);

    if (mouseIsPressed) {
      p5.fill(0);
    } else {
      p5.fill(255);
    }

    b.display(); //const { width, height, background, ellipse } = p5;

    const d = width / 10;
    const r = d / 2;
    p5.ellipse(x, y, d, d);
    p5.text(`${x + d}`, dim.w / 2, dim.h / 5);
    p5.line(x, 0, x, dim.h); // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes

    x += xVel;

    if (x + r >= dim.w || x <= r) {
      xVel *= -1;
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    ref: stageCanvasRef,
    style: {
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Sketch, {
    setup: setup,
    draw: draw
  }));
}); // Bob class, just like our regular Mover (position, velocity, acceleration, mass)

class Bob {
  // Constructor
  constructor(p5, x, y) {
    this.position = p5.createVector(x, y);
    this.velocity = p5.createVector();
    this.acceleration = p5.createVector();
    this.dragOffset = p5.createVector();
    this.dragging = false;
    this.p5 = p5;
    this.mass = 24;
  } // Draw the bob


  display() {
    let {
      p5,
      position,
      dragging,
      mass
    } = this;
    p5.stroke(0);
    p5.strokeWeight(2); //p5.fill(175);

    if (dragging) {
      p5.fill(50);
    }

    p5.ellipse(position.x, position.y, mass * 2, mass * 2);
  }

}

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
/* harmony import */ var _LogIn_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LogIn.jsx */ "./src/ssr/LogIn.jsx");
/* harmony import */ var _SignUp_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SignUp.jsx */ "./src/ssr/SignUp.jsx");
/* harmony import */ var _ReduxTest_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReduxTest.js */ "./src/ssr/ReduxTest.js");
/* harmony import */ var _EmailSignUp_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EmailSignUp.jsx */ "./src/ssr/EmailSignUp.jsx");
/* harmony import */ var _PhoneSignUp_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PhoneSignUp.jsx */ "./src/ssr/PhoneSignUp.jsx");
/* harmony import */ var _p5Test_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./p5Test.jsx */ "./src/ssr/p5Test.jsx");
/* harmony import */ var _CreateArticle_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CreateArticle.jsx */ "./src/ssr/CreateArticle.jsx");
/* harmony import */ var _wrapPath_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wrapPath.js */ "./src/ssr/wrapPath.js");












const routes = [{
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
const store = {};
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
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Toast_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Toast.jsx */ "./src/ssr/Toast.jsx");



function withToast(OriginalComponent) {
  return class ToastWrapper extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    constructor(props) {
      super(props);
      this.state = {
        toastVisible: false,
        toastMessage: '',
        toastType: 'success'
      };
      this.showSuccess = this.showSuccess.bind(this);
      this.showError = this.showError.bind(this);
      this.dismissToast = this.dismissToast.bind(this);
    }

    showSuccess(message) {
      this.setState({
        toastVisible: true,
        toastMessage: message,
        toastType: 'success'
      });
    }

    showError(message) {
      this.setState({
        toastVisible: true,
        toastMessage: message,
        toastType: 'danger'
      });
    }

    dismissToast() {
      this.setState({
        toastVisible: false
      });
    }

    render() {
      const {
        toastType,
        toastVisible,
        toastMessage
      } = this.state;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(OriginalComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        showError: this.showError,
        showSuccess: this.showSuccess,
        dismissToast: this.dismissToast
      }, this.props)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Toast_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {
        bsStyle: toastType,
        showing: toastVisible,
        onDismiss: this.dismissToast
      }, toastMessage));
    }

  };
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
const appendedPath = '/fir-ch2-5cbdb/us-central1/ssr';
function wrapPath(path) {
  return `${appendedPath}${path}`; // Use this when you want to deploy functions live
  // Use on localhost

  /*if (__isFirebaseSSR__) {
    return `/fir-ch2-5cbdb/us-central1/ssr${path}`; 
  } else {
    return path;
  }*/
}

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/extends");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("@emotion/react");;

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("@fortawesome/fontawesome-svg-core");;

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("express-session");;

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("firebase");;

/***/ }),

/***/ "firebase-functions":
/*!*************************************!*\
  !*** external "firebase-functions" ***!
  \*************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("firebase-functions");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("firebase/auth");;

/***/ }),

/***/ "firebase/firebase-database":
/*!*********************************************!*\
  !*** external "firebase/firebase-database" ***!
  \*********************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("firebase/firebase-database");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("firebase/firestore");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("react-bootstrap");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("react-redux");;

/***/ }),

/***/ "react-router-bootstrap":
/*!*****************************************!*\
  !*** external "react-router-bootstrap" ***!
  \*****************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("react-router-bootstrap");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ }),

/***/ "react-spinners/DotLoader":
/*!*******************************************!*\
  !*** external "react-spinners/DotLoader" ***!
  \*******************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("react-spinners/DotLoader");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("redux");;

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("serialize-javascript");;

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			if(mode & 2 && typeof value == 'object' && value) {
/******/ 				for(const key in value) def[key] = () => value[key];
/******/ 			}
/******/ 			def['default'] = () => value;
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".index.js";
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
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"server": 1
/******/ 		};
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 		
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module factories are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./servers/firebase_server/server.js");
/******/ })()
;
//# sourceMappingURL=index.js.map