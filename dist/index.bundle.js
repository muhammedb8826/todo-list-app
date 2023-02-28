"use strict";
(self["webpackChunktodo_list_app"] = self["webpackChunktodo_list_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f6f6f6;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  text-transform: capitalize;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\n.main {\r\n  position: relative;\r\n  width: 50%;\r\n  padding: 3rem;\r\n  max-height: 75vh;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.main::-webkit-scrollbar {\r\n  width: 0.5em;\r\n}\r\n\r\n.main::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.main::-webkit-scrollbar-thumb {\r\n  background-color: #bababa;\r\n  outline: 0.01em solid #545862;\r\n}\r\n\r\n.worksTodo {\r\n  position: relative;\r\n  top: 0;\r\n  margin-bottom: 2rem;\r\n  background-color: #fff;\r\n  padding: 1.2rem;\r\n  border-radius: 2rem;\r\n  color: #545862;\r\n  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.3);\r\n  text-transform: none;\r\n}\r\n\r\n.container {\r\n  background-color: #fff;\r\n  color: #545862;\r\n  width: 100%;\r\n  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.3);\r\n}\r\n\r\n.demo {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: #ebebeb 2px solid;\r\n  padding: 1rem;\r\n  height: 3.5rem;\r\n}\r\n\r\n.demo .refresh-icon {\r\n  color: #bababa;\r\n  cursor: pointer;\r\n}\r\n\r\n.demo .refresh-icon:hover {\r\n  color: #545862;\r\n}\r\n\r\n.list-and-input-container .input-and-icon {\r\n  border-bottom: #ebebeb 2px solid;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 3.5rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.input-and-icon .icon {\r\n  color: #bababa;\r\n  rotate: 90deg;\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  width: 1rem;\r\n  height: 100%;\r\n  margin: 0.3rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.input-and-icon .icon:hover {\r\n  color: #545862;\r\n}\r\n\r\n.list-container .list {\r\n  position: relative;\r\n  list-style: none;\r\n  border-bottom: #ebebeb 2px solid;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 3.5rem;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.list-container .list.active {\r\n  background-color: rgba(255, 255, 0, 0.321);\r\n}\r\n\r\n.list-container .list .todo-status {\r\n  margin-left: 1rem;\r\n  width: 1.1rem;\r\n  height: 1.1rem;\r\n}\r\n\r\n.list-container .list .todo-content {\r\n  padding-inline: 1rem;\r\n  width: 100%;\r\n  background: none;\r\n  font-style: normal;\r\n}\r\n\r\n.list-container .list .todo-content.completed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.list-container .list .drag-icon {\r\n  margin-right: 0.5rem;\r\n  width: 2rem;\r\n  height: 100%;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #bababa;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.list-container .list .drag-icon:hover {\r\n  color: #545862;\r\n  cursor: move;\r\n}\r\n\r\n.list-container .list .trash-icon {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0.3rem;\r\n  height: 100%;\r\n  font-size: 1.2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 2rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #bababa;\r\n}\r\n\r\n.list-container .list .trash-icon:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  border: none;\r\n  font-style: italic;\r\n  color: #545862;\r\n  outline: none;\r\n  font-size: 0.9em;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: context-menu;\r\n}\r\n\r\n.clear-completed {\r\n  background-color: #f6f6f6;\r\n  padding: 1rem;\r\n  color: #bababa;\r\n  font-size: 1rem;\r\n  font-weight: 200;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.clear-completed:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .main {\r\n    width: 100%;\r\n    padding: 1rem;\r\n    max-height: 75vh;\r\n    overflow: hidden;\r\n    overflow-y: scroll;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;EAC1B,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,yBAAyB;EACzB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,mBAAmB;EACnB,cAAc;EACd,wCAAwC;EACxC,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,gCAAgC;EAChC,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,cAAc;EACd,aAAa;AACf;;AAEA;EACE,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gCAAgC;EAChC,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,oBAAoB;EACpB,WAAW;EACX,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,YAAY;EACZ,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,6BAA6B;EAC7B,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE;IACE,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;EACpB;AACF","sourcesContent":["*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f6f6f6;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  text-transform: capitalize;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\n.main {\r\n  position: relative;\r\n  width: 50%;\r\n  padding: 3rem;\r\n  max-height: 75vh;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.main::-webkit-scrollbar {\r\n  width: 0.5em;\r\n}\r\n\r\n.main::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.main::-webkit-scrollbar-thumb {\r\n  background-color: #bababa;\r\n  outline: 0.01em solid #545862;\r\n}\r\n\r\n.worksTodo {\r\n  position: relative;\r\n  top: 0;\r\n  margin-bottom: 2rem;\r\n  background-color: #fff;\r\n  padding: 1.2rem;\r\n  border-radius: 2rem;\r\n  color: #545862;\r\n  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.3);\r\n  text-transform: none;\r\n}\r\n\r\n.container {\r\n  background-color: #fff;\r\n  color: #545862;\r\n  width: 100%;\r\n  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.3);\r\n}\r\n\r\n.demo {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: #ebebeb 2px solid;\r\n  padding: 1rem;\r\n  height: 3.5rem;\r\n}\r\n\r\n.demo .refresh-icon {\r\n  color: #bababa;\r\n  cursor: pointer;\r\n}\r\n\r\n.demo .refresh-icon:hover {\r\n  color: #545862;\r\n}\r\n\r\n.list-and-input-container .input-and-icon {\r\n  border-bottom: #ebebeb 2px solid;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 3.5rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.input-and-icon .icon {\r\n  color: #bababa;\r\n  rotate: 90deg;\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  width: 1rem;\r\n  height: 100%;\r\n  margin: 0.3rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.input-and-icon .icon:hover {\r\n  color: #545862;\r\n}\r\n\r\n.list-container .list {\r\n  position: relative;\r\n  list-style: none;\r\n  border-bottom: #ebebeb 2px solid;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 3.5rem;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.list-container .list.active {\r\n  background-color: rgba(255, 255, 0, 0.321);\r\n}\r\n\r\n.list-container .list .todo-status {\r\n  margin-left: 1rem;\r\n  width: 1.1rem;\r\n  height: 1.1rem;\r\n}\r\n\r\n.list-container .list .todo-content {\r\n  padding-inline: 1rem;\r\n  width: 100%;\r\n  background: none;\r\n  font-style: normal;\r\n}\r\n\r\n.list-container .list .todo-content.completed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.list-container .list .drag-icon {\r\n  margin-right: 0.5rem;\r\n  width: 2rem;\r\n  height: 100%;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #bababa;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.list-container .list .drag-icon:hover {\r\n  color: #545862;\r\n  cursor: move;\r\n}\r\n\r\n.list-container .list .trash-icon {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0.3rem;\r\n  height: 100%;\r\n  font-size: 1.2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 2rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #bababa;\r\n}\r\n\r\n.list-container .list .trash-icon:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  border: none;\r\n  font-style: italic;\r\n  color: #545862;\r\n  outline: none;\r\n  font-size: 0.9em;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: context-menu;\r\n}\r\n\r\n.clear-completed {\r\n  background-color: #f6f6f6;\r\n  padding: 1rem;\r\n  color: #bababa;\r\n  font-size: 1rem;\r\n  font-weight: 200;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.clear-completed:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .main {\r\n    width: 100%;\r\n    padding: 1rem;\r\n    max-height: 75vh;\r\n    overflow: hidden;\r\n    overflow-y: scroll;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoApp)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_createData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createData.js */ "./src/modules/createData.js");
/* harmony import */ var _modules_readData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/readData.js */ "./src/modules/readData.js");
/* harmony import */ var _modules_saveToDb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/saveToDb.js */ "./src/modules/saveToDb.js");
/* harmony import */ var _modules_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/render.js */ "./src/modules/render.js");
/* harmony import */ var _modules_editData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/editData.js */ "./src/modules/editData.js");
/* harmony import */ var _modules_status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/status.js */ "./src/modules/status.js");








