(this["webpackJsonpshekung-frontend"]=this["webpackJsonpshekung-frontend"]||[]).push([[19],{536:function(e,c,t){"use strict";var n=t(3),a=t(116),i=t(180),r=t.n(i),s=t(1),o=t(524),l=t(0),d=["bsPrefix","fluid","as","className"],j=s.forwardRef((function(e,c){var t=e.bsPrefix,i=e.fluid,s=e.as,j=void 0===s?"div":s,b=e.className,u=Object(a.a)(e,d),O=Object(o.a)(t,"container"),x="string"===typeof i?"-".concat(i):"-fluid";return Object(l.jsx)(j,Object(n.a)(Object(n.a)({ref:c},u),{},{className:r()(b,i?"".concat(O).concat(x):O)}))}));j.displayName="Container",j.defaultProps={fluid:!1},c.a=j},591:function(e,c,t){},592:function(e,c,t){},612:function(e,c,t){"use strict";t.d(c,"a",(function(){return m}));var n=t(15),a=t(3),i=t(116),r=t(1),s=t(531),o=t(530),l=t(32),d=t(861),j=t(876),b=t(519),u=t(835),O=t(185),x=(t(591),t(438)),h=t(0),v=["children","value","index"];function A(e){var c=e.children,t=e.value,n=e.index,r=Object(i.a)(e,v);return Object(h.jsx)("div",Object(a.a)(Object(a.a)({role:"tabpanel",hidden:t!==n,id:"vertical-tabpanel-".concat(n),"aria-labelledby":"vertical-tab-".concat(n)},r),{},{children:t===n&&Object(h.jsx)(u.a,{sx:{p:3},children:Object(h.jsx)(b.a,{children:c})})}))}function g(e){return{id:"vertical-tab-".concat(e),"aria-controls":"vertical-tabpanel-".concat(e)}}function m(){var e=Object(l.b)(),c=Object(r.useState)(0),t=Object(n.a)(c,2),i=t[0],b=t[1],v=Object(r.useState)(0),m=Object(n.a)(v,2),f=m[0],p=m[1],C=Object(r.useState)(!1),N=Object(n.a)(C,2),k=N[0],w=N[1],S=Object(r.useState)(!1),U=Object(n.a)(S,2),B=U[0],R=U[1],P=Object(l.c)((function(e){return e.guidanceReducer})),y=P.careerOptions,I=P.guidanceCategoryDetail,J=P.isLoading,Y=Object(x.a)().t;console.log(">>>>>>>>>",y);var _=function(e,c){b(c)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"Com_title",children:Object(h.jsx)("h2",{children:Y("successCareerOption.heading.2")})}),Object(h.jsx)(u.a,{sx:{flexGrow:1,bgColor:"background.paper"},children:Object(h.jsxs)(o.a,{children:[Object(h.jsxs)(s.a,{md:4,xs:12,children:[Object(h.jsx)(j.a,Object(a.a)({label:Y("successCareerOption.heading.3"),onClick:function(){return R(!1),w(!1),b(0),void e(Object(O.b)())}},g(0))),Object(h.jsx)(d.a,{orientation:"vertical",variant:"scrollable",value:k&&f,onChange:_,"aria-label":"categories",sx:{borderRight:1,borderColor:"divider"},children:null===y||void 0===y?void 0:y.map((function(c,t){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(j.a,Object(a.a)({label:null===c||void 0===c?void 0:c.name,onClick:function(){return n=t,a=null===c||void 0===c?void 0:c.id,R(!0),w(!1),b(0),p(n),e(Object(O.f)()),void e(Object(O.c)(a));var n,a},iconPosition:"start"},g(1)),null===c||void 0===c?void 0:c.id)})}))})]}),!B&&!k&&Object(h.jsx)("div",{className:"col-8 text-center mt-5",children:Y("successCareerOption.other.1")}),Object(h.jsxs)(s.a,{md:8,xs:12,children:[Object(h.jsx)(A,{value:i,index:0,children:Object(h.jsx)(o.a,{children:B&&y&&Object(h.jsxs)(s.a,{md:6,xs:12,children:[Object(h.jsxs)("div",{className:"tabs_box",children:[Object(h.jsx)("h2",{children:null===I||void 0===I?void 0:I.category_name}),Object(h.jsx)("p",{style:{wordWrap:"break-word"},children:"".concat(y[f].short_description.slice(0,100),"...")}),Object(h.jsx)("button",{onClick:function(){return R(!1),void w(!0)},children:Y("successCareerOption.button.1")})]}),Object(h.jsx)("br",{})]})})}),k&&Object(h.jsx)(A,{children:Object(h.jsxs)("div",{className:"banking-exampage",children:[Object(h.jsx)("div",{children:Object(h.jsxs)("span",{className:"back_button",onClick:function(){return w(!1),void R(!0)},children:[Object(h.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB0SURBVHgBfZDLDYAgDEBblRWYwzm8sYwXN3AZbl5cgjlcARStiUqkHxKa9L2kHwQhtmHuIUZoJNhm8GAMoAR3BGeXMaAGqYYafAUJ3oIGKTr68vUgJm6hr0WTsz9ScnadQiVoUrXmX2IPVUrIDVZKrPBIlE9Q7WBnVCcnJQAAAABJRU5ErkJggg==",alt:""}),Y("successCareerOption.other.2")]})}),Object(h.jsx)("div",{className:"banking-examheader",children:Object(h.jsx)("h2",{children:null===I||void 0===I?void 0:I.category_name})}),(null===I||void 0===I?void 0:I.description)?Object(h.jsx)("div",{className:"locationdiv",dangerouslySetInnerHTML:{__html:null===I||void 0===I?void 0:I.description}}):Object(h.jsx)("div",{className:"text-center",children:Y(J?"common.loading":"common.noDataFound")}),Object(h.jsx)("hr",{className:"border-colorbottom"})]})})]})]})})]})}},764:function(e,c,t){},854:function(e,c,t){"use strict";t.r(c);t(1);var n=t(181),a=t(536),i=t(612),r=(t(764),t(592),t(438)),s=t(0);c.default=function(){var e=Object(r.a)().t;return Object(s.jsxs)("div",{children:[Object(s.jsx)(n.g,{loginPage:!0,page:"guidance",subPage:"careerOption"}),Object(s.jsx)("div",{className:"SucOption",children:Object(s.jsx)(a.a,{children:Object(s.jsx)("h2",{children:e("successCareerOption.heading.1")})})}),Object(s.jsx)("div",{className:"CompExams",children:Object(s.jsx)(a.a,{children:Object(s.jsx)(i.a,{})})}),Object(s.jsx)(n.e,{loginPage:!1})]})}}}]);
//# sourceMappingURL=19.ed574523.chunk.js.map