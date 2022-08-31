/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-csscalc-objectfit-addtest-domprefixes-prefixes-setclasses-testprop-teststyles !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,l;for(var a in C)if(C.hasOwnProperty(a)){if(e=[],n=C[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],l=s.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),_.push((o?"":"no-")+l.join("-"))}}function i(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?x.className.baseVal=n:x.className=n)}function s(e,n){if("object"==typeof e)for(var t in e)T(e,t)&&s(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;n="function"==typeof n?n():n,1==r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),i([(n&&0!=n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function l(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(){var e=n.body;return e||(e=a(b?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var i,s,l,f,c="modernizr",p=a("div"),d=u();if(parseInt(r,10))for(;r--;)l=a("div"),l.id=o?o[r]:c+(r+1),p.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+c,(d.fake?d:p).appendChild(i),d.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",f=x.style.overflow,x.style.overflow="hidden",x.appendChild(d)),s=t(p,e),d.fake?(d.parentNode.removeChild(d),x.style.overflow=f,x.offsetHeight):p.parentNode.removeChild(p),!!s}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var s=i.error?"error":"log";i[s].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function h(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(n[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return t}function m(e,n,o,i){function s(){c&&(delete E.style,delete E.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=h(e,o);if(!r(u,"undefined"))return u}for(var c,p,d,m,v,g=["modernizr","tspan","samp"];!E.style&&g.length;)c=!0,E.modElem=a(g.shift()),E.style=E.modElem.style;for(d=e.length,p=0;d>p;p++)if(m=e[p],v=E.style[m],l(m,"-")&&(m=f(m)),E.style[m]!==t){if(i||r(o,"undefined"))return s(),"pfx"==n?m:!0;try{E.style[m]=o}catch(y){}if(E.style[m]!=v)return s(),"pfx"==n?m:!0}return s(),!1}function v(e,n){return function(){return e.apply(n,arguments)}}function g(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?v(o,t||n):o);return!1}function y(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+N.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?m(l,n,o,i):(l=(e+" "+j.join(s+" ")+s).split(" "),g(l,n,t))}var _=[],C=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var S=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=S;var x=n.documentElement,b="svg"===x.nodeName.toLowerCase(),P="Moz O ms Webkit",j=w._config.usePrefixes?P.toLowerCase().split(" "):[];w._domPrefixes=j;var T;!function(){var e={}.hasOwnProperty;T=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),w._l={},w.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=s});var z=(w.testStyles=c,{elem:a("modernizr")});Modernizr._q.push(function(){delete z.elem});var E={style:z.elem.style};Modernizr._q.unshift(function(){delete E.style});var N=(w.testProp=function(e,n,r){return m([e],t,n,r)},w._config.usePrefixes?P.split(" "):[]);w._cssomPrefixes=N;var L=function(n){var r,o=S.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var l=S[s],a=l.toUpperCase()+"_"+r;if(a in i)return"@-"+l.toLowerCase()+"-"+n}return!1};w.atRule=L,w.testAllProps=y;var O=w.prefixed=function(e,n,t){return 0===e.indexOf("@")?L(e):(-1!=e.indexOf("-")&&(e=f(e)),n?y(e,n,t):y(e,"pfx"))};Modernizr.addTest("objectfit",!!O("objectFit"),{aliases:["object-fit"]}),Modernizr.addTest("csscalc",function(){var e="width:",n="calc(10px);",t=a("a");return t.style.cssText=e+S.join(n+e),!!t.style.length}),o(),i(_),delete w.addTest,delete w.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);

/**
 * clip-path support
 */
 (function(Modernizr){

    // Here are all the values we will test. If you want to use just one or two, comment out the lines of test you don't need.
    var tests = [
      { name: 'svg', value: 'url(#test)' }, // False positive in IE, supports SVG clip-path, but not on HTML element
      { name: 'inset', value: 'inset(10px 20px 30px 40px)' },
      { name: 'circle', value: 'circle(60px at center)' },
      { name: 'ellipse', value: 'ellipse(50% 50% at 50% 50%)' },
      { name: 'polygon', value: 'polygon(50% 0%, 0% 100%, 100% 100%)' }
    ];

    var t = 0,
        name, value, prop;

    for (; t < tests.length; t++) {
      name = tests[t].name;
      value = tests[t].value;
      Modernizr.addTest('cssclippath' + name, function(){
        // Try using window.CSS.supports
        if ( 'CSS' in window && 'supports' in window.CSS ) {
          for (var i = 0; i < Modernizr._prefixes.length; i++) {
            prop = Modernizr._prefixes[i] + 'clip-path'

            if ( window.CSS.supports(prop,value) ) { return true; }
          }
          return false;
        }
        // Otherwise, use Modernizr.testStyles and examine the property manually
        return Modernizr.testStyles('#modernizr { '+Modernizr._prefixes.join('clip-path:'+value+'; ')+' }',function(elem, rule) {
          var style = getComputedStyle(elem),
              clip = style.clipPath;

          if ( !clip || clip == "none" ) {
            clip = false;

            for (var i = 0; i < Modernizr._domPrefixes.length; i++) {
              test = Modernizr._domPrefixes[i] + 'ClipPath';
              if ( style[test] && style[test] !== "none" ) {
                clip = true;
                break;
              }
            }
          }

          return Modernizr.testProp('clipPath') && clip;
        });
      });

    }

  })(Modernizr);
