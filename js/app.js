/*!
 * External js:
 * MoveTo https://github.com/hsnaydd/moveTo MIT
 * lite-youtube-embed https://github.com/paulirish/lite-youtube-embed MIT
 */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/components/DropPanel.js":
/*!*******************************************!*\
  !*** ./source/js/components/DropPanel.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropPanel)\n/* harmony export */ });\nclass DropPanel {\n  constructor() {\n    let {\n      button,\n      container,\n      classOpen,\n      onOpen,\n      onClose\n    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    this.button = button || '[data-dropdown=\"button\"]';\n    this.clickedOutside = this._clickedOutside.bind(this);\n    this.clickedOutsideHandler = this.clickedOutside.bind(this);\n    this.options = {\n      container: container || '[data-dropdown=\"wrapper\"]',\n      classOpen: classOpen || 'is-open',\n      onOpen: onOpen || null,\n      onClose: onClose || null\n    };\n    this._init();\n  }\n  _init() {\n    if (!document.querySelector(this.button)) return;\n    document.querySelectorAll(this.button).forEach(item => {\n      item.addEventListener('click', this._click.bind(this));\n    });\n  }\n  _click(e) {\n    e.preventDefault();\n    const wrapper = e.target.closest(this.options.container);\n    if (!wrapper) {\n      return;\n    }\n    if (!wrapper.classList.contains(this.options.classOpen)) {\n      this._open(wrapper);\n    } else {\n      this._close();\n    }\n  }\n  _clickedOutside() {\n    const panels = document.querySelectorAll(`${this.options.container}.${this.options.classOpen}`);\n    [].forEach.call(panels, el => !el.contains(event.target) && this._close());\n  }\n  _open(wrapper) {\n    wrapper.classList.add(this.options.classOpen);\n    if (this.options.onOpen) {\n      this.options.onOpen();\n    }\n    window.addEventListener('click', this.clickedOutsideHandler.bind(this));\n  }\n  _close() {\n    const panels = document.querySelectorAll(`${this.options.container}.${this.options.classOpen}`);\n    [].forEach.call(panels, el => el.classList.remove(this.options.classOpen));\n    if (this.options.onClose) {\n      this.options.onClose();\n    }\n    window.removeEventListener('click', this.clickedOutsideHandler.bind(this));\n  }\n}\n\n//# sourceURL=webpack:///./source/js/components/DropPanel.js?");

/***/ }),

/***/ "./source/js/components/MainMenu.js":
/*!******************************************!*\
  !*** ./source/js/components/MainMenu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ \"./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js\");\n\nconst burger = () => {\n  const burgerEl = document?.querySelector('[data-burger]');\n  const menu = document?.querySelector('[data-menu]');\n  const targetElement = document.querySelector('body');\n  const header = document.querySelector('.header');\n  function disableScroll() {\n    const pagePosition = window.scrollY;\n    document.body.classList.add('scroll');\n    document.body.dataset.position = pagePosition;\n  }\n  function enableScroll() {\n    document.body.classList.remove('scroll');\n    document.body.removeAttribute('data-position');\n  }\n  burgerEl?.addEventListener('click', () => {\n    burgerEl?.classList.toggle('burger--active');\n    menu?.classList.toggle('active');\n    header?.classList.toggle('header--active');\n    if (menu?.classList.contains('active')) {\n      burgerEl?.setAttribute('aria-expanded', 'true');\n      burgerEl?.setAttribute('aria-label', 'Сlose menu');\n      disableScroll();\n    } else {\n      burgerEl?.setAttribute('aria-expanded', 'false');\n      burgerEl?.setAttribute('aria-label', 'Open menu');\n      enableScroll();\n    }\n  });\n  const appHeight = () => {\n    const doc = document.documentElement;\n    doc.style.setProperty('--app-height', `${window.innerHeight}px`);\n  };\n  window.addEventListener('resize', appHeight);\n  appHeight();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\n\n//# sourceURL=webpack:///./source/js/components/MainMenu.js?");

/***/ }),