class TodoApp {
  constructor() {
    this.todoCollection = (0,_modules_readData_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.userInput = document.getElementById('todoInput');
    this.todoContainer = document.querySelector('.list-container');
    this.enterIcon = document.querySelector('.fa-arrow-turn-down');
    this.userInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.CreateData();
        (0,_modules_saveToDb_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.todoCollection);
        this.ShowData();
      }
    });

    this.enterIcon.addEventListener('click', () => {
      this.CreateData();
      (0,_modules_saveToDb_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.todoCollection);
      this.ShowData();
    });
  }

  removeData(item) {
    this.todoCollection = this.todoCollection.filter((todos, index) => item !== index);
    this.todoCollection = this.todoCollection.map((todo, index) => ({ ...todo, index: index + 1 }));
  }

  CreateData() {
    (0,_modules_createData_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.todoCollection);
  }

  ShowData() {
    this.todoContainer.innerHTML = this.todoCollection.map(
      (todo) => (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_4__["default"])(todo.description),
    ).join('');

    const trashIcon = document.querySelectorAll('.trash');
    trashIcon.forEach((todo, i) => todo.addEventListener('click', () => {
      this.removeData(i);
      (0,_modules_saveToDb_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.todoCollection);
      this.ShowData();
    }));

    (0,_modules_editData_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this.todoCollection);
    const clearCompletedBtn = document.querySelector('.clear-completed');
    clearCompletedBtn.addEventListener('click', () => {
      this.todoCollection = this.todoCollection.filter((task) => !task.completed);
      (0,_modules_saveToDb_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.todoCollection);
      this.ShowData();
    });

    (0,_modules_status_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this.todoCollection);
  }
}

window.onload = () => {
  const t = new TodoApp();
  t.ShowData();
};


/***/ }),

/***/ "./src/modules/createData.js":
/*!***********************************!*\
  !*** ./src/modules/createData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _saveToDb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveToDb.js */ "./src/modules/saveToDb.js");


