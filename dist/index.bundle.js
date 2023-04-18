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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f6f6f6;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  text-transform: capitalize;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\n.main {\r\n  position: relative;\r\n  width: 50%;\r\n  padding: 3rem;\r\n  max-height: 75vh;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.main::-webkit-scrollbar {\r\n  width: 0.5em;\r\n}\r\n\r\n.main::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.main::-webkit-scrollbar-thumb {\r\n  background-color: #bababa;\r\n  outline: 0.01em solid #545862;\r\n}\r\n\r\n.container {\r\n  background-color: #fff;\r\n  color: #545862;\r\n  width: 100%;\r\n  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.3);\r\n}\r\n\r\n.demo {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: #ebebeb 2px solid;\r\n  padding: 1rem;\r\n  height: 3.5rem;\r\n}\r\n\r\n.demo .refresh-icon {\r\n  position: relative;\r\n  color: #bababa;\r\n  cursor: pointer;\r\n}\r\n\r\n.demo .refresh-icon:hover {\r\n  color: #545862;\r\n}\r\n\r\n.demo .refresh-icon .badge {\r\n  position: absolute;\r\n  width: 0.9rem;\r\n  height: 0.9rem;\r\n  border-radius: 50%;\r\n  background-color: red;\r\n  color: #fff;\r\n  font-size: 0.8rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  top: -0.5rem;\r\n  left: 0.4rem;\r\n}\r\n\r\n.list-and-input-container .input-and-icon {\r\n  border-bottom: #ebebeb 2px solid;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 3.5rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.input-and-icon .icon {\r\n  color: #bababa;\r\n  rotate: 90deg;\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  width: 1rem;\r\n  height: 100%;\r\n  margin: 0.3rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.input-and-icon .icon:hover {\r\n  color: #545862;\r\n}\r\n\r\n.list-container .list {\r\n  position: relative;\r\n  list-style: none;\r\n  border-bottom: #ebebeb 2px solid;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 3.5rem;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.list-container .list.active {\r\n  background-color: rgba(255, 255, 0, 0.321);\r\n}\r\n\r\n.list-container .list .todo-status {\r\n  margin-left: 1rem;\r\n  width: 1.1rem;\r\n  height: 1.1rem;\r\n}\r\n\r\n.list-container .list .todo-content {\r\n  padding-inline: 1rem;\r\n  width: 100%;\r\n  background: none;\r\n  font-style: normal;\r\n}\r\n\r\n.list-container .list .todo-content.completed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.list-container .list .drag-icon {\r\n  margin-right: 0.5rem;\r\n  width: 2rem;\r\n  height: 100%;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #bababa;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.list-container .list .drag-icon:hover {\r\n  color: #545862;\r\n  cursor: move;\r\n}\r\n\r\n.list-container .list .trash-icon {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0.3rem;\r\n  height: 100%;\r\n  font-size: 1.2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 2rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #bababa;\r\n}\r\n\r\n.list-container .list .trash-icon:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  border: none;\r\n  font-style: italic;\r\n  color: #545862;\r\n  outline: none;\r\n  font-size: 0.9em;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: context-menu;\r\n}\r\n\r\n.clear-completed {\r\n  background-color: #f6f6f6;\r\n  padding: 1rem;\r\n  color: #bababa;\r\n  font-size: 1rem;\r\n  font-weight: 200;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.clear-completed:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .main {\r\n    width: 100%;\r\n    padding: 1rem;\r\n    max-height: 75vh;\r\n    overflow: hidden;\r\n    overflow-y: scroll;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;EAC1B,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,yBAAyB;EACzB,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,gCAAgC;EAChC,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,cAAc;EACd,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,cAAc;EACd,aAAa;AACf;;AAEA;EACE,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,YAAY;EACZ,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gCAAgC;EAChC,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,oBAAoB;EACpB,WAAW;EACX,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,YAAY;EACZ,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,6BAA6B;EAC7B,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE;IACE,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;EACpB;AACF","sourcesContent":["*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f6f6f6;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  text-transform: capitalize;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\n.main {\r\n  position: relative;\r\n  width: 50%;\r\n  padding: 3rem;\r\n  max-height: 75vh;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.main::-webkit-scrollbar {\r\n  width: 0.5em;\r\n}\r\n\r\n.main::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.main::-webkit-scrollbar-thumb {\r\n  background-color: #bababa;\r\n  outline: 0.01em solid #545862;\r\n}\r\n\r\n.container {\r\n  background-color: #fff;\r\n  color: #545862;\r\n  width: 100%;\r\n  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.3);\r\n}\r\n\r\n.demo {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: #ebebeb 2px solid;\r\n  padding: 1rem;\r\n  height: 3.5rem;\r\n}\r\n\r\n.demo .refresh-icon {\r\n  position: relative;\r\n  color: #bababa;\r\n  cursor: pointer;\r\n}\r\n\r\n.demo .refresh-icon:hover {\r\n  color: #545862;\r\n}\r\n\r\n.demo .refresh-icon .badge {\r\n  position: absolute;\r\n  width: 0.9rem;\r\n  height: 0.9rem;\r\n  border-radius: 50%;\r\n  background-color: red;\r\n  color: #fff;\r\n  font-size: 0.8rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  top: -0.5rem;\r\n  left: 0.4rem;\r\n}\r\n\r\n.list-and-input-container .input-and-icon {\r\n  border-bottom: #ebebeb 2px solid;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 3.5rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.input-and-icon .icon {\r\n  color: #bababa;\r\n  rotate: 90deg;\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  width: 1rem;\r\n  height: 100%;\r\n  margin: 0.3rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.input-and-icon .icon:hover {\r\n  color: #545862;\r\n}\r\n\r\n.list-container .list {\r\n  position: relative;\r\n  list-style: none;\r\n  border-bottom: #ebebeb 2px solid;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 3.5rem;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.list-container .list.active {\r\n  background-color: rgba(255, 255, 0, 0.321);\r\n}\r\n\r\n.list-container .list .todo-status {\r\n  margin-left: 1rem;\r\n  width: 1.1rem;\r\n  height: 1.1rem;\r\n}\r\n\r\n.list-container .list .todo-content {\r\n  padding-inline: 1rem;\r\n  width: 100%;\r\n  background: none;\r\n  font-style: normal;\r\n}\r\n\r\n.list-container .list .todo-content.completed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.list-container .list .drag-icon {\r\n  margin-right: 0.5rem;\r\n  width: 2rem;\r\n  height: 100%;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #bababa;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.list-container .list .drag-icon:hover {\r\n  color: #545862;\r\n  cursor: move;\r\n}\r\n\r\n.list-container .list .trash-icon {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0.3rem;\r\n  height: 100%;\r\n  font-size: 1.2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 2rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #bababa;\r\n}\r\n\r\n.list-container .list .trash-icon:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  border: none;\r\n  font-style: italic;\r\n  color: #545862;\r\n  outline: none;\r\n  font-size: 0.9em;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: context-menu;\r\n}\r\n\r\n.clear-completed {\r\n  background-color: #f6f6f6;\r\n  padding: 1rem;\r\n  color: #bababa;\r\n  font-size: 1rem;\r\n  font-weight: 200;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.clear-completed:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .main {\r\n    width: 100%;\r\n    padding: 1rem;\r\n    max-height: 75vh;\r\n    overflow: hidden;\r\n    overflow-y: scroll;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _modules_removeData_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/removeData.js */ "./src/modules/removeData.js");
/* harmony import */ var _modules_clearCompleted_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/clearCompleted.js */ "./src/modules/clearCompleted.js");










class TodoApp {
  constructor() {
    this.todoCollection = (0,_modules_readData_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.clearCompletedBtn = document.querySelector('.clear-completed');
    this.userInput = document.getElementById('todoInput');
    this.enterIcon = document.querySelector('.fa-arrow-turn-down');
    this.refreshIcon = document.querySelector('.refresh-icon');
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

    this.refreshIcon.addEventListener('click', () => {
      window.location.reload();
    });
  }

  CreateData() {
    (0,_modules_createData_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.todoCollection);
  }

  ShowData() {
    (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this.todoCollection);
    const trashIcon = document.querySelectorAll('.trash');
    trashIcon.forEach((todo, i) => todo.addEventListener('click', () => {
      const newTodo = (0,_modules_removeData_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this.todoCollection, i);
      this.todoCollection = newTodo;
      this.ShowData();
    }));

    const clearCompletedBtn = document.querySelector('.clear-completed');
    clearCompletedBtn.addEventListener('click', () => {
      const newTodo = (0,_modules_clearCompleted_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this.todoCollection);
      this.todoCollection = newTodo;
      this.ShowData();
    });

    (0,_modules_editData_js__WEBPACK_IMPORTED_MODULE_5__["default"])(this.todoCollection);
    (0,_modules_status_js__WEBPACK_IMPORTED_MODULE_6__["default"])(this.todoCollection);
  }
}

window.onload = () => {
  const t = new TodoApp();
  t.ShowData();
};


/***/ }),

