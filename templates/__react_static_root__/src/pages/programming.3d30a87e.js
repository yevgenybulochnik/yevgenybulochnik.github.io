(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),l=a(278);t.default=function(){var e=Object(c.useRouteData)(),t=e.articles,a=e.projects;return r.a.createElement("div",null,r.a.createElement("h2",{style:{marginLeft:"1em"}},"Projects"),r.a.createElement(l.a,{title:"",works:a,rootPath:"/programming/projects"}),r.a.createElement("h2",{style:{marginLeft:"1em"}},"Articles"),r.a.createElement(l.a,{title:"",works:t,rootPath:"/programming/articles"}))}},278:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(20),l=a(41);a(270);t.a=function(e){var t=e.title,a=e.works,n=e.rootPath;return r.a.createElement("div",{className:"workslist"},r.a.createElement("h3",null,t),!a.length&&r.a.createElement("div",{className:"placeholder"},r.a.createElement("h5",null,"Comming Soon!")),a.map((function(e,t){return r.a.createElement(c.Card,{className:"work-card",key:t,interactive:!0,onClick:function(){return Object(l.navigate)("".concat(n,"/").concat(e.slug))}},r.a.createElement("div",{className:"card-content"},e.img&&r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:e.img,alt:""})),r.a.createElement("div",{className:"card-text"},e.title&&r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.desc),e.tags&&e.tags.map((function(e,t){return r.a.createElement(c.Tag,{key:t,minimal:!0,intent:"primary",className:"tag"},e)})))))})))}}}]);