(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(46),l=a.n(r),i=(a(58),a(47)),m=a(3),o=(a(59),a(60),a(48)),s=a.n(o),u=a(49),d=a.n(u),p=a(12),E=Object(n.createContext)(),g=function(e){var t=e.reducer,a=e.initialState,r=e.children;return c.a.createElement(E.Provider,{value:Object(n.useReducer)(t,a)},r)},h=function(){return Object(n.useContext)(E)},v=a(30),f=a.n(v),_=(f.a.initializeApp({apiKey:"AIzaSyDimzR25rc2PEZW0JLodoWaT5HsgIXMmno",authDomain:"clone-ae5f5.firebaseapp.com",databaseURL:"https://clone-ae5f5.firebaseio.com",projectId:"clone-ae5f5",storageBucket:"clone-ae5f5.appspot.com",messagingSenderId:"753509707084",appId:"1:753509707084:web:4ac989ea9984e350d133e9",measurementId:"G-Y2P85H68WF"}).firestore(),f.a.auth());var b=function(){var e=h(),t=Object(m.a)(e,2),a=t[0],n=a.cart,r=a.user;return t[1],c.a.createElement("div",{className:"header"},c.a.createElement(p.b,{to:"/"},c.a.createElement("img",{className:"header_logo",src:"https://pngimg.com/uploads/amazon/amazon_PNG11.png"})),c.a.createElement("div",{className:"header_search"},c.a.createElement("input",{type:"text",className:"header_searchInput"}),c.a.createElement(s.a,{className:"header_searchIcon"})),c.a.createElement("div",{className:"header_nav"},c.a.createElement(p.b,{to:!r&&"/login"},c.a.createElement("div",{onClick:function(){r&&_.signOut()},className:"header_option"},c.a.createElement("span",{className:"header_optionLineOne"},"Hello ",r?r.email:"Guest"),c.a.createElement("span",{className:"header_optionLineTwo"},r?"Sign Out":"Sign In"))),c.a.createElement("div",{className:"header_option"},c.a.createElement("span",{className:"header_optionLineOne"},"Returns"),c.a.createElement("span",{className:"header_optionLineTwo"}," & Orders")),c.a.createElement("div",{className:"header_option"},c.a.createElement("span",{className:"header_optionLineOne"},"Your"),c.a.createElement("span",{className:"header_optionLineTwo"},"Prime")),c.a.createElement(p.b,{to:"/checkout"},c.a.createElement("div",{className:"header_optionBasket"},c.a.createElement(d.a,null),c.a.createElement("span",{className:"header_optionLineTwo header_basketCount"},null===n||void 0===n?void 0:n.length)))))};a(76),a(77);var N=function(e){var t=e.id,a=e.title,n=e.image,r=e.price,l=e.rating,i=h(),o=Object(m.a)(i,2),s=(o[0].cart,o[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product_info"},c.a.createElement("p",null,a),c.a.createElement("p",{className:"product_price"},c.a.createElement("small",null,"\u20b9"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"product_rating"},Array(l).fill().map((function(e,t){return c.a.createElement("p",null,"\u2b50")})))),c.a.createElement("img",{src:n,alt:""}),c.a.createElement("button",{className:"button",onClick:function(){s({type:"ADD_TO_CART",item:{id:t,title:a,image:n,price:r,rating:l}})}},"Add to Cart"))};var O=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home_container"},c.a.createElement("img",{className:"home_image",src:"https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/GW-Dec/FTV_PC-GW-hero_1500x600_1x._CB446558100_.jpg",alt:""}),c.a.createElement("div",{className:"home_row"},c.a.createElement(N,{id:"001",title:"HP Pavilion Gaming DK0268TX 15.6-inch Laptop,Shadow\r Black",price:67490,image:"https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg",rating:5}),c.a.createElement(N,{id:"002",title:"Samsung Galaxy S10 Plus (White, 8GB RAM, 128GB Storage)",price:52999,image:"https://images-na.ssl-images-amazon.com/images/I/61dvlh%2BCsqL._SL1500_.jpg",rating:4}),c.a.createElement(N,{id:"003",title:"Jack & Jones Men's T-Shirt",price:849,image:"https://images-na.ssl-images-amazon.com/images/I/81oqWtXYyIL._UL1500_.jpg",rating:3})),c.a.createElement("div",{className:"home_row"},c.a.createElement(N,{id:"004",title:"JBL Pulse 4 Portable Bluetooth Speaker",price:1500,image:"https://images-na.ssl-images-amazon.com/images/I/61HXIajZwhL._SL1500_.jpg",rating:5}),c.a.createElement(N,{id:"005",title:"Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 5 lbs",price:5388,image:"https://images-na.ssl-images-amazon.com/images/I/713RJa%2BLENL._SL1500_.jpg",rating:4})),c.a.createElement("div",{className:"home_row"},c.a.createElement(N,{id:"006",title:"Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart Android LED TV",price:109999,image:"https://images-na.ssl-images-amazon.com/images/I/71vGNco7X2L._SL1500_.jpg",rating:5}))))},j=a(4),y=(a(78),a(79),a(27)),S=a.n(y),C=a(34),k=a(20),w=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},P=function(e,t){switch(console.log(t),t.type){case"ADD_TO_CART":return Object(k.a)(Object(k.a)({},e),{},{cart:[].concat(Object(C.a)(e.cart),[t.item])});case"REMOVE_FROM_CART":var a=e.cart.findIndex((function(e){return e.id===t.id})),n=Object(C.a)(e.cart);return a>=0?n.splice(a,1):console.warn("cant remove Product (id: ${action.id}) as its not in cart"),Object(k.a)(Object(k.a)({},e),{},{cart:n});case"SET_USER":return Object(k.a)(Object(k.a)({},e),{},{user:t.user});default:return e}};var L=function(){var e=Object(j.f)(),t=h(),a=Object(m.a)(t,2),n=a[0].cart;return a[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(S.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",n.length," items):",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal_gift"},c.a.createElement("input",{type:"checkbox"}),"This order contains a gift"))},decimalScale:2,value:w(n),displayType:"text",thousandSeparator:!0,prefix:" \u20b9"}),c.a.createElement("button",{onClick:function(t){return e.push("/payment")}},"Proceed to Checkout"))};a(81);var T=function(e){var t=e.id,a=e.image,n=e.title,r=e.price,l=e.rating,i=h(),o=Object(m.a)(i,2),s=(o[0].cart,o[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"checkoutProduct_image",src:a,alt:""}),c.a.createElement("div",{className:"checkoutProduct_info"},c.a.createElement("p",{className:"checkoutProduct_title"},n),c.a.createElement("p",{className:"checkoutProduct_price"},c.a.createElement("small",null,"\u20b9"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct_rating"},Array(l).fill().map((function(e,t){return c.a.createElement("p",null,"\u2b50")}))),c.a.createElement("button",{onClick:function(){s({type:"REMOVE_FROM_CART",id:t})}},"Remove from Cart")))};var I=function(){var e=h(),t=Object(m.a)(e,2),a=t[0],n=a.cart,r=a.user;return t[1],c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout_left"},c.a.createElement("img",{src:"https://images-na.ssl-Images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.JPG",alt:"",className:"checkout_ad"}),c.a.createElement("div",null,c.a.createElement("h3",null," Hello ",null===r||void 0===r?void 0:r.email),c.a.createElement("h2",{className:"checkout_title"},"Your Shopping Cart"),n.map((function(e){return c.a.createElement(T,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"checkout_right"},c.a.createElement(L,null)))};a(82);var x=function(){var e=Object(j.f)(),t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),o=Object(m.a)(i,2),s=o[0],u=o[1];return c.a.createElement("div",{className:"login"},c.a.createElement(p.b,{to:"/"},c.a.createElement("img",{className:"login_logo",src:"https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp",alt:""})),c.a.createElement("div",{className:"login_container"},c.a.createElement("h1",null,"Sign-in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:s,onChange:function(e){return u(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),_.signInWithEmailAndPassword(r,s).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_signInButton"},"Sign In")),c.a.createElement("p",null,"By continuing, you agree to Amazon's fake clone's Conditions of Use and Privacy Notice."),c.a.createElement("button",{onClick:function(t){t.preventDefault(),_.createUserWithEmailAndPassword(r,s).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_registerButton"},"Create your Amazon Account")))},A=a(22),B=a.n(A),R=a(33),z=(a(84),a(19)),D=a(50),G=a.n(D);var W=function(){var e=h(),t=Object(m.a)(e,2),a=t[0],r=a.cart,l=a.user,i=(t[1],Object(j.f)()),o=Object(z.useStripe)(),s=Object(z.useElements)(),u=Object(n.useState)(!1),d=Object(m.a)(u,2),E=d[0],g=d[1],v=Object(n.useState)(""),f=Object(m.a)(v,2),_=f[0],b=f[1],N=Object(n.useState)(null),O=Object(m.a)(N,2),y=O[0],C=O[1],k=Object(n.useState)(!0),P=Object(m.a)(k,2),L=P[0],I=P[1],x=Object(n.useState)(!0),A=Object(m.a)(x,2),D=A[0],W=A[1];Object(n.useEffect)((function(){(function(){var e=Object(R.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G()({method:"post",url:"/payments/create?total=".concat(100*w(r))});case 2:t=e.sent,W(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),console.log("THE SECRET IS >>>",D);var H=function(){var e=Object(R.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),b(!0),e.next=4,o.confirmCardPayment(D,{payment_method:{card:s.getElement(z.CardElement)}}).then((function(e){e.paymentIntent;g(!0),C(null),b(!1),i.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"payment"},c.a.createElement("div",{className:"payment_container"},c.a.createElement("h1",null,"Checkout (",c.a.createElement(p.b,{to:"/checkout"}," ",null===r||void 0===r?void 0:r.length," items "),")"),c.a.createElement("div",{className:"payment_section"},c.a.createElement("div",{className:"payment_title"},c.a.createElement("h3",null,"Delivery Address")),c.a.createElement("div",{className:"payment_address"},c.a.createElement("p",null,null===l||void 0===l?void 0:l.email),c.a.createElement("p",null,"1332B/8 Kalkaji"),c.a.createElement("p",null,"New Delhi 110019"))),c.a.createElement("div",{className:"payment_section"},c.a.createElement("div",{className:"payment_title"},c.a.createElement("h3",null,"Review items and delivery")),c.a.createElement("div",{className:"payment_items"},r.map((function(e){return c.a.createElement(T,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"payment_section"},c.a.createElement("div",{className:"payment_title"},c.a.createElement("h3",null,"Payment Method")),c.a.createElement("div",{className:"payment_details"},c.a.createElement("form",{onSubmit:H},c.a.createElement(z.CardElement,{onChange:function(e){I(e.empty),C(e.error?e.error.message:"")}}),c.a.createElement("div",{className:"payment_priceContainer"},c.a.createElement(S.a,{renderText:function(e){return c.a.createElement("h3",null,"Order Total: ",e," ")},decimalScale:2,value:w(r),displayType:"text",thousandSeparator:!0,prefix:" \u20b9"}),c.a.createElement("button",{disabled:_||L||E},c.a.createElement("span",null,_?c.a.createElement("p",null,"Processing"):"Buy Now"))),y&&c.a.createElement("div",null,y))))))},H=a(51),M=Object(H.a)("pk_test_51HQB3gKXfixVhC3fVHY2ng0Oc4LULCjl2quMfU8CGvs1RmV1mHkS8LCqYuYE6hsxYsd27Drx5GbvX248WCXpVYnC00oeWJfpBi");var U=function(){var e=h(),t=Object(m.a)(e,2);Object(i.a)(t[0]);var a=t[1];return Object(n.useEffect)((function(){_.onAuthStateChanged((function(e){console.log("The user is >>>",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),c.a.createElement(p.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(j.c,null,c.a.createElement(j.a,{path:"/login"},c.a.createElement(x,null)),c.a.createElement(j.a,{path:"/checkout"},c.a.createElement(b,null),c.a.createElement(I,null)),c.a.createElement(j.a,{path:"/payment"},c.a.createElement(b,null),c.a.createElement(z.Elements,{stripe:M},c.a.createElement(W,null))),c.a.createElement(j.a,{path:"/"},c.a.createElement(b,null),c.a.createElement(O,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,{initialState:{cart:[]},reducer:P},c.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports=a(102)},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.7221b252.chunk.js.map