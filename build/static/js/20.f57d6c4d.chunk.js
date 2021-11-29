(this["webpackJsonpshekung-frontend"]=this["webpackJsonpshekung-frontend"]||[]).push([[20],{141:function(t,e,n){"use strict";var r=n(143),a=n.n(r),s=n(144),c=n(154),o=n.n(c),u=n(65),i=n.n(u);o.a.defaults.baseURL="http://3.109.195.234/api/",o.a.defaults.withCredentials=!0;var p=function(t){return t.data};o.a.interceptors.request.use((function(t){var e=i.a.get("sheToken");return e&&(t.headers.Authorization="Bearer ".concat(e)),t})),o.a.interceptors.response.use(function(){var t=Object(s.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(t){var e=!t.response;switch(e.status){case 401:console.log("Logout user!");break;case 403:console.log("You are not allowed to do that!")}return Promise.reject(t.response)}));var l={get:function(t,e){return o.a.get(t,{params:e}).then(p)},post:function(t,e){return o.a.post(t,e).then(p)},put:function(t,e){return o.a.put(t,e).then(p)},patch:function(t,e){return o.a.patch(t,e).then(p)},delete:function(t){return o.a.delete(t).then(p)},postForm:function(t,e){return o.a.post(t,e,{headers:{"Content-type":"multipart/form-data"}}).then(p)},putForm:function(t,e){return o.a.put(t,e,{headers:{"Content-type":"multipart/form-data"}}).then(p)}};e.a=l},142:function(t,e,n){"use strict";n.d(e,"d",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"g",(function(){return b})),n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return m})),n.d(e,"h",(function(){return j})),n.d(e,"i",(function(){return O})),n.d(e,"f",(function(){return g}));var r=n(143),a=n.n(r),s=n(144),c=n(19),o=n(67),u=n(141),i={position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0},p=n(65),l=n.n(p),d=function(t,e){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:c.a.LOGIN_REQUEST}),n.next=4,u.a.post("authentication/login/",t);case 4:s=n.sent,r({type:c.a.LOGIN_FINISH,payload:{name:s.data.name,email:s.data.email}}),l.a.set("sheToken",s.data.tokens),e.push("/"),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),r({type:c.a.LOGIN_FAIL}),n.t0&&500===n.t0.status?o.b.error(n.t0.data.errors.non_field_errors,i):n.t0&&400===n.t0.status&&o.b.error(n.t0.data.errors.error[0],i);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}()},f=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.a.remove("sheToken"),n({type:c.a.LOGIN_FAIL}),t.push("/login");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(t,e){return function(){var n=Object(s.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:c.a.SIGNUP_REQUEST}),n.next=4,u.a.post("authentication/register/",t);case 4:n.sent,r({type:c.a.SIGNUP_FINISH,payload:t}),o.b.success("Registration Successfully",i),e.push("/login"),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),r({type:c.a.SIGNUP_FAIL}),400===(null===n.t0||void 0===n.t0?void 0:n.t0.status)?o.b.error(n.t0.data.errors.error[0],i):500===(null===n.t0||void 0===n.t0?void 0:n.t0.status)&&o.b.error("Not valid OTP",i);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}()},b=function(t,e){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.post("social_auth/google/",t);case 3:s=n.sent,r({type:c.a.LOGIN_FINISH,payload:{name:s.data.username,email:s.data.email}}),l.a.set("sheToken",s.data.tokens.access),e.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),o.b.error("Google Login failed.",i);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}()},v=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n({type:c.a.CONTACT_VERIFY_REQUEST}),e.next=4,u.a.post("authentication/user-send-otp/",{contact:t.contact.toString()});case 4:r=e.sent,n({type:c.a.CONTACT_VERIFY_FINISH}),o.b.success(r.message,i),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),n({type:c.a.CONTACT_VERIFY_FAIL}),400===(null===e.t0||void 0===e.t0?void 0:e.t0.status)&&o.b.error("Invalid mobile number.");case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},m=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("authentication/email-verify/?token=".concat(t));case 3:return r=e.sent,window.location.replace("success"),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),o.b.error();case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},j=function(t,e){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:c.a.EMAIL_VERIFY_REQUEST}),n.next=4,u.a.post("authentication/request-reset-email/",t);case 4:s=n.sent,r({type:c.a.EMAIL_VERIFY_FINISH}),e.push("/login"),o.b.success(s.data.success,i),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),r({type:c.a.EMAIL_VERIFY_FAIL}),o.b.error("E-mail not found",i);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}()},O=function(t,e){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:c.a.EMAIL_VERIFY_REQUEST}),n.next=4,u.a.patch("authentication/password-reset-complete/",t);case 4:s=n.sent,r({type:c.a.EMAIL_VERIFY_FINISH}),e.push("/login"),o.b.success(s.data.message,i),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),o.b.error("Internal Server Error",i);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(t){return n.apply(this,arguments)}}()},g=function(){return function(){var t=Object(s.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.a.get("sheToken")&&e({type:c.a.REFRESH});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},152:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},153:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return a}))},157:function(t,e,n){"use strict";n(0),n(174);var r=n(3);e.a=function(t){var e=t.error,n=t.touched;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"text-danger err",children:e&&n?e:null})})}},173:function(t,e,n){"use strict";e.a=n.p+"static/media/logo.f7da92ab.svg"},174:function(t,e,n){},473:function(t,e,n){},52:function(t,e,n){"use strict";e.a=function(t,e){}},528:function(t,e,n){"use strict";n.r(e);var r=n(5),a=(n(0),n(170)),s=n(171),c=n(173),o=n(475),u=n(66),i=n(6),p=n(140),l=n(157),d=(n(473),n(142)),f=n(3),h=s.b({password:s.c().min(6,"At least 6 characters").required("Password is required")});e.default=function(){var t=Object(u.c)((function(t){return t.authReducer})).isLoading,e=Object(u.b)(),n=Object(i.g)(),s=Object(o.a)().t,b=Object(i.h)().uidb,v=Object(i.h)().token,m=Object(a.a)({initialValues:{password:""},validationSchema:h,onSubmit:function(t){var a=Object(r.a)(Object(r.a)({},t),{},{token:v,uidb64:b});e(Object(d.i)(a,n))}}),j=m.handleSubmit,O=m.handleChange,g=m.handleBlur,w=m.values,x=m.errors,y=m.touched;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("div",{className:"logo_3",children:Object(f.jsx)("img",{src:c.a,alt:"..."})}),Object(f.jsxs)("div",{className:"main_div",children:[Object(f.jsx)("h3",{className:"text-center",children:s("resetPassword.heading")}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-sm-4 col-md-4"}),Object(f.jsx)("div",{className:"col-sm-4 col-md-4",children:Object(f.jsxs)("form",{className:"set_form",onSubmit:j,children:[Object(f.jsxs)("div",{className:"err",children:[Object(f.jsxs)("label",{htmlFor:"email",children:[s("resetPassword.label")," ",Object(f.jsx)("span",{children:"*"})]}),Object(f.jsx)("input",{name:"password",type:"password",className:"w-100 mt-2",onChange:O,value:w.password,onBlur:g,autoComplete:"off"}),Object(f.jsx)(l.a,{error:x.password,touched:y.password})]}),Object(f.jsx)("button",{className:"w-100 my-4 login-button",type:"submit",children:t?Object(f.jsx)(p.a,{color:"secondary",className:"my-2"}):s("resetPassword.heading")})]})}),Object(f.jsx)("div",{className:"col-sm-4 col-md-4"})]})]})]})})}}}]);
//# sourceMappingURL=20.f57d6c4d.chunk.js.map