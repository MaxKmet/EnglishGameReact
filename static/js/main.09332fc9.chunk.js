(this["webpackJsonpsimple-app"]=this["webpackJsonpsimple-app"]||[]).push([[0],{68:function(e,a,t){e.exports=t(83)},73:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){e.exports=t.p+"static/media/definitions.07d73c46.jpg"},79:function(e,a,t){e.exports=t.p+"static/media/talkingwoman.dfc948e4.jpg"},80:function(e,a,t){e.exports=t.p+"static/media/puzzle.4fbe3969.jpg"},83:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(10),c=t.n(s),i=(t(73),t(138)),o=t(84),l=function(e){var a=e.classes,t=e.text;return r.a.createElement("footer",{className:a.footer},r.a.createElement(o.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},t))},m=t(125),d=t(126),u=t(127),p=function(e){e.classes;var a=e.text;return r.a.createElement(m.a,{position:"relative"},r.a.createElement(d.a,null,r.a.createElement(u.a,{href:"/",underline:"none",variant:"h5",color:"inherit",noWrap:!0},a)))},E=(t(77),t(128)),h=t(57),g=t.n(h),f=t(61),v=Object(f.a)({typography:{fontFamily:"cursive"},palette:{primary:g.a,secondary:{main:"#f44336"}}}),y=[{key:1,title:"Definition game",image:t(78),description:"Can you guess a word by its definition ?",link:"/definitionsGame"},{key:2,title:"Voice game",image:t(79),description:"Can you guess a word by the way it sounds ?",link:"/audioGame"},{key:3,title:"Synonyms game",image:t(80),description:"Can you find a synonym to a given word ?",link:"/synonymsGame"}],b=Object(E.a)((function(e){return{icon:{marginRight:e.spacing(2)},upperContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)},root:{margin:"auto",width:"100%",maxWidth:600,backgroundColor:e.palette.background.paper},mainChip:{margin:e.spacing(.2),size:"large"},chip:{margin:e.spacing(.5)},section1:{margin:e.spacing(3,2)},section2:{margin:e.spacing(2)},section3:{margin:e.spacing(3,1,1)}}})),x=t(137),k=t(59),w=t(20),N=t(25),W=t(26),j=t(28),C=t(27),O=t(140),S=t(131),B=t(129),G=t(130),M=function(e){Object(j.a)(t,e);var a=Object(C.a)(t);function t(e){var n,r=e.classes;return Object(N.a)(this,t),(n=a.call(this)).state={mainWord:"mainWord",otherWords:[["Word1",!1],["Word2",!0],["Word3",!1],["Word4",!1]],classes:r,points:10},n}return Object(W.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.state.classes.root},r.a.createElement("div",{className:this.state.classes.section1},r.a.createElement(B.a,{container:!0,alignItems:"center"},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(o.a,{gutterBottom:!0,variant:"h4"},"Find synonym for:")),r.a.createElement(B.a,{item:!0})),r.a.createElement(o.a,{gutterBottom:!0,variant:"h6"},this.state.mainWord)),r.a.createElement(G.a,{variant:"middle"}),r.a.createElement("div",{className:this.state.classes.section2},r.a.createElement("div",null,this.state.otherWords.map((function(a){return r.a.createElement(O.a,{key:a[0],className:e.state.classes.chip,label:a[0]})})))),r.a.createElement("div",{className:this.state.classes.section3},r.a.createElement(S.a,{color:"primary"},"Score: ",this.state.points)))}}]),t}(r.a.Component),z=function(e){Object(j.a)(t,e);var a=Object(C.a)(t);function t(e){var n,r=e.classes;return Object(N.a)(this,t),(n=a.call(this)).state={definition:"A long definition of a difficult term in English",words:[["Word1",!1],["Word2",!0],["Word3",!1],["Word4",!1]],classes:r,points:10},n}return Object(W.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.state.classes.root},r.a.createElement("div",{className:this.state.classes.section1},r.a.createElement(B.a,{container:!0,alignItems:"center"},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(o.a,{gutterBottom:!0,variant:"h4"},"What is word for this definition ?")),r.a.createElement(B.a,{item:!0})),r.a.createElement(o.a,{gutterBottom:!0,variant:"body1"},this.state.definition)),r.a.createElement(G.a,{variant:"middle"}),r.a.createElement("div",{className:this.state.classes.section2},r.a.createElement("div",null,this.state.words.map((function(a){return r.a.createElement(O.a,{key:a[0],className:e.state.classes.chip,label:a[0]})})))),r.a.createElement("div",{className:this.state.classes.section3},r.a.createElement(S.a,{color:"primary"},"Score: ",this.state.points)))}}]),t}(r.a.Component),I=t(139),T=t(58),A=t.n(T),F=function(e){Object(j.a)(t,e);var a=Object(C.a)(t);function t(e){var n,r=e.classes;return Object(N.a)(this,t),(n=a.call(this)).state={audio:"Sample Audio",correctWord:"Main Word",classes:r,points:10},n}return Object(W.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.state.classes.root},r.a.createElement("div",{className:this.state.classes.section1},r.a.createElement(B.a,{container:!0,alignItems:"center"},r.a.createElement(B.a,{item:!0,xs:!0},r.a.createElement(o.a,{gutterBottom:!0,variant:"h4"},"Type in the word you hear")),r.a.createElement(B.a,{item:!0})),r.a.createElement(A.a,{src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",autoPlay:!0,controls:!0})),r.a.createElement(G.a,{variant:"middle"}),r.a.createElement("div",{className:this.state.classes.section2},r.a.createElement("div",null,r.a.createElement("form",{className:this.state.classes.root,noValidate:!0,autoComplete:"off"},r.a.createElement(I.a,{id:"outlined-basic",label:"Type here",variant:"outlined"})),r.a.createElement(O.a,{className:this.state.classes.chip,label:"Submit"}))),r.a.createElement("div",{className:this.state.classes.section3},r.a.createElement(S.a,{color:"primary"},"Score: ",this.state.points)))}}]),t}(r.a.Component),P=t(132);function D(e){var a=e.classes;return r.a.createElement("div",{className:a.upperContent},r.a.createElement(P.a,{maxWidth:"sm"},r.a.createElement(o.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"ENGAMES"),r.a.createElement(o.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Collection of games for English lovers")))}var J=t(133),V=t(136),H=t(135),L=t(134),R=function(e){var a=e.classes,t=e.gameCard;return r.a.createElement(B.a,{item:!0,xs:12,sm:6,md:4},r.a.createElement(J.a,{className:a.card},r.a.createElement(L.a,{className:a.cardMedia,image:t.image,title:t.title}),r.a.createElement(H.a,{className:a.cardContent},r.a.createElement(o.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(o.a,null,t.description)),r.a.createElement(V.a,null,r.a.createElement(S.a,{href:t.link,size:"large",color:"primary"},"Play"))))};function $(e){var a=e.classes,t=e.cards;return r.a.createElement(P.a,{className:a.cardGrid,maxWidth:"md"},r.a.createElement(B.a,{container:!0,spacing:4},t.map((function(e){return r.a.createElement(R,{key:e.key,classes:a,gameCard:e})}))))}var q=function(e){var a=e.classes,t=e.cards;return r.a.createElement("div",null,r.a.createElement(D,{classes:a}),r.a.createElement($,{classes:a,cards:t}))};var K=function(){var e=b();return r.a.createElement(x.a,{theme:v},r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null),r.a.createElement(p,{classes:e,text:"Engames"}),r.a.createElement("main",null,r.a.createElement(k.a,null,r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:function(a){return r.a.createElement(q,Object.assign({},a,{classes:e,cards:y}))}}),r.a.createElement(w.a,{exact:!0,path:"/synonymsGame",render:function(){return r.a.createElement(M,{classes:e})}}),r.a.createElement(w.a,{exact:!0,path:"/definitionsGame",render:function(){return r.a.createElement(z,{classes:e})}}),r.a.createElement(w.a,{exact:!0,path:"/audioGame",render:function(){return r.a.createElement(F,{classes:e})}})))),r.a.createElement(l,{classes:e,text:"Learn with pleasure!"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.09332fc9.chunk.js.map