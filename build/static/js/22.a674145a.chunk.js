/*! For license information please see 22.a674145a.chunk.js.LICENSE.txt */
(this["webpackJsonpshekung-frontend"]=this["webpackJsonpshekung-frontend"]||[]).push([[22],{194:function(t,e,o){var i;!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var t=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var n=typeof i;if("string"===n||"number"===n)t.push(i);else if(Array.isArray(i)){if(i.length){var c=a.apply(null,i);c&&t.push(c)}}else if("object"===n)if(i.toString===Object.prototype.toString)for(var r in i)o.call(i,r)&&i[r]&&t.push(r);else t.push(i.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(i=function(){return a}.apply(e,[]))||(t.exports=i)}()},195:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));o(1);var i=o(0),a=(o(6),i.createContext({prefixes:{}}));a.Consumer,a.Provider;function n(t,e){var o=Object(i.useContext)(a).prefixes;return t||o[e]||e}},215:function(t,e,o){"use strict";var i=o(1),a=o(53),n=o(194),c=o.n(n),r=o(0),s=o(195),l=o(6),d=["bsPrefix","className","as"],u=["xxl","xl","lg","md","sm","xs"],j=r.forwardRef((function(t,e){var o=t.bsPrefix,n=t.className,r=t.as,j=void 0===r?"div":r,b=Object(a.a)(t,d),v=Object(s.a)(o,"row"),p="".concat(v,"-cols"),m=[];return u.forEach((function(t){var e,o=b[t];delete b[t],e=null!=o&&"object"===typeof o?o.cols:o;var i="xs"!==t?"-".concat(t):"";null!=e&&m.push("".concat(p).concat(i,"-").concat(e))})),Object(l.jsx)(j,Object(i.a)(Object(i.a)({ref:e},b),{},{className:c.a.apply(void 0,[n,v].concat(m))}))}));j.displayName="Row",e.a=j},216:function(t,e,o){"use strict";var i=o(81),a=o(1),n=o(53),c=o(194),r=o.n(c),s=o(0),l=o(195),d=o(6),u=["as","bsPrefix","className"],j=["className"],b=["xxl","xl","lg","md","sm","xs"];var v=s.forwardRef((function(t,e){var o=function(t){var e=t.as,o=t.bsPrefix,i=t.className,c=Object(n.a)(t,u);o=Object(l.a)(o,"col");var s=[],d=[];return b.forEach((function(t){var e,i,a,n=c[t];delete c[t],"object"===typeof n&&null!=n?(e=n.span,i=n.offset,a=n.order):e=n;var r="xs"!==t?"-".concat(t):"";e&&s.push(!0===e?"".concat(o).concat(r):"".concat(o).concat(r,"-").concat(e)),null!=a&&d.push("order".concat(r,"-").concat(a)),null!=i&&d.push("offset".concat(r,"-").concat(i))})),[Object(a.a)(Object(a.a)({},c),{},{className:r.a.apply(void 0,[i].concat(s,d))}),{as:e,bsPrefix:o,spans:s}]}(t),c=Object(i.a)(o,2),s=c[0],v=s.className,p=Object(n.a)(s,j),m=c[1],f=m.as,O=void 0===f?"div":f,h=m.bsPrefix,x=m.spans;return Object(d.jsx)(O,Object(a.a)(Object(a.a)({},p),{},{ref:e,className:r()(v,!x.length&&h)}))}));v.displayName="Col",e.a=v},223:function(t,e,o){"use strict";var i=o(1),a=o(53),n=o(194),c=o.n(n),r=o(0),s=o(195),l=o(6),d=["bsPrefix","fluid","as","className"],u=r.forwardRef((function(t,e){var o=t.bsPrefix,n=t.fluid,r=t.as,u=void 0===r?"div":r,j=t.className,b=Object(a.a)(t,d),v=Object(s.a)(o,"container"),p="string"===typeof n?"-".concat(n):"-fluid";return Object(l.jsx)(u,Object(i.a)(Object(i.a)({ref:e},b),{},{className:c()(j,n?"".concat(v).concat(p):v)}))}));u.displayName="Container",u.defaultProps={fluid:!1},e.a=u},242:function(t,e,o){},508:function(t,e,o){},540:function(t,e,o){"use strict";var i=o(23),a=o(11),n=o(3),c=o(192),r=o(25),s=(o(7),o(0));o(248);var l=s.createContext({}),d=o(40),u=o(52),j=o(272),b=o(165),v=o(189);function p(t){return Object(b.a)("MuiImageListItem",t)}var m=Object(v.a)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),f=o(6),O=["children","className","cols","component","rows","style"],h=Object(d.a)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:function(t,e){var o=t.ownerState;return[Object(i.a)({},"& .".concat(m.img),e.img),e.root,e[o.variant]]}})((function(t){var e=t.ownerState;return Object(n.a)({display:"inline-block",position:"relative",lineHeight:0},"standard"===e.variant&&{display:"flex",flexDirection:"column"},"woven"===e.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},Object(i.a)({},"& .".concat(m.img),Object(n.a)({objectFit:"cover",width:"100%",height:"100%"},"standard"===e.variant&&{height:"auto",flexGrow:1})))})),x=s.forwardRef((function(t,e){var o=Object(u.a)({props:t,name:"MuiImageListItem"}),i=o.children,d=o.className,b=o.cols,v=void 0===b?1:b,m=o.component,x=void 0===m?"li":m,g=o.rows,w=void 0===g?1:g,I=o.style,y=Object(a.a)(o,O),N=s.useContext(l),P=N.rowHeight,S=void 0===P?"auto":P,R=N.gap,A=N.variant,B="auto";"woven"===A?B=void 0:"auto"!==S&&(B=S*w+R*(w-1));var L=Object(n.a)({},o,{cols:v,component:x,gap:R,rowHeight:S,rows:w,variant:A}),W=function(t){var e=t.classes,o={root:["root",t.variant],img:["img"]};return Object(c.a)(o,p,e)}(L);return Object(f.jsx)(h,Object(n.a)({as:x,className:Object(r.a)(W.root,W[A],d),ref:e,style:Object(n.a)({height:B,gridColumnEnd:"masonry"!==A?"span ".concat(v):void 0,gridRowEnd:"masonry"!==A?"span ".concat(w):void 0,marginBottom:"masonry"===A?R:void 0},I),ownerState:L},y,{children:s.Children.map(i,(function(t){return s.isValidElement(t)?"img"===t.type||Object(j.a)(t,["Image"])?s.cloneElement(t,{className:Object(r.a)(W.img,t.props.className)}):t:null}))}))}));e.a=x},542:function(t,e,o){"use strict";var i=o(11),a=o(3),n=o(192),c=o(25),r=(o(7),o(0)),s=o(40),l=o(52),d=o(43),u=o(165),j=o(189);function b(t){return Object(u.a)("MuiImageListItemBar",t)}Object(j.a)("MuiImageListItemBar",["root","positionBottom","positionTop","positionBelow","titleWrap","titleWrapBottom","titleWrapTop","titleWrapBelow","titleWrapActionPosLeft","titleWrapActionPosRight","title","subtitle","actionIcon","actionIconActionPosLeft","actionIconActionPosRight"]);var v=o(6),p=["actionIcon","actionPosition","className","subtitle","title","position"],m=Object(s.a)("div",{name:"MuiImageListItemBar",slot:"Root",overridesResolver:function(t,e){var o=t.ownerState;return[e.root,e["position".concat(Object(d.a)(o.position))]]}})((function(t){var e=t.theme,o=t.ownerState;return Object(a.a)({position:"absolute",left:0,right:0,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},"bottom"===o.position&&{bottom:0},"top"===o.position&&{top:0},"below"===o.position&&{position:"relative",background:"transparent",alignItems:"normal"})})),f=Object(s.a)("div",{name:"MuiImageListItemBar",slot:"TitleWrap",overridesResolver:function(t,e){var o=t.ownerState;return[e.titleWrap,e["titleWrap".concat(Object(d.a)(o.position))],o.actionIcon&&e["titleWrapActionPos".concat(Object(d.a)(o.actionPosition))]]}})((function(t){var e=t.theme,o=t.ownerState;return Object(a.a)({flexGrow:1,padding:"12px 16px",color:e.palette.common.white,overflow:"hidden"},"below"===o.position&&{padding:"6px 0 12px",color:"inherit"},o.actionIcon&&"left"===o.actionPosition&&{paddingLeft:0},o.actionIcon&&"right"===o.actionPosition&&{paddingRight:0})})),O=Object(s.a)("div",{name:"MuiImageListItemBar",slot:"Title",overridesResolver:function(t,e){return e.title}})((function(t){return{fontSize:t.theme.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})),h=Object(s.a)("div",{name:"MuiImageListItemBar",slot:"Subtitle",overridesResolver:function(t,e){return e.subtitle}})((function(t){return{fontSize:t.theme.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"}})),x=Object(s.a)("div",{name:"MuiImageListItemBar",slot:"ActionIcon",overridesResolver:function(t,e){var o=t.ownerState;return[e.actionIcon,e["actionIconActionPos".concat(Object(d.a)(o.actionPosition))]]}})((function(t){var e=t.ownerState;return Object(a.a)({},"left"===e.actionPosition&&{order:-1})})),g=r.forwardRef((function(t,e){var o=Object(l.a)({props:t,name:"MuiImageListItemBar"}),r=o.actionIcon,s=o.actionPosition,u=void 0===s?"right":s,j=o.className,g=o.subtitle,w=o.title,I=o.position,y=void 0===I?"bottom":I,N=Object(i.a)(o,p),P=Object(a.a)({},o,{position:y,actionPosition:u}),S=function(t){var e=t.classes,o=t.position,i=t.actionIcon,a=t.actionPosition,c={root:["root","position".concat(Object(d.a)(o))],titleWrap:["titleWrap","titleWrap".concat(Object(d.a)(o)),i&&"titleWrapActionPos".concat(Object(d.a)(a))],title:["title"],subtitle:["subtitle"],actionIcon:["actionIcon","actionIconActionPos".concat(Object(d.a)(a))]};return Object(n.a)(c,b,e)}(P);return Object(v.jsxs)(m,Object(a.a)({ownerState:P,className:Object(c.a)(S.root,j),ref:e},N,{children:[Object(v.jsxs)(f,{ownerState:P,className:S.titleWrap,children:[Object(v.jsx)(O,{className:S.title,children:w}),g?Object(v.jsx)(h,{className:S.subtitle,children:g}):null]}),r?Object(v.jsx)(x,{ownerState:P,className:S.actionIcon,children:r}):null]}))}));e.a=g},590:function(t,e,o){"use strict";o.r(e);var i=o(0),a=o(223),n=o(215),c=o(216),r=o(82),s=o(540),l=o(542),d=o(200),u=o(86),j=(o(242),o(508),o(84)),b=o(10),v=o(6);e.default=function(){var t,e,o=Object(r.b)(),p=Object(r.c)((function(t){return t.careerReducer})),m=p.topSchools,f=p.courseSector;Object(i.useEffect)((function(){o(Object(u.f)()),o(Object(u.e)())}),[o]);return Object(v.jsxs)("div",{children:[Object(v.jsx)(d.h,{title:"She\u0915\u0941\u0902\u091c - Career"}),Object(v.jsx)(d.g,{loginPage:!0,page:"career",subPage:"schools"}),Object(v.jsx)("div",{className:"mainDiv_career",children:Object(v.jsxs)(a.a,{children:[Object(v.jsx)("div",{className:"career_tit",children:Object(v.jsx)("h2",{children:"Top Schools in India"})}),Object(v.jsxs)(n.a,{children:[Object(v.jsx)(c.a,{md:4,xs:12,children:Object(v.jsx)(d.a,{type:"schools",states:{name:"STATES",rows:null===m||void 0===m?void 0:m.state_list},ownership:f,educationBoard:{name:"EDUCATION_BOARD",rows:(null===m||void 0===m?void 0:m.board_list)||[]}})}),Object(v.jsx)(c.a,{md:8,xs:12,children:(null===m||void 0===m||null===(t=m.result)||void 0===t?void 0:t.length)>0?null===m||void 0===m||null===(e=m.result)||void 0===e?void 0:e.map((function(t){return Object(v.jsx)("div",{className:"career_box",style:{height:"auto"},children:Object(v.jsxs)(n.a,{children:[Object(v.jsxs)(c.a,{md:7,xs:12,children:[Object(v.jsx)("h3",{children:(null===t||void 0===t?void 0:t.name)||"N/A"}),Object(v.jsxs)("p",{style:{textTransform:"capitalize"},children:[(null===t||void 0===t?void 0:t.city)||"N/A",", ",(null===t||void 0===t?void 0:t.state)||"N/A"," \u2022"," ",Object(v.jsx)("span",{children:(null===t||void 0===t?void 0:t.school_type)||"N/A"})]}),Object(v.jsx)("ul",{children:Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{children:"Board"})," : ",(null===t||void 0===t?void 0:t.board_type)||"N/A"," "]})}),(null===t||void 0===t?void 0:t.is_collapse)&&Object(v.jsx)("div",{children:(null===t||void 0===t?void 0:t.about_school)||"N/A"}),Object(v.jsx)("button",{className:"btn_viewCour",onClick:function(){return e=null===t||void 0===t?void 0:t.id,i=null===t||void 0===t?void 0:t.is_collapse,void o(Object(u.h)(e,!i,"topSchools"));var e,i},children:(null===t||void 0===t?void 0:t.is_collapse)?"View less details":"View more details"})]}),Object(v.jsx)(c.a,{md:5,xs:12,children:Object(v.jsx)("div",{className:"career_img",children:Object(v.jsxs)(s.a,{children:[Object(v.jsx)("img",{srcSet:(e=null===t||void 0===t?void 0:t.image,e?(null===e||void 0===e?void 0:e.includes(b.a))?e:"".concat(b.a).concat(e):j.h),alt:"...",loading:"lazy"}),Object(v.jsx)(l.a,{title:"+9",subtitle:" Photos"})]})})})]})});var e})):Object(v.jsx)("div",{className:"text-center",children:"No data found!"})})]})]})}),Object(v.jsx)(d.i,{}),Object(v.jsx)(d.e,{loginPage:!1})]})}}}]);
//# sourceMappingURL=22.a674145a.chunk.js.map