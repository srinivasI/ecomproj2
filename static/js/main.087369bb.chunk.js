(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,n,t){e.exports=t(75)},55:function(e,n,t){},62:function(e,n,t){},64:function(e,n,t){},70:function(e,n,t){},71:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var a,r,c,i,l,o,s,u=t(0),p=t.n(u),d=t(29),m=t.n(d),b=(t(55),t(8)),f=t.n(b),h=t(7),g=t(13),v=t(17),E=t(18),O=t(20),j=t(19),y=t(21),x=t(5),w=(t(62),t(6)),k=t(16),C=t(4),I=Object(C.a)([function(e){return e.directory}],function(e){return e.sections}),L=t(1),N=t(2),S=N.b.div(a||(a=Object(L.a)(["\n\theight: ",";\n\tmin-width: 30%;\n\toverflow: hidden;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tborder: 4px dashed blue;\n\tmargin: 0 7.5px 15px;\n\toverflow: hidden;\n\t&:hover {\n\t\tcursor: pointer;\n\t\t& .background-image {\n\t\t\ttransform: scale(1.1);\n\t\t\ttransition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);\n\t\t}\n\t\t& .content {\n\t\t\topacity: 0.9;\n\t\t}\n\t}\n\t&:first-child {\n    margin-right: 7.5px;\n  }\n  &:last-child {\n    margin-left: 7.5px;\n  }\n"])),function(e){return e.size?"380px":"240px"}),U=N.b.div(r||(r=Object(L.a)(["\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-image: ",";\n"])),function(e){var n=e.imageUrl;return"url(".concat(n,")")}),T=N.b.div(c||(c=Object(L.a)(["\n  height: 90px;\n  padding: 0 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid black;\n  background-color: white;\n  opacity: 0.7;\n  position: absolute;\n"]))),A=N.b.span(i||(i=Object(L.a)(["\n  font-weight: bold;\n  margin-bottom: 6px;\n  font-size: 22px;\n  color: #4a4a4a;\n"]))),_=N.b.span(l||(l=Object(L.a)(["\n  font-weight: lighter;\n  font-size: 16px;\n"]))),R=Object(w.g)(function(e){var n=e.title,t=e.imageUrl,a=e.size,r=e.history,c=e.linkUrl,i=e.match;return p.a.createElement(S,{size:a,onClick:function(){return r.push("".concat(i.url).concat(c))}},p.a.createElement(U,{className:"background-image",imageUrl:t}),p.a.createElement(T,{className:"content"},p.a.createElement(A,null,n.toUpperCase()),p.a.createElement(_,null,"Purchase"),p.a.createElement(_,null,"more")))}),D=N.b.div(o||(o=Object(L.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]))),M=Object(C.b)({sections:I}),P=Object(x.b)(M)(function(e){var n=e.sections;return p.a.createElement(D,null,n.map(function(e){var n=e.id,t=Object(k.a)(e,["id"]);return p.a.createElement(R,Object.assign({key:n},t))}))}),z=N.b.div(s||(s=Object(L.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px 40px;\n"])));function G(e){e.history;return p.a.createElement(z,null,p.a.createElement(P,null))}var q,H,V,F,B,W,J,K,Q,Z,Y=Object(C.a)([function(e){return e.shop}],function(e){return e.collections}),X=Object(C.a)([Y],function(e){return e?Object.keys(e).map(function(n){return e[n]}):[]}),$={TOGGLE_CART_HIDDEN:"TOGGLE_CART_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM"},ee=function(){return{type:$.TOGGLE_CART_HIDDEN}},ne=function(e){return{type:$.ADD_ITEM,payload:e}},te=N.b.button(q||(q=Object(L.a)(['\n    min-width: 165px;\n    width: auto;\n    height: 30px;\n    letter-spacing: 0.5px;\n    line-height: 30px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    text-transform: uppercase;\n    font-family: "Open Sans Condensed";\n    font-weight: bolder;\n    border: none;\n    cursor: pointer;\n    border-radius: 3px;\n    display: flex;\n    justify-content: center;\n    ',"\n"])),function(e){return e.isGoogleSignIn?re:e.inverted?ae:ce}),ae=Object(N.a)(H||(H=Object(L.a)(["\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n        &:hover {\n            background-color: black;\n            color: white;\n            border: none;\n    }"]))),re=Object(N.a)(V||(V=Object(L.a)(["\n        background-color: #4285f4;\n        color: white;\n\n        &:hover {\n            background-color: white;\n            border: 1px solid #4285f4;\n            color:black;\n        }\n"]))),ce=Object(N.a)(F||(F=Object(L.a)(["\nbackground-color: red;\ncolor: white;\n&:hover {\n    background-color: white;\n    color: black;\n    border: 1px solid black;\n    transition: all 0.3s ease;\n}\n"])));function ie(e){var n=e.children,t=Object(k.a)(e,["children"]);return p.a.createElement(te,t,n)}var le=N.b.div(B||(B=Object(L.a)(["\n  width: 22vw;\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  align-items: center;\n  position: relative;\n  &:hover {\n    .image {\n      opacity: 0.8;\n    }\n    button {\n      opacity: 0.85;\n      display: flex;\n    }\n  }\n"]))),oe=Object(N.b)(ie)(W||(W=Object(L.a)(["\n  width: 80%;\n  opacity: 0.7;\n  position: absolute;\n  top: 255px;\n  display: none;\n"]))),se=N.b.div(J||(J=Object(L.a)(["\n  width: 100%;\n  height: 95%;\n  background-size: cover;\n  background-position: center;\n  margin-bottom: 5px;\n  background-image: ",";\n"])),function(e){var n=e.imageUrl;return"url(".concat(n,")")}),ue=N.b.div(K||(K=Object(L.a)(["\n  width: 100%;\n  height: 5%;\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n"]))),pe=N.b.span(Q||(Q=Object(L.a)(["\n  width: 90%;\n  margin-bottom: 15px;\n"]))),de=N.b.span(Z||(Z=Object(L.a)(["\n  width: 10%;\n  text-align: right;\n"]))),me=Object(x.b)(null,function(e){return{addItem:function(n){return e(ne(n))}}})(function(e){var n=e.item,t=e.addItem,a=n.name,r=n.price,c=n.imageUrl;return p.a.createElement(le,null,p.a.createElement(se,{className:"image",imageUrl:c}),p.a.createElement(ue,null,p.a.createElement(pe,null,a),p.a.createElement(de,null,r)),p.a.createElement(oe,{onClick:function(){return t(n)},inverted:!0},"Add to cart"))});t(64);var be=Object(x.b)(function(e,n){return{collection:(t=n.match.params.collectionId,Object(C.a)([Y],function(e){return e?e[t]:null}))(e)};var t})(function(e){var n=e.match,t=e.collection,a=t.title,r=t.items;return console.log(n.params),p.a.createElement("div",{className:"collection-page"},p.a.createElement("h2",{className:"title"},a),p.a.createElement("div",{className:"items"},r.map(function(e){return p.a.createElement(me,{key:e.id,item:e})})))}),fe=t(27),he=t.n(fe),ge=(t(65),t(68),function(){var e=Object(g.a)(f.a.mark(function e(n,t){var a,r,c,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return a=Ee.doc("users/".concat(n.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=n.displayName,c=n.email,i=new Date,e.prev=9,e.next=12,a.set(Object(h.a)({displayName:r,email:c,createdAt:i},t));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}},e,null,[[9,14]])}));return function(n,t){return e.apply(this,arguments)}}());he.a.initializeApp({apiKey:"AIzaSyAfHq_LAVL4gIH8mguL0Dragp1aWFQpWlg",authDomain:"ecom-db-f8713.firebaseapp.com",databaseURL:"https://ecom-db-f8713.firebaseio.com",projectId:"ecom-db-f8713",storageBucket:"ecom-db-f8713.appspot.com",messagingSenderId:"39362193920",appId:"1:39362193920:web:31d9128b6ebb77dc5d86e5",measurementId:"G-E4NJ30JCLD"});var ve=he.a.auth(),Ee=he.a.firestore(),Oe=new he.a.auth.GoogleAuthProvider;Oe.setCustomParameters({prompt:"select_account"});var je,ye,xe,we,ke,Ce,Ie,Le,Ne,Se,Ue,Te,Ae,_e,Re,De,Me,Pe,ze,Ge,qe,He=function(){ve.signInWithPopup(Oe)},Ve=(he.a,N.b.div(je||(je=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 30px;\n"])))),Fe=N.b.h1(ye||(ye=Object(L.a)(["\n  font-size: 28px;\n  margin-bottom: 25px;\n  cursor: pointer;\n  &:hover {\n    color: grey;\n  }\n"]))),Be=N.b.div(xe||(xe=Object(L.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),We=Object(w.g)(function(e){var n=e.title,t=e.items,a=e.history,r=e.match,c=e.routeName;return p.a.createElement(Ve,null,p.a.createElement(Fe,{onClick:function(){return a.push("".concat(r.path,"/").concat(c))}},n.toUpperCase()),p.a.createElement(Be,null,t.filter(function(e,n){return n<4}).map(function(e){return p.a.createElement(me,{key:e.id,item:e})})))}),Je=N.b.div(we||(we=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Ke=Object(C.b)({collections:X}),Qe=Object(x.b)(Ke)(function(e){var n=e.collections;return p.a.createElement(Je,null,n.map(function(e){var n=e.id,t=Object(k.a)(e,["id"]);return p.a.createElement(We,Object.assign({key:n},t))}))}),Ze={UPDATE_COLLECTIONS:"UPDATE_COLLECTIONS"},Ye=N.b.div(ke||(ke=Object(L.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction:column;\n"]))),Xe=N.b.p(Ce||(Ce=Object(L.a)(["\n    font-size: 3rem;\n    color: black;\n    font-weight:500;\n"]))),$e=N.b.div(Ie||(Ie=Object(L.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]))),en=function(e){return function(n){var t=n.isLoading,a=Object(k.a)(n,["isLoading"]);return t?p.a.createElement(Ye,null,p.a.createElement(Xe,null,"Getting the good stuff!!"),p.a.createElement($e,null)):p.a.createElement(e,a)}},nn=en(Qe),tn=en(be),an=function(e){function n(){var e,t;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(O.a)(this,(e=Object(j.a)(n)).call.apply(e,[this].concat(r)))).state={loading:!0},t.unsubscribeFromSnapshot=null,t}return Object(y.a)(n,e),Object(E.a)(n,[{key:"componentDidMount",value:function(){var e=this,n=this.props.updateCollections,t=Ee.collection("collections");this.unsubscribeFromSnapshot=t.onSnapshot(function(){var t=Object(g.a)(f.a.mark(function t(a){var r;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=a.docs.map(function(e){var n=e.data(),t=n.title,a=n.items;return{routeName:encodeURI(t.toLowerCase()),id:e.id,title:t,items:a}}).reduce(function(e,n){return e[n.title.toLowerCase()]=n,e},{}),n(r),e.setState({loading:!1});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.props.match,n=this.state.loading;return p.a.createElement("div",{className:"shop-page"},p.a.createElement(w.b,{exact:!0,path:"".concat(e.path),render:function(e){return p.a.createElement(nn,Object.assign({isLoading:n},e))}}),p.a.createElement(w.b,{path:"".concat(e.path,"/:collectionId"),render:function(e){return p.a.createElement(tn,Object.assign({isLoading:n},e))}}))}}]),n}(p.a.Component),rn=Object(x.b)(null,function(e){return{updateCollections:function(n){return e({type:Ze.UPDATE_COLLECTIONS,payload:n})}}})(an),cn=(t(70),t(26)),ln=Object(N.a)(Le||(Le=Object(L.a)(["\n  top: -19px;\n  font-size: 12px;\n  color: ",";\n"])),"black"),on=N.b.div(Ne||(Ne=Object(L.a)(["\n  position: relative;\n  margin: 45px 0;\n  input[type='password'] {\n    letter-spacing: 0.3em;\n  }\n"]))),sn=N.b.input(Se||(Se=Object(L.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 100%;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid ",";\n  margin: 25px 0;\n  &:focus {\n    outline: none;\n  }\n  &:focus ~ label {\n    ","\n  }\n"])),"grey","grey",ln),un=N.b.label(Ue||(Ue=Object(L.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n  &.shrink {\n    ","\n  }\n"])),"grey",ln),pn=function(e){var n=e.handleChange,t=e.label,a=Object(k.a)(e,["handleChange","label"]);return p.a.createElement(on,null,p.a.createElement(sn,Object.assign({onChange:n},a)),t?p.a.createElement(un,{className:a.value.length?"shrink":""},t):null)},dn=N.b.div(Te||(Te=Object(L.a)(["\n  width: 380px;\n  display: flex;\n  flex-direction: column;\n"]))),mn=N.b.h2(Ae||(Ae=Object(L.a)(["\n  margin: 10px 0;\n"]))),bn=N.b.div(_e||(_e=Object(L.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),fn=function(e){function n(e){var t;return Object(v.a)(this,n),(t=Object(O.a)(this,Object(j.a)(n).call(this,e))).handleSubmit=function(){var e=Object(g.a)(f.a.mark(function e(n){var a,r,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=t.state,r=a.email,c=a.password,e.prev=2,e.next=5,ve.signInWithEmailAndPassword(r,c);case 5:t.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(n){return e.apply(this,arguments)}}(),t.handleChange=function(e){var n=e.target,a=n.value,r=n.name;t.setState(Object(cn.a)({},r,a))},t.state={email:"",password:""},t}return Object(y.a)(n,e),Object(E.a)(n,[{key:"render",value:function(){return p.a.createElement(dn,null,p.a.createElement(mn,null,"I already have an account"),p.a.createElement("span",null,"Sign in with your email and password"),p.a.createElement("form",{onSubmit:this.handleSubmit},p.a.createElement(pn,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),p.a.createElement(pn,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),p.a.createElement(bn,null,p.a.createElement(ie,{type:"submit"}," Sign in "),p.a.createElement(ie,{onClick:He,isGoogleSignIn:!0},"Sign in with Google"))))}}]),n}(p.a.Component),hn=N.b.div(Re||(Re=Object(L.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 380px;\n"]))),gn=N.b.h2(De||(De=Object(L.a)(["\n  margin: 10px 0;\n"]))),vn=function(e){function n(){var e;return Object(v.a)(this,n),(e=Object(O.a)(this,Object(j.a)(n).call(this))).handleSubmit=function(){var n=Object(g.a)(f.a.mark(function n(t){var a,r,c,i,l,o,s;return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),a=e.state,r=a.displayName,c=a.email,i=a.password,l=a.confirmPassword,i===l){n.next=5;break}return alert("passwords don't match"),n.abrupt("return");case 5:return n.prev=5,n.next=8,ve.createUserWithEmailAndPassword(c,i);case 8:return o=n.sent,s=o.user,n.next=12,ge(s,{displayName:r});case 12:e.setState({displayName:"",email:"",password:"",confirmPassword:""}),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(5),console.error(n.t0);case 18:case"end":return n.stop()}},n,null,[[5,15]])}));return function(e){return n.apply(this,arguments)}}(),e.handleChange=function(n){var t=n.target,a=t.name,r=t.value;e.setState(Object(cn.a)({},a,r))},e.state={displayName:"",email:"",password:"",confirmPassword:""},e}return Object(y.a)(n,e),Object(E.a)(n,[{key:"render",value:function(){var e=this.state,n=e.displayName,t=e.email,a=e.password,r=e.confirmPassword;return p.a.createElement(hn,null,p.a.createElement(gn,null,"I do not have a account"),p.a.createElement("span",null,"Sign up with your email and password"),p.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},p.a.createElement(pn,{type:"text",name:"displayName",value:n,onChange:this.handleChange,label:"Display Name",required:!0}),p.a.createElement(pn,{type:"email",name:"email",value:t,onChange:this.handleChange,label:"Email",required:!0}),p.a.createElement(pn,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),p.a.createElement(pn,{type:"password",name:"confirmPassword",value:r,onChange:this.handleChange,label:"Confirm Password",required:!0}),p.a.createElement(ie,{type:"submit"},"SIGN UP")))}}]),n}(p.a.Component);function En(){return p.a.createElement("div",{className:"sign-in-and-sign-up"},p.a.createElement(fn,null),p.a.createElement(vn,null))}var On=N.b.div(Me||(Me=Object(L.a)(["\n  width: 100%;\n  display: flex;\n  min-height: 100px;\n  border-bottom: 1px solid darkgrey;\n  padding: 15px 0;\n  font-size: 20px;\n  align-items: center;\n"]))),jn=N.b.div(Pe||(Pe=Object(L.a)(["\n  width: 25%;\n  padding-right: 15px;\n  img {\n    width: 100%;\n    height: 100%;\n  }\n"]))),yn=N.b.span(ze||(ze=Object(L.a)(["\n  width: 23%;\n"]))),xn=Object(N.b)(yn)(Ge||(Ge=Object(L.a)(["\n  display: flex;\n  span {\n    margin: 0 10px;\n  }\n  div {\n    cursor: pointer;\n  }\n"]))),wn=N.b.div(qe||(qe=Object(L.a)(["\n  padding-left: 12px;\n  cursor: pointer;\n"]))),kn=Object(x.b)(null,function(e){return{clearItem:function(n){return e(function(e){return{type:$.CLEAR_ITEM_FROM_CART,payload:e}}(n))},addItem:function(n){return e(ne(n))},removeItem:function(n){return e(function(e){return{type:$.REMOVE_ITEM,payload:e}}(n))}}})(function(e){var n=e.cartItem,t=e.clearItem,a=e.addItem,r=e.removeItem,c=n.name,i=n.imageUrl,l=n.price,o=n.quantity;return p.a.createElement(On,null,p.a.createElement(jn,null,p.a.createElement("img",{src:i,alt:"item"})),p.a.createElement(yn,null,c),p.a.createElement(xn,null,p.a.createElement("div",{onClick:function(){return r(n)}},"\u276e"),p.a.createElement("span",null,o),p.a.createElement("div",{onClick:function(){return a(n)}},"\u276f")),p.a.createElement(yn,null,l),p.a.createElement(wn,{onClick:function(){return t(n)}},"\u2715"))}),Cn=t(46),In=t.n(Cn);function Ln(e){var n=e.price,t=100*n;return p.a.createElement(In.a,{label:"Pay Now",name:"Aspire Ltd.",billingAddress:!0,shippingAddress:!0,image:"https://svgshare.com/i/QaG.svg",description:"Your total is ".concat(n),amount:t,panelLabel:"Pay Now",token:function(e){console.log(e),alert("dummy payment successfull")},stripeKey:"pk_test_51Hcr59If3Hn5BLfLNdteyaTLDzz6Sf4g9CMEK21WZm7BHjEXbVLl2uqXNK4b9Gex3GBZrZTiP2aqV5QkncN7uasa001eoP4pJr"})}var Nn=function(e){return e.cart},Sn=Object(C.a)([Nn],function(e){return e.cartItems}),Un=Object(C.a)([Nn],function(e){return e.hidden}),Tn=Object(C.a)([Sn],function(e){return e.reduce(function(e,n){return e+n.quantity},0)}),An=Object(C.a)([Sn],function(e){return e.reduce(function(e,n){return e+n.quantity*n.price},0)});t(71);var _n=Object(C.b)({cartItems:Sn,total:An}),Rn=Object(x.b)(_n)(function(e){var n=e.cartItems,t=e.total;return p.a.createElement("div",{className:"checkout-page"},p.a.createElement("div",{className:"checkout-header"},p.a.createElement("div",{className:"header-block"},p.a.createElement("span",null,"Products")),p.a.createElement("div",{className:"header-block"},p.a.createElement("span",null,"Description")),p.a.createElement("div",{className:"header-block"},p.a.createElement("span",null,"Quantity")),p.a.createElement("div",{className:"header-block"},p.a.createElement("span",null,"Price")),p.a.createElement("div",{className:"header-block"},p.a.createElement("span",null,"Delete"))),n.map(function(e){return p.a.createElement(kn,{key:e.id,cartItem:e})}),p.a.createElement("div",{className:"total"},p.a.createElement("span",null,"Total= $",t)),p.a.createElement("div",{className:"test-warning"},"Please use any data for address and name and email, also use ",p.a.createElement("br",null),"card number: 4242 4242 4242 4242, expiry: 02/22, cvv: 123 for dummy payment"),p.a.createElement(Ln,{price:t}))});function Dn(){return(Dn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function Mn(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var Pn=p.a.createElement("g",null,p.a.createElement("path",{d:"M144.852,90.67 L144.852,262.862 L127.919,273.211 L110.973,262.807 L110.973,90.803 L67.095,117.819 L67.095,265.074 L127.919,302.291 L189.258,264.809 L189.258,117.725 L144.852,90.67 L144.852,90.67 Z M127.919,0 L0,77.502 L0,224.776 L33.223,244.348 L33.223,97.06 L127.945,39.464 L222.755,96.976 L223.146,97.199 L223.104,244.128 L256,224.776 L256,77.502 L127.919,0 L127.919,0 Z",fill:"black"})),zn=function(e){var n=e.svgRef,t=Mn(e,["svgRef"]);return p.a.createElement("svg",Dn({width:"50px",height:"39px",viewBox:"0 0 256 303",preserveAspectRatio:"xMidYMid",ref:n},t),Pn)},Gn=p.a.forwardRef(function(e,n){return p.a.createElement(zn,Dn({svgRef:n},e))});t.p;function qn(){return(qn=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function Hn(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var Vn,Fn,Bn,Wn=p.a.createElement("g",null),Jn=p.a.createElement("g",null),Kn=p.a.createElement("g",null),Qn=p.a.createElement("g",null),Zn=p.a.createElement("g",null),Yn=p.a.createElement("g",null),Xn=p.a.createElement("g",null),$n=p.a.createElement("g",null),et=p.a.createElement("g",null),nt=p.a.createElement("g",null),tt=p.a.createElement("g",null),at=p.a.createElement("g",null),rt=p.a.createElement("g",null),ct=p.a.createElement("g",null),it=p.a.createElement("g",null),lt=function(e){var n=e.svgRef,t=Hn(e,["svgRef"]);return p.a.createElement("svg",qn({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:n},t),p.a.createElement("g",null,p.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),p.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),p.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),p.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),p.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),Wn,Jn,Kn,Qn,Zn,Yn,Xn,$n,et,nt,tt,at,rt,ct,it)},ot=p.a.forwardRef(function(e,n){return p.a.createElement(lt,qn({svgRef:n},e))}),st=(t.p,N.b.div(Vn||(Vn=Object(L.a)(["\n    width: 45px;\n    height: 45px;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n"])))),ut=Object(N.b)(ot)(Fn||(Fn=Object(L.a)(["\n        width: 24px;\n        height: 24px;\n        "]))),pt=N.b.span(Bn||(Bn=Object(L.a)(["\nposition: absolute;\n        font-size: 10px;\n        font-weight: bold;\n        bottom: 12px;\n"])));var dt,mt,bt,ft,ht,gt=Object(C.b)({itemCount:Tn}),vt=Object(x.b)(gt,function(e){return{toggleCartHidden:function(){return e(ee())}}})(function(e){var n=e.toggleCartHidden,t=e.itemCount;return p.a.createElement(st,{onClick:n},p.a.createElement(ut,null),p.a.createElement(pt,null,t))}),Et=N.b.img(dt||(dt=Object(L.a)(["\nwidth: 30%;\n\n"]))),Ot=N.b.div(mt||(mt=Object(L.a)(["\nwidth: 100%;\n    display: flex;\n    height: 80px;\n    margin-bottom: 15px;\n"]))),jt=N.b.div(bt||(bt=Object(L.a)(["\nwidth: 70%;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: center;\n        padding: 10px 20px;"]))),yt=N.b.span(ft||(ft=Object(L.a)(["font-size: 16px;"]))),xt=N.b.span(ht||(ht=Object(L.a)([""])));var wt,kt,Ct,It,Lt,Nt,St,Ut,Tt=function(e){var n=e.item,t=n.imageUrl,a=n.price,r=n.name,c=n.quantity;return p.a.createElement(Ot,null,p.a.createElement(Et,{src:t,alt:r}),p.a.createElement(jt,null,p.a.createElement(yt,null,r),p.a.createElement(xt,null,c,"* $",a)))},At=N.b.div(wt||(wt=Object(L.a)(["\n    position: absolute;\n    width: 240px;\n    height: 340px;\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    border: 1px solid black;\n    background-color: white;\n    top: 90px;\n    right: 40px;\n    z-index: 5;\n"]))),_t=N.b.div(kt||(kt=Object(L.a)(["\n        width: 100%;\n        height: 240px;\n        display: flex;\n        flex-direction: column;\n        overflow-y: scroll;\n        "]))),Rt=N.b.span(Ct||(Ct=Object(L.a)(["\n        font-size: 25px;\n        margin: 50px auto;\n"]))),Dt=Object(N.b)(ie)(It||(It=Object(L.a)(["\nmargin-top: auto;\n"]))),Mt=Object(C.b)({cartItems:Sn}),Pt=Object(w.g)(Object(x.b)(Mt)(function(e){var n=e.cartItems,t=e.history,a=e.dispatch;return p.a.createElement(At,null,p.a.createElement(_t,null,n.length?n.map(function(e){return p.a.createElement(Tt,{key:e.id,item:e})}):p.a.createElement(Rt,null,"Your Cart is empty")),p.a.createElement(Dt,{onClick:function(){t.push("/checkout"),a(ee())}},"GO TO CHECKOUT"))})),zt=t(15),Gt=N.b.div(Lt||(Lt=Object(L.a)(["\n    height: 70px;\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n"]))),qt=Object(N.b)(zt.b)(Nt||(Nt=Object(L.a)(["\n    height: 100%;\n    width: 70px;\n    padding: 25px;\n    &:hover {\n        transform: scale(1.1);\n        transition: transform 200ms;\n"]))),Ht=N.b.div(St||(St=Object(L.a)(["\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n"]))),Vt=Object(N.b)(zt.b)(Ut||(Ut=Object(L.a)(["\n    padding: 10px 15px;\n    text-decoration: none;\n    cursor: pointer;\n    &:hover {\n        transform: scale(1.1);\n        transition: transform 200ms;\n    }\n"]))),Ft=Object(C.a)([function(e){return e.user}],function(e){return e.currentUser});var Bt=Object(C.b)({currentUser:Ft,hidden:Un}),Wt=Object(x.b)(Bt)(function(e){var n=e.currentUser,t=e.hidden;return p.a.createElement(Gt,{className:"header"},p.a.createElement(qt,{to:"/"},p.a.createElement(Gn,{className:"logo"}),"SriniStore"),p.a.createElement(Ht,null,p.a.createElement(Vt,{to:"/shop"},"SHOP"),p.a.createElement(Vt,{to:"/shop"},"CONTACT"),n?p.a.createElement(Vt,{as:"div",onClick:function(){return ve.signOut()}},"SIGN OUT"):p.a.createElement(Vt,{to:"/signin"},"SIGN IN"),p.a.createElement(vt,null)),t?null:p.a.createElement(Pt,null))}),Jt="SET_CURRENT_USER",Kt=function(e){function n(){var e,t;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(O.a)(this,(e=Object(j.a)(n)).call.apply(e,[this].concat(r)))).unsubscribeFromAuth=null,t}return Object(y.a)(n,e),Object(E.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=ve.onAuthStateChanged(function(){var n=Object(g.a)(f.a.mark(function n(t){return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=5;break}return n.next=3,ge(t);case 3:n.sent.onSnapshot(function(n){e({currentUser:Object(h.a)({id:n.id},n.data())})});case 5:e(t);case 6:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:"App"},p.a.createElement(Wt,null),p.a.createElement(w.d,null,p.a.createElement(w.b,{exact:!0,path:"/",component:G}),p.a.createElement(w.b,{path:"/shop",component:rn}),p.a.createElement(w.b,{path:"/checkout",component:Rn}),p.a.createElement(w.b,{path:"/signin",render:function(){return e.props.currentUser?p.a.createElement(w.a,{to:"/"}):p.a.createElement(En,null)}})))}}]),n}(u.Component),Qt=Object(C.b)({currentUser:Ft}),Zt=Object(x.b)(Qt,function(e){return{setCurrentUser:function(n){return e(function(e){return{type:Jt,payload:e}}(n))}}})(Kt),Yt=t(47),Xt=t(14),$t=t(30),ea=(t(72),{currentUser:null}),na=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ea,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Jt:return Object(h.a)({},e,{currentUser:n.payload});default:return e}},ta=t(49),aa=function(e,n){return 1===e.find(function(e){return e.id===n.id}).quantity?e.filter(function(e){return e.id!==n.id}):e.map(function(e){return e.id===n.id?Object(h.a)({},e,{quantity:e.quantity-1}):e})},ra={hidden:!0,cartItems:[]},ca=function(){var e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ra,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case $.TOGGLE_CART_HIDDEN:return Object(h.a)({},t,{hidden:!t.hidden});case $.ADD_ITEM:return Object(h.a)({},t,{cartItems:(e=t.cartItems,n=a.payload,e.find(function(e){return e.id===n.id})?e.map(function(e){return e.id===n.id?Object(h.a)({},e,{quantity:e.quantity+1}):e}):[].concat(Object(ta.a)(e),[Object(h.a)({},n,{quantity:1})]))});case $.CLEAR_ITEM_FROM_CART:return Object(h.a)({},t,{cartItems:t.cartItems.filter(function(e){return e.id!==a.payload.id})});case $.REMOVE_ITEM:return Object(h.a)({},t,{cartItems:aa(t.cartItems,a.payload)});default:return t}},ia={sections:[{title:"SriniHats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:" mens ",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},la=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ia;return(arguments.length>1?arguments[1]:void 0).type,e},oa={collections:null},sa=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oa,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Ze.UPDATE_COLLECTIONS:return Object(h.a)({},e,{collections:n.payload});default:return e}},ua=t(48),pa={key:"root",storage:t.n(ua).a,whitelist:["cart"]},da=Object(Xt.c)({user:na,cart:ca,directory:la,shop:sa}),ma=Object($t.a)(pa,da);var ba=Object(Xt.d)(ma,Xt.a.apply(void 0,[])),fa=Object($t.b)(ba);m.a.render(p.a.createElement(x.a,{store:ba},p.a.createElement(zt.a,null,p.a.createElement(Yt.a,{persistor:fa},p.a.createElement(Zt,null)))),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.087369bb.chunk.js.map