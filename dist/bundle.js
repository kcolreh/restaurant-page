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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --clr-neutral-black: hsl(0, 75%, 2%);\\n  --clr-neutral-white: hsl(0, 0%, 100%);\\n  --clr-primary: hsl(24, 57%, 57%);\\n  --clr-secondary: rgba(255, 127, 80, 0.218);\\n  --clr-neutral: hsla(3, 48%, 45%, 0.645);\\n}\\n\\n*,\\n*:before,\\n*:after {\\n  box-sizing: border-box;\\n}\\n\\nhtml,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  border: 0;\\n}\\n\\n.content {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.header {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-wrap: nowrap;\\n  width: 100vw;\\n  background-color: var(--clr-primary);\\n  color: white;\\n}\\n\\n.header-button {\\n  font-size: 1rem;\\n  width: 2rem;\\n  height: 2rem;\\n  margin: 1rem 3rem 1rem 3rem;\\n  color: var(--clr-neutral-white);\\n  background: none;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\n.header-button:hover {\\n  font-weight: bold;\\n}\\n\\n.header-title {\\n  text-align: center;\\n  font-size: 3rem;\\n  margin-left: 3rem;\\n  margin-right: 3rem;\\n}\\n\\n.image-title {\\n  height: 200px;\\n  width: 200px;\\n  margin-top: 2rem;\\n  margin-bottom: 2rem;\\n}\\n.image-title:hover {\\n  animation: shake 1s;\\n  animation-iteration-count: infinite;\\n}\\n\\n@keyframes shake {\\n  0% {\\n    transform: translate(1px, 1px) rotate(0deg);\\n  }\\n  10% {\\n    transform: translate(-1px, -2px) rotate(-1deg);\\n  }\\n  20% {\\n    transform: translate(-3px, 0px) rotate(1deg);\\n  }\\n  30% {\\n    transform: translate(3px, 2px) rotate(0deg);\\n  }\\n  40% {\\n    transform: translate(1px, -1px) rotate(1deg);\\n  }\\n  50% {\\n    transform: translate(-1px, 2px) rotate(-1deg);\\n  }\\n  60% {\\n    transform: translate(-3px, 1px) rotate(0deg);\\n  }\\n  70% {\\n    transform: translate(3px, 1px) rotate(-1deg);\\n  }\\n  80% {\\n    transform: translate(-1px, -1px) rotate(1deg);\\n  }\\n  90% {\\n    transform: translate(1px, 2px) rotate(0deg);\\n  }\\n  100% {\\n    transform: translate(1px, -2px) rotate(-1deg);\\n  }\\n}\\n\\n.menu-grid {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));\\n  overflow: auto;\\n  grid-gap: 20px;\\n  width: 60vw;\\n  margin-bottom: 1rem;\\n}\\n\\n.menu-items {\\n  justify-self: center;\\n  border-radius: 1rem;\\n  border: 5px solid transparent;\\n  height: 410px;\\n  overflow: hidden;\\n}\\n\\n.menu-items:hover {\\n  cursor: pointer;\\n  border: 5px solid var(--clr-secondary);\\n}\\n\\n.card-image {\\n  height: 335px;\\n  width: 335px;\\n  object-fit: cover;\\n  object-position: 50% 50%;\\n}\\n.card-title {\\n  text-align: center;\\n  font-weight: 400;\\n  color: var(--clr-primary);\\n  margin: 2px;\\n}\\n\\n.card-paragraph {\\n  text-align: center;\\n  color: var(--clr-neutral);\\n  margin: 0;\\n}\\n\\n.social-media-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: var(--clr-secondary);\\n  gap: 1rem;\\n  height: 100px;\\n  width: 100vw;\\n}\\n\\n.social-media-button {\\n  background-color: transparent;\\n  font-size: 1rem;\\n  padding: 10px;\\n  width: 8rem;\\n  border: var(--clr-primary) solid 1px;\\n  color: var(--clr-primary);\\n}\\n\\n.social-media-button:hover {\\n  font-weight: bolder;\\n  cursor: pointer;\\n}\\n\\n.footer-menu-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: var(--clr-primary);\\n  gap: 1rem;\\n  height: 150px;\\n  width: 100vw;\\n}\\n\\n.footer-button {\\n  background-color: transparent;\\n  font-size: 1rem;\\n  padding: 10px;\\n  width: 8rem;\\n  border: var(--clr-neutral-white) solid 1px;\\n  color: var(--clr-neutral-white);\\n}\\n\\n.footer-button:hover {\\n  font-weight: bolder;\\n  cursor: pointer;\\n}\\n\\n/** home section below **/\\n\\n.home-container {\\n  display: flex;\\n  align-items: center;\\n  width: 100vw;\\n  height: 70vh;\\n  background-color: var(--clr-secondary);\\n}\\n\\n.t-p-container {\\n  width: 70vw;\\n  margin-left: 3rem;\\n}\\n\\n.home-title {\\n  color: var(--clr-neutral-white);\\n  font-size: 3.5rem;\\n  text-align: center;\\n}\\n\\n.home-paragraph-1 {\\n  border-bottom: var(--clr-neutral-white) 5px solid;\\n  padding-bottom: 1rem;\\n  padding-left: 1rem;\\n  font-size: 2.5rem;\\n  text-align: start;\\n}\\n\\n.home-paragraph-2 {\\n  border-top: var(--clr-neutral-white) 5px solid;\\n  padding-top: 1rem;\\n  font-size: 2rem;\\n  text-align: end;\\n}\\n\\n.home-image {\\n  height: 400px;\\n  width: 400px;\\n  background-color: none;\\n  object-fit: cover;\\n  object-position: 50% 50%;\\n}\\n\\n/** contact-page below **/\\n\\n.contact-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100vw;\\n}\\n\\n.location-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: end;\\n  border: 3px var(--clr-primary) solid;\\n  margin: 5rem 5rem 5rem 5rem;\\n  padding: 2rem;\\n  width: 450px;\\n  border-radius: 1rem;\\n  background-color: var(--clr-secondary);\\n}\\n\\n.contact-image {\\n  height: 200px;\\n  width: 200px;\\n}\\n\\n.contact-image:hover {\\n  animation: shake 1s;\\n  animation-iteration-count: infinite;\\n}\\n\\n.contact-paragraph-1 {\\n  font-size: 2rem;\\n  margin: 1rem;\\n}\\n\\n.contact-paragraph {\\n  font-size: 1.5rem;\\n  margin: 0.1rem;\\n}\\n\\n.location-container > ul {\\n  border: 3px var(--clr-primary) solid;\\n  padding: 1rem;\\n  border-radius: 1rem;\\n}\\n\\n.location-container > ul > li {\\n  font-size: 20px;\\n  margin: 1rem;\\n  list-style: none;\\n  color: var(--clr-neutral-black);\\n  text-align: center;\\n}\\n\\n/** about-page below **/\\n\\n.about-container {\\n  display: flex;\\n  margin: 5rem;\\n}\\n\\n.about-t-p-container {\\n  width: 40vw;\\n}\\n\\n.about-title {\\n  text-align: center;\\n  color: var(--clr-primary);\\n  font-weight: lighter;\\n  font-size: 3rem;\\n}\\n\\n.about-paragraph {\\n  text-align: center;\\n  color: var(--clr-secondary);\\n  font-weight: bolder;\\n  font-size: 2rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/functions/first-load.js":
/*!*************************************!*\
  !*** ./src/functions/first-load.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firstLoad\": () => (/* binding */ firstLoad)\n/* harmony export */ });\n/* harmony import */ var _pages_page_elements_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/page-elements/header */ \"./src/pages/page-elements/header.js\");\n/* harmony import */ var _pages_page_elements_home_page_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/page-elements/home-page-section */ \"./src/pages/page-elements/home-page-section.js\");\n/* harmony import */ var _pages_page_elements_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/page-elements/footer */ \"./src/pages/page-elements/footer.js\");\n\n\n\n\nfunction firstLoad() {\n    (0,_pages_page_elements_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)();\n    (0,_pages_page_elements_home_page_section__WEBPACK_IMPORTED_MODULE_1__.createHome)();\n    (0,_pages_page_elements_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)();\n}\n\n//# sourceURL=webpack://restaurant-page/./src/functions/first-load.js?");

