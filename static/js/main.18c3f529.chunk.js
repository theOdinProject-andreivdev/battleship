(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{132:function(t,e,a){},133:function(t,e,a){},429:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a(10),i=a.n(s),o=a(16),r=a.n(o),c=(a(132),a(51)),y=a(52),l=a(31),d=a(54),u=a(53),h=(a(133),{HEAD:"H",BODY:"B",NOT_DEFINED:"_",HIT:"X",AIR:" "}),p=a(17),x=a.n(p),g=function(){for(var t=[],e=[],a=9;a>=0;a--){for(var n=[],s=0;s<10;s++)n.push({x:s,y:a,type:h.NOT_DEFINED});t.push(n)}var i,o=function(){r().forEach((function(t){t.type!==h.HIT&&(t.type=h.NOT_DEFINED)})),e.forEach((function(t){r().forEach((function(e){t.getBlocks().forEach((function(t){e.x===t.x&&e.y===t.y&&(t.type!==h.HEAD&&t.type!==h.BODY&&t.type!==h.HIT||(e.type=t.type))}))}))}))},r=function(){var e=[];return t.forEach((function(t){t.forEach((function(t){e.push(t)}))})),[].concat(e)};return{boardSize:10,getBlocks:r,addPlane:function(t){var a=!0,n=!1;t.getBlocks().forEach((function(t){(t.x<0||t.x>9||t.y<0||t.y>9)&&(t.type!==h.HEAD&&t.type!==h.BODY||(n=!0,a=!1))}));var s=!1;return r().forEach((function(e){t.getBlocks().forEach((function(t){e.x===t.x&&e.y===t.y&&(e.type!==h.HEAD&&e.type!==h.BODY||t.type!==h.HEAD&&t.type!==h.BODY||(s=!0,a=!1))}))})),!1===n&&!1===s&&(e.push(t),o()),a},getPlanes:function(){return e},rotate:function(a){a.rotate(),e.forEach((function(t){t.getBlocks().forEach((function(n){e.forEach((function(e){t!=e&&e.getBlocks().forEach((function(t){n.x==t.x&&n.y==t.y&&(n.type==h.BODY&&t.type==h.BODY||n.type==h.HEAD&&t.type==h.HEAD||n.type==h.HEAD&&t.type==h.BODY||n.type==h.BODY&&t.type==h.HEAD)&&(a.rotate(),a.rotate(),a.rotate())}))}))}))})),a.getBlocks().forEach((function(e){!(e.x<0||e.x>t.length-1||e.y<0||e.y>t.length-1)||e.type!==h.BODY&&e.type!==h.HEAD||(a.rotate(),a.rotate(),a.rotate())})),o()},hit:function(t){var a=t.x,n=t.y;e.forEach((function(t){t.hit({x:a,y:n})})),r().forEach((function(t){t.x===parseInt(a)&&t.y===parseInt(n)&&(t.type=h.HIT)})),o()},moveSelectedPlane:function(a,n){var s=a.x,c=a.y,y=n.x,l=n.y,d=y-s,u=l-c,p=!0;void 0!==i&&(i.getBlocks().forEach((function(e){!(e.x+d<0||e.x+d>t.length-1||e.y+u<0||e.y+u>t.length-1)||e.type!==h.BODY&&e.type!==h.HEAD||(p=!1)})),e.forEach((function(t){t!==i&&t.getBlocks().forEach((function(t){i.getBlocks().forEach((function(e){t.type!==h.HEAD&&t.type!==h.BODY||e.type!==h.HEAD&&e.type!==h.BODY||t.x===e.x+d&&t.y===e.y+u&&(p=!1)}))}))})),p&&(r().forEach((function(t){i.getBlocks().forEach((function(e){t.x===e.x&&t.y===e.y&&(t.type=h.NOT_DEFINED)}))})),i.move(d,u),o()))},moveOrigin:{x:0,y:0},selectPlane:function(t){var a,n=t.x,s=t.y;e.forEach((function(t){t.getBlocks().forEach((function(e){e.x===parseInt(n)&&e.y===parseInt(s)&&(a=t)}))})),a!==i&&void 0!==a&&(i=a)},getSelectedPlane:function(){return i}}},f=function(t){var e={x:t.x,y:t.y},a=!1,n=[[{x:e.x-1,y:e.y,type:h.NOT_DEFINED},{x:e.x,y:e.y,type:h.HEAD},{x:e.x+1,y:e.y,type:h.NOT_DEFINED},{x:e.x+2,y:e.y,type:h.NOT_DEFINED}],[{x:e.x-1,y:e.y+1,type:h.BODY},{x:e.x,y:e.y+1,type:h.BODY},{x:e.x+1,y:e.y+1,type:h.BODY},{x:e.x+2,y:e.y+1,type:h.NOT_DEFINED}],[{x:e.x-1,y:e.y+2,type:h.NOT_DEFINED},{x:e.x,y:e.y+2,type:h.BODY},{x:e.x+1,y:e.y+2,type:h.NOT_DEFINED},{x:e.x+2,y:e.y+2,type:h.NOT_DEFINED}],[{x:e.x-1,y:e.y+3,type:h.BODY},{x:e.x,y:e.y+3,type:h.BODY},{x:e.x+1,y:e.y+3,type:h.BODY},{x:e.x+2,y:e.y+3,type:h.NOT_DEFINED}]];return{getHead:function(){return e},getBlocks:function(){var t=[];return n.forEach((function(e){e.forEach((function(e){t.push(e)}))})),[].concat(t)},hit:function(t){var s=t.x,i=t.y;a=!0;var o=!1;parseInt(s)==e.x&&parseInt(i)==e.y&&(o=!0),n.forEach((function(t){t.forEach((function(t){t.x!==parseInt(s)||t.y!==parseInt(i)||t.type!==h.BODY&&t.type!==h.HEAD||(t.type=h.HIT),o&&t.type===h.BODY&&(t.type=h.HIT),t.type!==h.HEAD&&t.type!==h.BODY||(a=!1)}))}))},rotate:function(){for(var t=[[{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0}],[{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0}],[{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0}],[{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0}]],a=0;a<n.length;a++)for(var s=0;s<n.length;s++)t[a][s].x=n[a][s].x,t[a][s].y=n[a][s].y,t[a][s].type=n[n.length-s-1][a].type,t[a][s].type===h.HEAD&&(e={x:t[a][s].x,y:t[a][s].y});n.splice.apply(n,[0,n.length].concat(t))},getDead:function(){return a},blockType:h,move:function(t,e){for(var a=[[{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0}],[{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0}],[{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0}],[{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0}]],s=0;s<n.length;s++)for(var i=0;i<n.length;i++)a[s][i].x=n[s][i].x+parseInt(t),a[s][i].y=n[s][i].y+parseInt(e),a[s][i].type=n[s][i].type;n.splice.apply(n,[0,n.length].concat(a))}}};var m=function(t){var e="",a=t.block;switch(t.block.type){case"H":e="btn-primary";break;case"B":e="btn-secondary";break;case"_":e="btn-light";break;case"X":e="btn-danger"}return!1===t.visible&&t.block.type!=h.HIT&&(e="btn-light"),Object(n.jsx)("div",{className:"".concat(e," ").concat(a.x," ").concat(a.y),style:{border:"1px solid darkgrey",margin:"0px",width:"100%",height:"100%"},"data-x":a.x,"data-y":a.y})},v=a(125),b=a.n(v),E={selecting:1,moving:2,movingout:3,movingin:4,dropped:5,hitting:6,locked:7,hideen:8},O=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(t){var n;Object(c.a)(this,a),(n=e.call(this,t)).addPlane=function(t){n.gameBoard.addPlane(t)},n.gameBoard=g(),n.state={status:t.gameStatus,visible:t.visible,type:t.type,gameBoardGrid:n.gameBoard.getBlocks()};var s=f({x:2,y:2});n.addPlane(s);var i=f({x:5,y:5});n.addPlane(i);var o=f({x:7,y:1});n.addPlane(o),n.clicks=0,n.clickdelay=400,n.mounted=!1;return x.a.subscribe("gameEvent",function(t,e){if("player"==this.state.type)switch(e){case"ai trigger hit":var a=[];this.gameBoard.getBlocks().forEach((function(t){t.type!=h.HIT&&a.push(t)}));var n=Math.floor(Math.random()*a.length);this.gameBoard.hit({x:this.gameBoard.getBlocks()[n].x,y:this.gameBoard.getBlocks()[n].y}),this.mounted&&this.setState({gameBoardGrid:this.gameBoard.getBlocks()})}}.bind(Object(l.a)(n))),n}return Object(y.a)(a,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentDidUpdate",value:function(t){t.gameStatus!==this.props.gameStatus&&this.setState({status:this.props.gameStatus})}},{key:"mouseClick",value:function(t){if(this.state.status!=E.locked&&(this.gameBoard.hit({x:t.target.dataset.x,y:t.target.dataset.y}),this.setState({gameBoardGrid:this.gameBoard.getBlocks()}),"ai"==this.state.type)){x.a.publish("gameEvent","player did hit");var e=!1;this.gameBoard.getPlanes().forEach((function(t){0==t.getDead()&&(e=!0)})),e||x.a.publish("gameEvent","player win")}}},{key:"mouseDown",value:function(t){if(this.state.status!=E.locked){if(this.state.status===E.selecting||this.state.status===E.dropped){if(this.clicks++,setTimeout(function(){this.clicks=0}.bind(this),this.clickdelay),2===this.clicks)return this.gameBoard.selectPlane({x:t.target.dataset.x,y:t.target.dataset.y}),this.gameBoard.rotate(this.gameBoard.getSelectedPlane()),this.setState({gameBoardGrid:this.gameBoard.getBlocks()}),void(this.clicks=0);this.setState({status:E.moving}),this.gameBoard.selectPlane({x:t.target.dataset.x,y:t.target.dataset.y}),this.gameBoard.moveOrigin={x:t.target.dataset.x,y:t.target.dataset.y}}this.state.status===E.hitting&&this.mouseClick(t)}}},{key:"mouseLeave",value:function(t){this.state.status!=E.locked&&(this.state.status!==E.moving&&this.state.status!==E.movingin||(null!==t.target.dataset.x&&null!==t.target.dataset.y&&(this.setState({status:E.movingout}),this.gameBoard.moveOrigin={x:t.target.dataset.x,y:t.target.dataset.y}),this.forceUpdate()))}},{key:"mouseEnter",value:function(t){if(this.state.status!=E.locked&&this.state.status===E.movingout){if(null!=t.target.dataset.x&&null!=t.target.dataset.y){var e=t.target.dataset.x,a=t.target.dataset.y;this.gameBoard.moveSelectedPlane(this.gameBoard.moveOrigin,{x:e,y:a})}this.setState({gameBoardGrid:this.gameBoard.getBlocks()}),this.setState({status:E.movingin}),this.forceUpdate()}}},{key:"mouseUp",value:function(t){this.state.status!=E.locked&&this.state.status!==E.hitting&&this.setState({status:E.dropped})}},{key:"render",value:function(){var t=this;return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"card",style:{width:"240px",height:"240px"},children:Object(n.jsx)("div",{className:"card-body",style:{position:"relative",display:"grid",gridTemplateRows:"repeat(10, 20px)",gridTemplateColumns:"repeat(10, 20px)"},children:this.state.gameBoardGrid.map((function(e){return Object(n.jsx)("div",{className:"box",onMouseDown:t.mouseDown.bind(t),onMouseLeave:t.mouseLeave.bind(t),onMouseOver:t.mouseEnter.bind(t),onMouseUp:t.mouseUp.bind(t),children:Object(n.jsx)(m,{block:e,visible:t.state.visible})},b()())}))})})})}}]),a}(s.Component),B=(a(134),function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a),(t=e.call(this)).onPlayClick=function(){console.log("hitting status"),t.board2Status=E.hitting,t.board1Status=E.locked,t.forceUpdate()},console.log("startup"),t.board1Status=E.selecting,t.board2Status=E.hidden,t.winner="";return x.a.clearAllSubscriptions(),x.a.subscribe("gameEvent",function(t,e){"gameEvent"==t&&"player did hit"==e&&this.board2Status==E.hitting&&(this.board1Status=E.locked,x.a.publish("gameEvent","ai trigger hit")),"gameEvent"==t&&"player win"==e&&(this.winner="player",this.board1Status=E.locked,this.board2Status=E.locked,this.forceUpdate())}.bind(Object(l.a)(t))),x.a.publish("gameEvent","start"),t}return Object(y.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"card",style:{width:"100%"},children:Object(n.jsxs)("div",{className:"card-body",children:[this.board1Status==E.selecting&&Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"alert alert-primary",role:"alert",style:{width:"50%",marginLeft:"25%",marginRight:"25%"},children:"Place the planes!"}),Object(n.jsx)("div",{className:"alert alert-info",role:"alert",style:{width:"50%",marginLeft:"25%",marginRight:"25%"},children:"Drag them around, double click to rotate"})]}),"player"==this.winner&&Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"alert alert-primary",role:"alert",style:{width:"50%",marginLeft:"25%",marginRight:"25%"},children:"YOU WON!"})}),Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row justify-content-center",children:[Object(n.jsx)("div",{className:"col-auto mx-auto",children:Object(n.jsx)(O,{gameStatus:this.board1Status,visible:!0,type:"player"})}),Object(n.jsx)("div",{className:"col-auto mx-auto",children:Object(n.jsx)(O,{gameStatus:this.board2Status,visible:!1,type:"ai"})})]}),this.board1Status==E.selecting&&Object(n.jsx)("div",{className:"row justify-content-center",children:Object(n.jsx)("div",{className:"col-auto",children:Object(n.jsx)("button",{type:"button",className:"btn btn-dark m-3",onClick:this.onPlayClick.bind(this),children:"Play!"})})})]})]})})})}}]),a}(s.Component)),D=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,430)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,o=e.getTTFB;a(t),n(t),s(t),i(t),o(t)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root")),D()}},[[429,1,2]]]);
//# sourceMappingURL=main.18c3f529.chunk.js.map