(this["webpackJsonpshekung-frontend"]=this["webpackJsonpshekung-frontend"]||[]).push([[29],{525:function(e,s,c){"use strict";c.d(s,"a",(function(){return i}));c(3);var A=c(1),t=(c(0),A.createContext({prefixes:{}}));t.Consumer,t.Provider;function i(e,s){var c=Object(A.useContext)(t).prefixes;return e||c[s]||s}},531:function(e,s,c){"use strict";var A=c(3),t=c(115),i=c(181),a=c.n(i),r=c(1),n=c(525),l=c(0),o=["bsPrefix","className","as"],j=["xxl","xl","lg","md","sm","xs"],d=r.forwardRef((function(e,s){var c=e.bsPrefix,i=e.className,r=e.as,d=void 0===r?"div":r,b=Object(t.a)(e,o),g=Object(n.a)(c,"row"),u="".concat(g,"-cols"),x=[];return j.forEach((function(e){var s,c=b[e];delete b[e],s=null!=c&&"object"===typeof c?c.cols:c;var A="xs"!==e?"-".concat(e):"";null!=s&&x.push("".concat(u).concat(A,"-").concat(s))})),Object(l.jsx)(d,Object(A.a)(Object(A.a)({ref:s},b),{},{className:a.a.apply(void 0,[i,g].concat(x))}))}));d.displayName="Row",s.a=d},532:function(e,s,c){"use strict";var A=c(15),t=c(3),i=c(115),a=c(181),r=c.n(a),n=c(1),l=c(525),o=c(0),j=["as","bsPrefix","className"],d=["className"],b=["xxl","xl","lg","md","sm","xs"];var g=n.forwardRef((function(e,s){var c=function(e){var s=e.as,c=e.bsPrefix,A=e.className,a=Object(i.a)(e,j);c=Object(l.a)(c,"col");var n=[],o=[];return b.forEach((function(e){var s,A,t,i=a[e];delete a[e],"object"===typeof i&&null!=i?(s=i.span,A=i.offset,t=i.order):s=i;var r="xs"!==e?"-".concat(e):"";s&&n.push(!0===s?"".concat(c).concat(r):"".concat(c).concat(r,"-").concat(s)),null!=t&&o.push("order".concat(r,"-").concat(t)),null!=A&&o.push("offset".concat(r,"-").concat(A))})),[Object(t.a)(Object(t.a)({},a),{},{className:r.a.apply(void 0,[A].concat(n,o))}),{as:s,bsPrefix:c,spans:n}]}(e),a=Object(A.a)(c,2),n=a[0],g=n.className,u=Object(i.a)(n,d),x=a[1],h=x.as,v=void 0===h?"div":h,O=x.bsPrefix,m=x.spans;return Object(o.jsx)(v,Object(t.a)(Object(t.a)({},u),{},{ref:s,className:r()(g,!m.length&&O)}))}));g.displayName="Col",s.a=g},744:function(e,s,c){},864:function(e,s,c){"use strict";c.r(s);var A=c(1),t=c(30),i=c(26),a=c(32),r=c(117),n=c(531),l=c(532),o=c(182),j=(c(744),c(8)),d=c(439),b=c(0);s.default=function(){var e,s=Object(a.b)(),c=Object(t.i)().id,g=Object(a.c)((function(e){return e.coursesReducer})).course,u=Object(a.c)((function(e){return e.languageReducer})).lan,x=Object(d.a)().t;return Object(A.useEffect)((function(){s(Object(r.k)(c)),window.scrollTo({top:0,left:0,behavior:"smooth"})}),[s,c,u]),Object(A.useEffect)((function(){(null===g||void 0===g?void 0:g.category_id)&&s(Object(r.e)(null===g||void 0===g?void 0:g.category_id))}),[s,g,u]),Object(b.jsxs)("div",{children:[Object(b.jsx)(o.h,{title:"She\u0915\u0941\u0902\u091c - Course Detail"}),Object(b.jsx)(o.g,{loginPage:!0,page:"courses"}),Object(b.jsx)("section",{className:"CouDtl_ban noselect",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-md-7",children:Object(b.jsxs)("div",{className:"CouDtl_con",children:[Object(b.jsx)("h2",{children:null===g||void 0===g?void 0:g.category_name}),Object(b.jsx)("h5",{children:null===g||void 0===g?void 0:g.name}),Object(b.jsx)("div",{className:"ban_rat"}),Object(b.jsxs)("h4",{children:[x("coursesPage.coursesDetailsPage.heading.1.1")," ",Object(b.jsx)("span",{children:x("coursesPage.coursesDetailsPage.heading.1.2")})]})]})}),Object(b.jsx)("div",{className:"col-md-5",children:Object(b.jsx)("div",{className:"CouDtl",children:Object(b.jsx)("img",{src:null===g||void 0===g?void 0:g.image,alt:"",srcSet:""})})})]})})}),Object(b.jsx)("section",{className:"Coutl_sec1 mb-5 noselect",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-7",children:[Object(b.jsxs)("div",{className:"sec1_des",children:[Object(b.jsx)("h2",{children:x("coursesPage.coursesDetailsPage.heading.2")}),Object(b.jsx)("p",{children:null===g||void 0===g?void 0:g.description})]}),Object(b.jsx)("div",{className:"mt-2 mb-2"}),Object(b.jsxs)("div",{className:"sec1_con2 con_setSec1",children:[Object(b.jsx)("h2",{children:x("coursesPage.coursesDetailsPage.heading.3")}),Object(b.jsx)(n.a,{children:null===g||void 0===g||null===(e=g.What_you_will_learn)||void 0===e?void 0:e.map((function(e){return Object(b.jsx)(l.a,{md:6,xs:12,children:Object(b.jsxs)("div",{className:"features_box",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADkSURBVHgB7dI9DoIwFMDxV+KgJhoHY+LmETyCbnXjBnAFJ8MkTgYvId6CTW8im4lyAhWefC4NVZDH1v9GWvqDlwKoVCqiGLTUdWGPBt2+/oLwMvUsX1zXoIUSdNjrn+PfOnZAM8v2kMMFigBzBui/IXLL9pGOWkSfGC3LxkwK10HJ4LooCfwPKoXv/GBq8Y0ERHPsbU5AjCZJbnWYfxZzA+4Y1KgUnniWi4g7Gd4UTY/9tvjgjs0Y26YP+dgp0J+wiCPgWgNmNEUrwSKevdQMzc6oWIFToLULVo5+4/sZqFQqVdwHZi2qooYfGpMAAAAASUVORK5CYII=",alt:"",srcSet:""})}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:null===e||void 0===e?void 0:e.name})})]})},e.id)}))})]})]}),Object(b.jsx)("div",{className:"col-md-5",children:Object(b.jsxs)("div",{className:"sec2_right",children:[Object(b.jsx)(i.b,{to:j.routingConstants.COURSES_MODULE+c,className:"btn btn_str_Cor",children:x("coursesPage.coursesDetailsPage.other.1")}),Object(b.jsx)("h3",{className:"similar-coursestext",children:x("coursesPage.coursesDetailsPage.other.2")}),Object(b.jsx)("div",{className:"cou_set_similer",children:Object(b.jsx)(o.c,{page:"courseDetail"})}),Object(b.jsx)(i.b,{to:"/courses",className:"btn_view",children:x("coursesPage.coursesDetailsPage.other.3")})]})}),Object(b.jsx)(n.a,{children:Object(b.jsx)(l.a,{lg:7,md:12,children:Object(b.jsxs)("div",{className:"sec1_con2",children:[Object(b.jsx)("h2",{children:x("coursesPage.coursesDetailsPage.heading.4")}),Object(b.jsxs)(n.a,{children:[Object(b.jsxs)(l.a,{md:6,xs:12,children:[Object(b.jsxs)("div",{className:"features_box",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFASURBVHgB7dc/TsMwFAbw7zkVMDBUgg5s5QY5QrqVLnADxAk6AeqWTohM5QicoLDQbuQIvQHdkPgjdWAA1PgRD0jIsaVUxEor+SdFkfIs+7NiKw7geRuMbIWnKG7u7myHqNgSmB9MB3OUDfPeS/pgxAyaoWIEDkE02ns4HxZrmpdeEgbM42+WHdsM/uO5e9XeouBRcnbWmg7SvzWhNybJJ5Jx6yKIovpl4D4fOtJrAjVg5oXpeS1hbHwYGx/Gxoex8WFsfBgbYxgibqIGhjAyJYhj9amHA6pfQXTK2fJOrxkPV6/d61iQ6DPYweGKQgk5bE0uR8WahZpBA2ijzAD5YYk565Rp+/H5NTtM4wVceTtKGBXwW9uGVmyvXsk4v+lbP8qvVG+7P7kotY5+NbCifKHeGB4XfjtYBO4Wqeetox9/Ol7jajQB+gAAAABJRU5ErkJggg==",alt:"",srcSet:""})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{children:x("coursesPage.coursesDetailsPage.heading.features.1")}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ipsum netus semper feugiat."})]})]}),Object(b.jsxs)("div",{className:"features_box",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQ5SURBVHgB7VfNchpHEO6eBSE5P4KKpVROxk9g9ARGN+SL8RMIPYHkg+UoOYBPKqGDzRNIegKhE1TlYPwEJk9gfEqVZJWI4xgk2Jn0B2y0rAdpWXx0V1HLzvbMfNP9dU830TexC9OM8lduNz3Hzusr467+Ut9p0QyiaAZ5ly0lAcQQt+R5fCHvNINEBgMgPy7cea2NObpbe7YqzxMt77AURZRIYM5yu1kB8hYAlurPSxjDE++wFL5TBJmKM9iEOVZk0mlt9MZSfacR1DnN7RYcdoqGqaF7vcryH783w65vBQMXzM8nBv6Ps8oYooeKOCuvAsJUPnU7r+43Su2bFvZAyd+2JtOQjd7ofr/lOqrd7V62bfOtYM5yeyXFvImFBEjTGPMnkW7YLHGbDF2mxKL8gInTRGZwIM+9folNWmTShGlldIDGNbi90iTdiWBuk9NcuSDWWxfTihtNUk4tVjRNbehoub59SBFk6mhC6J6vld8CiNiv8rHz7/27tW3GU1xQwbh8fxclxK2WEf8m5ZQtGxCErhCyslTbfuX/NiJkFb+ztb0t6In+l1mZqc3CGwoLRvgikcRfsP0ayPP/gXgENW6/6oUxvgsg6B/L68oYFoN1edG2b2g3gSMSWS0/EIwxqQIiTcXiRX+yg55cE23ohNzCDkb8vqi0aQfG1sk1lXFNk3W6nS1EjJOIbwjY9Ph3LRyi9bEhNkJ0nbLuS1YRzigdcJPJOFedhveGxKhY3evPJzKwSL/bzUhktfzEdRJz0M+MrWJ0m1nN5iaRZGqUNS/yLweXpCz8Bnzx/+LsHHi3d6r6FPqhb/IJBNbv5VzpwHAbmwBQt9tNxslp2pLiaW7v0Lnz/eJAX0C7l70xC4tVknKIv237TmEZbrpzC1maQtzLK+iPX5SGJUGqC5u+Pc+I75n1mK+16R8px8F9VR0qmaStVJCT36PPn0YnV5uYN4ZlmGPe2/a1WoYZp1EP/GPL9Z1DAZlEQkMiE1eeBPmCHzaHK88flTdRamBeAOxD1mQtK6yWQRSIrw88jnjjUuc+GRRPktD8+SYoACJhs3Vl9Kp/fMShrETlE9u8icXVh7V9qW31SXBT70pAAsRd9E+n08BVgFD/YQGcUmIRkwTw4FUwTJI6v1T/NT8VGPBBSZiqzueVlKUQQvGkOCa3tkHxJaRE7cNNuCnoGk9wgWrjbkSpi8Q65ePztf2X9BXk/NF+8UOufHCTzo2hjRQvrsiDtDQTEHBIF3rkvqCoYJBB0ZxJ/buJk1FkIEMy39bkheoOPNKKevWn2rOnYeYM+6rv5AA6HwYIJFQGxkIqEV9xjU6FqeK8vkrSfupjp7MStu2dutf290U97b7wb3RtDVPoU3/j59pv1WnWjtT4wzIxKaqkPC3KCodo1pz43GPhRgHtbpi+6quB8YNySJUc5sdhm7tvEkX+A0PNQ+0N80nlAAAAAElFTkSuQmCC",alt:"",srcSet:""})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{children:x("coursesPage.coursesDetailsPage.heading.features.2")}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ipsum netus semper feugiat eget."})]})]}),Object(b.jsxs)("div",{className:"features_box",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIXSURBVHgB7ZZBbtNQEIb/eU5RhJBw1bSoO+cEwAna7pJsCCegnKBk0VRhQ1hVcReEExROQFZxdskN2pyAskJqG2EESlMSv+HZUVBEg+00eqit/G1e3mTG/j2eN2MgISHhDkLTm2/Fd6a8HB7h/+CKi/7WcqfqTgyp6X8Hg4G5RIbJ7D2HZgQZh7j/4KEvaqYYH5UqN9OqdKCZXt6+YhO4QaSgibPc/qZ61s3xTnZWY2Q7Usx5vlYEkxnqROxmnL3GZNsrHLwB8ysmNMAwCcaLXv6gseLslrCIGAYsEngc7hUcykDMac7eBsvtXyyfrjuVE9/2Nbdv3SOjfZavfVl19uq4rpiw4FkIwjMJvF9vjYX4+L9VhksE2lHbf15PQwGTag3k/m1llq7KnxUWqUEMd4XAxpUbidSGZNkNi4xRwPYntRSj/DJOOSicIXv1JRhHqohPVpq7b31br2DvMHN1BM5iETHqJnN143F92B/906TWamDkoMt2putoFlqanmQ2PUbpx0V/WWUqK2OOF20dmMBWVg1BPxtEwowTE/magvcNPInyyzTLL/9sBNWJ0T7P1T5LQV1iOvR4VFpYjJReV3XQ75iDtWb5+LRgbwlQ21Bt2Bey1qp8iIqLbnrXnOATQcxD61HrdSNOjLZBORGkluO4/jf/E2I8/vWiDoUZKiadTrvycuQGn4T6cdH/OdfBSEhIuJX8BmV70A/JFYBrAAAAAElFTkSuQmCC",alt:"",srcSet:""})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{children:x("coursesPage.coursesDetailsPage.heading.features.3")}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ipsum netus semper feugiat eget."})]})]})]}),Object(b.jsxs)(l.a,{md:6,xs:12,children:[Object(b.jsxs)("div",{className:"features_box",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFrSURBVHgB7ZcxTsMwFIbfC2UoIEgFCxPtCVBv0LHtFG5QbtAMIDGRrWo79AjNDWArY24AnKBlYmgqogoUQVI/HEREqGRHFs2A5E+KIlv/k/9nP0vPABqNGgiKTBuOuVfe7QAxU6aLgbnHd1czUMAARfbLO/dIdCrTEEB1G7fGUDR+a0Cb1GUp5QkW7eE1T7VLQCYokhpCwID/3MPJhS3TS49p0RqOiLHaMnyrHU0uMflAgTTmg+I6AavMm31HppfuDN+NTgSsXvOc4GcWPb89GBOjJ1EcGnjC62qWjpNCfrFG3dV7NOVDRxSXV8Dm+o2IKD6XGflKguhxGYb17Fzl1k4Skh51bs2s823OgQJQvtpFos2I0GZEaDMitBkR2owIbUaENiPiP5lBb97sNWAD+K2+xRvoB5lG2ukxJNsA44b3vF5eqykF4YC/EKwVwplclsNzs1ctoWHx7lz5qZJZJXgNQ/d3Y6/R/J1PiS19wDrw0vEAAAAASUVORK5CYII=",alt:"",srcSet:""})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{children:x("coursesPage.coursesDetailsPage.heading.features.4")}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ipsum netus semper."})]})]}),Object(b.jsxs)("div",{className:"features_box",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPsSURBVHgB7VdLThtBEK3qwfyUREYBpOzMCTAnwF5EstkEToBzAogUQVAWmAVyMAvwCTAnAG8AKQvMCfANMKtIBoQVwifY05WqMYMGe8YzNlE24UloPt09fv361QeAF7zgH+Iklg67va+8X416jbUDQhf4kchEerFnh4CimuDj6MFC3h47S2RiiMah3BOZ8ZGDpWLQ7yroEkJErgh62vkelTELXaIrMu8Olsosadn6cVTkHCNNpzKGQGWnKqKY/LX7bg/44GIqu8UyxMx6bWb0+9eS/V4D5RBxHAgjF8nsCTOKCAm+ljVgTkO97CRiH10lkX1yrE609UxlajWqKHT88FitkTkhNyHs2ULLL5RjWsU6ExC1xEu8uwiBShmIk4RQNG5uPumBwUMmaR2rJpPJLOU7JiM4T67ledosu3GbQOcVG1eTzv26u90cK6arXuuEmAEqLaSEgEJji9cXhve/zHutCRRNLG2K3VUyCA5NhPjo3kKpeY6Eshu5s+TavAKcE0J+kRXIwCaYRSbCipgzbkTEE28GBo/d1o7sL242/GUsgw8CkQkpY1kk9toZKV2lh+iy4Ux6QkgOwVK4DXyjSc6eoylVIxrzmjO6Z0VZ3H6+mFpfZo9J/pl4JEz1FQONDb7Ne33HVxkDjBiRLki0QAA0iOjUPR+p8/2DqmEpFV5rLWVEPg7ViNsERJgkwAK0gagXQhXlBDjeIKLjbuRNoiMwQkKm5ElGIVWJ3H8IJW+QLoEHKlPZqEQZEy4RUaxGesxLxUbWdt/0I5nh/cVdvuy6TThPrk9CG3AxSEnyGzlYSJ8ns9SvQo/bukiuX3IN4+8vDEEA+BqYE9wpOyfiNc6VeZfDdodLwgd+Kg/tfT61x37eXj8xPZePMJMrQ1AyvDsOQ5hrouSZacWYXDbiSoeiV3e3T9RtTYJSy8xd6BaS0JjgZSdrxEdWSnBAnv2+4xvajZDEEteoaQgIZCP3cpW+dCQ+SZxsn7aqeHpGMuir/r5GA8XVl1uFDf54ccil/jyE9gYHgpVbJONWEpnqfX+fkKnKuBC8Bx2Hbsi8HhiIsXCWdxphj2VpBZhQvJlQj9XLYMT5zm4TGi2qcWiSuSIhL5vsZ5JBk6gnzhJr6bPEN1epxSet8zMxabxk3eO8RCYl79zqVMcNuVer0ExCemE5Gk4NLa2DrRbfVqVs2Cq5khHWSkHbZOcKso4rKvmGE2Ghzs2YZVzv+RIUYc4/aXVznXP1jPQvShvQORdz++rud8mpHEdhgc0fbp1LEYWiBRPX5tFbXtPV/03PBTf5c8xmntXbdravvuXgb0MsQITTNarHnx1RL/jv8Qeo4gJPjUQ3FgAAAABJRU5ErkJggg==",alt:"",srcSet:""})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{children:x("coursesPage.coursesDetailsPage.heading.features.5")}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ipsum netus semper."})]})]}),Object(b.jsxs)("div",{className:"features_box",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQiSURBVHgB7VdfaFtlFD/nu7ltGl2X2SRzvtgivgjTQZ+Gc3+Y25oIMU9zezLC1BddJ25Jg4i3A+lyo271SZ+sDgZWxDGlSRRhoj5UkfVFhswS8cHRtNmqbbJb0/sdz42rNNlNe+8aB4P+4OO797vnnPu759/3XYB13AVAuA1M70s/IBRxSILsrDNGymQgf/xssU+Pq0blvOFt93tAxG1eWgjkkh82rgtwS6QvHUUPTpKAbSjwweWDhNllyahEpkXEK1RCqJe5Od4oRdLfw1oxHdZ/nAnrL8MaMB1Nb5iJZC6XDpw6uHzdtWfYxb0KigsryZQiev/VvqHuZs+DF5JzUspxifjImsiAgzwjwpgHoBtcwgMtwFQ4HVMA+5fume02ROU0h3O2Ro4jE8wmDq5mpyVkJMkJBRSuDuzkkhomoueY0dM8b+IEHkGkWSd2WkJmSy71G08j7AEshTODHfR3/oZQ9/LaZCCbGHFq53ZypimwFhGYqAhPAgl2oAKjbvRb4pk6SJnkPjLO1LKBLxI/uFG9hUwhpvk7F3xHuVv12GoQNMVU9M3NVMUUu3uW8+gxqxOHcs7DVEfmeuy0Xy5ULwHiZQVo1JQ2GgjxxiWrp6joGaUqPYpA5ypSfagdF/cqCDpX1BAn8vvBXFIDN2SqRjXGBq52jZ2INFNg4+80rnm93tlFw0jMGwsTPRe1pcr5xBrFA/oTXFHlRh2BuJFJNifDX9XNDesXWAkEP5nCPE6a1o+aVvPdpvOvWAQu2omH8olvG9eK+0/tJKBdfDnQlIwz0Ocgcbg07nuJvbS6NMEfBPKZUG7gO+u+FNYLPPkl0CCHru7D3Zc2Ki+wcxfZJYeqZPbYDd6091ii1jU3wYxAMTYTSadq5HibQMJdwWzyTKNpV56ZCuuPs3s7uZ/oPJ4P5VIf28lxQoMK/zXDM8Xw0DeClM9KkUyblSdc+n/a6bnyjEJwBIm+VqXnbSa1/fpuze9EL5RNXWIv7eaYxVeSc0zmSvjddkR4kvtPqYqLUQFYlB2+I071LS95ZKWXT4fDUJm39YzjMG0k4zCX271cpr08W+N3zoAoP3rLsY28do2nY82eO/aMQDjM2ZsIZE/ssYZo8/CuDFuL+/SHoUVwTIZj/uJ9N8pnl+6t3oJS7gh9lbgCLUJ9mJDmOdUVO8GblVGHrvzAz3ayipB+IqUIayFjmtVPPYryWrEvc7RslD9a1trh1/1a6B7R7lvNoApqkEi+x/l0Dlyijsz9X75e4F+RZxU+Mm7o8J3kpVrpTofTr3LiOkpU7rZz3NQ+mDMqg+AStofrf3dhpcCnNCw9lTnJ58q4iRANjSUm4H/EiqXN/0ij3DG3cvLu3JK9NWfuKBne5jf/VSlvX547d5xMGxrXTNlxLJQfGIZ1rKMe/wAsgqv006AHwAAAAABJRU5ErkJggg==",alt:"",srcSet:""})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h6",{children:x("coursesPage.coursesDetailsPage.heading.features.6.heading")}),Object(b.jsx)("p",{children:x("coursesPage.coursesDetailsPage.heading.features.6.data")})]})]})]})]})]})})})]})})}),Object(b.jsx)(o.e,{loginPage:!1})]})}}}]);
//# sourceMappingURL=29.2b4a8a1e.chunk.js.map