/***/ }),

/***/ "./src/functions/render-page.js":
/*!**************************************!*\
  !*** ./src/functions/render-page.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderPage\": () => (/* binding */ renderPage)\n/* harmony export */ });\nfunction renderPage() {\n    const content = document.getElementById('content');\n    const header = document.getElementById('header');\n    content.replaceChildren(header);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/functions/render-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu.js */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact.js */ \"./src/pages/contact.js\");\n/* harmony import */ var _pages_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about.js */ \"./src/pages/about.js\");\n/* harmony import */ var _functions_render_page_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/render-page.js */ \"./src/functions/render-page.js\");\n/* harmony import */ var _functions_first_load_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/first-load.js */ \"./src/functions/first-load.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n\n\n(0,_functions_first_load_js__WEBPACK_IMPORTED_MODULE_5__.firstLoad)();\n\nconst changeHome = (() => {\n    const headerButton = document.getElementById('header-home');\n\n    headerButton.addEventListener('click', () => {\n\n        (0,_functions_render_page_js__WEBPACK_IMPORTED_MODULE_4__.renderPage)();\n        (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__.homePage)();\n    })\n})();\n\nconst changeAbout = (() => {\n    const headerButton = document.getElementById('header-about');\n\n    headerButton.addEventListener('click', () => {\n        (0,_functions_render_page_js__WEBPACK_IMPORTED_MODULE_4__.renderPage)();\n        (0,_pages_about_js__WEBPACK_IMPORTED_MODULE_3__.aboutPage)();\n    })\n})();\n\nconst changeMenu = (() => {\n    const headerButton = document.getElementById('header-menu');\n\n    headerButton.addEventListener('click', () => {\n\n        (0,_functions_render_page_js__WEBPACK_IMPORTED_MODULE_4__.renderPage)();\n        (0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuPage)();\n    })\n})();\n\nconst changeContect = (() => {\n    const headerButton = document.getElementById('header-contacts');\n\n    headerButton.addEventListener('click', () => {\n\n        (0,_functions_render_page_js__WEBPACK_IMPORTED_MODULE_4__.renderPage)();\n        (0,_pages_contact_js__WEBPACK_IMPORTED_MODULE_2__.contactPage)();\n    })\n})();\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutPage\": () => (/* binding */ aboutPage)\n/* harmony export */ });\n/* harmony import */ var _page_elements_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-elements/footer */ \"./src/pages/page-elements/footer.js\");\n/* harmony import */ var _page_elements_about_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-elements/about-section */ \"./src/pages/page-elements/about-section.js\");\n\n\n\nfunction aboutPage() {\n    (0,_page_elements_about_section__WEBPACK_IMPORTED_MODULE_1__.createAboutSection)();\n    (0,_page_elements_footer__WEBPACK_IMPORTED_MODULE_0__.createFooter)();\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\n/* harmony import */ var _page_elements_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-elements/contacts */ \"./src/pages/page-elements/contacts.js\");\n/* harmony import */ var _page_elements_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-elements/footer */ \"./src/pages/page-elements/footer.js\");\n\n\n\nfunction contactPage() {\n    (0,_page_elements_contacts__WEBPACK_IMPORTED_MODULE_0__.createContact)();\n    (0,_page_elements_footer__WEBPACK_IMPORTED_MODULE_1__.createFooter)();\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePage\": () => (/* binding */ homePage)\n/* harmony export */ });\n/* harmony import */ var _page_elements_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-elements/footer */ \"./src/pages/page-elements/footer.js\");\n/* harmony import */ var _page_elements_home_page_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-elements/home-page-section */ \"./src/pages/page-elements/home-page-section.js\");\n\n\n\nfunction homePage() {\n    (0,_page_elements_home_page_section__WEBPACK_IMPORTED_MODULE_1__.createHome)();\n    (0,_page_elements_footer__WEBPACK_IMPORTED_MODULE_0__.createFooter)();\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _page_elements_menu_card_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-elements/menu-card-section */ \"./src/pages/page-elements/menu-card-section.js\");\n/* harmony import */ var _page_elements_title_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-elements/title-section */ \"./src/pages/page-elements/title-section.js\");\n/* harmony import */ var _page_elements_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-elements/footer */ \"./src/pages/page-elements/footer.js\");\n\n\n\n\nfunction menuPage() {\n    (0,_page_elements_title_section__WEBPACK_IMPORTED_MODULE_1__.createSection1)();\n    (0,_page_elements_menu_card_section__WEBPACK_IMPORTED_MODULE_0__.createSection)();\n    (0,_page_elements_footer__WEBPACK_IMPORTED_MODULE_2__.createFooter)();\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/menu.js?");

