!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";function r(e,t){for(var n=[],r=[],o=arguments.length;o-- >2;)n.push(arguments[o]);for(;n.length;){var i=n.pop();if(i&&i.pop)for(o=i.length;o--;)n.push(i[o]);else null!=i&&!0!==i&&!1!==i&&r.push(i)}return"function"==typeof e?e(t||{},r):{nodeName:e,attributes:t||{},children:r,key:t&&t.key}}function o(e,t,n,r){var o,i=[].map,a=r&&r.children[0]||null,u=a&&function e(t){return{nodeName:t.nodeName.toLowerCase(),attributes:{},children:i.call(t.childNodes,function(t){return 3===t.nodeType?t.nodeValue:e(t)})}}(a),c=[],s=!0,l=p(e),f=function e(t,n,r){for(var o in r)"function"==typeof r[o]?function(e,o){r[e]=function(e){var i=o(e);return"function"==typeof i&&(i=i(y(t,l),r)),i&&i!==(n=y(t,l))&&!i.then&&v(l=m(t,p(n,i),l)),i}}(o,r[o]):e(t.concat(o),n[o]=p(n[o]),r[o]=p(r[o]));return r}([],l,p(t));return v(),f;function d(e){return"function"==typeof e?d(e(l,f)):null!=e?e:""}function h(){o=!o;var e=d(n);for(r&&!o&&(a=function e(t,n,r,o,i){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var a=function e(t,n){var r="string"==typeof t||"number"==typeof t?document.createTextNode(t):(n=n||"svg"===t.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",t.nodeName):document.createElement(t.nodeName);var o=t.attributes;if(o){o.oncreate&&c.push(function(){o.oncreate(r)});for(var i=0;i<t.children.length;i++)r.appendChild(e(t.children[i]=d(t.children[i]),n));for(var a in o)w(r,a,o[a],null,n)}return r}(o,i);t.insertBefore(a,n),null!=r&&S(t,n,r),n=a}else if(null==r.nodeName)n.nodeValue=o;else{!function(e,t,n,r){for(var o in p(t,n))n[o]!==("value"===o||"checked"===o?e[o]:t[o])&&w(e,o,n[o],t[o],r);var i=s?n.oncreate:n.onupdate;i&&c.push(function(){i(e,t)})}(n,r.attributes,o.attributes,i=i||"svg"===o.nodeName);for(var u={},l={},f=[],h=r.children,v=o.children,m=0;m<h.length;m++){f[m]=n.childNodes[m];var y=g(h[m]);null!=y&&(u[y]=[f[m],h[m]])}for(var m=0,b=0;b<v.length;){var y=g(h[m]),x=g(v[b]=d(v[b]));if(l[y])m++;else if(null==x||x!==g(h[m+1]))if(null==x||s)null==y&&(e(n,f[m],h[m],v[b],i),b++),m++;else{var _=u[x]||[];y===x?(e(n,_[0],_[1],v[b],i),m++):_[0]?e(n,n.insertBefore(_[0],f[m]),_[1],v[b],i):e(n,f[m],null,v[b],i),l[x]=v[b],b++}else null==y&&S(n,f[m],h[m]),m++}for(;m<h.length;)null==g(h[m])&&S(n,f[m],h[m]),m++;for(var m in u)l[m]||S(n,u[m][0],u[m][1])}return n}(r,a,u,u=e)),s=!1;c.length;)c.pop()()}function v(){o||(o=!0,setTimeout(h))}function p(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n}function m(e,t,n){var r={};return e.length?(r[e[0]]=e.length>1?m(e.slice(1),t,n[e[0]]):t,p(n,r)):t}function y(e,t){for(var n=0;n<e.length;)t=t[e[n++]];return t}function g(e){return e?e.key:null}function b(e){return e.currentTarget.events[e.type](e)}function w(e,t,n,r,o){if("key"===t);else if("style"===t)if("string"==typeof n)e.style.cssText=n;else for(var i in"string"==typeof r&&(r=e.style.cssText=""),p(r,n)){var a=null==n||null==n[i]?"":n[i];"-"===i[0]?e.style.setProperty(i,a):e.style[i]=a}else"o"===t[0]&&"n"===t[1]?(t=t.slice(2),e.events?r||(r=e.events[t]):e.events={},e.events[t]=n,n?r||e.addEventListener(t,b):e.removeEventListener(t,b)):t in e&&"list"!==t&&"type"!==t&&"draggable"!==t&&"spellcheck"!==t&&"translate"!==t&&!o?e[t]=null==n?"":n:null!=n&&!1!==n&&e.setAttribute(t,n),null!=n&&!1!==n||e.removeAttribute(t)}function S(e,t,n){function r(){e.removeChild(function e(t,n){var r=n.attributes;if(r){for(var o=0;o<n.children.length;o++)e(t.childNodes[o],n.children[o]);r.ondestroy&&r.ondestroy(t)}return t}(t,n))}var o=n.attributes&&n.attributes.onremove;o?o(t,r):r()}}n.r(t),n.d(t,"h",function(){return r}),n.d(t,"app",function(){return o})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.prop=t.Maybe=t.gcd=t.hashCode=t.patternToWords=void 0;t.patternToWords=function(e){return JSON.stringify(e)};t.hashCode=function(e){if(!e.length)return"";var t=e.split("").reduce(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(e=(e<<5)-e+(arguments.length>1?arguments[1]:void 0).charCodeAt(0))&e});return btoa(t+"")};t.gcd=function(e,t){for(;0!==t;){var n=e;e=t,t=n%t}return e};t.Maybe=function e(t){return{value:t,map:function(n){return e(t?n(t):t)}}};t.prop=function(e,t){return e.split(".").reduce(function(e,t){return e?e[t]:void 0},t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(){var e={},t=function(t,n){var r=e[t]=e[t]||[];return r.splice(r.indexOf(n)>>>0,1)};return{on:function(n,r){var o=e[n]=e[n]||[];return o.push(r),t.bind(null,o,r)},off:t,emit:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var i=e[t];return i&&i.length?i.map(function(e){return e.apply(void 0,r)}):[]}}};t.default=r},function(e,t,n){"use strict";function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.isEqual=t.component=void 0;t.component=function(e){if("function"==typeof e)return e;var t=function(){},n=e.render,o=e.defaultProps,i=e.onReceiveProps,a=void 0===i?t:i,u=e.onCreate,c=void 0===u?t:u,s=e.onDestroy,l=void 0===s?t:s,f=r({},o),d=function(t){var i=r({},o,t);return a(e,i,f),f=i,n(r({},i,{rootProps:{oncreate:c(e,i),ondestroy:l(e,i)}}))};return d.instance=e,d};t.isEqual=function(e,t){if(e===t)return!0;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(e[n]!==t[n])return!1;return!0}},function(e,t,n){"use strict";var r=n(0),o=n(5),i=u(n(6)),a=u(n(7));function u(e){return e&&e.__esModule?e:{default:e}}var c=(0,n(3).component)({state:{gridIndex:1,themeIndex:0,themeStateIndex:0,password:""},actions:{setGrid:function(e){return function(){return{gridIndex:e}}},setTheme:function(e){return function(){return{themeIndex:e}}},setThemeState:function(e){return function(){return{themeStateIndex:e}}},setPassword:function(e){return function(){return{password:e}}}},render:function(e){var t=e.grids,n=e.themes,u=e.themeStates;return function(e,c){return(0,r.h)("div",{},[(0,r.h)("div",{class:"title"},"PatternLockJS"),(0,r.h)("div",{class:"subtitle"},"Draw unlock pattern to generate a hash"),(0,r.h)("div",{class:"canvas-wrapper"},(0,r.h)(a.default,{onComplete:function(e){var t=e.hash;return c.setPassword(t)},grid:t[e.gridIndex],theme:n[e.themeIndex],themeState:u[e.themeStateIndex]})),(0,r.h)("div",{class:"password"},["Your password is: ",(0,r.h)("input",{value:e.password})]),(0,r.h)(i.default,{state:e}),(0,r.h)("div",{},[(0,r.h)(o.OptionsGroup,{name:"Grid",list:t,selected:e.gridIndex,onItemSelect:function(e){return function(){return c.setGrid(e)}}}),(0,r.h)(o.OptionsGroup,{name:"Theme",list:n,selected:e.themeIndex,onItemSelect:function(e){return function(){return c.setTheme(e)}}}),(0,r.h)(o.OptionsGroup,{name:"Theme State",list:u,selected:e.themeStateIndex,onItemSelect:function(e){return function(){return c.setThemeState(e)}}})])])}}});document.addEventListener("DOMContentLoaded",function(){var e=c.instance,t=e.state,n=e.actions,o=(0,r.h)(c,{grids:[[2,2],[3,3],[3,4],[4,4],[4,5]],themes:["dark","light"],themeStates:["default","success","failure"]});(0,r.app)(t,n,o,document.getElementById("root"))})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.OptionsGroup=t.OptionItem=void 0;var r=n(0),o=function(e){var t=e.name,n=e.value,o=e.checked,i=e.onCheck;return(0,r.h)("label",{style:"padding: .3em .5em;"},[(0,r.h)("input",{name:t,checked:o,type:"radio",onchange:i}),n.toString()])};t.OptionItem=o;t.OptionsGroup=function(e){var t=e.list,n=e.onItemSelect,i=e.name,a=e.selected;return(0,r.h)("div",{style:"padding: 1em 0;"},[(0,r.h)("div",{style:"font-size: 1.3em;"},(0,r.h)("strong",{},i)),(0,r.h)("div",{},t.map(function(e,t){return(0,r.h)(o,{name:i,value:e,key:e,checked:t===a,onCheck:n(t)})}))])}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(0);function o(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=function(e){var t=e.tabSize,n=void 0===t?4:t,i=o(e,["tabSize"]);return(0,r.h)("div",{style:"text-align: left; padding: .7em 1em; background-color: #eee;"},(0,r.h)("pre",{},JSON.stringify(i,0,n)))};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(0),o=n(1),i=function(e){return e&&e.__esModule?e:{default:e}}(n(8)),a=n(3);function u(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=(0,a.component)({locker:(0,o.Maybe)(null),defaultProps:{onComplete:function(){}},onCreate:function(e,t){var n=t.grid,r=t.theme,a=t.onComplete;return function(t){var u=(0,i.default)({$canvas:t,grid:n,theme:r,width:300,height:430});u.onComplete(a),e.locker=(0,o.Maybe)(u)}},onDestroy:function(e){return function(){return e.locker.map(function(e){return e.destroy()})}},onReceiveProps:function(e,t,n){(0,a.isEqual)(t,n)||e.locker.map(function(e){return e.setGrid.apply(e,u(t.grid).concat([!1])).setTheme(t.theme,!1).setThemeState(t.themeState,!1).forceRender()})},render:function(e){var t=e.rootProps;return(0,r.h)("canvas",t)}});t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.PatternLock=void 0;var r=c(n(2)),o=c(n(9)),i=n(1),a=n(10),u=c(n(11));function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n){return(s=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&l(o,n.prototype),o}).apply(null,arguments)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){v(e,t,n[t])})}return e}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=function(e){return new Error("Invalid or empty ".concat(e," passed"))},m={PATTERN_COMPLETE:"complete",PATTERN_START:"start"},y={theme:"dark",grid:[3,3],width:300,height:430},g=function(){function e(t){var n=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,"forceRender",function(){return(0,a.raf)(function(){var e=n._isDragging;n._isDragging=!0,n.calculationLoop(!1),(0,a.raf)(function(){n.renderLoop(!1),n._isDragging=e})})}),v(this,"destroy",function(){return n._subscriptions.map(function(e){return e()})}),v(this,"emit",function(){var e;return(e=n.eventBus).emit.apply(e,arguments)}),v(this,"onStart",function(e){return n.on(m.PATTERN_START,e)}),v(this,"onComplete",function(e){return n.on(m.PATTERN_COMPLETE,e)}),v(this,"_emitPatternStart",function(){return n.emit(m.PATTERN_START,{})}),v(this,"recalculateBounds",function(){return n.bounds={x:n.$canvas.offsetLeft,y:n.$canvas.offsetTop}}),v(this,"_onResize",function(){return(0,a.raf)(n.recalculateBounds)}),v(this,"_onTouchStart",function(e){e&&e.preventDefault(),n.setInitialState(),n.forceRender(),n._emitPatternStart(),n._isDragging=!0}),v(this,"_onTouchStop",function(e){e&&e.preventDefault(),n.coordinates=null,n.renderLoop(!1),n._emitPatternComplete(),n._isDragging=!1}),v(this,"_onTouchMove",function(e){if(e&&e.preventDefault(),n._isDragging){var t={x:(0,i.prop)("pageX",e)||(0,i.prop)("touches.0.pageX",e)||0,y:(0,i.prop)("pageY",e)||(0,i.prop)("touches.0.pageY",e)||0};t={x:t.x-n.bounds.x,y:t.y-n.bounds.y},n.isPointInCanvas(t)?n.coordinates=t:n._onTouchStop()}}),v(this,"isPointInCanvas",function(e){var t=e.x,r=e.y;return t<=n.dimens.width&&t>0&&r<=n.dimens.height&&r>0}),v(this,"isSelected",function(e){return!!n.selectedNodes.filter(function(t){return t.row===e.row&&t.col===e.col}).length}),v(this,"calculationLoop",function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];n._isDragging&&n.coordinates&&n.forEachNode(function(e,t){if(Math.sqrt(Math.pow(n.coordinates.x-e,2)+Math.pow(n.coordinates.y-t,2))<n.themeState.dimens.node_radius+1){var r={row:e/n.interval.x,col:t/n.interval.y};if(!n.isSelected(r))return n.addIntermediaryNodes(r),n.selectedNodes.push(r),!1}}),e&&(0,a.raf)(n.calculationLoop)}),v(this,"renderLoop",function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(n._isDragging){var t=n.themeState,r=t.colors,o=r.accent,i=r.primary,u=t.dimens.node_ring;n.ctx.clearRect(0,0,n.dimens.width,n.dimens.height),n.renderGrid();var c=n.selectedNodes.reduce(function(e,t){if(e){var r={x:t.row*n.interval.x,y:t.col*n.interval.y},a={x:e.row*n.interval.x,y:e.col*n.interval.y};n.drawNode(r.x,r.y,o,i,u+3),n.drawNode(a.x,a.y,o,i,u+3),n.joinNodes(e.row,e.col,t.row,t.col)}return t},null);if(c&&n.coordinates){var s={x:c.row*n.interval.x,y:c.col*n.interval.y};n.drawNode(s.x,s.y,o,i,u+6),n.joinNodes(s.x,s.y,n.coordinates.x,n.coordinates.y,!0)}}e&&(0,a.raf)(n.renderLoop)}),v(this,"matchHash",function(e){var t=(0,o.default)(e,n.eventBus);return n.onComplete(function(e){return t.check(e.hash)}),t}),!t.$canvas)throw p("$canvas");if(!t.width)throw p("width");if(!t.height)throw p("height");t=d({},y,t),this.dimens={width:t.width,height:t.height},this.setUpCanvas(t),this.initialize(t)}return function(e,t,n){t&&h(e.prototype,t),n&&h(e,n)}(e,[{key:"setUpCanvas",value:function(e){this.$canvas=e.$canvas,this.ctx=this.$canvas.getContext("2d");var t=(0,a.getPixelRatio)(this.ctx);this.$canvas.width=this.dimens.width*t,this.$canvas.height=this.dimens.height*t,this.$canvas.style.width=this.dimens.width+"px",this.$canvas.style.height=this.dimens.height+"px",this.ctx.setTransform(t,0,0,t,0,0)}},{key:"initialize",value:function(e){var t=e.theme,n=f(e.grid,2),o=n[0],i=n[1];this._subscriptions=[],this.eventBus=(0,r.default)(),this.setTheme(t,!1),this.setGrid(o,i),this.renderGrid(),this.attachEventHandlers()}},{key:"setInitialState",value:function(){this.coordinates=null,this.selectedNodes=[],this.lastSelectedNode=null}},{key:"setGrid",value:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return this.rows===e&&this.cols===t?this:(this.rows=e,this.cols=t,this.setInitialState(),this._onResize(),n&&this.forceRender(),this)}},{key:"setTheme",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e===u.default[this.theme]||e===this.theme)return this;if("string"==typeof e&&(e=u.default[e]),!e)throw p("theme");return this.theme=e,this.setThemeState("default",!1),t&&this.forceRender(),this}},{key:"setThemeState",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.theme)throw p("theme");return this.themeState=this.theme[e||"default"]||{},this.themeState.colors=d({},this.theme.default.colors,this.themeState.colors),this.themeState.dimens=d({},this.theme.default.dimens,this.themeState.dimens),t&&this.forceRender(),this}},{key:"attachEventHandlers",value:function(){var e=this,t=function(t,n,r){return e._subscriptions.push((0,a.registerEvent)(t,n,r))};t(this.$canvas,"mousedown touchstart",this._onTouchStart),t(this.$canvas,"mouseup touchend",this._onTouchStop),t(window,"mousemove touchmove",this._onTouchMove),t(window,"resize",this._onResize),(0,a.raf)(this.renderLoop),(0,a.raf)(this.calculationLoop)}},{key:"on",value:function(e,t){var n=this.eventBus.on(e,t);return this._subscriptions.push(n),n}},{key:"_emitPatternComplete",value:function(){var e=this.selectedNodes,t=(0,i.patternToWords)(e),n=(0,i.hashCode)(t);this.emit(m.PATTERN_COMPLETE,{nodes:e,hash:n})}},{key:"addIntermediaryNodes",value:function(e){var t=this.getIntermediaryStepDirection(this.lastSelectedNode,e);if(0!==t.row||0!==t.col)for(var n={row:this.lastSelectedNode.row+t.row,col:this.lastSelectedNode.col+t.col},r=Math.max(this.rows,this.cols),o=0;o++<r&&(n.row!==e.row||n.col!==e.col);)this.selectedNodes.push(n),n={row:n.row+t.row,col:n.col+t.col};this.lastSelectedNode=e}},{key:"getIntermediaryStepDirection",value:function(e,t){var n={row:0,col:0};if(!e)return n;var r=Math.abs(e.row-t.row),o=Math.abs(e.col-t.col);if(1===r||1===o)return n;var a=e.row-t.row<0?1:-1,u=e.col-t.col<0?1:-1;if(0===r)0!==o&&(n.col=u);else if(0===o)n.row=a;else{var c=Math.max(r,o),s=Math.min(r,o),l=(0,i.gcd)(c,s);c%s==0&&(n.col=o/l*u,n.row=r/l*a)}return n}},{key:"renderGrid",value:function(){this.ctx.fillStyle=this.themeState.colors.bg,this.ctx.fillRect(0,0,this.dimens.width,this.dimens.height),this.interval={x:this.dimens.width/(this.rows+1),y:this.dimens.height/(this.cols+1)},this.forEachNode(this.drawNode.bind(this))}},{key:"forEachNode",value:function(e){var t=Array(this.rows+1).fill(this.interval.x),n=Array(this.cols+1).fill(this.interval.y),r=new Error("Break Exception");try{n.reduce(function(n,o){return t.reduce(function(t,o){if(!1===e(t,n))throw r;return t+o}),n+o})}catch(e){if(e!==r)throw e}}},{key:"drawNode",value:function(e,t,n,r,o){var i=this.themeState,a=i.dimens,u=a.node_ring,c=a.node_radius,s=a.node_core,l=i.colors.primary;this.ctx.lineWidth=o||u,this.ctx.fillStyle=n||l,this.ctx.strokeStyle=r||l,this.ctx.beginPath(),this.ctx.arc(e,t,s,0,2*Math.PI),this.ctx.fill(),this.ctx.beginPath(),this.ctx.arc(e,t,c,0,2*Math.PI),this.ctx.stroke()}},{key:"joinNodes",value:function(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=this.interval;o&&(i={x:1,y:1});var a={x:i.x*e,y:i.y*t},u={x:i.x*n,y:i.y*r};this.ctx.lineWidth=this.themeState.dimens.line_width,this.ctx.strokeStyle=this.themeState.colors.accent,this.ctx.lineCap="round",this.ctx.beginPath(),this.ctx.moveTo(a.x,a.y),this.ctx.lineTo(u.x,u.y),this.ctx.stroke()}}]),e}();t.PatternLock=g;t.default=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s(g,t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MATCH_FAILURE=t.MATCH_SUCCESS=void 0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(2));t.MATCH_SUCCESS="MATCH_SUCCESS";t.MATCH_FAILURE="MATCH_FAILURE";t.default=function(e,t){var n=t||(0,r.default)(),o={check:function(t){return function(e,t){return-1!==e.indexOf(t)}(e,t)?n.emit("MATCH_SUCCESS"):n.emit("MATCH_FAILURE")},onSuccess:function(e){return n.on("MATCH_SUCCESS",e),o},onFailure:function(e){return n.on("MATCH_FAILURE",e),o}};return o}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPixelRatio=t.raf=t.registerEvent=t.unregisterEvent=void 0;var r=function(e,t,n){return t.split(" ").forEach(function(t){return e.removeEventListener(t,n,{passive:!1})})};t.unregisterEvent=r;t.registerEvent=function(e,t,n){return t.split(" ").forEach(function(t){return e.addEventListener(t,n,{passive:!1})}),function(){return r(e,t,n)}};var o=requestAnimationFrame||function(e){return setTimeout(e,16)};t.raf=o;t.getPixelRatio=function(e){return(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={},o={line_width:6,node_radius:20,node_core:8,node_ring:1};r.dark={default:{colors:{accent:"#ae64cd",primary:"#ffffff",bg:"#2c3e50"},dimens:o},success:{colors:{accent:"#51e980"}},failure:{colors:{accent:"#e74c3c"}}},r.light={default:{colors:{accent:"#ae64cd",primary:"#34495e",bg:"#ecf0f1"},dimens:o},success:{colors:{accent:"#27ae60"}},failure:{colors:{accent:"#e74c3c"}}};var i=r;t.default=i}]);