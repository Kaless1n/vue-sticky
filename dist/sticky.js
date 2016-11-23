!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vue-sticky"]=e():t["vue-sticky"]=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(4),e.default={props:{top:{type:[String],default:"auto"},zIndex:{type:Number,default:10}},data:function(){return{child:null,stickyHeight:0,parsedTop:parseFloat(this.top,10),position:"static"}},watch:{position:function(t){switch(this.child.style.position=t,t){case"sticky":this.child.style.position="fixed",this.child.style.top=this.top;break;case"absolute":this.child.style.position="absolute",this.child.style.top="auto",this.child.style.bottom="0";break;case"static":default:this.child.style.position="static"}}},methods:{scrollHandler:function(){var t=this.$el.getBoundingClientRect(),e=this.$el.parentElement.getBoundingClientRect(),n=t.top>this.parsedTop,i=e.bottom<this.parsedTop+this.stickyHeight;n?this.position="static":i?this.position="absolute":this.position="sticky"}},render:function(t){return t("div",{class:"sticky",style:{top:this.top,bottom:this.bottom,zIndex:this.zIndex}},[this.$slots.default,t("div",{style:{clear:"both",height:"1px"}},[])])},mounted:function(){var t=this;this.$nextTick(function(){var e=window.getComputedStyle(t.$el),n=e.position,i=n.indexOf("sticky")>-1,o=t.$el.firstElementChild;!i&&o&&(t.child=o,o.style.zIndex=t.zIndex,t.stickyHeight=parseFloat(e.height,10),t.$el.style.position="static",t.$el.style.height=e.height,window.addEventListener("scroll",t.scrollHandler,!0),t.scrollHandler())})}}},function(t,e,n){e=t.exports=n(2)(),e.push([t.id,".sticky{position:-webkit-sticky;position:sticky}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var s=this[o][0];"number"==typeof s&&(i[s]=!0)}for(o=0;o<e.length;o++){var r=e[o];"number"==typeof r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},function(t,e,n){function i(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=d[i.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](i.parts[s]);for(;s<i.parts.length;s++)o.parts.push(c(i.parts[s],e))}else{for(var r=[],s=0;s<i.parts.length;s++)r.push(c(i.parts[s],e));d[i.id]={id:i.id,refs:1,parts:r}}}}function o(t){for(var e=[],n={},i=0;i<t.length;i++){var o=t[i],s=o[0],r=o[1],a=o[2],l=o[3],c={css:r,media:a,sourceMap:l};n[s]?n[s].parts.push(c):e.push(n[s]={id:s,parts:[c]})}return e}function s(t,e){var n=y(),i=g[g.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function r(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",s(t,e),e}function l(t){var e=document.createElement("link");return e.rel="stylesheet",s(t,e),e}function c(t,e){var n,i,o;if(e.singleton){var s=b++;n=m||(m=a(e)),i=u.bind(null,n,s,!1),o=u.bind(null,n,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(e),i=f.bind(null,n),o=function(){r(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(e),i=p.bind(null,n),o=function(){r(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}function u(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var s=document.createTextNode(o),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function p(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function f(t,e){var n=e.css,i=e.sourceMap;i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}var d={},h=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),y=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,b=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=v()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=o(t);return i(n,e),function(t){for(var s=[],r=0;r<n.length;r++){var a=n[r],l=d[a.id];l.refs--,s.push(l)}if(t){var c=o(t);i(c,e)}for(var r=0;r<s.length;r++){var l=s[r];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete d[l.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var i=n(1);"string"==typeof i&&(i=[[t.id,i,""]]);n(3)(i,{});i.locals&&(t.exports=i.locals)}])});