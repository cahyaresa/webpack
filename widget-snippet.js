var el;

// hack for otomotif
if (window.location.pathname.indexOf("/otomotif") == 0) {
  el = document.getElementsByClassName("astra-auto-header")[0]; if (el != undefined) el.remove();
  el = document.getElementsByClassName("__main")[0]; if (el != undefined) el.style.paddingTop = "0";
  el = document.getElementsByTagName('footer')[0]; if (el != undefined) el.remove();
}

// hack for property
if (window.location.pathname.indexOf("/properti") == 0) {
  el = document.getElementsByClassName("astra-property-header")[0]; if (el != undefined) el.remove();
  el = document.getElementsByClassName("__main")[0]; if (el != undefined) el.style.paddingTop = "0";
  el = document.getElementsByTagName('footer')[0]; if (el != undefined) el.remove();
}

// hack for suku-cadang
if (window.location.pathname.indexOf("/suku-cadang") == 0) {
  el = document.getElementsByTagName("header")[0]; if (el != undefined) el.remove();
  el = document.getElementsByTagName('footer')[0]; if (el != undefined) el.remove();
}

// hack for blog
if (window.location.pathname.indexOf("/blog") == 0) {
  el = document.getElementsByTagName("header")[0]; if (el != undefined) el.remove();
  el = document.getElementsByTagName('footer')[0]; if (el != undefined) el.remove();
}

// prepare element for header
el = document.createElement("div"); el.className = "seva-global-header";
document.body.prepend(el);

// prepare element for footer
el = document.createElement("div"); el.className = "seva-global-footer";
document.body.append(el);


// prepare ga if not set
if (typeof(window["ga"] != "function")) { window.ga = function(){}; window.ga.getall = function(){return [];} }
if (typeof window["dataLayer"] != "object") { window.dataLayer = []; }
window.activateGTM = function(){}

// some little libs
var addJs = function ( src ) { var s = document.createElement( "script" ); s.setAttribute( "src", src ); document.body.appendChild( s ); }
var addCss = function ( src ) { var link = document.createElement("link");link.rel = "stylesheet";link.type = "text/css";link.href = src; document.getElementsByTagName("head")[0].appendChild(link); }

// chunk loader
!function(o){function e(e){for(var t,c,r=e[0],n=e[1],f=e[2],d=0,a=[];d<r.length;d++)c=r[d],s[c]&&a.push(s[c][0]),s[c]=0;for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(o[t]=n[t]);for(b&&b(e);a.length;)a.shift()();return i.push.apply(i,f||[]),u()}function u(){for(var e,t=0;t<i.length;t++){for(var c=i[t],r=!0,n=1;n<c.length;n++){var f=c[n];0!==s[f]&&(r=!1)}r&&(i.splice(t--,1),e=p(p.s=c[0]))}return e}var c={},l={10:0},s={10:0},i=[];function p(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.e=function(i){var e=[];l[i]?e.push(l[i]):0!==l[i]&&{0:1,2:1}[i]&&e.push(l[i]=new Promise(function(e,r){for(var t="https://prodlike1-environment.seva.id/static/css/"+({}[i]||i)+"."+{0:"7703ac22",1:"31d6cfe0",2:"d9bec2eb",3:"31d6cfe0",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0",12:"31d6cfe0",13:"31d6cfe0",14:"31d6cfe0",15:"31d6cfe0",16:"31d6cfe0",17:"31d6cfe0",18:"31d6cfe0",19:"31d6cfe0",20:"31d6cfe0",21:"31d6cfe0",22:"31d6cfe0",23:"31d6cfe0",24:"31d6cfe0",25:"31d6cfe0",26:"31d6cfe0",27:"31d6cfe0",28:"31d6cfe0",29:"31d6cfe0",30:"31d6cfe0",31:"31d6cfe0",32:"31d6cfe0",33:"31d6cfe0",34:"31d6cfe0",35:"31d6cfe0",36:"31d6cfe0",37:"31d6cfe0",38:"31d6cfe0",39:"31d6cfe0",40:"31d6cfe0",41:"31d6cfe0",42:"31d6cfe0",43:"31d6cfe0",44:"31d6cfe0",45:"31d6cfe0",46:"31d6cfe0",47:"31d6cfe0",48:"31d6cfe0",49:"31d6cfe0"}[i]+".chunk.css",n=p.p+t,c=document.getElementsByTagName("link"),f=0;f<c.length;f++){var d=(o=c[f]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(d===t||d===n))return e()}var a=document.getElementsByTagName("style");for(f=0;f<a.length;f++){var o;if((d=(o=a[f]).getAttribute("data-href"))===t||d===n)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var t=e&&e.target&&e.target.src||n,c=new Error("Loading CSS chunk "+i+" failed.\n("+t+")");c.request=t,delete l[i],u.parentNode.removeChild(u),r(c)},u.href=n,document.getElementsByTagName("head")[0].appendChild(u)}).then(function(){l[i]=0}));var c=s[i];if(0!==c)if(c)e.push(c[2]);else{var t=new Promise(function(e,t){c=s[i]=[e,t]});e.push(c[2]=t);var r,f=document.createElement("script");f.charset="utf-8",f.timeout=120,p.nc&&f.setAttribute("nonce",p.nc),f.src=p.p+"https://prodlike1-environment.seva.id/static/js/"+({}[i]||i)+"."+{0:"65d9f099",1:"b121712d",2:"2df903dd",3:"973f6767",4:"f11cbd22",5:"0997c5ca",6:"8ccf5d89",7:"374f55c9",8:"a3c00b03",12:"d02905a7",13:"2f93ec3d",14:"1d3493c3",15:"2795c9be",16:"14788c03",17:"02183d63",18:"5327024b",19:"172caef6",20:"91713b33",21:"3a8c5d70",22:"d76dd391",23:"aa4fb710",24:"0d3fd0d6",25:"66c476c8",26:"202b71d8",27:"d22efaef",28:"117115e6",29:"93c3355c",30:"4a17a630",31:"856341ec",32:"efa7109b",33:"9333f3cc",34:"a812fda9",35:"bab77b46",36:"9a9da171",37:"8d24c28c",38:"21a0f47d",39:"6a97a19c",40:"e6b42164",41:"7d4779a0",42:"f2779663",43:"f0c81b84",44:"ce73bfff",45:"26c82cde",46:"85a90135",47:"26e60ec4",48:"08ddde43",49:"54dafdc6"}[i]+".chunk.js",r=function(e){f.onerror=f.onload=null,clearTimeout(d);var t=s[i];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,n=new Error("Loading chunk "+i+" failed.\n("+c+": "+r+")");n.type=c,n.request=r,t[1](n)}s[i]=void 0}};var d=setTimeout(function(){r({type:"timeout",target:f})},12e4);f.onerror=f.onload=r,document.head.appendChild(f)}return Promise.all(e)},p.m=o,p.c=c,p.d=function(e,t,c){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(t,e){if(1&e&&(t=p(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(p.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)p.d(c,r,function(e){return t[e]}.bind(null,r));return c},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="",p.oe=function(e){throw console.error(e),e};var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var n=0;n<t.length;n++)e(t[n]);var b=r;u()}([])

// load files
addJs("https://prodlike1-environment.seva.id/static/js/11.1a082f36.chunk.js");addJs("https://prodlike1-environment.seva.id/static/js/main.c82aff82.chunk.js");
addCss("https://prodlike1-environment.seva.id/static/css/11.85439e61.chunk.css");addCss("https://prodlike1-environment.seva.id/static/css/main.270ea2d6.chunk.css");
  
// load files for prd site