/***/ "./source/js/components/accordion.js":
/*!*******************************************!*\
  !*** ./source/js/components/accordion.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordion = () => {\n  const accordions = document.querySelectorAll('.accordion');\n  let activeAccordion = null;\n  accordions.forEach(el => {\n    el.addEventListener('click', e => {\n      const self = e.currentTarget;\n      const control = self.querySelector('.accordion__control'); //\n      const content = self.querySelector('.accordion__content'); // то что будем открывать\n\n      if (self === activeAccordion) {\n        return;\n      }\n      if (activeAccordion) {\n        const activeControl = activeAccordion.querySelector('.accordion__control');\n        const activeContent = activeAccordion.querySelector('.accordion__content');\n        activeAccordion.classList.remove('open');\n        activeControl.setAttribute('aria-expanded', false);\n        activeContent.setAttribute('aria-hidden', true);\n        activeContent.style.maxHeight = null;\n      }\n      self.classList.add('open');\n      control.setAttribute('aria-expanded', true);\n      content.setAttribute('aria-hidden', false);\n      content.style.maxHeight = `${content.scrollHeight}px`;\n      activeAccordion = self;\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);\n\n//# sourceURL=webpack:///./source/js/components/accordion.js?");

/***/ }),

/***/ "./source/js/components/header.js":
/*!****************************************!*\
  !*** ./source/js/components/header.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst header = () => {\n  const header = document.querySelector('.header');\n  const hero = document.getElementById('hero');\n  if (hero) {\n    const heroHeight = hero.clientHeight;\n    document.addEventListener('scroll', () => {\n      if (window.scrollY > heroHeight) {\n        header.classList.add('active');\n      } else {\n        header.classList.remove('active');\n      }\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack:///./source/js/components/header.js?");

/***/ }),

/***/ "./source/js/components/select.js":
/*!****************************************!*\
  !*** ./source/js/components/select.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst SELECT_SELECTOR = '.js-select';\nconst BTN_SELECTOR = '.js-select-btn';\nconst LIST_SELECTOR = '.js-select-list';\nconst OPTION_SELECTOR = '.js-select-option';\nconst CLASS_ACTIVE = 'active';\nconst SELECTS = document?.querySelectorAll('.js-select');\nconst initSelects = () => {\n  if (!SELECTS.length) return;\n  function closeAllSelect() {\n    const btnList = document?.querySelectorAll(BTN_SELECTOR);\n    const selectList = document?.querySelectorAll(LIST_SELECTOR);\n    btnList.forEach(el => el.classList.remove(CLASS_ACTIVE));\n    selectList.forEach(el => el.classList.remove(CLASS_ACTIVE));\n  }\n  SELECTS.forEach(select => {\n    const btn = select.querySelector(BTN_SELECTOR);\n    const selectList = select.querySelector(LIST_SELECTOR);\n    const optionList = selectList.querySelectorAll(OPTION_SELECTOR);\n    btn.addEventListener('click', e => {\n      const target = e.target.closest(BTN_SELECTOR);\n      if (target.classList.contains(CLASS_ACTIVE)) {\n        target.classList.remove(CLASS_ACTIVE);\n        selectList.classList.remove(CLASS_ACTIVE);\n      } else {\n        closeAllSelect();\n        target.classList.add(CLASS_ACTIVE);\n        selectList.classList.add(CLASS_ACTIVE);\n      }\n    });\n    selectList.addEventListener('click', e => {\n      const target = e.target.closest(OPTION_SELECTOR);\n      if (target) {\n        const value = target.getAttribute('data-value');\n        const content = target.innerHTML;\n        optionList.forEach(option => option.classList.remove(CLASS_ACTIVE));\n        target.classList.add(CLASS_ACTIVE);\n        btn.classList.remove(CLASS_ACTIVE);\n        btn.innerHTML = content;\n        btn.setAttribute('data-value', value);\n        selectList.classList.remove(CLASS_ACTIVE);\n      }\n    });\n  });\n  document.addEventListener('click', e => {\n    const {\n      target\n    } = e;\n    if (target && !target.closest(SELECT_SELECTOR)) {\n      closeAllSelect();\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initSelects);\n\n//# sourceURL=webpack:///./source/js/components/select.js?");

/***/ }),

