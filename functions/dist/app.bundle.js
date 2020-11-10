(()=>{"use strict";var e={6:(e,t,n)=>{var r=n(7294),a=n(3935),o=n(3727),s=n(4890),i=n(5503);n(7397),n(9603),n(6562);const c=(0,s.UY)({count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+(t.payload||1);case"DECREMENT":return e-(t.payload||1);default:return e}},isLogged:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return!0;default:return e}},initialData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIAL_DATA":return t.payload;default:return e}},userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return t.payload;default:return e}},session:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SESSION":return t.payload;default:return e}}});var l=n(9242),u=n(682),d=n(3982),h=n(1244),f=n(5602),p=n(9542),m=n(915),E=n(7154),v=n.n(E),b=n(5977);var y=n(7757),g=n.n(y),w=n(8926),S=n.n(w),T=n(3038),_=n.n(T),x=n(4575),D=n.n(x),R=n(3913),k=n.n(R),N=n(1506),Z=n.n(N),A=n(2205),I=n.n(A),O=n(8585),M=n.n(O),C=n(9754),P=n.n(C),j=n(9966),L=n(5067);var U=function(e){I()(o,e);var t,n,a=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=P()(t);if(n){var a=P()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return M()(this,e)});function o(){return D()(this,o),a.apply(this,arguments)}return k()(o,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.showing,n=e.onDismiss;t&&(clearTimeout(this.dismissTimer),this.dismissTimer=setTimeout(n,5e3))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.dismissTimer)}},{key:"render",value:function(){var e=this.props,t=e.showing,n=e.bsStyle,a=e.onDismiss,o=e.children;return r.createElement(j.Z,{in:t},r.createElement("div",{style:{position:"fixed",bottom:20,left:20}},r.createElement(L.Z,{bsStyle:n,onDismiss:a},o)))}}]),o}(r.Component);const V={};function B(){return F.apply(this,arguments)}function F(){return(F=S()(g().mark((function e(){var t,n;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.Z.firestore(),n=[],e.prev=2,e.next=5,t.collection("contacts").get();case 5:e.sent.forEach((function(e){n.push(e.data())})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),showError("Home Snapshot error: "+e.t0);case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var z,H=(z=function(e){e.showSuccess;var t,n=e.showError,a=(0,r.useState)(V.initialData?V.initialData:null),o=_()(a,2),s=o[0],i=o[1];return(0,r.useEffect)((function(){S()(g().mark((function e(){var t;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!s){e.next=5;break}e.t0=s,e.next=8;break;case 5:return e.next=7,B();case 7:e.t0=e.sent;case 8:t=e.t0,i(t),e.next=15;break;case 12:e.prev=12,e.t1=e.catch(0),n("Home useEffect fetchData error: "+e.t1);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()}),[]),r.createElement(r.Fragment,null,r.createElement("div",{className:"text-center"},r.createElement("h3",null,"Server-Side Rendering"),r.createElement("h3",null,s?null===(t=s[1])||void 0===t?void 0:t.name:null)))},function(e){I()(o,e);var t,n,a=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=P()(t);if(n){var a=P()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return M()(this,e)});function o(e){var t;return D()(this,o),(t=a.call(this,e)).state={toastVisible:!1,toastMessage:"",toastType:"success"},t.showSuccess=t.showSuccess.bind(Z()(t)),t.showError=t.showError.bind(Z()(t)),t.dismissToast=t.dismissToast.bind(Z()(t)),t}return k()(o,[{key:"showSuccess",value:function(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"success"})}},{key:"showError",value:function(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"danger"})}},{key:"dismissToast",value:function(){this.setState({toastVisible:!1})}},{key:"render",value:function(){var e=this.state,t=e.toastType,n=e.toastVisible,a=e.toastMessage;return r.createElement(r.Fragment,null,r.createElement(z,v()({showError:this.showError,showSuccess:this.showSuccess,dismissToast:this.dismissToast},this.props)),r.createElement(U,{bsStyle:t,showing:n,onDismiss:this.dismissToast},a))}}]),o}(r.Component));H.fetchData=B;const J=H;function X(e){return"".concat("/ssr").concat(e)}const K=[{path:X("/home"),component:J},{path:X("/about"),component:function(){return r.createElement("div",{className:"text-center"},r.createElement("h3",null,"React Server-Side Rendering Demo version 0.9"),r.createElement("h4",null,"API version 1.0"))}},{path:X("/redux-test"),component:function(){var e,t,n=V.count,a=null===(e=V.session)||void 0===e?void 0:e.appVisits;t="undefined"==typeof window?(0,l.v9)((function(){return n})):(0,l.v9)((function(e){return e.count}));var o=(0,l.I0)();return r.createElement("div",{className:"App"},r.createElement("header",{className:"App-header"},r.createElement("h1",null,"You have visited this app ",a," ",1===a?"time":"times","."),r.createElement("h1",null,"Counter ",t),r.createElement("button",{onClick:function(){return o({type:"DECREMENT"})}},"-"),r.createElement("button",{onClick:function(){return o({type:"INCREMENT",payload:undefined})}},"+")))}},{path:X("*"),component:function(){return r.createElement("h1",null,"Page Not Found")}}];function W(){return(0,b.TH)(),X("/"),r.createElement(b.rs,null,r.createElement(b.l_,{exact:!0,from:X("/"),to:X("/home")}),K.map((function(e){return r.createElement(b.AW,v()({},e,{key:e.path}))})))}function G(){return r.createElement("div",null,r.createElement(Q,null),r.createElement(u.Z,{fluid:!0},r.createElement(W,null)),r.createElement(Y,null))}function Y(){return r.createElement("small",null,r.createElement("hr",null),r.createElement("p",{className:"text-center"},"Full source code available at this"," ",r.createElement("a",{href:"https://github.com/Valentine-Efagene/MERN"},"Github repository")))}function Q(e){var t="";return e.user&&(t=r.createElement(m.Ji,{to:"/ContactAdd"},r.createElement(h.Z,null,"Add Contact"),r.createElement(u.Z,{fluid:!0},r.createElement(W,null)))),r.createElement(f.Z,{bg:"light",expand:"lg"},r.createElement(f.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),r.createElement(f.Z.Collapse,{id:"basic-navbar-nav"},r.createElement(p.Z,{className:"mr-auto"},r.createElement(m.Ji,{to:X("/home")},r.createElement(d.Z,null,"Home")),r.createElement(m.Ji,{to:X("/redux-test")},r.createElement(d.Z,null,"Redux Test")),r.createElement(m.Ji,{to:X("/about")},r.createElement(d.Z,null,r.createElement(h.Z,null,"About"))),"",t)))}X("/");var q={apiKey:"AIzaSyAQZch2fOfKBsdaWpL3KZ_kNFBS_Akn57s",authDomain:"fir-ch2-5cbdb.firebaseapp.com",databaseURL:"https://fir-ch2-5cbdb.firebaseio.com",projectId:"fir-ch2-5cbdb",storageBucket:"fir-ch2-5cbdb.appspot.com",messagingSenderId:"758456033077",appId:"1:758456033077:web:1765192f057cda6b9bb67c"};"undefined"!=typeof window&&("localhost"===window.location.hostname?(delete q.databaseURL,delete q.authDomain,delete q.storageBucket,0==i.Z.apps.length&&(i.Z.initializeApp(q),i.Z.auth().useEmulator("http://localhost:9099/"),i.Z.database().useEmulator("localhost",9e3),i.Z.firestore().useEmulator("localhost",8080))):0==i.Z.apps.length&&i.Z.initializeApp(q));var $=window.__PRELOADED_STATE__;V.initialData=$.initialData,V.count=$.count,V.session=$.session,delete window.__PRELOADED_STATE__;var ee=(0,s.MT)(c,$,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.hydrate(r.createElement(r.StrictMode,null,r.createElement(l.zt,{store:ee},r.createElement(o.BrowserRouter,null,r.createElement(G,null)))),document.getElementById("root"))}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={143:0},t=[[6,736]],r=()=>{};function a(){for(var r,a=0;a<t.length;a++){for(var o=t[a],s=!0,i=1;i<o.length;i++){var c=o[i];0!==e[c]&&(s=!1)}s&&(t.splice(a--,1),r=n(n.s=o[0]))}return 0===t.length&&(n.x(),n.x=()=>{}),r}n.x=()=>{n.x=()=>{},s=s.slice();for(var e=0;e<s.length;e++)o(s[e]);return(r=a)()};var o=a=>{for(var o,s,[c,l,u,d]=a,h=0,f=[];h<c.length;h++)s=c[h],n.o(e,s)&&e[s]&&f.push(e[s][0]),e[s]=0;for(o in l)n.o(l,o)&&(n.m[o]=l[o]);for(u&&u(n),i(a);f.length;)f.shift()();return d&&t.push.apply(t,d),r()},s=self.webpackChunkssr_react_firebase=self.webpackChunkssr_react_firebase||[],i=s.push.bind(s);s.push=o})(),n.x()})();