const userInput = document.getElementById('todoInput');
const createData = (todoCollection) => {
  const todo = { description: userInput.value, completed: false, index: todoCollection.length + 1 };
  todoCollection.push(todo);
  userInput.value = '';
  userInput.focus();
  (0,_saveToDb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(todoCollection);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createData);


/***/ }),

/***/ "./src/modules/editData.js":
/*!*********************************!*\
  !*** ./src/modules/editData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _saveToDb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveToDb.js */ "./src/modules/saveToDb.js");


const refreshIcon = document.querySelector('.refresh-icon');
const editData = (dataArray) => {
  refreshIcon.addEventListener('click', () => {
    window.location.reload();
  });

  const todoLists = document.querySelectorAll('.list');
  const todoContent = document.querySelectorAll('.todo-content');
  const dragIcon = document.querySelectorAll('.drag-icon');
  const trashIcon = document.querySelectorAll('.trash-icon');

  todoContent.forEach((input, i) => input.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    todoLists[i].classList.add('active');
    todoLists[i].focus();
    trashIcon[i].style.display = 'flex';
    dragIcon[i].style.display = 'none';
    todoContent[i].focus();
  }));

  todoContent.forEach((todo, i) => todo.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      dataArray[i].description = todoContent[i].value;
      (0,_saveToDb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataArray);
      todoContent[i].blur();
      todoLists[i].classList.remove('active');
      trashIcon[i].style.display = 'none';
      dragIcon[i].style.display = 'block';
    }
  }));

  todoLists.forEach((trash, i) => trash.addEventListener('mouseleave', () => {
    todoContent[i].blur();
    todoLists[i].classList.remove('active');
    trashIcon[i].style.display = 'none';
    dragIcon[i].style.display = 'block';
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editData);

/***/ }),

/***/ "./src/modules/readData.js":
/*!*********************************!*\
  !*** ./src/modules/readData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dbName = 'todoList';
const readDataFromDb = () => {
  const storedData = localStorage.getItem(dbName);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (readDataFromDb);

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderData = (description) => `<li class="list">
        <input type="checkbox" class="todo-status"/>
        <input type="text" class="todo-content" value="${description}"/>
        <button class="drag-icon">
        <i class='drag fa fa-ellipsis-v'></i>
        </button>
        <button class="trash-icon">
        <i class='trash fa-solid fa-trash-can'></i>
        </button>
    </li>`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderData);


/***/ }),

/***/ "./src/modules/saveToDb.js":
/*!*********************************!*\
  !*** ./src/modules/saveToDb.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dbName = 'todoList';
const saveToLocalStorage = (todoCollection) => {
  localStorage.setItem(dbName, JSON.stringify(todoCollection));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveToLocalStorage);

/***/ }),

/***/ "./src/modules/status.js":
/*!*******************************!*\
  !*** ./src/modules/status.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _saveToDb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveToDb.js */ "./src/modules/saveToDb.js");


