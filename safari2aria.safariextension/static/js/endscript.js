webpackJsonp([4],{208:function(e,t,n){var o,i,a;!function(n,r){i=[],o=r,void 0!==(a="function"==typeof o?o.apply(t,i):o)&&(e.exports=a)}(0,function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};return function(){function n(e,t){var o=this;e.style.opacity&&e.style.opacity>.05?e.style.opacity=e.style.opacity-.05:e.style.opacity&&e.style.opacity<=.1?e.parentNode&&(e.parentNode.removeChild(e),t&&t()):e.style.opacity=.9,setTimeout(function(){return n.apply(o,[e,t])},1e3/30)}function o(e,n,i){n=n||{},i=i||"";for(var a in e)if(e.hasOwnProperty(a)){var r=e[a];r&&"object"===(void 0===r?"undefined":t(r))&&!(r instanceof Date||r instanceof RegExp)?o(r,n,i+a+" "):n[i]&&"object"===t(n[i])?n[i][a]=r:(n[i]={},n[i][a]=r)}return n}function i(e){var t=o(e),n=JSON.stringify(t,null,2);return n=n.replace(/"([^"]*)": \{/g,"$1 {").replace(/"([^"]*)"/g,"$1").replace(/(\w*-?\w*): ([\w\d .#]*),?/g,"$1: $2;").replace(/},/g,"}\n").replace(/ &([.:])/g,"$1"),n=n.substr(1,n.lastIndexOf("}")-1)}function a(e){var t=document.head||document.getElementsByTagName("head")[0],n=r("style");n.id="mini-toastr-styles",n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e)),t.appendChild(n)}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div";return document.createElement(e)}function s(e,t,n){var o=r(n.icons[t].nodeType),i=n.icons[t].attrs;for(var a in i)i.hasOwnProperty(a)&&o.setAttribute(a,i[a]);e.appendChild(o)}function c(e,t,n){var o=r();o.className=n,o.appendChild(document.createTextNode(t)),e.appendChild(o)}var u,d;if("undefined"==typeof window)return{init:function(){}};var f={error:"error",warn:"warn",success:"success",info:"info"},l={container:"mini-toastr",notification:"mini-toastr__notification",title:"mini-toastr-notification__title",icon:"mini-toastr-notification__icon",message:"mini-toastr-notification__message",error:"-"+f.error,warn:"-"+f.warn,success:"-"+f.success,info:"-"+f.info},p={types:f,animation:n,timeout:3e3,icons:{},appendTarget:document.body,node:r(),style:(d={},e(d,"."+l.container,{position:"fixed","z-index":99999,right:"12px",top:"12px"}),e(d,"."+l.notification,(u={cursor:"pointer",padding:"12px 18px",margin:"0 0 6px 0","background-color":"#000",opacity:.8,color:"#fff","border-radius":"3px","box-shadow":"#3c3b3b 0 0 12px",width:"300px"},e(u,"&."+l.error,{"background-color":"#D5122B"}),e(u,"&."+l.warn,{"background-color":"#F5AA1E"}),e(u,"&."+l.success,{"background-color":"#7AC13E"}),e(u,"&."+l.info,{"background-color":"#4196E1"}),e(u,"&:hover",{opacity:1,"box-shadow":"#000 0 0 12px"}),u)),e(d,"."+l.title,{"font-weight":"500"}),e(d,"."+l.message,{display:"inline-block","vertical-align":"middle",width:"240px",padding:"0 12px"}),d)},m={config:p,showMessage:function(e,t,n,o,i,a){var u={};Object.assign(u,this.config),Object.assign(u,a);var d=r();return d.className=l.notification+" "+l[n],d.onclick=function(){u.animation(d,null)},t&&c(d,t,l.title),u.icons[n]&&s(d,n,u),e&&c(d,e,l.message),u.node.insertBefore(d,u.node.firstChild),setTimeout(function(){return u.animation(d,i)},o||u.timeout),i&&i(),this},init:function(e){var t=this,n={};return Object.assign(n,p),Object.assign(n,e),this.config=n,a(i(n.style)),n.node.id=""+l.container,n.node.className=""+l.container,n.appendTarget.appendChild(n.node),Object.keys(n.types).forEach(function(e){m[n.types[e]]=function(t,o,i,a,r){return this.showMessage(t,o,n.types[e],i,a,r),this}.bind(t)}),this},setIcon:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"i",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];n.class=n.class?n.class+" "+l.icon:l.icon,this.config.icons[e]={nodeType:t,attrs:n}}};return m}()})},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(208),i=n.n(o);window.top===window&&function(){function e(t){var n=null;return"BODY"===t.tagName?n=null:"IMG"===t.tagName&&t.src?n=t.src:t.href?n=t.href:t.parentNode&&(n=e(t.parentNode)),n}function t(e){"changeRpc"===e.name&&i.a.success("成功切换默认下载服务至"+e.message),"currentRpc"===e.name&&i.a.success("当前下载服务为"+e.message),"showMassage"===e.name&&i.a[e.message.action||"success"](e.message.text,e.message.title),"receiveConfig"===e.name&&(s=e.message||{},o()),e.message&&e.message.hasCb&&safari.self.tab.dispatchMessage([e.name,"cb"].join("_"),{cookie:document.cookie})}function n(t){var n=[e(t.target),document.location.href,document.cookie];safari.self.tab.setContextMenuEventUserInfo(t,n)}function o(){if(r)return void(s.catchIframe||r.disconnect());s.catchIframe&&(r=new MutationObserver(function(e){e.some(function(e){return"IFRAME"===e.target.tagName&&"attributes"===e.type&&"src"===e.attributeName&&(!e.target.src.match(/^https:\/\/127\.0\.0\.1\//)&&(safari.self.tab.dispatchMessage("downloadFromIframe",{url:e.target.src,cookie:document.cookie}),e.target.src="https://127.0.0.1/",!1))})}),r.observe(document.body,{attributes:!0,attributeFilter:["src"],attributeOldValue:!0,characterData:!1,characterDataOldValue:!1,childList:!1,subtree:!0}))}function a(){safari.self.tab.dispatchMessage("keyPress",{keyPressed:c})}var r,s,c={};document.onkeydown=function(e){var t=e.charCode?e.charCode:e.keyCode;c[t]=!0,a()},document.onkeyup=function(e){var t=e.charCode?e.charCode:e.keyCode;delete c[t],a()},window.onblur=function(e){c={},a()},function(){i.a.init({appendTarget:document.body,timeout:5e3}),safari.self.tab.dispatchMessage("getConfig"),document.addEventListener("contextmenu",n,!1),safari.self.addEventListener("message",t,!1),a()}()}()}},[211]);