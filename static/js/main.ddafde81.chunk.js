(this["webpackJsonpcar-rental"]=this["webpackJsonpcar-rental"]||[]).push([[0],{159:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),i=e(32),o=e.n(i),c=e(11),u=e(16),l=e(33),s=e(14),d=e(26),f={themes:{red:{color:"#ff0505"},blue:{color:"#6149e1"}},currentTheme:{color:"#ff0505"}},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case d.b:return Object(s.a)({},t,{currentTheme:n.payload});default:return t}},p={mainPaths:[{id:1,path:"",name:"Home",themeName:"red"},{id:2,path:"services",name:"Services",themeName:"blue"},{id:3,path:"vehicles",name:"Vehicles",themeName:"red"},{id:4,path:"our-benefits",name:"OurBenefits",themeName:"blue"},{id:5,path:"testimonials",name:"Testimonials",themeName:"red"},{id:6,path:"stations",name:"Stations",themeName:"blue"},{id:7,path:"contact-us",name:"ContactUs",themeName:"red"}],currentPath:{id:1,path:"",themeName:"red"}},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case d.a:return Object(s.a)({},t,{currentPath:t.mainPaths[n.payload-1]});default:return t}},h=Object(l.b)({themes:m,routes:v});e(99);var b=e(5),g=e(7),x=e(24),E={type:"tween",ease:[.16,1,.3,1],duration:.7},w={initial:{opacity:0},animate:{opacity:1,transitions:E}},O=function(t){var n=t.children,e=t.className,a=void 0===e?"":e;return r.a.createElement(g.b.div,{initial:"initial",animate:"animate",exit:"initial",variants:w,className:a},n)},j={initial:{y:"8vh",opacity:0},enter:{y:0,opacity:1,transition:Object(s.a)({},E,{delay:.4})},exit:{opacity:0}},y=function(t){var n=t.children,e=t.className,a=void 0===e?"":e;return r.a.createElement(g.b.div,{initial:"initial",animate:"enter",exit:"exit",variants:j,className:a},n)},k=function(){return r.a.createElement(O,null,r.a.createElement("div",{className:"bg bg-home"},r.a.createElement("div",{className:"bg-home__gradient"})))},N=e(6);function C(){var t=Object(N.a)(["\n\tposition: absolute;\n\tbottom: 0;\n\tz-index: -1;\n\twidth: 65vw;\n\tmin-width: 700px;\n\t/* filter: drop-shadow(127px 23px 5vw #6149e12b); */\n"]);return C=function(){return t},t}function z(){var t=Object(N.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tbackground-image: radial-gradient(54vh at 7% 63%, #08041163, transparent 103%),\n\t\tradial-gradient(\n\t\t\t100vh at 4% -18%,\n\t\t\t#6149e180 6%,\n\t\t\t#6149e17a 12%,\n\t\t\t#6149e112 32vw,\n\t\t\t#15102700 46vw\n\t\t),\n\t\tradial-gradient(\n\t\t\t84vh at 100% 100%,\n\t\t\t#6149e170 -1%,\n\t\t\t#6149e15c 22%,\n\t\t\t#6149e147 39%,\n\t\t\t#6149e138 50%,\n\t\t\t#6149e114 86%,\n\t\t\t#1a102700 124%\n\t\t),\n\t\tlinear-gradient(\n\t\t\t115deg,\n\t\t\t#000000,\n\t\t\t#09070efa 33vh,\n\t\t\t#0f0920eb 55vh,\n\t\t\t#0f0920c7 68vh,\n\t\t\t#0f09209e 76vh,\n\t\t\ttransparent 114vh\n\t\t);\n"]);return z=function(){return t},t}function T(){var t=Object(N.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n"]);return T=function(){return t},t}var P=Object(b.default)(g.b.div)(T()),R=b.default.div(z()),_=Object(b.default)(g.b.img)(C()),L={initial:"initial",animate:"animate",exit:"exit",transitions:E,variants:{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}},S={initial:"initial",animate:"animate",exit:"exit",variants:{initial:{x:"-100%",opacity:0},animate:{x:"-15%",opacity:1,transition:E},exit:{opacity:0}}},D=e(85),A=e.n(D),I=function(t){var n=t.image;return r.a.createElement(P,L,n&&r.a.createElement(_,Object.assign({},S,{src:A.a,alt:"mazda"})),r.a.createElement(R,null))};I.defaultProps={image:!0};var U=I,F=e(41),H=function(t){var n=t.render,e=Object(F.a)(""),a=Object(F.a)(""),r=Object(F.a)(""),i=Object(F.a)(!1);e.check((function(t){return t}),"Pick up is required"),a.check((function(t){return t}),"Pick up date is required"),r.check((function(t){return t}),"Return date required");var o=function(t){return!t.error};return n({$pickUp:e,$pickUpDate:a,$returnDate:r,displayError:i.value},(function(){[e,a,r].every(o)?alert("done"):i.set(!0)}))},M=e(65),W=e.n(M),$=e(49),B=function(t){var n=t.icon;return r.a.createElement("svg",{viewBox:"0 0 24 24",focusable:"false",style:{overflow:"initial"}},function(){switch(n){case"arrow":return r.a.createElement("path",{d:"M12 14.071L8.179 10.25a1.061 1.061 0 00-1.5 1.5l4.614 4.614a.999.999 0 001.414 0l4.614-4.614a1.061 1.061 0 00-1.5-1.5L12 14.071z"});case"arrow-long":return r.a.createElement("path",{d:"M12 3a1 1 0 00-1 1v13.07l-3.863-3.863a.999.999 0 00-1.414 0l-.086.086a.999.999 0 000 1.414l5.656 5.656a.999.999 0 001.414 0l5.656-5.656a.999.999 0 000-1.414l-.086-.086a.999.999 0 00-1.414 0L13 17.07V4a1 1 0 00-1-1z"});default:return r.a.createElement("path",{d:"M12 14.071L8.179 10.25a1.061 1.061 0 00-1.5 1.5l4.614 4.614a.999.999 0 001.414 0l4.614-4.614a1.061 1.061 0 00-1.5-1.5L12 14.071z"})}}())},G=r.a.createElement(B,{icon:"arrow"}),V={pickUp:{text:"Pick up:",className:"geo",svg:G,type:"select"},pickUpDate:{text:"Pick up date:",className:"up-date",svg:G,type:"date"},returnDate:{text:"Return date:",className:"return-date",svg:G,type:"date"}},Y=[{city:"Erevan",isActive:!0},{city:"Gyumri",isActive:!0},{city:"Abovyan",isActive:!1},{city:"Vanadzor",isActive:!1}],q=e(29),J=Object(a.forwardRef)((function(t,n){var e=t.onClick,a=t.selected;return r.a.createElement("div",{className:"select-menu",ref:n},Y.length?r.a.createElement("ul",{className:"select-menu__list"},Y.map((function(t){var n=t.city,i=t.active;return r.a.createElement("li",{className:"select-menu__list__item",onClick:function(t){return i&&e(t.target.innerText)},"data-selected":n===a,"data-active":i,key:n},r.a.createElement("span",null,n))}))):r.a.createElement("p",{className:"select-menu__no-value"},"No select"))})),X=function(t){var n=t.selected,e=t.onChange,i=t.customInput,o=Object(a.useState)(!1),c=Object($.a)(o,2),u=c[0],l=c[1],s=Object(a.useRef)(null);Object(q.useOutsideClickClose)(s,l);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(J,{ref:s,onClick:function(t){l(!u),e(t)},selected:n}):null,Object(a.cloneElement)(i,{onClick:function(){return l(!u)},value:n}))},K=r.a.forwardRef((function(t,n){var e=t.value,a=t.onClick,i=t.data,o=i.className,c=i.text,u=i.svg,l=i.error,s=i.displayError;return r.a.createElement("div",{className:"tools__".concat(o," tool"),onClick:a},s&&r.a.createElement(Z,{error:l}),r.a.createElement(Q,{text:c,value:e,svg:u}))})),Q=function(t){var n,e,a=t.text,i=t.value,o=t.svg;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,(n=a,(e=i)?"".concat(n," ").concat(e):n)),o)},Z=function(t){var n=t.error;return r.a.createElement("p",{className:"error"},n)},tt=K,nt=function(t){var n=t.$pickUp,e=t.$pickUpDate,a=t.$returnDate,i=t.displayError,o=V.pickUp,c=V.pickUpDate,u=V.returnDate;return r.a.createElement("div",{className:"tools"},r.a.createElement(X,{selected:n.value,onChange:function(t){return n.set(t)},customInput:r.a.createElement(tt,{data:Object(s.a)({},o,{error:n.error,displayError:i})})}),r.a.createElement(W.a,{selected:e.value,onChange:function(t){var n,r;e.set(t),n=t,(r=a.value)&&n>r&&a.set("")},minDate:new Date,customInput:r.a.createElement(tt,{data:Object(s.a)({},c,{error:e.error,displayError:i})})}),r.a.createElement(W.a,{selected:a.value,onChange:function(t){return a.set(t)},minDate:e.value||new Date,customInput:r.a.createElement(tt,{data:Object(s.a)({},u,{error:a.error,displayError:i})})}))};function et(){var t=Object(N.a)(["\n\t\t\t\t\t\tbackground-color: var(--purple);\n\t\t\t\t\t\tbackground-image: radial-gradient(\n\t\t\t\t\t\t\t100px at 100% 60%,\n\t\t\t\t\t\t\t#23113fab,\n\t\t\t\t\t\t\ttransparent 267%\n\t\t\t\t\t\t);\n\t\t\t\t\t\tbox-shadow: 0px 0px 3vh 0px #201131d3;\n\t\t\t\t\t\toutline: 1px dotted var(--blue);\n\t\t\t\t\t\toutline-offset: 1px;\n\t\t\t\t\t"]);return et=function(){return t},t}function at(){var t=Object(N.a)(["\n\t\t\t\t\t\tcolor: var(--theme);\n\t\t\t\t\t"]);return at=function(){return t},t}function rt(){var t=Object(N.a)(["\n\t&:focus "," {\n\t\toutline: 1px dotted var(--theme);\n\t\toutline-offset: 10px;\n\t\t",";\n\t}\n\n\t&:focus,\n\t& ",":focus {\n\t\toutline: none;\n\t}\n"]);return rt=function(){return t},t}var it=function(t,n){return Object(b.css)(rt(),t,(function(){switch(n){case"menu-text":return Object(b.css)(at());case"home-button":return Object(b.css)(et());default:return}}),t)};function ot(){var t=Object(N.a)(["\n\tposition: relative;\n\theight: 100%;\n\twidth: 12vw;\n\tmin-width: 20vh;\n\tborder: none;\n\tcursor: pointer;\n\tbackground: transparent;\n\n\t","\n"]);return ot=function(){return t},t}function ct(){var t=Object(N.a)(["\n\theight: 100%;\n\tdisplay: grid;\n\tplace-content: center;\n\tbackground-color: var(--blue);\n\tbackground-image: radial-gradient(\n\t\t100px at 100% 60%,\n\t\t#311ca1,\n\t\ttransparent 267%\n\t);\n\tfont-size: var(--p);\n\tfont-weight: 500;\n\ttext-transform: uppercase;\n\tcolor: var(--white);\n\n\t&:hover {\n\t\tbackground-color: var(--purple);\n\t\tbackground-image: radial-gradient(\n\t\t\t100px at 100% 60%,\n\t\t\t#23113fab,\n\t\t\ttransparent 267%\n\t\t);\n\t\tbox-shadow: 0px 0px 3vh 0px #201131d3;\n\t}\n"]);return ct=function(){return t},t}var ut=b.default.span.attrs((function(){return{tabIndex:"-1"}}))(ct()),lt=b.default.button(ot(),it(ut,"home-button")),st=function(t){return r.a.createElement(lt,t,r.a.createElement(ut,null,"search"))};function dt(){var t=Object(N.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\theight: 4em;\n\tposition: relative;\n"]);return dt=function(){return t},t}var ft=b.default.div.attrs((function(){return{className:"home__search"}}))(dt()),mt=function(){return r.a.createElement(H,{render:function(t,n){return r.a.createElement(ft,null,r.a.createElement(nt,t),r.a.createElement(st,{onClick:n}))}})};function pt(){var t=Object(N.a)(["\n\tfont-size: var(--p);\n\tfont-weight: 500;\n\tline-height: 130%;\n\tcolor: var(--paragraf);\n"]);return pt=function(){return t},t}function vt(){var t=Object(N.a)(["\n\tfont-size: var(--h3);\n\tcolor: var(--white);\n\tfont-weight: 500;\n\tmargin-bottom: 0.5em;\n"]);return vt=function(){return t},t}function ht(){var t=Object(N.a)(["\n\tposition: relative;\n\tleft: 6%;\n"]);return ht=function(){return t},t}function bt(){var t=Object(N.a)(["\n\tposition: relative;\n\talign-self: center;\n\tleft: -10%;\n\tcolor: var(--red);\n\tfont-size: var(--h3);\n\tfont-weight: 400;\n\tletter-spacing: 1px;\n\ttext-transform: uppercase;\n\tmargin: 4vh 0 7vh 0;\n\n\t/* right line */\n\t&::before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbottom: 20%;\n\t\tleft: 110%;\n\t\theight: 1px;\n\t\twidth: 100%;\n\t\tbackground-color: var(--red);\n\t}\n\n\t/* text shadow */\n\t&::after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tbottom: 25%;\n\t\tleft: -8%;\n\t\theight: 50%;\n\t\twidth: 120%;\n\t\tbackground-color: var(--red);\n\t\tfilter: blur(54px);\n\t}\n"]);return bt=function(){return t},t}function gt(){var t=Object(N.a)(["\n\tposition: relative;\n\tfont-size: 120px;\n\tfont-weight: 400;\n\tcolor: var(--white);\n\tline-height: 80%;\n\topacity: 0.99 !important;\n\n\t&::after {\n\t\tcontent: attr(data-bg-text);\n\t\twidth: max-content;\n\t\tposition: absolute;\n\t\tleft: -14%;\n\t\tfont-size: 1em;\n\t\tfont-weight: 900;\n\t\tbackground-image: linear-gradient(to top, #2a2048, transparent);\n\t\tbackground-clip: text;\n\t\t-webkit-background-clip: text;\n\t\t-webkit-text-fill-color: transparent;\n\t\tz-index: -1;\n\t\topacity: 0;\n\t\tanimation: "," 0.7s 0.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n\t}\n"]);return gt=function(){return t},t}function xt(){var t=Object(N.a)(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-self: flex-end;\n"]);return xt=function(){return t},t}function Et(){var t=Object(N.a)(["\n\tfrom {\n\t\topacity: 0;\n\t\ttop: -150%;\n\t}\n\tto {\n\t\topacity: 1;\n\t\ttop: -47%;\n\t}\n"]);return Et=function(){return t},t}var wt=Object(b.keyframes)(Et()),Ot=Object(b.default)(g.b.header)(xt()),jt=Object(b.default)(g.b.h1).attrs((function(){return{"data-bg-text":"CAR RENTAL"}}))(gt(),wt),yt=Object(b.default)(g.b.p)(bt()),kt=b.default.div(ht()),Nt=Object(b.default)(g.b.h2)(vt()),Ct=Object(b.default)(g.b.p)(pt()),zt={initial:{y:80,opacity:0},animate:{y:0,opacity:1,transition:E}},Tt={animate:{transition:{staggerChildren:.1}},exit:{opacity:0}},Pt={initial:"initial",animate:"animate",exit:"exit",variants:Tt},Rt={variants:zt},_t=function(){return r.a.createElement(Ot,Pt,r.a.createElement(jt,Rt,"Car Rental"),r.a.createElement(yt,Rt,"helps you"),r.a.createElement(kt,null,r.a.createElement(Nt,Rt,"Here you can rent a car of any brand"),r.a.createElement(Ct,Rt,"The Car Rental revolution: no more paperwork or endless waiting lines,",r.a.createElement("br",null),"premium cars guaranteed and your virtual key diractly in your smartphone!")))};function Lt(){var t=Object(N.a)([""]);return Lt=function(){return t},t}var St=b.default.section.attrs((function(){return{className:"home main-content"}}))(Lt()),Dt=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(k,null),r.a.createElement(St,null,r.a.createElement(_t,null),r.a.createElement(y,null,r.a.createElement(mt,null))))},At={variants:{initial:{top:40,opacity:0},animate:{top:0,opacity:1,transition:Object(s.a)({},E,{staggerChildren:.1})}}},It={variants:{initial:{y:40,opacity:0},animate:{y:0,opacity:1,transition:E}}};function Ut(){var t=Object(N.a)(["\n\tposition: absolute;\n\ttop: -21%;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-image: radial-gradient(\n\t\t\t0.7em at 7% 36%,\n\t\t\tvar(--white) 15%,\n\t\t\ttransparent 26%\n\t\t),\n\t\tradial-gradient(0.2em at 35% 38%, #8f78a8 15%, transparent 61%),\n\t\tradial-gradient(0.2em at 12% 62%, #68368a 15%, transparent 52%),\n\t\tradial-gradient(0.1em at 23% 10%, #68368b 15%, transparent 81%),\n\t\tradial-gradient(0.35em at 45% 4%, #8b40c1 15%, transparent 37%);\n\n\t",":hover & {\n\t\tbackground-image: radial-gradient(\n\t\t\t\t0.7em at 7% 36%,\n\t\t\t\t#d3c6de 15%,\n\t\t\t\ttransparent 26%\n\t\t\t),\n\t\t\tradial-gradient(0.2em at 35% 38%, var(--white) 15%, transparent 61%),\n\t\t\tradial-gradient(0.2em at 12% 62%, var(--white) 15%, transparent 52%),\n\t\t\tradial-gradient(0.1em at 23% 10%, var(--white) 15%, transparent 81%),\n\t\t\tradial-gradient(0.35em at 45% 4%, var(--white) 15%, transparent 37%);\n\t}\n"]);return Ut=function(){return t},t}function Ft(){var t=Object(N.a)(["\n\tposition: relative;\n\twidth: 3.125em;\n\theight: 3.125em;\n\tborder-radius: 50%;\n\tbackground-color: var(--card-fon);\n\tbackground-image: linear-gradient(-180deg, #181923, transparent 100%);\n\tbox-shadow: -3px -2px 2px 1px #110c14d6, 0px 0px 1px 3px #6e3994,\n\t\t1px 0px 3px 4px #110c1499, inset -1px 0px 2px 2px #110c145e;\n\n\t",":hover & {\n\t\tbackground-color: var(--blue);\n\t\tbackground-image: linear-gradient(-180deg, #311ca1, transparent 120%);\n\t\tbox-shadow: -2px -1px 2px 0px #1e06cdd6, 0px 0px 1px 2px #b2a3c0,\n\t\t\t1px 0px 3px 2px #0b008dd4, inset -1px 0px 2px 2px #00026f0a;\n\t}\n"]);return Ft=function(){return t},t}function Ht(){var t=Object(N.a)(["\n\tdisplay: grid;\n\tgrid-column-gap: 1.5em;\n\tgrid-template-columns: min-content 1fr;\n\tpadding: 27px 27px 20px 27px;\n\n\tbackground-color: var(--card-fon);\n\tbackground-image: radial-gradient(34vw at 144% 70%, #191921, var(--card-fon));\n\n\ttransition: transform 250ms ease-out;\n\n\tposition: relative;\n\tuser-select: none;\n\tcursor: pointer;\n\n\n\th2 {\n\t\tposition: relative;\n\t\tcolor: var(--white);\n\t\tfont-size: var(--p);\n\t\tletter-spacing: 0.5px;\n\t\tfont-weight: 500;\n\n\t\t/* line under the text */\n\t\t&::after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tleft: 0;\n\t\t\ttop: 2em;\n\t\t\twidth: 1.5em;\n\t\t\theight: 2px;\n\t\t\tbackground-color: var(--purple);\n\t\t\tbox-shadow: 0 0 11px 0px #9642f2;\n\t\t}\n\t}\n\n\tp {\n\t\tgrid-column: 1/3;\n\t\talign-self: end;\n\t\tfont-size: calc(var(--p) - 4px);\n\t\tcolor: var(--white);\n\t\tfont-weight: 500;\n\t}\n\n\t&:hover {\n\t\tbackground-color: var(--blue);\n\t\tbackground-image: radial-gradient(\n\t\t\t100px at 100% 60%,\n\t\t\t#311ca1,\n\t\t\ttransparent 267%\n\t\t);\n\t\tbox-shadow: 0px 0px 80px 0px #6f56ac7d;\n\n\t\th2::after {\n\t\t\tbackground-color: var(--white);\n\t\t\tbox-shadow: 0 0 11px 0px var(--white);\n\t\t}\n\t}\n"]);return Ht=function(){return t},t}function Mt(){var t=Object(N.a)(["\n\tlist-style: none;\n\tz-index: 4000;\n\ttransform: scale(1);\n\ttransition: transform 150ms ease-in-out;\n\tdisplay: grid;\n\n\t/* 3d effect */\n\tperspective: 1200px;\n\ttransform-style: preserve-3d;\n\n\n\t&:nth-child(1) {\n\t\ttransform-origin: 60% 140%;\n\t}\n\t&:nth-child(2) {\n\t\ttransform-origin: 40% 140%;\n\t}\n\t&:nth-child(3) {\n\t\ttransform-origin: 60% -40%;\n\t}\n\t&:nth-child(4) {\n\t\ttransform-origin: 40% -40%;\n\t}\n\n\t&:hover {\n\t\ttransform: scale(1.2);\n\t\ttransition: transform 300ms ease-out;\n\t\tz-index: 5000;\n\t}\n"]);return Mt=function(){return t},t}var Wt=b.default.li(Mt()),$t=Object(b.default)(g.b.div)(Ht()),Bt=Object(b.default)(g.b.div)(Ft(),$t),Gt=b.default.div(Ut(),$t),Vt=function(t){var n=t.header,e=t.description,i=t.img,o=Object(a.useRef)(null);return r.a.createElement(Wt,null,r.a.createElement($t,Object.assign({ref:o,onMouseMove:function(t){var n=t.pageX,e=t.pageY,a=o.current,r=a.offsetWidth,i=a.offsetHeight,c=a.getBoundingClientRect(),u=n-c.left-r/2,l=e-c.top-i/2;o.current.style.transform="\n\t\t\trotateX(".concat(-l/15,"deg)\n\t\t\trotateY(").concat(u/30,"deg) \n\t\t\ttranslate3d(").concat(u/30,"px, ").concat(l/15,"px, 0px)\n\t\t")},onMouseOut:function(){o.current.style.transform=""}},At),r.a.createElement(Bt,It,r.a.createElement(Gt,null),i&&r.a.createElement("img",{src:i,alt:"icon"})),r.a.createElement(g.b.h2,It,n),r.a.createElement(g.b.p,It,e)))};function Yt(){var t=Object(N.a)(["\n\t/* position in parent grid layout */\n\tgrid-row: 1 / 9;\n\talign-self: end;\n\n\t/* grid layout */\n\tdisplay: grid;\n\tgrid-gap: 12px;\n\tgrid-template-rows: repeat(2, 135px);\n\tgrid-template-columns: repeat(2, 260px);\n"]);return Yt=function(){return t},t}var qt=Object(b.default)(g.b.ul)(Yt()),Jt={initial:"initial",animate:"animate",exit:"exit",variants:{animate:{transition:{staggerChildren:.1}},exit:{opacity:0}}},Xt=[{header:"Rent a car",description:"Rent yout favorite car"},{header:"Auto parts",description:"Track your pickups & delivery in real time"},{header:"Fuel Plans",description:"See the nearest gas stations on yor way"},{header:"Car navigation",description:"Select only shortest and best route"}],Kt=function(){return r.a.createElement(qt,Object.assign({},Jt,{"aria-label":"our services"}),Xt.map((function(t,n){return r.a.createElement(Vt,Object.assign({},t,{key:n}))})))};function Qt(){var t=Object(N.a)(["\n\tposition: relative;\n\tfont-size: var(--p);\n\tcolor: var(--paragraf);\n\tfont-weight: 500;\n\n\t&::before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: -40%;\n\t\theight: 2px;\n\t\twidth: 20%;\n\t\tbackground-color: #45306e5e;\n\t}\n"]);return Qt=function(){return t},t}function Zt(){var t=Object(N.a)(["\n\tposition: relative;\n\tz-index: 2000;\n\tfont-size: var(--h1);\n\tcolor: var(--white);\n\tfont-weight: 400;\n\tmargin-bottom: 15vh;\n\n\t&::after {\n\t\tcontent: attr(data-bg-text);\n\t\twidth: max-content;\n\t\tposition: absolute;\n\t\tleft: -10%;\n\t\tfont-size: 80px;\n\t\tfont-weight: 900;\n\t\tbackground: radial-gradient(\n\t\t\t414px at 45% 858%,\n\t\t\t#764ae24d 159%,\n\t\t\ttransparent 200%\n\t\t);\n\t\tbackground-clip: text;\n\t\t-webkit-background-clip: text;\n\t\t-webkit-text-fill-color: transparent;\n\t\tz-index: -1;\n\t\topacity: 0;\n\t\tanimation: "," 0.7s 0.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n\t}\n"]);return Zt=function(){return t},t}function tn(){var t=Object(N.a)(["\n\tgrid-row: 1 / 7;\n\talign-self: end;\n\tjustify-self: center;\n\tposition: relative;\n\tpadding-bottom: 4vh;\n\twhite-space: nowrap;\n\tuser-select: none;\n"]);return tn=function(){return t},t}function nn(){var t=Object(N.a)(["\n\tfrom {\n\t\topacity: 0;\n\t\ttop: 110%;\n\t}\n\tto {\n\t\topacity: 1;\n\t\ttop: 30%;\n\t}\n"]);return nn=function(){return t},t}var en=Object(b.keyframes)(nn()),an=Object(b.default)(g.b.header)(tn()),rn=Object(b.default)(g.b.h1).attrs((function(){return{"data-bg-text":"OUR SERVICES","aria-label":"car rental services description"}}))(Zt(),en),on=Object(b.default)(g.b.p)(Qt()),cn={initial:"initial",animate:"animate",exit:"exit",variants:Tt},un={variants:zt},ln=function(){return r.a.createElement(an,cn,r.a.createElement(rn,un,"Our services"),r.a.createElement(on,un,"We are offering a variety of cars, services, and",r.a.createElement("br",null)," partnerships to meet all your travel needs"))};function sn(){var t=Object(N.a)(["\n\theight: 100%;\n\tdisplay: grid;\n\tgrid-column-gap: 2vw;\n\tgrid-template-rows: repeat(12, 1fr);\n\tgrid-template-columns: repeat(2, 1fr);\n"]);return sn=function(){return t},t}var dn=b.default.section.attrs((function(){return{className:"main-content"}}))(sn()),fn=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(U,null),r.a.createElement(dn,null,r.a.createElement(ln,null),r.a.createElement(Kt,null)))},mn=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(k,null),r.a.createElement("section",{className:"vehicles main-content"}))},pn=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(U,{image:!1}),r.a.createElement("section",{className:"our-benefits main-content"}))},vn=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(k,null),r.a.createElement("section",{className:"testimonials main-content"}))},hn=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(U,{image:!1}),r.a.createElement("section",{className:"stations main-content"}))},bn=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(U,{image:!1}),r.a.createElement("section",{className:"contact-us main-content"}))};function gn(){var t=Object(N.a)(["\n\tgrid-area: navbar;\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmargin: 0 2.5vw;\n\talign-self: flex-end;\n\tz-index: 2000;\n"]);return gn=function(){return t},t}var xn=b.default.nav(gn());function En(){var t=Object(N.a)(["\n\tpadding-left: 5px;\n\ttext-decoration: none;\n\n\t","\n"]);return En=function(){return t},t}function wn(){var t=Object(N.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 1.5em;\n\theight: 1.5em;\n\tborder: 1px solid var(--theme);\n\tcolor: var(--theme);\n\tmargin: 0 4px;\n"]);return wn=function(){return t},t}function On(){var t=Object(N.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: var(--h3);\n\tfont-weight: 300;\n\tcolor: var(--white);\n\ttext-transform: uppercase;\n\tletter-spacing: 3px;\n"]);return On=function(){return t},t}var jn=b.default.h3(On()),yn=b.default.span(wn()),kn=Object(b.default)(u.b)(En(),it(jn));function Nn(){var t=Object(N.a)(["\n\ttext-decoration: none;\n\n\t&."," {\n\t\t--text-color: var(--theme);\n\t}\n\n\t","\n"]);return Nn=function(){return t},t}function Cn(){var t=Object(N.a)(["\n\tfont-size: var(--p);\n\tfont-weight: 500;\n\tletter-spacing: 0.5px;\n\tcolor: var(--text-color);\n\ttext-transform: uppercase;\n"]);return Cn=function(){return t},t}function zn(){var t=Object(N.a)(["\n\tpadding: 0 20px;\n\t--text-color: var(--white);\n\t--theme: ",";\n"]);return zn=function(){return t},t}function Tn(){var t=Object(N.a)(["\n\tflex: 1;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: flex-end;\n\tmargin-right: 6vw;\n\tlist-style: none;\n\n\t@media (max-width: 1024px) {\n\t\tdisplay: none;\n\t}\n"]);return Tn=function(){return t},t}var Pn=b.default.ul(Tn()),Rn=b.default.li(zn(),(function(t){return t.theme.color})),_n=b.default.p(Cn()),Ln=Object(b.default)(u.c)(Nn(),(function(t){return t.activeClassName}),it(_n,"menu-text"));function Sn(){var t=Object(N.a)(["\n\t","\n"]);return Sn=function(){return t},t}function Dn(){var t=Object(N.a)(["\n\theight: 3px;\n\twidth: ",";\n\tbackground-color: var(--white);\n\ttransition: width 0.2s;\n\n\t",":hover & {\n\t\twidth: ",";\n\t}\n"]);return Dn=function(){return t},t}function An(){var t=Object(N.a)(["\n\twidth: 25px;\n\theight: 13px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tcursor: pointer;\n"]);return An=function(){return t},t}var In=b.default.div(An()),Un=b.default.div(Dn(),(function(t){return t.top?"70%":"100%"}),In,(function(t){return t.top?"100%":"70%"})),Fn=b.default.div(Sn(),it(In)),Hn=function(t){var n=t.themes;return r.a.createElement(xn,null,r.a.createElement(kn,{to:"/"},r.a.createElement(jn,{tabIndex:"-1"},"ca",r.a.createElement(yn,null,"r"),"ental")),r.a.createElement(Pn,null,[{tab:"services",theme:"blue"},{tab:"vehicles",theme:"red"},{tab:"our-benefits",theme:"blue"},{tab:"testimonials",theme:"red"},{tab:"stations",theme:"blue"}].map((function(t){var e=t.tab,a=t.theme;return r.a.createElement(Rn,{key:e,theme:n[a]},r.a.createElement(Ln,{to:e,activeClassName:"active"},r.a.createElement(_n,{tabIndex:"-1"},e)))}))),r.a.createElement(Fn,{tabIndex:"0"},r.a.createElement(In,{tabIndex:"-1"},r.a.createElement(Un,{top:!0}),r.a.createElement(Un,null))))},Mn=Object(c.b)((function(t){return{themes:t.themes.themes}}))(Hn),Wn=function(t){var n=t.children,e=t.routes,a=Object(q.useTheme)().currentTheme;return Object(q.useWheelScroll)(e),r.a.createElement("div",{className:"app",style:{"--theme":a.color}},r.a.createElement(Mn,null),r.a.createElement("section",{className:"main-page"},n))},$n=Object(c.b)((function(t){return{routes:t.routes}}))(Wn),Bn=e(89);function Gn(){var t=Object(N.a)(["\n\tposition: relative;\n\twidth: 2px;\n\theight: 2px;\n\tborder-radius: 50%;\n\tbackground-color: var(--white);\n"]);return Gn=function(){return t},t}function Vn(){var t=Object(N.a)(["\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n"]);return Vn=function(){return t},t}function Yn(){var t=Object(N.a)(["\n\twidth: 3px;\n\theight: calc(calc(100% / 11 * 5) + 3px);\n\tposition: absolute;\n\t","\n\tborder-radius: 3px;\n\tbackground-color: var(--theme);\n\ttransition: top 0.5s ease-in-out, background-color 0.4s ease-out;\n\n\t/* current page number */\n\t&::after {\n\t\tcontent: attr(value);\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 0.6em;\n\t\ttransform: translateY(-50%);\n\n\t\tfont-size: var(--h3);\n\t\tfont-weight: 300;\n\t\tcolor: var(--theme);\n\t}\n\n\t/* thumb shadow */\n\t&::before {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t\twidth: 8px;\n\t\theight: 60%;\n\t\tborder-radius: 10px;\n\t\tbackground-color: var(--theme);\n\t\tfilter: blur(13px);\n\t}\n"]);return Yn=function(){return t},t}function qn(){var t=Object(N.a)(["\n\tposition: relative;\n\theight: 35%;\n\tmax-height: 250px;\n"]);return qn=function(){return t},t}function Jn(){var t=Object(N.a)(["\n\tgrid-area: left;\n\tdisplay: flex;\n\talign-items: center;\n\tmargin: 0 auto;\n\tz-index: 1000;\n"]);return Jn=function(){return t},t}var Xn=b.default.div(Jn()),Kn=b.default.div(qn()),Qn=b.default.div(Yn(),(function(t){var n=t.value;return"top: calc(".concat(Number(n)-1," * 100% / 11 - 1.5px);")})),Zn=b.default.div(Vn()),te=b.default.div(Gn()),ne=function(t){var n=t.currentPageNumber;return r.a.createElement(Xn,null,r.a.createElement(Kn,null,r.a.createElement(Zn,null,Object(Bn.a)(Array(12)).map((function(t,n){return r.a.createElement(te,{key:n})}))),r.a.createElement(Qn,{value:"0".concat(n)})))},ee=Object(c.b)((function(t){return{currentPageNumber:t.routes.currentPath.id}}))(ne);function ae(){var t=Object(N.a)(["\n\tgrid-area: right;\n\tdisplay: grid;\n\tplace-content: center;\n\tz-index: 1000;\n"]);return ae=function(){return t},t}function re(){var t=Object(N.a)(["\n\ttext-decoration: none;\n\tfont-size: var(--p);\n\n\t","\n"]);return re=function(){return t},t}function ie(){var t=Object(N.a)(["\n\t\t--deg: ",";\n\t\t--order: ",";\n\t\t--flex-direction: ",";\n\t\t--span-margin-top: ",";\n\t"]);return ie=function(){return t},t}function oe(){var t=Object(N.a)(["\n\t","\n\n\tdisplay: flex;\n\tflex-direction: var(--flex-direction);\n\talign-items: center;\n\n\tposition: relative;\n\tfont-size: 1em;\n\tfont-weight: 500;\n\tletter-spacing: 0.5px;\n\ttext-transform: uppercase;\n\tcolor: var(--white);\n\n\t/* rotate text vertical */\n\twriting-mode: vertical-rl;\n\ttransform: rotate(180deg);\n\n\tspan {\n\t\tmargin: 0.4em 0;\n\t\tmargin-top: var(--span-margin-top);\n\t}\n\n\tsvg {\n\t\tposition: relative;\n\t\twidth: 1em;\n\t\theight: 1em;\n\t\tfill: var(--white);\n\t\ttransform: rotate(var(--deg)) translateY(-80%);\n\t\tanimation: "," 1s ease-in-out infinite var(--play-tcking, paused);\n\t}\n\n\t&:hover {\n\t\tsvg {\n\t\t\t--play-tcking: running;\n\t\t}\n\t}\n"]);return oe=function(){return t},t}function ce(){var t=Object(N.a)(["\n\t\tfrom {\n\t\t\ttop: 0;\n\t\t}\n\t\t50% {\n\t\t\ttop: calc(var(--order) * -0.2em);\n\t\t}\n\t\tto {\n\t\t\ttop: 0;\n\t\t}\n"]);return ce=function(){return t},t}var ue=Object(b.keyframes)(ce()),le=b.default.p.attrs({tabIndex:"-1"})(oe(),(function(t){var n=t.iscontactpage;return Object(b.css)(ie(),n?"":"180deg",n?1:-1,n?"row":"row-reverse",n?"":"1.5em")}),ue),se=Object(b.default)(u.c)(re(),it(le)),de=b.default.div(ae()),fe=function(t){var n=t.isContactPage;return r.a.createElement(de,null,r.a.createElement(se,{to:n?"/":"contact-us"},r.a.createElement(le,{iscontactpage:!!n},r.a.createElement("span",null,n?"back home":"contact us"),r.a.createElement(B,{icon:"arrow-long"}))))},me=Object(c.b)((function(t){return{isContactPage:"contact-us"===t.routes.currentPath.path}}))(fe),pe=function(t){var n=t.children;return r.a.createElement(a.Fragment,null,r.a.createElement(ee,null)," ",n," ",r.a.createElement(me,null))},ve=Object(c.b)((function(t){return{routes:t.routes}}))(pe);function he(){var t=Object(N.a)(["\n\tanimation: "," 5s var(--ease) infinite;\n"]);return he=function(){return t},t}function be(){var t=Object(N.a)(["\n\t0% {\n\t\tcolor: var(--blue);\n\t}\n\t50% {\n\t\tcolor: var(--red);\n\t}\n\t100% {\n\t\tcolor: var(--blue);\n\t}\n"]);return be=function(){return t},t}function ge(){var t=Object(N.a)(["\n\tposition: absolute;\n\twidth: 1.5em;\n\theight: 1.5em;\n\tborder: 1px solid var(--blue);\n\tanimation: "," 5s var(--ease) infinite;\n"]);return ge=function(){return t},t}function xe(){var t=Object(N.a)(["\n\t0% {\n\t\ttransform: rotate(0deg);\n\t\tborder-color: var(--blue);\n\t}\n\t50% {\n\t\ttransform: rotate(-92deg);\n\t\tborder-color: var(--red);\n\t}\n\t100% {\n\t\ttransform: rotate(-180deg);\n\t\tborder-color: var(--blue);\n\t}\n"]);return xe=function(){return t},t}function Ee(){var t=Object(N.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 1.5em;\n\theight: 1.5em;\n"]);return Ee=function(){return t},t}function we(){var t=Object(N.a)([""]);return we=function(){return t},t}function Oe(){var t=Object(N.a)([""]);return Oe=function(){return t},t}function je(){var t=Object(N.a)(["\n\tdisplay: grid;\n\talign-items: center;\n\tgrid-column-gap: 0.4em;\n\tgrid-auto-flow: column;\n\n\tfont-size: 2em;\n\tfont-weight: 300;\n\tcolor: var(--white);\n\ttext-transform: uppercase;\n\tletter-spacing: 3px;\n"]);return je=function(){return t},t}function ye(){var t=Object(N.a)(["\n\t--ease: cubic-bezier(0.8, 0, 0.2, 1);\n\theight: 100vh;\n\twidth: 100vw;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\n\tbackground-image: radial-gradient(\n\t\t\t35vh at 100% 100%,\n\t\t\t#9642f215,\n\t\t\ttransparent 300%\n\t\t),\n\t\tradial-gradient(35vh at 0% 0%, #9642f21c, transparent 300%),\n\t\tradial-gradient(40vh at 70% 18%, #0c091052, transparent 150%),\n\t\tradial-gradient(64vh 45vh at -8% 100%, #9642f226, transparent 178%),\n\t\tradial-gradient(64vh 45vh at -8% 100%, #9642f222, transparent 138%),\n\t\tradial-gradient(64vh 45vh at -8% 100%, #9642f215, transparent 71%),\n\t\tradial-gradient(64vh 45vh at -8% 100%, #9642f210, transparent 52%),\n\t\tradial-gradient(45vh at 68% 2%, #9642f220, transparent 141%),\n\t\tradial-gradient(45vh at 68% 2%, #9642f215, transparent 111%),\n\t\tradial-gradient(45vh at 68% 2%, #9642f20f, transparent 87%),\n\t\tradial-gradient(45vh at 68% 2%, #9642f209, transparent 57%),\n\t\tradial-gradient(45vh at 68% 2%, #9642f20f, transparent 111%),\n\t\tradial-gradient(45vh at 95% 42%, #9642f207, transparent 87%),\n\t\tradial-gradient(45vh at 95% 42%, #9642f202, transparent 69%);\n"]);return ye=function(){return t},t}var ke=b.default.div(ye()),Ne=b.default.div(je()),Ce=b.default.div(Oe()),ze=b.default.div(we()),Te=b.default.div(Ee()),Pe=Object(b.keyframes)(xe()),Re=b.default.div(ge(),Pe),_e=Object(b.keyframes)(be()),Le=b.default.div(he(),_e),Se=function(){return r.a.createElement(ke,null,r.a.createElement(Ne,null,r.a.createElement(Ce,null,"ca"),r.a.createElement(Te,null,r.a.createElement(Re,null),r.a.createElement(Le,null,"r")),r.a.createElement(ze,null,"ental")))},De=function(){var t=Object(q.useLooder)(),n=Object(x.g)();return t?r.a.createElement(Se,null):r.a.createElement($n,null,r.a.createElement(ve,null,r.a.createElement(g.a,{exitBeforeEnter:!0},r.a.createElement(x.c,{location:n,key:n.pathname},r.a.createElement(x.a,{path:"/",component:Dt,exact:!0}),r.a.createElement(x.a,{path:"/services",component:fn,exact:!0}),r.a.createElement(x.a,{path:"/vehicles",component:mn,exact:!0}),r.a.createElement(x.a,{path:"/our-benefits",component:pn,exact:!0}),r.a.createElement(x.a,{path:"/testimonials",component:vn,exact:!0}),r.a.createElement(x.a,{path:"/stations",component:hn,exact:!0}),r.a.createElement(x.a,{path:"/contact-us",component:bn,exact:!0})))))},Ae=e(88);function Ie(){var t=Object(N.a)(["\n\t/* "," */\n\t@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');\n\n  :root {\n  \t--h1: 55px;\n  \t--h2: 24px;\n  \t--h3: 20px;\n  \t--p2: 18px;\n  \t--p: 15px;\n\n  \t--white: #b2a3c0;\n  \t--red: #ff0505;\n  \t--blue: #6149e1;\n  \t--purple: #9642f2;\n  \t--card-fon: #1f202d;\n  \t--paragraf: #484156;\n  \t--bg-fon: #110f1f;\n  }\n\n  *,\n\t*::before,\n\t*::after {\n  \tmargin: 0;\n  \tpadding: 0;\n\t\tbox-sizing: border-box;\n\t\tfont-family: 'Roboto', sans-serif;\n  }\n\n  body {\n  \tbackground-color: var(--bg-fon);\n  \tuser-select: none;\n  \toverflow: hidden;\n\t}\n"]);return Ie=function(){return t},t}var Ue=Object(b.createGlobalStyle)(Ie(),Ae.normalize),Fe={},He=function(){return r.a.createElement(b.ThemeProvider,{theme:Fe},r.a.createElement(Ue,null),r.a.createElement(De,null))},Me=Object(l.c)(h);o.a.render(r.a.createElement(c.a,{store:Me},r.a.createElement(u.a,null,r.a.createElement(He,null))),document.getElementById("root"))},26:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return r}));var a="CHANGE_CURRENT_PATH",r="CHANGE_CURRENT_THEME"},29:function(t,n,e){"use strict";var a=e(69);e.o(a,"useLooder")&&e.d(n,"useLooder",(function(){return a.useLooder})),e.o(a,"useOutsideClickClose")&&e.d(n,"useOutsideClickClose",(function(){return a.useOutsideClickClose})),e.o(a,"useTheme")&&e.d(n,"useTheme",(function(){return a.useTheme})),e.o(a,"useWheelScroll")&&e.d(n,"useWheelScroll",(function(){return a.useWheelScroll}));var r=e(70);e.d(n,"useLooder",(function(){return r.a}));var i=e(80);e.d(n,"useTheme",(function(){return i.a}));var o=e(71);e.d(n,"useWheelScroll",(function(){return o.a}));var c=e(72);e.d(n,"useOutsideClickClose",(function(){return c.a}))},69:function(t,n){},70:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var a=e(49),r=e(0),i=function(){var t=Object(r.useState)(!0),n=Object(a.a)(t,2),e=n[0],i=n[1];return window.addEventListener("load",(function(){return setTimeout((function(){i(!1)}),2e3)})),e}},71:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var a=e(0),r=e(24),i=!0,o=function(t){var n=t.currentPath,e=t.mainPaths,o=Object(r.f)();Object(a.useEffect)((function(){return window.addEventListener("wheel",c),function(){return window.removeEventListener("wheel",c)}}));var c=function(t){var e=t.wheelDelta;if(i){i=!1,setTimeout((function(){return i=!0}),1400);var a=n.id;e<0?l(a):u(a)}},u=function(t){if(t!==e[0].id){var n=e[t-2].path;o.push("/".concat(n))}},l=function(t){if(t!==e[e.length-1].id){var n=e[t].path;o.push("/".concat(n))}}}},72:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var a=e(0);function r(t,n){Object(a.useEffect)((function(){function e(e){t.current&&!t.current.contains(e.target)&&n(!1)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t,n])}},80:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var a=e(0),r=e(24),i=e(11),o=e(26),c=function(){var t=Object(r.g)(),n=Object(i.c)(),e=Object(i.d)((function(t){return t})),c=e.routes.mainPaths,u=e.themes,l=u.themes,s=u.currentTheme;return Object(a.useEffect)((function(){var e,a=t.pathname.slice(1),r=c.find((function(t){return t.path===a})),i=r.themeName,u=r.id,s=l[i];n(function(t){return{type:o.b,payload:t}}(s)),n((e=u,{type:o.a,payload:e}))}),[t]),{currentTheme:s}}},85:function(t,n,e){t.exports=e.p+"static/media/services_car.5938fcdc.png"},90:function(t,n,e){t.exports=e(159)},99:function(t,n,e){}},[[90,1,2]]]);
//# sourceMappingURL=main.ddafde81.chunk.js.map