/***/ }),

/***/ "./src/pages/page-elements/about-section.js":
/*!**************************************************!*\
  !*** ./src/pages/page-elements/about-section.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAboutSection\": () => (/* binding */ createAboutSection)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/pages/page-elements/elements.js\");\n\n\nfunction createAboutSection() {\n    const content = document.getElementById('content');\n\n    const aboutContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('about-container');\n    aboutContainer.classList.add('about-container');\n\n    const titleParagraphContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('about-t-p-container');\n    titleParagraphContainer.classList.add('about-t-p-container');\n\n    const aboutImage = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createImage)('about-image', '../src/utilities/img/home.png');\n    aboutImage.classList.add('about-image');\n\n    const aboutTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createTitle)(1, 'about-title', 'Serving every day since 2022');\n    aboutTitle.classList.add('about-title');\n\n    const aboutParagraph = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('about-paragraph', 'Kiku el restorano opened on Christmas Day 2022. Chefs / Owners Kiki & Gigi began baking pies and selling them to restaurants and his neighbors out of a small kitchen at the corner of Hoogstraat in Rotterdam. Today, the cities beloved restaurant and pie shop celebrates second year of classic, made from scratch european cooking.');\n    aboutParagraph.classList.add('about-paragraph');\n\n    content.appendChild(aboutContainer);\n    aboutContainer.appendChild(aboutImage);\n    aboutContainer.appendChild(titleParagraphContainer);\n    titleParagraphContainer.appendChild(aboutTitle);\n    titleParagraphContainer.appendChild(aboutParagraph);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/page-elements/about-section.js?");

