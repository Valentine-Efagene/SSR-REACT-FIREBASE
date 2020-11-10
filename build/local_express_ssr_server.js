(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("express");var r=e.n(t);const n=require("react");var s=e.n(n);const a=require("react-dom/server"),i=require("react-router-dom"),o=require("redux"),c=require("react-redux"),l=require("react-bootstrap"),u=require("react-router-bootstrap"),m=require("@babel/runtime/helpers/extends");var d=e.n(m);const h=require("firebase/app");var p=e.n(h);require("firebase/auth"),require("firebase/firestore"),require("firebase/firebase-database");class E extends s().Component{componentDidUpdate(){const{showing:e,onDismiss:t}=this.props;e&&(clearTimeout(this.dismissTimer),this.dismissTimer=setTimeout(t,5e3))}componentWillUnmount(){clearTimeout(this.dismissTimer)}render(){const{showing:e,bsStyle:t,onDismiss:r,children:n}=this.props;return s().createElement(l.Collapse,{in:e},s().createElement("div",{style:{position:"fixed",bottom:20,left:20}},s().createElement(l.Alert,{bsStyle:t,onDismiss:r},n)))}}const v={};async function b(){const e=p().firestore();let t=[];try{(await e.collection("contacts").get()).forEach((e=>{t.push(e.data())}))}catch(e){showError("Home Snapshot error: "+e)}return t}const f=(y=function(e){var t;const{showSuccess:r,showError:a}=e,[i,o]=(0,n.useState)(v.initialData?v.initialData:null);return delete v.initialData,(0,n.useEffect)((()=>{(async()=>{try{let e=v.initialData?v.initialData:await b();o(e)}catch(e){a("Home useEffect fetchData error: "+e)}})()}),[]),s().createElement(s().Fragment,null,s().createElement("div",{className:"text-center"},s().createElement("h3",null,"Server-Side Rendering"),s().createElement("h3",null,null===(t=i[1])||void 0===t?void 0:t.name)))},class extends s().Component{constructor(e){super(e),this.state={toastVisible:!1,toastMessage:"",toastType:"success"},this.showSuccess=this.showSuccess.bind(this),this.showError=this.showError.bind(this),this.dismissToast=this.dismissToast.bind(this)}showSuccess(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"success"})}showError(e){this.setState({toastVisible:!0,toastMessage:e,toastType:"danger"})}dismissToast(){this.setState({toastVisible:!1})}render(){const{toastType:e,toastVisible:t,toastMessage:r}=this.state;return s().createElement(s().Fragment,null,s().createElement(y,d()({showError:this.showError,showSuccess:this.showSuccess,dismissToast:this.dismissToast},this.props)),s().createElement(E,{bsStyle:e,showing:t,onDismiss:this.dismissToast},r))}});var y;f.fetchData=b;const g=f;function w(e){return"/ssr"+e}const T=[{path:w("/home"),component:g},{path:w("/about"),component:function(){return s().createElement("div",{className:"text-center"},s().createElement("h3",null,"React Server-Side Rendering Demo version 0.9"),s().createElement("h4",null,"API version 1.0"))}},{path:w("/redux-test"),component:function(){var e;const t=v.count,r=null===(e=v.session)||void 0===e?void 0:e.appVisits;let n;n="undefined"==typeof window?(0,c.useSelector)((()=>t)):(0,c.useSelector)((e=>e.count));const a=(0,c.useDispatch)();return s().createElement("div",{className:"App"},s().createElement("header",{className:"App-header"},s().createElement("h1",null,"You have visited this app ",r," ",1===r?"time":"times","."),s().createElement("h1",null,"Counter ",n),s().createElement("button",{onClick:()=>a({type:"DECREMENT"})},"-"),s().createElement("button",{onClick:()=>a({type:"INCREMENT",payload:undefined})},"+")))}},{path:w("*"),component:function(){return s().createElement("h1",null,"Page Not Found")}}];function S(){return(0,i.useLocation)(),w("/"),s().createElement(i.Switch,null,s().createElement(i.Redirect,{exact:!0,from:w("/"),to:w("/home")}),T.map((e=>s().createElement(i.Route,d()({},e,{key:e.path})))))}function N(){return s().createElement("div",null,s().createElement(x,null),s().createElement(l.Container,{fluid:!0},s().createElement(S,null)),s().createElement(D,null))}function D(){return s().createElement("small",null,s().createElement("hr",null),s().createElement("p",{className:"text-center"},"Full source code available at this"," ",s().createElement("a",{href:"https://github.com/Valentine-Efagene/MERN"},"Github repository")))}function x({user:e}){let t="";return e&&(t=s().createElement(u.LinkContainer,{to:"/ContactAdd"},s().createElement(l.NavItem,null,"Add Contact"),s().createElement(l.Container,{fluid:!0},s().createElement(S,null)))),s().createElement(l.Navbar,{bg:"light",expand:"lg"},s().createElement(l.Navbar.Toggle,{"aria-controls":"basic-navbar-nav"}),s().createElement(l.Navbar.Collapse,{id:"basic-navbar-nav"},s().createElement(l.Nav,{className:"mr-auto"},s().createElement(u.LinkContainer,{to:w("/home")},s().createElement(l.NavLink,null,"Home")),s().createElement(u.LinkContainer,{to:w("/redux-test")},s().createElement(l.NavLink,null,"Redux Test")),s().createElement(u.LinkContainer,{to:w("/about")},s().createElement(l.NavLink,null,s().createElement(l.NavItem,null,"About"))),"",t)))}w("/");const C=require("serialize-javascript");var R=e.n(C);const q=(0,o.combineReducers)({count:(e=0,t)=>{switch(t.type){case"INCREMENT":return e+(t.payload||1);case"DECREMENT":return e-(t.payload||1);default:return e}},isLogged:(e=!1,t)=>{switch(t.type){case"SIGN_IN":return!0;default:return e}},initialData:(e={},t)=>{switch(t.type){case"SET_INITIAL_DATA":return t.payload;default:return e}},userData:(e={},t)=>{switch(t.type){case"SET_USER_DATA":return t.payload;default:return e}}}),A=require("path");var L=e.n(A);const _=process.env.PORT||3001,k=r()();k.use(r().static(L().resolve(__dirname,"..","dist/ssr"))),k.get("*",(function(e,t){const r={},n=(0,o.createStore)(q),l=s().createElement(c.Provider,{store:n},s().createElement(i.StaticRouter,{location:e.url,context:r},s().createElement(N,null))),u=(0,a.renderToString)(l);r.url?(console.log("context URL: "+r.url),t.redirect(301,r.url)):(console.log("No context URL"),t.send(function(e,t){return`\n    <html>\n      <head>\n        <meta charset="utf-8" />\n        <title>Server-side Rendering</title>\n        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css" >\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n      </head>\n      <body>\n        <div id="root">${e}</div>\n        <script>\n          window.__PRELOADED_STATE__ = ${R()(t)}\n        <\/script>\n        <script type="text/javascript" src="app.bundle.js"><\/script>\n        <script type="text/javascript" src="vendor.bundle.js"><\/script>\n      </body>\n    </html>\n  `}(u,{counter:9,isLogged:!1})))})),k.listen(_,(()=>{console.log("http://localhost:"+_)}))})();
//# sourceMappingURL=local_express_ssr_server.js.map