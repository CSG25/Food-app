(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__2TDJS",control:"Checkout_control__1uwc6",actions:"Checkout_actions__2Ex9-",submit:"Checkout_submit__Adwz3",invalid:"Checkout_invalid__NhmXG"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3MuPt",total:"Cart_total__1mdww",actions:"Cart_actions__CvXMQ","button--alt":"Cart_button--alt__3ICF_",button:"Cart_button__219dW"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__-A8tG",summary:"CartItem_summary__1ew-S",price:"CartItem_price__2PpD-",amount:"CartItem_amount__3X9HU",actions:"CartItem_actions__1GxLg"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__2S99I",icon:"HeaderCartButton_icon__3BPR9",badge:"HeaderCartButton_badge__20M_n",bump:"HeaderCartButton_bump__cVBnn"}},,,,function(e,t,n){e.exports={meals:"AvailabelMeals_meals__1jRsH","meals-appear":"AvailabelMeals_meals-appear__3YXsg",MealsLoading:"AvailabelMeals_MealsLoading__3CuCs",MealsError:"AvailabelMeals_MealsError__1d74z"}},function(e,t,n){e.exports={meal:"MealItem_meal__1cgLc",description:"MealItem_description__1GjFt",price:"MealItem_price__flknR"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__24xN6",modal:"Modal_modal__g8TJE","slide-down":"Modal_slide-down__1kJgi"}},function(e,t,n){e.exports={header:"Header_header__2JY6b","main-image":"Header_main-image__yCu2n"}},,,,function(e,t,n){e.exports={summary:"MealsSummary_summary__zLO99"}},function(e,t,n){e.exports={card:"Card_card__3hxB3"}},function(e,t,n){e.exports={input:"Input_input__3Qmw1"}},function(e,t,n){e.exports={form:"MealItemForm_form__1OmVV"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(20),c=n.n(a),r=(n(32),n(2)),s=n(1),i=n.n(s),o=n.p+"static/media/meals.2971f633.jpg",l=n(17),u=n.n(l),d=n(0),j=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),b=n(10),O=n.n(b),x=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useContext)(m).items,o=i.reduce((function(e,t){return e+t.amount}),0),l="".concat(O.a.button," ").concat(a?O.a.bump:"");return console.log(i),Object(s.useEffect)((function(){if(0!==o){c(!0);var e=setTimeout((function(){c(!1)}),100);return function(){clearTimeout(e)}}}),[o]),Object(d.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(d.jsx)("span",{className:O.a.icon,children:Object(d.jsx)(j,{})}),Object(d.jsx)("span",{children:"Your Cart"}),Object(d.jsx)("span",{className:O.a.badge,children:o})]})},p=function(e){return Object(d.jsxs)(s.Fragment,{children:[Object(d.jsxs)("header",{className:u.a.header,children:[Object(d.jsx)("h1",{children:"ReactMeals"}),Object(d.jsx)(x,{onClick:e.onShowCart})]}),Object(d.jsx)("div",{className:u.a["main-image"],children:Object(d.jsx)("img",{src:o,alt:"A table full of food"})})]})},h=n(21),f=n.n(h),_=function(){return Object(d.jsxs)("section",{className:f.a.summary,children:[Object(d.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(d.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(d.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(7),C=n(13),y=n(14),g=n.n(y),N=n(22),k=n.n(N),w=function(e){return Object(d.jsx)("div",{className:k.a.card,children:e.children})},A=n(4),M=n(23),I=n.n(M),S=i.a.forwardRef((function(e,t){return Object(d.jsxs)("div",{className:I.a.input,children:[Object(d.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(d.jsx)("input",Object(A.a)({ref:t},e.input))]})})),F=n(24),R=n.n(F),H=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)();return Object(d.jsxs)("form",{className:R.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(d.jsx)(S,{ref:i,label:"Amount",input:{id:"amount",type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(d.jsx)("button",{children:"Add"}),!a&&Object(d.jsx)("p",{children:"Please enter a valid amount(1-5)."})]})},P=n(15),B=n.n(P),E=function(e){var t=Object(s.useContext)(m),n="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:B.a.meal,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("div",{className:B.a.description,children:e.description}),Object(d.jsx)("div",{className:B.a.price,children:n})]}),Object(d.jsx)("div",{children:Object(d.jsx)(H,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},T=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!0),i=Object(r.a)(c,2),o=i[0],l=i[1],u=Object(s.useState)(null),j=Object(r.a)(u,2),m=j[0],b=j[1];if(Object(s.useEffect)((function(){var e=function(){var e=Object(C.a)(Object(v.a)().mark((function e(){var t,n,c,r;return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-task-8c1d6-default-rtdb.europe-west1.firebasedatabase.app/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Somnething went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,descripiton:n[r].descripiton,price:n[r].price});a(c),l(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){l(!1),b(e.message)}))}),[]),o)return Object(d.jsx)("section",{className:g.a.MealsLoading,children:Object(d.jsx)("p",{children:"Loading.."})});if(m)return Object(d.jsx)("section",{className:g.a.MealsError,children:Object(d.jsx)("p",{children:m})});var O=n.map((function(e){return Object(d.jsx)(E,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(d.jsx)("section",{className:g.a.meals,children:Object(d.jsx)(w,{children:Object(d.jsx)("ul",{children:O})})})},J=function(){return Object(d.jsxs)(s.Fragment,{children:[Object(d.jsx)(_,{}),Object(d.jsx)(T,{})]})},L=n(8),z=n.n(L),D=function(e){var t="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:z.a["cart-item"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:z.a.summary,children:[Object(d.jsx)("span",{className:z.a.price,children:t}),Object(d.jsxs)("span",{className:z.a.amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:z.a.actions,children:[Object(d.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Y=n(11),G=n.n(Y),V=n(16),X=n.n(V),$=function(e){return Object(d.jsx)("div",{className:X.a.backdrop,onClick:e.onClose})},Q=function(e){return Object(d.jsx)("div",{className:X.a.modal,children:Object(d.jsx)("div",{className:X.a.content,children:e.children})})},q=document.getElementById("overlays"),U=function(e){return Object(d.jsxs)(s.Fragment,{children:[G.a.createPortal(Object(d.jsx)($,{onClose:e.onClose}),q),G.a.createPortal(Object(d.jsx)(Q,{children:e.children}),q)]})},W=n(5),K=n.n(W),Z=n(3),ee=n.n(Z),te=function(e){return""===e.trim()},ne=function(e){var t=Object(s.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)(),o=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),j="".concat(ee.a.control," ").concat(a.name?"":ee.a.invalid),m="".concat(ee.a.control," ").concat(a.street?"":ee.a.invalid),b="".concat(ee.a.control," ").concat(a.city?"":ee.a.invalid),O="".concat(ee.a.control," ").concat(a.postalCode?"":ee.a.invalid);return Object(d.jsxs)("form",{className:ee.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=o.current.value,r=l.current.value,s=u.current.value,d=!te(n),j=!te(a),m=!te(s),b=5===r.trim().length;c({name:d,street:j,city:m,postalCode:b}),d&&j&&m&&b&&e.onConfirm({name:n,street:a,city:s,postalCode:r})},children:[Object(d.jsxs)("div",{className:j,children:[Object(d.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(d.jsx)("input",{type:"text",id:"name",ref:i}),!a.name&&Object(d.jsx)("p",{children:"Please enter a valid name!"})]}),Object(d.jsxs)("div",{className:m,children:[Object(d.jsx)("label",{htmlFor:"street",children:"Street"}),Object(d.jsx)("input",{type:"text",id:"street",ref:o}),!a.street&&Object(d.jsx)("p",{children:"Please enter a valid street!"})]}),Object(d.jsxs)("div",{className:O,children:[Object(d.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(d.jsx)("input",{type:"text",id:"postal",ref:l}),!a.postalCode&&Object(d.jsx)("p",{children:"Please enter a valid postal code!(5 characters long)"})]}),Object(d.jsxs)("div",{className:b,children:[Object(d.jsx)("label",{htmlFor:"city",children:"City"}),Object(d.jsx)("input",{type:"text",id:"city",ref:u}),!a.city&&Object(d.jsx)("p",{children:"Please enter a valid city!"})]}),Object(d.jsxs)("div",{className:ee.a.actions,children:[Object(d.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(d.jsx)("button",{className:ee.a.submit,children:"Confirm"})]})]})},ae=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],o=Object(s.useState)(!1),l=Object(r.a)(o,2),u=l[0],j=l[1],b=Object(s.useState)(!1),O=Object(r.a)(b,2),x=O[0],p=O[1],h=Object(s.useContext)(m),f="$".concat(h.totalAmount.toFixed(2)),_=h.items.length>0,y=function(e){h.removeItem(e)},g=function(e){h.addItem(Object(A.a)(Object(A.a)({},e),{},{amount:1}))},N=function(){var e=Object(C.a)(Object(v.a)().mark((function e(t){return Object(v.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,fetch("https://react-task-8c1d6-default-rtdb.europe-west1.firebasedatabase.app/orders.json",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({user:t,orderedItems:h.items})});case 3:j(!1),p(!0),h.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=Object(d.jsx)("ul",{className:K.a["cart-items"],children:h.items.map((function(e){return Object(d.jsx)(D,{name:e.name,amount:e.amount,price:e.price,onRemove:y.bind(null,e.id),onAdd:g.bind(null,e)},e.id)}))}),w=Object(d.jsxs)("div",{className:K.a.actions,children:[Object(d.jsx)("button",{className:K.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(d.jsx)("button",{className:K.a.button,onClick:function(){c(!0)},children:"Order"})]}),M=Object(d.jsxs)(i.a.Fragment,{children:[k,Object(d.jsxs)("div",{className:K.a.total,children:[Object(d.jsx)("span",{children:"Total Amount"}),Object(d.jsx)("span",{children:f})]}),a&&Object(d.jsx)(ne,{onConfirm:N,onCancel:e.onClose}),!a&&w]}),I=Object(d.jsx)("p",{children:"Sending order..."}),S=Object(d.jsxs)(i.a.Fragment,{children:[Object(d.jsx)("p",{children:"Successfully sent the order!"}),Object(d.jsx)("div",{className:K.a.actions,children:Object(d.jsx)("button",{className:K.a["button--alt"],onClick:e.onClose,children:"Close"})})]});return Object(d.jsxs)(U,{onClose:e.onClose,children:[!u&&!x&&M,u&&I,x&&S]})},ce=n(18),re={items:[],totalAmount:0},se=function(e,t){if("Add"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var s=Object(A.a)(Object(A.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ce.a)(e.items))[c]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("Remove"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(A.a)(Object(A.a)({},l),{},{amount:l.amount-1});(i=Object(ce.a)(e.items))[o]=d}return{items:i,totalAmount:u}}return t.type,re},ie=function(e){var t=Object(s.useReducer)(se,re),n=Object(r.a)(t,2),a=n[0],c=n[1],i={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"Add",item:e})},removeItem:function(e){c({type:"Remove",id:e})},clearCart:function(){c({type:"Clear"})}};return Object(d.jsx)(m.Provider,{value:i,children:e.children})};var oe=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)(ie,{children:[n&&Object(d.jsx)(ae,{onClose:function(){a(!1)}}),Object(d.jsx)(p,{onShowCart:function(){a(!0)}}),Object(d.jsx)("main",{children:Object(d.jsx)(J,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(oe,{}))}],[[34,1,2]]]);
//# sourceMappingURL=main.2bccbb9b.chunk.js.map