/***/ }),

/***/ "./src/pages/page-elements/contacts.js":
/*!*********************************************!*\
  !*** ./src/pages/page-elements/contacts.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContact\": () => (/* binding */ createContact)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/pages/page-elements/elements.js\");\n\n\nfunction createContact() {\n    const content = document.getElementById('content');\n\n    const image = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createImage)('contact-image', '../src/utilities/img/title-cat.png')\n    image.classList.add('contact-image');\n\n    const contactContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('contact-container');\n    contactContainer.classList.add('contact-container');\n\n    const location1 = createLocation1();\n    const location2 = createLocation2();\n\n    content.appendChild(contactContainer);\n    contactContainer.appendChild(location1);\n    contactContainer.appendChild(image);\n    contactContainer.appendChild(location2);\n\n}\n\nfunction createLocation1() {\n\n    const locationContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('location-container');\n    locationContainer.classList.add('location-container');\n\n    const paragraph1 = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('contacts-paragraph-1', 'Hoogstraat - Rotterdam  First-Location')\n    paragraph1.classList.add('contact-paragraph-1');\n\n    const paragraph2 = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('contacts-paragraph-2', '30A - 3011PR');\n    paragraph2.classList.add('contact-paragraph');\n\n    const paragraph3 = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('contacts-paragraph-3', '+3106951192');\n    paragraph3.classList.add('contact-paragraph');\n\n    const timeList = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createList)('contact-list',\n        'Monday: 4pm - 11pm,Tuesday: 10:00am - 9pm,Wednesday: 10:00am - 9pm,Thursday: 10:00am - 9pm,Friday: 10:00am - 9pm,Saturday: 10:00am - 7pm,Sunday: 10:00am - 7pm');\n\n    locationContainer.appendChild(paragraph1);\n    locationContainer.appendChild(paragraph2);\n    locationContainer.appendChild(paragraph3);\n    locationContainer.appendChild(timeList);\n\n    return locationContainer\n}\n\nfunction createLocation2() {\n\n    const locationContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('location-container-2');\n    locationContainer.classList.add('location-container');\n\n    const paragraph1 = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('contacts-paragraph-1', ' Jacob Catsstraat - Rotterdam')\n    paragraph1.classList.add('contact-paragraph-1');\n\n    const paragraph2 = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('contacts-paragraph-2', '68 - 3035PP');\n    paragraph2.classList.add('contact-paragraph');\n\n    const paragraph3 = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('contacts-paragraph-3', '+3106234566');\n    paragraph3.classList.add('contact-paragraph');\n\n    const timeList = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createList)('contact-list',\n        'Monday: 4pm - 11pm,Tuesday: 10:00am - 9pm,Wednesday: 10:00am - 9pm,Thursday: 10:00am - 9pm,Friday: 10:00am - 9pm,Saturday: 10:00am - 7pm,Sunday: 10:00am - 7pm');\n\n    locationContainer.appendChild(paragraph1);\n    locationContainer.appendChild(paragraph2);\n    locationContainer.appendChild(paragraph3);\n    locationContainer.appendChild(timeList);\n\n    return locationContainer\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/page-elements/contacts.js?");

/***/ }),

