/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/js/luge.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/bowser/es5.js":
/*!*************************************!*\
  !*** ../node_modules/bowser/es5.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=90)}({17:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=r(18),i=function(){function e(){}return e.getFirstMatch=function(e,t){var r=t.match(e);return r&&r.length>0&&r[1]||""},e.getSecondMatch=function(e,t){var r=t.match(e);return r&&r.length>1&&r[2]||""},e.matchAndReturnConst=function(e,t,r){if(e.test(t))return r},e.getWindowsVersionName=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}},e.getMacOSVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),10===t[0])switch(t[1]){case 5:return"Leopard";case 6:return"Snow Leopard";case 7:return"Lion";case 8:return"Mountain Lion";case 9:return"Mavericks";case 10:return"Yosemite";case 11:return"El Capitan";case 12:return"Sierra";case 13:return"High Sierra";case 14:return"Mojave";case 15:return"Catalina";default:return}},e.getAndroidVersionName=function(e){var t=e.split(".").splice(0,2).map((function(e){return parseInt(e,10)||0}));if(t.push(0),!(1===t[0]&&t[1]<5))return 1===t[0]&&t[1]<6?"Cupcake":1===t[0]&&t[1]>=6?"Donut":2===t[0]&&t[1]<2?"Eclair":2===t[0]&&2===t[1]?"Froyo":2===t[0]&&t[1]>2?"Gingerbread":3===t[0]?"Honeycomb":4===t[0]&&t[1]<1?"Ice Cream Sandwich":4===t[0]&&t[1]<4?"Jelly Bean":4===t[0]&&t[1]>=4?"KitKat":5===t[0]?"Lollipop":6===t[0]?"Marshmallow":7===t[0]?"Nougat":8===t[0]?"Oreo":9===t[0]?"Pie":void 0},e.getVersionPrecision=function(e){return e.split(".").length},e.compareVersions=function(t,r,n){void 0===n&&(n=!1);var i=e.getVersionPrecision(t),s=e.getVersionPrecision(r),a=Math.max(i,s),o=0,u=e.map([t,r],(function(t){var r=a-e.getVersionPrecision(t),n=t+new Array(r+1).join(".0");return e.map(n.split("."),(function(e){return new Array(20-e.length).join("0")+e})).reverse()}));for(n&&(o=a-Math.min(i,s)),a-=1;a>=o;){if(u[0][a]>u[1][a])return 1;if(u[0][a]===u[1][a]){if(a===o)return 0;a-=1}else if(u[0][a]<u[1][a])return-1}},e.map=function(e,t){var r,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r+=1)n.push(t(e[r]));return n},e.find=function(e,t){var r,n;if(Array.prototype.find)return Array.prototype.find.call(e,t);for(r=0,n=e.length;r<n;r+=1){var i=e[r];if(t(i,r))return i}},e.assign=function(e){for(var t,r,n=e,i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];if(Object.assign)return Object.assign.apply(Object,[e].concat(s));var o=function(){var e=s[t];"object"==typeof e&&null!==e&&Object.keys(e).forEach((function(t){n[t]=e[t]}))};for(t=0,r=s.length;t<r;t+=1)o();return e},e.getBrowserAlias=function(e){return n.BROWSER_ALIASES_MAP[e]},e.getBrowserTypeByAlias=function(e){return n.BROWSER_MAP[e]||""},e}();t.default=i,e.exports=t.default},18:function(e,t,r){"use strict";t.__esModule=!0,t.ENGINE_MAP=t.OS_MAP=t.PLATFORMS_MAP=t.BROWSER_MAP=t.BROWSER_ALIASES_MAP=void 0;t.BROWSER_ALIASES_MAP={"Amazon Silk":"amazon_silk","Android Browser":"android",Bada:"bada",BlackBerry:"blackberry",Chrome:"chrome",Chromium:"chromium",Electron:"electron",Epiphany:"epiphany",Firefox:"firefox",Focus:"focus",Generic:"generic","Google Search":"google_search",Googlebot:"googlebot","Internet Explorer":"ie","K-Meleon":"k_meleon",Maxthon:"maxthon","Microsoft Edge":"edge","MZ Browser":"mz","NAVER Whale Browser":"naver",Opera:"opera","Opera Coast":"opera_coast",PhantomJS:"phantomjs",Puffin:"puffin",QupZilla:"qupzilla",QQ:"qq",QQLite:"qqlite",Safari:"safari",Sailfish:"sailfish","Samsung Internet for Android":"samsung_internet",SeaMonkey:"seamonkey",Sleipnir:"sleipnir",Swing:"swing",Tizen:"tizen","UC Browser":"uc",Vivaldi:"vivaldi","WebOS Browser":"webos",WeChat:"wechat","Yandex Browser":"yandex",Roku:"roku"};t.BROWSER_MAP={amazon_silk:"Amazon Silk",android:"Android Browser",bada:"Bada",blackberry:"BlackBerry",chrome:"Chrome",chromium:"Chromium",electron:"Electron",epiphany:"Epiphany",firefox:"Firefox",focus:"Focus",generic:"Generic",googlebot:"Googlebot",google_search:"Google Search",ie:"Internet Explorer",k_meleon:"K-Meleon",maxthon:"Maxthon",edge:"Microsoft Edge",mz:"MZ Browser",naver:"NAVER Whale Browser",opera:"Opera",opera_coast:"Opera Coast",phantomjs:"PhantomJS",puffin:"Puffin",qupzilla:"QupZilla",qq:"QQ Browser",qqlite:"QQ Browser Lite",safari:"Safari",sailfish:"Sailfish",samsung_internet:"Samsung Internet for Android",seamonkey:"SeaMonkey",sleipnir:"Sleipnir",swing:"Swing",tizen:"Tizen",uc:"UC Browser",vivaldi:"Vivaldi",webos:"WebOS Browser",wechat:"WeChat",yandex:"Yandex Browser"};t.PLATFORMS_MAP={tablet:"tablet",mobile:"mobile",desktop:"desktop",tv:"tv"};t.OS_MAP={WindowsPhone:"Windows Phone",Windows:"Windows",MacOS:"macOS",iOS:"iOS",Android:"Android",WebOS:"WebOS",BlackBerry:"BlackBerry",Bada:"Bada",Tizen:"Tizen",Linux:"Linux",ChromeOS:"Chrome OS",PlayStation4:"PlayStation 4",Roku:"Roku"};t.ENGINE_MAP={EdgeHTML:"EdgeHTML",Blink:"Blink",Trident:"Trident",Presto:"Presto",Gecko:"Gecko",WebKit:"WebKit"}},90:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(91))&&n.__esModule?n:{default:n},s=r(18);function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){}var t,r,n;return e.getParser=function(e,t){if(void 0===t&&(t=!1),"string"!=typeof e)throw new Error("UserAgent should be a string");return new i.default(e,t)},e.parse=function(e){return new i.default(e).getResult()},t=e,n=[{key:"BROWSER_MAP",get:function(){return s.BROWSER_MAP}},{key:"ENGINE_MAP",get:function(){return s.ENGINE_MAP}},{key:"OS_MAP",get:function(){return s.OS_MAP}},{key:"PLATFORMS_MAP",get:function(){return s.PLATFORMS_MAP}}],(r=null)&&a(t.prototype,r),n&&a(t,n),e}();t.default=o,e.exports=t.default},91:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=u(r(92)),i=u(r(93)),s=u(r(94)),a=u(r(95)),o=u(r(17));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(){function e(e,t){if(void 0===t&&(t=!1),null==e||""===e)throw new Error("UserAgent parameter can't be empty");this._ua=e,this.parsedResult={},!0!==t&&this.parse()}var t=e.prototype;return t.getUA=function(){return this._ua},t.test=function(e){return e.test(this._ua)},t.parseBrowser=function(){var e=this;this.parsedResult.browser={};var t=o.default.find(n.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.browser=t.describe(this.getUA())),this.parsedResult.browser},t.getBrowser=function(){return this.parsedResult.browser?this.parsedResult.browser:this.parseBrowser()},t.getBrowserName=function(e){return e?String(this.getBrowser().name).toLowerCase()||"":this.getBrowser().name||""},t.getBrowserVersion=function(){return this.getBrowser().version},t.getOS=function(){return this.parsedResult.os?this.parsedResult.os:this.parseOS()},t.parseOS=function(){var e=this;this.parsedResult.os={};var t=o.default.find(i.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.os=t.describe(this.getUA())),this.parsedResult.os},t.getOSName=function(e){var t=this.getOS().name;return e?String(t).toLowerCase()||"":t||""},t.getOSVersion=function(){return this.getOS().version},t.getPlatform=function(){return this.parsedResult.platform?this.parsedResult.platform:this.parsePlatform()},t.getPlatformType=function(e){void 0===e&&(e=!1);var t=this.getPlatform().type;return e?String(t).toLowerCase()||"":t||""},t.parsePlatform=function(){var e=this;this.parsedResult.platform={};var t=o.default.find(s.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.platform=t.describe(this.getUA())),this.parsedResult.platform},t.getEngine=function(){return this.parsedResult.engine?this.parsedResult.engine:this.parseEngine()},t.getEngineName=function(e){return e?String(this.getEngine().name).toLowerCase()||"":this.getEngine().name||""},t.parseEngine=function(){var e=this;this.parsedResult.engine={};var t=o.default.find(a.default,(function(t){if("function"==typeof t.test)return t.test(e);if(t.test instanceof Array)return t.test.some((function(t){return e.test(t)}));throw new Error("Browser's test function is not valid")}));return t&&(this.parsedResult.engine=t.describe(this.getUA())),this.parsedResult.engine},t.parse=function(){return this.parseBrowser(),this.parseOS(),this.parsePlatform(),this.parseEngine(),this},t.getResult=function(){return o.default.assign({},this.parsedResult)},t.satisfies=function(e){var t=this,r={},n=0,i={},s=0;if(Object.keys(e).forEach((function(t){var a=e[t];"string"==typeof a?(i[t]=a,s+=1):"object"==typeof a&&(r[t]=a,n+=1)})),n>0){var a=Object.keys(r),u=o.default.find(a,(function(e){return t.isOS(e)}));if(u){var d=this.satisfies(r[u]);if(void 0!==d)return d}var c=o.default.find(a,(function(e){return t.isPlatform(e)}));if(c){var f=this.satisfies(r[c]);if(void 0!==f)return f}}if(s>0){var l=Object.keys(i),h=o.default.find(l,(function(e){return t.isBrowser(e,!0)}));if(void 0!==h)return this.compareVersion(i[h])}},t.isBrowser=function(e,t){void 0===t&&(t=!1);var r=this.getBrowserName().toLowerCase(),n=e.toLowerCase(),i=o.default.getBrowserTypeByAlias(n);return t&&i&&(n=i.toLowerCase()),n===r},t.compareVersion=function(e){var t=[0],r=e,n=!1,i=this.getBrowserVersion();if("string"==typeof i)return">"===e[0]||"<"===e[0]?(r=e.substr(1),"="===e[1]?(n=!0,r=e.substr(2)):t=[],">"===e[0]?t.push(1):t.push(-1)):"="===e[0]?r=e.substr(1):"~"===e[0]&&(n=!0,r=e.substr(1)),t.indexOf(o.default.compareVersions(i,r,n))>-1},t.isOS=function(e){return this.getOSName(!0)===String(e).toLowerCase()},t.isPlatform=function(e){return this.getPlatformType(!0)===String(e).toLowerCase()},t.isEngine=function(e){return this.getEngineName(!0)===String(e).toLowerCase()},t.is=function(e,t){return void 0===t&&(t=!1),this.isBrowser(e,t)||this.isOS(e)||this.isPlatform(e)},t.some=function(e){var t=this;return void 0===e&&(e=[]),e.some((function(e){return t.is(e)}))},e}();t.default=d,e.exports=t.default},92:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n};var s=/version\/(\d+(\.?_?\d+)+)/i,a=[{test:[/googlebot/i],describe:function(e){var t={name:"Googlebot"},r=i.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/opera/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opr\/|opios/i],describe:function(e){var t={name:"Opera"},r=i.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/SamsungBrowser/i],describe:function(e){var t={name:"Samsung Internet for Android"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Whale/i],describe:function(e){var t={name:"NAVER Whale Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MZBrowser/i],describe:function(e){var t={name:"MZ Browser"},r=i.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/focus/i],describe:function(e){var t={name:"Focus"},r=i.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/swing/i],describe:function(e){var t={name:"Swing"},r=i.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/coast/i],describe:function(e){var t={name:"Opera Coast"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/opt\/\d+(?:.?_?\d+)+/i],describe:function(e){var t={name:"Opera Touch"},r=i.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/yabrowser/i],describe:function(e){var t={name:"Yandex Browser"},r=i.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/ucbrowser/i],describe:function(e){var t={name:"UC Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/Maxthon|mxios/i],describe:function(e){var t={name:"Maxthon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/epiphany/i],describe:function(e){var t={name:"Epiphany"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/puffin/i],describe:function(e){var t={name:"Puffin"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sleipnir/i],describe:function(e){var t={name:"Sleipnir"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/k-meleon/i],describe:function(e){var t={name:"K-Meleon"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/micromessenger/i],describe:function(e){var t={name:"WeChat"},r=i.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qqbrowser/i],describe:function(e){var t={name:/qqbrowserlite/i.test(e)?"QQ Browser Lite":"QQ Browser"},r=i.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/msie|trident/i],describe:function(e){var t={name:"Internet Explorer"},r=i.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/\sedg\//i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/edg([ea]|ios)/i],describe:function(e){var t={name:"Microsoft Edge"},r=i.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/vivaldi/i],describe:function(e){var t={name:"Vivaldi"},r=i.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/seamonkey/i],describe:function(e){var t={name:"SeaMonkey"},r=i.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/sailfish/i],describe:function(e){var t={name:"Sailfish"},r=i.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i,e);return r&&(t.version=r),t}},{test:[/silk/i],describe:function(e){var t={name:"Amazon Silk"},r=i.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/phantom/i],describe:function(e){var t={name:"PhantomJS"},r=i.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/slimerjs/i],describe:function(e){var t={name:"SlimerJS"},r=i.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t={name:"BlackBerry"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t={name:"WebOS Browser"},r=i.default.getFirstMatch(s,e)||i.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/bada/i],describe:function(e){var t={name:"Bada"},r=i.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/tizen/i],describe:function(e){var t={name:"Tizen"},r=i.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/qupzilla/i],describe:function(e){var t={name:"QupZilla"},r=i.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/firefox|iceweasel|fxios/i],describe:function(e){var t={name:"Firefox"},r=i.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/electron/i],describe:function(e){var t={name:"Electron"},r=i.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/MiuiBrowser/i],describe:function(e){var t={name:"Miui"},r=i.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/chromium/i],describe:function(e){var t={name:"Chromium"},r=i.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i,e)||i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/chrome|crios|crmo/i],describe:function(e){var t={name:"Chrome"},r=i.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/GSA/i],describe:function(e){var t={name:"Google Search"},r=i.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t={name:"Android Browser"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/playstation 4/i],describe:function(e){var t={name:"PlayStation 4"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/safari|applewebkit/i],describe:function(e){var t={name:"Safari"},r=i.default.getFirstMatch(s,e);return r&&(t.version=r),t}},{test:[/.*/i],describe:function(e){var t=-1!==e.search("\\(")?/^(.*)\/(.*)[ \t]\((.*)/:/^(.*)\/(.*) /;return{name:i.default.getFirstMatch(t,e),version:i.default.getSecondMatch(t,e)}}}];t.default=a,e.exports=t.default},93:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/Roku\/DVP/],describe:function(e){var t=i.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i,e);return{name:s.OS_MAP.Roku,version:t}}},{test:[/windows phone/i],describe:function(e){var t=i.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.WindowsPhone,version:t}}},{test:[/windows /i],describe:function(e){var t=i.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i,e),r=i.default.getWindowsVersionName(t);return{name:s.OS_MAP.Windows,version:t,versionName:r}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(e){var t={name:s.OS_MAP.iOS},r=i.default.getSecondMatch(/(Version\/)(\d[\d.]+)/,e);return r&&(t.version=r),t}},{test:[/macintosh/i],describe:function(e){var t=i.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i,e).replace(/[_\s]/g,"."),r=i.default.getMacOSVersionName(t),n={name:s.OS_MAP.MacOS,version:t};return r&&(n.versionName=r),n}},{test:[/(ipod|iphone|ipad)/i],describe:function(e){var t=i.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i,e).replace(/[_\s]/g,".");return{name:s.OS_MAP.iOS,version:t}}},{test:function(e){var t=!e.test(/like android/i),r=e.test(/android/i);return t&&r},describe:function(e){var t=i.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i,e),r=i.default.getAndroidVersionName(t),n={name:s.OS_MAP.Android,version:t};return r&&(n.versionName=r),n}},{test:[/(web|hpw)[o0]s/i],describe:function(e){var t=i.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i,e),r={name:s.OS_MAP.WebOS};return t&&t.length&&(r.version=t),r}},{test:[/blackberry|\bbb\d+/i,/rim\stablet/i],describe:function(e){var t=i.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i,e)||i.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i,e)||i.default.getFirstMatch(/\bbb(\d+)/i,e);return{name:s.OS_MAP.BlackBerry,version:t}}},{test:[/bada/i],describe:function(e){var t=i.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Bada,version:t}}},{test:[/tizen/i],describe:function(e){var t=i.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.Tizen,version:t}}},{test:[/linux/i],describe:function(){return{name:s.OS_MAP.Linux}}},{test:[/CrOS/],describe:function(){return{name:s.OS_MAP.ChromeOS}}},{test:[/PlayStation 4/],describe:function(e){var t=i.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i,e);return{name:s.OS_MAP.PlayStation4,version:t}}}];t.default=a,e.exports=t.default},94:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:[/googlebot/i],describe:function(){return{type:"bot",vendor:"Google"}}},{test:[/huawei/i],describe:function(e){var t=i.default.getFirstMatch(/(can-l01)/i,e)&&"Nova",r={type:s.PLATFORMS_MAP.mobile,vendor:"Huawei"};return t&&(r.model=t),r}},{test:[/nexus\s*(?:7|8|9|10).*/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Nexus"}}},{test:[/ipad/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/Macintosh(.*?) FxiOS(.*?)\//],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Apple",model:"iPad"}}},{test:[/kftt build/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon",model:"Kindle Fire HD 7"}}},{test:[/silk/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet,vendor:"Amazon"}}},{test:[/tablet(?! pc)/i],describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){var t=e.test(/ipod|iphone/i),r=e.test(/like (ipod|iphone)/i);return t&&!r},describe:function(e){var t=i.default.getFirstMatch(/(ipod|iphone)/i,e);return{type:s.PLATFORMS_MAP.mobile,vendor:"Apple",model:t}}},{test:[/nexus\s*[0-6].*/i,/galaxy nexus/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Nexus"}}},{test:[/[^-]mobi/i],describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"blackberry"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"BlackBerry"}}},{test:function(e){return"bada"===e.getBrowserName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"windows phone"===e.getBrowserName()},describe:function(){return{type:s.PLATFORMS_MAP.mobile,vendor:"Microsoft"}}},{test:function(e){var t=Number(String(e.getOSVersion()).split(".")[0]);return"android"===e.getOSName(!0)&&t>=3},describe:function(){return{type:s.PLATFORMS_MAP.tablet}}},{test:function(e){return"android"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.mobile}}},{test:function(e){return"macos"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop,vendor:"Apple"}}},{test:function(e){return"windows"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"linux"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.desktop}}},{test:function(e){return"playstation 4"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}},{test:function(e){return"roku"===e.getOSName(!0)},describe:function(){return{type:s.PLATFORMS_MAP.tv}}}];t.default=a,e.exports=t.default},95:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n,i=(n=r(17))&&n.__esModule?n:{default:n},s=r(18);var a=[{test:function(e){return"microsoft edge"===e.getBrowserName(!0)},describe:function(e){if(/\sedg\//i.test(e))return{name:s.ENGINE_MAP.Blink};var t=i.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i,e);return{name:s.ENGINE_MAP.EdgeHTML,version:t}}},{test:[/trident/i],describe:function(e){var t={name:s.ENGINE_MAP.Trident},r=i.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){return e.test(/presto/i)},describe:function(e){var t={name:s.ENGINE_MAP.Presto},r=i.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:function(e){var t=e.test(/gecko/i),r=e.test(/like gecko/i);return t&&!r},describe:function(e){var t={name:s.ENGINE_MAP.Gecko},r=i.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}},{test:[/(apple)?webkit\/537\.36/i],describe:function(){return{name:s.ENGINE_MAP.Blink}}},{test:[/(apple)?webkit/i],describe:function(e){var t={name:s.ENGINE_MAP.WebKit},r=i.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i,e);return r&&(t.version=r),t}}];t.default=a,e.exports=t.default}})}));

/***/ }),

/***/ "../node_modules/core-js/internals/a-function.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/a-function.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/a-possible-prototype.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/a-possible-prototype.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/advance-string-index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/advance-string-index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "../node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "../node_modules/core-js/internals/an-instance.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/an-instance.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/an-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/an-object.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-for-each.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/array-for-each.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../node_modules/core-js/internals/array-method-uses-to-length.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "../node_modules/core-js/internals/array-from.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/array-from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../node_modules/core-js/internals/function-bind-context.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var callWithSafeIterationClosing = __webpack_require__(/*! ../internals/call-with-safe-iteration-closing */ "../node_modules/core-js/internals/call-with-safe-iteration-closing.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "../node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "../node_modules/core-js/internals/create-property.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../node_modules/core-js/internals/get-iterator-method.js");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-includes.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/array-includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "../node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-iteration.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/array-iteration.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../node_modules/core-js/internals/function-bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "../node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-method-has-species-support.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js/internals/array-method-has-species-support.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-method-is-strict.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/array-method-is-strict.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-method-uses-to-length.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "../node_modules/core-js/internals/array-species-create.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/array-species-create.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "../node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "../node_modules/core-js/internals/call-with-safe-iteration-closing.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "../node_modules/core-js/internals/iterator-close.js");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/check-correctness-of-iteration.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "../node_modules/core-js/internals/classof-raw.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/classof-raw.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../node_modules/core-js/internals/classof.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/classof.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "../node_modules/core-js/internals/copy-constructor-properties.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/internals/copy-constructor-properties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "../node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/correct-prototype-getter.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/correct-prototype-getter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "../node_modules/core-js/internals/create-html.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/create-html.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

var quot = /"/g;

// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = String(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "../node_modules/core-js/internals/create-iterator-constructor.js":
/*!************************************************************************!*\
  !*** ../node_modules/core-js/internals/create-iterator-constructor.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "../node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "../node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "../node_modules/core-js/internals/create-non-enumerable-property.js":
/*!***************************************************************************!*\
  !*** ../node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../node_modules/core-js/internals/create-property-descriptor.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/internals/create-property-descriptor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../node_modules/core-js/internals/create-property.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/create-property.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "../node_modules/core-js/internals/define-iterator.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/define-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "../node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "../node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "../node_modules/core-js/internals/descriptors.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/descriptors.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "../node_modules/core-js/internals/document-create-element.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/document-create-element.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "../node_modules/core-js/internals/dom-iterables.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/dom-iterables.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "../node_modules/core-js/internals/engine-is-ios.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/engine-is-ios.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../node_modules/core-js/internals/engine-user-agent.js");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "../node_modules/core-js/internals/engine-is-node.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/engine-is-node.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "../node_modules/core-js/internals/engine-is-webos-webkit.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-is-webos-webkit.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../node_modules/core-js/internals/engine-user-agent.js");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "../node_modules/core-js/internals/engine-user-agent.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-user-agent.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "../node_modules/core-js/internals/engine-v8-version.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/engine-v8-version.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "../node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "../node_modules/core-js/internals/enum-bug-keys.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/enum-bug-keys.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "../node_modules/core-js/internals/export.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/export.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "../node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/fails.js":
/*!**************************************************!*\
  !*** ../node_modules/core-js/internals/fails.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "../node_modules/core-js/modules/es.regexp.exec.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "../node_modules/core-js/internals/regexp-exec.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "../node_modules/core-js/internals/function-bind-context.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/function-bind-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../node_modules/core-js/internals/get-built-in.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/get-built-in.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "../node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "../node_modules/core-js/internals/get-iterator-method.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/internals/get-iterator-method.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof */ "../node_modules/core-js/internals/classof.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js/internals/iterators.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "../node_modules/core-js/internals/get-substitution.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/internals/get-substitution.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");

var floor = Math.floor;
var replace = ''.replace;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

// https://tc39.es/ecma262/#sec-getsubstitution
module.exports = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace.call(replacement, symbols, function (match, ch) {
    var capture;
    switch (ch.charAt(0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return str.slice(0, position);
      case "'": return str.slice(tailPos);
      case '<':
        capture = namedCaptures[ch.slice(1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};


/***/ }),

/***/ "../node_modules/core-js/internals/global.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/global.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/core-js/internals/has.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/internals/has.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../node_modules/core-js/internals/hidden-keys.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/hidden-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../node_modules/core-js/internals/host-report-errors.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/internals/host-report-errors.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/html.js":
/*!*************************************************!*\
  !*** ../node_modules/core-js/internals/html.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "../node_modules/core-js/internals/ie8-dom-define.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/ie8-dom-define.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "../node_modules/core-js/internals/indexed-object.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/indexed-object.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "../node_modules/core-js/internals/inherit-if-required.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/internals/inherit-if-required.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "../node_modules/core-js/internals/object-set-prototype-of.js");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "../node_modules/core-js/internals/inspect-source.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/inspect-source.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "../node_modules/core-js/internals/internal-state.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/internal-state.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "../node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-array-iterator-method.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/is-array-iterator-method.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "../node_modules/core-js/internals/iterators.js");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-array.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/is-array.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-forced.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-forced.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "../node_modules/core-js/internals/is-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/is-object.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../node_modules/core-js/internals/is-pure.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/is-pure.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "../node_modules/core-js/internals/iterate.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/iterate.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var isArrayIteratorMethod = __webpack_require__(/*! ../internals/is-array-iterator-method */ "../node_modules/core-js/internals/is-array-iterator-method.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../node_modules/core-js/internals/function-bind-context.js");
var getIteratorMethod = __webpack_require__(/*! ../internals/get-iterator-method */ "../node_modules/core-js/internals/get-iterator-method.js");
var iteratorClose = __webpack_require__(/*! ../internals/iterator-close */ "../node_modules/core-js/internals/iterator-close.js");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "../node_modules/core-js/internals/iterator-close.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/iterator-close.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/iterators-core.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/internals/iterators-core.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "../node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "../node_modules/core-js/internals/iterators.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/iterators.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "../node_modules/core-js/internals/microtask.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/microtask.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var macrotask = __webpack_require__(/*! ../internals/task */ "../node_modules/core-js/internals/task.js").set;
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "../node_modules/core-js/internals/engine-is-ios.js");
var IS_WEBOS_WEBKIT = __webpack_require__(/*! ../internals/engine-is-webos-webkit */ "../node_modules/core-js/internals/engine-is-webos-webkit.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../node_modules/core-js/internals/engine-is-node.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "../node_modules/core-js/internals/native-promise-constructor.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/internals/native-promise-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

module.exports = global.Promise;


/***/ }),

/***/ "../node_modules/core-js/internals/native-symbol.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/native-symbol.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "../node_modules/core-js/internals/native-weak-map.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/native-weak-map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "../node_modules/core-js/internals/new-promise-capability.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/new-promise-capability.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/core-js/internals/a-function.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-create.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/internals/object-create.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "../node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "../node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-define-properties.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/object-define-properties.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "../node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-define-property.js":
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/internals/object-define-property.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "../node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "../node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "../node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-names.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-names.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "../node_modules/core-js/internals/object-get-prototype-of.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/object-get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "../node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "../node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "../node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-keys-internal.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/object-keys-internal.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "../node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "../node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "../node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-keys.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/object-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "../node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "../node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "../node_modules/core-js/internals/object-property-is-enumerable.js":
/*!**************************************************************************!*\
  !*** ../node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "../node_modules/core-js/internals/object-set-prototype-of.js":
/*!********************************************************************!*\
  !*** ../node_modules/core-js/internals/object-set-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "../node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "../node_modules/core-js/internals/object-to-string.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/internals/object-to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "../node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "../node_modules/core-js/internals/own-keys.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/own-keys.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "../node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "../node_modules/core-js/internals/path.js":
/*!*************************************************!*\
  !*** ../node_modules/core-js/internals/path.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "../node_modules/core-js/internals/perform.js":
/*!****************************************************!*\
  !*** ../node_modules/core-js/internals/perform.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/promise-resolve.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/internals/promise-resolve.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "../node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "../node_modules/core-js/internals/redefine-all.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/redefine-all.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "../node_modules/core-js/internals/redefine.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/internals/redefine.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "../node_modules/core-js/internals/regexp-exec-abstract.js":
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "../node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "../node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "../node_modules/core-js/internals/regexp-exec.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "../node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ "../node_modules/core-js/internals/regexp-sticky-helpers.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "../node_modules/core-js/internals/regexp-flags.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-flags.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "../node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(/*! ./fails */ "../node_modules/core-js/internals/fails.js");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "../node_modules/core-js/internals/require-object-coercible.js":
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/internals/require-object-coercible.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "../node_modules/core-js/internals/set-global.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/set-global.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "../node_modules/core-js/internals/set-species.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/set-species.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/set-to-string-tag.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/set-to-string-tag.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "../node_modules/core-js/internals/shared-key.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/shared-key.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "../node_modules/core-js/internals/shared-store.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/shared-store.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "../node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "../node_modules/core-js/internals/shared.js":
/*!***************************************************!*\
  !*** ../node_modules/core-js/internals/shared.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "../node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.2',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "../node_modules/core-js/internals/species-constructor.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/internals/species-constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "../node_modules/core-js/internals/string-html-forced.js":
/*!***************************************************************!*\
  !*** ../node_modules/core-js/internals/string-html-forced.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "../node_modules/core-js/internals/string-multibyte.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/internals/string-multibyte.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "../node_modules/core-js/internals/string-trim.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/string-trim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "../node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "../node_modules/core-js/internals/task.js":
/*!*************************************************!*\
  !*** ../node_modules/core-js/internals/task.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "../node_modules/core-js/internals/function-bind-context.js");
var html = __webpack_require__(/*! ../internals/html */ "../node_modules/core-js/internals/html.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "../node_modules/core-js/internals/document-create-element.js");
var IS_IOS = __webpack_require__(/*! ../internals/engine-is-ios */ "../node_modules/core-js/internals/engine-is-ios.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../node_modules/core-js/internals/engine-is-node.js");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-absolute-index.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/to-absolute-index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-indexed-object.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/to-indexed-object.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "../node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-integer.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/internals/to-integer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-length.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-length.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-object.js":
/*!******************************************************!*\
  !*** ../node_modules/core-js/internals/to-object.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-primitive.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/internals/to-primitive.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../node_modules/core-js/internals/to-string-tag-support.js":
/*!******************************************************************!*\
  !*** ../node_modules/core-js/internals/to-string-tag-support.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "../node_modules/core-js/internals/uid.js":
/*!************************************************!*\
  !*** ../node_modules/core-js/internals/uid.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "../node_modules/core-js/internals/use-symbol-as-uid.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "../node_modules/core-js/internals/well-known-symbol.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/internals/well-known-symbol.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "../node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "../node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "../node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "../node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "../node_modules/core-js/internals/whitespaces.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/internals/whitespaces.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.for-each.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "../node_modules/core-js/internals/array-for-each.js");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.from.js":
/*!********************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.from.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "../node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "../node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.index-of.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var $indexOf = __webpack_require__(/*! ../internals/array-includes */ "../node_modules/core-js/internals/array-includes.js").indexOf;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "../node_modules/core-js/internals/array-method-is-strict.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../node_modules/core-js/internals/array-method-uses-to-length.js");

var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var STRICT_METHOD = arrayMethodIsStrict('indexOf');
var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD || !USES_TO_LENGTH }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.array.map.js":
/*!*******************************************************!*\
  !*** ../node_modules/core-js/modules/es.array.map.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "../node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "../node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "../node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.number.constructor.js":
/*!****************************************************************!*\
  !*** ../node_modules/core-js/modules/es.number.constructor.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "../node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");
var has = __webpack_require__(/*! ../internals/has */ "../node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "../node_modules/core-js/internals/classof-raw.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "../node_modules/core-js/internals/inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "../node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "../node_modules/core-js/internals/fails.js");
var create = __webpack_require__(/*! ../internals/object-create */ "../node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "../node_modules/core-js/internals/object-get-own-property-names.js").f;
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "../node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "../node_modules/core-js/internals/object-define-property.js").f;
var trim = __webpack_require__(/*! ../internals/string-trim */ "../node_modules/core-js/internals/string-trim.js").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "../node_modules/core-js/modules/es.object.to-string.js":
/*!**************************************************************!*\
  !*** ../node_modules/core-js/modules/es.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "../node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "../node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "../node_modules/core-js/modules/es.promise.js":
/*!*****************************************************!*\
  !*** ../node_modules/core-js/modules/es.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "../node_modules/core-js/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "../node_modules/core-js/internals/get-built-in.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "../node_modules/core-js/internals/native-promise-constructor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "../node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "../node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "../node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "../node_modules/core-js/internals/set-species.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "../node_modules/core-js/internals/is-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "../node_modules/core-js/internals/a-function.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "../node_modules/core-js/internals/an-instance.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "../node_modules/core-js/internals/inspect-source.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "../node_modules/core-js/internals/iterate.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "../node_modules/core-js/internals/check-correctness-of-iteration.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "../node_modules/core-js/internals/species-constructor.js");
var task = __webpack_require__(/*! ../internals/task */ "../node_modules/core-js/internals/task.js").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "../node_modules/core-js/internals/microtask.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "../node_modules/core-js/internals/promise-resolve.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "../node_modules/core-js/internals/host-report-errors.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "../node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "../node_modules/core-js/internals/perform.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js/internals/internal-state.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "../node_modules/core-js/internals/is-forced.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "../node_modules/core-js/internals/well-known-symbol.js");
var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "../node_modules/core-js/internals/engine-is-node.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "../node_modules/core-js/internals/engine-v8-version.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.regexp.exec.js":
/*!*********************************************************!*\
  !*** ../node_modules/core-js/modules/es.regexp.exec.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "../node_modules/core-js/internals/regexp-exec.js");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.string.anchor.js":
/*!***********************************************************!*\
  !*** ../node_modules/core-js/modules/es.string.anchor.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "../node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "../node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "../node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.anchor` method
// https://tc39.es/ecma262/#sec-string.prototype.anchor
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('anchor') }, {
  anchor: function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  }
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.string.iterator.js":
/*!*************************************************************!*\
  !*** ../node_modules/core-js/modules/es.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "../node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "../node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "../node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.string.match.js":
/*!**********************************************************!*\
  !*** ../node_modules/core-js/modules/es.string.match.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "../node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "../node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "../node_modules/core-js/modules/es.string.replace.js":
/*!************************************************************!*\
  !*** ../node_modules/core-js/modules/es.string.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "../node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "../node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "../node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "../node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "../node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "../node_modules/core-js/internals/advance-string-index.js");
var getSubstitution = __webpack_require__(/*! ../internals/get-substitution */ "../node_modules/core-js/internals/get-substitution.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "../node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];
});


/***/ }),

/***/ "../node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "../node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "../node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "../node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "../node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "../node_modules/tiny-emitter/index.js":
/*!*********************************************!*\
  !*** ../node_modules/tiny-emitter/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ }),

/***/ "../node_modules/tiny-emitter/instance.js":
/*!************************************************!*\
  !*** ../node_modules/tiny-emitter/instance.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var E = __webpack_require__(/*! ./index.js */ "../node_modules/tiny-emitter/index.js");
module.exports = new E();


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../node_modules/whatwg-fetch/fetch.js":
/*!*********************************************!*\
  !*** ../node_modules/whatwg-fetch/fetch.js ***!
  \*********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var global =
  (typeof globalThis !== 'undefined' && globalThis) ||
  (typeof self !== 'undefined' && self) ||
  (typeof global !== 'undefined' && global)

var support = {
  searchParams: 'URLSearchParams' in global,
  iterable: 'Symbol' in global && 'iterator' in Symbol,
  blob:
    'FileReader' in global &&
    'Blob' in global &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in global,
  arrayBuffer: 'ArrayBuffer' in global
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    /*
      fetch-mock wraps the Response object in an ES6 Proxy to
      provide useful test harness features such as flush. However, on
      ES5 browsers without fetch or Proxy support pollyfills must be used;
      the proxy-pollyfill is unable to proxy an attribute unless it exists
      on the object before the Proxy is created. This change ensures
      Response.bodyUsed exists on the instance, while maintaining the
      semantic of setting Request.bodyUsed in the constructor before
      _initBody is called.
    */
    this.bodyUsed = this.bodyUsed
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        var isConsumed = consumed(this)
        if (isConsumed) {
          return isConsumed
        }
        if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
          return Promise.resolve(
            this._bodyArrayBuffer.buffer.slice(
              this._bodyArrayBuffer.byteOffset,
              this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
            )
          )
        } else {
          return Promise.resolve(this._bodyArrayBuffer)
        }
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  if (!(this instanceof Request)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }

  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)

  if (this.method === 'GET' || this.method === 'HEAD') {
    if (options.cache === 'no-store' || options.cache === 'no-cache') {
      // Search for a '_' parameter in the query string
      var reParamSearch = /([?&])_=[^&]*/
      if (reParamSearch.test(this.url)) {
        // If it already exists then set the value with the current time
        this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime())
      } else {
        // Otherwise add a new '_' parameter to the end with the current time
        var reQueryString = /\?/
        this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime()
      }
    }
  }
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
  // https://github.com/github/fetch/issues/748
  // https://github.com/zloirock/core-js/issues/751
  preProcessedHeaders
    .split('\r')
    .map(function(header) {
      return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
    })
    .forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!(this instanceof Response)) {
    throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
  }
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : ''
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = global.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      setTimeout(function() {
        resolve(new Response(body, options))
      }, 0)
    }

    xhr.onerror = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.ontimeout = function() {
      setTimeout(function() {
        reject(new TypeError('Network request failed'))
      }, 0)
    }

    xhr.onabort = function() {
      setTimeout(function() {
        reject(new DOMException('Aborted', 'AbortError'))
      }, 0)
    }

    function fixUrl(url) {
      try {
        return url === '' && global.location.href ? global.location.href : url
      } catch (e) {
        return url
      }
    }

    xhr.open(request.method, fixUrl(request.url), true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr) {
      if (support.blob) {
        xhr.responseType = 'blob'
      } else if (
        support.arrayBuffer &&
        request.headers.get('Content-Type') &&
        request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
      ) {
        xhr.responseType = 'arraybuffer'
      }
    }

    if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
      Object.getOwnPropertyNames(init.headers).forEach(function(name) {
        xhr.setRequestHeader(name, normalizeValue(init.headers[name]))
      })
    } else {
      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })
    }

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!global.fetch) {
  global.fetch = fetch
  global.Headers = Headers
  global.Request = Request
  global.Response = Response
}


/***/ }),

/***/ "../src/js/luge.js":
/*!*************************!*\
  !*** ../src/js/luge.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Luge_Polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Luge/Polyfill */ "../src/js/luge/Polyfill.js");
/* harmony import */ var Luge_Core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Luge/Core */ "../src/js/luge/Core.js");
/* harmony import */ var Luge_LottiePlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Luge/LottiePlayer */ "../src/js/luge/LottiePlayer.js");
/* harmony import */ var Luge_Parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Luge/Parallax */ "../src/js/luge/Parallax.js");
/* harmony import */ var Luge_Preloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Luge/Preloader */ "../src/js/luge/Preloader.js");
/* harmony import */ var Luge_Reveal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Luge/Reveal */ "../src/js/luge/Reveal.js");
/* harmony import */ var Luge_SmoothScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Luge/SmoothScroll */ "../src/js/luge/SmoothScroll.js");
/* harmony import */ var Luge_Sticky__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Luge/Sticky */ "../src/js/luge/Sticky.js");
/* harmony import */ var Luge_Transition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Luge/Transition */ "../src/js/luge/Transition.js");









window.lg = {};
window.lg.Polyfill = new Luge_Polyfill__WEBPACK_IMPORTED_MODULE_0__["default"]();
window.lg.Core = new Luge_Core__WEBPACK_IMPORTED_MODULE_1__["default"]();
window.lg.SmoothScroll = new Luge_SmoothScroll__WEBPACK_IMPORTED_MODULE_6__["default"]();
window.lg.LottiePlayer = new Luge_LottiePlayer__WEBPACK_IMPORTED_MODULE_2__["default"]();
window.lg.Parallax = new Luge_Parallax__WEBPACK_IMPORTED_MODULE_3__["default"]();
window.lg.Preloader = new Luge_Preloader__WEBPACK_IMPORTED_MODULE_4__["default"]();
window.lg.Reveal = new Luge_Reveal__WEBPACK_IMPORTED_MODULE_5__["default"]();
window.lg.Sticky = new Luge_Sticky__WEBPACK_IMPORTED_MODULE_7__["default"]();
window.lg.Transition = new Luge_Transition__WEBPACK_IMPORTED_MODULE_8__["default"](); // Site init on DOM ready

document.addEventListener('DOMContentLoaded', window.lg.Core.siteInit.bind(window.lg.Core), {
  once: true
});

/***/ }),

/***/ "../src/js/luge/Core.js":
/*!******************************!*\
  !*** ../src/js/luge/Core.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Luge; });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "../node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bowser */ "../node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_2__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var emitter = __webpack_require__(/*! tiny-emitter/instance */ "../node_modules/tiny-emitter/instance.js");

var Luge = /*#__PURE__*/function () {
  function Luge() {
    _classCallCheck(this, Luge);

    // Site actions
    this.actions = {
      siteInit: {},
      pageInit: {},
      siteIn: {},
      pageIn: {},
      reveal: {},
      pageFetch: {},
      pageOut: {},
      pageCreate: {},
      pageKill: {}
    };

    for (var action in this.actions) {
      this.actions[action].callbacks = [];
      this.actions[action].done = 0;
    } // Timeouts


    this.timeouts = {
      resizeThrottle: null,
      scrollEnd: null
    }; // Viewport size

    this.windowWidth = 0;
    this.windowHeight = 0;
    this.clientWidth = 0; // Scroll

    window.scrollTop = window.pageYOffset;
    this.previousScrollTop = window.pageYOffset;
    this.isScrolling = false; // Mouse

    window.mouseX = 0;
    window.mouseY = 0; // Init

    this.firstInit = true;
    this.wait = {
      ready: {
        site: true,
        page: true
      },
      transition: {
        fetch: true,
        out: true
      }
    }; // Browser detect

    window.browser = bowser__WEBPACK_IMPORTED_MODULE_2___default.a.getParser(window.navigator.userAgent);
    var isLight = false;
    Boolean(window.browser.satisfies({
      safari: '<12',
      'internet explorer': '>0',
      mobile: {}
    }));

    if (window.browser.is('mobile') || window.browser.is('tablet')) {
      isLight = true;
      document.documentElement.classList.add('is-mobile');
    } else {
      document.documentElement.classList.add('is-desktop');
    }

    if (window.browser.is('Internet Explorer')) {
      isLight = true;
      document.documentElement.classList.add('is-ie');
      document.documentElement.classList.add('is-ie--' + window.browser.getBrowserVersion());
    } else if (window.browser.is('Safari')) {
      if (window.browser.getBrowserVersion() < 12) {
        isLight = true;
      }

      document.documentElement.classList.add('is-safari');
      document.documentElement.classList.add('is-safari-' + window.browser.getBrowserVersion());
    }

    if (isLight) {
      window.browser.light = true;
      document.documentElement.classList.add('is-light');
    }

    this.bindEvents();
  }
  /**
   * Hook callback to action
   * @param {String} actionName Action name
   * @param {Function} callback Callback function
   */


  _createClass(Luge, [{
    key: "addAction",
    value: function addAction(actionName, callback) {
      if (this.actions[actionName]) {
        // console.log('addAction', actionName)
        this.actions[actionName].callbacks.push(callback);
      }
    }
    /**
     * Call hooked callbacks
     * @param {String} actionName Action name
     */

  }, {
    key: "doAction",
    value: function doAction(actionName) {
      var _this = this;

      this.actions[actionName].done = 0;

      if (this.actions[actionName].callbacks.length > 0) {
        for (var i = 0; i < this.actions[actionName].callbacks.length; i++) {
          this.actions[actionName].callbacks[i](function () {
            return _this.doneAction(actionName);
          });
        }
      } else {
        this.doneAction(actionName);
      }
    }
    /**
     * Count done action
     * @param {String} actionName Action name
     */

  }, {
    key: "doneAction",
    value: function doneAction(actionName) {
      this.actions[actionName].done++; // All callback are done, call next action

      if (this.actions[actionName].done >= this.actions[actionName].callbacks.length) {
        if (actionName === 'siteInit') {
          this.doAction('pageInit');
        } else if (actionName === 'pageInit') {
          if (!this.wait.ready.page) {
            this.doAction('pageIn');
          } else {
            this.waitReady('page');
          }
        } else if (actionName === 'siteIn') {
          this.doAction('pageIn');
        } else if (actionName === 'pageIn') {
          this.doAction('reveal');
        } else if (actionName === 'pageFetch') {
          this.waitTransition('fetch');
        } else if (actionName === 'pageOut') {
          this.waitTransition('out');
        } else if (actionName === 'pageCreate') {
          this.doAction('pageKill');
        } else if (actionName === 'pageKill') {
          this.pageClean();
          this.doAction('pageInit');
        }
      }
    }
    /**
     * Site initialization
     */

  }, {
    key: "siteInit",
    value: function siteInit() {
      this.scrollHandler();
      this.doAction('siteInit');
    }
    /**
     * Remove old page container
     */

  }, {
    key: "pageClean",
    value: function pageClean() {
      var oldPage = document.querySelector('[data-lg-page] + [data-lg-page]');
      oldPage.parentNode.removeChild(oldPage);
    }
    /**
     * Wait for site and page to be ready
     * @param {String} element site|page
     */

  }, {
    key: "waitReady",
    value: function waitReady(element) {
      this.wait.ready[element] = false; // Site loaded and page initiated

      if (!this.wait.ready.site && !this.wait.ready.page) {
        this.doAction('siteIn');
      }
    }
    /**
     * Wait for fetch and page out for transition
     * @param {String} element site|page
     */

  }, {
    key: "waitTransition",
    value: function waitTransition(element) {
      this.wait.transition[element] = false; // Site loaded and page initiated

      if (!this.wait.transition.fetch && !this.wait.transition.out) {
        this.doAction('pageCreate');
      }
    }
    /**
     * Bind events
     */

  }, {
    key: "bindEvents",
    value: function bindEvents() {
      window.addEventListener('load', this.waitReady.bind(this, 'site'), {
        once: true
      });
      window.addEventListener('mousemove', this.mouseHandler.bind(this), {
        passive: true
      });
      window.addEventListener('resize', this.resizeThrottle.bind(this));
      window.addEventListener('scroll', this.scrollHandler.bind(this), {
        passive: true
      });
    }
    /**
     * Mouse handler
     */

  }, {
    key: "mouseHandler",
    value: function mouseHandler(e) {
      window.mouseX = e.pageX;
      window.mouseY = e.pageY;
      emitter.emit('mouseMove', e);
    }
    /**
     * Resize throttle
     */

  }, {
    key: "resizeThrottle",
    value: function resizeThrottle() {
      clearTimeout(this.timeouts.resizeThrottle);
      this.timeouts.resizeThrottle = setTimeout(this.resizeHandler, 200);
    }
    /**
     * Resize handler
     */

  }, {
    key: "resizeHandler",
    value: function resizeHandler() {
      // Pass window widths to CSS
      if (this.windowWidth !== window.innerWidth) {
        this.windowWidth = window.innerWidth;
        this.clientWidth = document.body.clientWidth;
        document.documentElement.style.setProperty('--vw', this.windowWidth * 0.01 + 'px');
        document.documentElement.style.setProperty('--cw', this.clientWidth * 0.01 + 'px');
      } // Pass window height to CSS


      if (this.windowHeight !== window.innerHeight) {
        this.windowHeight = window.innerHeight;
        this.clientHeight = document.body.clientHeight;
        document.documentElement.style.setProperty('--vh', this.windowHeight * 0.01 + 'px');
        document.documentElement.style.setProperty('--ch', this.clientHeight * 0.01 + 'px');
      }

      emitter.emit('resize');
    }
    /**
     * Scroll handler
     */

  }, {
    key: "scrollHandler",
    value: function scrollHandler() {
      if (window.browser.is('desktop') && window.pageYOffset) {
        window.scrollTop = window.pageYOffset;
      } else {
        window.scrollTop = window.scrollY;
      }

      if (!this.isScrolling) {
        this.scrollStart();
      }

      clearTimeout(this.timeouts.scrollEnd);
      this.timeouts.scrollEnd = setTimeout(this.scrollEnd.bind(this), 200);
      this.previousScrollTop = window.scrollTop;

      if (!window.lg.hasSmoothScroll) {
        emitter.emit('scroll');
      }
    }
    /**
     * Scroll start
     */

  }, {
    key: "scrollStart",
    value: function scrollStart() {
      this.isScrolling = true; // Pause videos on scroll

      document.querySelectorAll('video').forEach(function (video) {
        if (!video.paused) {
          video.classList.add('was-playing');
          video.pause();
        }
      });
      document.documentElement.classList.add('is-scrolling');
      emitter.emit('startScroll');
    }
    /**
     * Scroll end
     */

  }, {
    key: "scrollEnd",
    value: function scrollEnd() {
      this.isScrolling = false; // Resume videos after scroll

      document.querySelectorAll('video').forEach(function (video) {
        if (video.classList.contains('was-playing')) {
          video.classList.remove('was-playing');
          video.play();
        }
      });
      document.documentElement.classList.remove('is-scrolling');
      emitter.emit('endScroll');
    }
  }]);

  return Luge;
}();



/***/ }),

/***/ "../src/js/luge/LottiePlayer.js":
/*!**************************************!*\
  !*** ../src/js/luge/LottiePlayer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LottiePlayer; });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "../node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "../node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);




function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var emitter = __webpack_require__(/*! tiny-emitter/instance */ "../node_modules/tiny-emitter/instance.js");

var LottiePlayer = /*#__PURE__*/function () {
  /**
   * Constructor
   */
  function LottiePlayer() {
    _classCallCheck(this, LottiePlayer);

    if ((typeof lottie === "undefined" ? "undefined" : _typeof(lottie)) === 'object') {
      window.lg.Core.addAction('pageInit', this.pageInit.bind(this));
      window.lg.Core.addAction('pageKill', this.pageKill.bind(this));
    }
  }
  /**
   * Init
   */


  _createClass(LottiePlayer, [{
    key: "pageInit",
    value: function pageInit(done) {
      var self = this;
      document.querySelectorAll('[data-lg-lottie]').forEach(function (element) {
        if (!element.player) {
          self.initPlayer(element);
          element.addEventListener('revealIn', self.play);
        }
      });
      done();
    }
    /**
     * Kill
     */

  }, {
    key: "pageKill",
    value: function pageKill(done) {
      var self = this;
      var oldPage = document.querySelector('[data-lg-page] + [data-lg-page]');
      oldPage.querySelectorAll('[data-lg-lottie]').forEach(function (element) {
        element.removeEventListener('revealIn', self.play);

        if (element.player) {
          element.player.destroy();
        }
      });
      done();
    }
    /**
     * Init player
     */

  }, {
    key: "initPlayer",
    value: function initPlayer(element) {
      element.player = lottie.loadAnimation({
        container: element,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: element.getAttribute('data-lg-lottie')
      });
      element.setAttribute('data-lg-lottie-state', 'is-paused'); // Get options

      var loop = element.hasAttribute('data-lg-lottie-loop');
      var loopFrame = Number(element.getAttribute('data-lg-lottie-loop-frame'));
      var reverse = element.hasAttribute('data-lg-lottie-reverse');
      element.player.addEventListener('enterFrame', function () {
        var _this = this;

        if (element.player.totalFrames > 0) {
          var currentFrame = Math.round(element.player.currentFrame);

          if (element.player.playDirection === 1) {
            if (currentFrame === element.player.totalFrames - 1) {
              element.player.pause();

              if (reverse) {
                setTimeout(function () {
                  element.player.setDirection(-1);
                  element.player.goToAndPlay(element.player.totalFrames, true);

                  _this.setAttribute('data-lg-lottie-state', 'is-playing is-playing--backward');
                }, 0);
              } else if (loop) {
                setTimeout(function () {
                  element.player.goToAndPlay(loopFrame, true);
                }, 0);
              }
            }
          } else {
            if (currentFrame === loopFrame) {
              element.player.pause();

              if (loop) {
                setTimeout(function () {
                  element.player.setDirection(1);
                  element.player.goToAndPlay(loopFrame, true);

                  _this.setAttribute('data-lg-lottie-state', 'is-playing is-playing--forward');
                }, 0);
              }
            }
          }
        }
      }); // Set methods

      element.play = this.play; // Autoplay

      if (element.hasAttribute('data-lg-lottie-autoplay')) {
        element.player.addEventListener('DOMLoaded', function () {
          element.player.goToAndPlay(0, true);
        }, {
          once: true
        });
      }
    }
    /**
     * Play
     */

  }, {
    key: "play",
    value: function play() {
      this.player.goToAndPlay(0, true);
      this.setAttribute('data-lg-lottie-state', 'is-playing is-playing--forward');
    }
  }]);

  return LottiePlayer;
}();



/***/ }),

/***/ "../src/js/luge/Parallax.js":
/*!**********************************!*\
  !*** ../src/js/luge/Parallax.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Parallax; });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "../node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "../node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.anchor.js */ "../node_modules/core-js/modules/es.string.anchor.js");
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var emitter = __webpack_require__(/*! tiny-emitter/instance */ "../node_modules/tiny-emitter/instance.js");

var Parallax = /*#__PURE__*/function () {
  /**
   * Constructor
   */
  function Parallax() {
    _classCallCheck(this, Parallax);

    // Disable parallax on light browsers
    if (window.browser.light) {
      return;
    }

    this.elements = [];
    window.lg.Core.addAction('pageInit', this.pageInit.bind(this));
    window.lg.Core.addAction('pageKill', this.pageKill.bind(this));
    this.bindEvents();
  }
  /**
   * Bind events
   */


  _createClass(Parallax, [{
    key: "bindEvents",
    value: function bindEvents() {
      emitter.on('resize', this.resizeHandler, this);
      emitter.on('scroll', this.scrollHandler, this);
    }
    /**
     * Init
     */

  }, {
    key: "pageInit",
    value: function pageInit(done) {
      var _this = this;

      document.querySelectorAll('[data-lg-parallax]').forEach(function (element) {
        var disable = element.getAttribute('data-lg-parallax-disable');
        var enable = true;

        if (disable) {
          if (disable === 'mobile' && !window.browser.is('desktop') || disable === 'phone' && window.browser.is('mobile') || disable === 'tablet' && window.browser.is('tablet')) {
            enable = false;
          }
        }

        element.parallax = enable;

        if (enable) {
          _this.elements.push({
            el: element
          });
        }
      });
      this.resizeHandler();
      done();
    }
    /**
     * Kill
     */

  }, {
    key: "pageKill",
    value: function pageKill(done) {
      this.elements = [];
      done();
    }
    /**
     * Resize handler
     */

  }, {
    key: "resizeHandler",
    value: function resizeHandler() {
      this.setBounding();
      this.checkElements();
    }
    /**
     * Set bounding
     */

  }, {
    key: "setBounding",
    value: function setBounding() {
      if (this.elements) {
        var scrollTop = window.smoothScrollTop ? window.smoothScrollTop : window.scrollTop;
        scrollTop = Math.max(scrollTop, 0);
        this.elements.forEach(function (element) {
          element.bounding = element.el.getBoundingClientRect(); // Set bounding

          element.start = element.bounding.top + scrollTop - window.innerHeight;
          element.end = element.start + element.el.offsetHeight + window.innerHeight; // Elements above the fold start at their position

          element.start = Math.max(element.start, 0); // Get parallax options

          element.amplitude = element.el.getAttribute('data-lg-parallax-amplitude') ? element.el.getAttribute('data-lg-parallax-amplitude') : 1;

          if (typeof element.amplitude === 'string') {
            var randAmplitude = element.amplitude.match(/\{\s*([0-9]*[.]?[0-9]*)\s*,\s*([0-9]*[.]?[0-9]*)\s*\}/m);

            if (randAmplitude) {
              element.amplitude = Number(randAmplitude[1]) + (Number(randAmplitude[2]) - Number(randAmplitude[1])) * Math.random();
            } else {
              element.amplitude = Number(element.amplitude);
            }
          }

          element.type = element.el.getAttribute('data-lg-parallax');
          element.anchor = element.el.getAttribute('data-lg-parallax-anchor');

          if (element.type === 'image') {
            element.target = element.el.querySelector('img');
            element.el.style.overflow = 'hidden';
          } else if (element.type === 'video') {
            element.target = element.el.querySelector('video');
            element.el.style.overflow = 'hidden';
          }
        });
      }
    }
    /**
     * Sroll handler
     */

  }, {
    key: "scrollHandler",
    value: function scrollHandler() {
      this.checkElements();
    }
    /**
     * Check position
     */

  }, {
    key: "checkElements",
    value: function checkElements() {
      if (this.elements) {
        var scrollTop = window.smoothScrollTop ? window.smoothScrollTop : window.scrollTop;
        scrollTop = Math.max(scrollTop, 0);
        this.elements.forEach(function (element, index) {
          var progress = 0;

          if (scrollTop > element.end) {
            progress = -1;
          } else if (scrollTop < element.start) {
            progress = 1;
          } else {
            progress = (scrollTop - element.start) / (element.end - element.start); // Stick progress to limits

            if (progress > 0.995) {
              progress = 1;
            } else if (progress < 0.005) {
              progress = 0;
            }

            if (element.start > 0) {
              progress = 1 - progress * 2;

              if (element.anchor === 'bottom') {
                progress += 1;
              } else if (element.anchor === 'top') {
                progress -= 1;
              }
            } else {
              // Above the fold elements
              progress = -progress;
            }
          }

          if (element.type === 'image' || element.type === 'video') {
            var movement = element.amplitude * 5 * progress;
            element.target.style.transform = 'translate3d(0, ' + movement + '%, 0) scale(1.' + String(Math.abs(element.amplitude)).replace('.', '') + ')';
          } else {
            movement = element.el.clientHeight * progress * element.amplitude / 2;
            element.el.style.transform = 'translate3d(0, ' + movement + 'px, 0)';
          }
        });
      }
    }
  }]);

  return Parallax;
}();



/***/ }),

/***/ "../src/js/luge/Polyfill.js":
/*!**********************************!*\
  !*** ../src/js/luge/Polyfill.js ***!
  \**********************************/
/*! exports provided: default, polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polyfill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Polyfill = /*#__PURE__*/function () {
  function Polyfill() {
    _classCallCheck(this, Polyfill);

    this.closestPolyfill();
    this.customEventPolyfill();
  }

  _createClass(Polyfill, [{
    key: "closestPolyfill",
    value: function closestPolyfill() {
      /*  eslint-disable */
      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      }

      if (!Element.prototype.closest) {
        Element.prototype.closest = function (s) {
          var el = this;

          do {
            if (Element.prototype.matches.call(el, s)) return el;
            el = el.parentElement || el.parentNode;
          } while (el !== null && el.nodeType === 1);

          return null;
        };
      }
      /*  eslint-enable */

    }
  }, {
    key: "customEventPolyfill",
    value: function customEventPolyfill() {
      /*  eslint-disable */
      if (typeof window.CustomEvent === 'function') {
        return false;
      }

      function CustomEvent(event, params) {
        params = params || {
          bubbles: false,
          cancelable: false,
          detail: null
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      }

      window.CustomEvent = CustomEvent;
      /*  eslint-enable */
    }
  }]);

  return Polyfill;
}();


var polyfill = new Polyfill();

/***/ }),

/***/ "../src/js/luge/Preloader.js":
/*!***********************************!*\
  !*** ../src/js/luge/Preloader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PreLoader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PreLoader = /*#__PURE__*/function () {
  function PreLoader() {
    _classCallCheck(this, PreLoader);

    window.lg.Core.addAction('siteIn', this.siteIn.bind(this));
  }

  _createClass(PreLoader, [{
    key: "siteIn",
    value: function siteIn(done) {
      var preloader = document.querySelector('[data-lg-preloader]');

      if (preloader && preloader.getAttribute('data-lg-preloader') === '') {
        preloader.style.transition = 'opacity 0.3s linear';
        setTimeout(function () {
          preloader.style.opacity = 0;
        }, 10);
        done();
        setTimeout(function () {// preloader.parentNode.removeChild(preloader)
        }, 300);
      } else {
        done();
      }
    }
  }]);

  return PreLoader;
}();



/***/ }),

/***/ "../src/js/luge/Reveal.js":
/*!********************************!*\
  !*** ../src/js/luge/Reveal.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reveal; });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "../node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var emitter = __webpack_require__(/*! tiny-emitter/instance */ "../node_modules/tiny-emitter/instance.js");

var Reveal = /*#__PURE__*/function () {
  /**
   * Constructor
   */
  function Reveal() {
    _classCallCheck(this, Reveal);

    this.elements = [];
    this.canReveal = false;
    window.lg.Core.addAction('pageInit', this.pageInit.bind(this));
    window.lg.Core.addAction('pageKill', this.pageKill.bind(this));
    window.lg.Core.addAction('reveal', this.reveal.bind(this));
    this.bindEvents();
  }
  /**
   * Bind events
   */


  _createClass(Reveal, [{
    key: "bindEvents",
    value: function bindEvents() {
      emitter.on('resize', this.resizeHandler, this);
      emitter.on('scroll', this.scrollHandler, this);
    }
    /**
     * Init
     */

  }, {
    key: "pageInit",
    value: function pageInit(done) {
      this.canReveal = true;
      var elements = document.querySelectorAll('[data-lg-reveal]:not([data-lg-reveal-manual])');
      this.elements = Array.from(elements).map(function (element) {
        return {
          el: element
        };
      });
      this.setBounding();
      done();
    }
    /**
     * Kill
     */

  }, {
    key: "pageKill",
    value: function pageKill(done) {
      this.canReveal = false;
      this.elements = [];
      done();
    }
    /**
     * Reveal
     */

  }, {
    key: "reveal",
    value: function reveal(done) {
      this.checkElements();
      done();
    }
    /**
     * Resize handler
     */

  }, {
    key: "resizeHandler",
    value: function resizeHandler() {
      this.setBounding();
      this.checkElements();
    }
    /**
     * Set bounding
     */

  }, {
    key: "setBounding",
    value: function setBounding() {
      var scrollTop = window.smoothScrollTop ? window.smoothScrollTop : window.scrollTop;
      scrollTop = Math.max(scrollTop, 0);
      this.elements.forEach(function (element) {
        element.bounding = element.el.getBoundingClientRect();
        element.start = element.bounding.top + scrollTop - window.innerHeight;
        element.middle = element.start + element.el.clientHeight / 2;
        element.end = element.start + element.el.clientHeight + window.innerHeight;
      });
    }
    /**
     * Sroll handler
     */

  }, {
    key: "scrollHandler",
    value: function scrollHandler() {
      this.checkElements();
    }
    /**
     * Check position
     */

  }, {
    key: "checkElements",
    value: function checkElements() {
      var scrollTop = window.scrollTop;
      scrollTop = Math.max(scrollTop, 0);
      var self = this;
      var threshold = window.innerHeight * 0.15;
      var revealInDelay = 200;
      var revealInTimeout = 0;
      this.elements.forEach(function (element, index) {
        var state = '';
        var isIn = false;
        var delay = true;
        var isOut = false;

        if (scrollTop > element.end - threshold) {
          if (element.el.getAttribute('data-lg-reveal-state') === null && !element.el.hasAttribute('data-lg-reveal-multiple')) {
            // Show element when above the viewport
            isIn = true;
            state = 'is-in';
            delay = false;
          } else {
            isOut = true;
            state = 'is-out is-out--top';
          }
        } else if (scrollTop < element.start + threshold) {
          isOut = true;
          state = 'is-out is-out--bottom';
        } else {
          isIn = true;
          state = 'is-in';

          if (element.el.hasAttribute('data-lg-reveal-multiple')) {
            if (scrollTop < element.middle) {
              state += ' is-in--bottom';
            } else {
              state += ' is-in--top';
            }
          }
        }

        if (element.el.getAttribute('data-lg-reveal-state') !== state) {
          if (isIn) {
            setTimeout(function () {
              element.el.dispatchEvent(new CustomEvent('revealIn'));
              element.el.setAttribute('data-lg-reveal-state', state);
            }, delay ? revealInTimeout : 0);

            if (delay) {
              revealInTimeout += revealInDelay;
            }
          } else if (isOut) {
            if (element.el.hasAttribute('data-lg-reveal-state')) {
              element.el.dispatchEvent(new CustomEvent('revealOut'));
            }

            element.el.setAttribute('data-lg-reveal-state', state);
          }
        }

        if (isIn && !element.el.hasAttribute('data-lg-reveal-multiple')) {
          delete self.elements[index];
        }
      });
    }
  }]);

  return Reveal;
}();



/***/ }),

/***/ "../src/js/luge/SmoothScroll.js":
/*!**************************************!*\
  !*** ../src/js/luge/SmoothScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SmoothScroll; });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "../node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var emitter = __webpack_require__(/*! tiny-emitter/instance */ "../node_modules/tiny-emitter/instance.js");

var SmoothScroll = /*#__PURE__*/function () {
  /**
   * Constructor
   */
  function SmoothScroll() {
    _classCallCheck(this, SmoothScroll);

    // Disable smooth scroll on light browsers
    if (window.browser.light) {
      return;
    }

    this.containers = null;
    this.inertia = 0.1;
    window.smoothScrollTop = 0;
    window.lg.Core.addAction('pageInit', this.pageInit.bind(this));
    window.lg.Core.addAction('pageKill', this.pageKill.bind(this));
    this.bindEvents();
  }
  /**
   * Bind events
   */


  _createClass(SmoothScroll, [{
    key: "bindEvents",
    value: function bindEvents() {
      emitter.on('resize', this.resizeHandler, this);
    }
    /**
     * Init
     */

  }, {
    key: "pageInit",
    value: function pageInit(done) {
      var containers = document.querySelectorAll('[data-lg-smooth]');

      if (containers) {
        window.smoothScrollTop = window.scrollTop;
        window.lg.hasSmoothScroll = true;
        document.documentElement.classList.add('has-smooth-scroll');
      } else {
        window.smoothScrollTop = 0;
        window.lg.hasSmoothScroll = false;
        document.documentElement.classList.remove('has-smooth-scroll');
      }

      this.containers = Array.from(containers).map(function (element) {
        return {
          el: element,
          bounding: element.getBoundingClientRect()
        };
      });
      cancelAnimationFrame(this.requestId);
      this.requestId = requestAnimationFrame(this.rafAnimation.bind(this));
      this.resizeHandler();
      done();
    }
    /**
     * Kill
     */

  }, {
    key: "pageKill",
    value: function pageKill(done) {
      this.containers = null;
      done();
    }
    /**
     * Resize handler
     */

  }, {
    key: "resizeHandler",
    value: function resizeHandler() {
      if (this.containers) {
        // Reset style
        this.containers.forEach(function (container) {
          container.el.removeAttribute('style');
        });
        this.containers.forEach(function (container) {
          var parent = container.el.parentNode; // Get bounding

          container.bounding = container.el.getBoundingClientRect();
          parent.style.height = container.bounding.bottom + window.scrollTop + 'px'; // Set container

          container.el.style.position = 'fixed';
          container.el.style.transform = 'translate3d(0, -' + window.smoothScrollTop + 'px, 0)';
          container.el.style.left = 0;
          container.el.style.width = '100%';
          container.el.style.willChange = 'transform';
        });
      }
    }
    /**
     * Raf animation
     */

  }, {
    key: "rafAnimation",
    value: function rafAnimation() {
      if (window.smoothScrollTop !== window.scrollTop) {
        window.smoothScrollTop = window.smoothScrollTop + (window.scrollTop - window.smoothScrollTop) * this.inertia; // Round smooth scroll

        var gap = window.smoothScrollTop - window.scrollTop;

        if (gap > -0.1 && gap < 0.1) {
          window.smoothScrollTop = window.scrollTop;
        }

        if (this.containers) {
          this.containers.forEach(function (container) {
            container.el.style.transform = 'translate3d(0, -' + window.smoothScrollTop + 'px, 0)';
          });
        }

        if (window.lg.hasSmoothScroll) {
          emitter.emit('scroll');
        }
      }

      this.requestId = requestAnimationFrame(this.rafAnimation.bind(this));
    }
  }]);

  return SmoothScroll;
}();



/***/ }),

/***/ "../src/js/luge/Sticky.js":
/*!********************************!*\
  !*** ../src/js/luge/Sticky.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sticky; });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "../node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var emitter = __webpack_require__(/*! tiny-emitter/instance */ "../node_modules/tiny-emitter/instance.js");

var Sticky = /*#__PURE__*/function () {
  /**
   * Constructor
   */
  function Sticky() {
    _classCallCheck(this, Sticky);

    // Disable sticky on light browsers
    if (window.browser.light) {
      return;
    }

    this.elements = [];
    window.lg.Core.addAction('pageInit', this.pageInit.bind(this));
    window.lg.Core.addAction('pageKill', this.pageKill.bind(this));
    this.bindEvents();
  }
  /**
   * Bind events
   */


  _createClass(Sticky, [{
    key: "bindEvents",
    value: function bindEvents() {
      emitter.on('resize', this.resizeHandler, this);
      emitter.on('scroll', this.scrollHandler, this);
    }
    /**
     * Init
     */

  }, {
    key: "pageInit",
    value: function pageInit(done) {
      var _this = this;

      var elements = document.querySelectorAll('[data-lg-sticky]');

      if (elements) {
        elements.forEach(function (element) {
          _this.elements.push({
            el: element,
            position: element.getAttribute('data-lg-sticky')
          });
        });
      }

      this.resizeHandler();
      done();
    }
    /**
     * Kill
     */

  }, {
    key: "pageKill",
    value: function pageKill(done) {
      this.elements = [];
      done();
    }
    /**
     * Resize handler
     */

  }, {
    key: "resizeHandler",
    value: function resizeHandler() {
      this.setBounding();
      this.checkElements();
    }
    /**
     * Set bounding
     */

  }, {
    key: "setBounding",
    value: function setBounding() {
      if (this.elements) {
        var scrollTop = window.smoothScrollTop ? window.smoothScrollTop : window.scrollTop;
        scrollTop = Math.max(scrollTop, 0);
        this.elements.forEach(function (element) {
          element.el.style.top = '';
          element.el.style.transform = '';
          var bounding = element.el.getBoundingClientRect(); // Set bounding

          if (element.position === 'bottom') {
            var top = Math.ceil(window.innerHeight - (bounding.bottom + scrollTop)) + 1;
            top = Math.max(top, 0);
            element.el.style.top = top + 'px';
            element.start = bounding.bottom + top + scrollTop - window.innerHeight;
            element.maxGap = element.el.parentNode.offsetHeight - element.el.offsetHeight - top;
          } else if (element.position === 'top') {
            element.start = bounding.top + scrollTop;
            element.maxGap = element.el.parentNode.offsetHeight - element.el.offsetHeight;
          } else {
            element.start = bounding.top + scrollTop - (window.innerHeight - element.el.offsetHeight) / 2;
            element.maxGap = element.el.parentNode.offsetHeight - element.el.offsetHeight;
          }
        });
      }
    }
    /**
     * Sroll handler
     */

  }, {
    key: "scrollHandler",
    value: function scrollHandler() {
      this.checkElements();
    }
    /**
     * Check position
     */

  }, {
    key: "checkElements",
    value: function checkElements() {
      if (this.elements) {
        var scrollTop = window.smoothScrollTop ? window.smoothScrollTop : window.scrollTop;
        scrollTop = Math.max(scrollTop, 0);
        this.elements.forEach(function (element) {
          if (scrollTop >= element.start) {
            var gap = Math.min(scrollTop - element.start, element.maxGap);
            element.el.style.transform = 'translate3d(0, ' + gap + 'px, 0)';

            if (gap === element.maxGap) {
              element.el.setAttribute('data-lg-sticky-state', 'is-fixed is-fixed--bottom');
            } else {
              element.el.setAttribute('data-lg-sticky-state', 'is-moving');
            }
          } else if (scrollTop < element.start) {
            element.el.style.transform = 'translate3d(0, 0, 0)';
            element.el.setAttribute('data-lg-sticky-state', 'is-fixed is-fixed--top');
          }
        });
      }
    }
  }]);

  return Sticky;
}();



/***/ }),

/***/ "../src/js/luge/Transition.js":
/*!************************************!*\
  !*** ../src/js/luge/Transition.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Transition; });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "../node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "../node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! whatwg-fetch */ "../node_modules/whatwg-fetch/fetch.js");






function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var emitter = __webpack_require__(/*! tiny-emitter/instance */ "../node_modules/tiny-emitter/instance.js");

var Transition = /*#__PURE__*/function () {
  /**
   * Constructor
   */
  function Transition() {
    _classCallCheck(this, Transition);

    this.url = window.location.href;
    this.pageFetched = null;
    this.listeners = {
      linkHandler: this.linkHandler.bind(this)
    };
    this.wait = {
      fetch: true,
      out: true
    };
    window.lg.Core.addAction('siteInit', this.siteInit.bind(this));
    window.lg.Core.addAction('pageInit', this.pageInit.bind(this));
    window.lg.Core.addAction('pageFetch', this.pageFetch.bind(this));
    window.lg.Core.addAction('pageOut', this.pageOut.bind(this));
    window.lg.Core.addAction('pageIn', this.pageIn.bind(this));
    window.lg.Core.addAction('pageCreate', this.pageCreate.bind(this));
  }
  /**
   * Bind links event
   */


  _createClass(Transition, [{
    key: "bindLinksEvent",
    value: function bindLinksEvent() {
      var _this = this;

      if (document.querySelector('[data-lg-page]')) {
        document.querySelectorAll('a').forEach(function (el) {
          el.addEventListener('click', _this.listeners.linkHandler);
        });
      }
    }
    /**
     * Unbind links handler
     */

  }, {
    key: "unbindLinksEvent",
    value: function unbindLinksEvent() {
      var _this2 = this;

      document.querySelectorAll('a').forEach(function (el) {
        el.removeEventListener('click', _this2.listeners.linkHandler);
      });
    }
    /**
     * Link handler
     */

  }, {
    key: "linkHandler",
    value: function linkHandler(e) {
      var element = e.currentTarget;
      var href = element.getAttribute('href');

      if (href && !element.closest('#wpadminbar') && element.getAttribute('data-lg-transition') !== 'disabled' && element.getAttribute('target') !== '_blank') {
        // Check if it's an internal URL
        if (href.indexOf(window.location.origin) === 0 || href.indexOf('/') === 0 || href.indexOf('/') === -1) {
          e.preventDefault();

          if (window.location.href === href) {
            return;
          }

          this.navigateTo(href); // Change page url

          history.pushState(null, null, this.url);
        }
      }
    }
    /**
     * Navigate to page
     */

  }, {
    key: "navigateTo",
    value: function navigateTo(url) {
      this.url = url;
      this.wait.fetch = true;
      this.wait.out = true;
      window.lg.Core.wait.transition = {
        fetch: true,
        out: true
      };
      window.lg.Core.doAction('pageFetch');
      window.lg.Core.doAction('pageOut');
    }
    /**
     * Site init
     */

  }, {
    key: "siteInit",
    value: function siteInit(done) {
      done();
      window.addEventListener('popstate', this.historyStateChanged.bind(this));
    }
    /**
     * Page init
     */

  }, {
    key: "pageInit",
    value: function pageInit(done) {
      this.bindLinksEvent();
      done();
    }
    /**
     * Fetch
     */

  }, {
    key: "pageFetch",
    value: function pageFetch(done) {
      var self = this;

      if (this.url) {
        fetch(this.url, {
          credentials: 'include'
        }).then(function (response) {
          return response.text();
        }).then(function (body) {
          self.pageFetched = body;
          done();
        });
      }
    }
    /**
     * Page out
     */

  }, {
    key: "pageOut",
    value: function pageOut(done) {
      var page = document.querySelector('[data-lg-page]');

      if (page) {
        window.scroll(0, 0);
        window.smoothScrollTop = 0;
        page.style.transition = 'opacity 0.3s linear !important';
        setTimeout(function () {
          page.style.opacity = 0;
        }, 10);
        setTimeout(function () {
          page.style.transition = '';
          page.style.opacity = '';
          done();
        }, 300);
      } else {
        done();
      }

      this.unbindLinksEvent.bind(this);
    }
    /**
     * Page in
     */

  }, {
    key: "pageIn",
    value: function pageIn(done) {
      var page = document.querySelector('[data-lg-page]');

      if (page) {
        page.style.transition = 'opacity 0.3s linear !important';
        setTimeout(function () {
          page.style.opacity = 1;
        }, 10);
        setTimeout(function () {
          page.style.transition = '';
          page.style.opacity = '';
          done();
        }, 300);
      } else {
        done();
      }
    }
    /**
     * Page create
     */

  }, {
    key: "pageCreate",
    value: function pageCreate(done) {
      // Convert data to HTML
      var html = new DOMParser().parseFromString(this.pageFetched, 'text/html'); // Get containers

      var currentPage = document.querySelector('[data-lg-page]');
      var newPage = html.querySelector('[data-lg-page]');

      if (newPage) {
        // Switch containers
        currentPage.insertAdjacentElement('beforebegin', newPage);
        newPage.style.opacity = 0;
        currentPage.style.opacity = 0;
        currentPage.style.position = 'absolute';
        currentPage.style.top = 0;
        currentPage.style.left = '-999em';
        currentPage.style.width = '100%'; // Switch classes

        document.querySelector('body').className = html.querySelector('body').className; // Switch metas

        document.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property="og:image"]').forEach(function (element) {
          element.parentNode.removeChild(element);
        });
        html.querySelectorAll('meta[name="description"], meta[name="keywords"], meta[property="og:image"]').forEach(function (element) {
          document.querySelector('head title').insertAdjacentElement('afterend', element);
        }); // Set title

        document.querySelector('head title').innerText = html.querySelector('head title').innerText;
      }

      done();
    }
    /**
     * History change
     */

  }, {
    key: "historyStateChanged",
    value: function historyStateChanged() {
      this.navigateTo(window.location.href);
    }
  }]);

  return Transition;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ib3dzZXIvZXM1LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jYWxsLXdpdGgtc2FmZS1pdGVyYXRpb24tY2xvc2luZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NoZWNrLWNvcnJlY3RuZXNzLW9mLWl0ZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NvcnJlY3QtcHJvdG90eXBlLWdldHRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1odG1sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLWl0ZXJhdG9yLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1pb3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtaXMtbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy13ZWJvcy13ZWJraXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtc3Vic3RpdHV0aW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9ob3N0LXJlcG9ydC1lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1mb3JjZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1wdXJlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9yLWNsb3NlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9taWNyb3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtcHJvbWlzZS1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC10by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3BhdGguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9wZXJmb3JtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcHJvbWlzZS1yZXNvbHZlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUtYWxsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlZ2V4cC1leGVjLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLWZsYWdzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVnZXhwLXN0aWNreS1oZWxwZXJzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NldC1zcGVjaWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1odG1sLWZvcmNlZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N0cmluZy1tdWx0aWJ5dGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctdHJpbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93aGl0ZXNwYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmluZGV4LW9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lm1hcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5udW1iZXIuY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5wcm9taXNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5hbmNob3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcucmVwbGFjZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1lbWl0dGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGlueS1lbWl0dGVyL2luc3RhbmNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3doYXR3Zy1mZXRjaC9mZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2pzL2x1Z2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9sdWdlL0NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9sdWdlL0xvdHRpZVBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2pzL2x1Z2UvUGFyYWxsYXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9sdWdlL1BvbHlmaWxsLmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvbHVnZS9QcmVsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9sdWdlL1JldmVhbC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2pzL2x1Z2UvU21vb3RoU2Nyb2xsLmpzIiwid2VicGFjazovLy8uLi9zcmMvanMvbHVnZS9TdGlja3kuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9qcy9sdWdlL1RyYW5zaXRpb24uanMiXSwibmFtZXMiOlsid2luZG93IiwibGciLCJQb2x5ZmlsbCIsIkNvcmUiLCJMdWdlIiwiU21vb3RoU2Nyb2xsIiwiTG90dGllUGxheWVyIiwiUGFyYWxsYXgiLCJQcmVsb2FkZXIiLCJSZXZlYWwiLCJTdGlja3kiLCJUcmFuc2l0aW9uIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2l0ZUluaXQiLCJiaW5kIiwib25jZSIsImVtaXR0ZXIiLCJyZXF1aXJlIiwiYWN0aW9ucyIsInBhZ2VJbml0Iiwic2l0ZUluIiwicGFnZUluIiwicmV2ZWFsIiwicGFnZUZldGNoIiwicGFnZU91dCIsInBhZ2VDcmVhdGUiLCJwYWdlS2lsbCIsImFjdGlvbiIsImNhbGxiYWNrcyIsImRvbmUiLCJ0aW1lb3V0cyIsInJlc2l6ZVRocm90dGxlIiwic2Nyb2xsRW5kIiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJjbGllbnRXaWR0aCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwicHJldmlvdXNTY3JvbGxUb3AiLCJpc1Njcm9sbGluZyIsIm1vdXNlWCIsIm1vdXNlWSIsImZpcnN0SW5pdCIsIndhaXQiLCJyZWFkeSIsInNpdGUiLCJwYWdlIiwidHJhbnNpdGlvbiIsImZldGNoIiwib3V0IiwiYnJvd3NlciIsIkJvd3NlciIsImdldFBhcnNlciIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzTGlnaHQiLCJCb29sZWFuIiwic2F0aXNmaWVzIiwic2FmYXJpIiwibW9iaWxlIiwiaXMiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXRCcm93c2VyVmVyc2lvbiIsImxpZ2h0IiwiYmluZEV2ZW50cyIsImFjdGlvbk5hbWUiLCJjYWxsYmFjayIsInB1c2giLCJsZW5ndGgiLCJpIiwiZG9uZUFjdGlvbiIsImRvQWN0aW9uIiwid2FpdFJlYWR5Iiwid2FpdFRyYW5zaXRpb24iLCJwYWdlQ2xlYW4iLCJzY3JvbGxIYW5kbGVyIiwib2xkUGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJlbGVtZW50IiwibW91c2VIYW5kbGVyIiwicGFzc2l2ZSIsImUiLCJwYWdlWCIsInBhZ2VZIiwiZW1pdCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJyZXNpemVIYW5kbGVyIiwiaW5uZXJXaWR0aCIsImJvZHkiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxZIiwic2Nyb2xsU3RhcnQiLCJoYXNTbW9vdGhTY3JvbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInZpZGVvIiwicGF1c2VkIiwicGF1c2UiLCJjb250YWlucyIsInJlbW92ZSIsInBsYXkiLCJsb3R0aWUiLCJhZGRBY3Rpb24iLCJzZWxmIiwicGxheWVyIiwiaW5pdFBsYXllciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXN0cm95IiwibG9hZEFuaW1hdGlvbiIsImNvbnRhaW5lciIsInJlbmRlcmVyIiwibG9vcCIsImF1dG9wbGF5IiwicGF0aCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImhhc0F0dHJpYnV0ZSIsImxvb3BGcmFtZSIsIk51bWJlciIsInJldmVyc2UiLCJ0b3RhbEZyYW1lcyIsImN1cnJlbnRGcmFtZSIsIk1hdGgiLCJyb3VuZCIsInBsYXlEaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJnb1RvQW5kUGxheSIsImVsZW1lbnRzIiwib24iLCJkaXNhYmxlIiwiZW5hYmxlIiwicGFyYWxsYXgiLCJlbCIsInNldEJvdW5kaW5nIiwiY2hlY2tFbGVtZW50cyIsInNtb290aFNjcm9sbFRvcCIsIm1heCIsImJvdW5kaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic3RhcnQiLCJ0b3AiLCJlbmQiLCJvZmZzZXRIZWlnaHQiLCJhbXBsaXR1ZGUiLCJyYW5kQW1wbGl0dWRlIiwibWF0Y2giLCJyYW5kb20iLCJ0eXBlIiwiYW5jaG9yIiwidGFyZ2V0Iiwib3ZlcmZsb3ciLCJpbmRleCIsInByb2dyZXNzIiwibW92ZW1lbnQiLCJ0cmFuc2Zvcm0iLCJTdHJpbmciLCJhYnMiLCJyZXBsYWNlIiwiY2xvc2VzdFBvbHlmaWxsIiwiY3VzdG9tRXZlbnRQb2x5ZmlsbCIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJtYXRjaGVzIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJjbG9zZXN0IiwicyIsImNhbGwiLCJwYXJlbnRFbGVtZW50Iiwibm9kZVR5cGUiLCJDdXN0b21FdmVudCIsImV2ZW50IiwicGFyYW1zIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkZXRhaWwiLCJldnQiLCJjcmVhdGVFdmVudCIsImluaXRDdXN0b21FdmVudCIsInBvbHlmaWxsIiwiUHJlTG9hZGVyIiwicHJlbG9hZGVyIiwib3BhY2l0eSIsImNhblJldmVhbCIsIkFycmF5IiwiZnJvbSIsIm1hcCIsIm1pZGRsZSIsInRocmVzaG9sZCIsInJldmVhbEluRGVsYXkiLCJyZXZlYWxJblRpbWVvdXQiLCJzdGF0ZSIsImlzSW4iLCJkZWxheSIsImlzT3V0IiwiZGlzcGF0Y2hFdmVudCIsImNvbnRhaW5lcnMiLCJpbmVydGlhIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZXF1ZXN0SWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyYWZBbmltYXRpb24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJwYXJlbnQiLCJoZWlnaHQiLCJib3R0b20iLCJwb3NpdGlvbiIsImxlZnQiLCJ3aWR0aCIsIndpbGxDaGFuZ2UiLCJnYXAiLCJjZWlsIiwibWF4R2FwIiwibWluIiwidXJsIiwibG9jYXRpb24iLCJocmVmIiwicGFnZUZldGNoZWQiLCJsaXN0ZW5lcnMiLCJsaW5rSGFuZGxlciIsImN1cnJlbnRUYXJnZXQiLCJpbmRleE9mIiwib3JpZ2luIiwicHJldmVudERlZmF1bHQiLCJuYXZpZ2F0ZVRvIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImhpc3RvcnlTdGF0ZUNoYW5nZWQiLCJiaW5kTGlua3NFdmVudCIsImNyZWRlbnRpYWxzIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsInNjcm9sbCIsInVuYmluZExpbmtzRXZlbnQiLCJodG1sIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiY3VycmVudFBhZ2UiLCJuZXdQYWdlIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJUZXh0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsZUFBZSxLQUFpRCxvQkFBb0IsU0FBMkcsQ0FBQyxrQkFBa0IsbUJBQW1CLFNBQVMsY0FBYyw0QkFBNEIsWUFBWSxxQkFBcUIsMkRBQTJELHVDQUF1QyxxQ0FBcUMsb0JBQW9CLEVBQUUsaUJBQWlCLDRGQUE0RixlQUFlLHdDQUF3QyxTQUFTLEVBQUUsbUJBQW1CLDhCQUE4QixxREFBcUQsMEJBQTBCLDZDQUE2QyxzQkFBc0IsNkRBQTZELFlBQVksZUFBZSxTQUFTLGlCQUFpQixpQ0FBaUMsaUJBQWlCLFlBQVksVUFBVSxzQkFBc0IsbUJBQW1CLGlEQUFpRCxrQkFBa0IsRUFBRSxtQkFBbUIsYUFBYSxpQ0FBaUMseUJBQXlCLGNBQWMscUNBQXFDLGlCQUFpQiwr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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EscUNBQXFDLDBCQUEwQjtBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLDBCQUEwQixlQUFlO0FBQ3RFOztBQUVPO0FBQ1A7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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aWxlIjoibHVnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvanMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4uL3NyYy9qcy9sdWdlLmpzXCIpO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5ib3dzZXI9dCgpOmUuYm93c2VyPXQoKX0odGhpcywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gcihuKXtpZih0W25dKXJldHVybiB0W25dLmV4cG9ydHM7dmFyIGk9dFtuXT17aTpuLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbbl0uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsciksaS5sPSEwLGkuZXhwb3J0c31yZXR1cm4gci5tPWUsci5jPXQsci5kPWZ1bmN0aW9uKGUsdCxuKXtyLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6bn0pfSxyLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sci50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1yKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciBuPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoci5yKG4pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgaSBpbiBlKXIuZChuLGksZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxpKSk7cmV0dXJuIG59LHIubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gci5kKHQsXCJhXCIsdCksdH0sci5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxyLnA9XCJcIixyKHIucz05MCl9KHsxNzpmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwLHQuZGVmYXVsdD12b2lkIDA7dmFyIG49cigxOCksaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt9cmV0dXJuIGUuZ2V0Rmlyc3RNYXRjaD1mdW5jdGlvbihlLHQpe3ZhciByPXQubWF0Y2goZSk7cmV0dXJuIHImJnIubGVuZ3RoPjAmJnJbMV18fFwiXCJ9LGUuZ2V0U2Vjb25kTWF0Y2g9ZnVuY3Rpb24oZSx0KXt2YXIgcj10Lm1hdGNoKGUpO3JldHVybiByJiZyLmxlbmd0aD4xJiZyWzJdfHxcIlwifSxlLm1hdGNoQW5kUmV0dXJuQ29uc3Q9ZnVuY3Rpb24oZSx0LHIpe2lmKGUudGVzdCh0KSlyZXR1cm4gcn0sZS5nZXRXaW5kb3dzVmVyc2lvbk5hbWU9ZnVuY3Rpb24oZSl7c3dpdGNoKGUpe2Nhc2VcIk5UXCI6cmV0dXJuXCJOVFwiO2Nhc2VcIlhQXCI6cmV0dXJuXCJYUFwiO2Nhc2VcIk5UIDUuMFwiOnJldHVyblwiMjAwMFwiO2Nhc2VcIk5UIDUuMVwiOnJldHVyblwiWFBcIjtjYXNlXCJOVCA1LjJcIjpyZXR1cm5cIjIwMDNcIjtjYXNlXCJOVCA2LjBcIjpyZXR1cm5cIlZpc3RhXCI7Y2FzZVwiTlQgNi4xXCI6cmV0dXJuXCI3XCI7Y2FzZVwiTlQgNi4yXCI6cmV0dXJuXCI4XCI7Y2FzZVwiTlQgNi4zXCI6cmV0dXJuXCI4LjFcIjtjYXNlXCJOVCAxMC4wXCI6cmV0dXJuXCIxMFwiO2RlZmF1bHQ6cmV0dXJufX0sZS5nZXRNYWNPU1ZlcnNpb25OYW1lPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3BsaXQoXCIuXCIpLnNwbGljZSgwLDIpLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIHBhcnNlSW50KGUsMTApfHwwfSkpO2lmKHQucHVzaCgwKSwxMD09PXRbMF0pc3dpdGNoKHRbMV0pe2Nhc2UgNTpyZXR1cm5cIkxlb3BhcmRcIjtjYXNlIDY6cmV0dXJuXCJTbm93IExlb3BhcmRcIjtjYXNlIDc6cmV0dXJuXCJMaW9uXCI7Y2FzZSA4OnJldHVyblwiTW91bnRhaW4gTGlvblwiO2Nhc2UgOTpyZXR1cm5cIk1hdmVyaWNrc1wiO2Nhc2UgMTA6cmV0dXJuXCJZb3NlbWl0ZVwiO2Nhc2UgMTE6cmV0dXJuXCJFbCBDYXBpdGFuXCI7Y2FzZSAxMjpyZXR1cm5cIlNpZXJyYVwiO2Nhc2UgMTM6cmV0dXJuXCJIaWdoIFNpZXJyYVwiO2Nhc2UgMTQ6cmV0dXJuXCJNb2phdmVcIjtjYXNlIDE1OnJldHVyblwiQ2F0YWxpbmFcIjtkZWZhdWx0OnJldHVybn19LGUuZ2V0QW5kcm9pZFZlcnNpb25OYW1lPWZ1bmN0aW9uKGUpe3ZhciB0PWUuc3BsaXQoXCIuXCIpLnNwbGljZSgwLDIpLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIHBhcnNlSW50KGUsMTApfHwwfSkpO2lmKHQucHVzaCgwKSwhKDE9PT10WzBdJiZ0WzFdPDUpKXJldHVybiAxPT09dFswXSYmdFsxXTw2P1wiQ3VwY2FrZVwiOjE9PT10WzBdJiZ0WzFdPj02P1wiRG9udXRcIjoyPT09dFswXSYmdFsxXTwyP1wiRWNsYWlyXCI6Mj09PXRbMF0mJjI9PT10WzFdP1wiRnJveW9cIjoyPT09dFswXSYmdFsxXT4yP1wiR2luZ2VyYnJlYWRcIjozPT09dFswXT9cIkhvbmV5Y29tYlwiOjQ9PT10WzBdJiZ0WzFdPDE/XCJJY2UgQ3JlYW0gU2FuZHdpY2hcIjo0PT09dFswXSYmdFsxXTw0P1wiSmVsbHkgQmVhblwiOjQ9PT10WzBdJiZ0WzFdPj00P1wiS2l0S2F0XCI6NT09PXRbMF0/XCJMb2xsaXBvcFwiOjY9PT10WzBdP1wiTWFyc2htYWxsb3dcIjo3PT09dFswXT9cIk5vdWdhdFwiOjg9PT10WzBdP1wiT3Jlb1wiOjk9PT10WzBdP1wiUGllXCI6dm9pZCAwfSxlLmdldFZlcnNpb25QcmVjaXNpb249ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc3BsaXQoXCIuXCIpLmxlbmd0aH0sZS5jb21wYXJlVmVyc2lvbnM9ZnVuY3Rpb24odCxyLG4pe3ZvaWQgMD09PW4mJihuPSExKTt2YXIgaT1lLmdldFZlcnNpb25QcmVjaXNpb24odCkscz1lLmdldFZlcnNpb25QcmVjaXNpb24ociksYT1NYXRoLm1heChpLHMpLG89MCx1PWUubWFwKFt0LHJdLChmdW5jdGlvbih0KXt2YXIgcj1hLWUuZ2V0VmVyc2lvblByZWNpc2lvbih0KSxuPXQrbmV3IEFycmF5KHIrMSkuam9pbihcIi4wXCIpO3JldHVybiBlLm1hcChuLnNwbGl0KFwiLlwiKSwoZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBBcnJheSgyMC1lLmxlbmd0aCkuam9pbihcIjBcIikrZX0pKS5yZXZlcnNlKCl9KSk7Zm9yKG4mJihvPWEtTWF0aC5taW4oaSxzKSksYS09MTthPj1vOyl7aWYodVswXVthXT51WzFdW2FdKXJldHVybiAxO2lmKHVbMF1bYV09PT11WzFdW2FdKXtpZihhPT09bylyZXR1cm4gMDthLT0xfWVsc2UgaWYodVswXVthXTx1WzFdW2FdKXJldHVybi0xfX0sZS5tYXA9ZnVuY3Rpb24oZSx0KXt2YXIgcixuPVtdO2lmKEFycmF5LnByb3RvdHlwZS5tYXApcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlLHQpO2ZvcihyPTA7cjxlLmxlbmd0aDtyKz0xKW4ucHVzaCh0KGVbcl0pKTtyZXR1cm4gbn0sZS5maW5kPWZ1bmN0aW9uKGUsdCl7dmFyIHIsbjtpZihBcnJheS5wcm90b3R5cGUuZmluZClyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbChlLHQpO2ZvcihyPTAsbj1lLmxlbmd0aDtyPG47cis9MSl7dmFyIGk9ZVtyXTtpZih0KGkscikpcmV0dXJuIGl9fSxlLmFzc2lnbj1mdW5jdGlvbihlKXtmb3IodmFyIHQscixuPWUsaT1hcmd1bWVudHMubGVuZ3RoLHM9bmV3IEFycmF5KGk+MT9pLTE6MCksYT0xO2E8aTthKyspc1thLTFdPWFyZ3VtZW50c1thXTtpZihPYmplY3QuYXNzaWduKXJldHVybiBPYmplY3QuYXNzaWduLmFwcGx5KE9iamVjdCxbZV0uY29uY2F0KHMpKTt2YXIgbz1mdW5jdGlvbigpe3ZhciBlPXNbdF07XCJvYmplY3RcIj09dHlwZW9mIGUmJm51bGwhPT1lJiZPYmplY3Qua2V5cyhlKS5mb3JFYWNoKChmdW5jdGlvbih0KXtuW3RdPWVbdF19KSl9O2Zvcih0PTAscj1zLmxlbmd0aDt0PHI7dCs9MSlvKCk7cmV0dXJuIGV9LGUuZ2V0QnJvd3NlckFsaWFzPWZ1bmN0aW9uKGUpe3JldHVybiBuLkJST1dTRVJfQUxJQVNFU19NQVBbZV19LGUuZ2V0QnJvd3NlclR5cGVCeUFsaWFzPWZ1bmN0aW9uKGUpe3JldHVybiBuLkJST1dTRVJfTUFQW2VdfHxcIlwifSxlfSgpO3QuZGVmYXVsdD1pLGUuZXhwb3J0cz10LmRlZmF1bHR9LDE4OmZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITAsdC5FTkdJTkVfTUFQPXQuT1NfTUFQPXQuUExBVEZPUk1TX01BUD10LkJST1dTRVJfTUFQPXQuQlJPV1NFUl9BTElBU0VTX01BUD12b2lkIDA7dC5CUk9XU0VSX0FMSUFTRVNfTUFQPXtcIkFtYXpvbiBTaWxrXCI6XCJhbWF6b25fc2lsa1wiLFwiQW5kcm9pZCBCcm93c2VyXCI6XCJhbmRyb2lkXCIsQmFkYTpcImJhZGFcIixCbGFja0JlcnJ5OlwiYmxhY2tiZXJyeVwiLENocm9tZTpcImNocm9tZVwiLENocm9taXVtOlwiY2hyb21pdW1cIixFbGVjdHJvbjpcImVsZWN0cm9uXCIsRXBpcGhhbnk6XCJlcGlwaGFueVwiLEZpcmVmb3g6XCJmaXJlZm94XCIsRm9jdXM6XCJmb2N1c1wiLEdlbmVyaWM6XCJnZW5lcmljXCIsXCJHb29nbGUgU2VhcmNoXCI6XCJnb29nbGVfc2VhcmNoXCIsR29vZ2xlYm90OlwiZ29vZ2xlYm90XCIsXCJJbnRlcm5ldCBFeHBsb3JlclwiOlwiaWVcIixcIkstTWVsZW9uXCI6XCJrX21lbGVvblwiLE1heHRob246XCJtYXh0aG9uXCIsXCJNaWNyb3NvZnQgRWRnZVwiOlwiZWRnZVwiLFwiTVogQnJvd3NlclwiOlwibXpcIixcIk5BVkVSIFdoYWxlIEJyb3dzZXJcIjpcIm5hdmVyXCIsT3BlcmE6XCJvcGVyYVwiLFwiT3BlcmEgQ29hc3RcIjpcIm9wZXJhX2NvYXN0XCIsUGhhbnRvbUpTOlwicGhhbnRvbWpzXCIsUHVmZmluOlwicHVmZmluXCIsUXVwWmlsbGE6XCJxdXB6aWxsYVwiLFFROlwicXFcIixRUUxpdGU6XCJxcWxpdGVcIixTYWZhcmk6XCJzYWZhcmlcIixTYWlsZmlzaDpcInNhaWxmaXNoXCIsXCJTYW1zdW5nIEludGVybmV0IGZvciBBbmRyb2lkXCI6XCJzYW1zdW5nX2ludGVybmV0XCIsU2VhTW9ua2V5Olwic2VhbW9ua2V5XCIsU2xlaXBuaXI6XCJzbGVpcG5pclwiLFN3aW5nOlwic3dpbmdcIixUaXplbjpcInRpemVuXCIsXCJVQyBCcm93c2VyXCI6XCJ1Y1wiLFZpdmFsZGk6XCJ2aXZhbGRpXCIsXCJXZWJPUyBCcm93c2VyXCI6XCJ3ZWJvc1wiLFdlQ2hhdDpcIndlY2hhdFwiLFwiWWFuZGV4IEJyb3dzZXJcIjpcInlhbmRleFwiLFJva3U6XCJyb2t1XCJ9O3QuQlJPV1NFUl9NQVA9e2FtYXpvbl9zaWxrOlwiQW1hem9uIFNpbGtcIixhbmRyb2lkOlwiQW5kcm9pZCBCcm93c2VyXCIsYmFkYTpcIkJhZGFcIixibGFja2JlcnJ5OlwiQmxhY2tCZXJyeVwiLGNocm9tZTpcIkNocm9tZVwiLGNocm9taXVtOlwiQ2hyb21pdW1cIixlbGVjdHJvbjpcIkVsZWN0cm9uXCIsZXBpcGhhbnk6XCJFcGlwaGFueVwiLGZpcmVmb3g6XCJGaXJlZm94XCIsZm9jdXM6XCJGb2N1c1wiLGdlbmVyaWM6XCJHZW5lcmljXCIsZ29vZ2xlYm90OlwiR29vZ2xlYm90XCIsZ29vZ2xlX3NlYXJjaDpcIkdvb2dsZSBTZWFyY2hcIixpZTpcIkludGVybmV0IEV4cGxvcmVyXCIsa19tZWxlb246XCJLLU1lbGVvblwiLG1heHRob246XCJNYXh0aG9uXCIsZWRnZTpcIk1pY3Jvc29mdCBFZGdlXCIsbXo6XCJNWiBCcm93c2VyXCIsbmF2ZXI6XCJOQVZFUiBXaGFsZSBCcm93c2VyXCIsb3BlcmE6XCJPcGVyYVwiLG9wZXJhX2NvYXN0OlwiT3BlcmEgQ29hc3RcIixwaGFudG9tanM6XCJQaGFudG9tSlNcIixwdWZmaW46XCJQdWZmaW5cIixxdXB6aWxsYTpcIlF1cFppbGxhXCIscXE6XCJRUSBCcm93c2VyXCIscXFsaXRlOlwiUVEgQnJvd3NlciBMaXRlXCIsc2FmYXJpOlwiU2FmYXJpXCIsc2FpbGZpc2g6XCJTYWlsZmlzaFwiLHNhbXN1bmdfaW50ZXJuZXQ6XCJTYW1zdW5nIEludGVybmV0IGZvciBBbmRyb2lkXCIsc2VhbW9ua2V5OlwiU2VhTW9ua2V5XCIsc2xlaXBuaXI6XCJTbGVpcG5pclwiLHN3aW5nOlwiU3dpbmdcIix0aXplbjpcIlRpemVuXCIsdWM6XCJVQyBCcm93c2VyXCIsdml2YWxkaTpcIlZpdmFsZGlcIix3ZWJvczpcIldlYk9TIEJyb3dzZXJcIix3ZWNoYXQ6XCJXZUNoYXRcIix5YW5kZXg6XCJZYW5kZXggQnJvd3NlclwifTt0LlBMQVRGT1JNU19NQVA9e3RhYmxldDpcInRhYmxldFwiLG1vYmlsZTpcIm1vYmlsZVwiLGRlc2t0b3A6XCJkZXNrdG9wXCIsdHY6XCJ0dlwifTt0Lk9TX01BUD17V2luZG93c1Bob25lOlwiV2luZG93cyBQaG9uZVwiLFdpbmRvd3M6XCJXaW5kb3dzXCIsTWFjT1M6XCJtYWNPU1wiLGlPUzpcImlPU1wiLEFuZHJvaWQ6XCJBbmRyb2lkXCIsV2ViT1M6XCJXZWJPU1wiLEJsYWNrQmVycnk6XCJCbGFja0JlcnJ5XCIsQmFkYTpcIkJhZGFcIixUaXplbjpcIlRpemVuXCIsTGludXg6XCJMaW51eFwiLENocm9tZU9TOlwiQ2hyb21lIE9TXCIsUGxheVN0YXRpb240OlwiUGxheVN0YXRpb24gNFwiLFJva3U6XCJSb2t1XCJ9O3QuRU5HSU5FX01BUD17RWRnZUhUTUw6XCJFZGdlSFRNTFwiLEJsaW5rOlwiQmxpbmtcIixUcmlkZW50OlwiVHJpZGVudFwiLFByZXN0bzpcIlByZXN0b1wiLEdlY2tvOlwiR2Vja29cIixXZWJLaXQ6XCJXZWJLaXRcIn19LDkwOmZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITAsdC5kZWZhdWx0PXZvaWQgMDt2YXIgbixpPShuPXIoOTEpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn0scz1yKDE4KTtmdW5jdGlvbiBhKGUsdCl7Zm9yKHZhciByPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBuPXRbcl07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX12YXIgbz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXt9dmFyIHQscixuO3JldHVybiBlLmdldFBhcnNlcj1mdW5jdGlvbihlLHQpe2lmKHZvaWQgMD09PXQmJih0PSExKSxcInN0cmluZ1wiIT10eXBlb2YgZSl0aHJvdyBuZXcgRXJyb3IoXCJVc2VyQWdlbnQgc2hvdWxkIGJlIGEgc3RyaW5nXCIpO3JldHVybiBuZXcgaS5kZWZhdWx0KGUsdCl9LGUucGFyc2U9ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBpLmRlZmF1bHQoZSkuZ2V0UmVzdWx0KCl9LHQ9ZSxuPVt7a2V5OlwiQlJPV1NFUl9NQVBcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcy5CUk9XU0VSX01BUH19LHtrZXk6XCJFTkdJTkVfTUFQXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHMuRU5HSU5FX01BUH19LHtrZXk6XCJPU19NQVBcIixnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gcy5PU19NQVB9fSx7a2V5OlwiUExBVEZPUk1TX01BUFwiLGdldDpmdW5jdGlvbigpe3JldHVybiBzLlBMQVRGT1JNU19NQVB9fV0sKHI9bnVsbCkmJmEodC5wcm90b3R5cGUsciksbiYmYSh0LG4pLGV9KCk7dC5kZWZhdWx0PW8sZS5leHBvcnRzPXQuZGVmYXVsdH0sOTE6ZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO3QuX19lc01vZHVsZT0hMCx0LmRlZmF1bHQ9dm9pZCAwO3ZhciBuPXUocig5MikpLGk9dShyKDkzKSkscz11KHIoOTQpKSxhPXUocig5NSkpLG89dShyKDE3KSk7ZnVuY3Rpb24gdShlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19dmFyIGQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7aWYodm9pZCAwPT09dCYmKHQ9ITEpLG51bGw9PWV8fFwiXCI9PT1lKXRocm93IG5ldyBFcnJvcihcIlVzZXJBZ2VudCBwYXJhbWV0ZXIgY2FuJ3QgYmUgZW1wdHlcIik7dGhpcy5fdWE9ZSx0aGlzLnBhcnNlZFJlc3VsdD17fSwhMCE9PXQmJnRoaXMucGFyc2UoKX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5nZXRVQT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl91YX0sdC50ZXN0PWZ1bmN0aW9uKGUpe3JldHVybiBlLnRlc3QodGhpcy5fdWEpfSx0LnBhcnNlQnJvd3Nlcj1mdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5wYXJzZWRSZXN1bHQuYnJvd3Nlcj17fTt2YXIgdD1vLmRlZmF1bHQuZmluZChuLmRlZmF1bHQsKGZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQudGVzdClyZXR1cm4gdC50ZXN0KGUpO2lmKHQudGVzdCBpbnN0YW5jZW9mIEFycmF5KXJldHVybiB0LnRlc3Quc29tZSgoZnVuY3Rpb24odCl7cmV0dXJuIGUudGVzdCh0KX0pKTt0aHJvdyBuZXcgRXJyb3IoXCJCcm93c2VyJ3MgdGVzdCBmdW5jdGlvbiBpcyBub3QgdmFsaWRcIil9KSk7cmV0dXJuIHQmJih0aGlzLnBhcnNlZFJlc3VsdC5icm93c2VyPXQuZGVzY3JpYmUodGhpcy5nZXRVQSgpKSksdGhpcy5wYXJzZWRSZXN1bHQuYnJvd3Nlcn0sdC5nZXRCcm93c2VyPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucGFyc2VkUmVzdWx0LmJyb3dzZXI/dGhpcy5wYXJzZWRSZXN1bHQuYnJvd3Nlcjp0aGlzLnBhcnNlQnJvd3NlcigpfSx0LmdldEJyb3dzZXJOYW1lPWZ1bmN0aW9uKGUpe3JldHVybiBlP1N0cmluZyh0aGlzLmdldEJyb3dzZXIoKS5uYW1lKS50b0xvd2VyQ2FzZSgpfHxcIlwiOnRoaXMuZ2V0QnJvd3NlcigpLm5hbWV8fFwiXCJ9LHQuZ2V0QnJvd3NlclZlcnNpb249ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5nZXRCcm93c2VyKCkudmVyc2lvbn0sdC5nZXRPUz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcnNlZFJlc3VsdC5vcz90aGlzLnBhcnNlZFJlc3VsdC5vczp0aGlzLnBhcnNlT1MoKX0sdC5wYXJzZU9TPWZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLnBhcnNlZFJlc3VsdC5vcz17fTt2YXIgdD1vLmRlZmF1bHQuZmluZChpLmRlZmF1bHQsKGZ1bmN0aW9uKHQpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQudGVzdClyZXR1cm4gdC50ZXN0KGUpO2lmKHQudGVzdCBpbnN0YW5jZW9mIEFycmF5KXJldHVybiB0LnRlc3Quc29tZSgoZnVuY3Rpb24odCl7cmV0dXJuIGUudGVzdCh0KX0pKTt0aHJvdyBuZXcgRXJyb3IoXCJCcm93c2VyJ3MgdGVzdCBmdW5jdGlvbiBpcyBub3QgdmFsaWRcIil9KSk7cmV0dXJuIHQmJih0aGlzLnBhcnNlZFJlc3VsdC5vcz10LmRlc2NyaWJlKHRoaXMuZ2V0VUEoKSkpLHRoaXMucGFyc2VkUmVzdWx0Lm9zfSx0LmdldE9TTmFtZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLmdldE9TKCkubmFtZTtyZXR1cm4gZT9TdHJpbmcodCkudG9Mb3dlckNhc2UoKXx8XCJcIjp0fHxcIlwifSx0LmdldE9TVmVyc2lvbj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmdldE9TKCkudmVyc2lvbn0sdC5nZXRQbGF0Zm9ybT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcnNlZFJlc3VsdC5wbGF0Zm9ybT90aGlzLnBhcnNlZFJlc3VsdC5wbGF0Zm9ybTp0aGlzLnBhcnNlUGxhdGZvcm0oKX0sdC5nZXRQbGF0Zm9ybVR5cGU9ZnVuY3Rpb24oZSl7dm9pZCAwPT09ZSYmKGU9ITEpO3ZhciB0PXRoaXMuZ2V0UGxhdGZvcm0oKS50eXBlO3JldHVybiBlP1N0cmluZyh0KS50b0xvd2VyQ2FzZSgpfHxcIlwiOnR8fFwiXCJ9LHQucGFyc2VQbGF0Zm9ybT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5wYXJzZWRSZXN1bHQucGxhdGZvcm09e307dmFyIHQ9by5kZWZhdWx0LmZpbmQocy5kZWZhdWx0LChmdW5jdGlvbih0KXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRlc3QpcmV0dXJuIHQudGVzdChlKTtpZih0LnRlc3QgaW5zdGFuY2VvZiBBcnJheSlyZXR1cm4gdC50ZXN0LnNvbWUoKGZ1bmN0aW9uKHQpe3JldHVybiBlLnRlc3QodCl9KSk7dGhyb3cgbmV3IEVycm9yKFwiQnJvd3NlcidzIHRlc3QgZnVuY3Rpb24gaXMgbm90IHZhbGlkXCIpfSkpO3JldHVybiB0JiYodGhpcy5wYXJzZWRSZXN1bHQucGxhdGZvcm09dC5kZXNjcmliZSh0aGlzLmdldFVBKCkpKSx0aGlzLnBhcnNlZFJlc3VsdC5wbGF0Zm9ybX0sdC5nZXRFbmdpbmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXJzZWRSZXN1bHQuZW5naW5lP3RoaXMucGFyc2VkUmVzdWx0LmVuZ2luZTp0aGlzLnBhcnNlRW5naW5lKCl9LHQuZ2V0RW5naW5lTmFtZT1mdW5jdGlvbihlKXtyZXR1cm4gZT9TdHJpbmcodGhpcy5nZXRFbmdpbmUoKS5uYW1lKS50b0xvd2VyQ2FzZSgpfHxcIlwiOnRoaXMuZ2V0RW5naW5lKCkubmFtZXx8XCJcIn0sdC5wYXJzZUVuZ2luZT1mdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5wYXJzZWRSZXN1bHQuZW5naW5lPXt9O3ZhciB0PW8uZGVmYXVsdC5maW5kKGEuZGVmYXVsdCwoZnVuY3Rpb24odCl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC50ZXN0KXJldHVybiB0LnRlc3QoZSk7aWYodC50ZXN0IGluc3RhbmNlb2YgQXJyYXkpcmV0dXJuIHQudGVzdC5zb21lKChmdW5jdGlvbih0KXtyZXR1cm4gZS50ZXN0KHQpfSkpO3Rocm93IG5ldyBFcnJvcihcIkJyb3dzZXIncyB0ZXN0IGZ1bmN0aW9uIGlzIG5vdCB2YWxpZFwiKX0pKTtyZXR1cm4gdCYmKHRoaXMucGFyc2VkUmVzdWx0LmVuZ2luZT10LmRlc2NyaWJlKHRoaXMuZ2V0VUEoKSkpLHRoaXMucGFyc2VkUmVzdWx0LmVuZ2luZX0sdC5wYXJzZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhcnNlQnJvd3NlcigpLHRoaXMucGFyc2VPUygpLHRoaXMucGFyc2VQbGF0Zm9ybSgpLHRoaXMucGFyc2VFbmdpbmUoKSx0aGlzfSx0LmdldFJlc3VsdD1mdW5jdGlvbigpe3JldHVybiBvLmRlZmF1bHQuYXNzaWduKHt9LHRoaXMucGFyc2VkUmVzdWx0KX0sdC5zYXRpc2ZpZXM9ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcyxyPXt9LG49MCxpPXt9LHM9MDtpZihPYmplY3Qua2V5cyhlKS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgYT1lW3RdO1wic3RyaW5nXCI9PXR5cGVvZiBhPyhpW3RdPWEscys9MSk6XCJvYmplY3RcIj09dHlwZW9mIGEmJihyW3RdPWEsbis9MSl9KSksbj4wKXt2YXIgYT1PYmplY3Qua2V5cyhyKSx1PW8uZGVmYXVsdC5maW5kKGEsKGZ1bmN0aW9uKGUpe3JldHVybiB0LmlzT1MoZSl9KSk7aWYodSl7dmFyIGQ9dGhpcy5zYXRpc2ZpZXMoclt1XSk7aWYodm9pZCAwIT09ZClyZXR1cm4gZH12YXIgYz1vLmRlZmF1bHQuZmluZChhLChmdW5jdGlvbihlKXtyZXR1cm4gdC5pc1BsYXRmb3JtKGUpfSkpO2lmKGMpe3ZhciBmPXRoaXMuc2F0aXNmaWVzKHJbY10pO2lmKHZvaWQgMCE9PWYpcmV0dXJuIGZ9fWlmKHM+MCl7dmFyIGw9T2JqZWN0LmtleXMoaSksaD1vLmRlZmF1bHQuZmluZChsLChmdW5jdGlvbihlKXtyZXR1cm4gdC5pc0Jyb3dzZXIoZSwhMCl9KSk7aWYodm9pZCAwIT09aClyZXR1cm4gdGhpcy5jb21wYXJlVmVyc2lvbihpW2hdKX19LHQuaXNCcm93c2VyPWZ1bmN0aW9uKGUsdCl7dm9pZCAwPT09dCYmKHQ9ITEpO3ZhciByPXRoaXMuZ2V0QnJvd3Nlck5hbWUoKS50b0xvd2VyQ2FzZSgpLG49ZS50b0xvd2VyQ2FzZSgpLGk9by5kZWZhdWx0LmdldEJyb3dzZXJUeXBlQnlBbGlhcyhuKTtyZXR1cm4gdCYmaSYmKG49aS50b0xvd2VyQ2FzZSgpKSxuPT09cn0sdC5jb21wYXJlVmVyc2lvbj1mdW5jdGlvbihlKXt2YXIgdD1bMF0scj1lLG49ITEsaT10aGlzLmdldEJyb3dzZXJWZXJzaW9uKCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkpcmV0dXJuXCI+XCI9PT1lWzBdfHxcIjxcIj09PWVbMF0/KHI9ZS5zdWJzdHIoMSksXCI9XCI9PT1lWzFdPyhuPSEwLHI9ZS5zdWJzdHIoMikpOnQ9W10sXCI+XCI9PT1lWzBdP3QucHVzaCgxKTp0LnB1c2goLTEpKTpcIj1cIj09PWVbMF0/cj1lLnN1YnN0cigxKTpcIn5cIj09PWVbMF0mJihuPSEwLHI9ZS5zdWJzdHIoMSkpLHQuaW5kZXhPZihvLmRlZmF1bHQuY29tcGFyZVZlcnNpb25zKGkscixuKSk+LTF9LHQuaXNPUz1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5nZXRPU05hbWUoITApPT09U3RyaW5nKGUpLnRvTG93ZXJDYXNlKCl9LHQuaXNQbGF0Zm9ybT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5nZXRQbGF0Zm9ybVR5cGUoITApPT09U3RyaW5nKGUpLnRvTG93ZXJDYXNlKCl9LHQuaXNFbmdpbmU9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuZ2V0RW5naW5lTmFtZSghMCk9PT1TdHJpbmcoZSkudG9Mb3dlckNhc2UoKX0sdC5pcz1mdW5jdGlvbihlLHQpe3JldHVybiB2b2lkIDA9PT10JiYodD0hMSksdGhpcy5pc0Jyb3dzZXIoZSx0KXx8dGhpcy5pc09TKGUpfHx0aGlzLmlzUGxhdGZvcm0oZSl9LHQuc29tZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzO3JldHVybiB2b2lkIDA9PT1lJiYoZT1bXSksZS5zb21lKChmdW5jdGlvbihlKXtyZXR1cm4gdC5pcyhlKX0pKX0sZX0oKTt0LmRlZmF1bHQ9ZCxlLmV4cG9ydHM9dC5kZWZhdWx0fSw5MjpmdW5jdGlvbihlLHQscil7XCJ1c2Ugc3RyaWN0XCI7dC5fX2VzTW9kdWxlPSEwLHQuZGVmYXVsdD12b2lkIDA7dmFyIG4saT0obj1yKDE3KSkmJm4uX19lc01vZHVsZT9uOntkZWZhdWx0Om59O3ZhciBzPS92ZXJzaW9uXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGE9W3t0ZXN0OlsvZ29vZ2xlYm90L2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiR29vZ2xlYm90XCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL2dvb2dsZWJvdFxcLyhcXGQrKFxcLlxcZCspKS9pLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL29wZXJhL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiT3BlcmFcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86b3BlcmEpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL29wclxcL3xvcGlvcy9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIk9wZXJhXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/Om9wcnxvcGlvcylbXFxzL10oXFxTKykvaSxlKXx8aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9TYW1zdW5nQnJvd3Nlci9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIlNhbXN1bmcgSW50ZXJuZXQgZm9yIEFuZHJvaWRcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86U2Ftc3VuZ0Jyb3dzZXIpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL1doYWxlL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiTkFWRVIgV2hhbGUgQnJvd3NlclwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSl8fGkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzp3aGFsZSlbXFxzL10oXFxkKyg/OlxcLlxcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9NWkJyb3dzZXIvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJNWiBCcm93c2VyXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/Ok1aQnJvd3NlcilbXFxzL10oXFxkKyg/OlxcLlxcZCspKykvaSxlKXx8aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9mb2N1cy9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIkZvY3VzXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/OmZvY3VzKVtcXHMvXShcXGQrKD86XFwuXFxkKykrKS9pLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3N3aW5nL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiU3dpbmdcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86c3dpbmcpW1xccy9dKFxcZCsoPzpcXC5cXGQrKSspL2ksZSl8fGkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvY29hc3QvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJPcGVyYSBDb2FzdFwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSl8fGkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpjb2FzdClbXFxzL10oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0Olsvb3B0XFwvXFxkKyg/Oi4/Xz9cXGQrKSsvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJPcGVyYSBUb3VjaFwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpvcHQpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3lhYnJvd3Nlci9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIllhbmRleCBCcm93c2VyXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/OnlhYnJvd3NlcilbXFxzL10oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSl8fGkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvdWNicm93c2VyL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiVUMgQnJvd3NlclwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSl8fGkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzp1Y2Jyb3dzZXIpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL01heHRob258bXhpb3MvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJNYXh0aG9uXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKXx8aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/Ok1heHRob258bXhpb3MpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL2VwaXBoYW55L2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiRXBpcGhhbnlcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86ZXBpcGhhbnkpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3B1ZmZpbi9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIlB1ZmZpblwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSl8fGkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpwdWZmaW4pW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3NsZWlwbmlyL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiU2xlaXBuaXJcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86c2xlaXBuaXIpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL2stbWVsZW9uL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiSy1NZWxlb25cIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86ay1tZWxlb24pW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL21pY3JvbWVzc2VuZ2VyL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiV2VDaGF0XCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/Om1pY3JvbWVzc2VuZ2VyKVtcXHMvXShcXGQrKFxcLj9fP1xcZCspKykvaSxlKXx8aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9xcWJyb3dzZXIvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6L3FxYnJvd3NlcmxpdGUvaS50ZXN0KGUpP1wiUVEgQnJvd3NlciBMaXRlXCI6XCJRUSBCcm93c2VyXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/OnFxYnJvd3NlcmxpdGV8cXFicm93c2VyKVsvXShcXGQrKFxcLj9fP1xcZCspKykvaSxlKXx8aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9tc2llfHRyaWRlbnQvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJJbnRlcm5ldCBFeHBsb3JlclwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzptc2llIHxydjopKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL1xcc2VkZ1xcLy9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIk1pY3Jvc29mdCBFZGdlXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL1xcc2VkZ1xcLyhcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9lZGcoW2VhXXxpb3MpL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiTWljcm9zb2Z0IEVkZ2VcIn0scj1pLmRlZmF1bHQuZ2V0U2Vjb25kTWF0Y2goL2VkZyhbZWFdfGlvcylcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0Olsvdml2YWxkaS9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIlZpdmFsZGlcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvdml2YWxkaVxcLyhcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9zZWFtb25rZXkvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJTZWFNb25rZXlcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvc2VhbW9ua2V5XFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3NhaWxmaXNoL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiU2FpbGZpc2hcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvc2FpbGZpc2hcXHM/YnJvd3NlclxcLyhcXGQrKFxcLlxcZCspPykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9zaWxrL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiQW1hem9uIFNpbGtcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvc2lsa1xcLyhcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9waGFudG9tL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiUGhhbnRvbUpTXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL3BoYW50b21qc1xcLyhcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9zbGltZXJqcy9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIlNsaW1lckpTXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL3NsaW1lcmpzXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL2JsYWNrYmVycnl8XFxiYmJcXGQrL2ksL3JpbVxcc3RhYmxldC9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIkJsYWNrQmVycnlcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvYmxhY2tiZXJyeVtcXGRdK1xcLyhcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy8od2VifGhwdylbbzBdcy9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIldlYk9TIEJyb3dzZXJcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvdyg/OmViKT9bbzBdc2Jyb3dzZXJcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvYmFkYS9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIkJhZGFcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvZG9sZmluXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3RpemVuL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiVGl6ZW5cIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86dGl6ZW5cXHM/KT9icm93c2VyXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL3F1cHppbGxhL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiUXVwWmlsbGFcIn0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86cXVwemlsbGEpW1xccy9dKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaChzLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpbL2ZpcmVmb3h8aWNld2Vhc2VsfGZ4aW9zL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiRmlyZWZveFwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpmaXJlZm94fGljZXdlYXNlbHxmeGlvcylbXFxzL10oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvZWxlY3Ryb24vaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJFbGVjdHJvblwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzplbGVjdHJvbilcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvTWl1aUJyb3dzZXIvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6XCJNaXVpXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/Ok1pdWlCcm93c2VyKVtcXHMvXShcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9jaHJvbWl1bS9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIkNocm9taXVtXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goLyg/OmNocm9taXVtKVtcXHMvXShcXGQrKFxcLj9fP1xcZCspKykvaSxlKXx8aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9jaHJvbWV8Y3Jpb3N8Y3Jtby9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD17bmFtZTpcIkNocm9tZVwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpjaHJvbWV8Y3Jpb3N8Y3JtbylcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OlsvR1NBL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiR29vZ2xlIFNlYXJjaFwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oPzpHU0EpXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpmdW5jdGlvbihlKXt2YXIgdD0hZS50ZXN0KC9saWtlIGFuZHJvaWQvaSkscj1lLnRlc3QoL2FuZHJvaWQvaSk7cmV0dXJuIHQmJnJ9LGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiQW5kcm9pZCBCcm93c2VyXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9wbGF5c3RhdGlvbiA0L2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiUGxheVN0YXRpb24gNFwifSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKHMsZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0Olsvc2FmYXJpfGFwcGxld2Via2l0L2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PXtuYW1lOlwiU2FmYXJpXCJ9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2gocyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy8uKi9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD0tMSE9PWUuc2VhcmNoKFwiXFxcXChcIik/L14oLiopXFwvKC4qKVsgXFx0XVxcKCguKikvOi9eKC4qKVxcLyguKikgLztyZXR1cm57bmFtZTppLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCh0LGUpLHZlcnNpb246aS5kZWZhdWx0LmdldFNlY29uZE1hdGNoKHQsZSl9fX1dO3QuZGVmYXVsdD1hLGUuZXhwb3J0cz10LmRlZmF1bHR9LDkzOmZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITAsdC5kZWZhdWx0PXZvaWQgMDt2YXIgbixpPShuPXIoMTcpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn0scz1yKDE4KTt2YXIgYT1be3Rlc3Q6Wy9Sb2t1XFwvRFZQL10sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL1Jva3VcXC9EVlAtKFxcZCtcXC5cXGQrKS9pLGUpO3JldHVybntuYW1lOnMuT1NfTUFQLlJva3UsdmVyc2lvbjp0fX19LHt0ZXN0Olsvd2luZG93cyBwaG9uZS9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvd2luZG93cyBwaG9uZSAoPzpvcyk/XFxzPyhcXGQrKFxcLlxcZCspKikvaSxlKTtyZXR1cm57bmFtZTpzLk9TX01BUC5XaW5kb3dzUGhvbmUsdmVyc2lvbjp0fX19LHt0ZXN0Olsvd2luZG93cyAvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL1dpbmRvd3MgKChOVHxYUCkoIFxcZFxcZD8uXFxkKT8pL2ksZSkscj1pLmRlZmF1bHQuZ2V0V2luZG93c1ZlcnNpb25OYW1lKHQpO3JldHVybntuYW1lOnMuT1NfTUFQLldpbmRvd3MsdmVyc2lvbjp0LHZlcnNpb25OYW1lOnJ9fX0se3Rlc3Q6Wy9NYWNpbnRvc2goLio/KSBGeGlPUyguKj8pXFwvL10sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6cy5PU19NQVAuaU9TfSxyPWkuZGVmYXVsdC5nZXRTZWNvbmRNYXRjaCgvKFZlcnNpb25cXC8pKFxcZFtcXGQuXSspLyxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy9tYWNpbnRvc2gvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL21hYyBvcyB4IChcXGQrKFxcLj9fP1xcZCspKykvaSxlKS5yZXBsYWNlKC9bX1xcc10vZyxcIi5cIikscj1pLmRlZmF1bHQuZ2V0TWFjT1NWZXJzaW9uTmFtZSh0KSxuPXtuYW1lOnMuT1NfTUFQLk1hY09TLHZlcnNpb246dH07cmV0dXJuIHImJihuLnZlcnNpb25OYW1lPXIpLG59fSx7dGVzdDpbLyhpcG9kfGlwaG9uZXxpcGFkKS9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvb3MgKFxcZCsoW19cXHNdXFxkKykqKSBsaWtlIG1hYyBvcyB4L2ksZSkucmVwbGFjZSgvW19cXHNdL2csXCIuXCIpO3JldHVybntuYW1lOnMuT1NfTUFQLmlPUyx2ZXJzaW9uOnR9fX0se3Rlc3Q6ZnVuY3Rpb24oZSl7dmFyIHQ9IWUudGVzdCgvbGlrZSBhbmRyb2lkL2kpLHI9ZS50ZXN0KC9hbmRyb2lkL2kpO3JldHVybiB0JiZyfSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvYW5kcm9pZFtcXHMvLV0oXFxkKyhcXC5cXGQrKSopL2ksZSkscj1pLmRlZmF1bHQuZ2V0QW5kcm9pZFZlcnNpb25OYW1lKHQpLG49e25hbWU6cy5PU19NQVAuQW5kcm9pZCx2ZXJzaW9uOnR9O3JldHVybiByJiYobi52ZXJzaW9uTmFtZT1yKSxufX0se3Rlc3Q6Wy8od2VifGhwdylbbzBdcy9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvKD86d2VifGhwdylbbzBdc1xcLyhcXGQrKFxcLlxcZCspKikvaSxlKSxyPXtuYW1lOnMuT1NfTUFQLldlYk9TfTtyZXR1cm4gdCYmdC5sZW5ndGgmJihyLnZlcnNpb249dCkscn19LHt0ZXN0OlsvYmxhY2tiZXJyeXxcXGJiYlxcZCsvaSwvcmltXFxzdGFibGV0L2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC9yaW1cXHN0YWJsZXRcXHNvc1xccyhcXGQrKFxcLlxcZCspKikvaSxlKXx8aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL2JsYWNrYmVycnlcXGQrXFwvKFxcZCsoW19cXHNdXFxkKykqKS9pLGUpfHxpLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvXFxiYmIoXFxkKykvaSxlKTtyZXR1cm57bmFtZTpzLk9TX01BUC5CbGFja0JlcnJ5LHZlcnNpb246dH19fSx7dGVzdDpbL2JhZGEvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL2JhZGFcXC8oXFxkKyhcXC5cXGQrKSopL2ksZSk7cmV0dXJue25hbWU6cy5PU19NQVAuQmFkYSx2ZXJzaW9uOnR9fX0se3Rlc3Q6Wy90aXplbi9pXSxkZXNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvdGl6ZW5bL1xcc10oXFxkKyhcXC5cXGQrKSopL2ksZSk7cmV0dXJue25hbWU6cy5PU19NQVAuVGl6ZW4sdmVyc2lvbjp0fX19LHt0ZXN0OlsvbGludXgvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57bmFtZTpzLk9TX01BUC5MaW51eH19fSx7dGVzdDpbL0NyT1MvXSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybntuYW1lOnMuT1NfTUFQLkNocm9tZU9TfX19LHt0ZXN0OlsvUGxheVN0YXRpb24gNC9dLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC9QbGF5U3RhdGlvbiA0Wy9cXHNdKFxcZCsoXFwuXFxkKykqKS9pLGUpO3JldHVybntuYW1lOnMuT1NfTUFQLlBsYXlTdGF0aW9uNCx2ZXJzaW9uOnR9fX1dO3QuZGVmYXVsdD1hLGUuZXhwb3J0cz10LmRlZmF1bHR9LDk0OmZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITAsdC5kZWZhdWx0PXZvaWQgMDt2YXIgbixpPShuPXIoMTcpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn0scz1yKDE4KTt2YXIgYT1be3Rlc3Q6Wy9nb29nbGVib3QvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpcImJvdFwiLHZlbmRvcjpcIkdvb2dsZVwifX19LHt0ZXN0OlsvaHVhd2VpL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oY2FuLWwwMSkvaSxlKSYmXCJOb3ZhXCIscj17dHlwZTpzLlBMQVRGT1JNU19NQVAubW9iaWxlLHZlbmRvcjpcIkh1YXdlaVwifTtyZXR1cm4gdCYmKHIubW9kZWw9dCkscn19LHt0ZXN0OlsvbmV4dXNcXHMqKD86N3w4fDl8MTApLiovaV0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpzLlBMQVRGT1JNU19NQVAudGFibGV0LHZlbmRvcjpcIk5leHVzXCJ9fX0se3Rlc3Q6Wy9pcGFkL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLnRhYmxldCx2ZW5kb3I6XCJBcHBsZVwiLG1vZGVsOlwiaVBhZFwifX19LHt0ZXN0OlsvTWFjaW50b3NoKC4qPykgRnhpT1MoLio/KVxcLy9dLGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLnRhYmxldCx2ZW5kb3I6XCJBcHBsZVwiLG1vZGVsOlwiaVBhZFwifX19LHt0ZXN0Olsva2Z0dCBidWlsZC9pXSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC50YWJsZXQsdmVuZG9yOlwiQW1hem9uXCIsbW9kZWw6XCJLaW5kbGUgRmlyZSBIRCA3XCJ9fX0se3Rlc3Q6Wy9zaWxrL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLnRhYmxldCx2ZW5kb3I6XCJBbWF6b25cIn19fSx7dGVzdDpbL3RhYmxldCg/ISBwYykvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpzLlBMQVRGT1JNU19NQVAudGFibGV0fX19LHt0ZXN0OmZ1bmN0aW9uKGUpe3ZhciB0PWUudGVzdCgvaXBvZHxpcGhvbmUvaSkscj1lLnRlc3QoL2xpa2UgKGlwb2R8aXBob25lKS9pKTtyZXR1cm4gdCYmIXJ9LGRlc2NyaWJlOmZ1bmN0aW9uKGUpe3ZhciB0PWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC8oaXBvZHxpcGhvbmUpL2ksZSk7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLm1vYmlsZSx2ZW5kb3I6XCJBcHBsZVwiLG1vZGVsOnR9fX0se3Rlc3Q6Wy9uZXh1c1xccypbMC02XS4qL2ksL2dhbGF4eSBuZXh1cy9pXSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC5tb2JpbGUsdmVuZG9yOlwiTmV4dXNcIn19fSx7dGVzdDpbL1teLV1tb2JpL2ldLGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLm1vYmlsZX19fSx7dGVzdDpmdW5jdGlvbihlKXtyZXR1cm5cImJsYWNrYmVycnlcIj09PWUuZ2V0QnJvd3Nlck5hbWUoITApfSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC5tb2JpbGUsdmVuZG9yOlwiQmxhY2tCZXJyeVwifX19LHt0ZXN0OmZ1bmN0aW9uKGUpe3JldHVyblwiYmFkYVwiPT09ZS5nZXRCcm93c2VyTmFtZSghMCl9LGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLm1vYmlsZX19fSx7dGVzdDpmdW5jdGlvbihlKXtyZXR1cm5cIndpbmRvd3MgcGhvbmVcIj09PWUuZ2V0QnJvd3Nlck5hbWUoKX0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpzLlBMQVRGT1JNU19NQVAubW9iaWxlLHZlbmRvcjpcIk1pY3Jvc29mdFwifX19LHt0ZXN0OmZ1bmN0aW9uKGUpe3ZhciB0PU51bWJlcihTdHJpbmcoZS5nZXRPU1ZlcnNpb24oKSkuc3BsaXQoXCIuXCIpWzBdKTtyZXR1cm5cImFuZHJvaWRcIj09PWUuZ2V0T1NOYW1lKCEwKSYmdD49M30sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpzLlBMQVRGT1JNU19NQVAudGFibGV0fX19LHt0ZXN0OmZ1bmN0aW9uKGUpe3JldHVyblwiYW5kcm9pZFwiPT09ZS5nZXRPU05hbWUoITApfSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC5tb2JpbGV9fX0se3Rlc3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJtYWNvc1wiPT09ZS5nZXRPU05hbWUoITApfSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC5kZXNrdG9wLHZlbmRvcjpcIkFwcGxlXCJ9fX0se3Rlc3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJ3aW5kb3dzXCI9PT1lLmdldE9TTmFtZSghMCl9LGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue3R5cGU6cy5QTEFURk9STVNfTUFQLmRlc2t0b3B9fX0se3Rlc3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJsaW51eFwiPT09ZS5nZXRPU05hbWUoITApfSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC5kZXNrdG9wfX19LHt0ZXN0OmZ1bmN0aW9uKGUpe3JldHVyblwicGxheXN0YXRpb24gNFwiPT09ZS5nZXRPU05hbWUoITApfSxkZXNjcmliZTpmdW5jdGlvbigpe3JldHVybnt0eXBlOnMuUExBVEZPUk1TX01BUC50dn19fSx7dGVzdDpmdW5jdGlvbihlKXtyZXR1cm5cInJva3VcIj09PWUuZ2V0T1NOYW1lKCEwKX0sZGVzY3JpYmU6ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpzLlBMQVRGT1JNU19NQVAudHZ9fX1dO3QuZGVmYXVsdD1hLGUuZXhwb3J0cz10LmRlZmF1bHR9LDk1OmZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjt0Ll9fZXNNb2R1bGU9ITAsdC5kZWZhdWx0PXZvaWQgMDt2YXIgbixpPShuPXIoMTcpKSYmbi5fX2VzTW9kdWxlP246e2RlZmF1bHQ6bn0scz1yKDE4KTt2YXIgYT1be3Rlc3Q6ZnVuY3Rpb24oZSl7cmV0dXJuXCJtaWNyb3NvZnQgZWRnZVwiPT09ZS5nZXRCcm93c2VyTmFtZSghMCl9LGRlc2NyaWJlOmZ1bmN0aW9uKGUpe2lmKC9cXHNlZGdcXC8vaS50ZXN0KGUpKXJldHVybntuYW1lOnMuRU5HSU5FX01BUC5CbGlua307dmFyIHQ9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL2VkZ2VcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJue25hbWU6cy5FTkdJTkVfTUFQLkVkZ2VIVE1MLHZlcnNpb246dH19fSx7dGVzdDpbL3RyaWRlbnQvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6cy5FTkdJTkVfTUFQLlRyaWRlbnR9LHI9aS5kZWZhdWx0LmdldEZpcnN0TWF0Y2goL3RyaWRlbnRcXC8oXFxkKyhcXC4/Xz9cXGQrKSspL2ksZSk7cmV0dXJuIHImJih0LnZlcnNpb249ciksdH19LHt0ZXN0OmZ1bmN0aW9uKGUpe3JldHVybiBlLnRlc3QoL3ByZXN0by9pKX0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6cy5FTkdJTkVfTUFQLlByZXN0b30scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvcHJlc3RvXFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fSx7dGVzdDpmdW5jdGlvbihlKXt2YXIgdD1lLnRlc3QoL2dlY2tvL2kpLHI9ZS50ZXN0KC9saWtlIGdlY2tvL2kpO3JldHVybiB0JiYhcn0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6cy5FTkdJTkVfTUFQLkdlY2tvfSxyPWkuZGVmYXVsdC5nZXRGaXJzdE1hdGNoKC9nZWNrb1xcLyhcXGQrKFxcLj9fP1xcZCspKykvaSxlKTtyZXR1cm4gciYmKHQudmVyc2lvbj1yKSx0fX0se3Rlc3Q6Wy8oYXBwbGUpP3dlYmtpdFxcLzUzN1xcLjM2L2ldLGRlc2NyaWJlOmZ1bmN0aW9uKCl7cmV0dXJue25hbWU6cy5FTkdJTkVfTUFQLkJsaW5rfX19LHt0ZXN0OlsvKGFwcGxlKT93ZWJraXQvaV0sZGVzY3JpYmU6ZnVuY3Rpb24oZSl7dmFyIHQ9e25hbWU6cy5FTkdJTkVfTUFQLldlYktpdH0scj1pLmRlZmF1bHQuZ2V0Rmlyc3RNYXRjaCgvd2Via2l0XFwvKFxcZCsoXFwuP18/XFxkKykrKS9pLGUpO3JldHVybiByJiYodC52ZXJzaW9uPXIpLHR9fV07dC5kZWZhdWx0PWEsZS5leHBvcnRzPXQuZGVmYXVsdH19KX0pKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSAmJiBpdCAhPT0gbnVsbCkge1xuICAgIHRocm93IFR5cGVFcnJvcihcIkNhbid0IHNldCBcIiArIFN0cmluZyhpdCkgKyAnIGFzIGEgcHJvdG90eXBlJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjaGFyQXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZScpLmNoYXJBdDtcblxuLy8gYEFkdmFuY2VTdHJpbmdJbmRleGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFkdmFuY2VzdHJpbmdpbmRleFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUywgaW5kZXgsIHVuaWNvZGUpIHtcbiAgcmV0dXJuIGluZGV4ICsgKHVuaWNvZGUgPyBjaGFyQXQoUywgaW5kZXgpLmxlbmd0aCA6IDEpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignSW5jb3JyZWN0ICcgKyAobmFtZSA/IG5hbWUgKyAnICcgOiAnJykgKyAnaW52b2NhdGlvbicpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gKCFTVFJJQ1RfTUVUSE9EIHx8ICFVU0VTX1RPX0xFTkdUSCkgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG59IDogW10uZm9yRWFjaDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBiaW5kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtY29udGV4dCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGNhbGxXaXRoU2FmZUl0ZXJhdGlvbkNsb3NpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2FsbC13aXRoLXNhZmUtaXRlcmF0aW9uLWNsb3NpbmcnKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuXG4vLyBgQXJyYXkuZnJvbWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnJvbShhcnJheUxpa2UgLyogLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCAqLykge1xuICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gIHZhciBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBtYXBmbiA9IGFyZ3VtZW50c0xlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gZ2V0SXRlcmF0b3JNZXRob2QoTyk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3IsIG5leHQsIHZhbHVlO1xuICBpZiAobWFwcGluZykgbWFwZm4gPSBiaW5kKG1hcGZuLCBhcmd1bWVudHNMZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgLy8gaWYgdGhlIHRhcmdldCBpcyBub3QgaXRlcmFibGUgb3IgaXQncyBhbiBhcnJheSB3aXRoIHRoZSBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIGEgc2ltcGxlIGNhc2VcbiAgaWYgKGl0ZXJhdG9yTWV0aG9kICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXJhdG9yTWV0aG9kKGl0ZXJhdG9yTWV0aG9kKSkpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhdG9yTWV0aG9kLmNhbGwoTyk7XG4gICAgbmV4dCA9IGl0ZXJhdG9yLm5leHQ7XG4gICAgcmVzdWx0ID0gbmV3IEMoKTtcbiAgICBmb3IgKDshKHN0ZXAgPSBuZXh0LmNhbGwoaXRlcmF0b3IpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICB2YWx1ZSA9IG1hcHBpbmcgPyBjYWxsV2l0aFNhZmVJdGVyYXRpb25DbG9zaW5nKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgcmVzdWx0ID0gbmV3IEMobGVuZ3RoKTtcbiAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgdmFsdWUgPSBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xuICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCJ2YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5cbnZhciBwdXNoID0gW10ucHVzaDtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGZvckVhY2gsIG1hcCwgZmlsdGVyLCBzb21lLCBldmVyeSwgZmluZCwgZmluZEluZGV4LCBmaWx0ZXJPdXQgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgSVNfRklMVEVSX09VVCA9IFRZUEUgPT0gNztcbiAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQsIHNwZWNpZmljQ3JlYXRlKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJbmRleGVkT2JqZWN0KE8pO1xuICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNyZWF0ZSA9IHNwZWNpZmljQ3JlYXRlIHx8IGFycmF5U3BlY2llc0NyZWF0ZTtcbiAgICB2YXIgdGFyZ2V0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSIHx8IElTX0ZJTFRFUl9PVVQgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuICAgIHZhciB2YWx1ZSwgcmVzdWx0O1xuICAgIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZikge1xuICAgICAgdmFsdWUgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlc3VsdCA9IGJvdW5kRnVuY3Rpb24odmFsdWUsIGluZGV4LCBPKTtcbiAgICAgIGlmIChUWVBFKSB7XG4gICAgICAgIGlmIChJU19NQVApIHRhcmdldFtpbmRleF0gPSByZXN1bHQ7IC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXN1bHQpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsdWU7ICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiBwdXNoLmNhbGwodGFyZ2V0LCB2YWx1ZSk7IC8vIGZpbHRlclxuICAgICAgICB9IGVsc2Ugc3dpdGNoIChUWVBFKSB7XG4gICAgICAgICAgY2FzZSA0OiByZXR1cm4gZmFsc2U7ICAgICAgICAgICAgIC8vIGV2ZXJ5XG4gICAgICAgICAgY2FzZSA3OiBwdXNoLmNhbGwodGFyZ2V0LCB2YWx1ZSk7IC8vIGZpbHRlck91dFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiB0YXJnZXQ7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuICBmb3JFYWNoOiBjcmVhdGVNZXRob2QoMCksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUubWFwYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUubWFwXG4gIG1hcDogY3JlYXRlTWV0aG9kKDEpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuICBmaWx0ZXI6IGNyZWF0ZU1ldGhvZCgyKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5zb21lYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuc29tZVxuICBzb21lOiBjcmVhdGVNZXRob2QoMyksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZXZlcnlgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5ldmVyeVxuICBldmVyeTogY3JlYXRlTWV0aG9kKDQpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmZpbmRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kXG4gIGZpbmQ6IGNyZWF0ZU1ldGhvZCg1KSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maW5kSW5kZXhcbiAgZmluZEluZGV4OiBjcmVhdGVNZXRob2QoNiksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyT3V0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtYXJyYXktZmlsdGVyaW5nXG4gIGZpbHRlck91dDogY3JlYXRlTWV0aG9kKDcpXG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICAvLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbiAgLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY3N1xuICByZXR1cm4gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGFycmF5LmNvbnN0cnVjdG9yID0ge307XG4gICAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBmb286IDEgfTtcbiAgICB9O1xuICAgIHJldHVybiBhcnJheVtNRVRIT0RfTkFNRV0oQm9vbGVhbikuZm9vICE9PSAxO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIGFyZ3VtZW50KSB7XG4gIHZhciBtZXRob2QgPSBbXVtNRVRIT0RfTkFNRV07XG4gIHJldHVybiAhIW1ldGhvZCAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY2FsbCxuby10aHJvdy1saXRlcmFsXG4gICAgbWV0aG9kLmNhbGwobnVsbCwgYXJndW1lbnQgfHwgZnVuY3Rpb24gKCkgeyB0aHJvdyAxOyB9LCAxKTtcbiAgfSk7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBjYWNoZSA9IHt9O1xuXG52YXIgdGhyb3dlciA9IGZ1bmN0aW9uIChpdCkgeyB0aHJvdyBpdDsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTUVUSE9EX05BTUUsIG9wdGlvbnMpIHtcbiAgaWYgKGhhcyhjYWNoZSwgTUVUSE9EX05BTUUpKSByZXR1cm4gY2FjaGVbTUVUSE9EX05BTUVdO1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIG1ldGhvZCA9IFtdW01FVEhPRF9OQU1FXTtcbiAgdmFyIEFDQ0VTU09SUyA9IGhhcyhvcHRpb25zLCAnQUNDRVNTT1JTJykgPyBvcHRpb25zLkFDQ0VTU09SUyA6IGZhbHNlO1xuICB2YXIgYXJndW1lbnQwID0gaGFzKG9wdGlvbnMsIDApID8gb3B0aW9uc1swXSA6IHRocm93ZXI7XG4gIHZhciBhcmd1bWVudDEgPSBoYXMob3B0aW9ucywgMSkgPyBvcHRpb25zWzFdIDogdW5kZWZpbmVkO1xuXG4gIHJldHVybiBjYWNoZVtNRVRIT0RfTkFNRV0gPSAhIW1ldGhvZCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIGlmIChBQ0NFU1NPUlMgJiYgIURFU0NSSVBUT1JTKSByZXR1cm4gdHJ1ZTtcbiAgICB2YXIgTyA9IHsgbGVuZ3RoOiAtMSB9O1xuXG4gICAgaWYgKEFDQ0VTU09SUykgZGVmaW5lUHJvcGVydHkoTywgMSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IHRocm93ZXIgfSk7XG4gICAgZWxzZSBPWzFdID0gMTtcblxuICAgIG1ldGhvZC5jYWxsKE8sIGFyZ3VtZW50MCwgYXJndW1lbnQxKTtcbiAgfSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxuLy8gYEFycmF5U3BlY2llc0NyZWF0ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5c3BlY2llc2NyZWF0ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWxBcnJheSwgbGVuZ3RoKSB7XG4gIHZhciBDO1xuICBpZiAoaXNBcnJheShvcmlnaW5hbEFycmF5KSkge1xuICAgIEMgPSBvcmlnaW5hbEFycmF5LmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBlbHNlIGlmIChpc09iamVjdChDKSkge1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIG5ldyAoQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDKShsZW5ndGggPT09IDAgPyAwIDogbGVuZ3RoKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBFTlRSSUVTKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEVOVFJJRVMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpdGVyYXRvckNsb3NlKGl0ZXJhdG9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgY2FsbGVkID0gMDtcbiAgdmFyIGl0ZXJhdG9yV2l0aFJldHVybiA9IHtcbiAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4geyBkb25lOiAhIWNhbGxlZCsrIH07XG4gICAgfSxcbiAgICAncmV0dXJuJzogZnVuY3Rpb24gKCkge1xuICAgICAgU0FGRV9DTE9TSU5HID0gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIGl0ZXJhdG9yV2l0aFJldHVybltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20oaXRlcmF0b3JXaXRoUmV0dXJuLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBTS0lQX0NMT1NJTkcpIHtcbiAgaWYgKCFTS0lQX0NMT1NJTkcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgSVRFUkFUSU9OX1NVUFBPUlQgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgb2JqZWN0ID0ge307XG4gICAgb2JqZWN0W0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4geyBkb25lOiBJVEVSQVRJT05fU1VQUE9SVCA9IHRydWUgfTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9O1xuICAgIGV4ZWMob2JqZWN0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gSVRFUkFUSU9OX1NVUFBPUlQ7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBDT1JSRUNUX0FSR1VNRU5UUyA9IGNsYXNzb2ZSYXcoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiByZXN1bHQ7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzKHRhcmdldCwga2V5KSkgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICB9XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xufSk7XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyIHF1b3QgPSAvXCIvZztcblxuLy8gQi4yLjMuMi4xIENyZWF0ZUhUTUwoc3RyaW5nLCB0YWcsIGF0dHJpYnV0ZSwgdmFsdWUpXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZWh0bWxcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cmluZywgdGFnLCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gIHZhciBTID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoc3RyaW5nKSk7XG4gIHZhciBwMSA9ICc8JyArIHRhZztcbiAgaWYgKGF0dHJpYnV0ZSAhPT0gJycpIHAxICs9ICcgJyArIGF0dHJpYnV0ZSArICc9XCInICsgU3RyaW5nKHZhbHVlKS5yZXBsYWNlKHF1b3QsICcmcXVvdDsnKSArICdcIic7XG4gIHJldHVybiBwMSArICc+JyArIFMgKyAnPC8nICsgdGFnICsgJz4nO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvckNvbnN0cnVjdG9yLCBUT19TVFJJTkdfVEFHLCBmYWxzZSwgdHJ1ZSk7XG4gIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gIHJldHVybiBJdGVyYXRvckNvbnN0cnVjdG9yO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUtleSA9IHRvUHJpbWl0aXZlKGtleSk7XG4gIGlmIChwcm9wZXJ0eUtleSBpbiBvYmplY3QpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBwcm9wZXJ0eUtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W3Byb3BlcnR5S2V5XSA9IHZhbHVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLWl0ZXJhdG9yLWNvbnN0cnVjdG9yJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIEl0ZXJhdG9yc0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKTtcblxudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gSXRlcmF0b3JzQ29yZS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gSXRlcmF0b3JzQ29yZS5CVUdHWV9TQUZBUklfSVRFUkFUT1JTO1xudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG52YXIgRU5UUklFUyA9ICdlbnRyaWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYWJsZSwgTkFNRSwgSXRlcmF0b3JDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvcihJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcblxuICB2YXIgZ2V0SXRlcmF0aW9uTWV0aG9kID0gZnVuY3Rpb24gKEtJTkQpIHtcbiAgICBpZiAoS0lORCA9PT0gREVGQVVMVCAmJiBkZWZhdWx0SXRlcmF0b3IpIHJldHVybiBkZWZhdWx0SXRlcmF0b3I7XG4gICAgaWYgKCFCVUdHWV9TQUZBUklfSVRFUkFUT1JTICYmIEtJTkQgaW4gSXRlcmFibGVQcm90b3R5cGUpIHJldHVybiBJdGVyYWJsZVByb3RvdHlwZVtLSU5EXTtcbiAgICBzd2l0Y2ggKEtJTkQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIEVOVFJJRVM6IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcyk7IH07XG4gIH07XG5cbiAgdmFyIFRPX1NUUklOR19UQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSBmYWxzZTtcbiAgdmFyIEl0ZXJhYmxlUHJvdG90eXBlID0gSXRlcmFibGUucHJvdG90eXBlO1xuICB2YXIgbmF0aXZlSXRlcmF0b3IgPSBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl1cbiAgICB8fCBJdGVyYWJsZVByb3RvdHlwZVsnQEBpdGVyYXRvciddXG4gICAgfHwgREVGQVVMVCAmJiBJdGVyYWJsZVByb3RvdHlwZVtERUZBVUxUXTtcbiAgdmFyIGRlZmF1bHRJdGVyYXRvciA9ICFCVUdHWV9TQUZBUklfSVRFUkFUT1JTICYmIG5hdGl2ZUl0ZXJhdG9yIHx8IGdldEl0ZXJhdGlvbk1ldGhvZChERUZBVUxUKTtcbiAgdmFyIGFueU5hdGl2ZUl0ZXJhdG9yID0gTkFNRSA9PSAnQXJyYXknID8gSXRlcmFibGVQcm90b3R5cGUuZW50cmllcyB8fCBuYXRpdmVJdGVyYXRvciA6IG5hdGl2ZUl0ZXJhdG9yO1xuICB2YXIgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBtZXRob2RzLCBLRVk7XG5cbiAgLy8gZml4IG5hdGl2ZVxuICBpZiAoYW55TmF0aXZlSXRlcmF0b3IpIHtcbiAgICBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihhbnlOYXRpdmVJdGVyYXRvci5jYWxsKG5ldyBJdGVyYWJsZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICBpZiAoIUlTX1BVUkUgJiYgZ2V0UHJvdG90eXBlT2YoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlKSAhPT0gSXRlcmF0b3JQcm90b3R5cGUpIHtcbiAgICAgICAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgICAgc2V0UHJvdG90eXBlT2YoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJdGVyYXRvclByb3RvdHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCB0cnVlLCB0cnVlKTtcbiAgICAgIGlmIChJU19QVVJFKSBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRkFVTFQgPT0gVkFMVUVTICYmIG5hdGl2ZUl0ZXJhdG9yICYmIG5hdGl2ZUl0ZXJhdG9yLm5hbWUgIT09IFZBTFVFUykge1xuICAgIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IHRydWU7XG4gICAgZGVmYXVsdEl0ZXJhdG9yID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmF0aXZlSXRlcmF0b3IuY2FsbCh0aGlzKTsgfTtcbiAgfVxuXG4gIC8vIGRlZmluZSBpdGVyYXRvclxuICBpZiAoKCFJU19QVVJFIHx8IEZPUkNFRCkgJiYgSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdICE9PSBkZWZhdWx0SXRlcmF0b3IpIHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmFibGVQcm90b3R5cGUsIElURVJBVE9SLCBkZWZhdWx0SXRlcmF0b3IpO1xuICB9XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IGRlZmF1bHRJdGVyYXRvcjtcblxuICAvLyBleHBvcnQgYWRkaXRpb25hbCBtZXRob2RzXG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogZ2V0SXRlcmF0aW9uTWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyBkZWZhdWx0SXRlcmF0b3IgOiBnZXRJdGVyYXRpb25NZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiBnZXRJdGVyYXRpb25NZXRob2QoRU5UUklFUylcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoS0VZIGluIG1ldGhvZHMpIHtcbiAgICAgIGlmIChCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB8fCAhKEtFWSBpbiBJdGVyYWJsZVByb3RvdHlwZSkpIHtcbiAgICAgICAgcmVkZWZpbmUoSXRlcmFibGVQcm90b3R5cGUsIEtFWSwgbWV0aG9kc1tLRVldKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgJCh7IHRhcmdldDogTkFNRSwgcHJvdG86IHRydWUsIGZvcmNlZDogQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfSwgbWV0aG9kcyk7XG4gIH1cblxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT0gNztcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBpdGVyYWJsZSBET00gY29sbGVjdGlvbnNcbi8vIGZsYWcgLSBgaXRlcmFibGVgIGludGVyZmFjZSAtICdlbnRyaWVzJywgJ2tleXMnLCAndmFsdWVzJywgJ2ZvckVhY2gnIG1ldGhvZHNcbm1vZHVsZS5leHBvcnRzID0ge1xuICBDU1NSdWxlTGlzdDogMCxcbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogMCxcbiAgQ1NTVmFsdWVMaXN0OiAwLFxuICBDbGllbnRSZWN0TGlzdDogMCxcbiAgRE9NUmVjdExpc3Q6IDAsXG4gIERPTVN0cmluZ0xpc3Q6IDAsXG4gIERPTVRva2VuTGlzdDogMSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IDAsXG4gIEZpbGVMaXN0OiAwLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogMCxcbiAgSFRNTENvbGxlY3Rpb246IDAsXG4gIEhUTUxGb3JtRWxlbWVudDogMCxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IDAsXG4gIE1lZGlhTGlzdDogMCxcbiAgTWltZVR5cGVBcnJheTogMCxcbiAgTmFtZWROb2RlTWFwOiAwLFxuICBOb2RlTGlzdDogMSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogMCxcbiAgUGx1Z2luOiAwLFxuICBQbHVnaW5BcnJheTogMCxcbiAgU1ZHTGVuZ3RoTGlzdDogMCxcbiAgU1ZHTnVtYmVyTGlzdDogMCxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IDAsXG4gIFNWR1BvaW50TGlzdDogMCxcbiAgU1ZHU3RyaW5nTGlzdDogMCxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogMCxcbiAgU291cmNlQnVmZmVyTGlzdDogMCxcbiAgU3R5bGVTaGVldExpc3Q6IDAsXG4gIFRleHRUcmFja0N1ZUxpc3Q6IDAsXG4gIFRleHRUcmFja0xpc3Q6IDAsXG4gIFRvdWNoTGlzdDogMFxufTtcbiIsInZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAvKGlwaG9uZXxpcG9kfGlwYWQpLiphcHBsZXdlYmtpdC9pLnRlc3QodXNlckFnZW50KTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzb2YoZ2xvYmFsLnByb2Nlc3MpID09ICdwcm9jZXNzJztcbiIsInZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAvd2ViMHMoPyEuKmNocm9tZSkvaS50ZXN0KHVzZXJBZ2VudCk7XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCduYXZpZ2F0b3InLCAndXNlckFnZW50JykgfHwgJyc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIHZlcnNpb24gPSBtYXRjaFswXSArIG1hdGNoWzFdO1xufSBlbHNlIGlmICh1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSBtYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb24gJiYgK3ZlcnNpb247XG4iLCIvLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5ub1RhcmdldEdldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgc2V0R2xvYmFsKFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IChnbG9iYWxbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMubm9UYXJnZXRHZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICByZWRlZmluZSh0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3MgbW92ZWQgdG8gZW50cnkgcG9pbnRzXG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnJlZ2V4cC5leGVjJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIHJlZ2V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG5cbnZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAvLyBhIFwiZ3JvcHNcIiBwcm9wZXJ0eS5cbiAgdmFyIHJlID0gLy4vO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xufSk7XG5cbi8vIElFIDw9IDExIHJlcGxhY2VzICQwIHdpdGggdGhlIHdob2xlIG1hdGNoLCBhcyBpZiBpdCB3YXMgJCZcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYwMjQ2NjYvZ2V0dGluZy1pZS10by1yZXBsYWNlLWEtcmVnZXgtd2l0aC10aGUtbGl0ZXJhbC1zdHJpbmctMFxudmFyIFJFUExBQ0VfS0VFUFNfJDAgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ2EnLnJlcGxhY2UoLy4vLCAnJDAnKSA9PT0gJyQwJztcbn0pKCk7XG5cbnZhciBSRVBMQUNFID0gd2VsbEtub3duU3ltYm9sKCdyZXBsYWNlJyk7XG4vLyBTYWZhcmkgPD0gMTMuMC4zKD8pIHN1YnN0aXR1dGVzIG50aCBjYXB0dXJlIHdoZXJlIG4+bSB3aXRoIGFuIGVtcHR5IHN0cmluZ1xudmFyIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID0gKGZ1bmN0aW9uICgpIHtcbiAgaWYgKC8uL1tSRVBMQUNFXSkge1xuICAgIHJldHVybiAvLi9bUkVQTEFDRV0oJ2EnLCAnJDAnKSA9PT0gJyc7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSkoKTtcblxuLy8gQ2hyb21lIDUxIGhhcyBhIGJ1Z2d5IFwic3BsaXRcIiBpbXBsZW1lbnRhdGlvbiB3aGVuIFJlZ0V4cCNleGVjICE9PSBuYXRpdmVFeGVjXG4vLyBXZWV4IEpTIGhhcyBmcm96ZW4gYnVpbHQtaW4gcHJvdG90eXBlcywgc28gdXNlIHRyeSAvIGNhdGNoIHdyYXBwZXJcbnZhciBTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUgPSAvKD86KS87XG4gIHZhciBvcmlnaW5hbEV4ZWMgPSByZS5leGVjO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIHZhciByZXN1bHQgPSAnYWInLnNwbGl0KHJlKTtcbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggIT09IDIgfHwgcmVzdWx0WzBdICE9PSAnYScgfHwgcmVzdWx0WzFdICE9PSAnYic7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBsZW5ndGgsIGV4ZWMsIHNoYW0pIHtcbiAgdmFyIFNZTUJPTCA9IHdlbGxLbm93blN5bWJvbChLRVkpO1xuXG4gIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pO1xuXG4gIHZhciBERUxFR0FURVNfVE9fRVhFQyA9IERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgdmFyIHJlID0gL2EvO1xuXG4gICAgaWYgKEtFWSA9PT0gJ3NwbGl0Jykge1xuICAgICAgLy8gV2UgY2FuJ3QgdXNlIHJlYWwgcmVnZXggaGVyZSBzaW5jZSBpdCBjYXVzZXMgZGVvcHRpbWl6YXRpb25cbiAgICAgIC8vIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uIGluIFY4XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzA2XG4gICAgICByZSA9IHt9O1xuICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgIHJlLmNvbnN0cnVjdG9yID0ge307XG4gICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgICAgcmUuZmxhZ3MgPSAnJztcbiAgICAgIHJlW1NZTUJPTF0gPSAvLi9bU1lNQk9MXTtcbiAgICB9XG5cbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyBleGVjQ2FsbGVkID0gdHJ1ZTsgcmV0dXJuIG51bGw7IH07XG5cbiAgICByZVtTWU1CT0xdKCcnKTtcbiAgICByZXR1cm4gIWV4ZWNDYWxsZWQ7XG4gIH0pO1xuXG4gIGlmIChcbiAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxuICAgICFERUxFR0FURVNfVE9fRVhFQyB8fFxuICAgIChLRVkgPT09ICdyZXBsYWNlJyAmJiAhKFxuICAgICAgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgJiZcbiAgICAgIFJFUExBQ0VfS0VFUFNfJDAgJiZcbiAgICAgICFSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRVxuICAgICkpIHx8XG4gICAgKEtFWSA9PT0gJ3NwbGl0JyAmJiAhU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDKVxuICApIHtcbiAgICB2YXIgbmF0aXZlUmVnRXhwTWV0aG9kID0gLy4vW1NZTUJPTF07XG4gICAgdmFyIG1ldGhvZHMgPSBleGVjKFNZTUJPTCwgJydbS0VZXSwgZnVuY3Rpb24gKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICBpZiAocmVnZXhwLmV4ZWMgPT09IHJlZ2V4cEV4ZWMpIHtcbiAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgLy8gVGhlIG5hdGl2ZSBTdHJpbmcgbWV0aG9kIGFscmVhZHkgZGVsZWdhdGVzIHRvIEBAbWV0aG9kICh0aGlzXG4gICAgICAgICAgLy8gcG9seWZpbGxlZCBmdW5jdGlvbiksIGxlYXNpbmcgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogdHJ1ZSwgdmFsdWU6IG5hdGl2ZVJlZ0V4cE1ldGhvZC5jYWxsKHJlZ2V4cCwgc3RyLCBhcmcyKSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlIH07XG4gICAgfSwge1xuICAgICAgUkVQTEFDRV9LRUVQU18kMDogUkVQTEFDRV9LRUVQU18kMCxcbiAgICAgIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFOiBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRVxuICAgIH0pO1xuICAgIHZhciBzdHJpbmdNZXRob2QgPSBtZXRob2RzWzBdO1xuICAgIHZhciByZWdleE1ldGhvZCA9IG1ldGhvZHNbMV07XG5cbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmluZ01ldGhvZCk7XG4gICAgcmVkZWZpbmUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByZWdleE1ldGhvZC5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJlZ2V4TWV0aG9kLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cblxuICBpZiAoc2hhbSkgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KFJlZ0V4cC5wcm90b3R5cGVbU1lNQk9MXSwgJ3NoYW0nLCB0cnVlKTtcbn07XG4iLCJ2YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcblxuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0KTtcbiAgICB9O1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YXJpYWJsZSA9PSAnZnVuY3Rpb24nID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24ocGF0aFtuYW1lc3BhY2VdKSB8fCBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pXG4gICAgOiBwYXRoW25hbWVzcGFjZV0gJiYgcGF0aFtuYW1lc3BhY2VdW21ldGhvZF0gfHwgZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCJ2YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG52YXIgcmVwbGFjZSA9ICcnLnJlcGxhY2U7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFMgPSAvXFwkKFskJidgXXxcXGRcXGQ/fDxbXj5dKj4pL2c7XG52YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQgPSAvXFwkKFskJidgXXxcXGRcXGQ/KS9nO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldHN1YnN0aXR1dGlvblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobWF0Y2hlZCwgc3RyLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VtZW50KSB7XG4gIHZhciB0YWlsUG9zID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gIHZhciBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQ7XG4gIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBuYW1lZENhcHR1cmVzID0gdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTO1xuICB9XG4gIHJldHVybiByZXBsYWNlLmNhbGwocmVwbGFjZW1lbnQsIHN5bWJvbHMsIGZ1bmN0aW9uIChtYXRjaCwgY2gpIHtcbiAgICB2YXIgY2FwdHVyZTtcbiAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgY2FzZSAnJCc6IHJldHVybiAnJCc7XG4gICAgICBjYXNlICcmJzogcmV0dXJuIG1hdGNoZWQ7XG4gICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICBjYXNlIFwiJ1wiOiByZXR1cm4gc3RyLnNsaWNlKHRhaWxQb3MpO1xuICAgICAgY2FzZSAnPCc6XG4gICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDogLy8gXFxkXFxkP1xuICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgaWYgKG4gPT09IDApIHJldHVybiBtYXRjaDtcbiAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgdmFyIGYgPSBmbG9vcihuIC8gMTApO1xuICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgaWYgKGYgPD0gbSkgcmV0dXJuIGNhcHR1cmVzW2YgLSAxXSA9PT0gdW5kZWZpbmVkID8gY2guY2hhckF0KDEpIDogY2FwdHVyZXNbZiAtIDFdICsgY2guY2hhckF0KDEpO1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICBjYXB0dXJlID0gY2FwdHVyZXNbbiAtIDFdO1xuICAgIH1cbiAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICB9KTtcbn07XG4iLCJ2YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgdmFyIGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZTtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBjb25zb2xlLmVycm9yKGEpIDogY29uc29sZS5lcnJvcihhLCBiKTtcbiAgfVxufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9IDc7XG59KTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyIHNwbGl0ID0gJycuc3BsaXQ7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xufSA6IE9iamVjdDtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xuXG4vLyBtYWtlcyBzdWJjbGFzc2luZyB3b3JrIGNvcnJlY3QgZm9yIHdyYXBwZWQgYnVpbHQtaW5zXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgkdGhpcywgZHVtbXksIFdyYXBwZXIpIHtcbiAgdmFyIE5ld1RhcmdldCwgTmV3VGFyZ2V0UHJvdG90eXBlO1xuICBpZiAoXG4gICAgLy8gaXQgY2FuIHdvcmsgb25seSB3aXRoIG5hdGl2ZSBgc2V0UHJvdG90eXBlT2ZgXG4gICAgc2V0UHJvdG90eXBlT2YgJiZcbiAgICAvLyB3ZSBoYXZlbid0IGNvbXBsZXRlbHkgY29ycmVjdCBwcmUtRVM2IHdheSBmb3IgZ2V0dGluZyBgbmV3LnRhcmdldGAsIHNvIHVzZSB0aGlzXG4gICAgdHlwZW9mIChOZXdUYXJnZXQgPSBkdW1teS5jb25zdHJ1Y3RvcikgPT0gJ2Z1bmN0aW9uJyAmJlxuICAgIE5ld1RhcmdldCAhPT0gV3JhcHBlciAmJlxuICAgIGlzT2JqZWN0KE5ld1RhcmdldFByb3RvdHlwZSA9IE5ld1RhcmdldC5wcm90b3R5cGUpICYmXG4gICAgTmV3VGFyZ2V0UHJvdG90eXBlICE9PSBXcmFwcGVyLnByb3RvdHlwZVxuICApIHNldFByb3RvdHlwZU9mKCR0aGlzLCBOZXdUYXJnZXRQcm90b3R5cGUpO1xuICByZXR1cm4gJHRoaXM7XG59O1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IEZ1bmN0aW9uLnRvU3RyaW5nO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKHR5cGVvZiBzdG9yZS5pbnNwZWN0U291cmNlICE9ICdmdW5jdGlvbicpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nLmNhbGwoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCJ2YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcCcpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgb2JqZWN0SGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVApIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgdmFyIHdtZ2V0ID0gc3RvcmUuZ2V0O1xuICB2YXIgd21oYXMgPSBzdG9yZS5oYXM7XG4gIHZhciB3bXNldCA9IHN0b3JlLnNldDtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHdtc2V0LmNhbGwoc3RvcmUsIGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21nZXQuY2FsbChzdG9yZSwgaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gd21oYXMuY2FsbChzdG9yZSwgaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG90eXBlW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjbGFzc29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09IE5BVElWRSA/IGZhbHNlXG4gICAgOiB0eXBlb2YgZGV0ZWN0aW9uID09ICdmdW5jdGlvbicgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc0FycmF5SXRlcmF0b3JNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXktaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBnZXRJdGVyYXRvck1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgaXRlcmF0b3JDbG9zZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvci1jbG9zZScpO1xuXG52YXIgUmVzdWx0ID0gZnVuY3Rpb24gKHN0b3BwZWQsIHJlc3VsdCkge1xuICB0aGlzLnN0b3BwZWQgPSBzdG9wcGVkO1xuICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCB1bmJvdW5kRnVuY3Rpb24sIG9wdGlvbnMpIHtcbiAgdmFyIHRoYXQgPSBvcHRpb25zICYmIG9wdGlvbnMudGhhdDtcbiAgdmFyIEFTX0VOVFJJRVMgPSAhIShvcHRpb25zICYmIG9wdGlvbnMuQVNfRU5UUklFUyk7XG4gIHZhciBJU19JVEVSQVRPUiA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JU19JVEVSQVRPUik7XG4gIHZhciBJTlRFUlJVUFRFRCA9ICEhKG9wdGlvbnMgJiYgb3B0aW9ucy5JTlRFUlJVUFRFRCk7XG4gIHZhciBmbiA9IGJpbmQodW5ib3VuZEZ1bmN0aW9uLCB0aGF0LCAxICsgQVNfRU5UUklFUyArIElOVEVSUlVQVEVEKTtcbiAgdmFyIGl0ZXJhdG9yLCBpdGVyRm4sIGluZGV4LCBsZW5ndGgsIHJlc3VsdCwgbmV4dCwgc3RlcDtcblxuICB2YXIgc3RvcCA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICBpZiAoaXRlcmF0b3IpIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IpO1xuICAgIHJldHVybiBuZXcgUmVzdWx0KHRydWUsIGNvbmRpdGlvbik7XG4gIH07XG5cbiAgdmFyIGNhbGxGbiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChBU19FTlRSSUVTKSB7XG4gICAgICBhbk9iamVjdCh2YWx1ZSk7XG4gICAgICByZXR1cm4gSU5URVJSVVBURUQgPyBmbih2YWx1ZVswXSwgdmFsdWVbMV0sIHN0b3ApIDogZm4odmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICB9IHJldHVybiBJTlRFUlJVUFRFRCA/IGZuKHZhbHVlLCBzdG9wKSA6IGZuKHZhbHVlKTtcbiAgfTtcblxuICBpZiAoSVNfSVRFUkFUT1IpIHtcbiAgICBpdGVyYXRvciA9IGl0ZXJhYmxlO1xuICB9IGVsc2Uge1xuICAgIGl0ZXJGbiA9IGdldEl0ZXJhdG9yTWV0aG9kKGl0ZXJhYmxlKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoJ1RhcmdldCBpcyBub3QgaXRlcmFibGUnKTtcbiAgICAvLyBvcHRpbWlzYXRpb24gZm9yIGFycmF5IGl0ZXJhdG9yc1xuICAgIGlmIChpc0FycmF5SXRlcmF0b3JNZXRob2QoaXRlckZuKSkge1xuICAgICAgZm9yIChpbmRleCA9IDAsIGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgIHJlc3VsdCA9IGNhbGxGbihpdGVyYWJsZVtpbmRleF0pO1xuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdCBpbnN0YW5jZW9mIFJlc3VsdCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xuICAgIH1cbiAgICBpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTtcbiAgfVxuXG4gIG5leHQgPSBpdGVyYXRvci5uZXh0O1xuICB3aGlsZSAoIShzdGVwID0gbmV4dC5jYWxsKGl0ZXJhdG9yKSkuZG9uZSkge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBjYWxsRm4oc3RlcC52YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdvYmplY3QnICYmIHJlc3VsdCAmJiByZXN1bHQgaW5zdGFuY2VvZiBSZXN1bHQpIHJldHVybiByZXN1bHQ7XG4gIH0gcmV0dXJuIG5ldyBSZXN1bHQoZmFsc2UpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IpIHtcbiAgdmFyIHJldHVybk1ldGhvZCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgaWYgKHJldHVybk1ldGhvZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGFuT2JqZWN0KHJldHVybk1ldGhvZC5jYWxsKGl0ZXJhdG9yKSkudmFsdWU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlYCBvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1vYmplY3RcbnZhciBJdGVyYXRvclByb3RvdHlwZSwgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBhcnJheUl0ZXJhdG9yO1xuXG5pZiAoW10ua2V5cykge1xuICBhcnJheUl0ZXJhdG9yID0gW10ua2V5cygpO1xuICAvLyBTYWZhcmkgOCBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgaWYgKCEoJ25leHQnIGluIGFycmF5SXRlcmF0b3IpKSBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gdHJ1ZTtcbiAgZWxzZSB7XG4gICAgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoZ2V0UHJvdG90eXBlT2YoYXJyYXlJdGVyYXRvcikpO1xuICAgIGlmIChQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIEl0ZXJhdG9yUHJvdG90eXBlID0gUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG59XG5cbmlmIChJdGVyYXRvclByb3RvdHlwZSA9PSB1bmRlZmluZWQpIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5pZiAoIUlTX1BVUkUgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSB7XG4gIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSXRlcmF0b3JQcm90b3R5cGU6IEl0ZXJhdG9yUHJvdG90eXBlLFxuICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90YXNrJykuc2V0O1xudmFyIElTX0lPUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtaXMtaW9zJyk7XG52YXIgSVNfV0VCT1NfV0VCS0lUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy13ZWJvcy13ZWJraXQnKTtcbnZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlJyk7XG5cbnZhciBNdXRhdGlvbk9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbi8vIE5vZGUuanMgMTEgc2hvd3MgRXhwZXJpbWVudGFsV2FybmluZyBvbiBnZXR0aW5nIGBxdWV1ZU1pY3JvdGFza2BcbnZhciBxdWV1ZU1pY3JvdGFza0Rlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZ2xvYmFsLCAncXVldWVNaWNyb3Rhc2snKTtcbnZhciBxdWV1ZU1pY3JvdGFzayA9IHF1ZXVlTWljcm90YXNrRGVzY3JpcHRvciAmJiBxdWV1ZU1pY3JvdGFza0Rlc2NyaXB0b3IudmFsdWU7XG5cbnZhciBmbHVzaCwgaGVhZCwgbGFzdCwgbm90aWZ5LCB0b2dnbGUsIG5vZGUsIHByb21pc2UsIHRoZW47XG5cbi8vIG1vZGVybiBlbmdpbmVzIGhhdmUgcXVldWVNaWNyb3Rhc2sgbWV0aG9kXG5pZiAoIXF1ZXVlTWljcm90YXNrKSB7XG4gIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChJU19OT0RFICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIC8vIGFsc28gZXhjZXB0IFdlYk9TIFdlYmtpdCBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODk4XG4gIGlmICghSVNfSU9TICYmICFJU19OT0RFICYmICFJU19XRUJPU19XRUJLSVQgJiYgTXV0YXRpb25PYnNlcnZlciAmJiBkb2N1bWVudCkge1xuICAgIHRvZ2dsZSA9IHRydWU7XG4gICAgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgTXV0YXRpb25PYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgLy8gUHJvbWlzZS5yZXNvbHZlIHdpdGhvdXQgYW4gYXJndW1lbnQgdGhyb3dzIGFuIGVycm9yIGluIExHIFdlYk9TIDJcbiAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgdGhlbiA9IHByb21pc2UudGhlbjtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGVuLmNhbGwocHJvbWlzZSwgZmx1c2gpO1xuICAgIH07XG4gIC8vIE5vZGUuanMgd2l0aG91dCBwcm9taXNlc1xuICB9IGVsc2UgaWYgKElTX05PREUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHF1ZXVlTWljcm90YXNrIHx8IGZ1bmN0aW9uIChmbikge1xuICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gIGlmICghaGVhZCkge1xuICAgIGhlYWQgPSB0YXNrO1xuICAgIG5vdGlmeSgpO1xuICB9IGxhc3QgPSB0YXNrO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLlByb21pc2U7XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHJldHVybiAhU3RyaW5nKFN5bWJvbCgpKTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KGluc3BlY3RTb3VyY2UoV2Vha01hcCkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWZ1bmN0aW9uJyk7XG5cbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xuXG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGRlZmluZVByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBkb2N1bWVudENyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xuXG52YXIgR1QgPSAnPic7XG52YXIgTFQgPSAnPCc7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG52YXIgU0NSSVBUID0gJ3NjcmlwdCc7XG52YXIgSUVfUFJPVE8gPSBzaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG5cbnZhciBFbXB0eUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuXG52YXIgc2NyaXB0VGFnID0gZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgcmV0dXJuIExUICsgU0NSSVBUICsgR1QgKyBjb250ZW50ICsgTFQgKyAnLycgKyBTQ1JJUFQgKyBHVDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBBY3RpdmVYIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhQWN0aXZlWCA9IGZ1bmN0aW9uIChhY3RpdmVYRG9jdW1lbnQpIHtcbiAgYWN0aXZlWERvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnJykpO1xuICBhY3RpdmVYRG9jdW1lbnQuY2xvc2UoKTtcbiAgdmFyIHRlbXAgPSBhY3RpdmVYRG9jdW1lbnQucGFyZW50V2luZG93Lk9iamVjdDtcbiAgYWN0aXZlWERvY3VtZW50ID0gbnVsbDsgLy8gYXZvaWQgbWVtb3J5IGxlYWtcbiAgcmV0dXJuIHRlbXA7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgTnVsbFByb3RvT2JqZWN0VmlhSUZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gZG9jdW1lbnRDcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgdmFyIEpTID0gJ2phdmEnICsgU0NSSVBUICsgJzonO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy80NzVcbiAgaWZyYW1lLnNyYyA9IFN0cmluZyhKUyk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCdkb2N1bWVudC5GPU9iamVjdCcpKTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgcmV0dXJuIGlmcmFtZURvY3VtZW50LkY7XG59O1xuXG4vLyBDaGVjayBmb3IgZG9jdW1lbnQuZG9tYWluIGFuZCBhY3RpdmUgeCBzdXBwb3J0XG4vLyBObyBuZWVkIHRvIHVzZSBhY3RpdmUgeCBhcHByb2FjaCB3aGVuIGRvY3VtZW50LmRvbWFpbiBpcyBub3Qgc2V0XG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzLXNoaW1zL2VzNS1zaGltL2lzc3Vlcy8xNTBcbi8vIHZhcmlhdGlvbiBvZiBodHRwczovL2dpdGh1Yi5jb20va2l0Y2FtYnJpZGdlL2VzNS1zaGltL2NvbW1pdC80ZjczOGFjMDY2MzQ2XG4vLyBhdm9pZCBJRSBHQyBidWdcbnZhciBhY3RpdmVYRG9jdW1lbnQ7XG52YXIgTnVsbFByb3RvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8qIGdsb2JhbCBBY3RpdmVYT2JqZWN0ICovXG4gICAgYWN0aXZlWERvY3VtZW50ID0gZG9jdW1lbnQuZG9tYWluICYmIG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSBhY3RpdmVYRG9jdW1lbnQgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKTtcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBQcm9wZXJ0aWVzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xuXG52YXIgbmF0aXZlRGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlRGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZURlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbnZhciBuYXRpdmVHZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCJleHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXInKTtcblxudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0cHJvdG90eXBlb2Zcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXMoaGlkZGVuS2V5cywga2V5KSAmJiBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIG5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgIW5hdGl2ZVByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogbmF0aXZlUHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYVBvc3NpYmxlUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3Quc2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2Zcbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IGZ1bmN0aW9uICgpIHtcbiAgdmFyIENPUlJFQ1RfU0VUVEVSID0gZmFsc2U7XG4gIHZhciB0ZXN0ID0ge307XG4gIHZhciBzZXR0ZXI7XG4gIHRyeSB7XG4gICAgc2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0O1xuICAgIHNldHRlci5jYWxsKHRlc3QsIFtdKTtcbiAgICBDT1JSRUNUX1NFVFRFUiA9IHRlc3QgaW5zdGFuY2VvZiBBcnJheTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICBhbk9iamVjdChPKTtcbiAgICBhUG9zc2libGVQcm90b3R5cGUocHJvdG8pO1xuICAgIGlmIChDT1JSRUNUX1NFVFRFUikgc2V0dGVyLmNhbGwoTywgcHJvdG8pO1xuICAgIGVsc2UgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gTztcbiAgfTtcbn0oKSA6IHVuZGVmaW5lZCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8ge30udG9TdHJpbmcgOiBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xufTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGVycm9yOiBmYWxzZSwgdmFsdWU6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IGVycm9yOiB0cnVlLCB2YWx1ZTogZXJyb3IgfTtcbiAgfVxufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBvcHRpb25zKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgdW5zYWZlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy51bnNhZmUgOiBmYWxzZTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMuZW51bWVyYWJsZSA6IGZhbHNlO1xuICB2YXIgbm9UYXJnZXRHZXQgPSBvcHRpb25zID8gISFvcHRpb25zLm5vVGFyZ2V0R2V0IDogZmFsc2U7XG4gIHZhciBzdGF0ZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgJiYgIWhhcyh2YWx1ZSwgJ25hbWUnKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIGtleSk7XG4gICAgfVxuICAgIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICAgIGlmICghc3RhdGUuc291cmNlKSB7XG4gICAgICBzdGF0ZS5zb3VyY2UgPSBURU1QTEFURS5qb2luKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyBrZXkgOiAnJyk7XG4gICAgfVxuICB9XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIHNldEdsb2JhbChrZXksIHZhbHVlKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBpZiAoIXVuc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gIH0gZWxzZSBpZiAoIW5vVGFyZ2V0R2V0ICYmIE9ba2V5XSkge1xuICAgIHNpbXBsZSA9IHRydWU7XG4gIH1cbiAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gIGVsc2UgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KE8sIGtleSwgdmFsdWUpO1xuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSk7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vY2xhc3NvZi1yYXcnKTtcbnZhciByZWdleHBFeGVjID0gcmVxdWlyZSgnLi9yZWdleHAtZXhlYycpO1xuXG4vLyBgUmVnRXhwRXhlY2AgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cGV4ZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gIGlmICh0eXBlb2YgZXhlYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKGNsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gIH1cblxuICByZXR1cm4gcmVnZXhwRXhlYy5jYWxsKFIsIFMpO1xufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHJlZ2V4cEZsYWdzID0gcmVxdWlyZSgnLi9yZWdleHAtZmxhZ3MnKTtcbnZhciBzdGlja3lIZWxwZXJzID0gcmVxdWlyZSgnLi9yZWdleHAtc3RpY2t5LWhlbHBlcnMnKTtcblxudmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4vLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbi8vIFN0cmluZyNyZXBsYWNlIHBvbHlmaWxsIHVzZXMgLi9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljLmpzLFxuLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxudmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbnZhciBwYXRjaGVkRXhlYyA9IG5hdGl2ZUV4ZWM7XG5cbnZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgcmUxID0gL2EvO1xuICB2YXIgcmUyID0gL2IqL2c7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gIG5hdGl2ZUV4ZWMuY2FsbChyZTIsICdhJyk7XG4gIHJldHVybiByZTEubGFzdEluZGV4ICE9PSAwIHx8IHJlMi5sYXN0SW5kZXggIT09IDA7XG59KSgpO1xuXG52YXIgVU5TVVBQT1JURURfWSA9IHN0aWNreUhlbHBlcnMuVU5TVVBQT1JURURfWSB8fCBzdGlja3lIZWxwZXJzLkJST0tFTl9DQVJFVDtcblxuLy8gbm9ucGFydGljaXBhdGluZyBjYXB0dXJpbmcgZ3JvdXAsIGNvcGllZCBmcm9tIGVzNS1zaGltJ3MgU3RyaW5nI3NwbGl0IHBhdGNoLlxudmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxudmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQgfHwgVU5TVVBQT1JURURfWTtcblxuaWYgKFBBVENIKSB7XG4gIHBhdGNoZWRFeGVjID0gZnVuY3Rpb24gZXhlYyhzdHIpIHtcbiAgICB2YXIgcmUgPSB0aGlzO1xuICAgIHZhciBsYXN0SW5kZXgsIHJlQ29weSwgbWF0Y2gsIGk7XG4gICAgdmFyIHN0aWNreSA9IFVOU1VQUE9SVEVEX1kgJiYgcmUuc3RpY2t5O1xuICAgIHZhciBmbGFncyA9IHJlZ2V4cEZsYWdzLmNhbGwocmUpO1xuICAgIHZhciBzb3VyY2UgPSByZS5zb3VyY2U7XG4gICAgdmFyIGNoYXJzQWRkZWQgPSAwO1xuICAgIHZhciBzdHJDb3B5ID0gc3RyO1xuXG4gICAgaWYgKHN0aWNreSkge1xuICAgICAgZmxhZ3MgPSBmbGFncy5yZXBsYWNlKCd5JywgJycpO1xuICAgICAgaWYgKGZsYWdzLmluZGV4T2YoJ2cnKSA9PT0gLTEpIHtcbiAgICAgICAgZmxhZ3MgKz0gJ2cnO1xuICAgICAgfVxuXG4gICAgICBzdHJDb3B5ID0gU3RyaW5nKHN0cikuc2xpY2UocmUubGFzdEluZGV4KTtcbiAgICAgIC8vIFN1cHBvcnQgYW5jaG9yZWQgc3RpY2t5IGJlaGF2aW9yLlxuICAgICAgaWYgKHJlLmxhc3RJbmRleCA+IDAgJiYgKCFyZS5tdWx0aWxpbmUgfHwgcmUubXVsdGlsaW5lICYmIHN0cltyZS5sYXN0SW5kZXggLSAxXSAhPT0gJ1xcbicpKSB7XG4gICAgICAgIHNvdXJjZSA9ICcoPzogJyArIHNvdXJjZSArICcpJztcbiAgICAgICAgc3RyQ29weSA9ICcgJyArIHN0ckNvcHk7XG4gICAgICAgIGNoYXJzQWRkZWQrKztcbiAgICAgIH1cbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBzdHIgc2xpY2luZywgdG9cbiAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14oPzonICsgc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgfVxuXG4gICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgc291cmNlICsgJyQoPyFcXFxccyknLCBmbGFncyk7XG4gICAgfVxuICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcpIGxhc3RJbmRleCA9IHJlLmxhc3RJbmRleDtcblxuICAgIG1hdGNoID0gbmF0aXZlRXhlYy5jYWxsKHN0aWNreSA/IHJlQ29weSA6IHJlLCBzdHJDb3B5KTtcblxuICAgIGlmIChzdGlja3kpIHtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBtYXRjaC5pbnB1dCA9IG1hdGNoLmlucHV0LnNsaWNlKGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKGNoYXJzQWRkZWQpO1xuICAgICAgICBtYXRjaC5pbmRleCA9IHJlLmxhc3RJbmRleDtcbiAgICAgICAgcmUubGFzdEluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgIH0gZWxzZSByZS5sYXN0SW5kZXggPSAwO1xuICAgIH0gZWxzZSBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICByZS5sYXN0SW5kZXggPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICB9XG4gICAgaWYgKE5QQ0dfSU5DTFVERUQgJiYgbWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkge1xuICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbicgd29yayBmb3IgLyguPyk/L1xuICAgICAgbmF0aXZlUmVwbGFjZS5jYWxsKG1hdGNoWzBdLCByZUNvcHksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzW2ldID09PSB1bmRlZmluZWQpIG1hdGNoW2ldID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2g7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGF0Y2hlZEV4ZWM7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmZsYWdzYCBnZXR0ZXIgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0LXJlZ2V4cC5wcm90b3R5cGUuZmxhZ3Ncbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdGhhdCA9IGFuT2JqZWN0KHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgaWYgKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICBpZiAodGhhdC5kb3RBbGwpIHJlc3VsdCArPSAncyc7XG4gIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmYWlscyA9IHJlcXVpcmUoJy4vZmFpbHMnKTtcblxuLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCdhJywgJ3knKSAtPiAvYS95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3IsXG4vLyBzbyB3ZSB1c2UgYW4gaW50ZXJtZWRpYXRlIGZ1bmN0aW9uLlxuZnVuY3Rpb24gUkUocywgZikge1xuICByZXR1cm4gUmVnRXhwKHMsIGYpO1xufVxuXG5leHBvcnRzLlVOU1VQUE9SVEVEX1kgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgnYScsICd5JykgLT4gL2EveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG4gIHZhciByZSA9IFJFKCdhJywgJ3knKTtcbiAgcmUubGFzdEluZGV4ID0gMjtcbiAgcmV0dXJuIHJlLmV4ZWMoJ2FiY2QnKSAhPSBudWxsO1xufSk7XG5cbmV4cG9ydHMuQlJPS0VOX0NBUkVUID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03NzM2ODdcbiAgdmFyIHJlID0gUkUoJ15yJywgJ2d5Jyk7XG4gIHJlLmxhc3RJbmRleCA9IDI7XG4gIHJldHVybiByZS5leGVjKCdzdHInKSAhPSBudWxsO1xufSk7XG4iLCIvLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoZ2xvYmFsLCBrZXksIHZhbHVlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcblxudmFyIFNQRUNJRVMgPSB3ZWxsS25vd25TeW1ib2woJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1JfTkFNRSkge1xuICB2YXIgQ29uc3RydWN0b3IgPSBnZXRCdWlsdEluKENPTlNUUlVDVE9SX05BTUUpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuXG4gIGlmIChERVNDUklQVE9SUyAmJiBDb25zdHJ1Y3RvciAmJiAhQ29uc3RydWN0b3JbU1BFQ0lFU10pIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgU1BFQ0lFUywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gICAgfSk7XG4gIH1cbn07XG4iLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRBRywgU1RBVElDKSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gU1RBVElDID8gaXQgOiBpdC5wcm90b3R5cGUsIFRPX1NUUklOR19UQUcpKSB7XG4gICAgZGVmaW5lUHJvcGVydHkoaXQsIFRPX1NUUklOR19UQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogVEFHIH0pO1xuICB9XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCBzZXRHbG9iYWwoU0hBUkVELCB7fSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG4iLCJ2YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xufSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICB2ZXJzaW9uOiAnMy44LjInLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMjEgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1mdW5jdGlvbicpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgU1BFQ0lFUyA9IHdlbGxLbm93blN5bWJvbCgnc3BlY2llcycpO1xuXG4vLyBgU3BlY2llc0NvbnN0cnVjdG9yYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3BlY2llc2NvbnN0cnVjdG9yXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBkZWZhdWx0Q29uc3RydWN0b3IpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gZGVmYXVsdENvbnN0cnVjdG9yIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBjaGVjayB0aGUgZXhpc3RlbmNlIG9mIGEgbWV0aG9kLCBsb3dlcmNhc2Vcbi8vIG9mIGEgdGFnIGFuZCBlc2NhcGluZyBxdW90ZXMgaW4gYXJndW1lbnRzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChNRVRIT0RfTkFNRSkge1xuICByZXR1cm4gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciB0ZXN0ID0gJydbTUVUSE9EX05BTUVdKCdcIicpO1xuICAgIHJldHVybiB0ZXN0ICE9PSB0ZXN0LnRvTG93ZXJDYXNlKCkgfHwgdGVzdC5zcGxpdCgnXCInKS5sZW5ndGggPiAzO1xuICB9KTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IGNvZGVQb2ludEF0LCBhdCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKENPTlZFUlRfVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIHBvcykge1xuICAgIHZhciBTID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUoJHRoaXMpKTtcbiAgICB2YXIgcG9zaXRpb24gPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgc2l6ZSA9IFMubGVuZ3RoO1xuICAgIHZhciBmaXJzdCwgc2Vjb25kO1xuICAgIGlmIChwb3NpdGlvbiA8IDAgfHwgcG9zaXRpb24gPj0gc2l6ZSkgcmV0dXJuIENPTlZFUlRfVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgZmlyc3QgPSBTLmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICAgIHJldHVybiBmaXJzdCA8IDB4RDgwMCB8fCBmaXJzdCA+IDB4REJGRiB8fCBwb3NpdGlvbiArIDEgPT09IHNpemVcbiAgICAgIHx8IChzZWNvbmQgPSBTLmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSkgPCAweERDMDAgfHwgc2Vjb25kID4gMHhERkZGXG4gICAgICAgID8gQ09OVkVSVF9UT19TVFJJTkcgPyBTLmNoYXJBdChwb3NpdGlvbikgOiBmaXJzdFxuICAgICAgICA6IENPTlZFUlRfVE9fU1RSSU5HID8gUy5zbGljZShwb3NpdGlvbiwgcG9zaXRpb24gKyAyKSA6IChmaXJzdCAtIDB4RDgwMCA8PCAxMCkgKyAoc2Vjb25kIC0gMHhEQzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXRgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuY29kZXBvaW50YXRcbiAgY29kZUF0OiBjcmVhdGVNZXRob2QoZmFsc2UpLFxuICAvLyBgU3RyaW5nLnByb3RvdHlwZS5hdGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcbiAgY2hhckF0OiBjcmVhdGVNZXRob2QodHJ1ZSlcbn07XG4iLCJ2YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciB3aGl0ZXNwYWNlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93aGl0ZXNwYWNlcycpO1xuXG52YXIgd2hpdGVzcGFjZSA9ICdbJyArIHdoaXRlc3BhY2VzICsgJ10nO1xudmFyIGx0cmltID0gUmVnRXhwKCdeJyArIHdoaXRlc3BhY2UgKyB3aGl0ZXNwYWNlICsgJyonKTtcbnZhciBydHJpbSA9IFJlZ0V4cCh3aGl0ZXNwYWNlICsgd2hpdGVzcGFjZSArICcqJCcpO1xuXG4vLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW0sIHRyaW1TdGFydCwgdHJpbUVuZCwgdHJpbUxlZnQsIHRyaW1SaWdodCB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSgkdGhpcykpO1xuICAgIGlmIChUWVBFICYgMSkgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgICBpZiAoVFlQRSAmIDIpIHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gICAgcmV0dXJuIHN0cmluZztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgU3RyaW5nLnByb3RvdHlwZS57IHRyaW1MZWZ0LCB0cmltU3RhcnQgfWAgbWV0aG9kc1xuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbXN0YXJ0XG4gIHN0YXJ0OiBjcmVhdGVNZXRob2QoMSksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnsgdHJpbVJpZ2h0LCB0cmltRW5kIH1gIG1ldGhvZHNcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zdHJpbmcucHJvdG90eXBlLnRyaW1lbmRcbiAgZW5kOiBjcmVhdGVNZXRob2QoMiksXG4gIC8vIGBTdHJpbmcucHJvdG90eXBlLnRyaW1gIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUudHJpbVxuICB0cmltOiBjcmVhdGVNZXRob2QoMylcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLWNvbnRleHQnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2h0bWwnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgSVNfSU9TID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1pb3MnKTtcbnZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlJyk7XG5cbnZhciBsb2NhdGlvbiA9IGdsb2JhbC5sb2NhdGlvbjtcbnZhciBzZXQgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xuXG52YXIgcnVuID0gZnVuY3Rpb24gKGlkKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG5cbnZhciBydW5uZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBydW4oaWQpO1xuICB9O1xufTtcblxudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bihldmVudC5kYXRhKTtcbn07XG5cbnZhciBwb3N0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIC8vIG9sZCBlbmdpbmVzIGhhdmUgbm90IGxvY2F0aW9uLm9yaWdpblxuICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgbG9jYXRpb24ucHJvdG9jb2wgKyAnLy8nICsgbG9jYXRpb24uaG9zdCk7XG59O1xuXG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldCB8fCAhY2xlYXIpIHtcbiAgc2V0ID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pKS5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKElTX05PREUpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhydW5uZXIoaWQpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KHJ1bm5lcihpZCkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgLy8gZXhjZXB0IGlPUyAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82MjRcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCAmJiAhSVNfSU9TKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBiaW5kKHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJlxuICAgIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmXG4gICAgIWdsb2JhbC5pbXBvcnRTY3JpcHRzICYmXG4gICAgbG9jYXRpb24gJiYgbG9jYXRpb24ucHJvdG9jb2wgIT09ICdmaWxlOicgJiZcbiAgICAhZmFpbHMocG9zdClcbiAgKSB7XG4gICAgZGVmZXIgPSBwb3N0O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjcmVhdGVFbGVtZW50KCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4oaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KHJ1bm5lcihpZCksIDApO1xuICAgIH07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBjbGVhcjogY2xlYXJcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwiLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsInZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYFRvSW50ZWdlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzTmFOKGFyZ3VtZW50ID0gK2FyZ3VtZW50KSA/IDAgOiAoYXJndW1lbnQgPiAwID8gZmxvb3IgOiBjZWlsKShhcmd1bWVudCk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyKGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBQUkVGRVJSRURfU1RSSU5HKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpbnB1dC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG52YXIgdGVzdCA9IHt9O1xuXG50ZXN0W1RPX1NUUklOR19UQUddID0gJ3onO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0cmluZyh0ZXN0KSA9PT0gJ1tvYmplY3Qgel0nO1xuIiwidmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyBTdHJpbmcoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgKCsraWQgKyBwb3N0Zml4KS50b1N0cmluZygzNik7XG59O1xuIiwidmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICYmICFTeW1ib2wuc2hhbVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtc3ltYm9sJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgU3ltYm9sID0gZ2xvYmFsLlN5bWJvbDtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXMoV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIGlmIChOQVRJVkVfU1lNQk9MICYmIGhhcyhTeW1ib2wsIG5hbWUpKSBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBTeW1ib2xbbmFtZV07XG4gICAgZWxzZSBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCIvLyBhIHN0cmluZyBvZiBhbGwgdmFsaWQgdW5pY29kZSB3aGl0ZXNwYWNlc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbm1vZHVsZS5leHBvcnRzID0gJ1xcdTAwMDlcXHUwMDBBXFx1MDAwQlxcdTAwMENcXHUwMDBEXFx1MDAyMFxcdTAwQTBcXHUxNjgwXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwM1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGZvcmNlZDogW10uZm9yRWFjaCAhPSBmb3JFYWNoIH0sIHtcbiAgZm9yRWFjaDogZm9yRWFjaFxufSk7XG4iLCJ2YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmcm9tID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZyb20nKTtcbnZhciBjaGVja0NvcnJlY3RuZXNzT2ZJdGVyYXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2hlY2stY29ycmVjdG5lc3Mtb2YtaXRlcmF0aW9uJyk7XG5cbnZhciBJTkNPUlJFQ1RfSVRFUkFUSU9OID0gIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgQXJyYXkuZnJvbShpdGVyYWJsZSk7XG59KTtcblxuLy8gYEFycmF5LmZyb21gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5mcm9tXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IElOQ09SUkVDVF9JVEVSQVRJT04gfSwge1xuICBmcm9tOiBmcm9tXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyICRpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcbnZhciBhcnJheU1ldGhvZFVzZXNUb0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtdXNlcy10by1sZW5ndGgnKTtcblxudmFyIG5hdGl2ZUluZGV4T2YgPSBbXS5pbmRleE9mO1xuXG52YXIgTkVHQVRJVkVfWkVSTyA9ICEhbmF0aXZlSW5kZXhPZiAmJiAxIC8gWzFdLmluZGV4T2YoMSwgLTApIDwgMDtcbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnaW5kZXhPZicpO1xudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ2luZGV4T2YnLCB7IEFDQ0VTU09SUzogdHJ1ZSwgMTogMCB9KTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IE5FR0FUSVZFX1pFUk8gfHwgIVNUUklDVF9NRVRIT0QgfHwgIVVTRVNfVE9fTEVOR1RIIH0sIHtcbiAgaW5kZXhPZjogZnVuY3Rpb24gaW5kZXhPZihzZWFyY2hFbGVtZW50IC8qICwgZnJvbUluZGV4ID0gMCAqLykge1xuICAgIHJldHVybiBORUdBVElWRV9aRVJPXG4gICAgICAvLyBjb252ZXJ0IC0wIHRvICswXG4gICAgICA/IG5hdGl2ZUluZGV4T2YuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCAwXG4gICAgICA6ICRpbmRleE9mKHRoaXMsIHNlYXJjaEVsZW1lbnQsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkbWFwID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLm1hcDtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgYXJyYXlNZXRob2RVc2VzVG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLXVzZXMtdG8tbGVuZ3RoJyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnbWFwJyk7XG4vLyBGRjQ5LSBpc3N1ZVxudmFyIFVTRVNfVE9fTEVOR1RIID0gYXJyYXlNZXRob2RVc2VzVG9MZW5ndGgoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB8fCAhVVNFU19UT19MRU5HVEggfSwge1xuICBtYXA6IGZ1bmN0aW9uIG1hcChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICAgIHJldHVybiAkbWFwKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpLmY7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIHRyaW0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXRyaW0nKS50cmltO1xuXG52YXIgTlVNQkVSID0gJ051bWJlcic7XG52YXIgTmF0aXZlTnVtYmVyID0gZ2xvYmFsW05VTUJFUl07XG52YXIgTnVtYmVyUHJvdG90eXBlID0gTmF0aXZlTnVtYmVyLnByb3RvdHlwZTtcblxuLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG52YXIgQlJPS0VOX0NMQVNTT0YgPSBjbGFzc29mKGNyZWF0ZShOdW1iZXJQcm90b3R5cGUpKSA9PSBOVU1CRVI7XG5cbi8vIGBUb051bWJlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbnVtYmVyXG52YXIgdG9OdW1iZXIgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGl0ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsIGZhbHNlKTtcbiAgdmFyIGZpcnN0LCB0aGlyZCwgcmFkaXgsIG1heENvZGUsIGRpZ2l0cywgbGVuZ3RoLCBpbmRleCwgY29kZTtcbiAgaWYgKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyAmJiBpdC5sZW5ndGggPiAyKSB7XG4gICAgaXQgPSB0cmltKGl0KTtcbiAgICBmaXJzdCA9IGl0LmNoYXJDb2RlQXQoMCk7XG4gICAgaWYgKGZpcnN0ID09PSA0MyB8fCBmaXJzdCA9PT0gNDUpIHtcbiAgICAgIHRoaXJkID0gaXQuY2hhckNvZGVBdCgyKTtcbiAgICAgIGlmICh0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMCkgcmV0dXJuIE5hTjsgLy8gTnVtYmVyKCcrMHgxJykgc2hvdWxkIGJlIE5hTiwgb2xkIFY4IGZpeFxuICAgIH0gZWxzZSBpZiAoZmlyc3QgPT09IDQ4KSB7XG4gICAgICBzd2l0Y2ggKGl0LmNoYXJDb2RlQXQoMSkpIHtcbiAgICAgICAgY2FzZSA2NjogY2FzZSA5ODogcmFkaXggPSAyOyBtYXhDb2RlID0gNDk7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIG9mIC9eMGJbMDFdKyQvaVxuICAgICAgICBjYXNlIDc5OiBjYXNlIDExMTogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIG9mIC9eMG9bMC03XSskL2lcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuICtpdDtcbiAgICAgIH1cbiAgICAgIGRpZ2l0cyA9IGl0LnNsaWNlKDIpO1xuICAgICAgbGVuZ3RoID0gZGlnaXRzLmxlbmd0aDtcbiAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb2RlID0gZGlnaXRzLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgICAgICAvLyBwYXJzZUludCBwYXJzZXMgYSBzdHJpbmcgdG8gYSBmaXJzdCB1bmF2YWlsYWJsZSBzeW1ib2xcbiAgICAgICAgLy8gYnV0IFRvTnVtYmVyIHNob3VsZCByZXR1cm4gTmFOIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHVuYXZhaWxhYmxlIHN5bWJvbHNcbiAgICAgICAgaWYgKGNvZGUgPCA0OCB8fCBjb2RlID4gbWF4Q29kZSkgcmV0dXJuIE5hTjtcbiAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuICAgIH1cbiAgfSByZXR1cm4gK2l0O1xufTtcblxuLy8gYE51bWJlcmAgY29uc3RydWN0b3Jcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbnVtYmVyLWNvbnN0cnVjdG9yXG5pZiAoaXNGb3JjZWQoTlVNQkVSLCAhTmF0aXZlTnVtYmVyKCcgMG8xJykgfHwgIU5hdGl2ZU51bWJlcignMGIxJykgfHwgTmF0aXZlTnVtYmVyKCcrMHgxJykpKSB7XG4gIHZhciBOdW1iZXJXcmFwcGVyID0gZnVuY3Rpb24gTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIGl0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgPyAwIDogdmFsdWU7XG4gICAgdmFyIGR1bW15ID0gdGhpcztcbiAgICByZXR1cm4gZHVtbXkgaW5zdGFuY2VvZiBOdW1iZXJXcmFwcGVyXG4gICAgICAvLyBjaGVjayBvbiAxLi5jb25zdHJ1Y3Rvcihmb28pIGNhc2VcbiAgICAgICYmIChCUk9LRU5fQ0xBU1NPRiA/IGZhaWxzKGZ1bmN0aW9uICgpIHsgTnVtYmVyUHJvdG90eXBlLnZhbHVlT2YuY2FsbChkdW1teSk7IH0pIDogY2xhc3NvZihkdW1teSkgIT0gTlVNQkVSKVxuICAgICAgICA/IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBOYXRpdmVOdW1iZXIodG9OdW1iZXIoaXQpKSwgZHVtbXksIE51bWJlcldyYXBwZXIpIDogdG9OdW1iZXIoaXQpO1xuICB9O1xuICBmb3IgKHZhciBrZXlzID0gREVTQ1JJUFRPUlMgPyBnZXRPd25Qcm9wZXJ0eU5hbWVzKE5hdGl2ZU51bWJlcikgOiAoXG4gICAgLy8gRVMzOlxuICAgICdNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSwnICtcbiAgICAvLyBFUzIwMTUgKGluIGNhc2UsIGlmIG1vZHVsZXMgd2l0aCBFUzIwMTUgTnVtYmVyIHN0YXRpY3MgcmVxdWlyZWQgYmVmb3JlKTpcbiAgICAnRVBTSUxPTixpc0Zpbml0ZSxpc0ludGVnZXIsaXNOYU4saXNTYWZlSW50ZWdlcixNQVhfU0FGRV9JTlRFR0VSLCcgK1xuICAgICdNSU5fU0FGRV9JTlRFR0VSLHBhcnNlRmxvYXQscGFyc2VJbnQsaXNJbnRlZ2VyLCcgK1xuICAgIC8vIEVTTmV4dFxuICAgICdmcm9tU3RyaW5nLHJhbmdlJ1xuICApLnNwbGl0KCcsJyksIGogPSAwLCBrZXk7IGtleXMubGVuZ3RoID4gajsgaisrKSB7XG4gICAgaWYgKGhhcyhOYXRpdmVOdW1iZXIsIGtleSA9IGtleXNbal0pICYmICFoYXMoTnVtYmVyV3JhcHBlciwga2V5KSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkoTnVtYmVyV3JhcHBlciwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTmF0aXZlTnVtYmVyLCBrZXkpKTtcbiAgICB9XG4gIH1cbiAgTnVtYmVyV3JhcHBlci5wcm90b3R5cGUgPSBOdW1iZXJQcm90b3R5cGU7XG4gIE51bWJlclByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE51bWJlcldyYXBwZXI7XG4gIHJlZGVmaW5lKGdsb2JhbCwgTlVNQkVSLCBOdW1iZXJXcmFwcGVyKTtcbn1cbiIsInZhciBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtdG8tc3RyaW5nJyk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKCFUT19TVFJJTkdfVEFHX1NVUFBPUlQpIHtcbiAgcmVkZWZpbmUoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgdG9TdHJpbmcsIHsgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgTmF0aXZlUHJvbWlzZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtcHJvbWlzZS1jb25zdHJ1Y3RvcicpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUtYWxsJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBzZXRTcGVjaWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1zcGVjaWVzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLWluc3RhbmNlJyk7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWljcm90YXNrJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgaG9zdFJlcG9ydEVycm9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9ob3N0LXJlcG9ydC1lcnJvcnMnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wZXJmb3JtJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX05PREUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLW5vZGUnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG5cbnZhciBTUEVDSUVTID0gd2VsbEtub3duU3ltYm9sKCdzcGVjaWVzJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsUHJvbWlzZVN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoUFJPTUlTRSk7XG52YXIgUHJvbWlzZUNvbnN0cnVjdG9yID0gTmF0aXZlUHJvbWlzZTtcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkZmV0Y2ggPSBnZXRCdWlsdEluKCdmZXRjaCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcbnZhciBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eTtcbnZhciBESVNQQVRDSF9FVkVOVCA9ICEhKGRvY3VtZW50ICYmIGRvY3VtZW50LmNyZWF0ZUV2ZW50ICYmIGdsb2JhbC5kaXNwYXRjaEV2ZW50KTtcbnZhciBOQVRJVkVfUkVKRUNUSU9OX0VWRU5UID0gdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nO1xudmFyIFVOSEFORExFRF9SRUpFQ1RJT04gPSAndW5oYW5kbGVkcmVqZWN0aW9uJztcbnZhciBSRUpFQ1RJT05fSEFORExFRCA9ICdyZWplY3Rpb25oYW5kbGVkJztcbnZhciBQRU5ESU5HID0gMDtcbnZhciBGVUxGSUxMRUQgPSAxO1xudmFyIFJFSkVDVEVEID0gMjtcbnZhciBIQU5ETEVEID0gMTtcbnZhciBVTkhBTkRMRUQgPSAyO1xudmFyIEludGVybmFsLCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgUHJvbWlzZVdyYXBwZXIsIG5hdGl2ZVRoZW47XG5cbnZhciBGT1JDRUQgPSBpc0ZvcmNlZChQUk9NSVNFLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBHTE9CQUxfQ09SRV9KU19QUk9NSVNFID0gaW5zcGVjdFNvdXJjZShQcm9taXNlQ29uc3RydWN0b3IpICE9PSBTdHJpbmcoUHJvbWlzZUNvbnN0cnVjdG9yKTtcbiAgaWYgKCFHTE9CQUxfQ09SRV9KU19QUk9NSVNFKSB7XG4gICAgLy8gVjggNi42IChOb2RlIDEwIGFuZCBDaHJvbWUgNjYpIGhhdmUgYSBidWcgd2l0aCByZXNvbHZpbmcgY3VzdG9tIHRoZW5hYmxlc1xuICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTgzMDU2NVxuICAgIC8vIFdlIGNhbid0IGRldGVjdCBpdCBzeW5jaHJvbm91c2x5LCBzbyBqdXN0IGNoZWNrIHZlcnNpb25zXG4gICAgaWYgKFY4X1ZFUlNJT04gPT09IDY2KSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBVbmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgaWYgKCFJU19OT0RFICYmICFOQVRJVkVfUkVKRUNUSU9OX0VWRU5UKSByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBXZSBuZWVkIFByb21pc2UjZmluYWxseSBpbiB0aGUgcHVyZSB2ZXJzaW9uIGZvciBwcmV2ZW50aW5nIHByb3RvdHlwZSBwb2xsdXRpb25cbiAgaWYgKElTX1BVUkUgJiYgIVByb21pc2VDb25zdHJ1Y3Rvci5wcm90b3R5cGVbJ2ZpbmFsbHknXSkgcmV0dXJuIHRydWU7XG4gIC8vIFdlIGNhbid0IHVzZSBAQHNwZWNpZXMgZmVhdHVyZSBkZXRlY3Rpb24gaW4gVjggc2luY2UgaXQgY2F1c2VzXG4gIC8vIGRlb3B0aW1pemF0aW9uIGFuZCBwZXJmb3JtYW5jZSBkZWdyYWRhdGlvblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG4gIGlmIChWOF9WRVJTSU9OID49IDUxICYmIC9uYXRpdmUgY29kZS8udGVzdChQcm9taXNlQ29uc3RydWN0b3IpKSByZXR1cm4gZmFsc2U7XG4gIC8vIERldGVjdCBjb3JyZWN0bmVzcyBvZiBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZUNvbnN0cnVjdG9yLnJlc29sdmUoMSk7XG4gIHZhciBGYWtlUHJvbWlzZSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgZXhlYyhmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sIGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSk7XG4gIH07XG4gIHZhciBjb25zdHJ1Y3RvciA9IHByb21pc2UuY29uc3RydWN0b3IgPSB7fTtcbiAgY29uc3RydWN0b3JbU1BFQ0lFU10gPSBGYWtlUHJvbWlzZTtcbiAgcmV0dXJuICEocHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZSk7XG59KTtcblxudmFyIElOQ09SUkVDVF9JVEVSQVRJT04gPSBGT1JDRUQgfHwgIWNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHtcbiAgUHJvbWlzZUNvbnN0cnVjdG9yLmFsbChpdGVyYWJsZSlbJ2NhdGNoJ10oZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KTtcbn0pO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcblxudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChzdGF0ZSwgaXNSZWplY3QpIHtcbiAgaWYgKHN0YXRlLm5vdGlmaWVkKSByZXR1cm47XG4gIHN0YXRlLm5vdGlmaWVkID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gc3RhdGUucmVhY3Rpb25zO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlLnZhbHVlO1xuICAgIHZhciBvayA9IHN0YXRlLnN0YXRlID09IEZVTEZJTExFRDtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBjaGFpbltpbmRleCsrXTtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHN0YXRlLnJlamVjdGlvbiA9PT0gVU5IQU5ETEVEKSBvbkhhbmRsZVVuaGFuZGxlZChzdGF0ZSk7XG4gICAgICAgICAgICBzdGF0ZS5yZWplY3Rpb24gPSBIQU5ETEVEO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBjYW4gdGhyb3dcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICAgIHN0YXRlLnJlYWN0aW9ucyA9IFtdO1xuICAgIHN0YXRlLm5vdGlmaWVkID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFzdGF0ZS5yZWplY3Rpb24pIG9uVW5oYW5kbGVkKHN0YXRlKTtcbiAgfSk7XG59O1xuXG52YXIgZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uIChuYW1lLCBwcm9taXNlLCByZWFzb24pIHtcbiAgdmFyIGV2ZW50LCBoYW5kbGVyO1xuICBpZiAoRElTUEFUQ0hfRVZFTlQpIHtcbiAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgIGV2ZW50LnByb21pc2UgPSBwcm9taXNlO1xuICAgIGV2ZW50LnJlYXNvbiA9IHJlYXNvbjtcbiAgICBldmVudC5pbml0RXZlbnQobmFtZSwgZmFsc2UsIHRydWUpO1xuICAgIGdsb2JhbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSBlbHNlIGV2ZW50ID0geyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHJlYXNvbiB9O1xuICBpZiAoIU5BVElWRV9SRUpFQ1RJT05fRVZFTlQgJiYgKGhhbmRsZXIgPSBnbG9iYWxbJ29uJyArIG5hbWVdKSkgaGFuZGxlcihldmVudCk7XG4gIGVsc2UgaWYgKG5hbWUgPT09IFVOSEFORExFRF9SRUpFQ1RJT04pIGhvc3RSZXBvcnRFcnJvcnMoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHJlYXNvbik7XG59O1xuXG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gc3RhdGUuZmFjYWRlO1xuICAgIHZhciB2YWx1ZSA9IHN0YXRlLnZhbHVlO1xuICAgIHZhciBJU19VTkhBTkRMRUQgPSBpc1VuaGFuZGxlZChzdGF0ZSk7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBpZiAoSVNfVU5IQU5ETEVEKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKElTX05PREUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGRpc3BhdGNoRXZlbnQoVU5IQU5ETEVEX1JFSkVDVElPTiwgcHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgc3RhdGUucmVqZWN0aW9uID0gSVNfTk9ERSB8fCBpc1VuaGFuZGxlZChzdGF0ZSkgPyBVTkhBTkRMRUQgOiBIQU5ETEVEO1xuICAgICAgaWYgKHJlc3VsdC5lcnJvcikgdGhyb3cgcmVzdWx0LnZhbHVlO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgcmV0dXJuIHN0YXRlLnJlamVjdGlvbiAhPT0gSEFORExFRCAmJiAhc3RhdGUucGFyZW50O1xufTtcblxudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHN0YXRlLmZhY2FkZTtcbiAgICBpZiAoSVNfTk9ERSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGRpc3BhdGNoRXZlbnQoUkVKRUNUSU9OX0hBTkRMRUQsIHByb21pc2UsIHN0YXRlLnZhbHVlKTtcbiAgfSk7XG59O1xuXG52YXIgYmluZCA9IGZ1bmN0aW9uIChmbiwgc3RhdGUsIHVud3JhcCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgZm4oc3RhdGUsIHZhbHVlLCB1bndyYXApO1xuICB9O1xufTtcblxudmFyIGludGVybmFsUmVqZWN0ID0gZnVuY3Rpb24gKHN0YXRlLCB2YWx1ZSwgdW53cmFwKSB7XG4gIGlmIChzdGF0ZS5kb25lKSByZXR1cm47XG4gIHN0YXRlLmRvbmUgPSB0cnVlO1xuICBpZiAodW53cmFwKSBzdGF0ZSA9IHVud3JhcDtcbiAgc3RhdGUudmFsdWUgPSB2YWx1ZTtcbiAgc3RhdGUuc3RhdGUgPSBSRUpFQ1RFRDtcbiAgbm90aWZ5KHN0YXRlLCB0cnVlKTtcbn07XG5cbnZhciBpbnRlcm5hbFJlc29sdmUgPSBmdW5jdGlvbiAoc3RhdGUsIHZhbHVlLCB1bndyYXApIHtcbiAgaWYgKHN0YXRlLmRvbmUpIHJldHVybjtcbiAgc3RhdGUuZG9uZSA9IHRydWU7XG4gIGlmICh1bndyYXApIHN0YXRlID0gdW53cmFwO1xuICB0cnkge1xuICAgIGlmIChzdGF0ZS5mYWNhZGUgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICB2YXIgdGhlbiA9IGlzVGhlbmFibGUodmFsdWUpO1xuICAgIGlmICh0aGVuKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsXG4gICAgICAgICAgICBiaW5kKGludGVybmFsUmVzb2x2ZSwgd3JhcHBlciwgc3RhdGUpLFxuICAgICAgICAgICAgYmluZChpbnRlcm5hbFJlamVjdCwgd3JhcHBlciwgc3RhdGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpbnRlcm5hbFJlamVjdCh3cmFwcGVyLCBlcnJvciwgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHN0YXRlLnN0YXRlID0gRlVMRklMTEVEO1xuICAgICAgbm90aWZ5KHN0YXRlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGludGVybmFsUmVqZWN0KHsgZG9uZTogZmFsc2UgfSwgZXJyb3IsIHN0YXRlKTtcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmIChGT1JDRUQpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgUHJvbWlzZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgUHJvbWlzZUNvbnN0cnVjdG9yLCBQUk9NSVNFKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoYmluZChpbnRlcm5hbFJlc29sdmUsIHN0YXRlKSwgYmluZChpbnRlcm5hbFJlamVjdCwgc3RhdGUpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaW50ZXJuYWxSZWplY3Qoc3RhdGUsIGVycm9yKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICAgIHR5cGU6IFBST01JU0UsXG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIG5vdGlmaWVkOiBmYWxzZSxcbiAgICAgIHBhcmVudDogZmFsc2UsXG4gICAgICByZWFjdGlvbnM6IFtdLFxuICAgICAgcmVqZWN0aW9uOiBmYWxzZSxcbiAgICAgIHN0YXRlOiBQRU5ESU5HLFxuICAgICAgdmFsdWU6IHVuZGVmaW5lZFxuICAgIH0pO1xuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZWRlZmluZUFsbChQcm9taXNlQ29uc3RydWN0b3IucHJvdG90eXBlLCB7XG4gICAgLy8gYFByb21pc2UucHJvdG90eXBlLnRoZW5gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUudGhlblxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsUHJvbWlzZVN0YXRlKHRoaXMpO1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIFByb21pc2VDb25zdHJ1Y3RvcikpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBJU19OT0RFID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICBzdGF0ZS5wYXJlbnQgPSB0cnVlO1xuICAgICAgc3RhdGUucmVhY3Rpb25zLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHN0YXRlLnN0YXRlICE9IFBFTkRJTkcpIG5vdGlmeShzdGF0ZSwgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyBgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZShwcm9taXNlKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGJpbmQoaW50ZXJuYWxSZXNvbHZlLCBzdGF0ZSk7XG4gICAgdGhpcy5yZWplY3QgPSBiaW5kKGludGVybmFsUmVqZWN0LCBzdGF0ZSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09IFByb21pc2VDb25zdHJ1Y3RvciB8fCBDID09PSBQcm9taXNlV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xuXG4gIGlmICghSVNfUFVSRSAmJiB0eXBlb2YgTmF0aXZlUHJvbWlzZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgbmF0aXZlVGhlbiA9IE5hdGl2ZVByb21pc2UucHJvdG90eXBlLnRoZW47XG5cbiAgICAvLyB3cmFwIG5hdGl2ZSBQcm9taXNlI3RoZW4gZm9yIG5hdGl2ZSBhc3luYyBmdW5jdGlvbnNcbiAgICByZWRlZmluZShOYXRpdmVQcm9taXNlLnByb3RvdHlwZSwgJ3RoZW4nLCBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2VDb25zdHJ1Y3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIG5hdGl2ZVRoZW4uY2FsbCh0aGF0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSkudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzY0MFxuICAgIH0sIHsgdW5zYWZlOiB0cnVlIH0pO1xuXG4gICAgLy8gd3JhcCBmZXRjaCByZXN1bHRcbiAgICBpZiAodHlwZW9mICRmZXRjaCA9PSAnZnVuY3Rpb24nKSAkKHsgZ2xvYmFsOiB0cnVlLCBlbnVtZXJhYmxlOiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgICBmZXRjaDogZnVuY3Rpb24gZmV0Y2goaW5wdXQgLyogLCBpbml0ICovKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShQcm9taXNlQ29uc3RydWN0b3IsICRmZXRjaC5hcHBseShnbG9iYWwsIGFyZ3VtZW50cykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbiQoeyBnbG9iYWw6IHRydWUsIHdyYXA6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgUHJvbWlzZTogUHJvbWlzZUNvbnN0cnVjdG9yXG59KTtcblxuc2V0VG9TdHJpbmdUYWcoUHJvbWlzZUNvbnN0cnVjdG9yLCBQUk9NSVNFLCBmYWxzZSwgdHJ1ZSk7XG5zZXRTcGVjaWVzKFBST01JU0UpO1xuXG5Qcm9taXNlV3JhcHBlciA9IGdldEJ1aWx0SW4oUFJPTUlTRSk7XG5cbi8vIHN0YXRpY3NcbiQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gYFByb21pc2UucmVqZWN0YCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlamVjdFxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICBjYXBhYmlsaXR5LnJlamVjdC5jYWxsKHVuZGVmaW5lZCwgcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cbiQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogSVNfUFVSRSB8fCBGT1JDRUQgfSwge1xuICAvLyBgUHJvbWlzZS5yZXNvbHZlYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1wcm9taXNlLnJlc29sdmVcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKElTX1BVUkUgJiYgdGhpcyA9PT0gUHJvbWlzZVdyYXBwZXIgPyBQcm9taXNlQ29uc3RydWN0b3IgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG5cbiQoeyB0YXJnZXQ6IFBST01JU0UsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIC8vIGBQcm9taXNlLmFsbGAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcHJvbWlzZS5hbGxcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICRwcm9taXNlUmVzb2x2ZSA9IGFGdW5jdGlvbihDLnJlc29sdmUpO1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBpdGVyYXRlKGl0ZXJhYmxlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgaW5kZXggPSBjb3VudGVyKys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICAkcHJvbWlzZVJlc29sdmUuY2FsbChDLCBwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZXJyb3IpIHJlamVjdChyZXN1bHQudmFsdWUpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIGBQcm9taXNlLnJhY2VgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXByb21pc2UucmFjZVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkcHJvbWlzZVJlc29sdmUgPSBhRnVuY3Rpb24oQy5yZXNvbHZlKTtcbiAgICAgIGl0ZXJhdGUoaXRlcmFibGUsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgICRwcm9taXNlUmVzb2x2ZS5jYWxsKEMsIHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lcnJvcikgcmVqZWN0KHJlc3VsdC52YWx1ZSk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBleGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjJyk7XG5cbi8vIGBSZWdFeHAucHJvdG90eXBlLmV4ZWNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLmV4ZWNcbiQoeyB0YXJnZXQ6ICdSZWdFeHAnLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAvLi8uZXhlYyAhPT0gZXhlYyB9LCB7XG4gIGV4ZWM6IGV4ZWNcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSFRNTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaHRtbCcpO1xudmFyIGZvcmNlZFN0cmluZ0hUTUxNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLWh0bWwtZm9yY2VkJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLmFuY2hvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuYW5jaG9yXG4kKHsgdGFyZ2V0OiAnU3RyaW5nJywgcHJvdG86IHRydWUsIGZvcmNlZDogZm9yY2VkU3RyaW5nSFRNTE1ldGhvZCgnYW5jaG9yJykgfSwge1xuICBhbmNob3I6IGZ1bmN0aW9uIGFuY2hvcihuYW1lKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUhUTUwodGhpcywgJ2EnLCAnbmFtZScsIG5hbWUpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjaGFyQXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLW11bHRpYnl0ZScpLmNoYXJBdDtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgZGVmaW5lSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yJyk7XG5cbnZhciBTVFJJTkdfSVRFUkFUT1IgPSAnU3RyaW5nIEl0ZXJhdG9yJztcbnZhciBzZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5zZXQ7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0dGVyRm9yKFNUUklOR19JVEVSQVRPUik7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS1AQGl0ZXJhdG9yXG5kZWZpbmVJdGVyYXRvcihTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgc2V0SW50ZXJuYWxTdGF0ZSh0aGlzLCB7XG4gICAgdHlwZTogU1RSSU5HX0lURVJBVE9SLFxuICAgIHN0cmluZzogU3RyaW5nKGl0ZXJhdGVkKSxcbiAgICBpbmRleDogMFxuICB9KTtcbi8vIGAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0lc3RyaW5naXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uIG5leHQoKSB7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gIHZhciBzdHJpbmcgPSBzdGF0ZS5zdHJpbmc7XG4gIHZhciBpbmRleCA9IHN0YXRlLmluZGV4O1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBzdHJpbmcubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gY2hhckF0KHN0cmluZywgaW5kZXgpO1xuICBzdGF0ZS5pbmRleCArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxuLy8gQEBtYXRjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ21hdGNoJywgMSwgZnVuY3Rpb24gKE1BVENILCBuYXRpdmVNYXRjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUubWF0Y2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5tYXRjaFxuICAgIGZ1bmN0aW9uIG1hdGNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIG1hdGNoZXIgPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW01BVENIXTtcbiAgICAgIHJldHVybiBtYXRjaGVyICE9PSB1bmRlZmluZWQgPyBtYXRjaGVyLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBtYXRjaFxuICAgIGZ1bmN0aW9uIChyZWdleHApIHtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlTWF0Y2gsIHJlZ2V4cCwgdGhpcyk7XG4gICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcblxuICAgICAgaWYgKCFyeC5nbG9iYWwpIHJldHVybiByZWdFeHBFeGVjKHJ4LCBTKTtcblxuICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgdmFyIG4gPSAwO1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHdoaWxlICgocmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUykpICE9PSBudWxsKSB7XG4gICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICBBW25dID0gbWF0Y2hTdHI7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICAgIG4rKztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuID09PSAwID8gbnVsbCA6IEE7XG4gICAgfVxuICBdO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBhZHZhbmNlU3RyaW5nSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWR2YW5jZS1zdHJpbmctaW5kZXgnKTtcbnZhciBnZXRTdWJzdGl0dXRpb24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LXN1YnN0aXR1dGlvbicpO1xudmFyIHJlZ0V4cEV4ZWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLWV4ZWMtYWJzdHJhY3QnKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG52YXIgbWF5YmVUb1N0cmluZyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/IGl0IDogU3RyaW5nKGl0KTtcbn07XG5cbi8vIEBAcmVwbGFjZSBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3JlcGxhY2UnLCAyLCBmdW5jdGlvbiAoUkVQTEFDRSwgbmF0aXZlUmVwbGFjZSwgbWF5YmVDYWxsTmF0aXZlLCByZWFzb24pIHtcbiAgdmFyIFJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFID0gcmVhc29uLlJFR0VYUF9SRVBMQUNFX1NVQlNUSVRVVEVTX1VOREVGSU5FRF9DQVBUVVJFO1xuICB2YXIgUkVQTEFDRV9LRUVQU18kMCA9IHJlYXNvbi5SRVBMQUNFX0tFRVBTXyQwO1xuICB2YXIgVU5TQUZFX1NVQlNUSVRVVEUgPSBSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSA/ICckJyA6ICckMCc7XG5cbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHJlcGxhY2VyID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICByZXR1cm4gcmVwbGFjZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IHJlcGxhY2VyLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgOiBuYXRpdmVSZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHJlcGxhY2VcbiAgICBmdW5jdGlvbiAocmVnZXhwLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgIGlmIChcbiAgICAgICAgKCFSRUdFWFBfUkVQTEFDRV9TVUJTVElUVVRFU19VTkRFRklORURfQ0FQVFVSRSAmJiBSRVBMQUNFX0tFRVBTXyQwKSB8fFxuICAgICAgICAodHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ3N0cmluZycgJiYgcmVwbGFjZVZhbHVlLmluZGV4T2YoVU5TQUZFX1NVQlNUSVRVVEUpID09PSAtMSlcbiAgICAgICkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZVJlcGxhY2UsIHJlZ2V4cCwgdGhpcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgcnggPSBhbk9iamVjdChyZWdleHApO1xuICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG5cbiAgICAgIHZhciBmdW5jdGlvbmFsUmVwbGFjZSA9IHR5cGVvZiByZXBsYWNlVmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgICBpZiAoIWZ1bmN0aW9uYWxSZXBsYWNlKSByZXBsYWNlVmFsdWUgPSBTdHJpbmcocmVwbGFjZVZhbHVlKTtcblxuICAgICAgdmFyIGdsb2JhbCA9IHJ4Lmdsb2JhbDtcbiAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgdmFyIGZ1bGxVbmljb2RlID0gcngudW5pY29kZTtcbiAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHRzID0gW107XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICAgIGlmIChyZXN1bHQgPT09IG51bGwpIGJyZWFrO1xuXG4gICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG5cbiAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IGFkdmFuY2VTdHJpbmdJbmRleChTLCB0b0xlbmd0aChyeC5sYXN0SW5kZXgpLCBmdWxsVW5pY29kZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhY2N1bXVsYXRlZFJlc3VsdCA9ICcnO1xuICAgICAgdmFyIG5leHRTb3VyY2VQb3NpdGlvbiA9IDA7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1tpXTtcblxuICAgICAgICB2YXIgbWF0Y2hlZCA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSBtYXgobWluKHRvSW50ZWdlcihyZXN1bHQuaW5kZXgpLCBTLmxlbmd0aCksIDApO1xuICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgLy8gTk9URTogVGhpcyBpcyBlcXVpdmFsZW50IHRvXG4gICAgICAgIC8vICAgY2FwdHVyZXMgPSByZXN1bHQuc2xpY2UoMSkubWFwKG1heWJlVG9TdHJpbmcpXG4gICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAvLyB0aGUgc2xpY2UgcG9seWZpbGwgd2hlbiBzbGljaW5nIG5hdGl2ZSBhcnJheXMpIFwiZG9lc24ndCB3b3JrXCIgaW4gc2FmYXJpIDkgYW5kXG4gICAgICAgIC8vIGNhdXNlcyBhIGNyYXNoIChodHRwczovL3Bhc3RlYmluLmNvbS9OMjFRemVRQSkgd2hlbiB0cnlpbmcgdG8gZGVidWcgaXQuXG4gICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgIHZhciBuYW1lZENhcHR1cmVzID0gcmVzdWx0Lmdyb3VwcztcbiAgICAgICAgaWYgKGZ1bmN0aW9uYWxSZXBsYWNlKSB7XG4gICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSByZXBsYWNlckFyZ3MucHVzaChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgICB2YXIgcmVwbGFjZW1lbnQgPSBTdHJpbmcocmVwbGFjZVZhbHVlLmFwcGx5KHVuZGVmaW5lZCwgcmVwbGFjZXJBcmdzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVwbGFjZW1lbnQgPSBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgUywgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICBhY2N1bXVsYXRlZFJlc3VsdCArPSBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24pICsgcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgbmV4dFNvdXJjZVBvc2l0aW9uID0gcG9zaXRpb24gKyBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3VtdWxhdGVkUmVzdWx0ICsgUy5zbGljZShuZXh0U291cmNlUG9zaXRpb24pO1xuICAgIH1cbiAgXTtcbn0pO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbQ09MTEVDVElPTl9OQU1FXTtcbiAgdmFyIENvbGxlY3Rpb25Qcm90b3R5cGUgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIEUgKCkge1xuICAvLyBLZWVwIHRoaXMgZW1wdHkgc28gaXQncyBlYXNpZXIgdG8gaW5oZXJpdCBmcm9tXG4gIC8vICh2aWEgaHR0cHM6Ly9naXRodWIuY29tL2xpcHNtYWNrIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9pc3N1ZXMvMylcbn1cblxuRS5wcm90b3R5cGUgPSB7XG4gIG9uOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG5cbiAgICAoZVtuYW1lXSB8fCAoZVtuYW1lXSA9IFtdKSkucHVzaCh7XG4gICAgICBmbjogY2FsbGJhY2ssXG4gICAgICBjdHg6IGN0eFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb25jZTogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgZnVuY3Rpb24gbGlzdGVuZXIgKCkge1xuICAgICAgc2VsZi5vZmYobmFtZSwgbGlzdGVuZXIpO1xuICAgICAgY2FsbGJhY2suYXBwbHkoY3R4LCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICBsaXN0ZW5lci5fID0gY2FsbGJhY2tcbiAgICByZXR1cm4gdGhpcy5vbihuYW1lLCBsaXN0ZW5lciwgY3R4KTtcbiAgfSxcblxuICBlbWl0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBkYXRhID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBldnRBcnIgPSAoKHRoaXMuZSB8fCAodGhpcy5lID0ge30pKVtuYW1lXSB8fCBbXSkuc2xpY2UoKTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGxlbiA9IGV2dEFyci5sZW5ndGg7XG5cbiAgICBmb3IgKGk7IGkgPCBsZW47IGkrKykge1xuICAgICAgZXZ0QXJyW2ldLmZuLmFwcGx5KGV2dEFycltpXS5jdHgsIGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9mZjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcbiAgICB2YXIgZXZ0cyA9IGVbbmFtZV07XG4gICAgdmFyIGxpdmVFdmVudHMgPSBbXTtcblxuICAgIGlmIChldnRzICYmIGNhbGxiYWNrKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZXZ0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZXZ0c1tpXS5mbiAhPT0gY2FsbGJhY2sgJiYgZXZ0c1tpXS5mbi5fICE9PSBjYWxsYmFjaylcbiAgICAgICAgICBsaXZlRXZlbnRzLnB1c2goZXZ0c1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGV2ZW50IGZyb20gcXVldWUgdG8gcHJldmVudCBtZW1vcnkgbGVha1xuICAgIC8vIFN1Z2dlc3RlZCBieSBodHRwczovL2dpdGh1Yi5jb20vbGF6ZFxuICAgIC8vIFJlZjogaHR0cHM6Ly9naXRodWIuY29tL3Njb3R0Y29yZ2FuL3RpbnktZW1pdHRlci9jb21taXQvYzZlYmZhYTliYzk3M2IzM2QxMTBhODRhMzA3NzQyYjdjZjk0Yzk1MyNjb21taXRjb21tZW50LTUwMjQ5MTBcblxuICAgIChsaXZlRXZlbnRzLmxlbmd0aClcbiAgICAgID8gZVtuYW1lXSA9IGxpdmVFdmVudHNcbiAgICAgIDogZGVsZXRlIGVbbmFtZV07XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFO1xubW9kdWxlLmV4cG9ydHMuVGlueUVtaXR0ZXIgPSBFO1xuIiwidmFyIEUgPSByZXF1aXJlKCcuL2luZGV4LmpzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBFKCk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJ2YXIgZ2xvYmFsID1cbiAgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWxUaGlzKSB8fFxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYpIHx8XG4gICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWwpXG5cbnZhciBzdXBwb3J0ID0ge1xuICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIGdsb2JhbCxcbiAgaXRlcmFibGU6ICdTeW1ib2wnIGluIGdsb2JhbCAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgYmxvYjpcbiAgICAnRmlsZVJlYWRlcicgaW4gZ2xvYmFsICYmXG4gICAgJ0Jsb2InIGluIGdsb2JhbCAmJlxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIG5ldyBCbG9iKClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gZ2xvYmFsLFxuICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBnbG9iYWxcbn1cblxuZnVuY3Rpb24gaXNEYXRhVmlldyhvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBEYXRhVmlldy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihvYmopXG59XG5cbmlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gIHZhciB2aWV3Q2xhc3NlcyA9IFtcbiAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAnW29iamVjdCBGbG9hdDY0QXJyYXldJ1xuICBdXG5cbiAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID1cbiAgICBBcnJheUJ1ZmZlci5pc1ZpZXcgfHxcbiAgICBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTmFtZShuYW1lKSB7XG4gIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gIH1cbiAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXl9gfH4hXS9pLnRlc3QobmFtZSkgfHwgbmFtZSA9PT0gJycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gIH1cbiAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICB9XG4gIHJldHVybiB2YWx1ZVxufVxuXG4vLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuZnVuY3Rpb24gaXRlcmF0b3JGb3IoaXRlbXMpIHtcbiAgdmFyIGl0ZXJhdG9yID0ge1xuICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZhbHVlID0gaXRlbXMuc2hpZnQoKVxuICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXRlcmF0b3Jcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuICB0aGlzLm1hcCA9IHt9XG5cbiAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICB9LCB0aGlzKVxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoaGVhZGVycykpIHtcbiAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICB0aGlzLmFwcGVuZChoZWFkZXJbMF0sIGhlYWRlclsxXSlcbiAgICB9LCB0aGlzKVxuICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pXG4gICAgfSwgdGhpcylcbiAgfVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxuICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXVxuICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUgKyAnLCAnICsgdmFsdWUgOiB2YWx1ZVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gIHJldHVybiB0aGlzLmhhcyhuYW1lKSA/IHRoaXMubWFwW25hbWVdIDogbnVsbFxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHJldHVybiB0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShub3JtYWxpemVOYW1lKG5hbWUpKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKVxufVxuXG5IZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgZm9yICh2YXIgbmFtZSBpbiB0aGlzLm1hcCkge1xuICAgIGlmICh0aGlzLm1hcC5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcylcbiAgICB9XG4gIH1cbn1cblxuSGVhZGVycy5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXRlbXMgPSBbXVxuICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICBpdGVtcy5wdXNoKG5hbWUpXG4gIH0pXG4gIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbn1cblxuSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpdGVtcyA9IFtdXG4gIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIGl0ZW1zLnB1c2godmFsdWUpXG4gIH0pXG4gIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbn1cblxuSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaXRlbXMgPSBbXVxuICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICBpdGVtcy5wdXNoKFtuYW1lLCB2YWx1ZV0pXG4gIH0pXG4gIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbn1cblxuaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbn1cblxuZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgfVxuICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpXG4gICAgfVxuICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICByZWplY3QocmVhZGVyLmVycm9yKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgdmFyIHByb21pc2UgPSBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoYmxvYilcbiAgcmV0dXJuIHByb21pc2Vcbn1cblxuZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gIHJlYWRlci5yZWFkQXNUZXh0KGJsb2IpXG4gIHJldHVybiBwcm9taXNlXG59XG5cbmZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gIHZhciBjaGFycyA9IG5ldyBBcnJheSh2aWV3Lmxlbmd0aClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgfVxuICByZXR1cm4gY2hhcnMuam9pbignJylcbn1cblxuZnVuY3Rpb24gYnVmZmVyQ2xvbmUoYnVmKSB7XG4gIGlmIChidWYuc2xpY2UpIHtcbiAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gIH0gZWxzZSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aClcbiAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICB9XG59XG5cbmZ1bmN0aW9uIEJvZHkoKSB7XG4gIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXG4gIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgIC8qXG4gICAgICBmZXRjaC1tb2NrIHdyYXBzIHRoZSBSZXNwb25zZSBvYmplY3QgaW4gYW4gRVM2IFByb3h5IHRvXG4gICAgICBwcm92aWRlIHVzZWZ1bCB0ZXN0IGhhcm5lc3MgZmVhdHVyZXMgc3VjaCBhcyBmbHVzaC4gSG93ZXZlciwgb25cbiAgICAgIEVTNSBicm93c2VycyB3aXRob3V0IGZldGNoIG9yIFByb3h5IHN1cHBvcnQgcG9sbHlmaWxscyBtdXN0IGJlIHVzZWQ7XG4gICAgICB0aGUgcHJveHktcG9sbHlmaWxsIGlzIHVuYWJsZSB0byBwcm94eSBhbiBhdHRyaWJ1dGUgdW5sZXNzIGl0IGV4aXN0c1xuICAgICAgb24gdGhlIG9iamVjdCBiZWZvcmUgdGhlIFByb3h5IGlzIGNyZWF0ZWQuIFRoaXMgY2hhbmdlIGVuc3VyZXNcbiAgICAgIFJlc3BvbnNlLmJvZHlVc2VkIGV4aXN0cyBvbiB0aGUgaW5zdGFuY2UsIHdoaWxlIG1haW50YWluaW5nIHRoZVxuICAgICAgc2VtYW50aWMgb2Ygc2V0dGluZyBSZXF1ZXN0LmJvZHlVc2VkIGluIHRoZSBjb25zdHJ1Y3RvciBiZWZvcmVcbiAgICAgIF9pbml0Qm9keSBpcyBjYWxsZWQuXG4gICAgKi9cbiAgICB0aGlzLmJvZHlVc2VkID0gdGhpcy5ib2R5VXNlZFxuICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgIGlmICghYm9keSkge1xuICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICB0aGlzLl9ib2R5QmxvYiA9IGJvZHlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkuYnVmZmVyKVxuICAgICAgLy8gSUUgMTAtMTEgY2FuJ3QgaGFuZGxlIGEgRGF0YVZpZXcgYm9keS5cbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlciA9IGJ1ZmZlckNsb25lKGJvZHkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChib2R5KVxuICAgIH1cblxuICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFt0aGlzLl9ib2R5QXJyYXlCdWZmZXJdKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICB2YXIgaXNDb25zdW1lZCA9IGNvbnN1bWVkKHRoaXMpXG4gICAgICAgIGlmIChpc0NvbnN1bWVkKSB7XG4gICAgICAgICAgcmV0dXJuIGlzQ29uc3VtZWRcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ1ZmZlci5zbGljZShcbiAgICAgICAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ5dGVPZmZzZXQsXG4gICAgICAgICAgICAgIHRoaXMuX2JvZHlBcnJheUJ1ZmZlci5ieXRlT2Zmc2V0ICsgdGhpcy5fYm9keUFycmF5QnVmZmVyLmJ5dGVMZW5ndGhcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgIGlmIChyZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHJlamVjdGVkXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2JvZHlCbG9iKSB7XG4gICAgICByZXR1cm4gcmVhZEJsb2JBc1RleHQodGhpcy5fYm9keUJsb2IpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVhZEFycmF5QnVmZmVyQXNUZXh0KHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikpXG4gICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICB9XG4gIH1cblxuICBpZiAoc3VwcG9ydC5mb3JtRGF0YSkge1xuICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICB9XG4gIH1cblxuICB0aGlzLmpzb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICB9XG5cbiAgcmV0dXJuIHRoaXNcbn1cblxuLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG52YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXG5mdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG4gIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgcmV0dXJuIG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xID8gdXBjYXNlZCA6IG1ldGhvZFxufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVxdWVzdChpbnB1dCwgb3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVxdWVzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQbGVhc2UgdXNlIHRoZSBcIm5ld1wiIG9wZXJhdG9yLCB0aGlzIERPTSBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLicpXG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXG4gIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG4gICAgfVxuICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG4gICAgaWYgKCFvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kXG4gICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgIHRoaXMuc2lnbmFsID0gaW5wdXQuc2lnbmFsXG4gICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICBib2R5ID0gaW5wdXQuX2JvZHlJbml0XG4gICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpXG4gIH1cblxuICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdzYW1lLW9yaWdpbidcbiAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICB9XG4gIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgdGhpcy5zaWduYWwgPSBvcHRpb25zLnNpZ25hbCB8fCB0aGlzLnNpZ25hbFxuICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gIH1cbiAgdGhpcy5faW5pdEJvZHkoYm9keSlcblxuICBpZiAodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpIHtcbiAgICBpZiAob3B0aW9ucy5jYWNoZSA9PT0gJ25vLXN0b3JlJyB8fCBvcHRpb25zLmNhY2hlID09PSAnbm8tY2FjaGUnKSB7XG4gICAgICAvLyBTZWFyY2ggZm9yIGEgJ18nIHBhcmFtZXRlciBpbiB0aGUgcXVlcnkgc3RyaW5nXG4gICAgICB2YXIgcmVQYXJhbVNlYXJjaCA9IC8oWz8mXSlfPVteJl0qL1xuICAgICAgaWYgKHJlUGFyYW1TZWFyY2gudGVzdCh0aGlzLnVybCkpIHtcbiAgICAgICAgLy8gSWYgaXQgYWxyZWFkeSBleGlzdHMgdGhlbiBzZXQgdGhlIHZhbHVlIHdpdGggdGhlIGN1cnJlbnQgdGltZVxuICAgICAgICB0aGlzLnVybCA9IHRoaXMudXJsLnJlcGxhY2UocmVQYXJhbVNlYXJjaCwgJyQxXz0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGEgbmV3ICdfJyBwYXJhbWV0ZXIgdG8gdGhlIGVuZCB3aXRoIHRoZSBjdXJyZW50IHRpbWVcbiAgICAgICAgdmFyIHJlUXVlcnlTdHJpbmcgPSAvXFw/L1xuICAgICAgICB0aGlzLnVybCArPSAocmVRdWVyeVN0cmluZy50ZXN0KHRoaXMudXJsKSA/ICcmJyA6ICc/JykgKyAnXz0nICsgbmV3IERhdGUoKS5nZXRUaW1lKClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KHRoaXMsIHtib2R5OiB0aGlzLl9ib2R5SW5pdH0pXG59XG5cbmZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgYm9keVxuICAgIC50cmltKClcbiAgICAuc3BsaXQoJyYnKVxuICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgICBpZiAoYnl0ZXMpIHtcbiAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKVxuICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSlcbiAgICAgIH1cbiAgICB9KVxuICByZXR1cm4gZm9ybVxufVxuXG5mdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgLy8gUmVwbGFjZSBpbnN0YW5jZXMgb2YgXFxyXFxuIGFuZCBcXG4gZm9sbG93ZWQgYnkgYXQgbGVhc3Qgb25lIHNwYWNlIG9yIGhvcml6b250YWwgdGFiIHdpdGggYSBzcGFjZVxuICAvLyBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzIzMCNzZWN0aW9uLTMuMlxuICB2YXIgcHJlUHJvY2Vzc2VkSGVhZGVycyA9IHJhd0hlYWRlcnMucmVwbGFjZSgvXFxyP1xcbltcXHQgXSsvZywgJyAnKVxuICAvLyBBdm9pZGluZyBzcGxpdCB2aWEgcmVnZXggdG8gd29yayBhcm91bmQgYSBjb21tb24gSUUxMSBidWcgd2l0aCB0aGUgY29yZS1qcyAzLjYuMCByZWdleCBwb2x5ZmlsbFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoL2lzc3Vlcy83NDhcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzc1MVxuICBwcmVQcm9jZXNzZWRIZWFkZXJzXG4gICAgLnNwbGl0KCdcXHInKVxuICAgIC5tYXAoZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICByZXR1cm4gaGVhZGVyLmluZGV4T2YoJ1xcbicpID09PSAwID8gaGVhZGVyLnN1YnN0cigxLCBoZWFkZXIubGVuZ3RoKSA6IGhlYWRlclxuICAgIH0pXG4gICAgLmZvckVhY2goZnVuY3Rpb24obGluZSkge1xuICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOicpXG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKClcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOicpLnRyaW0oKVxuICAgICAgICBoZWFkZXJzLmFwcGVuZChrZXksIHZhbHVlKVxuICAgICAgfVxuICAgIH0pXG4gIHJldHVybiBoZWFkZXJzXG59XG5cbkJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuZXhwb3J0IGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZXNwb25zZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQbGVhc2UgdXNlIHRoZSBcIm5ld1wiIG9wZXJhdG9yLCB0aGlzIERPTSBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLicpXG4gIH1cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH1cblxuICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1cyA9PT0gdW5kZWZpbmVkID8gMjAwIDogb3B0aW9ucy5zdGF0dXNcbiAgdGhpcy5vayA9IHRoaXMuc3RhdHVzID49IDIwMCAmJiB0aGlzLnN0YXR1cyA8IDMwMFxuICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICcnXG4gIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycylcbiAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbn1cblxuQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgUmVzcG9uc2UodGhpcy5fYm9keUluaXQsIHtcbiAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyh0aGlzLmhlYWRlcnMpLFxuICAgIHVybDogdGhpcy51cmxcbiAgfSlcbn1cblxuUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcidcbiAgcmV0dXJuIHJlc3BvbnNlXG59XG5cbnZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXG5SZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gIH1cblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbn1cblxuZXhwb3J0IHZhciBET01FeGNlcHRpb24gPSBnbG9iYWwuRE9NRXhjZXB0aW9uXG50cnkge1xuICBuZXcgRE9NRXhjZXB0aW9uKClcbn0gY2F0Y2ggKGVycikge1xuICBET01FeGNlcHRpb24gPSBmdW5jdGlvbihtZXNzYWdlLCBuYW1lKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZVxuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB2YXIgZXJyb3IgPSBFcnJvcihtZXNzYWdlKVxuICAgIHRoaXMuc3RhY2sgPSBlcnJvci5zdGFja1xuICB9XG4gIERPTUV4Y2VwdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSlcbiAgRE9NRXhjZXB0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IERPTUV4Y2VwdGlvblxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2goaW5wdXQsIGluaXQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG5cbiAgICBpZiAocmVxdWVzdC5zaWduYWwgJiYgcmVxdWVzdC5zaWduYWwuYWJvcnRlZCkge1xuICAgICAgcmV0dXJuIHJlamVjdChuZXcgRE9NRXhjZXB0aW9uKCdBYm9ydGVkJywgJ0Fib3J0RXJyb3InKSlcbiAgICB9XG5cbiAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgIGZ1bmN0aW9uIGFib3J0WGhyKCkge1xuICAgICAgeGhyLmFib3J0KClcbiAgICB9XG5cbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMudXJsID0gJ3Jlc3BvbnNlVVJMJyBpbiB4aHIgPyB4aHIucmVzcG9uc2VVUkwgOiBvcHRpb25zLmhlYWRlcnMuZ2V0KCdYLVJlcXVlc3QtVVJMJylcbiAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH0sIDApXG4gICAgfVxuXG4gICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIHhoci5vbnRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IERPTUV4Y2VwdGlvbignQWJvcnRlZCcsICdBYm9ydEVycm9yJykpXG4gICAgICB9LCAwKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpeFVybCh1cmwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiB1cmwgPT09ICcnICYmIGdsb2JhbC5sb2NhdGlvbi5ocmVmID8gZ2xvYmFsLmxvY2F0aW9uLmhyZWYgOiB1cmxcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgICAgfVxuICAgIH1cblxuICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCBmaXhVcmwocmVxdWVzdC51cmwpLCB0cnVlKVxuXG4gICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICB9IGVsc2UgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdvbWl0Jykge1xuICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhocikge1xuICAgICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBzdXBwb3J0LmFycmF5QnVmZmVyICYmXG4gICAgICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpICYmXG4gICAgICAgIHJlcXVlc3QuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLmluZGV4T2YoJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpICE9PSAtMVxuICAgICAgKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGluaXQgJiYgdHlwZW9mIGluaXQuaGVhZGVycyA9PT0gJ29iamVjdCcgJiYgIShpbml0LmhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSkge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaW5pdC5oZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgbm9ybWFsaXplVmFsdWUoaW5pdC5oZWFkZXJzW25hbWVdKSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdC5zaWduYWwpIHtcbiAgICAgIHJlcXVlc3Quc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRYaHIpXG5cbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRE9ORSAoc3VjY2VzcyBvciBmYWlsdXJlKVxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICByZXF1ZXN0LnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0WGhyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcbiAgfSlcbn1cblxuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG5cbmlmICghZ2xvYmFsLmZldGNoKSB7XG4gIGdsb2JhbC5mZXRjaCA9IGZldGNoXG4gIGdsb2JhbC5IZWFkZXJzID0gSGVhZGVyc1xuICBnbG9iYWwuUmVxdWVzdCA9IFJlcXVlc3RcbiAgZ2xvYmFsLlJlc3BvbnNlID0gUmVzcG9uc2Vcbn1cbiIsImltcG9ydCBQb2x5ZmlsbCBmcm9tICdMdWdlL1BvbHlmaWxsJ1xyXG5pbXBvcnQgTHVnZSBmcm9tICdMdWdlL0NvcmUnXHJcbmltcG9ydCBMb3R0aWVQbGF5ZXIgZnJvbSAnTHVnZS9Mb3R0aWVQbGF5ZXInXHJcbmltcG9ydCBQYXJhbGxheCBmcm9tICdMdWdlL1BhcmFsbGF4J1xyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gJ0x1Z2UvUHJlbG9hZGVyJ1xyXG5pbXBvcnQgUmV2ZWFsIGZyb20gJ0x1Z2UvUmV2ZWFsJ1xyXG5pbXBvcnQgU21vb3RoU2Nyb2xsIGZyb20gJ0x1Z2UvU21vb3RoU2Nyb2xsJ1xyXG5pbXBvcnQgU3RpY2t5IGZyb20gJ0x1Z2UvU3RpY2t5J1xyXG5pbXBvcnQgVHJhbnNpdGlvbiBmcm9tICdMdWdlL1RyYW5zaXRpb24nXHJcblxyXG53aW5kb3cubGcgPSB7fVxyXG5cclxud2luZG93LmxnLlBvbHlmaWxsID0gbmV3IFBvbHlmaWxsKClcclxuXHJcbndpbmRvdy5sZy5Db3JlID0gbmV3IEx1Z2UoKVxyXG5cclxud2luZG93LmxnLlNtb290aFNjcm9sbCA9IG5ldyBTbW9vdGhTY3JvbGwoKVxyXG53aW5kb3cubGcuTG90dGllUGxheWVyID0gbmV3IExvdHRpZVBsYXllcigpXHJcbndpbmRvdy5sZy5QYXJhbGxheCA9IG5ldyBQYXJhbGxheCgpXHJcbndpbmRvdy5sZy5QcmVsb2FkZXIgPSBuZXcgUHJlbG9hZGVyKClcclxud2luZG93LmxnLlJldmVhbCA9IG5ldyBSZXZlYWwoKVxyXG53aW5kb3cubGcuU3RpY2t5ID0gbmV3IFN0aWNreSgpXHJcbndpbmRvdy5sZy5UcmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb24oKVxyXG5cclxuLy8gU2l0ZSBpbml0IG9uIERPTSByZWFkeVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgd2luZG93LmxnLkNvcmUuc2l0ZUluaXQuYmluZCh3aW5kb3cubGcuQ29yZSksIHsgb25jZTogdHJ1ZSB9KVxyXG4iLCJpbXBvcnQgQm93c2VyIGZyb20gJ2Jvd3NlcidcclxuXHJcbmNvbnN0IGVtaXR0ZXIgPSByZXF1aXJlKCd0aW55LWVtaXR0ZXIvaW5zdGFuY2UnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTHVnZSB7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgLy8gU2l0ZSBhY3Rpb25zXHJcbiAgICB0aGlzLmFjdGlvbnMgPSB7XHJcbiAgICAgIHNpdGVJbml0OiB7fSxcclxuICAgICAgcGFnZUluaXQ6IHt9LFxyXG4gICAgICBzaXRlSW46IHt9LFxyXG4gICAgICBwYWdlSW46IHt9LFxyXG4gICAgICByZXZlYWw6IHt9LFxyXG4gICAgICBwYWdlRmV0Y2g6IHt9LFxyXG4gICAgICBwYWdlT3V0OiB7fSxcclxuICAgICAgcGFnZUNyZWF0ZToge30sXHJcbiAgICAgIHBhZ2VLaWxsOiB7fVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGFjdGlvbiBpbiB0aGlzLmFjdGlvbnMpIHtcclxuICAgICAgdGhpcy5hY3Rpb25zW2FjdGlvbl0uY2FsbGJhY2tzID0gW11cclxuICAgICAgdGhpcy5hY3Rpb25zW2FjdGlvbl0uZG9uZSA9IDBcclxuICAgIH1cclxuXHJcbiAgICAvLyBUaW1lb3V0c1xyXG4gICAgdGhpcy50aW1lb3V0cyA9IHtcclxuICAgICAgcmVzaXplVGhyb3R0bGU6IG51bGwsXHJcbiAgICAgIHNjcm9sbEVuZDogbnVsbFxyXG4gICAgfVxyXG5cclxuICAgIC8vIFZpZXdwb3J0IHNpemVcclxuICAgIHRoaXMud2luZG93V2lkdGggPSAwXHJcbiAgICB0aGlzLndpbmRvd0hlaWdodCA9IDBcclxuICAgIHRoaXMuY2xpZW50V2lkdGggPSAwXHJcblxyXG4gICAgLy8gU2Nyb2xsXHJcbiAgICB3aW5kb3cuc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0XHJcbiAgICB0aGlzLnByZXZpb3VzU2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0XHJcbiAgICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2VcclxuXHJcbiAgICAvLyBNb3VzZVxyXG4gICAgd2luZG93Lm1vdXNlWCA9IDBcclxuICAgIHdpbmRvdy5tb3VzZVkgPSAwXHJcblxyXG4gICAgLy8gSW5pdFxyXG4gICAgdGhpcy5maXJzdEluaXQgPSB0cnVlXHJcbiAgICB0aGlzLndhaXQgPSB7XHJcbiAgICAgIHJlYWR5OiB7XHJcbiAgICAgICAgc2l0ZTogdHJ1ZSxcclxuICAgICAgICBwYWdlOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICBmZXRjaDogdHJ1ZSxcclxuICAgICAgICBvdXQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEJyb3dzZXIgZGV0ZWN0XHJcbiAgICB3aW5kb3cuYnJvd3NlciA9IEJvd3Nlci5nZXRQYXJzZXIod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpXHJcbiAgICB2YXIgaXNMaWdodCA9IGZhbHNlXHJcblxyXG4gICAgQm9vbGVhbih3aW5kb3cuYnJvd3Nlci5zYXRpc2ZpZXMoe1xyXG4gICAgICBzYWZhcmk6ICc8MTInLFxyXG4gICAgICAnaW50ZXJuZXQgZXhwbG9yZXInOiAnPjAnLFxyXG4gICAgICBtb2JpbGU6IHt9XHJcbiAgICB9KSlcclxuXHJcbiAgICBpZiAod2luZG93LmJyb3dzZXIuaXMoJ21vYmlsZScpIHx8IHdpbmRvdy5icm93c2VyLmlzKCd0YWJsZXQnKSkge1xyXG4gICAgICBpc0xpZ2h0ID0gdHJ1ZVxyXG5cclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLW1vYmlsZScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtZGVza3RvcCcpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHdpbmRvdy5icm93c2VyLmlzKCdJbnRlcm5ldCBFeHBsb3JlcicpKSB7XHJcbiAgICAgIGlzTGlnaHQgPSB0cnVlXHJcblxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtaWUnKVxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtaWUtLScgKyB3aW5kb3cuYnJvd3Nlci5nZXRCcm93c2VyVmVyc2lvbigpKVxyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuYnJvd3Nlci5pcygnU2FmYXJpJykpIHtcclxuICAgICAgaWYgKHdpbmRvdy5icm93c2VyLmdldEJyb3dzZXJWZXJzaW9uKCkgPCAxMikge1xyXG4gICAgICAgIGlzTGlnaHQgPSB0cnVlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1zYWZhcmknKVxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtc2FmYXJpLScgKyB3aW5kb3cuYnJvd3Nlci5nZXRCcm93c2VyVmVyc2lvbigpKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0xpZ2h0KSB7XHJcbiAgICAgIHdpbmRvdy5icm93c2VyLmxpZ2h0ID0gdHJ1ZVxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtbGlnaHQnKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYmluZEV2ZW50cygpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIb29rIGNhbGxiYWNrIHRvIGFjdGlvblxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBhY3Rpb25OYW1lIEFjdGlvbiBuYW1lXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGJhY2sgZnVuY3Rpb25cclxuICAgKi9cclxuICBhZGRBY3Rpb24gKGFjdGlvbk5hbWUsIGNhbGxiYWNrKSB7XHJcbiAgICBpZiAodGhpcy5hY3Rpb25zW2FjdGlvbk5hbWVdKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRBY3Rpb24nLCBhY3Rpb25OYW1lKVxyXG4gICAgICB0aGlzLmFjdGlvbnNbYWN0aW9uTmFtZV0uY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsIGhvb2tlZCBjYWxsYmFja3NcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gYWN0aW9uTmFtZSBBY3Rpb24gbmFtZVxyXG4gICAqL1xyXG4gIGRvQWN0aW9uIChhY3Rpb25OYW1lKSB7XHJcbiAgICB0aGlzLmFjdGlvbnNbYWN0aW9uTmFtZV0uZG9uZSA9IDBcclxuXHJcbiAgICBpZiAodGhpcy5hY3Rpb25zW2FjdGlvbk5hbWVdLmNhbGxiYWNrcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hY3Rpb25zW2FjdGlvbk5hbWVdLmNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uc1thY3Rpb25OYW1lXS5jYWxsYmFja3NbaV0oKCkgPT4gdGhpcy5kb25lQWN0aW9uKGFjdGlvbk5hbWUpKVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRvbmVBY3Rpb24oYWN0aW9uTmFtZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvdW50IGRvbmUgYWN0aW9uXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvbk5hbWUgQWN0aW9uIG5hbWVcclxuICAgKi9cclxuICBkb25lQWN0aW9uIChhY3Rpb25OYW1lKSB7XHJcbiAgICB0aGlzLmFjdGlvbnNbYWN0aW9uTmFtZV0uZG9uZSsrXHJcblxyXG4gICAgLy8gQWxsIGNhbGxiYWNrIGFyZSBkb25lLCBjYWxsIG5leHQgYWN0aW9uXHJcbiAgICBpZiAodGhpcy5hY3Rpb25zW2FjdGlvbk5hbWVdLmRvbmUgPj0gdGhpcy5hY3Rpb25zW2FjdGlvbk5hbWVdLmNhbGxiYWNrcy5sZW5ndGgpIHtcclxuICAgICAgaWYgKGFjdGlvbk5hbWUgPT09ICdzaXRlSW5pdCcpIHtcclxuICAgICAgICB0aGlzLmRvQWN0aW9uKCdwYWdlSW5pdCcpXHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uTmFtZSA9PT0gJ3BhZ2VJbml0Jykge1xyXG4gICAgICAgIGlmICghdGhpcy53YWl0LnJlYWR5LnBhZ2UpIHtcclxuICAgICAgICAgIHRoaXMuZG9BY3Rpb24oJ3BhZ2VJbicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMud2FpdFJlYWR5KCdwYWdlJylcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aW9uTmFtZSA9PT0gJ3NpdGVJbicpIHtcclxuICAgICAgICB0aGlzLmRvQWN0aW9uKCdwYWdlSW4nKVxyXG4gICAgICB9IGVsc2UgaWYgKGFjdGlvbk5hbWUgPT09ICdwYWdlSW4nKSB7XHJcbiAgICAgICAgdGhpcy5kb0FjdGlvbigncmV2ZWFsJylcclxuICAgICAgfSBlbHNlIGlmIChhY3Rpb25OYW1lID09PSAncGFnZUZldGNoJykge1xyXG4gICAgICAgIHRoaXMud2FpdFRyYW5zaXRpb24oJ2ZldGNoJylcclxuICAgICAgfSBlbHNlIGlmIChhY3Rpb25OYW1lID09PSAncGFnZU91dCcpIHtcclxuICAgICAgICB0aGlzLndhaXRUcmFuc2l0aW9uKCdvdXQnKVxyXG4gICAgICB9IGVsc2UgaWYgKGFjdGlvbk5hbWUgPT09ICdwYWdlQ3JlYXRlJykge1xyXG4gICAgICAgIHRoaXMuZG9BY3Rpb24oJ3BhZ2VLaWxsJylcclxuICAgICAgfSBlbHNlIGlmIChhY3Rpb25OYW1lID09PSAncGFnZUtpbGwnKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlQ2xlYW4oKVxyXG4gICAgICAgIHRoaXMuZG9BY3Rpb24oJ3BhZ2VJbml0JylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2l0ZSBpbml0aWFsaXphdGlvblxyXG4gICAqL1xyXG4gIHNpdGVJbml0ICgpIHtcclxuICAgIHRoaXMuc2Nyb2xsSGFuZGxlcigpXHJcblxyXG4gICAgdGhpcy5kb0FjdGlvbignc2l0ZUluaXQnKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIG9sZCBwYWdlIGNvbnRhaW5lclxyXG4gICAqL1xyXG4gIHBhZ2VDbGVhbiAoKSB7XHJcbiAgICB2YXIgb2xkUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxnLXBhZ2VdICsgW2RhdGEtbGctcGFnZV0nKVxyXG4gICAgb2xkUGFnZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9sZFBhZ2UpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXYWl0IGZvciBzaXRlIGFuZCBwYWdlIHRvIGJlIHJlYWR5XHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVsZW1lbnQgc2l0ZXxwYWdlXHJcbiAgICovXHJcbiAgd2FpdFJlYWR5KGVsZW1lbnQpIHtcclxuICAgIHRoaXMud2FpdC5yZWFkeVtlbGVtZW50XSA9IGZhbHNlXHJcblxyXG4gICAgLy8gU2l0ZSBsb2FkZWQgYW5kIHBhZ2UgaW5pdGlhdGVkXHJcbiAgICBpZiAoIXRoaXMud2FpdC5yZWFkeS5zaXRlICYmICF0aGlzLndhaXQucmVhZHkucGFnZSkge1xyXG4gICAgICB0aGlzLmRvQWN0aW9uKCdzaXRlSW4nKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2FpdCBmb3IgZmV0Y2ggYW5kIHBhZ2Ugb3V0IGZvciB0cmFuc2l0aW9uXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGVsZW1lbnQgc2l0ZXxwYWdlXHJcbiAgICovXHJcbiAgd2FpdFRyYW5zaXRpb24oZWxlbWVudCkge1xyXG4gICAgdGhpcy53YWl0LnRyYW5zaXRpb25bZWxlbWVudF0gPSBmYWxzZVxyXG5cclxuICAgIC8vIFNpdGUgbG9hZGVkIGFuZCBwYWdlIGluaXRpYXRlZFxyXG4gICAgaWYgKCF0aGlzLndhaXQudHJhbnNpdGlvbi5mZXRjaCAmJiAhdGhpcy53YWl0LnRyYW5zaXRpb24ub3V0KSB7XHJcbiAgICAgIHRoaXMuZG9BY3Rpb24oJ3BhZ2VDcmVhdGUnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCBldmVudHNcclxuICAgKi9cclxuICBiaW5kRXZlbnRzICgpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdGhpcy53YWl0UmVhZHkuYmluZCh0aGlzLCAnc2l0ZScpLCB7IG9uY2U6IHRydWUgfSlcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5tb3VzZUhhbmRsZXIuYmluZCh0aGlzKSwgeyBwYXNzaXZlOiB0cnVlIH0pXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemVUaHJvdHRsZS5iaW5kKHRoaXMpKVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlci5iaW5kKHRoaXMpLCB7IHBhc3NpdmU6IHRydWUgfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1vdXNlIGhhbmRsZXJcclxuICAgKi9cclxuICBtb3VzZUhhbmRsZXIgKGUpIHtcclxuICAgIHdpbmRvdy5tb3VzZVggPSBlLnBhZ2VYXHJcbiAgICB3aW5kb3cubW91c2VZID0gZS5wYWdlWVxyXG5cclxuICAgIGVtaXR0ZXIuZW1pdCgnbW91c2VNb3ZlJywgZSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2l6ZSB0aHJvdHRsZVxyXG4gICAqL1xyXG4gIHJlc2l6ZVRocm90dGxlICgpIHtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRzLnJlc2l6ZVRocm90dGxlKVxyXG4gICAgdGhpcy50aW1lb3V0cy5yZXNpemVUaHJvdHRsZSA9IHNldFRpbWVvdXQodGhpcy5yZXNpemVIYW5kbGVyLCAyMDApXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNpemUgaGFuZGxlclxyXG4gICAqL1xyXG4gIHJlc2l6ZUhhbmRsZXIgKCkge1xyXG4gICAgLy8gUGFzcyB3aW5kb3cgd2lkdGhzIHRvIENTU1xyXG4gICAgaWYgKHRoaXMud2luZG93V2lkdGggIT09IHdpbmRvdy5pbm5lcldpZHRoKSB7XHJcbiAgICAgIHRoaXMud2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxyXG4gICAgICB0aGlzLmNsaWVudFdpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aFxyXG5cclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZ3JywgKHRoaXMud2luZG93V2lkdGggKiAwLjAxKSArICdweCcpXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jdycsICh0aGlzLmNsaWVudFdpZHRoICogMC4wMSkgKyAncHgnKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFBhc3Mgd2luZG93IGhlaWdodCB0byBDU1NcclxuICAgIGlmICh0aGlzLndpbmRvd0hlaWdodCAhPT0gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMud2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICAgIHRoaXMuY2xpZW50SGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHRcclxuXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsICh0aGlzLndpbmRvd0hlaWdodCAqIDAuMDEpICsgJ3B4JylcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWNoJywgKHRoaXMuY2xpZW50SGVpZ2h0ICogMC4wMSkgKyAncHgnKVxyXG4gICAgfVxyXG5cclxuICAgIGVtaXR0ZXIuZW1pdCgncmVzaXplJylcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjcm9sbCBoYW5kbGVyXHJcbiAgICovXHJcbiAgc2Nyb2xsSGFuZGxlciAoKSB7XHJcbiAgICBpZiAod2luZG93LmJyb3dzZXIuaXMoJ2Rlc2t0b3AnKSAmJiB3aW5kb3cucGFnZVlPZmZzZXQpIHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxZXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmlzU2Nyb2xsaW5nKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsU3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRzLnNjcm9sbEVuZClcclxuICAgIHRoaXMudGltZW91dHMuc2Nyb2xsRW5kID0gc2V0VGltZW91dCh0aGlzLnNjcm9sbEVuZC5iaW5kKHRoaXMpLCAyMDApXHJcblxyXG4gICAgdGhpcy5wcmV2aW91c1Njcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxUb3BcclxuXHJcbiAgICBpZiAoIXdpbmRvdy5sZy5oYXNTbW9vdGhTY3JvbGwpIHtcclxuICAgICAgZW1pdHRlci5lbWl0KCdzY3JvbGwnKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2Nyb2xsIHN0YXJ0XHJcbiAgICovXHJcbiAgc2Nyb2xsU3RhcnQgKCkge1xyXG4gICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWVcclxuXHJcbiAgICAvLyBQYXVzZSB2aWRlb3Mgb24gc2Nyb2xsXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd2aWRlbycpLmZvckVhY2godmlkZW8gPT4ge1xyXG4gICAgICBpZiAoIXZpZGVvLnBhdXNlZCkge1xyXG4gICAgICAgIHZpZGVvLmNsYXNzTGlzdC5hZGQoJ3dhcy1wbGF5aW5nJylcclxuICAgICAgICB2aWRlby5wYXVzZSgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtc2Nyb2xsaW5nJylcclxuXHJcbiAgICBlbWl0dGVyLmVtaXQoJ3N0YXJ0U2Nyb2xsJylcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNjcm9sbCBlbmRcclxuICAgKi9cclxuICBzY3JvbGxFbmQgKCkge1xyXG4gICAgdGhpcy5pc1Njcm9sbGluZyA9IGZhbHNlXHJcblxyXG4gICAgLy8gUmVzdW1lIHZpZGVvcyBhZnRlciBzY3JvbGxcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ZpZGVvJykuZm9yRWFjaCh2aWRlbyA9PiB7XHJcbiAgICAgIGlmICh2aWRlby5jbGFzc0xpc3QuY29udGFpbnMoJ3dhcy1wbGF5aW5nJykpIHtcclxuICAgICAgICB2aWRlby5jbGFzc0xpc3QucmVtb3ZlKCd3YXMtcGxheWluZycpXHJcbiAgICAgICAgdmlkZW8ucGxheSgpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2Nyb2xsaW5nJylcclxuXHJcbiAgICBlbWl0dGVyLmVtaXQoJ2VuZFNjcm9sbCcpXHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IGVtaXR0ZXIgPSByZXF1aXJlKCd0aW55LWVtaXR0ZXIvaW5zdGFuY2UnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG90dGllUGxheWVyIHtcclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIGlmICh0eXBlb2YgbG90dGllID09PSAnb2JqZWN0Jykge1xyXG4gICAgICB3aW5kb3cubGcuQ29yZS5hZGRBY3Rpb24oJ3BhZ2VJbml0JywgdGhpcy5wYWdlSW5pdC5iaW5kKHRoaXMpKVxyXG4gICAgICB3aW5kb3cubGcuQ29yZS5hZGRBY3Rpb24oJ3BhZ2VLaWxsJywgdGhpcy5wYWdlS2lsbC5iaW5kKHRoaXMpKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdFxyXG4gICAqL1xyXG4gIHBhZ2VJbml0IChkb25lKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXNcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sZy1sb3R0aWVdJykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYgKCFlbGVtZW50LnBsYXllcikge1xyXG4gICAgICAgIHNlbGYuaW5pdFBsYXllcihlbGVtZW50KVxyXG5cclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3JldmVhbEluJywgc2VsZi5wbGF5KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGRvbmUoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogS2lsbFxyXG4gICAqL1xyXG4gIHBhZ2VLaWxsIChkb25lKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgIHZhciBvbGRQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbGctcGFnZV0gKyBbZGF0YS1sZy1wYWdlXScpXHJcblxyXG4gICAgb2xkUGFnZS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sZy1sb3R0aWVdJykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXZlYWxJbicsIHNlbGYucGxheSlcclxuXHJcbiAgICAgIGlmIChlbGVtZW50LnBsYXllcikge1xyXG4gICAgICAgIGVsZW1lbnQucGxheWVyLmRlc3Ryb3koKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGRvbmUoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdCBwbGF5ZXJcclxuICAgKi9cclxuICBpbml0UGxheWVyIChlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LnBsYXllciA9IGxvdHRpZS5sb2FkQW5pbWF0aW9uKHtcclxuICAgICAgY29udGFpbmVyOiBlbGVtZW50LFxyXG4gICAgICByZW5kZXJlcjogJ3N2ZycsXHJcbiAgICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgIHBhdGg6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxnLWxvdHRpZScpXHJcbiAgICB9KVxyXG5cclxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWxnLWxvdHRpZS1zdGF0ZScsICdpcy1wYXVzZWQnKVxyXG5cclxuICAgIC8vIEdldCBvcHRpb25zXHJcbiAgICB2YXIgbG9vcCA9IGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWxnLWxvdHRpZS1sb29wJylcclxuICAgIHZhciBsb29wRnJhbWUgPSBOdW1iZXIoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGctbG90dGllLWxvb3AtZnJhbWUnKSlcclxuICAgIHZhciByZXZlcnNlID0gZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbGctbG90dGllLXJldmVyc2UnKVxyXG5cclxuICAgIGVsZW1lbnQucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2VudGVyRnJhbWUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChlbGVtZW50LnBsYXllci50b3RhbEZyYW1lcyA+IDApIHtcclxuICAgICAgICB2YXIgY3VycmVudEZyYW1lID0gTWF0aC5yb3VuZChlbGVtZW50LnBsYXllci5jdXJyZW50RnJhbWUpXHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LnBsYXllci5wbGF5RGlyZWN0aW9uID09PSAxKSB7XHJcbiAgICAgICAgICBpZiAoY3VycmVudEZyYW1lID09PSBlbGVtZW50LnBsYXllci50b3RhbEZyYW1lcyAtIDEpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5wbGF5ZXIucGF1c2UoKVxyXG5cclxuICAgICAgICAgICAgaWYgKHJldmVyc2UpIHtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGxheWVyLnNldERpcmVjdGlvbigtMSlcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGxheWVyLmdvVG9BbmRQbGF5KGVsZW1lbnQucGxheWVyLnRvdGFsRnJhbWVzLCB0cnVlKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdkYXRhLWxnLWxvdHRpZS1zdGF0ZScsICdpcy1wbGF5aW5nIGlzLXBsYXlpbmctLWJhY2t3YXJkJylcclxuICAgICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxvb3ApIHtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGxheWVyLmdvVG9BbmRQbGF5KGxvb3BGcmFtZSwgdHJ1ZSlcclxuICAgICAgICAgICAgICB9LCAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChjdXJyZW50RnJhbWUgPT09IGxvb3BGcmFtZSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LnBsYXllci5wYXVzZSgpXHJcblxyXG4gICAgICAgICAgICBpZiAobG9vcCkge1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wbGF5ZXIuc2V0RGlyZWN0aW9uKDEpXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBsYXllci5nb1RvQW5kUGxheShsb29wRnJhbWUsIHRydWUpXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGctbG90dGllLXN0YXRlJywgJ2lzLXBsYXlpbmcgaXMtcGxheWluZy0tZm9yd2FyZCcpXHJcbiAgICAgICAgICAgICAgfSwgMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBTZXQgbWV0aG9kc1xyXG4gICAgZWxlbWVudC5wbGF5ID0gdGhpcy5wbGF5XHJcblxyXG4gICAgLy8gQXV0b3BsYXlcclxuICAgIGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1sZy1sb3R0aWUtYXV0b3BsYXknKSkge1xyXG4gICAgICBlbGVtZW50LnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdET01Mb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgZWxlbWVudC5wbGF5ZXIuZ29Ub0FuZFBsYXkoMCwgdHJ1ZSlcclxuICAgICAgfSwgeyBvbmNlOiB0cnVlIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQbGF5XHJcbiAgICovXHJcbiAgcGxheSAoKSB7XHJcbiAgICB0aGlzLnBsYXllci5nb1RvQW5kUGxheSgwLCB0cnVlKVxyXG5cclxuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdkYXRhLWxnLWxvdHRpZS1zdGF0ZScsICdpcy1wbGF5aW5nIGlzLXBsYXlpbmctLWZvcndhcmQnKVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCBlbWl0dGVyID0gcmVxdWlyZSgndGlueS1lbWl0dGVyL2luc3RhbmNlJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFsbGF4IHtcclxuICAvKipcclxuICAgKiBDb25zdHJ1Y3RvclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIC8vIERpc2FibGUgcGFyYWxsYXggb24gbGlnaHQgYnJvd3NlcnNcclxuICAgIGlmICh3aW5kb3cuYnJvd3Nlci5saWdodCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnRzID0gW11cclxuXHJcbiAgICB3aW5kb3cubGcuQ29yZS5hZGRBY3Rpb24oJ3BhZ2VJbml0JywgdGhpcy5wYWdlSW5pdC5iaW5kKHRoaXMpKVxyXG4gICAgd2luZG93LmxnLkNvcmUuYWRkQWN0aW9uKCdwYWdlS2lsbCcsIHRoaXMucGFnZUtpbGwuYmluZCh0aGlzKSlcclxuXHJcbiAgICB0aGlzLmJpbmRFdmVudHMoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQmluZCBldmVudHNcclxuICAgKi9cclxuICBiaW5kRXZlbnRzICgpIHtcclxuICAgIGVtaXR0ZXIub24oJ3Jlc2l6ZScsIHRoaXMucmVzaXplSGFuZGxlciwgdGhpcylcclxuICAgIGVtaXR0ZXIub24oJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlciwgdGhpcylcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRcclxuICAgKi9cclxuICBwYWdlSW5pdCAoZG9uZSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbGctcGFyYWxsYXhdJykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgdmFyIGRpc2FibGUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1sZy1wYXJhbGxheC1kaXNhYmxlJylcclxuICAgICAgdmFyIGVuYWJsZSA9IHRydWVcclxuXHJcbiAgICAgIGlmIChkaXNhYmxlKSB7XHJcbiAgICAgICAgaWYgKChkaXNhYmxlID09PSAnbW9iaWxlJyAmJiAhd2luZG93LmJyb3dzZXIuaXMoJ2Rlc2t0b3AnKSkgfHxcclxuICAgICAgICAgICAgKGRpc2FibGUgPT09ICdwaG9uZScgJiYgd2luZG93LmJyb3dzZXIuaXMoJ21vYmlsZScpKSB8fFxyXG4gICAgICAgICAgICAoZGlzYWJsZSA9PT0gJ3RhYmxldCcgJiYgd2luZG93LmJyb3dzZXIuaXMoJ3RhYmxldCcpKSkge1xyXG4gICAgICAgICAgZW5hYmxlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsZW1lbnQucGFyYWxsYXggPSBlbmFibGVcclxuXHJcbiAgICAgIGlmIChlbmFibGUpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnB1c2goeyBlbDogZWxlbWVudCB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMucmVzaXplSGFuZGxlcigpXHJcblxyXG4gICAgZG9uZSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBLaWxsXHJcbiAgICovXHJcbiAgcGFnZUtpbGwgKGRvbmUpIHtcclxuICAgIHRoaXMuZWxlbWVudHMgPSBbXVxyXG5cclxuICAgIGRvbmUoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzaXplIGhhbmRsZXJcclxuICAgKi9cclxuICByZXNpemVIYW5kbGVyICgpIHtcclxuICAgIHRoaXMuc2V0Qm91bmRpbmcoKVxyXG4gICAgdGhpcy5jaGVja0VsZW1lbnRzKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBib3VuZGluZ1xyXG4gICAqL1xyXG4gIHNldEJvdW5kaW5nICgpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnRzKSB7XHJcbiAgICAgIHZhciBzY3JvbGxUb3AgPSAod2luZG93LnNtb290aFNjcm9sbFRvcCA/IHdpbmRvdy5zbW9vdGhTY3JvbGxUb3AgOiB3aW5kb3cuc2Nyb2xsVG9wKVxyXG4gICAgICBzY3JvbGxUb3AgPSBNYXRoLm1heChzY3JvbGxUb3AsIDApXHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICBlbGVtZW50LmJvdW5kaW5nID0gZWxlbWVudC5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgICAgICAvLyBTZXQgYm91bmRpbmdcclxuICAgICAgICBlbGVtZW50LnN0YXJ0ID0gZWxlbWVudC5ib3VuZGluZy50b3AgKyBzY3JvbGxUb3AgLSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICAgICBlbGVtZW50LmVuZCA9IGVsZW1lbnQuc3RhcnQgKyBlbGVtZW50LmVsLm9mZnNldEhlaWdodCArIHdpbmRvdy5pbm5lckhlaWdodFxyXG5cclxuICAgICAgICAvLyBFbGVtZW50cyBhYm92ZSB0aGUgZm9sZCBzdGFydCBhdCB0aGVpciBwb3NpdGlvblxyXG4gICAgICAgIGVsZW1lbnQuc3RhcnQgPSBNYXRoLm1heChlbGVtZW50LnN0YXJ0LCAwKVxyXG5cclxuICAgICAgICAvLyBHZXQgcGFyYWxsYXggb3B0aW9uc1xyXG4gICAgICAgIGVsZW1lbnQuYW1wbGl0dWRlID0gZWxlbWVudC5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGctcGFyYWxsYXgtYW1wbGl0dWRlJykgPyBlbGVtZW50LmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1sZy1wYXJhbGxheC1hbXBsaXR1ZGUnKSA6IDFcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50LmFtcGxpdHVkZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgIHZhciByYW5kQW1wbGl0dWRlID0gZWxlbWVudC5hbXBsaXR1ZGUubWF0Y2goL1xce1xccyooWzAtOV0qWy5dP1swLTldKilcXHMqLFxccyooWzAtOV0qWy5dP1swLTldKilcXHMqXFx9L20pXHJcblxyXG4gICAgICAgICAgaWYgKHJhbmRBbXBsaXR1ZGUpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5hbXBsaXR1ZGUgPSBOdW1iZXIocmFuZEFtcGxpdHVkZVsxXSkgKyAoKE51bWJlcihyYW5kQW1wbGl0dWRlWzJdKSAtIE51bWJlcihyYW5kQW1wbGl0dWRlWzFdKSkgKiBNYXRoLnJhbmRvbSgpKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5hbXBsaXR1ZGUgPSBOdW1iZXIoZWxlbWVudC5hbXBsaXR1ZGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LnR5cGUgPSBlbGVtZW50LmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1sZy1wYXJhbGxheCcpXHJcbiAgICAgICAgZWxlbWVudC5hbmNob3IgPSBlbGVtZW50LmVsLmdldEF0dHJpYnV0ZSgnZGF0YS1sZy1wYXJhbGxheC1hbmNob3InKVxyXG5cclxuICAgICAgICBpZiAoZWxlbWVudC50eXBlID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICBlbGVtZW50LnRhcmdldCA9IGVsZW1lbnQuZWwucXVlcnlTZWxlY3RvcignaW1nJylcclxuICAgICAgICAgIGVsZW1lbnQuZWwuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC50eXBlID09PSAndmlkZW8nKSB7XHJcbiAgICAgICAgICBlbGVtZW50LnRhcmdldCA9IGVsZW1lbnQuZWwucXVlcnlTZWxlY3RvcigndmlkZW8nKVxyXG4gICAgICAgICAgZWxlbWVudC5lbC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3JvbGwgaGFuZGxlclxyXG4gICAqL1xyXG4gIHNjcm9sbEhhbmRsZXIgKCkge1xyXG4gICAgdGhpcy5jaGVja0VsZW1lbnRzKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIHBvc2l0aW9uXHJcbiAgICovXHJcbiAgY2hlY2tFbGVtZW50cyAoKSB7XHJcbiAgICBpZiAodGhpcy5lbGVtZW50cykge1xyXG4gICAgICB2YXIgc2Nyb2xsVG9wID0gKHdpbmRvdy5zbW9vdGhTY3JvbGxUb3AgPyB3aW5kb3cuc21vb3RoU2Nyb2xsVG9wIDogd2luZG93LnNjcm9sbFRvcClcclxuICAgICAgc2Nyb2xsVG9wID0gTWF0aC5tYXgoc2Nyb2xsVG9wLCAwKVxyXG5cclxuICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xyXG4gICAgICAgIHZhciBwcm9ncmVzcyA9IDBcclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA+IGVsZW1lbnQuZW5kKSB7XHJcbiAgICAgICAgICBwcm9ncmVzcyA9IC0xXHJcbiAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxUb3AgPCBlbGVtZW50LnN0YXJ0KSB7XHJcbiAgICAgICAgICBwcm9ncmVzcyA9IDFcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcHJvZ3Jlc3MgPSAoKHNjcm9sbFRvcCAtIGVsZW1lbnQuc3RhcnQpIC8gKGVsZW1lbnQuZW5kIC0gZWxlbWVudC5zdGFydCkpXHJcblxyXG4gICAgICAgICAgLy8gU3RpY2sgcHJvZ3Jlc3MgdG8gbGltaXRzXHJcbiAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAwLjk5NSkge1xyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IDFcclxuICAgICAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPCAwLjAwNSkge1xyXG4gICAgICAgICAgICBwcm9ncmVzcyA9IDBcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoZWxlbWVudC5zdGFydCA+IDApIHtcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAxIC0gcHJvZ3Jlc3MgKiAyXHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5hbmNob3IgPT09ICdib3R0b20nKSB7XHJcbiAgICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gMVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQuYW5jaG9yID09PSAndG9wJykge1xyXG4gICAgICAgICAgICAgIHByb2dyZXNzIC09IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQWJvdmUgdGhlIGZvbGQgZWxlbWVudHNcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgPSAtcHJvZ3Jlc3NcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LnR5cGUgPT09ICdpbWFnZScgfHwgZWxlbWVudC50eXBlID09PSAndmlkZW8nKSB7XHJcbiAgICAgICAgICB2YXIgbW92ZW1lbnQgPSAoZWxlbWVudC5hbXBsaXR1ZGUgKiA1KSAqIHByb2dyZXNzXHJcblxyXG4gICAgICAgICAgZWxlbWVudC50YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsICcgKyBtb3ZlbWVudCArICclLCAwKSBzY2FsZSgxLicgKyAoU3RyaW5nKE1hdGguYWJzKGVsZW1lbnQuYW1wbGl0dWRlKSkucmVwbGFjZSgnLicsICcnKSkgKyAnKSdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbW92ZW1lbnQgPSBlbGVtZW50LmVsLmNsaWVudEhlaWdodCAqIHByb2dyZXNzICogZWxlbWVudC5hbXBsaXR1ZGUgLyAyXHJcblxyXG4gICAgICAgICAgZWxlbWVudC5lbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwgJyArIG1vdmVtZW50ICsgJ3B4LCAwKSdcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvbHlmaWxsIHtcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICB0aGlzLmNsb3Nlc3RQb2x5ZmlsbCgpXHJcbiAgICB0aGlzLmN1c3RvbUV2ZW50UG9seWZpbGwoKVxyXG4gIH1cclxuXHJcbiAgY2xvc2VzdFBvbHlmaWxsICgpIHtcclxuICAgIC8qICBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XHJcbiAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPVxyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8XHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0KSB7XHJcbiAgICAgIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbihzKSB7XHJcbiAgICAgICAgdmFyIGVsID0gdGhpc1xyXG5cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICBpZiAoRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcy5jYWxsKGVsLCBzKSkgcmV0dXJuIGVsXHJcbiAgICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQgfHwgZWwucGFyZW50Tm9kZVxyXG4gICAgICAgIH0gd2hpbGUgKGVsICE9PSBudWxsICYmIGVsLm5vZGVUeXBlID09PSAxKVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8qICBlc2xpbnQtZW5hYmxlICovXHJcbiAgfVxyXG5cclxuICBjdXN0b21FdmVudFBvbHlmaWxsICgpIHtcclxuICAgIC8qICBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQgKGV2ZW50LCBwYXJhbXMpIHtcclxuICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IG51bGwgfVxyXG4gICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50JylcclxuICAgICAgZXZ0LmluaXRDdXN0b21FdmVudChldmVudCwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5jYW5jZWxhYmxlLCBwYXJhbXMuZGV0YWlsKVxyXG4gICAgICByZXR1cm4gZXZ0XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnRcclxuICAgIC8qICBlc2xpbnQtZW5hYmxlICovXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcG9seWZpbGwgPSBuZXcgUG9seWZpbGwoKVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVMb2FkZXIge1xyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHdpbmRvdy5sZy5Db3JlLmFkZEFjdGlvbignc2l0ZUluJywgdGhpcy5zaXRlSW4uYmluZCh0aGlzKSlcclxuICB9XHJcblxyXG4gIHNpdGVJbiAoZG9uZSkge1xyXG4gICAgdmFyIHByZWxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxnLXByZWxvYWRlcl0nKVxyXG5cclxuICAgIGlmIChwcmVsb2FkZXIgJiYgcHJlbG9hZGVyLmdldEF0dHJpYnV0ZSgnZGF0YS1sZy1wcmVsb2FkZXInKSA9PT0gJycpIHtcclxuICAgICAgcHJlbG9hZGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnb3BhY2l0eSAwLjNzIGxpbmVhcidcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHByZWxvYWRlci5zdHlsZS5vcGFjaXR5ID0gMCB9LCAxMClcclxuXHJcbiAgICAgIGRvbmUoKVxyXG5cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gcHJlbG9hZGVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocHJlbG9hZGVyKVxyXG4gICAgICB9LCAzMDApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb25lKClcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiY29uc3QgZW1pdHRlciA9IHJlcXVpcmUoJ3RpbnktZW1pdHRlci9pbnN0YW5jZScpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXZlYWwge1xyXG4gIC8qKlxyXG4gICAqIENvbnN0cnVjdG9yXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgdGhpcy5lbGVtZW50cyA9IFtdXHJcbiAgICB0aGlzLmNhblJldmVhbCA9IGZhbHNlXHJcblxyXG4gICAgd2luZG93LmxnLkNvcmUuYWRkQWN0aW9uKCdwYWdlSW5pdCcsIHRoaXMucGFnZUluaXQuYmluZCh0aGlzKSlcclxuICAgIHdpbmRvdy5sZy5Db3JlLmFkZEFjdGlvbigncGFnZUtpbGwnLCB0aGlzLnBhZ2VLaWxsLmJpbmQodGhpcykpXHJcbiAgICB3aW5kb3cubGcuQ29yZS5hZGRBY3Rpb24oJ3JldmVhbCcsIHRoaXMucmV2ZWFsLmJpbmQodGhpcykpXHJcblxyXG4gICAgdGhpcy5iaW5kRXZlbnRzKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgZXZlbnRzXHJcbiAgICovXHJcbiAgYmluZEV2ZW50cyAoKSB7XHJcbiAgICBlbWl0dGVyLm9uKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUhhbmRsZXIsIHRoaXMpXHJcbiAgICBlbWl0dGVyLm9uKCdzY3JvbGwnLCB0aGlzLnNjcm9sbEhhbmRsZXIsIHRoaXMpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0XHJcbiAgICovXHJcbiAgcGFnZUluaXQgKGRvbmUpIHtcclxuICAgIHRoaXMuY2FuUmV2ZWFsID0gdHJ1ZVxyXG4gICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbGctcmV2ZWFsXTpub3QoW2RhdGEtbGctcmV2ZWFsLW1hbnVhbF0pJylcclxuXHJcbiAgICB0aGlzLmVsZW1lbnRzID0gQXJyYXkuZnJvbShlbGVtZW50cykubWFwKGVsZW1lbnQgPT4gKFxyXG4gICAgICB7XHJcbiAgICAgICAgZWw6IGVsZW1lbnRcclxuICAgICAgfVxyXG4gICAgKSlcclxuXHJcbiAgICB0aGlzLnNldEJvdW5kaW5nKClcclxuXHJcbiAgICBkb25lKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEtpbGxcclxuICAgKi9cclxuICBwYWdlS2lsbCAoZG9uZSkge1xyXG4gICAgdGhpcy5jYW5SZXZlYWwgPSBmYWxzZVxyXG4gICAgdGhpcy5lbGVtZW50cyA9IFtdXHJcblxyXG4gICAgZG9uZSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXZlYWxcclxuICAgKi9cclxuICByZXZlYWwgKGRvbmUpIHtcclxuICAgIHRoaXMuY2hlY2tFbGVtZW50cygpXHJcblxyXG4gICAgZG9uZSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNpemUgaGFuZGxlclxyXG4gICAqL1xyXG4gIHJlc2l6ZUhhbmRsZXIgKCkge1xyXG4gICAgdGhpcy5zZXRCb3VuZGluZygpXHJcbiAgICB0aGlzLmNoZWNrRWxlbWVudHMoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGJvdW5kaW5nXHJcbiAgICovXHJcbiAgc2V0Qm91bmRpbmcgKCkge1xyXG4gICAgdmFyIHNjcm9sbFRvcCA9ICh3aW5kb3cuc21vb3RoU2Nyb2xsVG9wID8gd2luZG93LnNtb290aFNjcm9sbFRvcCA6IHdpbmRvdy5zY3JvbGxUb3ApXHJcbiAgICBzY3JvbGxUb3AgPSBNYXRoLm1heChzY3JvbGxUb3AsIDApXHJcblxyXG4gICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBlbGVtZW50LmJvdW5kaW5nID0gZWxlbWVudC5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICBlbGVtZW50LnN0YXJ0ID0gZWxlbWVudC5ib3VuZGluZy50b3AgKyBzY3JvbGxUb3AgLSB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICAgZWxlbWVudC5taWRkbGUgPSBlbGVtZW50LnN0YXJ0ICsgZWxlbWVudC5lbC5jbGllbnRIZWlnaHQgLyAyXHJcbiAgICAgIGVsZW1lbnQuZW5kID0gZWxlbWVudC5zdGFydCArIGVsZW1lbnQuZWwuY2xpZW50SGVpZ2h0ICsgd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3JvbGwgaGFuZGxlclxyXG4gICAqL1xyXG4gIHNjcm9sbEhhbmRsZXIgKCkge1xyXG4gICAgdGhpcy5jaGVja0VsZW1lbnRzKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIHBvc2l0aW9uXHJcbiAgICovXHJcbiAgY2hlY2tFbGVtZW50cyAoKSB7XHJcbiAgICB2YXIgc2Nyb2xsVG9wID0gd2luZG93LnNjcm9sbFRvcFxyXG4gICAgc2Nyb2xsVG9wID0gTWF0aC5tYXgoc2Nyb2xsVG9wLCAwKVxyXG5cclxuICAgIHZhciBzZWxmID0gdGhpc1xyXG4gICAgdmFyIHRocmVzaG9sZCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMTVcclxuICAgIHZhciByZXZlYWxJbkRlbGF5ID0gMjAwXHJcbiAgICB2YXIgcmV2ZWFsSW5UaW1lb3V0ID0gMFxyXG5cclxuICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcclxuICAgICAgdmFyIHN0YXRlID0gJydcclxuICAgICAgdmFyIGlzSW4gPSBmYWxzZVxyXG4gICAgICB2YXIgZGVsYXkgPSB0cnVlXHJcbiAgICAgIHZhciBpc091dCA9IGZhbHNlXHJcblxyXG4gICAgICBpZiAoc2Nyb2xsVG9wID4gZWxlbWVudC5lbmQgLSB0aHJlc2hvbGQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGctcmV2ZWFsLXN0YXRlJykgPT09IG51bGwgJiYgIWVsZW1lbnQuZWwuaGFzQXR0cmlidXRlKCdkYXRhLWxnLXJldmVhbC1tdWx0aXBsZScpKSB7XHJcbiAgICAgICAgICAvLyBTaG93IGVsZW1lbnQgd2hlbiBhYm92ZSB0aGUgdmlld3BvcnRcclxuICAgICAgICAgIGlzSW4gPSB0cnVlXHJcbiAgICAgICAgICBzdGF0ZSA9ICdpcy1pbidcclxuICAgICAgICAgIGRlbGF5ID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXNPdXQgPSB0cnVlXHJcbiAgICAgICAgICBzdGF0ZSA9ICdpcy1vdXQgaXMtb3V0LS10b3AnXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHNjcm9sbFRvcCA8IGVsZW1lbnQuc3RhcnQgKyB0aHJlc2hvbGQpIHtcclxuICAgICAgICBpc091dCA9IHRydWVcclxuICAgICAgICBzdGF0ZSA9ICdpcy1vdXQgaXMtb3V0LS1ib3R0b20nXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaXNJbiA9IHRydWVcclxuICAgICAgICBzdGF0ZSA9ICdpcy1pbidcclxuXHJcbiAgICAgICAgaWYgKGVsZW1lbnQuZWwuaGFzQXR0cmlidXRlKCdkYXRhLWxnLXJldmVhbC1tdWx0aXBsZScpKSB7XHJcbiAgICAgICAgICBpZiAoc2Nyb2xsVG9wIDwgZWxlbWVudC5taWRkbGUpIHtcclxuICAgICAgICAgICAgc3RhdGUgKz0gJyBpcy1pbi0tYm90dG9tJ1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhdGUgKz0gJyBpcy1pbi0tdG9wJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVsZW1lbnQuZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWxnLXJldmVhbC1zdGF0ZScpICE9PSBzdGF0ZSkge1xyXG4gICAgICAgIGlmIChpc0luKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncmV2ZWFsSW4nKSlcclxuXHJcbiAgICAgICAgICAgIGVsZW1lbnQuZWwuc2V0QXR0cmlidXRlKCdkYXRhLWxnLXJldmVhbC1zdGF0ZScsIHN0YXRlKVxyXG4gICAgICAgICAgfSwgZGVsYXkgPyByZXZlYWxJblRpbWVvdXQgOiAwKVxyXG5cclxuICAgICAgICAgIGlmIChkZWxheSkge1xyXG4gICAgICAgICAgICByZXZlYWxJblRpbWVvdXQgKz0gcmV2ZWFsSW5EZWxheVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNPdXQpIHtcclxuICAgICAgICAgIGlmIChlbGVtZW50LmVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1sZy1yZXZlYWwtc3RhdGUnKSkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyZXZlYWxPdXQnKSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBlbGVtZW50LmVsLnNldEF0dHJpYnV0ZSgnZGF0YS1sZy1yZXZlYWwtc3RhdGUnLCBzdGF0ZSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpc0luICYmICFlbGVtZW50LmVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1sZy1yZXZlYWwtbXVsdGlwbGUnKSkge1xyXG4gICAgICAgIGRlbGV0ZSBzZWxmLmVsZW1lbnRzW2luZGV4XVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCBlbWl0dGVyID0gcmVxdWlyZSgndGlueS1lbWl0dGVyL2luc3RhbmNlJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNtb290aFNjcm9sbCB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAvLyBEaXNhYmxlIHNtb290aCBzY3JvbGwgb24gbGlnaHQgYnJvd3NlcnNcclxuICAgIGlmICh3aW5kb3cuYnJvd3Nlci5saWdodCkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lcnMgPSBudWxsXHJcbiAgICB0aGlzLmluZXJ0aWEgPSAwLjFcclxuICAgIHdpbmRvdy5zbW9vdGhTY3JvbGxUb3AgPSAwXHJcblxyXG4gICAgd2luZG93LmxnLkNvcmUuYWRkQWN0aW9uKCdwYWdlSW5pdCcsIHRoaXMucGFnZUluaXQuYmluZCh0aGlzKSlcclxuICAgIHdpbmRvdy5sZy5Db3JlLmFkZEFjdGlvbigncGFnZUtpbGwnLCB0aGlzLnBhZ2VLaWxsLmJpbmQodGhpcykpXHJcblxyXG4gICAgdGhpcy5iaW5kRXZlbnRzKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJpbmQgZXZlbnRzXHJcbiAgICovXHJcbiAgYmluZEV2ZW50cyAoKSB7XHJcbiAgICBlbWl0dGVyLm9uKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUhhbmRsZXIsIHRoaXMpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0XHJcbiAgICovXHJcbiAgcGFnZUluaXQgKGRvbmUpIHtcclxuICAgIHZhciBjb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbGctc21vb3RoXScpXHJcblxyXG4gICAgaWYgKGNvbnRhaW5lcnMpIHtcclxuICAgICAgd2luZG93LnNtb290aFNjcm9sbFRvcCA9IHdpbmRvdy5zY3JvbGxUb3BcclxuICAgICAgd2luZG93LmxnLmhhc1Ntb290aFNjcm9sbCA9IHRydWVcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hhcy1zbW9vdGgtc2Nyb2xsJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHdpbmRvdy5zbW9vdGhTY3JvbGxUb3AgPSAwXHJcbiAgICAgIHdpbmRvdy5sZy5oYXNTbW9vdGhTY3JvbGwgPSBmYWxzZVxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGFzLXNtb290aC1zY3JvbGwnKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY29udGFpbmVycyA9IEFycmF5LmZyb20oY29udGFpbmVycykubWFwKGVsZW1lbnQgPT4gKFxyXG4gICAgICB7XHJcbiAgICAgICAgZWw6IGVsZW1lbnQsXHJcbiAgICAgICAgYm91bmRpbmc6IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgfSkpXHJcblxyXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yZXF1ZXN0SWQpXHJcbiAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJhZkFuaW1hdGlvbi5iaW5kKHRoaXMpKVxyXG5cclxuICAgIHRoaXMucmVzaXplSGFuZGxlcigpXHJcblxyXG4gICAgZG9uZSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBLaWxsXHJcbiAgICovXHJcbiAgcGFnZUtpbGwgKGRvbmUpIHtcclxuICAgIHRoaXMuY29udGFpbmVycyA9IG51bGxcclxuXHJcbiAgICBkb25lKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2l6ZSBoYW5kbGVyXHJcbiAgICovXHJcbiAgcmVzaXplSGFuZGxlciAoKSB7XHJcbiAgICBpZiAodGhpcy5jb250YWluZXJzKSB7XHJcbiAgICAgIC8vIFJlc2V0IHN0eWxlXHJcbiAgICAgIHRoaXMuY29udGFpbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChjb250YWluZXIpIHsgY29udGFpbmVyLmVsLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKSB9KVxyXG5cclxuICAgICAgdGhpcy5jb250YWluZXJzLmZvckVhY2goZnVuY3Rpb24gKGNvbnRhaW5lcikge1xyXG4gICAgICAgIHZhciBwYXJlbnQgPSBjb250YWluZXIuZWwucGFyZW50Tm9kZVxyXG5cclxuICAgICAgICAvLyBHZXQgYm91bmRpbmdcclxuICAgICAgICBjb250YWluZXIuYm91bmRpbmcgPSBjb250YWluZXIuZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHJcbiAgICAgICAgcGFyZW50LnN0eWxlLmhlaWdodCA9IChjb250YWluZXIuYm91bmRpbmcuYm90dG9tICsgd2luZG93LnNjcm9sbFRvcCkgKyAncHgnXHJcblxyXG4gICAgICAgIC8vIFNldCBjb250YWluZXJcclxuICAgICAgICBjb250YWluZXIuZWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnXHJcbiAgICAgICAgY29udGFpbmVyLmVsLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCAtJyArIHdpbmRvdy5zbW9vdGhTY3JvbGxUb3AgKyAncHgsIDApJ1xyXG4gICAgICAgIGNvbnRhaW5lci5lbC5zdHlsZS5sZWZ0ID0gMFxyXG4gICAgICAgIGNvbnRhaW5lci5lbC5zdHlsZS53aWR0aCA9ICcxMDAlJ1xyXG4gICAgICAgIGNvbnRhaW5lci5lbC5zdHlsZS53aWxsQ2hhbmdlID0gJ3RyYW5zZm9ybSdcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJhZiBhbmltYXRpb25cclxuICAgKi9cclxuICByYWZBbmltYXRpb24gKCkge1xyXG4gICAgaWYgKHdpbmRvdy5zbW9vdGhTY3JvbGxUb3AgIT09IHdpbmRvdy5zY3JvbGxUb3ApIHtcclxuICAgICAgd2luZG93LnNtb290aFNjcm9sbFRvcCA9IHdpbmRvdy5zbW9vdGhTY3JvbGxUb3AgKyAoKHdpbmRvdy5zY3JvbGxUb3AgLSB3aW5kb3cuc21vb3RoU2Nyb2xsVG9wKSAqIHRoaXMuaW5lcnRpYSlcclxuXHJcbiAgICAgIC8vIFJvdW5kIHNtb290aCBzY3JvbGxcclxuICAgICAgdmFyIGdhcCA9IHdpbmRvdy5zbW9vdGhTY3JvbGxUb3AgLSB3aW5kb3cuc2Nyb2xsVG9wXHJcbiAgICAgIGlmIChnYXAgPiAtMC4xICYmIGdhcCA8IDAuMSkge1xyXG4gICAgICAgIHdpbmRvdy5zbW9vdGhTY3JvbGxUb3AgPSB3aW5kb3cuc2Nyb2xsVG9wXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmNvbnRhaW5lcnMpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoY29udGFpbmVyKSB7XHJcbiAgICAgICAgICBjb250YWluZXIuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsIC0nICsgd2luZG93LnNtb290aFNjcm9sbFRvcCArICdweCwgMCknXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHdpbmRvdy5sZy5oYXNTbW9vdGhTY3JvbGwpIHtcclxuICAgICAgICBlbWl0dGVyLmVtaXQoJ3Njcm9sbCcpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJhZkFuaW1hdGlvbi5iaW5kKHRoaXMpKVxyXG4gIH1cclxufVxyXG4iLCJjb25zdCBlbWl0dGVyID0gcmVxdWlyZSgndGlueS1lbWl0dGVyL2luc3RhbmNlJylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0aWNreSB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAvLyBEaXNhYmxlIHN0aWNreSBvbiBsaWdodCBicm93c2Vyc1xyXG4gICAgaWYgKHdpbmRvdy5icm93c2VyLmxpZ2h0KSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudHMgPSBbXVxyXG5cclxuICAgIHdpbmRvdy5sZy5Db3JlLmFkZEFjdGlvbigncGFnZUluaXQnLCB0aGlzLnBhZ2VJbml0LmJpbmQodGhpcykpXHJcbiAgICB3aW5kb3cubGcuQ29yZS5hZGRBY3Rpb24oJ3BhZ2VLaWxsJywgdGhpcy5wYWdlS2lsbC5iaW5kKHRoaXMpKVxyXG5cclxuICAgIHRoaXMuYmluZEV2ZW50cygpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCaW5kIGV2ZW50c1xyXG4gICAqL1xyXG4gIGJpbmRFdmVudHMgKCkge1xyXG4gICAgZW1pdHRlci5vbigncmVzaXplJywgdGhpcy5yZXNpemVIYW5kbGVyLCB0aGlzKVxyXG4gICAgZW1pdHRlci5vbignc2Nyb2xsJywgdGhpcy5zY3JvbGxIYW5kbGVyLCB0aGlzKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdFxyXG4gICAqL1xyXG4gIHBhZ2VJbml0IChkb25lKSB7XHJcbiAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sZy1zdGlja3ldJylcclxuXHJcbiAgICBpZiAoZWxlbWVudHMpIHtcclxuICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnB1c2goe1xyXG4gICAgICAgICAgZWw6IGVsZW1lbnQsXHJcbiAgICAgICAgICBwb3NpdGlvbjogZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGctc3RpY2t5JylcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVzaXplSGFuZGxlcigpXHJcblxyXG4gICAgZG9uZSgpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBLaWxsXHJcbiAgICovXHJcbiAgcGFnZUtpbGwgKGRvbmUpIHtcclxuICAgIHRoaXMuZWxlbWVudHMgPSBbXVxyXG5cclxuICAgIGRvbmUoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzaXplIGhhbmRsZXJcclxuICAgKi9cclxuICByZXNpemVIYW5kbGVyICgpIHtcclxuICAgIHRoaXMuc2V0Qm91bmRpbmcoKVxyXG4gICAgdGhpcy5jaGVja0VsZW1lbnRzKClcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBib3VuZGluZ1xyXG4gICAqL1xyXG4gIHNldEJvdW5kaW5nICgpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnRzKSB7XHJcbiAgICAgIHZhciBzY3JvbGxUb3AgPSAod2luZG93LnNtb290aFNjcm9sbFRvcCA/IHdpbmRvdy5zbW9vdGhTY3JvbGxUb3AgOiB3aW5kb3cuc2Nyb2xsVG9wKVxyXG4gICAgICBzY3JvbGxUb3AgPSBNYXRoLm1heChzY3JvbGxUb3AsIDApXHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICBlbGVtZW50LmVsLnN0eWxlLnRvcCA9ICcnXHJcbiAgICAgICAgZWxlbWVudC5lbC5zdHlsZS50cmFuc2Zvcm0gPSAnJ1xyXG5cclxuICAgICAgICB2YXIgYm91bmRpbmcgPSBlbGVtZW50LmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblxyXG4gICAgICAgIC8vIFNldCBib3VuZGluZ1xyXG4gICAgICAgIGlmIChlbGVtZW50LnBvc2l0aW9uID09PSAnYm90dG9tJykge1xyXG4gICAgICAgICAgdmFyIHRvcCA9IE1hdGguY2VpbCh3aW5kb3cuaW5uZXJIZWlnaHQgLSAoYm91bmRpbmcuYm90dG9tICsgc2Nyb2xsVG9wKSkgKyAxXHJcbiAgICAgICAgICB0b3AgPSBNYXRoLm1heCh0b3AsIDApXHJcbiAgICAgICAgICBlbGVtZW50LmVsLnN0eWxlLnRvcCA9IHRvcCArICdweCdcclxuXHJcbiAgICAgICAgICBlbGVtZW50LnN0YXJ0ID0gYm91bmRpbmcuYm90dG9tICsgdG9wICsgc2Nyb2xsVG9wIC0gd2luZG93LmlubmVySGVpZ2h0XHJcbiAgICAgICAgICBlbGVtZW50Lm1heEdhcCA9IGVsZW1lbnQuZWwucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQgLSBlbGVtZW50LmVsLm9mZnNldEhlaWdodCAtIHRvcFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wb3NpdGlvbiA9PT0gJ3RvcCcpIHtcclxuICAgICAgICAgIGVsZW1lbnQuc3RhcnQgPSBib3VuZGluZy50b3AgKyBzY3JvbGxUb3BcclxuICAgICAgICAgIGVsZW1lbnQubWF4R2FwID0gZWxlbWVudC5lbC5wYXJlbnROb2RlLm9mZnNldEhlaWdodCAtIGVsZW1lbnQuZWwub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGVsZW1lbnQuc3RhcnQgPSBib3VuZGluZy50b3AgKyBzY3JvbGxUb3AgLSAoKHdpbmRvdy5pbm5lckhlaWdodCAtIGVsZW1lbnQuZWwub2Zmc2V0SGVpZ2h0KSAvIDIpXHJcbiAgICAgICAgICBlbGVtZW50Lm1heEdhcCA9IGVsZW1lbnQuZWwucGFyZW50Tm9kZS5vZmZzZXRIZWlnaHQgLSBlbGVtZW50LmVsLm9mZnNldEhlaWdodFxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNyb2xsIGhhbmRsZXJcclxuICAgKi9cclxuICBzY3JvbGxIYW5kbGVyICgpIHtcclxuICAgIHRoaXMuY2hlY2tFbGVtZW50cygpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBwb3NpdGlvblxyXG4gICAqL1xyXG4gIGNoZWNrRWxlbWVudHMgKCkge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudHMpIHtcclxuICAgICAgdmFyIHNjcm9sbFRvcCA9ICh3aW5kb3cuc21vb3RoU2Nyb2xsVG9wID8gd2luZG93LnNtb290aFNjcm9sbFRvcCA6IHdpbmRvdy5zY3JvbGxUb3ApXHJcbiAgICAgIHNjcm9sbFRvcCA9IE1hdGgubWF4KHNjcm9sbFRvcCwgMClcclxuXHJcbiAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGlmIChzY3JvbGxUb3AgPj0gZWxlbWVudC5zdGFydCkge1xyXG4gICAgICAgICAgdmFyIGdhcCA9IE1hdGgubWluKHNjcm9sbFRvcCAtIGVsZW1lbnQuc3RhcnQsIGVsZW1lbnQubWF4R2FwKVxyXG5cclxuICAgICAgICAgIGVsZW1lbnQuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsICcgKyBnYXAgKyAncHgsIDApJ1xyXG5cclxuICAgICAgICAgIGlmIChnYXAgPT09IGVsZW1lbnQubWF4R2FwKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZWwuc2V0QXR0cmlidXRlKCdkYXRhLWxnLXN0aWNreS1zdGF0ZScsICdpcy1maXhlZCBpcy1maXhlZC0tYm90dG9tJylcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuZWwuc2V0QXR0cmlidXRlKCdkYXRhLWxnLXN0aWNreS1zdGF0ZScsICdpcy1tb3ZpbmcnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsVG9wIDwgZWxlbWVudC5zdGFydCkge1xyXG4gICAgICAgICAgZWxlbWVudC5lbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwgMCwgMCknXHJcblxyXG4gICAgICAgICAgZWxlbWVudC5lbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGctc3RpY2t5LXN0YXRlJywgJ2lzLWZpeGVkIGlzLWZpeGVkLS10b3AnKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXHJcbmNvbnN0IGVtaXR0ZXIgPSByZXF1aXJlKCd0aW55LWVtaXR0ZXIvaW5zdGFuY2UnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNpdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3JcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmXHJcbiAgICB0aGlzLnBhZ2VGZXRjaGVkID0gbnVsbFxyXG5cclxuICAgIHRoaXMubGlzdGVuZXJzID0geyBsaW5rSGFuZGxlcjogdGhpcy5saW5rSGFuZGxlci5iaW5kKHRoaXMpIH1cclxuXHJcbiAgICB0aGlzLndhaXQgPSB7XHJcbiAgICAgIGZldGNoOiB0cnVlLFxyXG4gICAgICBvdXQ6IHRydWVcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cubGcuQ29yZS5hZGRBY3Rpb24oJ3NpdGVJbml0JywgdGhpcy5zaXRlSW5pdC5iaW5kKHRoaXMpKVxyXG4gICAgd2luZG93LmxnLkNvcmUuYWRkQWN0aW9uKCdwYWdlSW5pdCcsIHRoaXMucGFnZUluaXQuYmluZCh0aGlzKSlcclxuICAgIHdpbmRvdy5sZy5Db3JlLmFkZEFjdGlvbigncGFnZUZldGNoJywgdGhpcy5wYWdlRmV0Y2guYmluZCh0aGlzKSlcclxuICAgIHdpbmRvdy5sZy5Db3JlLmFkZEFjdGlvbigncGFnZU91dCcsIHRoaXMucGFnZU91dC5iaW5kKHRoaXMpKVxyXG4gICAgd2luZG93LmxnLkNvcmUuYWRkQWN0aW9uKCdwYWdlSW4nLCB0aGlzLnBhZ2VJbi5iaW5kKHRoaXMpKVxyXG4gICAgd2luZG93LmxnLkNvcmUuYWRkQWN0aW9uKCdwYWdlQ3JlYXRlJywgdGhpcy5wYWdlQ3JlYXRlLmJpbmQodGhpcykpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBCaW5kIGxpbmtzIGV2ZW50XHJcbiAgICovXHJcbiAgYmluZExpbmtzRXZlbnQgKCkge1xyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxnLXBhZ2VdJykpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5saXN0ZW5lcnMubGlua0hhbmRsZXIpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVbmJpbmQgbGlua3MgaGFuZGxlclxyXG4gICAqL1xyXG4gIHVuYmluZExpbmtzRXZlbnQgKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpLmZvckVhY2goZWwgPT4geyBlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubGlzdGVuZXJzLmxpbmtIYW5kbGVyKSB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGluayBoYW5kbGVyXHJcbiAgICovXHJcbiAgbGlua0hhbmRsZXIgKGUpIHtcclxuICAgIHZhciBlbGVtZW50ID0gZS5jdXJyZW50VGFyZ2V0XHJcbiAgICB2YXIgaHJlZiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJylcclxuXHJcbiAgICBpZiAoaHJlZiAmJlxyXG4gICAgICAhZWxlbWVudC5jbG9zZXN0KCcjd3BhZG1pbmJhcicpICYmXHJcbiAgICAgIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxnLXRyYW5zaXRpb24nKSAhPT0gJ2Rpc2FibGVkJyAmJlxyXG4gICAgICBlbGVtZW50LmdldEF0dHJpYnV0ZSgndGFyZ2V0JykgIT09ICdfYmxhbmsnKSB7XHJcbiAgICAgIC8vIENoZWNrIGlmIGl0J3MgYW4gaW50ZXJuYWwgVVJMXHJcbiAgICAgIGlmIChocmVmLmluZGV4T2Yod2luZG93LmxvY2F0aW9uLm9yaWdpbikgPT09IDAgfHxcclxuICAgICAgICAgIGhyZWYuaW5kZXhPZignLycpID09PSAwIHx8XHJcbiAgICAgICAgICBocmVmLmluZGV4T2YoJy8nKSA9PT0gLTEpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmID09PSBocmVmKSB7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubmF2aWdhdGVUbyhocmVmKVxyXG5cclxuICAgICAgICAvLyBDaGFuZ2UgcGFnZSB1cmxcclxuICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB0aGlzLnVybClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTmF2aWdhdGUgdG8gcGFnZVxyXG4gICAqL1xyXG4gIG5hdmlnYXRlVG8gKHVybCkge1xyXG4gICAgdGhpcy51cmwgPSB1cmxcclxuXHJcbiAgICB0aGlzLndhaXQuZmV0Y2ggPSB0cnVlXHJcbiAgICB0aGlzLndhaXQub3V0ID0gdHJ1ZVxyXG5cclxuICAgIHdpbmRvdy5sZy5Db3JlLndhaXQudHJhbnNpdGlvbiA9IHtcclxuICAgICAgZmV0Y2g6IHRydWUsXHJcbiAgICAgIG91dDogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5sZy5Db3JlLmRvQWN0aW9uKCdwYWdlRmV0Y2gnKVxyXG4gICAgd2luZG93LmxnLkNvcmUuZG9BY3Rpb24oJ3BhZ2VPdXQnKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2l0ZSBpbml0XHJcbiAgICovXHJcbiAgc2l0ZUluaXQgKGRvbmUpIHtcclxuICAgIGRvbmUoKVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMuaGlzdG9yeVN0YXRlQ2hhbmdlZC5iaW5kKHRoaXMpKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFnZSBpbml0XHJcbiAgICovXHJcbiAgcGFnZUluaXQgKGRvbmUpIHtcclxuICAgIHRoaXMuYmluZExpbmtzRXZlbnQoKVxyXG5cclxuICAgIGRvbmUoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2hcclxuICAgKi9cclxuICBwYWdlRmV0Y2ggKGRvbmUpIHtcclxuICAgIHZhciBzZWxmID0gdGhpc1xyXG5cclxuICAgIGlmICh0aGlzLnVybCkge1xyXG4gICAgICBmZXRjaCh0aGlzLnVybCwgeyBjcmVkZW50aWFsczogJ2luY2x1ZGUnIH0pXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpXHJcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgc2VsZi5wYWdlRmV0Y2hlZCA9IGJvZHlcclxuXHJcbiAgICAgICAgICBkb25lKClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFnZSBvdXRcclxuICAgKi9cclxuICBwYWdlT3V0IChkb25lKSB7XHJcbiAgICB2YXIgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxnLXBhZ2VdJylcclxuXHJcbiAgICBpZiAocGFnZSkge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsKDAsIDApXHJcbiAgICAgIHdpbmRvdy5zbW9vdGhTY3JvbGxUb3AgPSAwXHJcblxyXG4gICAgICBwYWdlLnN0eWxlLnRyYW5zaXRpb24gPSAnb3BhY2l0eSAwLjNzIGxpbmVhciAhaW1wb3J0YW50J1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgcGFnZS5zdHlsZS5vcGFjaXR5ID0gMCB9LCAxMClcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHBhZ2Uuc3R5bGUudHJhbnNpdGlvbiA9ICcnXHJcbiAgICAgICAgcGFnZS5zdHlsZS5vcGFjaXR5ID0gJydcclxuXHJcbiAgICAgICAgZG9uZSgpXHJcbiAgICAgIH0sIDMwMClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvbmUoKVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudW5iaW5kTGlua3NFdmVudC5iaW5kKHRoaXMpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQYWdlIGluXHJcbiAgICovXHJcbiAgcGFnZUluIChkb25lKSB7XHJcbiAgICB2YXIgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWxnLXBhZ2VdJylcclxuXHJcbiAgICBpZiAocGFnZSkge1xyXG4gICAgICBwYWdlLnN0eWxlLnRyYW5zaXRpb24gPSAnb3BhY2l0eSAwLjNzIGxpbmVhciAhaW1wb3J0YW50J1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHsgcGFnZS5zdHlsZS5vcGFjaXR5ID0gMSB9LCAxMClcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHBhZ2Uuc3R5bGUudHJhbnNpdGlvbiA9ICcnXHJcbiAgICAgICAgcGFnZS5zdHlsZS5vcGFjaXR5ID0gJydcclxuXHJcbiAgICAgICAgZG9uZSgpXHJcbiAgICAgIH0sIDMwMClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvbmUoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGFnZSBjcmVhdGVcclxuICAgKi9cclxuICBwYWdlQ3JlYXRlIChkb25lKSB7XHJcbiAgICAvLyBDb252ZXJ0IGRhdGEgdG8gSFRNTFxyXG4gICAgdmFyIGh0bWwgPSBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKHRoaXMucGFnZUZldGNoZWQsICd0ZXh0L2h0bWwnKVxyXG5cclxuICAgIC8vIEdldCBjb250YWluZXJzXHJcbiAgICB2YXIgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1sZy1wYWdlXScpXHJcbiAgICB2YXIgbmV3UGFnZSA9IGh0bWwucXVlcnlTZWxlY3RvcignW2RhdGEtbGctcGFnZV0nKVxyXG5cclxuICAgIGlmIChuZXdQYWdlKSB7XHJcbiAgICAgIC8vIFN3aXRjaCBjb250YWluZXJzXHJcbiAgICAgIGN1cnJlbnRQYWdlLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBuZXdQYWdlKVxyXG5cclxuICAgICAgbmV3UGFnZS5zdHlsZS5vcGFjaXR5ID0gMFxyXG5cclxuICAgICAgY3VycmVudFBhZ2Uuc3R5bGUub3BhY2l0eSA9IDBcclxuICAgICAgY3VycmVudFBhZ2Uuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICAgIGN1cnJlbnRQYWdlLnN0eWxlLnRvcCA9IDBcclxuICAgICAgY3VycmVudFBhZ2Uuc3R5bGUubGVmdCA9ICctOTk5ZW0nXHJcbiAgICAgIGN1cnJlbnRQYWdlLnN0eWxlLndpZHRoID0gJzEwMCUnXHJcblxyXG4gICAgICAvLyBTd2l0Y2ggY2xhc3Nlc1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NOYW1lID0gaHRtbC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NOYW1lXHJcblxyXG4gICAgICAvLyBTd2l0Y2ggbWV0YXNcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbWV0YVtuYW1lPVwiZGVzY3JpcHRpb25cIl0sIG1ldGFbbmFtZT1cImtleXdvcmRzXCJdLCBtZXRhW3Byb3BlcnR5PVwib2c6aW1hZ2VcIl0nKS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KVxyXG4gICAgICB9KVxyXG4gICAgICBodG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJ21ldGFbbmFtZT1cImRlc2NyaXB0aW9uXCJdLCBtZXRhW25hbWU9XCJrZXl3b3Jkc1wiXSwgbWV0YVtwcm9wZXJ0eT1cIm9nOmltYWdlXCJdJykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkIHRpdGxlJykuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGVsZW1lbnQpXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBTZXQgdGl0bGVcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCB0aXRsZScpLmlubmVyVGV4dCA9IGh0bWwucXVlcnlTZWxlY3RvcignaGVhZCB0aXRsZScpLmlubmVyVGV4dFxyXG4gICAgfVxyXG5cclxuICAgIGRvbmUoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGlzdG9yeSBjaGFuZ2VcclxuICAgKi9cclxuICBoaXN0b3J5U3RhdGVDaGFuZ2VkICgpIHtcclxuICAgIHRoaXMubmF2aWdhdGVUbyh3aW5kb3cubG9jYXRpb24uaHJlZilcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==