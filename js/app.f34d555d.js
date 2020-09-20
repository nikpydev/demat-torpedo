(function(t){function n(n){for(var o,i,r=n[0],c=n[1],u=n[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(n);while(f.length)f.shift()();return s.push.apply(s,u||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],o=!0,r=1;r<e.length;r++){var c=e[r];0!==a[c]&&(o=!1)}o&&(s.splice(n--,1),t=i(i.s=e[0]))}return t}var o={},a={app:0},s=[];function i(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=o,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/demat-torpedo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=n,r=r.slice();for(var u=0;u<r.length;u++)n(r[u]);var l=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var o=e("85ec"),a=e.n(o);a.a},1:function(t,n){},"56d7":function(t,n,e){"use strict";e.r(n);var o={};e.r(o),e.d(o,"loadData",(function(){return pt}));e("4de4"),e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container-fluid"},[e("app-header"),e("div",[e("transition",{attrs:{name:"slide",mode:"out-in"}},[e("router-view")],1)],1)],1)},i=[],r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/demat-torpedo"}},[t._v("Stock Trader")]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto nav-tabs"},[e("router-link",{attrs:{to:"/demat-torpedo/portfolio",activeClass:"active",tag:"li"}},[e("a",{staticClass:"nav-link"},[t._v("Portfolio")])]),e("router-link",{attrs:{to:"/demat-torpedo/stocks",activeClass:"active",tag:"li"}},[e("a",{staticClass:"nav-link"},[t._v("Stocks")])])],1),e("ul",{staticClass:"navbar-nav"},[e("li",[e("a",{staticClass:"nav-link",staticStyle:{cursor:"pointer"},on:{click:t.endDay}},[t._v("End Day")])]),e("li",{staticClass:"dropdown show"},[e("a",{staticClass:"dropdown-toggle nav-link",attrs:{"data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"}},[t._v("Save & Load")]),e("ul",{staticClass:"dropdown-menu"},[e("li",[e("a",{staticClass:"nav-link",staticStyle:{cursor:"pointer"},on:{click:t.saveData}},[t._v("Save Data")])]),e("li",[e("a",{staticClass:"nav-link",staticStyle:{cursor:"pointer"},on:{click:t.loadData}},[t._v("Load Data")])])])])]),e("strong",{staticClass:"navbar-text ml-2"},[t._v("Funds: "+t._s(t._f("currency")(t.funds)))])])],1)])},c=[],u=e("5530"),l=e("2f62"),d=e("8aa5");e("e71f");var f={apiKey:"AIzaSyDFnJE_YzuvUkn5H0IUxOpfiVwxzeX8UeI",authDomain:"vuejs-wolf-of-wallstreet.firebaseapp.com",databaseURL:"https://vuejs-wolf-of-wallstreet.firebaseio.com",projectId:"vuejs-wolf-of-wallstreet",storageBucket:"vuejs-wolf-of-wallstreet.appspot.com",messagingSenderId:"117401905831",appId:"1:117401905831:web:2b8309ab6aa61151190982",measurementId:"G-F7LZ935LF5"};d["initializeApp"](f);var p=d["firestore"](),v=function(t){p.collection("user").doc("data").set(t).then((function(){console.log("Document successfully written!")})).catch((function(t){console.error("Error writing document: ",t)}))},m={data:function(){return{isDropdownOpen:!1}},computed:{funds:function(){return this.$store.getters.funds}},methods:Object(u["a"])(Object(u["a"])({},Object(l["b"])({randomizeStocks:"randomizeStocks",fetchData:"loadData"})),{},{endDay:function(){this.randomizeStocks()},saveData:function(){var t={funds:this.$store.getters.funds,stockPortfolio:this.$store.getters.stockPortfolio,stocks:this.$store.getters.stocks};v(t)},loadData:function(){this.fetchData()}})},k=m,y=e("2877"),h=Object(y["a"])(k,r,c,!1,null,null,null),b=h.exports,_={components:{appHeader:b},created:function(){this.$store.dispatch("initStocks")}},S=_,g=(e("034f"),Object(y["a"])(S,s,i,!1,null,null,null)),C=g.exports,O=e("8c4f"),q=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Trade or View your Portfolio")]),e("h6",[t._v("You may Save & Load you Data")]),e("h6",[t._v('Click on "End Day" to begin a New Day!')]),e("hr"),e("p",[t._v("Your Funds: "+t._s(t._f("currency")(t.funds)))])])},w=[],x={computed:{funds:function(){return this.$store.getters.funds}}},j=x,P=Object(y["a"])(j,q,w,!1,null,null,null),D=P.exports,T=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row"},t._l(t.stocks,(function(t,n){return e("app-stock",{key:n,attrs:{stock:t}})})),1)},E=[],$=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-2 mt-2"},[e("div",{staticClass:"card border-dark"},[e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-text"},[t._v(t._s(t.stock.name))]),e("p",{staticClass:"card-text"},[e("small",{staticClass:"text-muted"},[t._v("(Price: $"+t._s(t.stock.price)+" | Quantity: "+t._s(t.stock.quantity)+")")])])]),e("div",{staticClass:"card-body text-dark"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-control",class:{"border-danger":t.insufficientQuantity||t.quantity<0||Math.floor(t.quantity)!=t.quantity},attrs:{type:"number",placeholder:"Quantity"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||(t.quantity=n.target.value)}}})]),e("div",{staticClass:"card-footer text-dark"},[e("button",{staticClass:"btn btn-primary",attrs:{disabled:t.quantity<=0||Math.floor(t.quantity)!=t.quantity||t.insufficientQuantity},on:{click:t.sellStock}},[t._v(t._s(t.insufficientQuantity?"Not enough Stocks":"Sell"))])])])])},I=[],L={data:function(){return{quantity:0}},computed:{insufficientQuantity:function(){return this.quantity>this.stock.quantity}},methods:Object(u["a"])(Object(u["a"])({},Object(l["b"])({placeSellOrder:"sellStock"})),{},{sellStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.placeSellOrder(t),this.quantity=0}}),props:{stock:{type:Object}}},F=L,M=Object(y["a"])(F,$,I,!1,null,null,null),K=M.exports,z={computed:Object(u["a"])({},Object(l["c"])({stocks:"stockPortfolio"})),components:{appStock:K}},N=z,Q=Object(y["a"])(N,T,E,!1,null,null,null),U=Q.exports,B=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"row"},t._l(t.stocks,(function(t,n){return e("app-stock",{key:n,attrs:{stock:t}})})),1)},R=[],Y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"col col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-2 mt-2"},[e("div",{staticClass:"card border-dark"},[e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-text"},[t._v(t._s(t.stock.name))]),e("p",{staticClass:"card-text"},[e("small",{staticClass:"text-muted"},[t._v("(Price: $"+t._s(t.stock.price)+")")])])]),e("div",{staticClass:"card-body text-dark"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-control",class:{"border-danger":t.insufficientFunds||t.quantity<0||Math.floor(t.quantity)!=t.quantity},attrs:{type:"number",placeholder:"Quantity"},domProps:{value:t.quantity},on:{input:function(n){n.target.composing||(t.quantity=n.target.value)}}})]),e("div",{staticClass:"card-footer text-dark"},[e("button",{staticClass:"btn btn-success",attrs:{disabled:t.quantity<=0||Math.floor(t.quantity)!=t.quantity||t.insufficientFunds},on:{click:t.buyStock}},[t._v(t._s(t.insufficientFunds?"Insufficient Funds":"Buy"))])])])])},A=[],J={data:function(){return{quantity:0}},computed:{funds:function(){return this.$store.getters.funds},insufficientFunds:function(){return this.quantity*this.stock.price>this.funds}},methods:{buyStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.$store.dispatch("buyStock",t),this.quantity=0}},props:{stock:{type:Object}}},G=J,H=Object(y["a"])(G,Y,A,!1,null,null,null),V=H.exports,W={components:{appStock:V},computed:{stocks:function(){return this.$store.getters.stocks}}},X=W,Z=Object(y["a"])(X,B,R,!1,null,null,null),tt=Z.exports,nt=[{path:"/demat-torpedo",component:D},{path:"/demat-torpedo/portfolio",component:U},{path:"/demat-torpedo/stocks",component:tt}],et=(e("4160"),e("159b"),[{id:1,name:"BMW",price:110},{id:2,name:"Google",price:200},{id:3,name:"Apple",price:250},{id:4,name:"Twitter",price:8}]),ot={stocks:[]},at={SET_STOCKS:function(t,n){t.stocks=n},RND_STOCKS:function(t){t.stocks.forEach((function(t){t.price=Math.round(t.price*(1+Math.random()-.5))}))}},st={buyStock:function(t,n){t.commit("BUY_STOCK",n)},initStocks:function(t){var n=t.commit;n("SET_STOCKS",et)},randomizeStocks:function(t){var n=t.commit;n("RND_STOCKS")}},it={stocks:function(t){return t.stocks}},rt={state:ot,mutations:at,actions:st,getters:it},ct=(e("7db0"),e("c975"),e("d81d"),e("a434"),e("b0c0"),{funds:1e4,stocks:[]}),ut={BUY_STOCK:function(t,n){var e=n.stockId,o=n.quantity,a=n.stockPrice,s=t.stocks.find((function(t){return t.id==e}));s?s.quantity+=o:t.stocks.push({id:e,quantity:o}),t.funds-=a*o},SELL_STOCK:function(t,n){var e,o=n.stockId,a=n.quantity,s=n.stockPrice,i=null===(e=t.stocks)||void 0===e?void 0:e.find((function(t){return t.id==o}));console.log("record: ",i),(null===i||void 0===i?void 0:i.quantity)>a?i.quantity-=a:t.stocks.splice(t.stocks.indexOf(i),1),t.funds+=s*a},SET_PORTFOLIO:function(t,n){t.funds=n.funds,t.stocks=n.stockPortfolio}},lt={sellStock:function(t,n){var e=t.commit;e("SELL_STOCK",n)}},dt={stockPortfolio:function(t,n){return t.stocks.map((function(t){var e=n.stocks.find((function(n){return n.id==t.id}));return{id:t.id,quantity:t.quantity,name:e.name,price:e.price}}))},funds:function(t){return t.funds}},ft={state:ct,mutations:ut,actions:lt,getters:dt},pt=function(t){var n=t.commit,e=p.collection("user").doc("data");e.get().then((function(t){if(t.exists){console.log("Document data:",t.data());var e=t.data(),o=e.stockPortfolio,a=e.funds,s=e.stocks,i={stockPortfolio:o,funds:a};n("SET_STOCKS",s),n("SET_PORTFOLIO",i)}else console.log("No such document!")})).catch((function(t){console.log("Error getting document:",t)}))};a["a"].use(l["a"]);var vt=new l["a"].Store({actions:o,modules:{stocks:rt,portfolio:ft}}),mt=e("28dd");a["a"].use(O["a"]),a["a"].use(mt["a"]),a["a"].filter("currency",(function(t){return"$"+t.toLocaleString()}));var kt=new O["a"]({mode:"history",routes:nt});a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(C)},router:kt,store:vt}).$mount("#app")},"85ec":function(t,n,e){}});
//# sourceMappingURL=app.f34d555d.js.map