(this["webpackJsonpshekung-frontend"]=this["webpackJsonpshekung-frontend"]||[]).push([[17],{532:function(e,c,o){"use strict";o.d(c,"a",(function(){return t}));o(3);var s=o(1),n=(o(0),s.createContext({prefixes:{}}));n.Consumer,n.Provider;function t(e,c){var o=Object(s.useContext)(n).prefixes;return e||o[c]||c}},538:function(e,c,o){"use strict";var s=o(3),n=o(123),t=o(188),a=o.n(t),l=o(1),r=o(532),i=o(0),d=["bsPrefix","className","as"],j=["xxl","xl","lg","md","sm","xs"],b=l.forwardRef((function(e,c){var o=e.bsPrefix,t=e.className,l=e.as,b=void 0===l?"div":l,u=Object(n.a)(e,d),h=Object(r.a)(o,"row"),v="".concat(h,"-cols"),m=[];return j.forEach((function(e){var c,o=u[e];delete u[e],c=null!=o&&"object"===typeof o?o.cols:o;var s="xs"!==e?"-".concat(e):"";null!=c&&m.push("".concat(v).concat(s,"-").concat(c))})),Object(i.jsx)(b,Object(s.a)(Object(s.a)({ref:c},u),{},{className:a.a.apply(void 0,[t,h].concat(m))}))}));b.displayName="Row",c.a=b},539:function(e,c,o){"use strict";var s=o(14),n=o(3),t=o(123),a=o(188),l=o.n(a),r=o(1),i=o(532),d=o(0),j=["as","bsPrefix","className"],b=["className"],u=["xxl","xl","lg","md","sm","xs"];var h=r.forwardRef((function(e,c){var o=function(e){var c=e.as,o=e.bsPrefix,s=e.className,a=Object(t.a)(e,j);o=Object(i.a)(o,"col");var r=[],d=[];return u.forEach((function(e){var c,s,n,t=a[e];delete a[e],"object"===typeof t&&null!=t?(c=t.span,s=t.offset,n=t.order):c=t;var l="xs"!==e?"-".concat(e):"";c&&r.push(!0===c?"".concat(o).concat(l):"".concat(o).concat(l,"-").concat(c)),null!=n&&d.push("order".concat(l,"-").concat(n)),null!=s&&d.push("offset".concat(l,"-").concat(s))})),[Object(n.a)(Object(n.a)({},a),{},{className:l.a.apply(void 0,[s].concat(r,d))}),{as:c,bsPrefix:o,spans:r}]}(e),a=Object(s.a)(o,2),r=a[0],h=r.className,v=Object(t.a)(r,b),m=a[1],x=m.as,O=void 0===x?"div":x,f=m.bsPrefix,p=m.spans;return Object(d.jsx)(O,Object(n.a)(Object(n.a)({},v),{},{ref:c,className:l()(h,!p.length&&f)}))}));h.displayName="Col",c.a=h},544:function(e,c,o){"use strict";var s=o(3),n=o(123),t=o(188),a=o.n(t),l=o(1),r=o(532),i=o(0),d=["bsPrefix","fluid","as","className"],j=l.forwardRef((function(e,c){var o=e.bsPrefix,t=e.fluid,l=e.as,j=void 0===l?"div":l,b=e.className,u=Object(n.a)(e,d),h=Object(r.a)(o,"container"),v="string"===typeof t?"-".concat(t):"-fluid";return Object(i.jsx)(j,Object(s.a)(Object(s.a)({ref:c},u),{},{className:a()(b,t?"".concat(h).concat(v):h)}))}));j.displayName="Container",j.defaultProps={fluid:!1},c.a=j},546:function(e,c,o){},702:function(e,c,o){},862:function(e,c,o){"use strict";o.r(c);var s=o(1),n=o(544),t=o(538),a=o(539),l=o(32),r=o(163),i=o(90),d=(o(546),o(702),o(18)),j=o(447),b=o(56),u=o(0);c.default=function(){var e,c,o=Object(l.b)(),h=Object(l.c)((function(e){return e.careerReducer})),v=h.topSchools,m=h.courseSector,x=Object(j.a)().t,O=Object(l.c)((function(e){return e.languageReducer})).lan;Object(s.useEffect)((function(){o(Object(i.f)()),o(Object(i.e)())}),[o,O]);return Object(u.jsxs)("div",{children:[Object(u.jsx)(r.i,{title:"She\u0915\u0941\u0902\u091c - Career"}),Object(u.jsx)(r.g,{loginPage:!0,page:"career",subPage:"schools"}),Object(u.jsx)("div",{className:"mainDiv_career",children:Object(u.jsxs)(n.a,{children:[Object(u.jsx)("div",{className:"career_tit noselect",children:Object(u.jsx)("h2",{children:x("careerTopSchools.heading.1")})}),Object(u.jsxs)(t.a,{children:[Object(u.jsx)(a.a,{md:4,xs:12,children:Object(u.jsx)(r.a,{type:"schools",states:{name:x("careerTopSchools.listItems.1"),rows:null===v||void 0===v?void 0:v.state_list},ownership:m,educationBoard:{name:x("careerTopSchools.listItems.2"),rows:(null===v||void 0===v?void 0:v.board_list)||[]}})}),Object(u.jsx)(a.a,{md:8,xs:12,children:(null===v||void 0===v||null===(e=v.result)||void 0===e?void 0:e.length)>0?null===v||void 0===v||null===(c=v.result)||void 0===c?void 0:c.map((function(e){return(null===e||void 0===e?void 0:e.name)&&Object(u.jsx)("div",{className:"career_box noselect",style:{height:"auto"},children:Object(u.jsxs)(t.a,{children:[Object(u.jsx)(a.a,{md:7,xs:12,children:Object(u.jsxs)("div",{className:"top_col_content",children:[Object(u.jsx)("h3",{children:(null===e||void 0===e?void 0:e.name)||x("common.n/a")}),Object(u.jsxs)("p",{style:{textTransform:"capitalize"},children:[(null===e||void 0===e?void 0:e.city)||x("common.n/a"),","," ",(null===e||void 0===e?void 0:e.state)||x("common.n/a")," \u2022"," ",Object(u.jsx)("span",{style:{textTransform:"capitalize"},children:(null===e||void 0===e?void 0:e.school_type)||x("common.n/a")})]}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:x("careerTopSchools.other.1")})," :"," ",(null===e||void 0===e?void 0:e.board_type)||x("common.n/a")," "]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:x("careerTopSchools.other.2")})," :"," ",(null===e||void 0===e?void 0:e.contact_no)||x("common.n/a")," "]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:x("careerTopSchools.other.3")})," :"," ",Object(u.jsx)("a",{href:null===e||void 0===e?void 0:e.website,target:"_blank",rel:"noreferrer",children:e&&e.website?e.website:x("common.n/a")})]}),(null===e||void 0===e?void 0:e.is_collapse)&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:x("careerTopSchools.other.7")})," ",": ",(null===e||void 0===e?void 0:e.address)?Object(b.j)(e.address).map((function(e){return Object(u.jsx)("p",{children:e})})):x("common.n/a")]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:x("careerTopSchools.other.4")})," ",": ",(null===e||void 0===e?void 0:e.email)||x("common.n/a")]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:x("careerTopSchools.other.5")})," ",": ",(null===e||void 0===e?void 0:e.established_year)||x("common.n/a")]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:x("careerTopSchools.other.6")})," ",": ",(null===e||void 0===e?void 0:e.about_school)||x("common.n/a")]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:x("careerTopSchools.other.8")})," ",": ",(null===e||void 0===e?void 0:e.gender_intech)||x("common.n/a")]}),Object(u.jsxs)("li",{children:[Object(u.jsx)("span",{children:x("careerTopSchools.other.9")})," ",": ",(null===e||void 0===e?void 0:e.level)||x("common.n/a")]})]})]}),Object(u.jsx)("button",{className:"btn_viewCour",onClick:function(){return c=null===e||void 0===e?void 0:e.id,s=null===e||void 0===e?void 0:e.is_collapse,void o(Object(i.h)(c,!s,"topSchools"));var c,s},children:(null===e||void 0===e?void 0:e.is_collapse)?x("common.less"):x("common.more")})]})}),Object(u.jsx)(a.a,{md:5,xs:12,children:Object(u.jsx)("div",{className:"career_img",children:Object(u.jsx)("img",{srcSet:(c=null===e||void 0===e?void 0:e.image,c||d.b),alt:"..."})})})]})});var c})):Object(u.jsx)("div",{className:"text-center",children:x("common.noDataFound")})})]})]})}),Object(u.jsx)(r.e,{loginPage:!1})]})}}}]);
//# sourceMappingURL=17.c9985e81.chunk.js.map