/***/ "./source/js/index.js":
/*!****************************!*\
  !*** ./source/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_DropPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/DropPanel */ \"./source/js/components/DropPanel.js\");\n/* harmony import */ var _components_MainMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MainMenu */ \"./source/js/components/MainMenu.js\");\n/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accordion */ \"./source/js/components/accordion.js\");\n/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/select */ \"./source/js/components/select.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header */ \"./source/js/components/header.js\");\n\n\n\n\n\n\n\n// Init\nfunction init() {\n  (0,_components_accordion__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_components_select__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  (0,_components_MainMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n(function () {\n  init();\n})();\n\n//# sourceURL=webpack:///./source/js/index.js?");

/***/ }),

/***/ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearAllBodyScrollLocks: () => (/* binding */ clearAllBodyScrollLocks),\n/* harmony export */   disableBodyScroll: () => (/* binding */ disableBodyScroll),\n/* harmony export */   enableBodyScroll: () => (/* binding */ enableBodyScroll)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n// Older browsers don't support event options, feature detect it.\n\n// Adopted and modified solution from Bohdan Didukh (2017)\n// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi\n\nvar hasPassiveEvents = false;\nif (typeof window !== 'undefined') {\n  var passiveTestOptions = {\n    get passive() {\n      hasPassiveEvents = true;\n      return undefined;\n    }\n  };\n  window.addEventListener('testPassive', null, passiveTestOptions);\n  window.removeEventListener('testPassive', null, passiveTestOptions);\n}\n\nvar isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);\n\n\nvar locks = [];\nvar documentListenerAdded = false;\nvar initialClientY = -1;\nvar previousBodyOverflowSetting = void 0;\nvar previousBodyPosition = void 0;\nvar previousBodyPaddingRight = void 0;\n\n// returns true if `el` should be allowed to receive touchmove events.\nvar allowTouchMove = function allowTouchMove(el) {\n  return locks.some(function (lock) {\n    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {\n      return true;\n    }\n\n    return false;\n  });\n};\n\nvar preventDefault = function preventDefault(rawEvent) {\n  var e = rawEvent || window.event;\n\n  // For the case whereby consumers adds a touchmove event listener to document.\n  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })\n  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then\n  // the touchmove event on document will break.\n  if (allowTouchMove(e.target)) {\n    return true;\n  }\n\n  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).\n  if (e.touches.length > 1) return true;\n\n  if (e.preventDefault) e.preventDefault();\n\n  return false;\n};\n\nvar setOverflowHidden = function setOverflowHidden(options) {\n  // If previousBodyPaddingRight is already set, don't set it again.\n  if (previousBodyPaddingRight === undefined) {\n    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;\n    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;\n\n    if (_reserveScrollBarGap && scrollBarGap > 0) {\n      var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'), 10);\n      previousBodyPaddingRight = document.body.style.paddingRight;\n      document.body.style.paddingRight = computedBodyPaddingRight + scrollBarGap + 'px';\n    }\n  }\n\n  // If previousBodyOverflowSetting is already set, don't set it again.\n  if (previousBodyOverflowSetting === undefined) {\n    previousBodyOverflowSetting = document.body.style.overflow;\n    document.body.style.overflow = 'hidden';\n  }\n};\n\nvar restoreOverflowSetting = function restoreOverflowSetting() {\n  if (previousBodyPaddingRight !== undefined) {\n    document.body.style.paddingRight = previousBodyPaddingRight;\n\n    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it\n    // can be set again.\n    previousBodyPaddingRight = undefined;\n  }\n\n  if (previousBodyOverflowSetting !== undefined) {\n    document.body.style.overflow = previousBodyOverflowSetting;\n\n    // Restore previousBodyOverflowSetting to undefined\n    // so setOverflowHidden knows it can be set again.\n    previousBodyOverflowSetting = undefined;\n  }\n};\n\nvar setPositionFixed = function setPositionFixed() {\n  return window.requestAnimationFrame(function () {\n    // If previousBodyPosition is already set, don't set it again.\n    if (previousBodyPosition === undefined) {\n      previousBodyPosition = {\n        position: document.body.style.position,\n        top: document.body.style.top,\n        left: document.body.style.left\n      };\n\n      // Update the dom inside an animation frame \n      var _window = window,\n          scrollY = _window.scrollY,\n          scrollX = _window.scrollX,\n          innerHeight = _window.innerHeight;\n\n      document.body.style.position = 'fixed';\n      document.body.style.top = -scrollY;\n      document.body.style.left = -scrollX;\n\n      setTimeout(function () {\n        return window.requestAnimationFrame(function () {\n          // Attempt to check if the bottom bar appeared due to the position change\n          var bottomBarHeight = innerHeight - window.innerHeight;\n          if (bottomBarHeight && scrollY >= innerHeight) {\n            // Move the content further up so that the bottom bar doesn't hide it\n            document.body.style.top = -(scrollY + bottomBarHeight);\n          }\n        });\n      }, 300);\n    }\n  });\n};\n\nvar restorePositionSetting = function restorePositionSetting() {\n  if (previousBodyPosition !== undefined) {\n    // Convert the position from \"px\" to Int\n    var y = -parseInt(document.body.style.top, 10);\n    var x = -parseInt(document.body.style.left, 10);\n\n    // Restore styles\n    document.body.style.position = previousBodyPosition.position;\n    document.body.style.top = previousBodyPosition.top;\n    document.body.style.left = previousBodyPosition.left;\n\n    // Restore scroll\n    window.scrollTo(x, y);\n\n    previousBodyPosition = undefined;\n  }\n};\n\n// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions\nvar isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {\n  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;\n};\n\nvar handleScroll = function handleScroll(event, targetElement) {\n  var clientY = event.targetTouches[0].clientY - initialClientY;\n\n  if (allowTouchMove(event.target)) {\n    return false;\n  }\n\n  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {\n    // element is at the top of its scroll.\n    return preventDefault(event);\n  }\n\n  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {\n    // element is at the bottom of its scroll.\n    return preventDefault(event);\n  }\n\n  event.stopPropagation();\n  return true;\n};\n\nvar disableBodyScroll = function disableBodyScroll(targetElement, options) {\n  // targetElement must be provided\n  if (!targetElement) {\n    // eslint-disable-next-line no-console\n    console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');\n    return;\n  }\n\n  // disableBodyScroll must not have been called on this targetElement before\n  if (locks.some(function (lock) {\n    return lock.targetElement === targetElement;\n  })) {\n    return;\n  }\n\n  var lock = {\n    targetElement: targetElement,\n    options: options || {}\n  };\n\n  locks = [].concat(_toConsumableArray(locks), [lock]);\n\n  if (isIosDevice) {\n    setPositionFixed();\n  } else {\n    setOverflowHidden(options);\n  }\n\n  if (isIosDevice) {\n    targetElement.ontouchstart = function (event) {\n      if (event.targetTouches.length === 1) {\n        // detect single touch.\n        initialClientY = event.targetTouches[0].clientY;\n      }\n    };\n    targetElement.ontouchmove = function (event) {\n      if (event.targetTouches.length === 1) {\n        // detect single touch.\n        handleScroll(event, targetElement);\n      }\n    };\n\n    if (!documentListenerAdded) {\n      document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);\n      documentListenerAdded = true;\n    }\n  }\n};\n\nvar clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {\n  if (isIosDevice) {\n    // Clear all locks ontouchstart/ontouchmove handlers, and the references.\n    locks.forEach(function (lock) {\n      lock.targetElement.ontouchstart = null;\n      lock.targetElement.ontouchmove = null;\n    });\n\n    if (documentListenerAdded) {\n      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);\n      documentListenerAdded = false;\n    }\n\n    // Reset initial clientY.\n    initialClientY = -1;\n  }\n\n  if (isIosDevice) {\n    restorePositionSetting();\n  } else {\n    restoreOverflowSetting();\n  }\n\n  locks = [];\n};\n\nvar enableBodyScroll = function enableBodyScroll(targetElement) {\n  if (!targetElement) {\n    // eslint-disable-next-line no-console\n    console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');\n    return;\n  }\n\n  locks = locks.filter(function (lock) {\n    return lock.targetElement !== targetElement;\n  });\n\n  if (isIosDevice) {\n    targetElement.ontouchstart = null;\n    targetElement.ontouchmove = null;\n\n    if (documentListenerAdded && locks.length === 0) {\n      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);\n      documentListenerAdded = false;\n    }\n  }\n\n  if (isIosDevice) {\n    restorePositionSetting();\n  } else {\n    restoreOverflowSetting();\n  }\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./source/js/index.js");
/******/ 	
/******/ })()
;