/***/ "./src/pages/page-elements/elements.js":
/*!*********************************************!*\
  !*** ./src/pages/page-elements/elements.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createButton\": () => (/* binding */ createButton),\n/* harmony export */   \"createDiv\": () => (/* binding */ createDiv),\n/* harmony export */   \"createImage\": () => (/* binding */ createImage),\n/* harmony export */   \"createList\": () => (/* binding */ createList),\n/* harmony export */   \"createParagraph\": () => (/* binding */ createParagraph),\n/* harmony export */   \"createTitle\": () => (/* binding */ createTitle)\n/* harmony export */ });\nfunction createButton(id, content) {\n    const button = document.createElement('button');\n    button.innerHTML = content;\n    button.id = id;\n    return button\n};\n\nfunction createTitle(h, id, content) {\n    const title = document.createElement(`h${h}`)\n    title.id = id;\n    title.innerHTML = content;\n    return title\n};\n\n\nfunction createDiv(id) {\n    const div = document.createElement('div');\n    div.id = id;\n    return div;\n};\n\nfunction createImage(id, link) {\n    const image = document.createElement('img');\n    image.id = id;\n    image.src = link;\n    return image;\n};\n\nfunction createParagraph(id, content) {\n    const paragraph = document.createElement('p');\n    paragraph.classList.add('card-paragraph');\n    paragraph.id = id;\n    paragraph.innerHTML = content;\n    return paragraph;\n};\n\nfunction createList(id, content) {\n    const ul = document.createElement('ul');\n    const listArray = content.split(',');\n    ul.id = id;\n\n    listArray.forEach(element => {\n        const li = document.createElement('li');\n        li.innerHTML = element;\n        ul.appendChild(li);\n    });\n    return ul;\n};\n\n//# sourceURL=webpack://restaurant-page/./src/pages/page-elements/elements.js?");

/***/ }),

/***/ "./src/pages/page-elements/footer.js":
/*!*******************************************!*\
  !*** ./src/pages/page-elements/footer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/pages/page-elements/elements.js\");\n\n\nfunction socialMediaContainer(id) {\n    const mediaContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)(id);\n    const buttonContent = ['Instagram', 'Facebook', 'Twitter'];\n\n    buttonContent.forEach(index => {\n        const button = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createButton)(`header-${index.toLowerCase()}`, index);\n        button.classList.add('social-media-button');\n        mediaContainer.appendChild(button);\n\n    });\n    return mediaContainer;\n}\n\nfunction createFooterContainer(id) {\n    const footerContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)(id);\n    const buttonContent = ['Contact Us', 'Privacy', 'Accesability', 'Legal Terms'];\n\n    buttonContent.forEach(index => {\n        const button = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createButton)(`header-${index.toLowerCase()}`, index);\n        button.classList.add('footer-button');\n        footerContainer.appendChild(button);\n\n    });\n    return footerContainer;\n}\n\nfunction createFooter() {\n    const content = document.getElementById('content');\n    const mediaContainer = socialMediaContainer(`social-media-container`);\n    const footerMenuContainer = createFooterContainer(`footer-menu-container`);\n\n    mediaContainer.classList.add('social-media-container');\n    footerMenuContainer.classList.add('footer-menu-container');\n    content.appendChild(mediaContainer);\n    content.appendChild(footerMenuContainer);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/page-elements/footer.js?");

/***/ }),

/***/ "./src/pages/page-elements/header.js":
/*!*******************************************!*\
  !*** ./src/pages/page-elements/header.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/pages/page-elements/elements.js\");\n\n\nfunction createHeader() {\n    const content = document.getElementById('content');\n    const header = document.createElement('header');\n    const title = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createTitle)(2, 'header-title', 'Kiku el restorano');\n    const buttonContent = ['Home', 'About', 'Menu', 'Contacts'];\n\n    title.classList.add('header-title');\n    header.id = ('header');\n    content.appendChild(header);\n\n    buttonContent.forEach(index => {\n        const button = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createButton)(`header-${index.toLowerCase()}`, index);\n        button.classList.add('header-button');\n        header.appendChild(button);\n        if (index === 'About') {\n            header.appendChild(title)\n        }\n    });\n\n    header.classList.add('header');\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/page-elements/header.js?");

/***/ }),

