(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{127:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(37),c=(t(272),t(273),function(e){var a=e.height,t=e.src,n=e.name,r=e.credentials;return l.a.createElement("div",{className:"head-shot"},l.a.createElement("img",{height:a,src:t,alt:"",style:{borderRadius:"50%"}}),l.a.createElement("div",{className:"creds"},l.a.createElement("h4",{className:"name"},n),l.a.createElement("h5",{className:"credentials"},r)))}),s=t(23),m=(t(274),function(e){var a=e.title,t=e.works;return l.a.createElement("div",{className:"workslist"},l.a.createElement("h3",null,a),!t.length&&l.a.createElement("div",{className:"placeholder"},l.a.createElement("h5",null,"Comming Soon!")),t.map((function(e,a){return l.a.createElement(s.Card,{className:"work-card",key:a,interactive:!0},l.a.createElement("div",{className:"card-content"},e.img&&l.a.createElement("div",{className:"card-image"},l.a.createElement("img",{src:e.img,alt:""})),l.a.createElement("div",{className:"card-text"},e.title&&l.a.createElement("h4",null,e.title),l.a.createElement("p",null,e.desc),e.tags&&e.tags.map((function(e){return l.a.createElement(s.Tag,{minimal:!0,intent:"primary",className:"tag"},e)})))))})))});a.default=function(){var e=Object(r.useRouteData)(),a=e.articles,t=e.projects;return console.log(a),console.log(t),l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"intro"},l.a.createElement("h2",null,"Hi! Welcome to my site. I am ",l.a.createElement("em",null,"Passionate")," about healthcare and technology. A ",l.a.createElement("em",null,"Pharmacist")," by trade with the knowledge of a ",l.a.createElement("br",null)," ",l.a.createElement("em",null,"FullStack Developer"),".")),l.a.createElement("div",{className:"sidebar"},l.a.createElement(c,{name:"Yevgeny (Eugene) Bulochnik",credentials:"PharmD 340B ACE CACP",src:"https://avatars0.githubusercontent.com/u/12432798?s=460&u=38bd314c0d984f572f817ed291d57a81eea2e3d3&v=4",height:"300px"})),l.a.createElement("div",{className:"intro-paragraph"},l.a.createElement("p",null,"It is exciting and empowering to be a clinician with patient care experience, while also having programming knowledge."),l.a.createElement("p",null,"Can you think of the last time you spoke to a local pharmacist or primary care doctor about ",l.a.createElement("a",{href:"https://kubernetes.io/"},"Kubernetes")," or the newest javascript framework to pop up? Whether its ",l.a.createElement("a",{href:"https://reactjs.org/"},"React")," for fontend development, ",l.a.createElement("a",{href:"https://www.ansible.com/"},"Ansible")," for devops or data manipluation with python ",l.a.createElement("a",{href:"https://pandas.pydata.org/"},"Pandas"),", I am engaged!"),l.a.createElement("p",null,"I believe having clinicans who understand the development cycle, who understand how developers approach problems and can actively contribute to a codebase are extremely valuable.")),l.a.createElement("div",{className:"home-content"},l.a.createElement("h2",null,"Recent Work"),l.a.createElement(m,{title:"Projects",works:t}),l.a.createElement(m,{title:"Articles",works:a})))}}}]);