require=function o(s,a,u){function f(t,e){if(!a[t]){if(!s[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var i=a[t]={exports:{}};s[t][0].call(i.exports,function(e){return f(s[t][1][e]||e)},i,i.exports,o,s,a,u)}return a[t].exports}for(var l="function"==typeof require&&require,e=0;e<u.length;e++)f(u[e]);return f}({1:[function(e,t,n){var r,i;r=this,i=function(e){function u(e,t,n){this.nodeName=e,this.attributes=t,this.children=n,this.key=t&&t.key}function n(e,t){var n,r,i,o,s;for(s=arguments.length;2<s--;)l.push(arguments[s]);for(t&&t.children&&(l.length||l.push(t.children),delete t.children);l.length;)if((i=l.pop())instanceof Array)for(s=i.length;s--;)l.push(i[s]);else null!=i&&!0!==i&&!1!==i&&("number"==typeof i&&(i=String(i)),(o="string"==typeof i)&&r?n[n.length-1]+=i:((n=n||[]).push(i),r=o));var a=new u(e,t||void 0,n||c);return P.vnode&&P.vnode(a),a}function R(e,t){if(t)for(var n in t)e[n]=t[n];return e}function O(e){return R({},e)}function T(e){return"function"==typeof e}function x(e){return"string"==typeof e}function r(s,e,a){var u=e.split(".");return function(e){for(var t=e&&e.target||this,n={},r=n,i=x(a)?function(e,t){for(var n=t.split("."),r=0;r<n.length&&e;r++)e=e[n[r]];return e}(e,a):t.nodeName?t.type.match(/^che|rad/)?t.checked:t.value:e,o=0;o<u.length-1;o++)r=r[u[o]]||(r[u[o]]=!o&&s.state[u[o]]||{});r[u[o]]=i,s.setState(n)}}function o(e){!e._dirty&&(e._dirty=!0)&&1==y.push(e)&&(P.debounceRendering||m)(t)}function t(){var e,t=y;for(y=[];e=t.pop();)e._dirty&&F(e)}function N(e){var t=e&&e.nodeName;return t&&T(t)&&!(t.prototype&&t.prototype.render)}function D(e,t){return e.nodeName(A(e),t||_)}function w(e,t){return e.normalizedNodeName===t||h(e.nodeName)===h(t)}function A(e){var t=O(e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function E(e){var t=e.parentNode;t&&t.removeChild(e)}function d(e,t,n,r,i){if("className"===t&&(t="class"),"class"===t&&r&&"object"==typeof r&&(r=function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(r)),"key"!==t)if("class"!==t||i)if("style"===t){if(r&&!x(r)&&!x(n)||(e.style.cssText=r||""),r&&"object"==typeof r){if(!x(n))for(var o in n)o in r||(e.style[o]="");for(var o in r)e.style[o]="number"!=typeof r[o]||v[o]?r[o]:r[o]+"px"}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var s=e._listeners||(e._listeners={});t=h(t.substring(2)),r?s[t]||e.addEventListener(t,f,!!g[t]):s[t]&&e.removeEventListener(t,f,!!g[t]),s[t]=r}else if("list"!==t&&"type"!==t&&!i&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var a=i&&t.match(/^xlink\:?(.+)/);null==r||!1===r?a?e.removeAttributeNS("http://www.w3.org/1999/xlink",h(a[1])):e.removeAttribute(t):"object"==typeof r||T(r)||(a?e.setAttributeNS("http://www.w3.org/1999/xlink",h(a[1]),r):e.setAttribute(t,r))}else e.className=r||""}function f(e){return this._listeners[e.type](P.event&&P.event(e)||e)}function p(e,t){var n=h(e),r=b[n]&&b[n].pop()||(t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e));return r.normalizedNodeName=n,r}function I(){for(var e;e=B.pop();)P.afterMount&&P.afterMount(e),e.componentDidMount&&e.componentDidMount()}function L(e,t,n,r,i,o){W++||(k=i&&void 0!==i.ownerSVGElement,H=e&&!(q in e));var s=S(e,t,n,r);return i&&s.parentNode!==i&&i.appendChild(s),--W||(H=!1,o||I()),s}function S(e,t,n,r){for(var i=t&&t.attributes&&t.attributes.ref;N(t);)t=D(t,n);if(null==t&&(t=""),x(t))return e&&e instanceof Text&&e.parentNode?e.nodeValue!=t&&(e.nodeValue=t):(e&&U(e),e=document.createTextNode(t)),e;if(T(t.nodeName))return function(e,t,n,r){var i=e&&e._component,o=i,s=e,a=i&&e._componentConstructor===t.nodeName,u=a,f=A(t);for(;i&&!u&&(i=i._parentComponent);)u=i.constructor===t.nodeName;i&&u&&(!r||i._component)?(j(i,f,3,n,r),e=i.base):(o&&!a&&(z(o,!0),e=s=null),i=M(t.nodeName,f,n),e&&!i.nextBase&&(i.nextBase=e,s=null),j(i,f,1,n,r),e=i.base,s&&e!==s&&(s._component=null,U(s)));return e}(e,t,n,r);var o=e,s=String(t.nodeName),a=k,u=t.children;if(k="svg"===s||"foreignObject"!==s&&k,e){if(!w(e,s)){for(o=p(s,k);e.firstChild;)o.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(o,e),U(e)}}else o=p(s,k);var f=o.firstChild,l=o[q];if(!l){o[q]=l={};for(var c=o.attributes,h=c.length;h--;)l[c[h].name]=c[h].value}return!H&&u&&1===u.length&&"string"==typeof u[0]&&f&&f instanceof Text&&!f.nextSibling?f.nodeValue!=u[0]&&(f.nodeValue=u[0]):(u&&u.length||f)&&function(e,t,n,r,i){var o,s,a,u,f=e.childNodes,l=[],c={},h=0,d=0,p=f.length,m=0,_=t&&t.length;if(p)for(var v=0;v<p;v++){var g=f[v],y=g[q];null!=(b=_?(s=g._component)?s.__key:y?y.key:null:null)?(h++,c[b]=g):(H||i||y||g instanceof Text)&&(l[m++]=g)}if(_)for(v=0;v<_;v++){var b;if(a=t[v],(u=null)!=(b=a.key))h&&b in c&&(u=c[b],c[b]=void 0,h--);else if(!u&&d<m)for(o=d;o<m;o++)if((s=l[o])&&(k=s,x(C=a)?k instanceof Text:x(C.nodeName)?!k._componentConstructor&&w(k,C.nodeName):T(C.nodeName)?!k._componentConstructor||k._componentConstructor===C.nodeName||N(C):void 0)){u=s,l[o]=void 0,o===m-1&&m--,o===d&&d++;break}(u=S(u,a,n,r))&&u!==e&&(p<=v?e.appendChild(u):u!==f[v]&&(u===f[v+1]&&E(f[v]),e.insertBefore(u,f[v]||null)))}var k,C;if(h)for(var v in c)c[v]&&U(c[v]);for(;d<=m;)(u=l[m--])&&U(u)}(o,u,n,r,!!l.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&r in t||null==n[r]||d(e,r,n[r],n[r]=void 0,k);if(t)for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||d(e,r,n[r],n[r]=t[r],k)}(o,t.attributes,l),i&&(l.ref=i)(o),k=a,o}function U(e,t){var n,r=e._component;if(r)z(r,!t);else for(e[q]&&e[q].ref&&e[q].ref(null),t||function(e){if(E(e),e instanceof Element){e._component=e._componentConstructor=null;var t=e.normalizedNodeName||h(e.nodeName);(b[t]||(b[t]=[])).push(e)}}(e);n=e.lastChild;)U(n,t)}function M(e,t,n){var r=new e(t,n),i=C[e.name];if(s.call(r,t,n),i)for(var o=i.length;o--;)if(i[o].constructor===e){r.nextBase=i[o].nextBase,i.splice(o,1);break}return r}function j(e,t,n,r,i){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===P.syncComponentUpdates&&e.base?o(e):F(e,1,i)),e.__ref&&e.__ref(e))}function F(e,t,n,r){if(!e._disable){var i,o,s,a,u=e.props,f=e.state,l=e.context,c=e.prevProps||u,h=e.prevState||f,d=e.prevContext||l,p=e.base,m=e.nextBase,_=p||m,v=e._component;if(p&&(e.props=c,e.state=h,e.context=d,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,f,l)?i=!0:e.componentWillUpdate&&e.componentWillUpdate(u,f,l),e.props=u,e.state=f,e.context=l),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!i){for(e.render&&(o=e.render(u,f,l)),e.getChildContext&&(l=R(O(l),e.getChildContext()));N(o);)o=D(o,l);var g,y,b=o&&o.nodeName;if(T(b)){var k=A(o);(s=v)&&s.constructor===b&&k.key==s.__key?j(s,k,1,l):(g=s,(s=M(b,k,l)).nextBase=s.nextBase||m,j((s._parentComponent=e)._component=s,k,0,l),F(s,1,n,!0)),y=s.base}else a=_,(g=v)&&(a=e._component=null),!_&&1!==t||(a&&(a._component=null),y=L(a,o,l,n||!p,_&&_.parentNode,!0));if(_&&y!==_&&s!==v){var C=_.parentNode;C&&y!==C&&(C.replaceChild(y,_),g||(_._component=null,U(_)))}if(g&&z(g,y!==_),(e.base=y)&&!r){for(var x=e,w=e;w=w._parentComponent;)(x=w).base=y;y._component=x,y._componentConstructor=x.constructor}}!p||n?B.unshift(e):i||(e.componentDidUpdate&&e.componentDidUpdate(c,h,d),P.afterUpdate&&P.afterUpdate(e));var E,S=e._renderCallbacks;if(S)for(;E=S.pop();)E.call(e);W||r||I()}}function z(e,t){P.beforeUnmount&&P.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r,i,o,s=e._component;if(s)z(s,t);else if(n){var a;for(n[q]&&n[q].ref&&n[q].ref(null),e.nextBase=n,t&&(E(n),i=(r=e).constructor.name,(o=C[i])?o.push(r):C[i]=[r]);a=n.lastChild;)U(a,!t)}e.__ref&&e.__ref(null),e.componentDidUnmount&&e.componentDidUnmount()}function s(e,t){this._dirty=!0,this.context=t,this.props=e,this.state||(this.state={})}var P={},l=[],c=[],i={},h=function(e){return i[e]||(i[e]=e.toLowerCase())},a="undefined"!=typeof Promise&&Promise.resolve(),m=a?function(e){a.then(e)}:setTimeout,_={},q="undefined"!=typeof Symbol?Symbol.for("preactattr"):"__preactattr_",v={boxFlex:1,boxFlexGroup:1,columnCount:1,fillOpacity:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,fontWeight:1,lineClamp:1,lineHeight:1,opacity:1,order:1,orphans:1,strokeOpacity:1,widows:1,zIndex:1,zoom:1},g={blur:1,error:1,focus:1,load:1,resize:1,scroll:1},y=[],b={},B=[],W=0,k=!1,H=!1,C={};R(s.prototype,{linkState:function(e,t){var n=this._linkedStates||(this._linkedStates={});return n[e+t]||(n[e+t]=r(this,e,t))},setState:function(e,t){var n=this.state;this.prevState||(this.prevState=O(n)),R(n,T(e)?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),o(this)},forceUpdate:function(){F(this,2)},render:function(){}}),e.h=n,e.cloneElement=function(e,t){return n(e.nodeName,R(O(e.attributes),t),2<arguments.length?[].slice.call(arguments,2):e.children)},e.Component=s,e.render=function(e,t,n){return L(n,e,{},!1,t)},e.rerender=t,e.options=P},"object"==typeof n&&void 0!==t?i(n):"function"==typeof define&&define.amd?define(["exports"],i):i(r.preact=r.preact||{})},{}],papaparse:[function(e,t,n){var r,i;r=this,i=function o(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{},i=!f.document&&!!f.postMessage,a=i&&/blob:/i.test((f.location||{}).protocol),s={},u=0,k={parse:function(e,t){var n=(t=t||{}).dynamicTyping||!1;if(z(n)&&(t.dynamicTypingFunction=n,n={}),t.dynamicTyping=n,t.transform=!!z(t.transform)&&t.transform,t.worker&&k.WORKERS_SUPPORTED){var r=function(){if(!k.WORKERS_SUPPORTED)return!1;var e,t,n=(e=f.URL||f.webkitURL||null,t=o.toString(),k.BLOB_URL||(k.BLOB_URL=e.createObjectURL(new Blob(["(",t,")();"],{type:"text/javascript"})))),r=new f.Worker(n);return r.onmessage=_,r.id=u++,s[r.id]=r}();return r.userStep=t.step,r.userChunk=t.chunk,r.userComplete=t.complete,r.userError=t.error,t.step=z(t.step),t.chunk=z(t.chunk),t.complete=z(t.complete),t.error=z(t.error),delete t.worker,void r.postMessage({input:e,config:t,workerId:r.id})}var i=null;return k.NODE_STREAM_INPUT,"string"==typeof e?i=t.download?new h(t):new p(t):!0===e.readable&&z(e.read)&&z(e.on)?i=new m(t):(f.File&&e instanceof File||e instanceof Object)&&(i=new d(t)),i.stream(e)},unparse:function(e,t){var r=!1,_=!0,v=",",g="\r\n",i='"',o=i+i,n=!1,s=null;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||k.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(v=t.delimiter),"boolean"!=typeof t.quotes&&"function"!=typeof t.quotes&&!Array.isArray(t.quotes)||(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(n=t.skipEmptyLines),"string"==typeof t.newline&&(g=t.newline),"string"==typeof t.quoteChar&&(i=t.quoteChar),"boolean"==typeof t.header&&(_=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");s=t.columns}void 0!==t.escapeChar&&(o=t.escapeChar+i)}}();var a=new RegExp(F(i),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,n);if("object"==typeof e[0])return f(s||u(e[0]),e,n)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:u(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],n);throw new Error("Unable to serialize unrecognized input");function u(e){if("object"!=typeof e)return[];var t=[];for(var n in e)t.push(n);return t}function f(e,t,n){var r="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var i=Array.isArray(e)&&0<e.length,o=!Array.isArray(t[0]);if(i&&_){for(var s=0;s<e.length;s++)0<s&&(r+=v),r+=y(e[s],s);0<t.length&&(r+=g)}for(var a=0;a<t.length;a++){var u=i?e.length:t[a].length,f=!1,l=i?0===Object.keys(t[a]).length:0===t[a].length;if(n&&!i&&(f="greedy"===n?""===t[a].join("").trim():1===t[a].length&&0===t[a][0].length),"greedy"===n&&i){for(var c=[],h=0;h<u;h++){var d=o?e[h]:h;c.push(t[a][d])}f=""===c.join("").trim()}if(!f){for(var p=0;p<u;p++){0<p&&!l&&(r+=v);var m=i&&o?e[p]:p;r+=y(t[a][m],p)}a<t.length-1&&(!n||0<u&&!l)&&(r+=g)}}return r}function y(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var n=e.toString().replace(a,o);return"boolean"==typeof r&&r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0;return!1}(n,k.BAD_DELIMITERS)||-1<n.indexOf(v)||" "===n.charAt(0)||" "===n.charAt(n.length-1)?i+n+i:n}}};if(k.RECORD_SEP=String.fromCharCode(30),k.UNIT_SEP=String.fromCharCode(31),k.BYTE_ORDER_MARK="\ufeff",k.BAD_DELIMITERS=["\r","\n",'"',k.BYTE_ORDER_MARK],k.WORKERS_SUPPORTED=!i&&!!f.Worker,k.NODE_STREAM_INPUT=1,k.LocalChunkSize=10485760,k.RemoteChunkSize=5242880,k.DefaultDelimiter=",",k.Parser=C,k.ParserHandle=n,k.NetworkStreamer=h,k.FileStreamer=d,k.StringStreamer=p,k.ReadableStreamStreamer=m,f.jQuery){var l=f.jQuery;l.fn.parse=function(s){var n=s.config||{},a=[];return this.each(function(e){if("INPUT"!==l(this).prop("tagName").toUpperCase()||"file"!==l(this).attr("type").toLowerCase()||!f.FileReader||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)a.push({file:this.files[t],inputElem:this,instanceConfig:l.extend({},n)})}),e(),this;function e(){if(0!==a.length){var e,t,n,r=a[0];if(z(s.before)){var i=s.before(r.file,r.inputElem);if("object"==typeof i){if("abort"===i.action)return e=r.file,t=r.inputElem,n=i.reason,void(z(s.error)&&s.error({name:"AbortError"},e,t,n));if("skip"===i.action)return void u();"object"==typeof i.config&&(r.instanceConfig=l.extend(r.instanceConfig,i.config))}else if("skip"===i)return void u()}var o=r.instanceConfig.complete;r.instanceConfig.complete=function(e){z(o)&&o(e,r.file,r.inputElem),u()},k.parse(r.file,r.instanceConfig)}else z(s.complete)&&s.complete()}function u(){a.splice(0,1),e()}}}function c(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=x(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new n(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&z(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);void 0!==n&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e;this._partialLine="";var i=this._handle.parse(r,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var o=i.meta.cursor;this._finished||(this._partialLine=r.substring(o-this._baseIndex),this._baseIndex=o),i&&i.data&&(this._rowCount+=i.data.length);var s=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(a)f.postMessage({results:i,workerId:k.WORKER_ID,finished:s});else if(z(this._config.chunk)&&!t){if(this._config.chunk(i,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);i=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(i.data),this._completeResults.errors=this._completeResults.errors.concat(i.errors),this._completeResults.meta=i.meta),this._completed||!s||!z(this._config.complete)||i&&i.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),s||i&&i.meta.paused||this._nextChunk(),i}this._halted=!0},this._sendError=function(e){z(this._config.error)?this._config.error(e):a&&this._config.error&&f.postMessage({workerId:k.WORKER_ID,error:e,finished:!1})}}function h(e){var r;(e=e||{}).chunkSize||(e.chunkSize=k.RemoteChunkSize),c.call(this,e),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(r=new XMLHttpRequest,this._config.withCredentials&&(r.withCredentials=this._config.withCredentials),i||(r.onload=y(this._chunkLoaded,this),r.onerror=y(this._chunkError,this)),r.open("GET",this._input,!i),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)r.setRequestHeader(t,e[t])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;r.setRequestHeader("Range","bytes="+this._start+"-"+n)}try{r.send()}catch(e){this._chunkError(e.message)}i&&0===r.status&&this._chunkError()}},this._chunkLoaded=function(){var e;4===r.readyState&&(r.status<200||400<=r.status?this._chunkError():(this._start+=r.responseText.length,this._finished=!this._config.chunkSize||this._start>=(null===(e=r.getResponseHeader("Content-Range"))?-1:parseInt(e.substr(e.lastIndexOf("/")+1))),this.parseChunk(r.responseText)))},this._chunkError=function(e){var t=r.statusText||e;this._sendError(new Error(t))}}function d(e){var r,i;(e=e||{}).chunkSize||(e.chunkSize=k.LocalChunkSize),c.call(this,e);var o="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,i=e.slice||e.webkitSlice||e.mozSlice,o?((r=new FileReader).onload=y(this._chunkLoaded,this),r.onerror=y(this._chunkError,this)):r=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=i.call(e,this._start,t)}var n=r.readAsText(e,this._config.encoding);o||this._chunkLoaded({target:{result:n}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(r.error)}}function p(e){var n;c.call(this,e=e||{}),this.stream=function(e){return n=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e=this._config.chunkSize,t=e?n.substr(0,e):n;return n=e?n.substr(e):"",this._finished=!n,this.parseChunk(t)}}}function m(e){c.call(this,e=e||{});var t=[],n=!0,r=!1;this.pause=function(){c.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){c.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=y(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=y(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=y(function(){this._streamCleanUp(),r=!0,this._streamData("")},this),this._streamCleanUp=y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function n(v){var s,a,u,f=Math.pow(2,53),l=-f,c=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,h=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,n=0,d=0,p=!1,e=!1,m=[],_={data:[],errors:[],meta:{}};if(z(v.step)){var r=v.step;v.step=function(e){if(_=e,i())y();else{if(y(),0===_.data.length)return;n+=e.data.length,v.preview&&n>v.preview?a.abort():r(_,t)}}}function g(e){return"greedy"===v.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function y(){if(_&&u&&(b("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+k.DefaultDelimiter+"'"),u=!1),v.skipEmptyLines)for(var e=0;e<_.data.length;e++)g(_.data[e])&&_.data.splice(e--,1);return i()&&function(){if(_)if(Array.isArray(_.data[0])){for(var e=0;i()&&e<_.data.length;e++)_.data[e].forEach(t);_.data.splice(0,1)}else _.data.forEach(t);function t(e){z(v.transformHeader)&&(e=v.transformHeader(e)),m.push(e)}}(),function(){if(!_||!v.header&&!v.dynamicTyping&&!v.transform)return _;function e(e,t){var n,r,i,o=v.header?{}:[];for(n=0;n<e.length;n++){var s=n,a=e[n];v.header&&(s=n>=m.length?"__parsed_extra":m[n]),v.transform&&(a=v.transform(a,s)),r=a,i=void 0,i=s,v.dynamicTypingFunction&&void 0===v.dynamicTyping[i]&&(v.dynamicTyping[i]=v.dynamicTypingFunction(i)),a=!0===(v.dynamicTyping[i]||v.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(function(e){if(c.test(e)){var t=parseFloat(e);if(l<t&&t<f)return 1}return 0}(r)?parseFloat(r):h.test(r)?new Date(r):""===r?null:r):r,"__parsed_extra"===s?(o[s]=o[s]||[],o[s].push(a)):o[s]=a}return v.header&&(n>m.length?b("FieldMismatch","TooManyFields","Too many fields: expected "+m.length+" fields but parsed "+n,d+t):n<m.length&&b("FieldMismatch","TooFewFields","Too few fields: expected "+m.length+" fields but parsed "+n,d+t)),o}var t=1;return!_.data.length||Array.isArray(_.data[0])?(_.data=_.data.map(e),t=_.data.length):_.data=e(_.data,0),v.header&&_.meta&&(_.meta.fields=m),d+=t,_}()}function i(){return v.header&&0===m.length}function b(e,t,n,r){_.errors.push({type:e,code:t,message:n,row:r})}this.parse=function(e,t,n){var r=v.quoteChar||'"';if(v.newline||(v.newline=function(e,t){e=e.substr(0,1048576);var n=new RegExp(F(t)+"([^]*?)"+F(t),"gm"),r=(e=e.replace(n,"")).split("\r"),i=e.split("\n"),o=1<i.length&&i[0].length<r[0].length;if(1===r.length||o)return"\n";for(var s=0,a=0;a<r.length;a++)"\n"===r[a][0]&&s++;return s>=r.length/2?"\r\n":"\r"}(e,r)),u=!1,v.delimiter)z(v.delimiter)&&(v.delimiter=v.delimiter(e),_.meta.delimiter=v.delimiter);else{var i=function(e,t,n,r,i){var o,s,a,u;i=i||[",","\t","|",";",k.RECORD_SEP,k.UNIT_SEP];for(var f=0;f<i.length;f++){var l=i[f],c=0,h=0,d=0;a=void 0;for(var p=new C({comments:r,delimiter:l,newline:t,preview:10}).parse(e),m=0;m<p.data.length;m++)if(n&&g(p.data[m]))d++;else{var _=p.data[m].length;h+=_,void 0!==a?0<_&&(c+=Math.abs(_-a),a=_):a=_}0<p.data.length&&(h/=p.data.length-d),(void 0===s||c<=s)&&(void 0===u||u<h)&&1.99<h&&(s=c,o=l,u=h)}return{successful:!!(v.delimiter=o),bestDelimiter:o}}(e,v.newline,v.skipEmptyLines,v.comments,v.delimitersToGuess);i.successful?v.delimiter=i.bestDelimiter:(u=!0,v.delimiter=k.DefaultDelimiter),_.meta.delimiter=v.delimiter}var o=x(v);return v.preview&&v.header&&o.preview++,s=e,a=new C(o),_=a.parse(s,t,n),y(),p?{meta:{paused:!0}}:_||{meta:{paused:!1}}},this.paused=function(){return p},this.pause=function(){p=!0,a.abort(),s=s.substr(a.getCharIndex())},this.resume=function(){t.streamer._halted?(p=!1,t.streamer.parseChunk(s,!0)):setTimeout(this.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,a.abort(),_.meta.aborted=!0,z(v.complete)&&v.complete(_),s=""}}function F(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function C(e){var O,T=(e=e||{}).delimiter,N=e.newline,D=e.comments,A=e.step,I=e.preview,L=e.fastMode,U=O=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(U=e.escapeChar),("string"!=typeof T||-1<k.BAD_DELIMITERS.indexOf(T))&&(T=","),D===T)throw new Error("Comment character same as delimiter");!0===D?D="#":("string"!=typeof D||-1<k.BAD_DELIMITERS.indexOf(D))&&(D=!1),"\n"!==N&&"\r"!==N&&"\r\n"!==N&&(N="\n");var M=0,j=!1;this.parse=function(s,n,t){if("string"!=typeof s)throw new Error("Input must be a string");var r=s.length,e=T.length,i=N.length,o=D.length,a=z(A),u=[],f=[],l=[],c=M=0;if(!s)return E();if(L||!1!==L&&-1===s.indexOf(O)){for(var h=s.split(N),d=0;d<h.length;d++){if(l=h[d],M+=l.length,d!==h.length-1)M+=N.length;else if(t)return E();if(!D||l.substr(0,o)!==D){if(a){if(u=[],k(l.split(T)),S(),j)return E()}else k(l.split(T));if(I&&I<=d)return u=u.slice(0,I),E(!0)}}return E()}for(var p=s.indexOf(T,M),m=s.indexOf(N,M),_=new RegExp(F(U)+F(O),"g"),v=s.indexOf(O,M);;)if(s[M]!==O)if(D&&0===l.length&&s.substr(M,o)===D){if(-1===m)return E();M=m+i,m=s.indexOf(N,M),p=s.indexOf(T,M)}else{if(-1!==p&&(p<m||-1===m)){if(!(p<v)){l.push(s.substring(M,p)),M=p+e,p=s.indexOf(T,M);continue}var g=R(p,v,m);if(g&&void 0!==g.nextDelim){p=g.nextDelim,v=g.quoteSearch,l.push(s.substring(M,p)),M=p+e,p=s.indexOf(T,M);continue}}if(-1===m)break;if(l.push(s.substring(M,m)),w(m+i),a&&(S(),j))return E();if(I&&u.length>=I)return E(!0)}else for(v=M,M++;;){if(-1===(v=s.indexOf(O,v+1)))return t||f.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:u.length,index:M}),x();if(v===r-1)return x(s.substring(M,v).replace(_,O));if(O!==U||s[v+1]!==U){if(O===U||0===v||s[v-1]!==U){var y=C(-1===m?p:Math.min(p,m));if(s[v+1+y]===T){l.push(s.substring(M,v).replace(_,O)),s[M=v+1+y+e]!==O&&(v=s.indexOf(O,M)),p=s.indexOf(T,M),m=s.indexOf(N,M);break}var b=C(m);if(s.substr(v+1+b,i)===N){if(l.push(s.substring(M,v).replace(_,O)),w(v+1+b+i),p=s.indexOf(T,M),v=s.indexOf(O,M),a&&(S(),j))return E();if(I&&u.length>=I)return E(!0);break}f.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:u.length,index:M}),v++}}else v++}return x();function k(e){u.push(e),c=M}function C(e){var t=0;if(-1!==e){var n=s.substring(v+1,e);n&&""===n.trim()&&(t=n.length)}return t}function x(e){return t||(void 0===e&&(e=s.substr(M)),l.push(e),M=r,k(l),a&&S()),E()}function w(e){M=e,k(l),l=[],m=s.indexOf(N,M)}function E(e,t){return{data:t?u[0]:u,errors:f,meta:{delimiter:T,linebreak:N,aborted:j,truncated:!!e,cursor:c+(n||0)}}}function S(){A(E(void 0,!0)),u=[],f=[]}function R(e,t,n){var r={nextDelim:void 0,quoteSearch:void 0},i=s.indexOf(O,t+1);if(t<e&&e<i&&(i<n||-1===n)){var o=s.indexOf(T,i);if(-1===o)return r;i<o&&(i=s.indexOf(O,i+1)),r=R(o,i,n)}else r={nextDelim:e,quoteSearch:t};return r}},this.abort=function(){j=!0},this.getCharIndex=function(){return M}}function _(e){var t=e.data,n=s[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var i={abort:function(){r=!0,v(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:g,resume:g};if(z(n.userStep)){for(var o=0;o<t.results.data.length&&(n.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},i),!r);o++);delete t.results}else z(n.userChunk)&&(n.userChunk(t.results,i,t.file),delete t.results)}t.finished&&!r&&v(t.workerId,t.results)}function v(e,t){var n=s[e];z(n.userComplete)&&n.userComplete(t),n.terminate(),delete s[e]}function g(){throw new Error("Not implemented.")}function x(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var n in e)t[n]=x(e[n]);return t}function y(e,t){return function(){e.apply(t,arguments)}}function z(e){return"function"==typeof e}return a&&(f.onmessage=function(e){var t=e.data;if(void 0===k.WORKER_ID&&t&&(k.WORKER_ID=t.workerId),"string"==typeof t.input)f.postMessage({workerId:k.WORKER_ID,results:k.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var n=k.parse(t.input,t.config);n&&f.postMessage({workerId:k.WORKER_ID,results:n,finished:!0})}}),(h.prototype=Object.create(c.prototype)).constructor=h,(d.prototype=Object.create(c.prototype)).constructor=d,(p.prototype=Object.create(p.prototype)).constructor=p,(m.prototype=Object.create(c.prototype)).constructor=m,k},"function"==typeof define&&define.amd?define([],i):"object"==typeof t&&void 0!==n?t.exports=i():r.Papa=i()},{}],"preact-cycle":[function(e,t,n){var r,i;r=this,i=function(s){"use strict";function a(){}function e(e,t,n){return function(e,t){function a(){return clearTimeout(f),f=null,e(l({mutate:i,mutation:n},u))}function i(e){for(var t=void 0,n=void 0,r=arguments.length,i=Array(1<r?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];"string"==typeof e&&(t=e,e=i.splice(0,1)[0]);var s=t?u[t]:u;"function"!=typeof e?s=e:void 0!==(n=e.apply(void 0,[s].concat(i)))&&(s=n),t?u[t]=s:u=s,f=f||setTimeout(a,1)}var u=1<arguments.length&&void 0!==t?t:{},f=void 0,n=function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.apply(void 0,r.concat(t))}};return a()}((r=e,i=n,o=void 0,function(e){o=s.render(s.h(a,e,s.h(r,e)),i,o)}),t);var r,i,o}a.prototype.getChildContext=function(){var e=this.props;return e.children,function(e,t){var n={};for(var r in e)0<=t.indexOf(r)||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children"])},a.prototype.render=function(e){return e.children[0]};var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return(e.render=e).h=s.h,e},"object"==typeof n&&void 0!==t?t.exports=i(e("preact")):"function"==typeof define&&define.amd?define(["preact"],i):r.preactCycle=i(r.preact)},{preact:1}]},{},[]);