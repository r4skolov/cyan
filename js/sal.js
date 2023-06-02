/*!
 * External js:
 * MoveTo https://github.com/hsnaydd/moveTo MIT
 * lite-youtube-embed https://github.com/paulirish/lite-youtube-embed MIT
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 153:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){return(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.d(t,{default:()=>j});var a="Sal was not initialised! Probably it is used in SSR.",s="Your browser does not support IntersectionObserver!\nGet a polyfill from here:\nhttps://github.com/w3c/IntersectionObserver/tree/master/polyfill",i={root:null,rootMargin:"0% 50%",threshold:.5,animateClassName:"sal-animate",disabledClassName:"sal-disabled",enterEventName:"sal:in",exitEventName:"sal:out",selector:"[data-sal]",once:!0,disabled:!1},l=[],c=null,u=function(e){e&&e!==i&&(i=r(r({},i),e))},d=function(e){e.classList.remove(i.animateClassName)},f=function(e,t){var n=new CustomEvent(e,{bubbles:!0,detail:t});t.target.dispatchEvent(n)},b=function(){document.body.classList.add(i.disabledClassName)},p=function(){c.disconnect(),c=null},m=function(){return i.disabled||"function"==typeof i.disabled&&i.disabled()},v=function(e,t){e.forEach((function(e){var n=e.target,r=void 0!==n.dataset.salRepeat,o=void 0!==n.dataset.salOnce,a=r||!(o||i.once);e.intersectionRatio>=i.threshold?(function(e){e.target.classList.add(i.animateClassName),f(i.enterEventName,e)}(e),a||t.unobserve(n)):a&&function(e){d(e.target),f(i.exitEventName,e)}(e)}))},y=function(){var e=[].filter.call(document.querySelectorAll(i.selector),(function(e){return!function(e){return e.classList.contains(i.animateClassName)}(e,i.animateClassName)}));return e.forEach((function(e){return c.observe(e)})),e},O=function(){b(),p()},h=function(){document.body.classList.remove(i.disabledClassName),c=new IntersectionObserver(v,{root:i.root,rootMargin:i.rootMargin,threshold:i.threshold}),l=y()},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p(),Array.from(document.querySelectorAll(i.selector)).forEach(d),u(e),h()},w=function(){var e=y();l.push(e)};const j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;if(u(e),"undefined"==typeof window)return console.warn(a),{elements:l,disable:O,enable:h,reset:g,update:w};if(!window.IntersectionObserver)throw b(),Error(s);return m()?b():h(),{elements:l,disable:O,enable:h,reset:g,update:w}};return t.default})()}));
//# sourceMappingURL=sal.js.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(153);
/* harmony import */ var sal_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sal_js__WEBPACK_IMPORTED_MODULE_0__);

sal_js__WEBPACK_IMPORTED_MODULE_0___default()();
})();

/******/ })()
;
//# sourceMappingURL=sal.js.map