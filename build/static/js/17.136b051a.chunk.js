(this["webpackJsonpshekung-frontend"]=this["webpackJsonpshekung-frontend"]||[]).push([[17],{525:function(e,c,t){"use strict";t.d(c,"a",(function(){return o}));t(3);var a=t(1),s=(t(0),a.createContext({prefixes:{}}));s.Consumer,s.Provider;function o(e,c){var t=Object(a.useContext)(s).prefixes;return e||t[c]||c}},531:function(e,c,t){"use strict";var a=t(3),s=t(115),o=t(181),n=t.n(o),i=t(1),l=t(525),r=t(0),d=["bsPrefix","className","as"],j=["xxl","xl","lg","md","sm","xs"],u=i.forwardRef((function(e,c){var t=e.bsPrefix,o=e.className,i=e.as,u=void 0===i?"div":i,b=Object(s.a)(e,d),v=Object(l.a)(t,"row"),f="".concat(v,"-cols"),m=[];return j.forEach((function(e){var c,t=b[e];delete b[e],c=null!=t&&"object"===typeof t?t.cols:t;var a="xs"!==e?"-".concat(e):"";null!=c&&m.push("".concat(f).concat(a,"-").concat(c))})),Object(r.jsx)(u,Object(a.a)(Object(a.a)({ref:c},b),{},{className:n.a.apply(void 0,[o,v].concat(m))}))}));u.displayName="Row",c.a=u},532:function(e,c,t){"use strict";var a=t(15),s=t(3),o=t(115),n=t(181),i=t.n(n),l=t(1),r=t(525),d=t(0),j=["as","bsPrefix","className"],u=["className"],b=["xxl","xl","lg","md","sm","xs"];var v=l.forwardRef((function(e,c){var t=function(e){var c=e.as,t=e.bsPrefix,a=e.className,n=Object(o.a)(e,j);t=Object(r.a)(t,"col");var l=[],d=[];return b.forEach((function(e){var c,a,s,o=n[e];delete n[e],"object"===typeof o&&null!=o?(c=o.span,a=o.offset,s=o.order):c=o;var i="xs"!==e?"-".concat(e):"";c&&l.push(!0===c?"".concat(t).concat(i):"".concat(t).concat(i,"-").concat(c)),null!=s&&d.push("order".concat(i,"-").concat(s)),null!=a&&d.push("offset".concat(i,"-").concat(a))})),[Object(s.a)(Object(s.a)({},n),{},{className:i.a.apply(void 0,[a].concat(l,d))}),{as:c,bsPrefix:t,spans:l}]}(e),n=Object(a.a)(t,2),l=n[0],v=l.className,f=Object(o.a)(l,u),m=n[1],x=m.as,h=void 0===x?"div":x,O=m.bsPrefix,p=m.spans;return Object(d.jsx)(h,Object(s.a)(Object(s.a)({},f),{},{ref:c,className:i()(v,!p.length&&O)}))}));v.displayName="Col",c.a=v},537:function(e,c,t){"use strict";var a=t(3),s=t(115),o=t(181),n=t.n(o),i=t(1),l=t(525),r=t(0),d=["bsPrefix","fluid","as","className"],j=i.forwardRef((function(e,c){var t=e.bsPrefix,o=e.fluid,i=e.as,j=void 0===i?"div":i,u=e.className,b=Object(s.a)(e,d),v=Object(l.a)(t,"container"),f="string"===typeof o?"-".concat(o):"-fluid";return Object(r.jsx)(j,Object(a.a)(Object(a.a)({ref:c},b),{},{className:n()(u,o?"".concat(v).concat(f):v)}))}));j.displayName="Container",j.defaultProps={fluid:!1},c.a=j},539:function(e,c,t){},690:function(e,c,t){},845:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t(537),o=t(531),n=t(532),i=t(32),l=t(182),r=t(121),d=(t(539),t(690),t(18)),j=t(439),u=t(0);c.default=function(){var e,c,t=Object(i.b)(),b=Object(i.c)((function(e){return e.careerReducer})),v=b.topSchools,f=b.courseSector,m=Object(j.a)().t,x=Object(i.c)((function(e){return e.languageReducer})).lan;Object(a.useEffect)((function(){t(Object(r.f)()),t(Object(r.e)())}),[t,x]);return Object(u.jsxs)("div",{children:[Object(u.jsx)(l.h,{title:"She\u0915\u0941\u0902\u091c - Career"}),Object(u.jsx)(l.g,{loginPage:!0,page:"career",subPage:"schools"}),Object(u.jsx)("div",{className:"mainDiv_career",children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)("div",{className:"career_tit",children:Object(u.jsx)("h2",{children:m("careerTopSchools.heading.1")})}),Object(u.jsxs)(o.a,{children:[Object(u.jsx)(n.a,{md:4,xs:12,children:Object(u.jsx)(l.a,{type:"schools",states:{name:m("careerTopSchools.listItems.1"),rows:null===v||void 0===v?void 0:v.state_list},ownership:f,educationBoard:{name:m("careerTopSchools.listItems.2"),rows:(null===v||void 0===v?void 0:v.board_list)||[]}})}),Object(u.jsx)(n.a,{md:8,xs:12,children:(null===v||void 0===v||null===(e=v.result)||void 0===e?void 0:e.length)>0?null===v||void 0===v||null===(c=v.result)||void 0===c?void 0:c.map((function(e){return Object(u.jsx)("div",{className:"career_box",style:{height:"auto"},children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(n.a,{md:7,xs:12,children:Object(u.jsxs)("div",{className:"top_col_content",children:[Object(u.jsx)("h3",{children:(null===e||void 0===e?void 0:e.name)||m("common.n/a")}),Object(u.jsxs)("p",{style:{textTransform:"capitalize"},children:[(null===e||void 0===e?void 0:e.city)||m("common.n/a"),", ",(null===e||void 0===e?void 0:e.state)||m("common.n/a")," \u2022"," ",Object(u.jsx)("span",{style:{textTransform:"capitalize"},children:(null===e||void 0===e?void 0:e.school_type)||m("common.n/a")})]}),Object(u.jsx)("ul",{children:Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:m("careerTopSchools.other.1")})," : ",(null===e||void 0===e?void 0:e.board_type)||m("common.n/a")," "]})}),(null===e||void 0===e?void 0:e.is_collapse)&&Object(u.jsx)("div",{children:(null===e||void 0===e?void 0:e.about_school)||m("common.n/a")}),Object(u.jsx)("button",{className:"btn_viewCour",onClick:function(){return c=null===e||void 0===e?void 0:e.id,a=null===e||void 0===e?void 0:e.is_collapse,void t(Object(r.h)(c,!a,"topSchools"));var c,a},children:(null===e||void 0===e?void 0:e.is_collapse)?m("common.less"):m("common.more")})]})}),Object(u.jsx)(n.a,{md:5,xs:12,children:Object(u.jsx)("div",{className:"career_img",children:Object(u.jsx)("img",{srcSet:(c=null===e||void 0===e?void 0:e.image,c||d.b),alt:"..."})})})]})});var c})):Object(u.jsx)("div",{className:"text-center",children:m("common.noDataFound")})})]})]})}),Object(u.jsx)(l.e,{loginPage:!1})]})}}}]);
//# sourceMappingURL=17.136b051a.chunk.js.map