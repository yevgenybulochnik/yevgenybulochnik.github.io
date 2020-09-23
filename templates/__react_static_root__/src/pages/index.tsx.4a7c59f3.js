(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{127:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(37),c=(t(274),t(275),function(e){var a=e.height,t=e.src,n=e.name,l=e.credentials;return r.a.createElement("div",{className:"head-shot"},r.a.createElement("img",{height:a,src:t,alt:"",style:{borderRadius:"50%"}}),r.a.createElement("div",{className:"creds"},r.a.createElement("h4",{className:"name"},n),r.a.createElement("h5",{className:"credentials"},l)))}),s=t(281);a.default=function(){var e=Object(l.useRouteData)(),a=e.articles,t=e.projects;return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"intro"},r.a.createElement("h2",null,"Hi! Welcome to my site. I am ",r.a.createElement("em",null,"Passionate")," about healthcare and technology. A ",r.a.createElement("em",null,"Pharmacist")," by trade with the knowledge of a ",r.a.createElement("br",null)," ",r.a.createElement("em",null,"FullStack Developer"),".")),r.a.createElement("div",{className:"sidebar"},r.a.createElement(c,{name:"Yevgeny (Eugene) Bulochnik",credentials:"PharmD 340B ACE CACP",src:"https://assets.yevgenybulochnik.com/headshot.jpeg",height:"300px"})),r.a.createElement("div",{className:"intro-paragraph"},r.a.createElement("p",null,"It is exciting and empowering to be a clinician with patient care experience, while also having programming knowledge."),r.a.createElement("p",null,"Can you think of the last time you spoke to a local pharmacist or primary care doctor about ",r.a.createElement("a",{href:"https://kubernetes.io/"},"Kubernetes")," or the newest javascript framework to pop up? Whether its ",r.a.createElement("a",{href:"https://reactjs.org/"},"React")," for frontend development, ",r.a.createElement("a",{href:"https://www.ansible.com/"},"Ansible")," for devops or data manipulation with python ",r.a.createElement("a",{href:"https://pandas.pydata.org/"},"Pandas"),", I am engaged!"),r.a.createElement("p",null,"I believe having clinicians who understand the development cycle, who understand how developers approach problems and can actively contribute to a codebase are extremely valuable.")),r.a.createElement("div",{className:"home-content"},r.a.createElement("h2",null,"Recent Work"),r.a.createElement(s.a,{title:"Projects",works:t,rootPath:"/projects"}),r.a.createElement(s.a,{title:"Articles",works:a,rootPath:"/articles"})))}},281:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(21),c=t(38);t(272);a.a=function(e){var a=e.title,t=e.works,n=e.rootPath;return r.a.createElement("div",{className:"workslist"},r.a.createElement("h3",null,a),!t.length&&r.a.createElement("div",{className:"placeholder"},r.a.createElement("h5",null,"Comming Soon!")),t.map((function(e,a){return r.a.createElement(l.Card,{className:"work-card",key:a,interactive:!0,onClick:function(){return Object(c.navigate)("".concat(n,"/").concat(e.slug))}},r.a.createElement("div",{className:"card-content"},e.img&&r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:e.img,alt:""})),r.a.createElement("div",{className:"card-text"},e.title&&r.a.createElement("h4",null,e.title),r.a.createElement("p",null,e.desc),e.tags&&e.tags.map((function(e){return r.a.createElement(l.Tag,{minimal:!0,intent:"primary",className:"tag"},e)})))))})))}}}]);