(this["webpackJsonpshekung-frontend"]=this["webpackJsonpshekung-frontend"]||[]).push([[23],{536:function(e,c,t){"use strict";var n=t(3),a=t(115),i=t(180),r=t.n(i),s=t(1),o=t(524),l=t(0),d=["bsPrefix","fluid","as","className"],j=s.forwardRef((function(e,c){var t=e.bsPrefix,i=e.fluid,s=e.as,j=void 0===s?"div":s,b=e.className,u=Object(a.a)(e,d),O=Object(o.a)(t,"container"),x="string"===typeof i?"-".concat(i):"-fluid";return Object(l.jsx)(j,Object(n.a)(Object(n.a)({ref:c},u),{},{className:r()(b,i?"".concat(O).concat(x):O)}))}));j.displayName="Container",j.defaultProps={fluid:!1},c.a=j},591:function(e,c,t){},592:function(e,c,t){},612:function(e,c,t){"use strict";t.d(c,"a",(function(){return m}));var n=t(15),a=t(3),i=t(115),r=t(1),s=t(531),o=t(530),l=t(35),d=t(861),j=t(876),b=t(519),u=t(835),O=t(185),x=(t(591),t(438)),h=t(0),v=["children","value","index"];function A(e){var c=e.children,t=e.value,n=e.index,r=Object(i.a)(e,v);return Object(h.jsx)("div",Object(a.a)(Object(a.a)({role:"tabpanel",hidden:t!==n,id:"vertical-tabpanel-".concat(n),"aria-labelledby":"vertical-tab-".concat(n)},r),{},{children:t===n&&Object(h.jsx)(u.a,{sx:{p:3},children:Object(h.jsx)(b.a,{children:c})})}))}function g(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}function m(){var e,c,t=Object(l.b)(),i=Object(r.useState)(0),b=Object(n.a)(i,2),v=b[0],m=b[1],f=Object(r.useState)(0),p=Object(n.a)(f,2),C=p[0],N=p[1],k=Object(r.useState)(!1),w=Object(n.a)(k,2),S=w[0],U=w[1],B=Object(r.useState)(!0),R=Object(n.a)(B,2),y=R[0],P=R[1],E=Object(l.c)((function(e){return e.guidanceReducer})),I=E.guidanceCategory,J=E.guidanceCategoryDetail,Y=E.isLoading,Q=Object(x.a)().t,V=function(e,c){m(c)},X=function(e,c){P(!1),U(!0),m(0),N(e),t(Object(O.e)()),t(Object(O.b)(c))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"Com_title",children:Object(h.jsx)("h2",{children:Q("successCareerOption.heading.2")})}),Object(h.jsx)(u.a,{sx:{flexGrow:1,bgColor:"background.paper"},children:Object(h.jsxs)(o.a,{children:[Object(h.jsxs)(s.a,{md:4,xs:12,children:[Object(h.jsx)(j.a,Object(a.a)({label:Q("successCareerOption.heading.3"),onClick:function(){return function(e){P(e),U(!1),m(0),t(Object(O.a)())}(!0)}},g(0))),Object(h.jsx)(d.a,{orientation:"vertical",variant:"scrollable",value:S&&C,onChange:V,"aria-label":"categories",sx:{borderRight:1,borderColor:"divider"},children:null===I||void 0===I?void 0:I.map((function(e,c){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(j.a,Object(a.a)({label:null===e||void 0===e?void 0:e.name,onClick:function(){return X(c,null===e||void 0===e?void 0:e.id)},iconPosition:"start"},g(1)),null===e||void 0===e?void 0:e.id)})}))})]}),!y&&!S&&Object(h.jsx)("div",{className:"col-8 text-center mt-5",children:Q("successCareerOption.other.1")}),Object(h.jsxs)(s.a,{md:8,xs:12,children:[Object(h.jsx)(A,{value:v,index:0,children:Object(h.jsx)(o.a,{children:y&&((null===I||void 0===I||null===(e=I.private)||void 0===e?void 0:e.length)>0?null===I||void 0===I||null===(c=I.private)||void 0===c?void 0:c.map((function(e){return Object(h.jsxs)(s.a,{md:6,xs:12,children:[Object(h.jsxs)("div",{className:"tabs_box",children:[Object(h.jsx)("h2",{children:e.name}),Object(h.jsx)("p",{style:{wordWrap:"break-word"},children:e.short_description}),Object(h.jsx)("button",{onClick:function(){return X(e)},children:Q("successCareerOption.button.1")})]}),Object(h.jsx)("br",{})]})})):"Click on any exam to see its description")})}),S&&Object(h.jsx)(A,{children:Object(h.jsxs)("div",{className:"banking-exampage",children:[Object(h.jsx)("div",{children:Object(h.jsxs)("span",{className:"back_button",onClick:function(){return U(!1),P(!0),void t(Object(O.e)())},children:[Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB0SURBVHgBfZDLDYAgDEBblRWYwzm8sYwXN3AZbl5cgjlcARStiUqkHxKa9L2kHwQhtmHuIUZoJNhm8GAMoAR3BGeXMaAGqYYafAUJ3oIGKTr68vUgJm6hr0WTsz9ScnadQiVoUrXmX2IPVUrIDVZKrPBIlE9Q7WBnVCcnJQAAAABJRU5ErkJggg==",alt:""}),Q("successCareerOption.other.2")]})}),Object(h.jsx)("div",{className:"banking-examheader",children:Object(h.jsx)("h2",{children:null===J||void 0===J?void 0:J.category_name})}),(null===J||void 0===J?void 0:J.description)?Object(h.jsx)("div",{className:"locationdiv",dangerouslySetInnerHTML:{__html:null===J||void 0===J?void 0:J.description}}):Object(h.jsx)("div",{className:"text-center",children:Q(Y?"common.loading":"common.noDataFound")}),Object(h.jsx)("hr",{className:"border-colorbottom"})]})})]})]})})]})}},851:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t(181),i=t(536),r=t(35),s=t(543),o=t.n(s),l=(t(562),t(561),t(612)),d=t(185),j=(t(592),t(438)),b=t(0);c.default=function(){var e=Object(r.b)(),c=Object(j.a)().t;return Object(n.useEffect)((function(){e(Object(d.a)(null)),e(Object(d.a)()),o.a.init({duration:2e3})}),[e]),Object(b.jsxs)("div",{children:[Object(b.jsx)(a.g,{loginPage:!0,page:"guidance",subPage:"careerOption"}),Object(b.jsx)("div",{className:"SucOption",children:Object(b.jsx)(i.a,{children:Object(b.jsxs)("h2",{"data-aos":"slide-up",children:[c("successCareerOption.other.3.1")," ",Object(b.jsx)("br",{})," ",c("successCareerOption.other.3.2")]})})}),Object(b.jsx)("div",{className:"CompExams",children:Object(b.jsx)(i.a,{children:Object(b.jsx)(l.a,{})})}),Object(b.jsx)(a.e,{loginPage:!1})]})}}}]);
//# sourceMappingURL=23.eafc27e3.chunk.js.map