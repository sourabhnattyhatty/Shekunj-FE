(this["webpackJsonpshekunj-frontend"]=this["webpackJsonpshekunj-frontend"]||[]).push([[31],{539:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(3);var c=a(1),r=(a(0),c.createContext({prefixes:{}}));r.Consumer,r.Provider;function n(e,t){var a=Object(c.useContext)(r).prefixes;return e||a[t]||t}},545:function(e,t,a){"use strict";var c=a(3),r=a(125),n=a(191),s=a.n(n),o=a(1),i=a(539),l=a(0),u=["bsPrefix","className","as"],d=["xxl","xl","lg","md","sm","xs"],b=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.as,b=void 0===o?"div":o,j=Object(r.a)(e,u),f=Object(i.a)(a,"row"),m="".concat(f,"-cols"),p=[];return d.forEach((function(e){var t,a=j[e];delete j[e],t=null!=a&&"object"===typeof a?a.cols:a;var c="xs"!==e?"-".concat(e):"";null!=t&&p.push("".concat(m).concat(c,"-").concat(t))})),Object(l.jsx)(b,Object(c.a)(Object(c.a)({ref:t},j),{},{className:s.a.apply(void 0,[n,f].concat(p))}))}));b.displayName="Row",t.a=b},546:function(e,t,a){"use strict";var c=a(14),r=a(3),n=a(125),s=a(191),o=a.n(s),i=a(1),l=a(539),u=a(0),d=["as","bsPrefix","className"],b=["className"],j=["xxl","xl","lg","md","sm","xs"];var f=i.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,s=Object(n.a)(e,d);a=Object(l.a)(a,"col");var i=[],u=[];return j.forEach((function(e){var t,c,r,n=s[e];delete s[e],"object"===typeof n&&null!=n?(t=n.span,c=n.offset,r=n.order):t=n;var o="xs"!==e?"-".concat(e):"";t&&i.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=r&&u.push("order".concat(o,"-").concat(r)),null!=c&&u.push("offset".concat(o,"-").concat(c))})),[Object(r.a)(Object(r.a)({},s),{},{className:o.a.apply(void 0,[c].concat(i,u))}),{as:t,bsPrefix:a,spans:i}]}(e),s=Object(c.a)(a,2),i=s[0],f=i.className,m=Object(n.a)(i,b),p=s[1],x=p.as,O=void 0===x?"div":x,h=p.bsPrefix,v=p.spans;return Object(u.jsx)(O,Object(r.a)(Object(r.a)({},m),{},{ref:t,className:o()(f,!v.length&&h)}))}));f.displayName="Col",t.a=f},782:function(e,t,a){},900:function(e,t,a){"use strict";a.r(t);var c=a(7),r=a.n(c),n=a(19),s=a(14),o=a(1),i=a(545),l=a(546),u=a(164),d=a.p+"static/media/wrong-password 1.7e44f5f0.png",b=(a(782),a(534)),j=a(449),f=a(56),m=a(127),p=a(450),x=a(32),O=a(30),h=a(55),v=a(20),g=a(0);t.default=function(){var e=Object(p.a)().t,t=Object(x.b)(),a=Object(O.g)(),c=Object(o.useState)(!1),N=Object(s.a)(c,2),w=N[0],P=N[1],y=Object(x.c)((function(e){return e.authReducer})).isLoading,k=f.b({contact:f.a().required(e("login.form1.contact.required")).positive(),password:f.d().min(6,e("login.form1.passError.min")).required(e("login.form1.passError.required"))}),C=Object(m.a)({initialValues:{contact:"",password:""},validationSchema:k,onSubmit:function(e){t(Object(h.g)(e,a))}}),S=C.handleSubmit,_=C.handleChange,q=C.handleBlur,E=C.values,F=C.errors,R=C.touched,B=function(){var c=Object(n.a)(r.a.mark((function c(){var n;return r.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(""!==(n=E.contact)){c.next=5;break}v.b.error(e("error.other.4")),c.next=13;break;case 5:if(!(String(n).length>10||String(n).length<10)){c.next=9;break}v.b.error(e("error.other.5")),c.next=13;break;case 9:return c.next=11,t(Object(h.d)({contact:String(E.contact)},a));case 11:200===c.sent.status_code&&P((function(e){return!e}));case 13:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();return Object(g.jsxs)("div",{className:"noselect",children:[Object(g.jsx)(u.g,{loginPage:!1,page:"home"}),Object(g.jsx)("div",{className:"main_div_ForPass"}),Object(g.jsx)("div",{className:"container",children:Object(g.jsx)("div",{className:"ForPass_feild",children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(l.a,{lg:6,md:6,xs:12,children:Object(g.jsx)("img",{src:d,alt:"",srcset:""})}),Object(g.jsx)(l.a,{lg:6,md:6,xs:12,children:Object(g.jsxs)("div",{className:"ForPass_text",children:[Object(g.jsxs)("h2",{children:["Forgot ",Object(g.jsx)("br",{})," Password?"]}),Object(g.jsx)("p",{children:"Enter Your Mobile number associated with your account."}),Object(g.jsxs)("form",{onSubmit:S,children:[Object(g.jsx)("input",{name:"contact",type:"number",value:E.contact,className:"form-control",onChange:_,onBlur:q,autoComplete:"off",placeholder:e("common.placeHolders.mobile")}),Object(g.jsx)(u.d,{error:F.contact,touched:R.contact}),!w&&Object(g.jsx)("button",{className:"req_btn",onClick:function(){return B()},children:y?Object(g.jsx)(b.a,{color:"secondary",size:20}):"Request For Temprary Password"}),w&&Object(g.jsx)("input",{name:"password",type:"password",value:E.password,className:"form-control",onChange:_,onBlur:q,autoComplete:"off",placeholder:e("common.placeHolders.password")}),Object(g.jsx)(j.a,{type:"submit",className:"log_forg",variant:"outlined",children:"Login"})]})]})})]})})}),Object(g.jsx)(u.e,{loginPage:!1})]})}}}]);
//# sourceMappingURL=31.db06dfdc.chunk.js.map