(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var l=t(0),d=t.n(l),m=t(2),o=t.n(m),i=(t(13),t(3)),c=t(4),r=t(6),a=t(5),u=t(7),g=(t(14),[1,2,3,4,5,6,7,8,9]),y=["123","456","789","147","258","369","159","357"],s=[],E=[],I=0,B=function(e){function n(){var e,t;Object(i.a)(this,n);for(var l=arguments.length,d=new Array(l),m=0;m<l;m++)d[m]=arguments[m];return(t=Object(r.a)(this,(e=Object(a.a)(n)).call.apply(e,[this].concat(d)))).easy=function(e){if(t.setState({reset:!0}),I++,document.getElementById(e).disabled=!0,s.length<9){s.push(e),document.getElementById(e).innerHTML="X";for(var n=g.filter((function(e){return!s.includes(e)})),l=n[parseInt(Math.round(Math.random()*(n.length-1)))],d=0;d<y.length;d++){var m=y[d],o=document.getElementById(m[0]).innerHTML,i=document.getElementById(m[1]).innerHTML,c=document.getElementById(m[2]).innerHTML;if("O"===o&&o===i&&0===c.length){l=m[2];break}if("O"===o&&o===c&&0===i.length){l=m[1];break}if("O"===i&&i===c&&0===o.length){l=m[0];break}if("O"===i&&i===o&&0===c.length){l=m[2];break}if("O"===c&&c===o&&0===i.length){l=m[1];break}if("O"===c&&c===i&&0===o.length){l=m[0];break}}l&&(s.push(l),document.getElementById(l).disabled=!0,document.getElementById(l).innerHTML="O")}s.length>8&&(document.getElementById("none").style.display="block",document.getElementById("noneText").style.display="block",document.getElementById("noneText").innerHTML="DRAW"),y.map((function(e){return document.getElementById(e[0]).innerHTML.length>0&&document.getElementById(e[0]).innerHTML===document.getElementById(e[1]).innerHTML&&document.getElementById(e[0]).innerHTML===document.getElementById(e[2]).innerHTML&&(document.getElementById("none").style.display="block",document.getElementById("noneText").style.display="block",document.getElementById("noneText").innerHTML="O"===document.getElementById(e[0]).innerHTML&&"LOSER"),null})),y.map((function(e){return document.getElementById(e[0]).innerHTML.length>0&&document.getElementById(e[0]).innerHTML===document.getElementById(e[1]).innerHTML&&document.getElementById(e[0]).innerHTML===document.getElementById(e[2]).innerHTML&&(document.getElementById("none").style.display="block",document.getElementById("noneText").style.display="block",document.getElementById("noneText").innerHTML="X"===document.getElementById(e[0]).innerHTML?"WINNER":"LOSER"),null}))},t.hard=function(e){if(document.getElementById(e).disabled=!0,s.length<9){s.push(e),E.push({X:e}),document.getElementById(e).innerHTML="X";var n=g.filter((function(e){return!s.includes(e)})),t=n.includes(5)?5:n[parseInt(Math.round(Math.random()*(n.length-1)))],l=0;E.map((function(e){if(e.X&&l++,l>1)for(var n=0;n<y.length;n++){var d=y[n];if(0!==document.getElementById(d[0]).innerHTML.length&&document.getElementById(d[0]).innerHTML===document.getElementById(d[1]).innerHTML&&0===document.getElementById(d[2]).innerHTML.length){t=d[2];break}if(0!==document.getElementById(d[0]).innerHTML.length&&document.getElementById(d[0]).innerHTML===document.getElementById(d[2]).innerHTML&&0===document.getElementById(d[1]).innerHTML.length){t=d[1];break}if(0!==document.getElementById(d[1]).innerHTML.length&&document.getElementById(d[1]).innerHTML===document.getElementById(d[2]).innerHTML&&0===document.getElementById(d[0]).innerHTML.length){t=d[0];break}if(0!==document.getElementById(d[1]).innerHTML.length&&document.getElementById(d[1]).innerHTML===document.getElementById(d[0]).innerHTML&&0===document.getElementById(d[2]).innerHTML.length){t=d[2];break}if(0!==document.getElementById(d[2]).innerHTML.length&&document.getElementById(d[2]).innerHTML===document.getElementById(d[0]).innerHTML&&0===document.getElementById(d[1]).innerHTML.length){t=d[1];break}if(0!==document.getElementById(d[2]).innerHTML.length&&document.getElementById(d[2]).innerHTML===document.getElementById(d[1]).innerHTML&&0===document.getElementById(d[0]).innerHTML.length){t=d[0];break}}return null})),t&&(s.push(t),document.getElementById(t).disabled=!0,document.getElementById(t).innerHTML="O")}s.length>8&&(document.getElementById("none").style.display="block",document.getElementById("noneText").style.display="block",document.getElementById("noneText").innerHTML="DRAW"),y.map((function(e){return document.getElementById(e[0]).innerHTML.length>0&&document.getElementById(e[0]).innerHTML===document.getElementById(e[1]).innerHTML&&document.getElementById(e[0]).innerHTML===document.getElementById(e[2]).innerHTML&&(document.getElementById("none").style.display="block",document.getElementById("noneText").style.display="block",document.getElementById("noneText").innerHTML="O"===document.getElementById(e[0]).innerHTML&&"LOSER"),null})),y.map((function(e){return document.getElementById(e[0]).innerHTML.length>0&&document.getElementById(e[0]).innerHTML===document.getElementById(e[1]).innerHTML&&document.getElementById(e[0]).innerHTML===document.getElementById(e[2]).innerHTML&&(document.getElementById("none").style.display="block",document.getElementById("noneText").style.display="block",document.getElementById("noneText").innerHTML="X"===document.getElementById(e[0]).innerHTML?"WINNER":"LOSER"),null}))},t.impossible=function(e){if(I++,document.getElementById(e).disabled=!0,s.length<9){s.push(e),document.getElementById(e).innerHTML="X";var n=g.filter((function(e){return!s.includes(e)})),t=n[parseInt(Math.round(Math.random()*(n.length-1)))],l=t;if(1===I)t=n.includes(5)?5:1;else if(2===I)for(var d=["123","456","789","147","258","369","159","357","124","236","478","689","238","467","149","347","359"],m=0;m<d.length;m++){var o=d[m],i=document.getElementById(o[0]).innerHTML,c=document.getElementById(o[1]).innerHTML,r=document.getElementById(o[2]).innerHTML;if("X"===i&&i===c&&0===r.length){t=o[2];break}if("X"===i&&i===r&&0===c.length){t=o[1];break}if("X"===c&&c===r&&0===i.length){t=o[0];break}if("X"===c&&c===i&&0===r.length){t=o[2];break}if("X"===r&&r===i&&0===c.length){t=o[1];break}if("X"===r&&r===c&&0===i.length){t=o[0];break}}else if(I>2){for(var a=0;a<y.length;a++){var u=y[a],E=document.getElementById(u[0]).innerHTML,B=document.getElementById(u[1]).innerHTML,T=document.getElementById(u[2]).innerHTML;if("O"===E&&E===B&&0===T.length){t=u[2];break}if("O"===E&&E===T&&0===B.length){t=u[1];break}if("O"===B&&B===T&&0===E.length){t=u[0];break}if("O"===B&&B===E&&0===T.length){t=u[2];break}if("O"===T&&T===E&&0===B.length){t=u[1];break}if("O"===T&&T===B&&0===E.length){t=u[0];break}}if(l===t)for(var h=0;h<y.length;h++){var L=y[h],M=document.getElementById(L[0]).innerHTML,H=document.getElementById(L[1]).innerHTML,f=document.getElementById(L[2]).innerHTML;if("X"===M&&M===H&&0===f.length){t=L[2];break}if("X"===M&&M===f&&0===H.length){t=L[1];break}if("X"===H&&H===f&&0===M.length){t=L[0];break}if("X"===H&&H===M&&0===f.length){t=L[2];break}if("X"===f&&f===M&&0===H.length){t=L[1];break}if("X"===f&&f===H&&0===M.length){t=L[0];break}}}t&&(s.push(t),document.getElementById(t).disabled=!0,document.getElementById(t).innerHTML="O")}s.length>8&&(document.getElementById("none").style.display="block",document.getElementById("noneText").style.display="block",document.getElementById("noneText").innerHTML="DRAW"),y.map((function(e){return document.getElementById(e[0]).innerHTML.length>0&&document.getElementById(e[0]).innerHTML===document.getElementById(e[1]).innerHTML&&document.getElementById(e[0]).innerHTML===document.getElementById(e[2]).innerHTML&&(document.getElementById("none").style.display="block",document.getElementById("noneText").style.display="block",document.getElementById("noneText").innerHTML="O"===document.getElementById(e[0]).innerHTML&&"LOSER"),null})),y.map((function(e){return document.getElementById(e[0]).innerHTML.length>0&&document.getElementById(e[0]).innerHTML===document.getElementById(e[1]).innerHTML&&document.getElementById(e[0]).innerHTML===document.getElementById(e[2]).innerHTML&&(document.getElementById("none").style.display="block",document.getElementById("noneText").style.display="block",document.getElementById("noneText").innerHTML="X"===document.getElementById(e[0]).innerHTML?"WINNER":"LOSER",console.log("Whaaaaaaaaaaaaat",document.getElementById(e[0]).innerHTML,e)),null}))},t.two=function(e){t.setState({reset:!0}),I++,document.getElementById(e).disabled=!0,s.length<9&&(s.push(e),s.length%2===0?document.getElementById(e).innerHTML="O":document.getElementById(e).innerHTML="X"),s.length>8&&(document.getElementById("none").style.display="block",document.getElementById("noneText").style.display="block",document.getElementById("noneText").innerHTML="DRAW"),y.map((function(e){return document.getElementById(e[0]).innerHTML.length>0&&document.getElementById(e[0]).innerHTML===document.getElementById(e[1]).innerHTML&&document.getElementById(e[0]).innerHTML===document.getElementById(e[2]).innerHTML&&(document.getElementById("none").style.display="block",document.getElementById("noneText").style.display="block",document.getElementById("noneText").innerHTML="X"===document.getElementById(e[0]).innerHTML?"X WON":"O WON"),null}))},t.handleSelect=function(e){t.setState({selected:e.target.value})},t.state={selected:"easy",reset:!1},t.tictactoe=function(e){"easy"===t.state.selected?t.easy(e):"hard"===t.state.selected?t.hard(e):"impossible"===t.state.selected?t.impossible(e):t.two(e)},t.reset=function(){s=[],E=[],I=0,document.getElementById("none").style.display="none",document.getElementById("noneText").style.display="none",g.map((function(e){document.getElementById(e).innerHTML="",document.getElementById(e).disabled=!1}))},t}return Object(u.a)(n,e),Object(c.a)(n,[{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:this.state.selected},d.a.createElement("span",{className:"header"},"Tic Tac Toe"),d.a.createElement("div",{className:"outer"},d.a.createElement("div",{className:"grid-box"},g.map((function(n){return d.a.createElement("button",{onClick:function(){return e.tictactoe(n)},id:n,key:n})})))),d.a.createElement("div",{className:"my-flex"},d.a.createElement("select",{value:this.state.selected,className:"selective",onChange:this.handleSelect},d.a.createElement("option",{value:"easy"},"Easy"),d.a.createElement("option",{value:"hard"},"Hard"),d.a.createElement("option",{value:"impossible"},"Impossible"),d.a.createElement("option",{value:"two"},"Two Players")),d.a.createElement("button",{className:"refresh",onClick:this.reset},"RESET")),d.a.createElement("span",{id:"none",style:{display:"none"},onClick:this.reset}),d.a.createElement("span",{id:"noneText",style:{display:"none"},onClick:this.reset}),d.a.createElement("i",{className:"watermark"},"Raghuveer Bharadwaj"))}}]),n}(l.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(d.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,n,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.aa89bad1.chunk.js.map