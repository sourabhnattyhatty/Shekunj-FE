(this["webpackJsonpshekung-frontend"]=this["webpackJsonpshekung-frontend"]||[]).push([[20],{524:function(e,a,s){"use strict";s.d(a,"a",(function(){return n}));s(3);var c=s(1),t=(s(0),c.createContext({prefixes:{}}));t.Consumer,t.Provider;function n(e,a){var s=Object(c.useContext)(t).prefixes;return e||s[a]||a}},530:function(e,a,s){"use strict";var c=s(3),t=s(116),n=s(180),i=s.n(n),r=s(1),o=s(524),l=s(0),j=["bsPrefix","className","as"],d=["xxl","xl","lg","md","sm","xs"],b=r.forwardRef((function(e,a){var s=e.bsPrefix,n=e.className,r=e.as,b=void 0===r?"div":r,m=Object(t.a)(e,j),u=Object(o.a)(s,"row"),h="".concat(u,"-cols"),x=[];return d.forEach((function(e){var a,s=m[e];delete m[e],a=null!=s&&"object"===typeof s?s.cols:s;var c="xs"!==e?"-".concat(e):"";null!=a&&x.push("".concat(h).concat(c,"-").concat(a))})),Object(l.jsx)(b,Object(c.a)(Object(c.a)({ref:a},m),{},{className:i.a.apply(void 0,[n,u].concat(x))}))}));b.displayName="Row",a.a=b},531:function(e,a,s){"use strict";var c=s(15),t=s(3),n=s(116),i=s(180),r=s.n(i),o=s(1),l=s(524),j=s(0),d=["as","bsPrefix","className"],b=["className"],m=["xxl","xl","lg","md","sm","xs"];var u=o.forwardRef((function(e,a){var s=function(e){var a=e.as,s=e.bsPrefix,c=e.className,i=Object(n.a)(e,d);s=Object(l.a)(s,"col");var o=[],j=[];return m.forEach((function(e){var a,c,t,n=i[e];delete i[e],"object"===typeof n&&null!=n?(a=n.span,c=n.offset,t=n.order):a=n;var r="xs"!==e?"-".concat(e):"";a&&o.push(!0===a?"".concat(s).concat(r):"".concat(s).concat(r,"-").concat(a)),null!=t&&j.push("order".concat(r,"-").concat(t)),null!=c&&j.push("offset".concat(r,"-").concat(c))})),[Object(t.a)(Object(t.a)({},i),{},{className:r.a.apply(void 0,[c].concat(o,j))}),{as:a,bsPrefix:s,spans:o}]}(e),i=Object(c.a)(s,2),o=i[0],u=o.className,h=Object(n.a)(o,b),x=i[1],O=x.as,f=void 0===O?"div":O,A=x.bsPrefix,g=x.spans;return Object(j.jsx)(f,Object(t.a)(Object(t.a)({},h),{},{ref:a,className:r()(u,!g.length&&A)}))}));u.displayName="Col",a.a=u},536:function(e,a,s){"use strict";var c=s(3),t=s(116),n=s(180),i=s.n(n),r=s(1),o=s(524),l=s(0),j=["bsPrefix","fluid","as","className"],d=r.forwardRef((function(e,a){var s=e.bsPrefix,n=e.fluid,r=e.as,d=void 0===r?"div":r,b=e.className,m=Object(t.a)(e,j),u=Object(o.a)(s,"container"),h="string"===typeof n?"-".concat(n):"-fluid";return Object(l.jsx)(d,Object(c.a)(Object(c.a)({ref:a},m),{},{className:i()(b,n?"".concat(u).concat(h):u)}))}));d.displayName="Container",d.defaultProps={fluid:!1},a.a=d},588:function(e,a,s){"use strict";a.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF2SURBVHgB7VXRUcMwDJVzHaAbtJ2AMAHNBIQNwgRsQGUYgHaClgmACVomCJmAsEEWIOapTe4SX8s5df6a9+XIkp6ebDlEAwZ0hLINzDwOjElKpcbkAeQokOMd+fKW3SKbooKUlLoiT4AsRK6tCGjaR80PY0wMsmzBfE894In5rUS3sFzWtpZChTaiqttnrRfkAVEFshdDFCvraALbGU6vv8bMNPO3tJi6k4X7YyGaItfK3g+OxOQISuCs5Qy6qIXvg8SgjatH5juYChfCutINSCMEz6F2+59a2RMfdCZGzLXWennK9yRhlSjHBYqQ5FMqx7kkdFxVisI+4B/ZY2BjRA7gAzZ0IL0p0W6sC1S7BlEonYCqL5dcATmiUjsD2Y+o3avCWlqIPScygZNCi1iwq9Y76ojOhOcS1XBuaV+4MEI83nLVJ9QfJpKzaWhdGjy08rqkmLW1XHnyJMPozJFUN432/7CQIYbUjDyBH3BWzWhOAwb44A86t60PIoaQIwAAAABJRU5ErkJggg=="},761:function(e,a,s){},852:function(e,a,s){"use strict";s.r(a);s(1);var c=s(536),t=s(530),n=s(531),i=s(492),r=s(505),o=s(181),l=s(588),j=(s(761),s(438)),d=s(119),b=s(54),m=s(32),u=s(53),h=s(0);a.default=function(){var e=Object(j.a)().t,a=Object(m.b)(),s=b.b({name:b.d().required(e("Name is required")),email:b.d().email(e("login.form1.emailError.invalid")),subject:b.d().required(e("Subject is required")),message:b.d().required(e("Message is required"))}),x=Object(d.a)({initialValues:{name:"",email:"",subject:"",message:""},validationSchema:s,onSubmit:function(e){a(Object(u.b)(e)),S()}}),O=x.handleSubmit,f=x.handleChange,A=x.handleBlur,g=x.values,v=x.errors,p=x.touched,N=x.setFieldValue,C=x.isSubmitting,S=function(){N("name",""),N("email",""),N("subject",""),N("message","")};return Object(h.jsxs)("div",{children:[Object(h.jsx)(o.g,{loginPage:!1,page:"home"}),Object(h.jsx)("div",{className:"main_div_conUs",children:Object(h.jsx)(c.a,{children:Object(h.jsx)(t.a,{children:Object(h.jsx)(n.a,{md:6,xs:12,children:Object(h.jsxs)("div",{className:"conUs_tit",children:[Object(h.jsx)("h3",{children:e("contactUs.heading.1")}),Object(h.jsx)("h2",{children:e("contactUs.heading.2")})]})})})})}),Object(h.jsx)("div",{className:"add_main",children:Object(h.jsx)("div",{className:"add_set",children:Object(h.jsx)(c.a,{children:Object(h.jsxs)(t.a,{children:[Object(h.jsx)(n.a,{md:6,xs:12,children:Object(h.jsxs)("div",{className:"add_con",children:[Object(h.jsx)("h3",{children:e("contactUs.heading.3")}),Object(h.jsxs)(t.a,{children:[Object(h.jsx)(n.a,{md:6,xs:12,children:Object(h.jsxs)("p",{children:[Object(h.jsx)("img",{src:l.a,alt:""})," Info@shekunj.com"]})}),Object(h.jsx)(n.a,{md:6,xs:12,children:Object(h.jsxs)("p",{children:[Object(h.jsx)("img",{src:l.a,alt:""})," Support@shekunj.com"]})})]})]})}),Object(h.jsx)(n.a,{md:6,xs:12,children:Object(h.jsxs)("div",{className:"ConUs_form",children:[Object(h.jsxs)("p",{children:[e("contactUs.content.1")," "]}),Object(h.jsxs)("form",{onSubmit:O,children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(r.a,{name:"name",type:"text",placeholder:"Name",onChange:f,value:g.name,onBlur:A,autoComplete:"off"}),Object(h.jsx)(o.d,{error:v.name,touched:p.name,isSubmitting:C})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(r.a,{name:"email",type:"email",placeholder:"Email",autoComplete:"off",onChange:f,value:g.email,onBlur:A}),Object(h.jsx)(o.d,{error:v.email,touched:p.email})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(r.a,{name:"subject",type:"text",placeholder:"Subject",autoComplete:"off",onChange:f,value:g.subject,onBlur:A}),Object(h.jsx)(o.d,{error:v.subject,touched:p.subject,isSubmitting:C})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)(i.a,{className:"textarea_set",name:"message","aria-label":"minimum height",minRows:3,placeholder:"Message",onChange:f,value:g.message,onBlur:A}),Object(h.jsx)(o.d,{error:v.message,touched:p.message,isSubmitting:C})]})]}),Object(h.jsx)("button",{type:"submit",className:"send_btn",children:e("contactUs.button.1")})]})]})})]})})})}),Object(h.jsx)(o.e,{loginPage:!1})]})}}}]);
//# sourceMappingURL=20.eae438b3.chunk.js.map