const notificationIcon = document.querySelector('.worksTodo');
const todoStatus = (todo) => {
  const checkStatusInput = document.querySelectorAll('.todo-status');
  const todoContent = document.querySelectorAll('.todo-content');
  const filterednotification = todo.filter((data) => !data.completed);
  notificationIcon.innerHTML = filterednotification.length ? `You have ${filterednotification.length} works todo` : '';

  for (let i = 0; i < todo.length; i += 1) {
    if (todo[i].completed) {
      checkStatusInput[i].checked = true;
      todoContent[i].classList.add('completed');
    }
    if (!todo[i].completed) {
      checkStatusInput[i].checked = false;
      todoContent[i].classList.remove('completed');
    }
  }

  for (let i = 0; i < todo.length; i += 1) {
    checkStatusInput[i].addEventListener('change', (e) => {
      if (e.target.checked) {
        todo[i].completed = true;
        checkStatusInput[i].checked = true;
        todoContent[i].classList.add('completed');
        const filterednotification = todo.filter((data) => !data.completed);
        notificationIcon.innerHTML = filterednotification.length ? `You have ${filterednotification.length} works todo` : '';
        (0,_saveToDb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(todo);
      }
      if (!e.target.checked) {
        todoContent[i].classList.remove('completed');
        todo[i].completed = false;
        checkStatusInput[i].checked = false;
        todoContent[i].classList.remove('completed');
        const filterednotification = todo.filter((data) => !data.completed);
        notificationIcon.innerHTML = filterednotification.length ? `You have ${filterednotification.length} works todo` : '';
        (0,_saveToDb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(todo);
      }
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoStatus);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLHNFQUFzRSxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLGNBQWMsZ0NBQWdDLG9CQUFvQiw4QkFBOEIsNkJBQTZCLDBCQUEwQix3QkFBd0IsaUNBQWlDLGdEQUFnRCwwQkFBMEIsS0FBSyxlQUFlLHlCQUF5QixpQkFBaUIsb0JBQW9CLHVCQUF1Qix1QkFBdUIseUJBQXlCLEtBQUssa0NBQWtDLG1CQUFtQixLQUFLLHdDQUF3QyxtREFBbUQsS0FBSyx3Q0FBd0MsZ0NBQWdDLG9DQUFvQyxLQUFLLG9CQUFvQix5QkFBeUIsYUFBYSwwQkFBMEIsNkJBQTZCLHNCQUFzQiwwQkFBMEIscUJBQXFCLCtDQUErQywyQkFBMkIsS0FBSyxvQkFBb0IsNkJBQTZCLHFCQUFxQixrQkFBa0IsK0NBQStDLEtBQUssZUFBZSxvQkFBb0IsMEJBQTBCLHFDQUFxQyx1Q0FBdUMsb0JBQW9CLHFCQUFxQixLQUFLLDZCQUE2QixxQkFBcUIsc0JBQXNCLEtBQUssbUNBQW1DLHFCQUFxQixLQUFLLG1EQUFtRCx1Q0FBdUMsb0JBQW9CLDBCQUEwQixxQ0FBcUMscUJBQXFCLG9CQUFvQixLQUFLLCtCQUErQixxQkFBcUIsb0JBQW9CLHlCQUF5QixzQkFBc0Isa0JBQWtCLG1CQUFtQixxQkFBcUIsc0JBQXNCLEtBQUsscUNBQXFDLHFCQUFxQixLQUFLLCtCQUErQix5QkFBeUIsdUJBQXVCLHVDQUF1QyxvQkFBb0IscUNBQXFDLDBCQUEwQixxQkFBcUIsd0JBQXdCLEtBQUssc0NBQXNDLGlEQUFpRCxLQUFLLDRDQUE0Qyx3QkFBd0Isb0JBQW9CLHFCQUFxQixLQUFLLDZDQUE2QywyQkFBMkIsa0JBQWtCLHVCQUF1Qix5QkFBeUIsS0FBSyx1REFBdUQsb0NBQW9DLEtBQUssMENBQTBDLDJCQUEyQixrQkFBa0IsbUJBQW1CLG9DQUFvQyxtQkFBbUIscUJBQXFCLHdCQUF3QixLQUFLLGdEQUFnRCxxQkFBcUIsbUJBQW1CLEtBQUssMkNBQTJDLG9CQUFvQix5QkFBeUIsYUFBYSxvQkFBb0IsbUJBQW1CLHdCQUF3QiwwQkFBMEIsOEJBQThCLGtCQUFrQixvQ0FBb0MsbUJBQW1CLHFCQUFxQixLQUFLLGlEQUFpRCxxQkFBcUIsc0JBQXNCLEtBQUssOEJBQThCLG1CQUFtQix5QkFBeUIscUJBQXFCLG9CQUFvQix1QkFBdUIsa0JBQWtCLG1CQUFtQiwyQkFBMkIsS0FBSywwQkFBMEIsZ0NBQWdDLG9CQUFvQixxQkFBcUIsc0JBQXNCLHVCQUF1QixrQkFBa0IsbUJBQW1CLEtBQUssZ0NBQWdDLHFCQUFxQixzQkFBc0IsS0FBSyxtQ0FBbUMsYUFBYSxvQkFBb0Isc0JBQXNCLHlCQUF5Qix5QkFBeUIsMkJBQTJCLE9BQU8sS0FBSyxXQUFXLGtGQUFrRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLHFEQUFxRCxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLGNBQWMsZ0NBQWdDLG9CQUFvQiw4QkFBOEIsNkJBQTZCLDBCQUEwQix3QkFBd0IsaUNBQWlDLGdEQUFnRCwwQkFBMEIsS0FBSyxlQUFlLHlCQUF5QixpQkFBaUIsb0JBQW9CLHVCQUF1Qix1QkFBdUIseUJBQXlCLEtBQUssa0NBQWtDLG1CQUFtQixLQUFLLHdDQUF3QyxtREFBbUQsS0FBSyx3Q0FBd0MsZ0NBQWdDLG9DQUFvQyxLQUFLLG9CQUFvQix5QkFBeUIsYUFBYSwwQkFBMEIsNkJBQTZCLHNCQUFzQiwwQkFBMEIscUJBQXFCLCtDQUErQywyQkFBMkIsS0FBSyxvQkFBb0IsNkJBQTZCLHFCQUFxQixrQkFBa0IsK0NBQStDLEtBQUssZUFBZSxvQkFBb0IsMEJBQTBCLHFDQUFxQyx1Q0FBdUMsb0JBQW9CLHFCQUFxQixLQUFLLDZCQUE2QixxQkFBcUIsc0JBQXNCLEtBQUssbUNBQW1DLHFCQUFxQixLQUFLLG1EQUFtRCx1Q0FBdUMsb0JBQW9CLDBCQUEwQixxQ0FBcUMscUJBQXFCLG9CQUFvQixLQUFLLCtCQUErQixxQkFBcUIsb0JBQW9CLHlCQUF5QixzQkFBc0Isa0JBQWtCLG1CQUFtQixxQkFBcUIsc0JBQXNCLEtBQUsscUNBQXFDLHFCQUFxQixLQUFLLCtCQUErQix5QkFBeUIsdUJBQXVCLHVDQUF1QyxvQkFBb0IscUNBQXFDLDBCQUEwQixxQkFBcUIsd0JBQXdCLEtBQUssc0NBQXNDLGlEQUFpRCxLQUFLLDRDQUE0Qyx3QkFBd0Isb0JBQW9CLHFCQUFxQixLQUFLLDZDQUE2QywyQkFBMkIsa0JBQWtCLHVCQUF1Qix5QkFBeUIsS0FBSyx1REFBdUQsb0NBQW9DLEtBQUssMENBQTBDLDJCQUEyQixrQkFBa0IsbUJBQW1CLG9DQUFvQyxtQkFBbUIscUJBQXFCLHdCQUF3QixLQUFLLGdEQUFnRCxxQkFBcUIsbUJBQW1CLEtBQUssMkNBQTJDLG9CQUFvQix5QkFBeUIsYUFBYSxvQkFBb0IsbUJBQW1CLHdCQUF3QiwwQkFBMEIsOEJBQThCLGtCQUFrQixvQ0FBb0MsbUJBQW1CLHFCQUFxQixLQUFLLGlEQUFpRCxxQkFBcUIsc0JBQXNCLEtBQUssOEJBQThCLG1CQUFtQix5QkFBeUIscUJBQXFCLG9CQUFvQix1QkFBdUIsa0JBQWtCLG1CQUFtQiwyQkFBMkIsS0FBSywwQkFBMEIsZ0NBQWdDLG9CQUFvQixxQkFBcUIsc0JBQXNCLHVCQUF1QixrQkFBa0IsbUJBQW1CLEtBQUssZ0NBQWdDLHFCQUFxQixzQkFBc0IsS0FBSyxtQ0FBbUMsYUFBYSxvQkFBb0Isc0JBQXNCLHlCQUF5Qix5QkFBeUIsMkJBQTJCLE9BQU8sS0FBSyx1QkFBdUI7QUFDL3lUO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQzRCO0FBQ0U7QUFDSTtBQUNWO0FBQ0E7QUFDQTs7QUFFOUI7QUFDZjtBQUNBLDBCQUEwQixnRUFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0VBQWtCO0FBQzFCO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxNQUFNLGdFQUFrQjtBQUN4QjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0Esc0VBQXNFLDJCQUEyQjtBQUNqRzs7QUFFQTtBQUNBLElBQUksa0VBQVU7QUFDZDs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLDhEQUFVO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0VBQWtCO0FBQ3hCO0FBQ0EsS0FBSzs7QUFFTCxJQUFJLGdFQUFRO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsTUFBTSxnRUFBa0I7QUFDeEI7QUFDQSxLQUFLOztBQUVMLElBQUksOERBQVU7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEUrQzs7QUFFL0M7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFrQjtBQUNwQjs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYcUI7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBTSx3REFBa0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDeEN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUNSN0I7QUFDQTtBQUNBLHlEQUF5RCxZQUFZO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDWDFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7O0FDTGM7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsNkJBQTZCOztBQUV0RyxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSw2QkFBNkI7QUFDNUcsUUFBUSx3REFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsNkJBQTZCO0FBQzVHLFFBQVEsd0RBQWtCO0FBQzFCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvY3JlYXRlRGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvZWRpdERhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3JlYWREYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3NhdmVUb0RiLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9zdGF0dXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbjo6YWZ0ZXIsXFxyXFxuOjpiZWZvcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxuICBtYXgtaGVpZ2h0OiA3NXZoO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTtcXHJcXG4gIG91dGxpbmU6IDAuMDFlbSBzb2xpZCAjNTQ1ODYyO1xcclxcbn1cXHJcXG5cXHJcXG4ud29ya3NUb2RvIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMS4ycmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2IoMCwgMCwgMCwgMC4zKTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2IoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbW8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItYm90dG9tOiAjZWJlYmViIDJweCBzb2xpZDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDMuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbW8gLnJlZnJlc2gtaWNvbiB7XFxyXFxuICBjb2xvcjogI2JhYmFiYTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbW8gLnJlZnJlc2gtaWNvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtYW5kLWlucHV0LWNvbnRhaW5lciAuaW5wdXQtYW5kLWljb24ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogI2ViZWJlYiAycHggc29saWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogMy41cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWFuZC1pY29uIC5pY29uIHtcXHJcXG4gIGNvbG9yOiAjYmFiYWJhO1xcclxcbiAgcm90YXRlOiA5MGRlZztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwLjNyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1hbmQtaWNvbiAuaWNvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAjZWJlYmViIDJweCBzb2xpZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAzLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0LmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjMyMSk7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAudG9kby1zdGF0dXMge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICB3aWR0aDogMS4xcmVtO1xcclxcbiAgaGVpZ2h0OiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAudG9kby1jb250ZW50IHtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLnRvZG8tY29udGVudC5jb21wbGV0ZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAuZHJhZy1pY29uIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjYmFiYWJhO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAuZHJhZy1pY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLnRyYXNoLWljb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwLjNyZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogI2JhYmFiYTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC50cmFzaC1pY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAwLjllbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1jb21wbGV0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBjb2xvcjogI2JhYmFiYTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWNvbXBsZXRlZDpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA3NXZoO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHlDQUF5QztFQUN6QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsd0NBQXdDO0VBQ3hDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsV0FBVztFQUNYLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxyXFxuOjphZnRlcixcXHJcXG46OmJlZm9yZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG4gIG1heC1oZWlnaHQ6IDc1dmg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5tYWluOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhO1xcclxcbiAgb3V0bGluZTogMC4wMWVtIHNvbGlkICM1NDU4NjI7XFxyXFxufVxcclxcblxcclxcbi53b3Jrc1RvZG8ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAxLjJyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYigwLCAwLCAwLCAwLjMpO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYigwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVtbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1ib3R0b206ICNlYmViZWIgMnB4IHNvbGlkO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGhlaWdodDogMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVtbyAucmVmcmVzaC1pY29uIHtcXHJcXG4gIGNvbG9yOiAjYmFiYWJhO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVtbyAucmVmcmVzaC1pY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1hbmQtaW5wdXQtY29udGFpbmVyIC5pbnB1dC1hbmQtaWNvbiB7XFxyXFxuICBib3JkZXItYm90dG9tOiAjZWJlYmViIDJweCBzb2xpZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiAzLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtYW5kLWljb24gLmljb24ge1xcclxcbiAgY29sb3I6ICNiYWJhYmE7XFxyXFxuICByb3RhdGU6IDkwZGVnO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW46IDAuM3JlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWFuZC1pY29uIC5pY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3Qge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206ICNlYmViZWIgMnB4IHNvbGlkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDMuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QuYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMzIxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC50b2RvLXN0YXR1cyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gIHdpZHRoOiAxLjFyZW07XFxyXFxuICBoZWlnaHQ6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC50b2RvLWNvbnRlbnQge1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAudG9kby1jb250ZW50LmNvbXBsZXRlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC5kcmFnLWljb24ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNiYWJhYmE7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC5kcmFnLWljb246aG92ZXIge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAudHJhc2gtaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDAuM3JlbTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjYmFiYWJhO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLnRyYXNoLWljb246aG92ZXIge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDAuOWVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjdXJzb3I6IGNvbnRleHQtbWVudTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWNvbXBsZXRlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGNvbG9yOiAjYmFiYWJhO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItY29tcGxldGVkOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIG1heC1oZWlnaHQ6IDc1dmg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgY3JlYXRlRGF0YSBmcm9tICcuL21vZHVsZXMvY3JlYXRlRGF0YS5qcyc7XG5pbXBvcnQgcmVhZERhdGFGcm9tRGIgZnJvbSAnLi9tb2R1bGVzL3JlYWREYXRhLmpzJztcbmltcG9ydCBzYXZlVG9Mb2NhbFN0b3JhZ2UgZnJvbSAnLi9tb2R1bGVzL3NhdmVUb0RiLmpzJztcbmltcG9ydCByZW5kZXJEYXRhIGZyb20gJy4vbW9kdWxlcy9yZW5kZXIuanMnO1xuaW1wb3J0IGVkaXREYXRhIGZyb20gJy4vbW9kdWxlcy9lZGl0RGF0YS5qcyc7XG5pbXBvcnQgdG9kb1N0YXR1cyBmcm9tICcuL21vZHVsZXMvc3RhdHVzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0FwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG9kb0NvbGxlY3Rpb24gPSByZWFkRGF0YUZyb21EYigpO1xuICAgIHRoaXMudXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9JbnB1dCcpO1xuICAgIHRoaXMudG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWNvbnRhaW5lcicpO1xuICAgIHRoaXMuZW50ZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhLWFycm93LXR1cm4tZG93bicpO1xuICAgIHRoaXMudXNlcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuQ3JlYXRlRGF0YSgpO1xuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UodGhpcy50b2RvQ29sbGVjdGlvbik7XG4gICAgICAgIHRoaXMuU2hvd0RhdGEoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuZW50ZXJJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5DcmVhdGVEYXRhKCk7XG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UodGhpcy50b2RvQ29sbGVjdGlvbik7XG4gICAgICB0aGlzLlNob3dEYXRhKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVEYXRhKGl0ZW0pIHtcbiAgICB0aGlzLnRvZG9Db2xsZWN0aW9uID0gdGhpcy50b2RvQ29sbGVjdGlvbi5maWx0ZXIoKHRvZG9zLCBpbmRleCkgPT4gaXRlbSAhPT0gaW5kZXgpO1xuICAgIHRoaXMudG9kb0NvbGxlY3Rpb24gPSB0aGlzLnRvZG9Db2xsZWN0aW9uLm1hcCgodG9kbywgaW5kZXgpID0+ICh7IC4uLnRvZG8sIGluZGV4OiBpbmRleCArIDEgfSkpO1xuICB9XG5cbiAgQ3JlYXRlRGF0YSgpIHtcbiAgICBjcmVhdGVEYXRhKHRoaXMudG9kb0NvbGxlY3Rpb24pO1xuICB9XG5cbiAgU2hvd0RhdGEoKSB7XG4gICAgdGhpcy50b2RvQ29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMudG9kb0NvbGxlY3Rpb24ubWFwKFxuICAgICAgKHRvZG8pID0+IHJlbmRlckRhdGEodG9kby5kZXNjcmlwdGlvbiksXG4gICAgKS5qb2luKCcnKTtcblxuICAgIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFzaCcpO1xuICAgIHRyYXNoSWNvbi5mb3JFYWNoKCh0b2RvLCBpKSA9PiB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy5yZW1vdmVEYXRhKGkpO1xuICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHRoaXMudG9kb0NvbGxlY3Rpb24pO1xuICAgICAgdGhpcy5TaG93RGF0YSgpO1xuICAgIH0pKTtcblxuICAgIGVkaXREYXRhKHRoaXMudG9kb0NvbGxlY3Rpb24pO1xuICAgIGNvbnN0IGNsZWFyQ29tcGxldGVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWNvbXBsZXRlZCcpO1xuICAgIGNsZWFyQ29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy50b2RvQ29sbGVjdGlvbiA9IHRoaXMudG9kb0NvbGxlY3Rpb24uZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpO1xuICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHRoaXMudG9kb0NvbGxlY3Rpb24pO1xuICAgICAgdGhpcy5TaG93RGF0YSgpO1xuICAgIH0pO1xuXG4gICAgdG9kb1N0YXR1cyh0aGlzLnRvZG9Db2xsZWN0aW9uKTtcbiAgfVxufVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCB0ID0gbmV3IFRvZG9BcHAoKTtcbiAgdC5TaG93RGF0YSgpO1xufTtcbiIsImltcG9ydCBzYXZlVG9Mb2NhbFN0b3JhZ2UgZnJvbSAnLi9zYXZlVG9EYi5qcyc7XG5cbmNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvSW5wdXQnKTtcbmNvbnN0IGNyZWF0ZURhdGEgPSAodG9kb0NvbGxlY3Rpb24pID0+IHtcbiAgY29uc3QgdG9kbyA9IHsgZGVzY3JpcHRpb246IHVzZXJJbnB1dC52YWx1ZSwgY29tcGxldGVkOiBmYWxzZSwgaW5kZXg6IHRvZG9Db2xsZWN0aW9uLmxlbmd0aCArIDEgfTtcbiAgdG9kb0NvbGxlY3Rpb24ucHVzaCh0b2RvKTtcbiAgdXNlcklucHV0LnZhbHVlID0gJyc7XG4gIHVzZXJJbnB1dC5mb2N1cygpO1xuICBzYXZlVG9Mb2NhbFN0b3JhZ2UodG9kb0NvbGxlY3Rpb24pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRGF0YTtcbiIsImltcG9ydCBzYXZlVG9Mb2NhbFN0b3JhZ2UgZnJvbSAnLi9zYXZlVG9EYi5qcyc7XG5cbmNvbnN0IHJlZnJlc2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZnJlc2gtaWNvbicpO1xuY29uc3QgZWRpdERhdGEgPSAoZGF0YUFycmF5KSA9PiB7XG4gIHJlZnJlc2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG5cbiAgY29uc3QgdG9kb0xpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QnKTtcbiAgY29uc3QgdG9kb0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1jb250ZW50Jyk7XG4gIGNvbnN0IGRyYWdJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyYWctaWNvbicpO1xuICBjb25zdCB0cmFzaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhc2gtaWNvbicpO1xuXG4gIHRvZG9Db250ZW50LmZvckVhY2goKGlucHV0LCBpKSA9PiBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB0b2RvTGlzdHNbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgdG9kb0xpc3RzW2ldLmZvY3VzKCk7XG4gICAgdHJhc2hJY29uW2ldLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZHJhZ0ljb25baV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0b2RvQ29udGVudFtpXS5mb2N1cygpO1xuICB9KSk7XG5cbiAgdG9kb0NvbnRlbnQuZm9yRWFjaCgodG9kbywgaSkgPT4gdG9kby5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBkYXRhQXJyYXlbaV0uZGVzY3JpcHRpb24gPSB0b2RvQ29udGVudFtpXS52YWx1ZTtcbiAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZShkYXRhQXJyYXkpO1xuICAgICAgdG9kb0NvbnRlbnRbaV0uYmx1cigpO1xuICAgICAgdG9kb0xpc3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgdHJhc2hJY29uW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBkcmFnSWNvbltpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH0pKTtcblxuICB0b2RvTGlzdHMuZm9yRWFjaCgodHJhc2gsIGkpID0+IHRyYXNoLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgdG9kb0NvbnRlbnRbaV0uYmx1cigpO1xuICAgIHRvZG9MaXN0c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB0cmFzaEljb25baV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkcmFnSWNvbltpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGVkaXREYXRhOyIsImNvbnN0IGRiTmFtZSA9ICd0b2RvTGlzdCc7XG5jb25zdCByZWFkRGF0YUZyb21EYiA9ICgpID0+IHtcbiAgY29uc3Qgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGRiTmFtZSk7XG4gIGlmIChzdG9yZWREYXRhKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RvcmVkRGF0YSk7XG4gIH1cbiAgcmV0dXJuIFtdO1xufTtcbmV4cG9ydCBkZWZhdWx0IHJlYWREYXRhRnJvbURiOyIsImNvbnN0IHJlbmRlckRhdGEgPSAoZGVzY3JpcHRpb24pID0+IGA8bGkgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRvZG8tc3RhdHVzXCIvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInRvZG8tY29udGVudFwiIHZhbHVlPVwiJHtkZXNjcmlwdGlvbn1cIi8+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJkcmFnLWljb25cIj5cbiAgICAgICAgPGkgY2xhc3M9J2RyYWcgZmEgZmEtZWxsaXBzaXMtdic+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInRyYXNoLWljb25cIj5cbiAgICAgICAgPGkgY2xhc3M9J3RyYXNoIGZhLXNvbGlkIGZhLXRyYXNoLWNhbic+PC9pPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L2xpPmA7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckRhdGE7XG4iLCJjb25zdCBkYk5hbWUgPSAndG9kb0xpc3QnO1xuY29uc3Qgc2F2ZVRvTG9jYWxTdG9yYWdlID0gKHRvZG9Db2xsZWN0aW9uKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRiTmFtZSwgSlNPTi5zdHJpbmdpZnkodG9kb0NvbGxlY3Rpb24pKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNhdmVUb0xvY2FsU3RvcmFnZTsiLCJpbXBvcnQgc2F2ZVRvTG9jYWxTdG9yYWdlIGZyb20gJy4vc2F2ZVRvRGIuanMnO1xuXG5jb25zdCBub3RpZmljYXRpb25JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmtzVG9kbycpO1xuY29uc3QgdG9kb1N0YXR1cyA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IGNoZWNrU3RhdHVzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1zdGF0dXMnKTtcbiAgY29uc3QgdG9kb0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1jb250ZW50Jyk7XG4gIGNvbnN0IGZpbHRlcmVkbm90aWZpY2F0aW9uID0gdG9kby5maWx0ZXIoKGRhdGEpID0+ICFkYXRhLmNvbXBsZXRlZCk7XG4gIG5vdGlmaWNhdGlvbkljb24uaW5uZXJIVE1MID0gZmlsdGVyZWRub3RpZmljYXRpb24ubGVuZ3RoID8gYFlvdSBoYXZlICR7ZmlsdGVyZWRub3RpZmljYXRpb24ubGVuZ3RofSB3b3JrcyB0b2RvYCA6ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kby5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0b2RvW2ldLmNvbXBsZXRlZCkge1xuICAgICAgY2hlY2tTdGF0dXNJbnB1dFtpXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHRvZG9Db250ZW50W2ldLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgIH1cbiAgICBpZiAoIXRvZG9baV0uY29tcGxldGVkKSB7XG4gICAgICBjaGVja1N0YXR1c0lucHV0W2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRvZG9Db250ZW50W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kby5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNoZWNrU3RhdHVzSW5wdXRbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIHRvZG9baV0uY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgY2hlY2tTdGF0dXNJbnB1dFtpXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdG9kb0NvbnRlbnRbaV0uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkbm90aWZpY2F0aW9uID0gdG9kby5maWx0ZXIoKGRhdGEpID0+ICFkYXRhLmNvbXBsZXRlZCk7XG4gICAgICAgIG5vdGlmaWNhdGlvbkljb24uaW5uZXJIVE1MID0gZmlsdGVyZWRub3RpZmljYXRpb24ubGVuZ3RoID8gYFlvdSBoYXZlICR7ZmlsdGVyZWRub3RpZmljYXRpb24ubGVuZ3RofSB3b3JrcyB0b2RvYCA6ICcnO1xuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UodG9kbyk7XG4gICAgICB9XG4gICAgICBpZiAoIWUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgdG9kb0NvbnRlbnRbaV0uY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XG4gICAgICAgIHRvZG9baV0uY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrU3RhdHVzSW5wdXRbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0b2RvQ29udGVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRub3RpZmljYXRpb24gPSB0b2RvLmZpbHRlcigoZGF0YSkgPT4gIWRhdGEuY29tcGxldGVkKTtcbiAgICAgICAgbm90aWZpY2F0aW9uSWNvbi5pbm5lckhUTUwgPSBmaWx0ZXJlZG5vdGlmaWNhdGlvbi5sZW5ndGggPyBgWW91IGhhdmUgJHtmaWx0ZXJlZG5vdGlmaWNhdGlvbi5sZW5ndGh9IHdvcmtzIHRvZG9gIDogJyc7XG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSh0b2RvKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb1N0YXR1czsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=