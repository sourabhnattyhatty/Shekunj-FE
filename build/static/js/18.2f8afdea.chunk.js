(this["webpackJsonpshekunj-frontend"]=this["webpackJsonpshekunj-frontend"]||[]).push([[18],{539:function(e,c,o){"use strict";o.d(c,"a",(function(){return n}));o(3);var s=o(1),t=(o(0),s.createContext({prefixes:{}}));t.Consumer,t.Provider;function n(e,c){var o=Object(s.useContext)(t).prefixes;return e||o[c]||c}},545:function(e,c,o){"use strict";var s=o(3),t=o(125),n=o(191),a=o.n(n),l=o(1),i=o(539),r=o(0),d=["bsPrefix","className","as"],j=["xxl","xl","lg","md","sm","xs"],b=l.forwardRef((function(e,c){var o=e.bsPrefix,n=e.className,l=e.as,b=void 0===l?"div":l,u=Object(t.a)(e,d),h=Object(i.a)(o,"row"),v="".concat(h,"-cols"),m=[];return j.forEach((function(e){var c,o=u[e];delete u[e],c=null!=o&&"object"===typeof o?o.cols:o;var s="xs"!==e?"-".concat(e):"";null!=c&&m.push("".concat(v).concat(s,"-").concat(c))})),Object(r.jsx)(b,Object(s.a)(Object(s.a)({ref:c},u),{},{className:a.a.apply(void 0,[n,h].concat(m))}))}));b.displayName="Row",c.a=b},546:function(e,c,o){"use strict";var s=o(14),t=o(3),n=o(125),a=o(191),l=o.n(a),i=o(1),r=o(539),d=o(0),j=["as","bsPrefix","className"],b=["className"],u=["xxl","xl","lg","md","sm","xs"];var h=i.forwardRef((function(e,c){var o=function(e){var c=e.as,o=e.bsPrefix,s=e.className,a=Object(n.a)(e,j);o=Object(r.a)(o,"col");var i=[],d=[];return u.forEach((function(e){var c,s,t,n=a[e];delete a[e],"object"===typeof n&&null!=n?(c=n.span,s=n.offset,t=n.order):c=n;var l="xs"!==e?"-".concat(e):"";c&&i.push(!0===c?"".concat(o).concat(l):"".concat(o).concat(l,"-").concat(c)),null!=t&&d.push("order".concat(l,"-").concat(t)),null!=s&&d.push("offset".concat(l,"-").concat(s))})),[Object(t.a)(Object(t.a)({},a),{},{className:l.a.apply(void 0,[s].concat(i,d))}),{as:c,bsPrefix:o,spans:i}]}(e),a=Object(s.a)(o,2),i=a[0],h=i.className,v=Object(n.a)(i,b),m=a[1],x=m.as,O=void 0===x?"div":x,p=m.bsPrefix,f=m.spans;return Object(d.jsx)(O,Object(t.a)(Object(t.a)({},v),{},{ref:c,className:l()(h,!f.length&&p)}))}));h.displayName="Col",c.a=h},551:function(e,c,o){"use strict";var s=o(3),t=o(125),n=o(191),a=o.n(n),l=o(1),i=o(539),r=o(0),d=["bsPrefix","fluid","as","className"],j=l.forwardRef((function(e,c){var o=e.bsPrefix,n=e.fluid,l=e.as,j=void 0===l?"div":l,b=e.className,u=Object(t.a)(e,d),h=Object(i.a)(o,"container"),v="string"===typeof n?"-".concat(n):"-fluid";return Object(r.jsx)(j,Object(s.a)(Object(s.a)({ref:c},u),{},{className:a()(b,n?"".concat(h).concat(v):h)}))}));j.displayName="Container",j.defaultProps={fluid:!1},c.a=j},553:function(e,c,o){},718:function(e,c,o){},906:function(e,c,o){"use strict";o.r(c);var s=o(1),t=o(551),n=o(545),a=o(546),l=o(32),i=o(164),r=o(91),d=(o(553),o(718),o(450)),j=o(59),b=o.p+"static/media/scl.5bd1df01.jpg",u=o(26),h=o(0);c.default=function(){var e,c,o=Object(l.b)(),v=Object(l.c)((function(e){return e.careerReducer})),m=v.topSchools,x=v.courseSector,O=Object(d.a)().t,p=Object(l.c)((function(e){return e.languageReducer})).lan;Object(s.useEffect)((function(){o(Object(r.f)()),o(Object(r.e)())}),[o,p]);return Object(h.jsxs)("div",{children:[Object(h.jsx)(i.i,{title:"She\u0915\u0941\u0902\u091c - Career"}),Object(h.jsx)(i.g,{loginPage:!0,page:"career",subPage:"schools"}),Object(h.jsx)("div",{className:"mainDiv_career",children:Object(h.jsxs)(t.a,{children:[Object(h.jsx)("div",{className:"career_tit noselect",children:Object(h.jsx)("h2",{children:O("careerTopSchools.heading.1")})}),Object(h.jsxs)(n.a,{children:[Object(h.jsx)(a.a,{md:4,xs:12,children:Object(h.jsx)(i.a,{type:"schools",states:{name:O("careerTopSchools.listItems.1"),rows:null===m||void 0===m?void 0:m.state_list},ownership:x,educationBoard:{name:O("careerTopSchools.listItems.2"),rows:(null===m||void 0===m?void 0:m.board_list)||[]}})}),Object(h.jsx)(a.a,{md:8,xs:12,children:(null===m||void 0===m||null===(e=m.result)||void 0===e?void 0:e.length)>0?null===m||void 0===m||null===(c=m.result)||void 0===c?void 0:c.map((function(e){return(null===e||void 0===e?void 0:e.name)&&Object(h.jsx)("div",{className:"career_box noselect",style:{height:"auto"},children:Object(h.jsxs)(n.a,{children:[Object(h.jsx)(a.a,{md:7,xs:12,children:Object(h.jsxs)("div",{className:"top_col_content",children:[Object(h.jsx)("h3",{children:(null===e||void 0===e?void 0:e.name)||O("common.n/a")}),Object(h.jsxs)("p",{style:{textTransform:"capitalize"},children:[(null===e||void 0===e?void 0:e.city)||O("common.n/a"),","," ",(null===e||void 0===e?void 0:e.state)||O("common.n/a")," \u2022"," ",Object(h.jsx)("span",{style:{textTransform:"capitalize"},children:(null===e||void 0===e?void 0:e.school_type)||O("common.n/a")})]}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:O("careerTopSchools.other.1")})," :"," ",(null===e||void 0===e?void 0:e.board_type)||O("common.n/a")," "]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:O("careerTopSchools.other.2")})," :"," ",(null===e||void 0===e?void 0:e.contact_no)||O("common.n/a")," "]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:O("careerTopSchools.other.3")})," :"," ",Object(h.jsx)(u.b,{to:{pathname:"http://".concat(null===e||void 0===e?void 0:e.website)},target:"_blank",children:e&&e.website?e.website:O("common.n/a")})]}),(null===e||void 0===e?void 0:e.is_collapse)&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:O("careerTopSchools.other.7")})," ",": ",(null===e||void 0===e?void 0:e.address)?Object(j.j)(e.address).map((function(e){return Object(h.jsx)("p",{children:e})})):O("common.n/a")]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:O("careerTopSchools.other.4")})," ",": ",(null===e||void 0===e?void 0:e.email)||O("common.n/a")]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:O("careerTopSchools.other.5")})," ",": ",(null===e||void 0===e?void 0:e.established_year)||O("common.n/a")]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:O("careerTopSchools.other.6")})," ",": ",(null===e||void 0===e?void 0:e.about_school)||O("common.n/a")]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:O("careerTopSchools.other.8")})," ",": ",(null===e||void 0===e?void 0:e.gender_intech)||O("common.n/a")]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:O("careerTopSchools.other.9")})," ",": ",(null===e||void 0===e?void 0:e.level)||O("common.n/a")]})]})]}),Object(h.jsx)("button",{className:"btn_viewCour",onClick:function(){return c=null===e||void 0===e?void 0:e.id,s=null===e||void 0===e?void 0:e.is_collapse,void o(Object(r.h)(c,!s,"topSchools"));var c,s},children:(null===e||void 0===e?void 0:e.is_collapse)?O("common.less"):O("common.more")})]})}),Object(h.jsx)(a.a,{md:5,xs:12,children:Object(h.jsx)("div",{className:"career_img",children:Object(h.jsx)("img",{srcSet:(c=null===e||void 0===e?void 0:e.image,c||b),alt:"..."})})})]})});var c})):Object(h.jsx)("div",{className:"text-center",children:O("common.noDataFound")})})]})]})}),Object(h.jsx)(i.e,{loginPage:!1})]})}}}]);
//# sourceMappingURL=18.2f8afdea.chunk.js.map