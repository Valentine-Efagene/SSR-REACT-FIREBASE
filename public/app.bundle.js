(()=>{"use strict";var e={8859:(e,t,n)=>{var r=n(7294),a=n(682),o=n(3982),s=n(1244),c=n(5602),l=n(9542),i=n(915),u=n(7154),h=n.n(u),m=n(5977);var f=n(7757),p=n.n(f),d=n(8926),E=n.n(d),v=n(3038),b=n.n(v),y=n(5503),g=(n(7397),n(9603),n(6562),n(4575)),w=n.n(g),S=n(3913),T=n.n(S),x=n(1506),_=n.n(x),R=n(2205),D=n.n(R),Z=n(8585),k=n.n(Z),N=n(9754),A=n.n(N),I=n(9966),M=n(5067);var C=function(e){D()(o,e);var t,n,a=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=A()(t);if(n){var a=A()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return k()(this,e)});function o(){return w()(this,o),a.apply(this,arguments)}return T()(o,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.showing,n=e.onDismiss;t&&(clearTimeout(this.dismissTimer),this.dismissTimer=setTimeout(n,5e3))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.dismissTimer)}},{key:"render",value:function(){var e=this.props,t=e.showing,n=e.bsStyle,a=e.onDismiss,o=e.children;return r.createElement(I.Z,{in:t},r.createElement("div",{style:{position:"fixed",bottom:20,left:20}},r.createElement(M.Z,{bsStyle:n,onDismiss:a},o)))}}]),o}(r.Component);function O(){return j.apply(this,arguments)}function j(){return(j=E()(p().mark((function e(){var t,n;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=y.Z.firestore(),n=[],e.prev=2,e.next=5,t.collection("contacts").get();case 5:e.sent.forEach((function(e){n.push(e.data())})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),showError("Home Snapshot error: "+e.t0);case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}const P=(U=function(e){var t,n=(0,r.useState)([]),a=b()(n,2),o=a[0],s=a[1],c=e.showSuccess,l=e.showError;return(0,r.useEffect)((function(){E()(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O();case 3:t=e.sent,s(t),c("fetched"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l("Home useEffect fetchData error: "+e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}),[]),r.createElement(r.Fragment,null,r.createElement("div",{className:"text-center"},r.createElement("h3",null,"Server-Side Rendering"),r.createElement("h3",null,null===(t=o[1])||void 0===t?void 0:t.name)))},function(e){D()(o,e);var t,n,a=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=A()(t);if(n){var a=A()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return k()(this,e)});function o(e){var t;return w()(this,o),(t=a.call(this,e)).state={toastVisible:!1,toastMessage:"",toastType:"success"},t.showSuccess=t.showSuccess.bind(_()(t)),t.showError=t.showError.bind(_()(t)),t.dismissToast=t.dismissToast.bind(_()(t)),t}return T()(o,[{key:"showSuccess",value:function(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"success"})}},{key:"showError",value:function(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"danger"})}},{key:"dismissToast",value:function(){this.setState({toastVisible:!1})}},{key:"render",value:function(){var e=this.state,t=e.toastType,n=e.toastVisible,a=e.toastMessage;return r.createElement(r.Fragment,null,r.createElement(U,h()({showError:this.showError,showSuccess:this.showSuccess,dismissToast:this.dismissToast},this.props)),r.createElement(C,{bsstyle:t,showing:n,onDismiss:this.dismissToast},a))}}]),o}(r.Component));var U,V=n(9242);const L=[{path:"/home",component:P},{path:"/about",component:function(){return r.createElement("div",{className:"text-center"},r.createElement("h3",null,"React Client-Side Rendering Demo version 1.0"),r.createElement("h4",null,"API version 1.0"))}},{path:"/redux-test",component:function(){var e=(0,V.v9)((function(e){return e.counter})),t=(0,V.I0)();return r.createElement("div",{className:"App"},r.createElement("header",{className:"App-header"},r.createElement("h1",null,"Counter ",e),r.createElement("button",{onClick:function(){return t({type:"DECREMENT"})}},"-"),r.createElement("button",{onClick:function(){return t({type:"INCREMENT",payload:undefined})}},"+")))}},{path:"*",component:function(){return r.createElement("h1",null,"Page Not Found")}}];function B(){return r.createElement(m.rs,null,r.createElement(m.l_,{exact:!0,from:"/",to:"/home"}),L.map((function(e){return r.createElement(m.AW,h()({},e,{key:e.path}))})))}function F(){return r.createElement("div",null,r.createElement(H,null),r.createElement(a.Z,{fluid:!0},r.createElement(B,null)),r.createElement(z,null))}function z(){return r.createElement("small",null,r.createElement("hr",null),r.createElement("p",{className:"text-center"},"Full source code available at this"," ",r.createElement("a",{href:"https://github.com/Valentine-Efagene/MERN"},"Github repository")))}function H(e){var t="";return e.user&&(t=r.createElement(i.Ji,{to:"/ContactAdd"},r.createElement(s.Z,null,"Add Contact"),r.createElement(a.Z,{fluid:!0},r.createElement(B,null)))),r.createElement(c.Z,{bg:"light",expand:"lg"},r.createElement(c.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),r.createElement(c.Z.Collapse,{id:"basic-navbar-nav"},r.createElement(l.Z,{className:"mr-auto"},r.createElement(i.Ji,{to:"/home"},r.createElement(o.Z,null,"Home")),r.createElement(i.Ji,{to:"/redux-test"},r.createElement(o.Z,null,"Redux Test")),r.createElement(i.Ji,{to:"/about"},r.createElement(o.Z,null,r.createElement(s.Z,null,"About"))),"",t)))}var J=n(3727);function X(){return r.createElement(J.BrowserRouter,null,r.createElement(F,null))}var K=n(3935),W=n(4890);const G=(0,W.UY)({count:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return e+(t.payload||1);case"DECREMENT":return e-(t.payload||1);default:return e}},isLogged:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return!0;default:return e}},initialData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIAL_DATA":return t.payload;default:return e}},userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return t.payload;default:return e}}});var Q={apiKey:"AIzaSyAQZch2fOfKBsdaWpL3KZ_kNFBS_Akn57s",authDomain:"fir-ch2-5cbdb.firebaseapp.com",databaseURL:"https://fir-ch2-5cbdb.firebaseio.com",projectId:"fir-ch2-5cbdb",storageBucket:"fir-ch2-5cbdb.appspot.com",messagingSenderId:"758456033077",appId:"1:758456033077:web:1765192f057cda6b9bb67c"};console.log("Hostname: "+window.location.hostname),"localhost"===window.location.hostname?(delete Q.databaseURL,delete Q.authDomain,delete Q.storageBucket,0==y.Z.apps.length&&(y.Z.initializeApp(Q),y.Z.auth().useEmulator("http://localhost:9099/"),y.Z.database().useEmulator("localhost",9e3),y.Z.firestore().useEmulator("localhost",8080))):0==y.Z.apps.length&&y.Z.initializeApp(Q);var Y=(0,W.MT)(G,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());K.render(r.createElement(r.StrictMode,null,r.createElement(V.zt,{store:Y},r.createElement(X,null))),document.getElementById("root"))}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={143:0},t=[[8859,736]],r=()=>{};function a(){for(var r,a=0;a<t.length;a++){for(var o=t[a],s=!0,c=1;c<o.length;c++){var l=o[c];0!==e[l]&&(s=!1)}s&&(t.splice(a--,1),r=n(n.s=o[0]))}return 0===t.length&&(n.x(),n.x=()=>{}),r}n.x=()=>{n.x=()=>{},s=s.slice();for(var e=0;e<s.length;e++)o(s[e]);return(r=a)()};var o=a=>{for(var o,s,[l,i,u,h]=a,m=0,f=[];m<l.length;m++)s=l[m],n.o(e,s)&&e[s]&&f.push(e[s][0]),e[s]=0;for(o in i)n.o(i,o)&&(n.m[o]=i[o]);for(u&&u(n),c(a);f.length;)f.shift()();return h&&t.push.apply(t,h),r()},s=self.webpackChunkssr_react_firebase=self.webpackChunkssr_react_firebase||[],c=s.push.bind(s);s.push=o})(),n.x()})();
//# sourceMappingURL=app.bundle.js.map