/***/ "./src/modules/clearCompleted.js":
/*!***************************************!*\
  !*** ./src/modules/clearCompleted.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _saveToDb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveToDb.js */ "./src/modules/saveToDb.js");


const clearCompleted = (todoCollection) => {
  const filteredData = todoCollection.filter((task) => !task.completed);
  (0,_saveToDb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(filteredData);
  return filteredData;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearCompleted);

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


const createData = (todoCollection) => {
  const userInput = document.getElementById('todoInput');
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


const editData = (dataArray) => {
  const todoLists = document.querySelectorAll('.list');
  const todoContent = document.querySelectorAll('.todo-content');
  const dragIcon = document.querySelectorAll('.drag-icon');
  const trashIcon = document.querySelectorAll('.trash-icon');

  todoContent.forEach((input, item) => input.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    dataArray[item].description = todoContent[item].value;
    (0,_saveToDb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataArray);
    todoLists[item].classList.add('active');
    trashIcon[item].style.display = 'flex';
    dragIcon[item].style.display = 'none';
    todoContent[item].focus();
    todoContent[item].style.cursor = 'text';
    for (let i = 0; i < todoLists.length; i += 1) {
      if (item !== i) {
        todoLists[i].classList.remove('active');
        trashIcon[i].style.display = 'none';
        dragIcon[i].style.display = 'block';
        todoContent[i].style.cursor = 'context-menu';
      }
    }
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
  todoContent.forEach((todo, i) => todo.addEventListener('focusout', () => {
    dataArray[i].description = todoContent[i].value;
    (0,_saveToDb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dataArray);
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
const readDataFromDb = () => {
  const dbName = 'todoList';
  const storedData = localStorage.getItem(dbName);
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (readDataFromDb);

/***/ }),

/***/ "./src/modules/removeData.js":
/*!***********************************!*\
  !*** ./src/modules/removeData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _saveToDb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveToDb.js */ "./src/modules/saveToDb.js");


const removeData = (todoCollection, item) => {
  const filteredData = todoCollection.filter((todo, index) => item !== index);
  const todos = filteredData.map((todo, index) => ({ ...todo, index: index + 1 }));
  (0,_saveToDb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(todos);
  return todos;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeData);


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
const renderData = (todoCollection) => {
  const todoContainer = document.querySelector('.list-container');
  todoContainer.innerHTML = todoCollection.map(
    (todo) => `<li class="list">
        <input type="checkbox" class="todo-status"/>
        <input type="text" class="todo-content" value="${todo.description}"/>
        <button class="drag-icon">
        <i class='drag fa fa-ellipsis-v'></i>
        </button>
        <button class="trash-icon">
        <i class='trash fa-solid fa-trash-can'></i>
        </button>
    </li>`,
  ).join('');
};
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
const saveToLocalStorage = (todoCollection) => {
  const dbName = 'todoList';
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


const todoStatus = (todo) => {
  const notificationIcon = document.querySelector('.badge');
  const checkStatusInput = document.querySelectorAll('.todo-status');
  const todoContent = document.querySelectorAll('.todo-content');
  const filterednotification = todo.filter((data) => !data.completed);
  notificationIcon.innerHTML = filterednotification.length;

  for (let i = 0; i < todo.length; i += 1) {
    if (todo[i].completed) {
      checkStatusInput[i].checked = true;
      todoContent[i].classList.add('completed');
    }

    checkStatusInput[i].checked = false;
    todoContent[i].classList.remove('completed');
  }

  for (let i = 0; i < todo.length; i += 1) {
    checkStatusInput[i].addEventListener('change', (e) => {
      if (e.target.checked) {
        todo[i].completed = true;
        checkStatusInput[i].checked = true;
        todoContent[i].classList.add('completed');
        const filterednotification = todo.filter((data) => !data.completed);
        notificationIcon.innerHTML = filterednotification.length;
        (0,_saveToDb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(todo);
      }
      if (!e.target.checked) {
        todoContent[i].classList.remove('completed');
        todo[i].completed = false;
        checkStatusInput[i].checked = false;
        todoContent[i].classList.remove('completed');
        const filterednotification = todo.filter((data) => !data.completed);
        notificationIcon.innerHTML = filterednotification.length;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSx3REFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQWtCO0FBQzFCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvY2xlYXJDb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2NyZWF0ZURhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2VkaXREYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9yZWFkRGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcmVtb3ZlRGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9zYXZlVG9EYi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvc3RhdHVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG46OmFmdGVyLFxcclxcbjo6YmVmb3JlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgbWF4LWhlaWdodDogNzV2aDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5tYWluOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICB3aWR0aDogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5tYWluOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWJhYmE7XFxyXFxuICBvdXRsaW5lOiAwLjAxZW0gc29saWQgIzU0NTg2MjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5kZW1vIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogI2ViZWJlYiAycHggc29saWQ7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAzLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kZW1vIC5yZWZyZXNoLWljb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgY29sb3I6ICNiYWJhYmE7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZW1vIC5yZWZyZXNoLWljb246aG92ZXIge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxufVxcclxcblxcclxcbi5kZW1vIC5yZWZyZXNoLWljb24gLmJhZGdlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAwLjlyZW07XFxyXFxuICBoZWlnaHQ6IDAuOXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdG9wOiAtMC41cmVtO1xcclxcbiAgbGVmdDogMC40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1hbmQtaW5wdXQtY29udGFpbmVyIC5pbnB1dC1hbmQtaWNvbiB7XFxyXFxuICBib3JkZXItYm90dG9tOiAjZWJlYmViIDJweCBzb2xpZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiAzLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtYW5kLWljb24gLmljb24ge1xcclxcbiAgY29sb3I6ICNiYWJhYmE7XFxyXFxuICByb3RhdGU6IDkwZGVnO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW46IDAuM3JlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWFuZC1pY29uIC5pY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3Qge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206ICNlYmViZWIgMnB4IHNvbGlkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDMuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QuYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMzIxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC50b2RvLXN0YXR1cyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gIHdpZHRoOiAxLjFyZW07XFxyXFxuICBoZWlnaHQ6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC50b2RvLWNvbnRlbnQge1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAudG9kby1jb250ZW50LmNvbXBsZXRlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC5kcmFnLWljb24ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNiYWJhYmE7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC5kcmFnLWljb246aG92ZXIge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAudHJhc2gtaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDAuM3JlbTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjYmFiYWJhO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLnRyYXNoLWljb246aG92ZXIge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDAuOWVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjdXJzb3I6IGNvbnRleHQtbWVudTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWNvbXBsZXRlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGNvbG9yOiAjYmFiYWJhO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItY29tcGxldGVkOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIG1heC1oZWlnaHQ6IDc1dmg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIseUNBQXlDO0VBQ3pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsV0FBVztFQUNYLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxyXFxuOjphZnRlcixcXHJcXG46OmJlZm9yZSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG4gIG1heC1oZWlnaHQ6IDc1dmg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5tYWluOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhO1xcclxcbiAgb3V0bGluZTogMC4wMWVtIHNvbGlkICM1NDU4NjI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYigwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVtbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1ib3R0b206ICNlYmViZWIgMnB4IHNvbGlkO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGhlaWdodDogMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVtbyAucmVmcmVzaC1pY29uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGNvbG9yOiAjYmFiYWJhO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVtbyAucmVmcmVzaC1pY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVtbyAucmVmcmVzaC1pY29uIC5iYWRnZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMC45cmVtO1xcclxcbiAgaGVpZ2h0OiAwLjlyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRvcDogLTAuNXJlbTtcXHJcXG4gIGxlZnQ6IDAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtYW5kLWlucHV0LWNvbnRhaW5lciAuaW5wdXQtYW5kLWljb24ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogI2ViZWJlYiAycHggc29saWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogMy41cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWFuZC1pY29uIC5pY29uIHtcXHJcXG4gIGNvbG9yOiAjYmFiYWJhO1xcclxcbiAgcm90YXRlOiA5MGRlZztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwLjNyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1hbmQtaWNvbiAuaWNvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAjZWJlYmViIDJweCBzb2xpZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAzLjVyZW07XFxyXFxuICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0LmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjMyMSk7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAudG9kby1zdGF0dXMge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICB3aWR0aDogMS4xcmVtO1xcclxcbiAgaGVpZ2h0OiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAudG9kby1jb250ZW50IHtcXHJcXG4gIHBhZGRpbmctaW5saW5lOiAxcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLnRvZG8tY29udGVudC5jb21wbGV0ZWQge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAuZHJhZy1pY29uIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjYmFiYWJhO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAuZHJhZy1pY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLnRyYXNoLWljb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwLjNyZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogI2JhYmFiYTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC50cmFzaC1pY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAwLjllbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgY3Vyc29yOiBjb250ZXh0LW1lbnU7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1jb21wbGV0ZWQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBjb2xvcjogI2JhYmFiYTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWNvbXBsZXRlZDpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBtYXgtaGVpZ2h0OiA3NXZoO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZURhdGEgZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZURhdGEuanMnO1xuaW1wb3J0IHJlYWREYXRhRnJvbURiIGZyb20gJy4vbW9kdWxlcy9yZWFkRGF0YS5qcyc7XG5pbXBvcnQgc2F2ZVRvTG9jYWxTdG9yYWdlIGZyb20gJy4vbW9kdWxlcy9zYXZlVG9EYi5qcyc7XG5pbXBvcnQgcmVuZGVyRGF0YSBmcm9tICcuL21vZHVsZXMvcmVuZGVyLmpzJztcbmltcG9ydCBlZGl0RGF0YSBmcm9tICcuL21vZHVsZXMvZWRpdERhdGEuanMnO1xuaW1wb3J0IHRvZG9TdGF0dXMgZnJvbSAnLi9tb2R1bGVzL3N0YXR1cy5qcyc7XG5pbXBvcnQgcmVtb3ZlRGF0YSBmcm9tICcuL21vZHVsZXMvcmVtb3ZlRGF0YS5qcyc7XG5pbXBvcnQgY2xlYXJDb21wbGV0ZWQgZnJvbSAnLi9tb2R1bGVzL2NsZWFyQ29tcGxldGVkLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0FwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudG9kb0NvbGxlY3Rpb24gPSByZWFkRGF0YUZyb21EYigpO1xuICAgIHRoaXMuY2xlYXJDb21wbGV0ZWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXItY29tcGxldGVkJyk7XG4gICAgdGhpcy51c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0lucHV0Jyk7XG4gICAgdGhpcy5lbnRlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmEtYXJyb3ctdHVybi1kb3duJyk7XG4gICAgdGhpcy5yZWZyZXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWZyZXNoLWljb24nKTtcbiAgICB0aGlzLnVzZXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLkNyZWF0ZURhdGEoKTtcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHRoaXMudG9kb0NvbGxlY3Rpb24pO1xuICAgICAgICB0aGlzLlNob3dEYXRhKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmVudGVySWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuQ3JlYXRlRGF0YSgpO1xuICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHRoaXMudG9kb0NvbGxlY3Rpb24pO1xuICAgICAgdGhpcy5TaG93RGF0YSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5yZWZyZXNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIENyZWF0ZURhdGEoKSB7XG4gICAgY3JlYXRlRGF0YSh0aGlzLnRvZG9Db2xsZWN0aW9uKTtcbiAgfVxuXG4gIFNob3dEYXRhKCkge1xuICAgIHJlbmRlckRhdGEodGhpcy50b2RvQ29sbGVjdGlvbik7XG4gICAgY29uc3QgdHJhc2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyYXNoJyk7XG4gICAgdHJhc2hJY29uLmZvckVhY2goKHRvZG8sIGkpID0+IHRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdUb2RvID0gcmVtb3ZlRGF0YSh0aGlzLnRvZG9Db2xsZWN0aW9uLCBpKTtcbiAgICAgIHRoaXMudG9kb0NvbGxlY3Rpb24gPSBuZXdUb2RvO1xuICAgICAgdGhpcy5TaG93RGF0YSgpO1xuICAgIH0pKTtcblxuICAgIGNvbnN0IGNsZWFyQ29tcGxldGVkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWNvbXBsZXRlZCcpO1xuICAgIGNsZWFyQ29tcGxldGVkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgbmV3VG9kbyA9IGNsZWFyQ29tcGxldGVkKHRoaXMudG9kb0NvbGxlY3Rpb24pO1xuICAgICAgdGhpcy50b2RvQ29sbGVjdGlvbiA9IG5ld1RvZG87XG4gICAgICB0aGlzLlNob3dEYXRhKCk7XG4gICAgfSk7XG5cbiAgICBlZGl0RGF0YSh0aGlzLnRvZG9Db2xsZWN0aW9uKTtcbiAgICB0b2RvU3RhdHVzKHRoaXMudG9kb0NvbGxlY3Rpb24pO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IHQgPSBuZXcgVG9kb0FwcCgpO1xuICB0LlNob3dEYXRhKCk7XG59O1xuIiwiaW1wb3J0IHNhdmVUb0xvY2FsU3RvcmFnZSBmcm9tICcuL3NhdmVUb0RiLmpzJztcblxuY29uc3QgY2xlYXJDb21wbGV0ZWQgPSAodG9kb0NvbGxlY3Rpb24pID0+IHtcbiAgY29uc3QgZmlsdGVyZWREYXRhID0gdG9kb0NvbGxlY3Rpb24uZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpO1xuICBzYXZlVG9Mb2NhbFN0b3JhZ2UoZmlsdGVyZWREYXRhKTtcbiAgcmV0dXJuIGZpbHRlcmVkRGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsZWFyQ29tcGxldGVkOyIsImltcG9ydCBzYXZlVG9Mb2NhbFN0b3JhZ2UgZnJvbSAnLi9zYXZlVG9EYi5qcyc7XG5cbmNvbnN0IGNyZWF0ZURhdGEgPSAodG9kb0NvbGxlY3Rpb24pID0+IHtcbiAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9JbnB1dCcpO1xuICBjb25zdCB0b2RvID0geyBkZXNjcmlwdGlvbjogdXNlcklucHV0LnZhbHVlLCBjb21wbGV0ZWQ6IGZhbHNlLCBpbmRleDogdG9kb0NvbGxlY3Rpb24ubGVuZ3RoICsgMSB9O1xuICB0b2RvQ29sbGVjdGlvbi5wdXNoKHRvZG8pO1xuICB1c2VySW5wdXQudmFsdWUgPSAnJztcbiAgdXNlcklucHV0LmZvY3VzKCk7XG4gIHNhdmVUb0xvY2FsU3RvcmFnZSh0b2RvQ29sbGVjdGlvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEYXRhO1xuIiwiaW1wb3J0IHNhdmVUb0xvY2FsU3RvcmFnZSBmcm9tICcuL3NhdmVUb0RiLmpzJztcblxuY29uc3QgZWRpdERhdGEgPSAoZGF0YUFycmF5KSA9PiB7XG4gIGNvbnN0IHRvZG9MaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0Jyk7XG4gIGNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tY29udGVudCcpO1xuICBjb25zdCBkcmFnSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnLWljb24nKTtcbiAgY29uc3QgdHJhc2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyYXNoLWljb24nKTtcblxuICB0b2RvQ29udGVudC5mb3JFYWNoKChpbnB1dCwgaXRlbSkgPT4gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgZGF0YUFycmF5W2l0ZW1dLmRlc2NyaXB0aW9uID0gdG9kb0NvbnRlbnRbaXRlbV0udmFsdWU7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKGRhdGFBcnJheSk7XG4gICAgdG9kb0xpc3RzW2l0ZW1dLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHRyYXNoSWNvbltpdGVtXS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRyYWdJY29uW2l0ZW1dLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdG9kb0NvbnRlbnRbaXRlbV0uZm9jdXMoKTtcbiAgICB0b2RvQ29udGVudFtpdGVtXS5zdHlsZS5jdXJzb3IgPSAndGV4dCc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvTGlzdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChpdGVtICE9PSBpKSB7XG4gICAgICAgIHRvZG9MaXN0c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgdHJhc2hJY29uW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRyYWdJY29uW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB0b2RvQ29udGVudFtpXS5zdHlsZS5jdXJzb3IgPSAnY29udGV4dC1tZW51JztcbiAgICAgIH1cbiAgICB9XG4gIH0pKTtcblxuICB0b2RvQ29udGVudC5mb3JFYWNoKCh0b2RvLCBpKSA9PiB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGRhdGFBcnJheVtpXS5kZXNjcmlwdGlvbiA9IHRvZG9Db250ZW50W2ldLnZhbHVlO1xuICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKGRhdGFBcnJheSk7XG4gICAgICB0b2RvQ29udGVudFtpXS5ibHVyKCk7XG4gICAgICB0b2RvTGlzdHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB0cmFzaEljb25baV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGRyYWdJY29uW2ldLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cbiAgfSkpO1xuICB0b2RvQ29udGVudC5mb3JFYWNoKCh0b2RvLCBpKSA9PiB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4ge1xuICAgIGRhdGFBcnJheVtpXS5kZXNjcmlwdGlvbiA9IHRvZG9Db250ZW50W2ldLnZhbHVlO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZShkYXRhQXJyYXkpO1xuICB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZWRpdERhdGE7IiwiY29uc3QgcmVhZERhdGFGcm9tRGIgPSAoKSA9PiB7XG4gIGNvbnN0IGRiTmFtZSA9ICd0b2RvTGlzdCc7XG4gIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYk5hbWUpO1xuICBpZiAoc3RvcmVkRGF0YSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuICB9XG4gIHJldHVybiBbXTtcbn07XG5leHBvcnQgZGVmYXVsdCByZWFkRGF0YUZyb21EYjsiLCJpbXBvcnQgc2F2ZVRvTG9jYWxTdG9yYWdlIGZyb20gJy4vc2F2ZVRvRGIuanMnO1xuXG5jb25zdCByZW1vdmVEYXRhID0gKHRvZG9Db2xsZWN0aW9uLCBpdGVtKSA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHRvZG9Db2xsZWN0aW9uLmZpbHRlcigodG9kbywgaW5kZXgpID0+IGl0ZW0gIT09IGluZGV4KTtcbiAgY29uc3QgdG9kb3MgPSBmaWx0ZXJlZERhdGEubWFwKCh0b2RvLCBpbmRleCkgPT4gKHsgLi4udG9kbywgaW5kZXg6IGluZGV4ICsgMSB9KSk7XG4gIHNhdmVUb0xvY2FsU3RvcmFnZSh0b2Rvcyk7XG4gIHJldHVybiB0b2Rvcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbW92ZURhdGE7XG4iLCJjb25zdCByZW5kZXJEYXRhID0gKHRvZG9Db2xsZWN0aW9uKSA9PiB7XG4gIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1jb250YWluZXInKTtcbiAgdG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSB0b2RvQ29sbGVjdGlvbi5tYXAoXG4gICAgKHRvZG8pID0+IGA8bGkgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRvZG8tc3RhdHVzXCIvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInRvZG8tY29udGVudFwiIHZhbHVlPVwiJHt0b2RvLmRlc2NyaXB0aW9ufVwiLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRyYWctaWNvblwiPlxuICAgICAgICA8aSBjbGFzcz0nZHJhZyBmYSBmYS1lbGxpcHNpcy12Jz48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidHJhc2gtaWNvblwiPlxuICAgICAgICA8aSBjbGFzcz0ndHJhc2ggZmEtc29saWQgZmEtdHJhc2gtY2FuJz48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvbGk+YCxcbiAgKS5qb2luKCcnKTtcbn07XG5leHBvcnQgZGVmYXVsdCByZW5kZXJEYXRhO1xuIiwiY29uc3Qgc2F2ZVRvTG9jYWxTdG9yYWdlID0gKHRvZG9Db2xsZWN0aW9uKSA9PiB7XG4gIGNvbnN0IGRiTmFtZSA9ICd0b2RvTGlzdCc7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGRiTmFtZSwgSlNPTi5zdHJpbmdpZnkodG9kb0NvbGxlY3Rpb24pKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNhdmVUb0xvY2FsU3RvcmFnZTsiLCJpbXBvcnQgc2F2ZVRvTG9jYWxTdG9yYWdlIGZyb20gJy4vc2F2ZVRvRGIuanMnO1xuXG5jb25zdCB0b2RvU3RhdHVzID0gKHRvZG8pID0+IHtcbiAgY29uc3Qgbm90aWZpY2F0aW9uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWRnZScpO1xuICBjb25zdCBjaGVja1N0YXR1c0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tc3RhdHVzJyk7XG4gIGNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tY29udGVudCcpO1xuICBjb25zdCBmaWx0ZXJlZG5vdGlmaWNhdGlvbiA9IHRvZG8uZmlsdGVyKChkYXRhKSA9PiAhZGF0YS5jb21wbGV0ZWQpO1xuICBub3RpZmljYXRpb25JY29uLmlubmVySFRNTCA9IGZpbHRlcmVkbm90aWZpY2F0aW9uLmxlbmd0aDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG8ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodG9kb1tpXS5jb21wbGV0ZWQpIHtcbiAgICAgIGNoZWNrU3RhdHVzSW5wdXRbaV0uY2hlY2tlZCA9IHRydWU7XG4gICAgICB0b2RvQ29udGVudFtpXS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcbiAgICB9XG5cbiAgICBjaGVja1N0YXR1c0lucHV0W2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0b2RvQ29udGVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kby5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNoZWNrU3RhdHVzSW5wdXRbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIHRvZG9baV0uY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgY2hlY2tTdGF0dXNJbnB1dFtpXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdG9kb0NvbnRlbnRbaV0uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkbm90aWZpY2F0aW9uID0gdG9kby5maWx0ZXIoKGRhdGEpID0+ICFkYXRhLmNvbXBsZXRlZCk7XG4gICAgICAgIG5vdGlmaWNhdGlvbkljb24uaW5uZXJIVE1MID0gZmlsdGVyZWRub3RpZmljYXRpb24ubGVuZ3RoO1xuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UodG9kbyk7XG4gICAgICB9XG4gICAgICBpZiAoIWUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgdG9kb0NvbnRlbnRbaV0uY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XG4gICAgICAgIHRvZG9baV0uY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrU3RhdHVzSW5wdXRbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0b2RvQ29udGVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRub3RpZmljYXRpb24gPSB0b2RvLmZpbHRlcigoZGF0YSkgPT4gIWRhdGEuY29tcGxldGVkKTtcbiAgICAgICAgbm90aWZpY2F0aW9uSWNvbi5pbm5lckhUTUwgPSBmaWx0ZXJlZG5vdGlmaWNhdGlvbi5sZW5ndGg7XG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSh0b2RvKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb1N0YXR1czsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=