(this["webpackJsonpshekung-frontend"]=this["webpackJsonpshekung-frontend"]||[]).push([[5],{103:function(e,n,t){},107:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(20),i=t.n(o),s=(t(97),t(5)),c=t(6),l=t(87),u=t(64),b=t.n(u),d=t(3),h=["component"];var g=function(e){var n=e.component,t=Object(l.a)(e,h),a=b.a.get("sheToken");return Object(d.jsx)(s.b,Object(c.a)(Object(c.a)({},t),{},{render:function(e){return a?Object(d.jsx)(s.a,{to:"/"}):Object(d.jsx)(n,Object(c.a)({},e))}}))},j=(t(103),r.a.lazy((function(){return Promise.all([t.e(1),t.e(2),t.e(11)]).then(t.bind(null,441))}))),O=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(9)]).then(t.bind(null,442))})),I=r.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(10)]).then(t.bind(null,447))})),p=r.a.lazy((function(){return Promise.all([t.e(0),t.e(4),t.e(8),t.e(14)]).then(t.bind(null,454))})),f=r.a.lazy((function(){return Promise.all([t.e(0),t.e(4),t.e(13)]).then(t.bind(null,461))})),L=r.a.lazy((function(){return Promise.all([t.e(0),t.e(16)]).then(t.bind(null,456))})),m=r.a.lazy((function(){return t.e(17).then(t.bind(null,448))})),S=r.a.lazy((function(){return Promise.all([t.e(1),t.e(15)]).then(t.bind(null,449))})),E=r.a.lazy((function(){return Promise.all([t.e(1),t.e(2),t.e(12)]).then(t.bind(null,450))}));var x=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(s.d,{children:[Object(d.jsx)(g,{exact:!0,path:"/login",component:I}),Object(d.jsx)(g,{exact:!0,path:"/signup",component:O}),Object(d.jsx)(g,{exact:!0,path:"/forgot",component:j}),Object(d.jsx)(g,{exact:!0,path:"/verify",component:m}),Object(d.jsx)(g,{exact:!0,path:"/authentication/email-verify/:token?",component:S}),Object(d.jsx)(g,{exact:!0,path:"/authentication/password-reset/:uidb/:token/",component:E}),Object(d.jsx)(s.b,{exact:!0,path:"/",component:p}),Object(d.jsx)(s.b,{exact:!0,path:"/about",component:f}),Object(d.jsx)(s.b,{exact:!0,path:"/career",component:L})]})})},_=function(e){e&&e instanceof Function&&t.e(18).then(t.bind(null,451)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),o(e),i(e)}))},y=t(38),F=t(63),P=t(37),N=t(75),A=t(21),R={isLoading:!1,user:{},isAuth:!1,error:null},k=Object(P.b)({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case A.a.LOGIN_REQUEST:return Object(c.a)(Object(c.a)({},e),{},{isLoading:!0,error:null});case A.a.LOGIN_FINISH:return Object(c.a)(Object(c.a)({},e),{},{isLoading:!1,user:n.payload,isAuth:!0,error:null});case A.a.LOGIN_FAIL:return Object(c.a)(Object(c.a)({},e),{},{isLoading:!1,user:{},isAuth:!1,error:n.payload});case A.a.SIGNUP_REQUEST:return Object(c.a)(Object(c.a)({},e),{},{isLoading:!0,error:null});case A.a.SIGNUP_FINISH:return Object(c.a)(Object(c.a)({},e),{},{isLoading:!1,user:n.payload,isAuth:!1,error:null});case A.a.SIGNUP_FAIL:return Object(c.a)(Object(c.a)({},e),{},{isLoading:!1,user:{},isAuth:!1,error:n.payload});case A.a.EMAIL_VERIFY_REQUEST:return Object(c.a)(Object(c.a)({},e),{},{isLoading:!0,error:null});case A.a.EMAIL_VERIFY_FINISH:return Object(c.a)(Object(c.a)({},e),{},{isLoading:!1,error:null});case A.a.EMAIL_VERIFY_FAIL:return Object(c.a)(Object(c.a)({},e),{},{isLoading:!1,user:{},isAuth:!1,error:n.payload});default:return e}}}),v=Object(P.c)(k,Object(P.a)(N.a)),G=(t(105),t(65)),U=(t(106),t(61)),T=t(116),w=t(43),C={en:{translation:t(77)},hi:{translation:t(78)}};U.a.use(w.a).use(T.e).use(w.a).init({resources:C,fallbackLng:"en",interpolation:{escapeValue:!1}});U.a;var V=t(136),z=t(137);var H=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(V.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:!0,children:Object(d.jsx)(z.a,{color:"inherit"})})})},M=t(134),Y=t(86),Q=Object(Y.a)({palette:{primary:{main:"#ec498a"},secondary:{main:"#000000"}}});i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(a.Suspense,{fallback:Object(d.jsx)(H,{}),children:Object(d.jsx)(M.a,{theme:Q,children:Object(d.jsx)(F.a,{store:v,children:Object(d.jsxs)(y.a,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(G.a,{position:"top-right",autoClose:2e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!0})]})})})})}),document.getElementById("root")),_()},21:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a={LOGIN_REQUEST:"LOGIN_REQUEST",LOGIN_FINISH:"LOGIN_FINISH",LOGIN_FAIL:"LOGIN_FAIL",SIGNUP_REQUEST:"SIGNUP_REQUEST",SIGNUP_FINISH:"SIGNUP_FINISH",SIGNUP_FAIL:"SIGNUP_FAIL",EMAIL_VERIFY_REQUEST:"EMAIL_VERIFY_REQUEST",EMAIL_VERIFY_FINISH:"EMAIL_VERIFY_FINISH",EMAIL_VERIFY_FAIL:"EMAIL_VERIFY_FAIL",LOGOUT_USER:"LOGOUT_USER"}},77:function(e){e.exports=JSON.parse('{"login":{"heading":"Login","label1":"E-mail address","label2":"Password","button":"Submit","forgotLink":"Forgot Password?","content":"Not a member ? ","signupLink":"Sign up now"},"signup":{"heading":"Signup","label1":"Name","label2":"Contact","label3":"E-mail address","label4":"Password","label4Placeholder":"6 + Characters","button":"Create Account","content":"Already member ?","loginLink":"Login now"},"forgot":{"heading":"Forgot Password","label":"E-mail address","button":"Submit"},"resetPassword":{"heading":"Change Password","label":"New Password"},"verify":{"heading":"Verify your e-mail to finish signing for She\u0915\u0941\u0902\u091c","heading2":"Thank you for choosing She\u0915\u0941\u0902\u091c","content":"Please confirm that {{email}} is your e-mail address by clicking on the link on your given e-mail within 24 hours."},"verifyResult":{"heading":"Verify email address","heading1":"Thanks!","heading2":"Your email address has been verified.","button":"Login"},"header":{"searchPlaceholder":"Career guidence, Online Courses, Success stories","courseButton":"Login/Register","heading":{"1":"About","2":"Courses","3":"Guidance","4":"Resume Builder","5":"Career","6":"Jobs","7":"Blogs","8":"Success story"}},"footer":{"links":{"col1":{"1":"Teach on Shekunj","2":"Get the app","3":"About us","4":"Contact us"},"col2":{"1":"Careers","2":"Blog","3":"Help and Support","4":"Affliatate"},"col3":{"1":"Terms","2":"Privacy Policy","3":"Sitemap"}}}}')},78:function(e){e.exports=JSON.parse('{"login":{"heading":"\u0932\u0949\u0917 \u0907\u0928","label1":"\u0908\u092e\u0947\u0932 \u090f\u0921\u094d\u0930\u0947\u0938","label2":"\u092a\u093e\u0938\u0935\u0930\u094d\u0921","button":"\u0932\u0949\u0917 \u0907\u0928 \u0915\u0930\u0947\u0902","forgotLink":"\u092a\u093e\u0938\u0935\u0930\u094d\u0921 \u092d\u0942\u0932 \u0917\u090f?","content":"\u0938\u0926\u0938\u094d\u092f \u0928\u0939\u0940\u0902 \u0939\u0948 ?","signupLink":"\u0905\u092d\u0940 \u0938\u093e\u0907\u0928\u0905\u092a \u0915\u0930\u0947\u0902"},"signup":{"heading":"\u0938\u093e\u0907\u0928 \u0905\u092a","label1":"\u0928\u093e\u092e","label2":"\u092e\u094b\u092c\u093e\u0907\u0932 \u0928\u0902\u092c\u0930","label3":"\u0908\u092e\u0947\u0932 \u090f\u0921\u094d\u0930\u0947\u0938","label4":"\u092a\u093e\u0938\u0935\u0930\u094d\u0921","label4Placeholder":"6 + \u0905\u0915\u094d\u0937\u0930","button":"\u0916\u093e\u0924\u093e \u092c\u0928\u093e\u090f\u0902","content":"\u092a\u0939\u0932\u0947 \u0938\u0947 \u0939\u0940 \u0938\u0926\u0938\u094d\u092f?","loginLink":"\u0905\u092d\u0940 \u0932\u0949\u0917\u093f\u0928 \u0915\u0930\u0947\u0902"},"forgot":{"heading":"\u092a\u093e\u0938\u0935\u0930\u094d\u0921 \u092d\u0942\u0932 \u0917\u090f","label":"\u0908\u092e\u0947\u0932 \u090f\u0921\u094d\u0930\u0947\u0938","button":"\u0908\u092e\u0947\u0932 \u092d\u0947\u091c\u0947\u0902"},"resetPassword":{"heading":"\u092a\u093e\u0938\u0935\u0930\u094d\u0921 \u092c\u0926\u0932\u0947\u0902","label":"\u0928\u092f\u093e \u092a\u093e\u0938\u0935\u0930\u094d\u0921"},"verify":{"heading":"She\u0915\u0941\u0902\u091c \u0915\u0947 \u0932\u093f\u090f \u0938\u093e\u0907\u0928\u0905\u092a \u092a\u094d\u0930\u0915\u094d\u0930\u093f\u092f\u093e \u0938\u092e\u093e\u092a\u094d\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0905\u092a\u0928\u093e \u0908\u092e\u0947\u0932 \u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0915\u0930\u0947\u0902","heading2":"She\u0915\u0941\u0902\u091c \u091a\u0941\u0928\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u0927\u0928\u094d\u092f\u0935\u093e\u0926","content":"\u0915\u0943\u092a\u092f\u093e 24 \u0918\u0902\u091f\u0947 \u0915\u0947 \u092d\u0940\u0924\u0930 \u0906\u092a\u0915\u0947 \u0926\u093f\u090f \u0917\u090f \u0908-\u092e\u0947\u0932 \u0915\u0947 \u0932\u093f\u0902\u0915 \u092a\u0930 \u0915\u094d\u0932\u093f\u0915 \u0915\u0930\u0915\u0947 \u092a\u0941\u0937\u094d\u091f\u093f \u0915\u0930\u0947\u0902 \u0915\u093f {{email}} \u0906\u092a\u0915\u093e \u0908-\u092e\u0947\u0932 \u092a\u0924\u093e \u0939\u0948\u0964"},"verifyResult":{"heading":"\u0908\u092e\u0947\u0932 \u092a\u0924\u0947 \u0915\u0940 \u092a\u0941\u0937\u094d\u091f\u093f","heading1":"\u0927\u0928\u094d\u092f\u0935\u093e\u0926!","heading2":"\u0906\u092a\u0915\u093e \u0908\u092e\u0947\u0932 \u092a\u0924\u093e \u0938\u0924\u094d\u092f\u093e\u092a\u093f\u0924 \u0915\u0930 \u0926\u093f\u092f\u093e \u0917\u092f\u093e \u0939\u0948\u0964","button":"\u0932\u0949\u0917 \u0907\u0928 \u0915\u0930\u0947\u0902"},"header":{"searchPlaceholder":"\u0915\u0930\u093f\u092f\u0930 \u092e\u093e\u0930\u094d\u0917\u0926\u0930\u094d\u0936\u0928, \u0911\u0928\u0932\u093e\u0907\u0928 \u092a\u093e\u0920\u094d\u092f\u0915\u094d\u0930\u092e, \u0938\u092b\u0932\u0924\u093e \u0915\u0940 \u0915\u0939\u093e\u0928\u093f\u092f\u093e\u0902","courseButton":"\u0932\u0949\u0917 \u0907\u0928/\u0930\u091c\u093f\u0938\u094d\u091f\u0930","heading":{"1":"\u0939\u092e\u093e\u0930\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902","2":"\u0915\u094b\u0930\u094d\u0938","3":"\u0938\u0932\u093e\u0939","4":"\u0930\u093f\u091c\u094d\u092f\u0942\u092e\u0947 \u092c\u093f\u0932\u094d\u0921\u0930","5":"\u0915\u0930\u093f\u092f\u0930","6":"\u0928\u094c\u0915\u0930\u093f\u092f\u093e\u0902","7":"\u092c\u094d\u0932\u0949\u0917","8":"\u0938\u092b\u0932\u0924\u093e \u0915\u0940 \u0915\u0939\u093e\u0928\u0940"}},"footer":{"links":{"col1":{"1":"\u0936\u0915\u0941\u0928\u091c\u094b \u092a\u0930 \u092a\u0922\u093c\u093e\u0928\u093e","2":"\u0910\u092a \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0915\u0930\u0947\u0902","3":"\u0939\u092e\u093e\u0930\u0947 \u092c\u093e\u0930\u0947 \u092e\u0947\u0902","4":"\u0938\u0902\u092a\u0930\u094d\u0915 \u0915\u0930\u0947\u0902"},"col2":{"1":"\u0915\u0930\u093f\u092f\u0930","2":"\u092c\u094d\u0932\u0949\u0917","3":"\u0938\u0939\u093e\u092f\u0924\u093e \u0914\u0930 \u0938\u092e\u0930\u094d\u0925\u0928","4":"\u0938\u0902\u092c\u0926\u094d\u0927"},"col3":{"1":"\u0928\u093f\u092f\u092e","2":"\u0917\u094b\u092a\u0928\u0940\u092f\u0924\u093e \u0928\u0940\u0924\u093f","3":"\u0938\u093e\u0907\u091f \u092e\u0948\u092a"}}}}')},97:function(e,n,t){}},[[107,6,7]]]);
//# sourceMappingURL=main.ef39cb3f.chunk.js.map