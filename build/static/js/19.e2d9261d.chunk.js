(this["webpackJsonpshekung-frontend"]=this["webpackJsonpshekung-frontend"]||[]).push([[19],{142:function(e,t,r){"use strict";r.d(t,"c",(function(){return d})),r.d(t,"b",(function(){return h})),r.d(t,"d",(function(){return f})),r.d(t,"f",(function(){return b})),r.d(t,"a",(function(){return m})),r.d(t,"g",(function(){return v})),r.d(t,"h",(function(){return j})),r.d(t,"e",(function(){return O}));var n=r(146),a=r.n(n),s=r(147),c=r(19),o=r(68),u=r(143),i={position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0},p=r(41),l=r.n(p),d=function(e,t,r){return function(){var n=Object(s.a)(a.a.mark((function n(s){var p;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s({type:c.a.LOGIN_REQUEST}),n.next=4,u.a.post("authentication/login/",e);case 4:p=n.sent,s({type:c.a.LOGIN_FINISH,payload:{name:p.data.name,email:p.data.email}}),l.a.set("sheToken",p.data.tokens),r?t.push(r):t.push("/dashboard"),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),s({type:c.a.LOGIN_FAIL}),n.t0&&500===n.t0.status?o.b.error(n.t0.data.errors.non_field_errors,i):n.t0&&400===n.t0.status&&o.b.error(n.t0.data.errors.error[0],i);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l.a.remove("sheToken"),r({type:c.a.LOGIN_FAIL}),e.push("/login");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e,t){return function(){var r=Object(s.a)(a.a.mark((function r(n){var s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:c.a.SIGNUP_REQUEST}),r.next=4,u.a.post("authentication/register/",e);case 4:s=r.sent,n({type:c.a.SIGNUP_FINISH,payload:e}),l.a.set("sheToken",s.data.token),t.push("/dashboard"),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),n({type:c.a.SIGNUP_FAIL}),400===(null===r.t0||void 0===r.t0?void 0:r.t0.status)?o.b.error(r.t0.data.errors.error[0],i):500===(null===r.t0||void 0===r.t0?void 0:r.t0.status)&&o.b.error("Not valid OTP",i);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e){return r.apply(this,arguments)}}()},b=function(e,t){return function(){var r=Object(s.a)(a.a.mark((function r(n){var s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.a.post("social_auth/google/",e);case 3:s=r.sent,n({type:c.a.LOGIN_FINISH,payload:{name:s.data.username,email:s.data.email}}),l.a.set("sheToken",s.data.tokens.access),t.push("/"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),o.b.error("Google Login failed.",i);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r({type:c.a.CONTACT_VERIFY_REQUEST}),t.next=4,u.a.post("authentication/user-send-otp/",{contact:e.contact.toString()});case 4:n=t.sent,r({type:c.a.CONTACT_VERIFY_FINISH}),o.b.success(n.message,i),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),r({type:c.a.CONTACT_VERIFY_FAIL}),400===(null===t.t0||void 0===t.t0?void 0:t.t0.status)&&o.b.error("Invalid mobile number.");case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e,t){return function(){var r=Object(s.a)(a.a.mark((function r(n){var s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:c.a.EMAIL_VERIFY_REQUEST}),r.next=4,u.a.post("authentication/request-reset-email/",e);case 4:s=r.sent,n({type:c.a.EMAIL_VERIFY_FINISH}),t.push("/login"),o.b.success(s.data.success,i),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),n({type:c.a.EMAIL_VERIFY_FAIL}),o.b.error("E-mail not found",i);case 14:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e){return r.apply(this,arguments)}}()},j=function(e,t){return function(){var r=Object(s.a)(a.a.mark((function r(n){var s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n({type:c.a.EMAIL_VERIFY_REQUEST}),r.next=4,u.a.patch("authentication/password-reset-complete/",e);case 4:s=r.sent,n({type:c.a.EMAIL_VERIFY_FINISH}),t.push("/login"),o.b.success(s.data.message,i),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),o.b.error("Internal Server Error",i);case 13:case"end":return r.stop()}}),r,null,[[0,10]])})));return function(e){return r.apply(this,arguments)}}()},O=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.a.get("sheToken")&&t({type:c.a.REFRESH});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},143:function(e,t,r){"use strict";var n=r(146),a=r.n(n),s=r(147),c=r(176),o=r.n(c),u=r(41),i=r.n(u);o.a.defaults.baseURL="http://3.109.195.234/api/",o.a.defaults.withCredentials=!0;var p=function(e){return e.data};o.a.interceptors.request.use((function(e){var t=i.a.get("sheToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e})),o.a.interceptors.response.use(function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){var t=!e.response;switch(t.status){case 401:console.log("Logout user!");break;case 403:console.log("You are not allowed to do that!")}return Promise.reject(e.response)}));var l={get:function(e,t){return o.a.get(e,{params:t}).then(p)},post:function(e,t){return o.a.post(e,t).then(p)},put:function(e,t){return o.a.put(e,t).then(p)},patch:function(e,t){return o.a.patch(e,t).then(p)},delete:function(e){return o.a.delete(e).then(p)},postForm:function(e,t){return o.a.post(e,t,{headers:{"Content-type":"multipart/form-data"}}).then(p)},putForm:function(e,t){return o.a.put(e,t,{headers:{"Content-type":"multipart/form-data"}}).then(p)}};t.a=l},145:function(e,t,r){"use strict";r(0),r(156);var n=r(3);t.a=function(e){var t=e.error,r=e.touched;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"text-danger err",children:t&&r?t:null})})}},156:function(e,t,r){},247:function(e,t,r){"use strict";t.a=r.p+"static/media/logo.f7da92ab.svg"},480:function(e,t,r){},532:function(e,t,r){"use strict";r.r(t);var n=r(5),a=(r(0),r(151)),s=r(152),c=r(247),o=r(550),u=r(67),i=r(6),p=r(117),l=r(145),d=(r(480),r(142)),h=r(3),f=s.b({password:s.c().min(6,"At least 6 characters").required("Password is required")});t.default=function(){var e=Object(u.c)((function(e){return e.authReducer})).isLoading,t=Object(u.b)(),r=Object(i.g)(),s=Object(o.a)().t,b=Object(i.i)().uidb,m=Object(i.i)().token,v=Object(a.a)({initialValues:{password:""},validationSchema:f,onSubmit:function(e){var a=Object(n.a)(Object(n.a)({},e),{},{token:m,uidb64:b});t(Object(d.h)(a,r))}}),j=v.handleSubmit,O=v.handleChange,x=v.handleBlur,g=v.values,I=v.errors,w=v.touched;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"logo_3",children:Object(h.jsx)("img",{src:c.a,alt:"..."})}),Object(h.jsxs)("div",{className:"main_div",children:[Object(h.jsx)("h3",{className:"text-center",children:s("resetPassword.heading")}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-sm-4 col-md-4"}),Object(h.jsx)("div",{className:"col-sm-4 col-md-4",children:Object(h.jsxs)("form",{className:"set_form",onSubmit:j,children:[Object(h.jsxs)("div",{className:"err",children:[Object(h.jsxs)("label",{htmlFor:"email",children:[s("resetPassword.label")," ",Object(h.jsx)("span",{children:"*"})]}),Object(h.jsx)("input",{name:"password",type:"password",className:"w-100 mt-2",onChange:O,value:g.password,onBlur:x,autoComplete:"off"}),Object(h.jsx)(l.a,{error:I.password,touched:w.password})]}),Object(h.jsx)("button",{className:"w-100 my-4 login-button",type:"submit",children:e?Object(h.jsx)(p.a,{color:"secondary",className:"my-2"}):s("resetPassword.heading")})]})}),Object(h.jsx)("div",{className:"col-sm-4 col-md-4"})]})]})]})})}}}]);
//# sourceMappingURL=19.e2d9261d.chunk.js.map