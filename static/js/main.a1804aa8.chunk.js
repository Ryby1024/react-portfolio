(this["webpackJsonpnew-portfolio"]=this["webpackJsonpnew-portfolio"]||[]).push([[0],{21:function(e,a,t){e.exports=t(39)},26:function(e,a,t){},27:function(e,a,t){},29:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(18),s=t.n(r),l=(t(26),t(3)),c=t(4),o=t(6),m=t(5),p=t(9),d=t(10),u=(t(27),t(28),t(29),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"navbar-fixed"},i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"nav-wrapper"},i.a.createElement(p.b,{id:"about-me",exact:!0,activeClassName:"navbar__link--active",className:"navbar__link",to:"/"},"About"),i.a.createElement("ul",{id:"nav-mobile",className:"right"},i.a.createElement("li",null,i.a.createElement(p.b,{exact:!0,activeClassName:"navbar__link--active",className:"navbar__link",to:"/skills"},"Technical Skills")),i.a.createElement("li",null,i.a.createElement(p.b,{exact:!0,activeClassName:"navbar__link--active",className:"navbar__link",to:"/projects"},"Projects")),i.a.createElement("li",null,i.a.createElement(p.b,{exact:!0,activeClassName:"navbar__link--active",className:"navbar__link",to:"/contact"},"Contact Me"))))))}}]),t}(n.Component)),g=(t(35),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"about"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12"},i.a.createElement("div",{className:"box"},i.a.createElement("div",{className:"title"},i.a.createElement("span",{className:"block"}),i.a.createElement("h1",{id:"Roy"},"Roy Davis",i.a.createElement("span",null))),i.a.createElement("div",{className:"role"},i.a.createElement("div",{className:"block"}),i.a.createElement("p",{id:"role"},"Full Stack Web Developer")))))),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s6"},i.a.createElement("div",null,i.a.createElement("img",{className:"responsive-img",id:"roy-picture",src:"images/RoynMy.jpg",alt:""}))),i.a.createElement("div",{className:"col s6"},i.a.createElement("div",{id:"about-text"},i.a.createElement("p",null,"Full Stack Web Developer with extensive retail experience. Graduate of the University of Central Florida Coding Boot Camp with skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, AJax, JSON, Node.js, Express.js, Mysql, Mongo DB and React.js. Degree in Computer IT from  Valencia College. My goal as a developer is to create intuitive user experiences, develop responsive websites, and create visually stunning websites.")," ",i.a.createElement("p",null," My background in retail has given me invaluable experience working in a team environment and putting the needs of the customer first."))))))}}]),t}(i.a.PureComponent)),h=function(e){return i.a.createElement("div",{className:"card horizontal project"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{className:"project-picture responsive-img",src:e.image,alt:""})),i.a.createElement("div",{className:"card-stacked"},i.a.createElement("div",{className:"card-content"},i.a.createElement("p",{className:"title"},e.title),i.a.createElement("p",{className:"description"},e.overview),i.a.createElement("a",{className:"btn",id:"learn-more",href:e.github,rel:"noopener noreferrer",target:"_blank"},"Learn More"),i.a.createElement("a",{className:"btn",id:"try-me",href:e.deployment,rel:"noopener noreferrer",target:"_blank"},"Try Me"))))},v=(t(36),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).state={projects:[],id:0,title:"",overview:"",image:"",github:"",link:""},e.projects=[{id:1,title:"Brew Finder",overview:"Location finder for closest brewerys to current locale. It uses HTML5, Javascript, CSS3, JQuery, Bootstrap, AJAX, and the Here Maps API as well as the Open Brewery DB API. The Guardian API was also used for the carousel.",image:"./images/beer.jpg",github:"https://github.com/Ryby1024/BrewFinder",deployment:"https://mc180g.github.io/BrewFinder/index.html"},{id:2,title:"Cash Money",overview:"Full-stack application where users can create a budget, track spending, and plan for upcoming bills. To start, the user will only be allowed access to the Register or Login pages. This application uses HTML5, CSS3, Javascript, Bootstrap4, React.js, MongoDB, Mongoose, Express.js, Node.js, Axios, React Chartjs2, and FullCalendar.",image:"./images/money.jpg",github:"https://github.com/Ryby1024/budget-app",deployment:"https://stormy-beyond-27196.herokuapp.com/"},{id:3,title:"unWrapped",overview:"A party planning web application that allows users to create and rsvp to parties while also keeping track of guests, gifts and if they sent a thank you note. This application uses HTML5, CSS3, Javascript, Bootstrap4, JQuery, MySql, Sequalize, Express.js, Node.js, Express-handlebars and Randomatic.",image:"./images/gift.jpg",github:"https://github.com/Ryby1024/unWrapped",deployment:"https://unwrappedgifts.herokuapp.com/"},{id:4,title:"Friend Finder",overview:"To use this app, a user must answer 10 survey questions. The answers range from 1 (Strongly Disagree) and go to 5 (Strongly Agree). Based on the responses the user gives, the app will match them with someone that most closely fits with the answers they gave. This application uses HTML5, CSS3, Javascript, JQuery, Bootstrap4, and Express.js.",image:"./images/love.jpg",github:"https://github.com/Ryby1024/Friend-Finder",deployment:"https://arcane-journey-78495.herokuapp.com/"},{id:5,title:"Scraped",overview:"An app that scrapes the technology section of the New York Times. It uses HTML5, Javascript, CSS3, Materialize, JQuery, Mongoose, Mongo DB, Handlebars.js, Express.js and Node.js.",image:"./images/paper.jpg",github:"https://github.com/Ryby1024/scraped",deployment:"https://evening-thicket-08549.herokuapp.com/"},{id:6,title:"Bamazon",overview:"This app allows users to preview items for sale or purchase an item from the list of available items that are stored in a mysql database we created. There is also a manager function that allows you to keep tabs on the 'business'. This application uses Javascript, Node.js, JQuery and MySql.",image:"./images/bamazon.jpg",github:"https://github.com/Ryby1024/node-mysql",deployment:"https://github.com/Ryby1024/node-mysql"}],e.setProjects=function(){var a=e.projects;console.log(a),e.setState({projects:a})},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setProjects()}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("h1",{id:"myProjects"}," Projects")),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12"},this.myProjects,"}")))}},{key:"myProjects",get:function(){var e=this.state.projects;if(console.log(e),Array.isArray(e))return e.map((function(e){return console.log("hello"),i.a.createElement(h,{key:e.id,id:e.id,title:e.title,overview:e.overview,image:e.image,github:e.github,deployment:e.deployment})}))}}]),t}(n.Component)),b=Object(d.e)(v),y=function(e){return i.a.createElement("div",{className:"col s3"},i.a.createElement("div",{className:"card skill-card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{className:"skill-icon responsive-img",src:e.image,alt:""})),i.a.createElement("div",{className:"card-content skillName"},i.a.createElement("p",{className:"skill-title"},e.name))))},E=(t(37),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=a.call.apply(a,[this].concat(i))).state={skills:[],name:"",image:""},e.skills=[{id:1,name:"HTML",image:"./images/html5.png"},{id:2,name:"CSS",image:"./images/css3.png"},{id:3,name:"Bootstrap",image:"./images/bootstrap4.png"},{id:4,name:"JavaScript",image:"./images/js.png"},{id:5,name:"jQuery",image:"./images/jquery.png"},{id:6,name:"Node.js",image:"./images/node.png"},{id:7,name:"Express",image:"./images/express.jpg"},{id:8,name:"Handlebars",image:"./images/handlebar.png"},{id:9,name:"MySQL",image:"./images/sql.png"},{id:10,name:"MongoDB",image:"./images/mongodb.jpg"},{id:11,name:"React.js",image:"./images/react.jpg"},{id:12,name:"PHP",image:"./images/php.png"}],e.setSkills=function(){var a=e.skills;console.log(a),e.setState({skills:a})},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setSkills()}},{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("h1",{id:"skills"},"Techinical Skills")),i.a.createElement("div",{className:"row"},this.mySkills))}},{key:"mySkills",get:function(){var e=this.state.skills;if(console.log(e),Array.isArray(e))return e.map((function(e){return console.log("hello"),i.a.createElement(y,{key:e.id,id:e.id,name:e.name,image:e.image})}))}}]),t}(n.Component)),f=(t(38),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"container",id:"header"},i.a.createElement("div",null,i.a.createElement("img",{id:"header-pic",src:"/images/contact.jpg",alt:""})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12"},i.a.createElement("h1",null,"Contact Me"))),i.a.createElement("div",{className:"row",id:"email-row"},i.a.createElement("div",{className:"col s3"},i.a.createElement("i",{className:"small material-icons"},"email")),i.a.createElement("div",{className:"col s3"},i.a.createElement("p",{id:"email"},i.a.createElement("a",{href:"mailto: myroy1024@gmail.com",style:{color:"#66F2F7"},target:"blank"},"myroy1024@gmail.com")))),i.a.createElement("div",{className:"row",id:"phone-row"},i.a.createElement("div",{className:"col s3"},i.a.createElement("i",{className:"small material-icons"},"phone")),i.a.createElement("div",{className:"col s3"},i.a.createElement("p",{id:"phone-number",style:{color:"#66F2F7"}},"(407)-461-7433"))),i.a.createElement("div",{className:"row",id:"github-row"},i.a.createElement("div",{className:"col s3"},i.a.createElement("img",{id:"github-icon",src:"/images/gitpic3.jpg",alt:""})),i.a.createElement("div",{className:"col s3"},i.a.createElement("p",{id:"github-info"},i.a.createElement("a",{href:"https://github.com/Ryby1024",style:{color:"#66F2F7"},target:"blank"},"https://github.com/Ryby1024 ")))),i.a.createElement("div",{className:"row",id:"linkedin-row"},i.a.createElement("div",{className:"col s3"},i.a.createElement("img",{id:"linkedin-icon",src:"/images/linkedin2.png",alt:""})),i.a.createElement("div",{className:"col s3"},i.a.createElement("p",{id:"linkedin-info"},i.a.createElement("a",{href:"https://www.linkedin.com/in/roy-davis-a0457265/",style:{color:"#66F2F7"},target:"blank"},"https://bit.ly/35rgOaJ")))))}}]),t}(n.Component)),j=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(u,null),i.a.createElement(d.a,{exact:!0,path:"/"},i.a.createElement(g,null)),i.a.createElement(d.a,{exact:!0,path:"/projects"},i.a.createElement(b,null)),i.a.createElement(d.a,{exact:!0,path:"/skills"},i.a.createElement(E,null)),i.a.createElement(d.a,{exact:!0,path:"/contact"},i.a.createElement(f,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.a1804aa8.chunk.js.map