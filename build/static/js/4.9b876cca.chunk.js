/*! For license information please see 4.9b876cca.chunk.js.LICENSE.txt */
(this["webpackJsonpshekung-frontend"]=this["webpackJsonpshekung-frontend"]||[]).push([[4],{142:function(e,t,a){"use strict";var n=a(147),r=a.n(n),c=a(148),s=a(190),o=a.n(s),i=a(41),l=a.n(i);o.a.defaults.baseURL="http://3.109.195.234/api/",o.a.defaults.withCredentials=!0;var u=function(e){return e.data};o.a.interceptors.request.use((function(e){var t=l.a.get("sheToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e})),o.a.interceptors.response.use(function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){var t=!e.response;switch(t.status){case 401:console.log("Logout user!");break;case 403:console.log("You are not allowed to do that!")}return Promise.reject(e.response)}));var d={get:function(e,t){return o.a.get(e,{params:t}).then(u)},post:function(e,t){return o.a.post(e,t).then(u)},put:function(e,t){return o.a.put(e,t).then(u)},patch:function(e,t){return o.a.patch(e,t).then(u)},delete:function(e){return o.a.delete(e).then(u)},postForm:function(e,t){return o.a.post(e,t,{headers:{"Content-type":"multipart/form-data"}}).then(u)},putForm:function(e,t){return o.a.put(e,t,{headers:{"Content-type":"multipart/form-data"}}).then(u)}};t.a=d},143:function(e,t,a){"use strict";a.d(t,"c",(function(){return b})),a.d(t,"b",(function(){return j})),a.d(t,"d",(function(){return h})),a.d(t,"f",(function(){return p})),a.d(t,"a",(function(){return m})),a.d(t,"g",(function(){return f})),a.d(t,"h",(function(){return v})),a.d(t,"e",(function(){return x}));var n=a(147),r=a.n(n),c=a(148),s=a(20),o=a(68),i=a(142),l={position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,progress:void 0},u=a(41),d=a.n(u),b=function(e,t,a){return function(){var n=Object(c.a)(r.a.mark((function n(c){var u;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c({type:s.a.LOGIN_REQUEST}),n.next=4,i.a.post("authentication/login/",e);case 4:u=n.sent,c({type:s.a.LOGIN_FINISH,payload:{name:u.data.name,email:u.data.email}}),d.a.set("sheToken",u.data.tokens),a?t.push(a):t.push("/MyProgress"),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),c({type:s.a.LOGIN_FAIL}),n.t0&&500===n.t0.status?o.b.error(n.t0.data.message,l):n.t0&&400===n.t0.status&&o.b.error(n.t0.data.errors.error[0],l);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:d.a.remove("sheToken"),a({type:s.a.LOGIN_FAIL}),e.push("/login");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e,t){return function(){var a=Object(c.a)(r.a.mark((function a(n){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:s.a.SIGNUP_REQUEST}),a.next=4,i.a.post("authentication/register/",e);case 4:c=a.sent,n({type:s.a.SIGNUP_FINISH,payload:e}),d.a.set("sheToken",c.data.token),t.push("/MyProgress"),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(0),n({type:s.a.SIGNUP_FAIL}),400===(null===a.t0||void 0===a.t0?void 0:a.t0.status)?o.b.error(a.t0.data.errors.error[0],l):500===(null===a.t0||void 0===a.t0?void 0:a.t0.status)&&o.b.error("Not valid OTP",l);case 14:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()},p=function(e,t){return function(){var a=Object(c.a)(r.a.mark((function a(n){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.post("social_auth/google/",e);case 3:c=a.sent,n({type:s.a.LOGIN_FINISH,payload:{name:c.data.username,email:c.data.email}}),d.a.set("sheToken",c.data.tokens.access),t.push("/MyProgress"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),o.b.error("Google Login failed.",l);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:s.a.CONTACT_VERIFY_REQUEST}),t.next=4,i.a.post("authentication/user-send-otp/",{contact:e.contact.toString()});case 4:n=t.sent,a({type:s.a.CONTACT_VERIFY_FINISH}),o.b.success(n.message,l),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:s.a.CONTACT_VERIFY_FAIL}),400===(null===t.t0||void 0===t.t0?void 0:t.t0.status)&&o.b.error("Invalid mobile number.");case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},f=function(e,t){return function(){var a=Object(c.a)(r.a.mark((function a(n){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:s.a.EMAIL_VERIFY_REQUEST}),a.next=4,i.a.post("authentication/request-reset-email/",e);case 4:c=a.sent,n({type:s.a.EMAIL_VERIFY_FINISH}),t.push("/login"),o.b.success(c.data.success,l),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(0),n({type:s.a.EMAIL_VERIFY_FAIL}),o.b.error("E-mail not found",l);case 14:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()},v=function(e,t){return function(){var a=Object(c.a)(r.a.mark((function a(n){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n({type:s.a.EMAIL_VERIFY_REQUEST}),a.next=4,i.a.patch("authentication/password-reset-complete/",e);case 4:c=a.sent,n({type:s.a.EMAIL_VERIFY_FINISH}),t.push("/login"),o.b.success(c.data.message,l),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),o.b.error("Internal Server Error",l);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(e){return a.apply(this,arguments)}}()},x=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.a.get("sheToken")&&t({type:s.a.REFRESH});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},144:function(e,t,a){"use strict";var n=a(66),r=a(0),c=a(612),s=a(606),o=a(542),i=a(601),l=a(139),u=a(193),d=a.n(u),b=a(590),j=a(4),h=Object(b.a)({language:{borderRadius:"0 !important",width:"128px",height:"40px",color:"#000000 !important",border:"1px solid #000000 !important",textTransform:"none !important",fontFamily:"Poppins !important",fontStyle:"normal",fontWeight:"300 !important",fontSize:"16px !important"}});t.a=function(){var e=Object(r.useState)(localStorage.getItem("i18nextLng")||"en"),t=Object(n.a)(e,2),a=t[0],u=t[1],b=Object(r.useState)(null),p=Object(n.a)(b,2),m=p[0],f=p[1],v=Object(c.a)().i18n,x=Boolean(m),O=h(),g=function(e,t){v.changeLanguage(t),u(t),f(null)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.a,{id:"fade-button",className:O.language,"aria-controls":"fade-menu","aria-haspopup":"true","aria-expanded":x?"true":void 0,onClick:function(e){f(e.currentTarget)},startIcon:Object(j.jsx)(d.a,{}),children:a.startsWith("en")?"English":"Hindi"}),Object(j.jsxs)(o.a,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:m,open:x,onClose:function(){f(null)},TransitionComponent:l.a,children:[Object(j.jsx)(i.a,{onClick:function(e){return g(0,"en")},children:"English"}),Object(j.jsx)(i.a,{onClick:function(e){return g(0,"hi")},children:"Hindi"})]})]})}},146:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)){if(n.length){var s=r.apply(null,n);s&&e.push(s)}}else if("object"===c)if(n.toString===Object.prototype.toString)for(var o in n)a.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},151:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(1);var n=a(0),r=(a(4),n.createContext({prefixes:{}}));r.Consumer,r.Provider;function c(e,t){var a=Object(n.useContext)(r).prefixes;return e||a[t]||t}},153:function(e,t,a){"use strict";var n=a(66),r=a(0),c=a(7),s=a(30),o=a(612),i=a(144),l=a.p+"static/media/logo.de3c6070.svg",u=(a(167),a(67)),d=a(143),b=a(4);t.a=function(e){e.loginPage;var t=e.page,a=Object(r.useState)(""),j=Object(n.a)(a,2),h=j[0],p=j[1],m=Object(o.a)().t,f=Object(u.c)((function(e){return e.authReducer})).isAuth,v=Object(u.b)(),x=Object(c.g)();Object(r.useEffect)((function(){v(Object(d.e)())}),[v]);return Object(b.jsx)("div",{children:Object(b.jsx)("header",{className:"other_head",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("div",{className:"topbar",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsxs)("div",{className:"sign_in",children:[Object(b.jsx)(s.b,{className:"navbar-brand",to:"/",children:Object(b.jsx)("img",{src:l,alt:"..."})}),Object(b.jsx)("p",{children:"Sign In"})]})}),Object(b.jsxs)("div",{className:"col-md-9 pl-md-0 pl-lg-2 text-right",children:[Object(b.jsx)("div",{id:"custom-search-input",className:"mt-lg-3 mt-md-1 d-inline-block",children:Object(b.jsxs)("div",{className:"input-group",children:[Object(b.jsx)("input",{type:"text",className:"search-query form-control",placeholder:m("header.searchPlaceholder"),value:h,onChange:function(e){return p(e.target.value)}}),Object(b.jsx)("span",{className:"input-group-btn",children:Object(b.jsx)("button",{type:"button",disabled:!0,children:Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGYSURBVHgB7ZXPTcMwGMW/JBMwQbsB3aDJjWPZoGxAB2jz914xAd2AcuOWMAFmAsKNG2KAJLxXBQm1TWJb6gHUJ0Wf49j++c/nF5Gz/roc3YZRFI0RfMdxGKVpGoWgUF+KgQaBGND3PC8EYILXLeI7613XvWQdJlBWVXWjC+4FpmlK0C2Ki9VqtemY0BzwEODNcrmMxRbYwuZ1XQdDs+d2A5rrQJ2+AXRge31e0Oca5aKrnXusEmd2jxCbJATbArbAKkMxEWeaJMmbWAp9P7MsG3V9P1ghVjfB2b2KpdD3kUchukA0ZvorsVcJ6Fh0gafWARCzK3HwI7FUawhKGwgVeGZiqdaRzI4kjuMc2TYXQ9F1YBh5X5ujZ4hZ0i3WrWHrwnjxQ/qqmALpFIDe0W10oD/OhOJ2yCy8rg8F5Pv+BQZaB0Hwlee56oDRvB9QfMJzNZ1On9H1o2tcnd/TmFbHu4XsVbinO1NoM3nGOmwjbbDAMyG89VNlBfwNRuD/j1m4uz4Ixf4WDkG1gSbqg57EaQghTM76l/oGM2TmLX40cksAAAAASUVORK5CYII=",alt:"..."})})})]})}),Object(b.jsxs)("div",{className:"top_bar_btn d-inline-block",children:[f?Object(b.jsx)("button",{className:"btn btn-bg-pink ml-xl-3 ml-md-2",onClick:function(){v(Object(d.b)(x))},children:"Logout"}):Object(b.jsx)(s.b,{className:"btn btn-bg-pink ml-xl-3 ml-md-2",to:"/login",children:m("header.authButton")}),Object(b.jsx)("div",{className:"set_language d-inline-block ml-xl-3 ml-md-2",children:Object(b.jsx)(i.a,{})})]})]})]})}),Object(b.jsx)("div",{className:"middle_nav_login",children:Object(b.jsxs)("nav",{className:"navbar navbar-expand-md",children:[Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar",children:[Object(b.jsx)("button",{className:"navbar-toggler close_set",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE7SURBVHgB7dhNSsNAFAfw92Kyd+NOoUfwKj2BuJSuguDWuHXlxrXewCN4hd4gBQMuFOwB4jzzLCkUOu37KCSF+UOyypAfj5k3k2DTfF8RwBMAncJAQcQFEFTQYeq6/pzAgOH3fzRfP9DdCEYQdmQwoiRMLAkTy/FhqsfnS77AEM1YcWWyPH/Tgvh5HgeF7HlZZe5m89C2Uw2ohwRsp1U5m0vGiCujAVkgKowUZIWoMftAHogJEwN5IRzk3fLi/AzBkPVqofAAmN17IO5d+79CK8gLg6yQPj4MV4YrQuGaK2NtjG7Mxhy5vXnV9qGDYbZNVktjdGN2rRovSNf0BMvXA5JvB4o+YgWJjxDahmYBiStjaWg9SHqESN9NsSRMLAkTy+gwyzH8n0GkRU6ByqI4ee/W+QSGyzL8UvkHm5QVNbWfnNAAAAAASUVORK5CYII=",alt:""})}),Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"about"===t?"nav-item active":"nav-item",children:Object(b.jsx)(s.b,{className:"nav-link",to:"/about",children:m("header.heading.1")})}),Object(b.jsx)("li",{className:"courses"===t?"nav-item active":"nav-item",children:Object(b.jsx)(s.b,{className:"nav-link",to:"/courses",children:m("header.heading.2")})}),Object(b.jsx)("li",{className:"guidance"===t?"nav-item active":"nav-item",children:Object(b.jsx)(s.b,{className:"nav-link",to:"/GuidanceBook",children:m("header.heading.3")})}),Object(b.jsx)("li",{className:"resume"===t?"nav-item active":"nav-item",children:Object(b.jsx)("a",{className:"nav-link",rel:"noreferrer",href:"https://octahire.com/Resume_maker",target:"_blank",children:m("header.heading.4")})}),Object(b.jsx)("li",{className:"career"===t?"nav-item active":"nav-item",children:Object(b.jsx)(s.b,{className:"nav-link",to:"/career",children:m("header.heading.5")})}),Object(b.jsx)("li",{className:"jobs"===t?"nav-item active":"nav-item",children:Object(b.jsx)("a",{className:"nav-link",rel:"noreferrer",target:"_blank",href:"https://octahire.com/Recruiters/job_recruiters?location=",children:m("header.heading.6")})}),Object(b.jsx)("li",{className:"blogs"===t?"nav-item active":"nav-item",children:Object(b.jsx)("a",{className:"nav-link",rel:"noreferrer",target:"_blank",href:"http://www.thehrnotes.com/",children:m("header.heading.7")})}),Object(b.jsx)("li",{className:"story"===t?"nav-item active":"nav-item",children:Object(b.jsx)(s.b,{className:"nav-link",to:"/SuccessStories",children:m("header.heading.8")})})]})]})]})})]})})})}},154:function(e,t,a){"use strict";a(0),a(166);var n=a(30),r=a(612),c=a.p+"static/media/whitelogo.79226ead.svg",s=a(144),o=a(4);t.a=function(e){var t=e.loginPage,a=Object(r.a)().t;return Object(o.jsx)("div",{children:Object(o.jsx)("footer",{className:t?"footer_login":"footer_other",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-3 col-4",children:Object(o.jsxs)("ul",{className:"p-0",children:[Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:"/",children:a("footer.links.col1.1")})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:"/",children:a("footer.links.col1.2")})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:"/about",children:a("footer.links.col1.3")})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:"/",children:a("footer.links.col1.4")})})]})}),Object(o.jsx)("div",{className:"col-md-3 col-4",children:Object(o.jsxs)("ul",{className:"p-0",children:[Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:"/career",children:a("footer.links.col2.1")})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:"/",children:a("footer.links.col2.2")})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:"/",children:a("footer.links.col2.3")})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:"/",children:a("footer.links.col2.4")})})]})}),Object(o.jsx)("div",{className:"col-md-3 col-4",children:Object(o.jsxs)("ul",{className:"p-0",children:[Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:"/",children:a("footer.links.col3.1")})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:"/",children:a("footer.links.col3.2")})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{to:"/",children:a("footer.links.col3.3")})})]})}),Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)("div",{className:"set_language",children:Object(o.jsx)(s.a,{})})})]}),Object(o.jsx)("div",{className:"bottom-footer mt-5",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-lg-9 col-md-8 col-6 text-left",children:Object(o.jsx)(n.b,{className:"",to:"/",children:Object(o.jsx)("img",{src:c,alt:"logo"})})}),Object(o.jsx)("div",{className:"col-lg-3 col-md-4 col-6 text-left",children:Object(o.jsx)("p",{className:"mt-lg-4 mt-md-3",children:"\xa9 2021 SheKunj.Inc."})})]})})]})})})}},166:function(e,t,a){},167:function(e,t,a){},194:function(e,t,a){"use strict";var n=a(1),r=a(42),c=a(146),s=a.n(c),o=a(0),i=a(151),l=a(4),u=["bsPrefix","className","as"],d=["xxl","xl","lg","md","sm","xs"],b=o.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.as,b=void 0===o?"div":o,j=Object(r.a)(e,u),h=Object(i.a)(a,"row"),p="".concat(h,"-cols"),m=[];return d.forEach((function(e){var t,a=j[e];delete j[e],t=null!=a&&"object"===typeof a?a.cols:a;var n="xs"!==e?"-".concat(e):"";null!=t&&m.push("".concat(p).concat(n,"-").concat(t))})),Object(l.jsx)(b,Object(n.a)(Object(n.a)({ref:t},j),{},{className:s.a.apply(void 0,[c,h].concat(m))}))}));b.displayName="Row",t.a=b},195:function(e,t,a){"use strict";var n=a(66),r=a(1),c=a(42),s=a(146),o=a.n(s),i=a(0),l=a(151),u=a(4),d=["as","bsPrefix","className"],b=["className"],j=["xxl","xl","lg","md","sm","xs"];var h=i.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,n=e.className,s=Object(c.a)(e,d);a=Object(l.a)(a,"col");var i=[],u=[];return j.forEach((function(e){var t,n,r,c=s[e];delete s[e],"object"===typeof c&&null!=c?(t=c.span,n=c.offset,r=c.order):t=c;var o="xs"!==e?"-".concat(e):"";t&&i.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=r&&u.push("order".concat(o,"-").concat(r)),null!=n&&u.push("offset".concat(o,"-").concat(n))})),[Object(r.a)(Object(r.a)({},s),{},{className:o.a.apply(void 0,[n].concat(i,u))}),{as:t,bsPrefix:a,spans:i}]}(e),s=Object(n.a)(a,2),i=s[0],h=i.className,p=Object(c.a)(i,b),m=s[1],f=m.as,v=void 0===f?"div":f,x=m.bsPrefix,O=m.spans;return Object(u.jsx)(v,Object(r.a)(Object(r.a)({},p),{},{ref:t,className:o()(h,!O.length&&x)}))}));h.displayName="Col",t.a=h}}]);
//# sourceMappingURL=4.9b876cca.chunk.js.map