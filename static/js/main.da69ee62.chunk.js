(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a(1),y=a.n(o),c=a(3),i=a.n(c),r=(a(14),a(15),a(4)),s=a(5),p=a(8),u=a(7),x={HEAD:"H",BODY:"B",NOT_DEFINED:"_",HIT:"X",AIR:" "},l=function(){for(var t=[],e=[],a=9;a>=0;a--){for(var n=[],o=0;o<10;o++)n.push({x:o,y:a,type:x.NOT_DEFINED});t.push(n)}var y,c=function(){i().forEach((function(t){t.type!==x.HIT&&(t.type=x.NOT_DEFINED)})),e.forEach((function(t){i().forEach((function(e){t.getBlocks().forEach((function(t){e.x===t.x&&e.y===t.y&&(t.type!==x.HEAD&&t.type!==x.BODY&&t.type!==x.HIT||(e.type=t.type))}))}))}))},i=function(){var e=[];return t.forEach((function(t){t.forEach((function(t){e.push(t)}))})),[].concat(e)};return{boardSize:10,getBlocks:i,addPlane:function(t){var a=!0,n=!1;t.getBlocks().forEach((function(t){(t.x<0||t.x>9||t.y<0||t.y>9)&&(t.type!==x.HEAD&&t.type!==x.BODY||(n=!0,a=!1))}));var o=!1;return i().forEach((function(e){t.getBlocks().forEach((function(t){e.x===t.x&&e.y===t.y&&(e.type!==x.HEAD&&e.type!==x.BODY||t.type!==x.HEAD&&t.type!==x.BODY||(o=!0,a=!1))}))})),!1===n&&!1===o&&(e.push(t),c()),a},getPlanes:function(){return e},rotate:function(a){a.rotate(),e.forEach((function(t){t.getBlocks().forEach((function(n){e.forEach((function(e){t!=e&&e.getBlocks().forEach((function(t){n.x==t.x&&n.y==t.y&&(n.type==x.BODY&&t.type==x.BODY||n.type==x.HEAD&&t.type==x.HEAD||n.type==x.HEAD&&t.type==x.BODY||n.type==x.BODY&&t.type==x.HEAD)&&(a.rotate(),a.rotate(),a.rotate())}))}))}))})),a.getBlocks().forEach((function(e){!(e.x<0||e.x>t.length-1||e.y<0||e.y>t.length-1)||e.type!==x.BODY&&e.type!==x.HEAD||(a.rotate(),a.rotate(),a.rotate())})),c()},hit:function(t){var a=t.x,n=t.y;e.forEach((function(t){t.hit({x:a,y:n})})),i().forEach((function(t){t.x===a&&t.y===n&&(t.type=x.HIT)})),c()},moveSelectedPlane:function(a,n){var o=a.x,r=a.y,s=n.x,p=n.y,u=s-o,l=p-r,d=!0;void 0!==y&&(y.getBlocks().forEach((function(e){!(e.x+u<0||e.x+u>t.length-1||e.y+l<0||e.y+l>t.length-1)||e.type!==x.BODY&&e.type!==x.HEAD||(d=!1)})),e.forEach((function(t){t!==y&&t.getBlocks().forEach((function(t){y.getBlocks().forEach((function(e){t.type!==x.HEAD&&t.type!==x.BODY||e.type!==x.HEAD&&e.type!==x.BODY||t.x===e.x+u&&t.y===e.y+l&&(d=!1)}))}))})),d&&(i().forEach((function(t){y.getBlocks().forEach((function(e){t.x===e.x&&t.y===e.y&&(t.type=x.NOT_DEFINED)}))})),y.move(u,l),c()))},moveOrigin:{x:0,y:0},selectPlane:function(t){var a,n=t.x,o=t.y;e.forEach((function(t){t.getBlocks().forEach((function(e){e.x===parseInt(n)&&e.y===parseInt(o)&&(a=t)}))})),a!==y&&void 0!==a&&(y=a)},getSelectedPlane:function(){return y}}},d=function(t){var e={x:t.x,y:t.y},a=!1,n=[[{x:e.x-1,y:e.y,type:x.NOT_DEFINED},{x:e.x,y:e.y,type:x.HEAD},{x:e.x+1,y:e.y,type:x.NOT_DEFINED},{x:e.x+2,y:e.y,type:x.NOT_DEFINED}],[{x:e.x-1,y:e.y+1,type:x.BODY},{x:e.x,y:e.y+1,type:x.BODY},{x:e.x+1,y:e.y+1,type:x.BODY},{x:e.x+2,y:e.y+1,type:x.NOT_DEFINED}],[{x:e.x-1,y:e.y+2,type:x.NOT_DEFINED},{x:e.x,y:e.y+2,type:x.BODY},{x:e.x+1,y:e.y+2,type:x.NOT_DEFINED},{x:e.x+2,y:e.y+2,type:x.NOT_DEFINED}],[{x:e.x-1,y:e.y+3,type:x.BODY},{x:e.x,y:e.y+3,type:x.BODY},{x:e.x+1,y:e.y+3,type:x.BODY},{x:e.x+2,y:e.y+3,type:x.NOT_DEFINED}]];return{getHead:function(){return e},getBlocks:function(){var t=[];return n.forEach((function(e){e.forEach((function(e){t.push(e)}))})),[].concat(t)},hit:function(t){var o=t.x,y=t.y;a=!0;var c=!1;o==e.x&&y==e.y&&(c=!0),n.forEach((function(t){t.forEach((function(t){t.x!==o||t.y!==y||t.type!==x.BODY&&t.type!==x.HEAD||(t.type=x.HIT),c&&t.type===x.BODY&&(t.type=x.HIT),t.type!==x.HEAD&&t.type!==x.BODY||(a=!1)}))}))},rotate:function(){for(var t=[[{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0}],[{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0}],[{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0}],[{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0}]],a=0;a<n.length;a++)for(var o=0;o<n.length;o++)t[a][o].x=n[a][o].x,t[a][o].y=n[a][o].y,t[a][o].type=n[n.length-o-1][a].type,t[a][o].type===x.HEAD&&(e={x:t[a][o].x,y:t[a][o].y});n.splice.apply(n,[0,n.length].concat(t))},getDead:function(){return a},blockType:x,move:function(t,e){for(var a=[[{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0}],[{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0}],[{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0}],[{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0},{x:0,y:0,type:0}]],o=0;o<n.length;o++)for(var y=0;y<n.length;y++)a[o][y].x=n[o][y].x+parseInt(t),a[o][y].y=n[o][y].y+parseInt(e),a[o][y].type=n[o][y].type;n.splice.apply(n,[0,n.length].concat(a))}}};var h=function(t){var e="",a=t.block;switch(t.block.type){case"H":e="btn-primary";break;case"B":e="btn-secondary";break;case"_":e="btn-light";break;case"X":e="btn-danger"}return Object(n.jsx)("div",{className:"".concat(e," ").concat(a.x," ").concat(a.y),style:{border:"1px solid darkgrey",margin:"0px",width:"100%",height:"100%"},"data-x":a.x,"data-y":a.y})},f=a(6),g=a.n(f),D={selecting:1,moving:2,movingout:3,movingin:4,dropped:5,hitting:6},E=function(t){Object(p.a)(a,t);var e=Object(u.a)(a);function a(t){var n;Object(r.a)(this,a),(n=e.call(this,t)).addPlane=function(t){n.gameBoard.addPlane(t)},n.gameBoard=l(),n.state={status:D.selecting,gameBoardGrid:n.gameBoard.getBlocks()};var o=d({x:2,y:2});n.addPlane(o);var y=d({x:5,y:5});return n.addPlane(y),n.clicks=0,n.clickdelay=400,n}return Object(s.a)(a,[{key:"mouseClick",value:function(t){console.log("click"),this.gameBoard.hit({x:t.target.dataset.x,y:t.target.dataset.y}),this.setState({gameBoardGrid:this.gameBoard.getBlocks()})}},{key:"mouseDown",value:function(t){if(this.state.status===D.selecting||this.state.status===D.dropped){if(this.clicks++,setTimeout(function(){this.clicks=0}.bind(this),this.clickdelay),2===this.clicks)return this.gameBoard.selectPlane({x:t.target.dataset.x,y:t.target.dataset.y}),this.gameBoard.rotate(this.gameBoard.getSelectedPlane()),this.setState({gameBoardGrid:this.gameBoard.getBlocks()}),void(this.clicks=0);this.setState({status:D.moving}),this.gameBoard.selectPlane({x:t.target.dataset.x,y:t.target.dataset.y}),this.gameBoard.moveOrigin={x:t.target.dataset.x,y:t.target.dataset.y}}this.state.status===D.hitting&&this.mouseClick(t)}},{key:"mouseLeave",value:function(t){this.state.status!==D.moving&&this.state.status!==D.movingin||(null!==t.target.dataset.x&&null!==t.target.dataset.y&&(this.setState({status:D.movingout}),this.gameBoard.moveOrigin={x:t.target.dataset.x,y:t.target.dataset.y}),this.forceUpdate())}},{key:"mouseEnter",value:function(t){if(this.state.status===D.movingout){if(null!=t.target.dataset.x&&null!=t.target.dataset.y){var e=t.target.dataset.x,a=t.target.dataset.y;this.gameBoard.moveSelectedPlane(this.gameBoard.moveOrigin,{x:e,y:a})}this.setState({gameBoardGrid:this.gameBoard.getBlocks()}),this.setState({status:D.movingin}),this.forceUpdate()}}},{key:"mouseUp",value:function(t){this.setState({status:D.dropped})}},{key:"mouseDouble",value:function(t){console.log("doubleclick")}},{key:"render",value:function(){var t=this;return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"card",children:Object(n.jsx)("div",{className:"card-body",style:{display:"grid",gridTemplateRows:"repeat(10, 20px)",gridTemplateColumns:"repeat(10, 20px)"},children:this.state.gameBoardGrid.map((function(e){return Object(n.jsx)("div",{className:"box",onMouseDown:t.mouseDown.bind(t),onMouseLeave:t.mouseLeave.bind(t),onMouseOver:t.mouseEnter.bind(t),onMouseUp:t.mouseUp.bind(t),onDoubleClick:t.mouseDouble.bind(t),children:Object(n.jsx)(h,{block:e})},g()())}))})})})})}}]),a}(o.Component);var v=function(){return Object(n.jsx)(E,{})},m=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(e){var a=e.getCLS,n=e.getFID,o=e.getFCP,y=e.getLCP,c=e.getTTFB;a(t),n(t),o(t),y(t),c(t)}))};i.a.render(Object(n.jsx)(y.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.da69ee62.chunk.js.map