/***/ "./src/pages/page-elements/home-page-section.js":
/*!******************************************************!*\
  !*** ./src/pages/page-elements/home-page-section.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/pages/page-elements/elements.js\");\n\n\nfunction createHome() {\n    const content = document.getElementById('content');\n\n    const homeContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('home-container');\n    homeContainer.classList.add('home-container');\n\n    const titleParagraphContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('t-p-container');\n    titleParagraphContainer.classList.add('t-p-container');\n\n    const title = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createTitle)(1, 'home-title', 'Welcome to Kiku el restorano')\n    title.classList.add('home-title');\n\n    const paragraph = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('home-para-1', 'Kiki & Gigi')\n    paragraph.classList.add('home-paragraph-1');\n\n    const paragraph2 = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createParagraph)('home-para-2', 'We love, we live, we cake.')\n    paragraph2.classList.add('home-paragraph-2');\n\n    const homeImage = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createImage)('home-image', '../src/utilities/img/home.png');\n    homeImage.classList.add('home-image');\n\n    content.appendChild(homeContainer);\n    homeContainer.appendChild(titleParagraphContainer);\n    titleParagraphContainer.appendChild(paragraph);\n    titleParagraphContainer.appendChild(title);\n    titleParagraphContainer.appendChild(paragraph2);\n    homeContainer.appendChild(homeImage);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/page-elements/home-page-section.js?");

/***/ }),

/***/ "./src/pages/page-elements/menu-card-section.js":
/*!******************************************************!*\
  !*** ./src/pages/page-elements/menu-card-section.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSection\": () => (/* binding */ createSection)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/pages/page-elements/elements.js\");\n\n\nconst cardFactory = (image, title, paragraph) => {\n    let idCounter = 1;\n    let newId = true;\n    const card = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)(idCounter);\n\n    const newImage = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createImage)(idCounter, image);\n    const newTitle = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createTitle)(idCounter, idCounter, title);\n    const newParagraph = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(idCounter, paragraph);\n\n    if (newId === true) {\n        idCounter += 1;\n    }\n\n    newImage.classList.add('card-image');\n    newTitle.classList.add('card-title');\n    card.classList.add('menu-items');\n    card.appendChild(newImage);\n    card.appendChild(newTitle);\n    card.appendChild(newParagraph);\n    return card;\n}\n\nfunction createSection() {\n    const content = document.getElementById('content');\n    const section = document.createElement('section');\n    const cake = cardFactory('../src/utilities/img/cake1.jpg', `Kiki's cake`, 'Chocolate cake flavored with melted chocolate.');\n    const cake1 = cardFactory('../src/utilities/img/cake5.jpg', `Kiki's cupcake`, 'Small and tasty snack cakes of various flavors.');\n    const cake2 = cardFactory('../src/utilities/img/cake6.jpg', `Kiki's pie`, 'A tasty dessert consisting of two chocolate layers.');\n    const cake3 = cardFactory('../src/utilities/img/cake2.jpg', 'Gibbery cake', 'Cream covered strawberry short cake.');\n    const cake4 = cardFactory('../src/utilities/img/cake3.jpg', `Gigu's famous pie`, 'Light pastry fruit cake filled with various jams.');\n    const cake5 = cardFactory('../src/utilities/img/cake4.jpg', `Gigu's ice-cream`, 'Sprinkle cone filled with ice-cream.');\n    const cake6 = cardFactory('../src/utilities/img/cake7.jpg', `Kiku's delight`, 'A special birthday cake filled with suprise flavors.');\n    const cake7 = cardFactory('../src/utilities/img/cake8.jpg', `Brother Cake`, 'Traditional cake topped with macarons.');\n    const cake8 = cardFactory('../src/utilities/img/cake9.jpg', 'Pink delight', 'A pink theme birthday ice-cream cake.');\n\n    content.appendChild(section);\n    section.appendChild(cake);\n    section.appendChild(cake1);\n    section.appendChild(cake2);\n    section.appendChild(cake3);\n    section.appendChild(cake4);\n    section.appendChild(cake5);\n    section.appendChild(cake6);\n    section.appendChild(cake7);\n    section.appendChild(cake8);\n    section.classList.add('menu-grid')\n\n\n}\n\n//# sourceURL=webpack://restaurant-page/./src/pages/page-elements/menu-card-section.js?");

/***/ }),

/***/ "./src/pages/page-elements/title-section.js":
/*!**************************************************!*\
  !*** ./src/pages/page-elements/title-section.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSection1\": () => (/* binding */ createSection1)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/pages/page-elements/elements.js\");\n\n\nfunction createSection1() {\n    const content = document.getElementById('content');\n    const section = document.createElement('section');\n    const image = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.createImage)('title-image', '../src/utilities/img/title-cat.png')\n    image.classList.add('image-title');\n    section.classList.add('snacks');\n\n    content.appendChild(section);\n    section.appendChild(image);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/pages/page-elements/title-section.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;