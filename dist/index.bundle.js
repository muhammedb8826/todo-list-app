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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f6f6f6;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  text-transform: capitalize;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\n.main {\r\n  width: 50%;\r\n  padding: 3rem;\r\n  max-height: 75vh;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.main::-webkit-scrollbar {\r\n  width: 0.5em;\r\n}\r\n\r\n.main::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.main::-webkit-scrollbar-thumb {\r\n  background-color: #bababa;\r\n  outline: 0.01em solid #545862;\r\n}\r\n\r\n.container {\r\n  background-color: #fff;\r\n  color: #545862;\r\n  width: 100%;\r\n  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.3);\r\n}\r\n\r\n.demo {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: #ebebeb 2px solid;\r\n  padding: 1rem;\r\n  height: 3.5rem;\r\n}\r\n\r\n.demo .notification {\r\n  position: relative;\r\n}\r\n\r\n.demo .notification .badge {\r\n  position: absolute;\r\n  background-color: red;\r\n  height: 1rem;\r\n  width: 1rem;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #fff;\r\n  font-family: sans-serif;\r\n  font-size: 0.8rem;\r\n  top: -0.5rem;\r\n  left: 0.5rem;\r\n}\r\n\r\n.list-and-input-container .input-and-icon {\r\n  border-bottom: #ebebeb 2px solid;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 3.5rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.input-and-icon .icon {\r\n  color: #545862;\r\n}\r\n\r\n.list-container .list {\r\n  position: relative;\r\n  list-style: none;\r\n  border-bottom: #ebebeb 2px solid;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 3.5rem;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.list-container .list.active {\r\n  background-color: rgba(255, 255, 0, 0.321);\r\n}\r\n\r\n.list-container .list .todo-status {\r\n  margin-left: 1rem;\r\n  width: 1.1rem;\r\n  height: 1.1rem;\r\n}\r\n\r\n.list-container .list .todo-content {\r\n  padding-inline: 1rem;\r\n  width: 100%;\r\n  background: none;\r\n  font-style: normal;\r\n}\r\n\r\n.list-container .list .todo-content.completed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.list-container .list .drag-icon {\r\n  margin-right: 0.5rem;\r\n  width: 2rem;\r\n  height: 100%;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #bababa;\r\n}\r\n\r\n.list-container .list .drag-icon:hover {\r\n  color: #545862;\r\n  cursor: move;\r\n}\r\n\r\n.list-container .list .trash-icon {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 2rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #bababa;\r\n}\r\n\r\n.list-container .list .trash-icon:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  border: none;\r\n  font-style: italic;\r\n  color: #545862;\r\n  outline: none;\r\n  font-size: 0.9em;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: context-menu;\r\n}\r\n\r\n.clear-completed {\r\n  background-color: #f6f6f6;\r\n  padding: 1rem;\r\n  color: #bababa;\r\n  font-size: 1rem;\r\n  font-weight: 200;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.clear-completed:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .main {\r\n    width: 100%;\r\n    padding: 1rem;\r\n    max-height: 75vh;\r\n    overflow: hidden;\r\n    overflow-y: scroll;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;EAC1B,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,yBAAyB;EACzB,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,gCAAgC;EAChC,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,cAAc;EACd,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gCAAgC;EAChC,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,oBAAoB;EACpB,WAAW;EACX,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,6BAA6B;EAC7B,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE;IACE,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;EACpB;AACF","sourcesContent":["*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f6f6f6;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  text-transform: capitalize;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\n.main {\r\n  width: 50%;\r\n  padding: 3rem;\r\n  max-height: 75vh;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.main::-webkit-scrollbar {\r\n  width: 0.5em;\r\n}\r\n\r\n.main::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.main::-webkit-scrollbar-thumb {\r\n  background-color: #bababa;\r\n  outline: 0.01em solid #545862;\r\n}\r\n\r\n.container {\r\n  background-color: #fff;\r\n  color: #545862;\r\n  width: 100%;\r\n  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.3);\r\n}\r\n\r\n.demo {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: #ebebeb 2px solid;\r\n  padding: 1rem;\r\n  height: 3.5rem;\r\n}\r\n\r\n.demo .notification {\r\n  position: relative;\r\n}\r\n\r\n.demo .notification .badge {\r\n  position: absolute;\r\n  background-color: red;\r\n  height: 1rem;\r\n  width: 1rem;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #fff;\r\n  font-family: sans-serif;\r\n  font-size: 0.8rem;\r\n  top: -0.5rem;\r\n  left: 0.5rem;\r\n}\r\n\r\n.list-and-input-container .input-and-icon {\r\n  border-bottom: #ebebeb 2px solid;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 3.5rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.input-and-icon .icon {\r\n  color: #545862;\r\n}\r\n\r\n.list-container .list {\r\n  position: relative;\r\n  list-style: none;\r\n  border-bottom: #ebebeb 2px solid;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 3.5rem;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.list-container .list.active {\r\n  background-color: rgba(255, 255, 0, 0.321);\r\n}\r\n\r\n.list-container .list .todo-status {\r\n  margin-left: 1rem;\r\n  width: 1.1rem;\r\n  height: 1.1rem;\r\n}\r\n\r\n.list-container .list .todo-content {\r\n  padding-inline: 1rem;\r\n  width: 100%;\r\n  background: none;\r\n  font-style: normal;\r\n}\r\n\r\n.list-container .list .todo-content.completed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.list-container .list .drag-icon {\r\n  margin-right: 0.5rem;\r\n  width: 2rem;\r\n  height: 100%;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #bababa;\r\n}\r\n\r\n.list-container .list .drag-icon:hover {\r\n  color: #545862;\r\n  cursor: move;\r\n}\r\n\r\n.list-container .list .trash-icon {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 2rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #bababa;\r\n}\r\n\r\n.list-container .list .trash-icon:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  border: none;\r\n  font-style: italic;\r\n  color: #545862;\r\n  outline: none;\r\n  font-size: 0.9em;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: context-menu;\r\n}\r\n\r\n.clear-completed {\r\n  background-color: #f6f6f6;\r\n  padding: 1rem;\r\n  color: #bababa;\r\n  font-size: 1rem;\r\n  font-weight: 200;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.clear-completed:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .main {\r\n    width: 100%;\r\n    padding: 1rem;\r\n    max-height: 75vh;\r\n    overflow: hidden;\r\n    overflow-y: scroll;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
    this.userInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        this.CreateData();
        (0,_modules_saveToDb_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.todoCollection);
        this.ShowData();
      }
    });
  }

  CreateData() {
    (0,_modules_createData_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.todoCollection);
  }

  removeData(item) {
    this.todoCollection = this.todoCollection.filter((todos, index) => item !== index);
    this.todoCollection = this.todoCollection.map((todo, index) => ({ ...todo, index: index + 1 }));
  }

  ShowData() {
    this.todoContainer.innerHTML = this.todoCollection.map(
      (todo) => (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_4__["default"])(todo.description),
    ).join('');

    const trashIcon = document.querySelectorAll('.trash');

    for (let i = 0; i < trashIcon.length; i += 1) {
      trashIcon[i].addEventListener('click', () => {
        this.removeData(i);
        (0,_modules_saveToDb_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this.todoCollection);
        this.ShowData();
      });
    }

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


const editData = (dataArray) => {
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


const notificationIcon = document.querySelector('.badge');
const todoStatus = (todo) => {
  const checkStatusInput = document.querySelectorAll('.todo-status');
  const todoContent = document.querySelectorAll('.todo-content');
  const filterednotification = todo.filter((data) => !data.completed);
  notificationIcon.innerHTML = filterednotification.length;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLHNFQUFzRSxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLGNBQWMsZ0NBQWdDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHdCQUF3QixpQ0FBaUMsZ0RBQWdELDBCQUEwQixLQUFLLGVBQWUsaUJBQWlCLG9CQUFvQix1QkFBdUIsdUJBQXVCLHlCQUF5QixLQUFLLGtDQUFrQyxtQkFBbUIsS0FBSyx3Q0FBd0MsbURBQW1ELEtBQUssd0NBQXdDLGdDQUFnQyxvQ0FBb0MsS0FBSyxvQkFBb0IsNkJBQTZCLHFCQUFxQixrQkFBa0IsK0NBQStDLEtBQUssZUFBZSxvQkFBb0IsMEJBQTBCLHFDQUFxQyx1Q0FBdUMsb0JBQW9CLHFCQUFxQixLQUFLLDZCQUE2Qix5QkFBeUIsS0FBSyxvQ0FBb0MseUJBQXlCLDRCQUE0QixtQkFBbUIsa0JBQWtCLHlCQUF5QixvQkFBb0IsOEJBQThCLDBCQUEwQixrQkFBa0IsOEJBQThCLHdCQUF3QixtQkFBbUIsbUJBQW1CLEtBQUssbURBQW1ELHVDQUF1QyxvQkFBb0IsMEJBQTBCLHFDQUFxQyxxQkFBcUIsb0JBQW9CLEtBQUssK0JBQStCLHFCQUFxQixLQUFLLCtCQUErQix5QkFBeUIsdUJBQXVCLHVDQUF1QyxvQkFBb0IscUNBQXFDLDBCQUEwQixxQkFBcUIsd0JBQXdCLEtBQUssc0NBQXNDLGlEQUFpRCxLQUFLLDRDQUE0Qyx3QkFBd0Isb0JBQW9CLHFCQUFxQixLQUFLLDZDQUE2QywyQkFBMkIsa0JBQWtCLHVCQUF1Qix5QkFBeUIsS0FBSyx1REFBdUQsb0NBQW9DLEtBQUssMENBQTBDLDJCQUEyQixrQkFBa0IsbUJBQW1CLG9DQUFvQyxtQkFBbUIscUJBQXFCLEtBQUssZ0RBQWdELHFCQUFxQixtQkFBbUIsS0FBSywyQ0FBMkMsb0JBQW9CLHlCQUF5QixhQUFhLGVBQWUsbUJBQW1CLDBCQUEwQiw4QkFBOEIsa0JBQWtCLG9DQUFvQyxtQkFBbUIscUJBQXFCLEtBQUssaURBQWlELHFCQUFxQixzQkFBc0IsS0FBSyw4QkFBOEIsbUJBQW1CLHlCQUF5QixxQkFBcUIsb0JBQW9CLHVCQUF1QixrQkFBa0IsbUJBQW1CLDJCQUEyQixLQUFLLDBCQUEwQixnQ0FBZ0Msb0JBQW9CLHFCQUFxQixzQkFBc0IsdUJBQXVCLGtCQUFrQixtQkFBbUIsS0FBSyxnQ0FBZ0MscUJBQXFCLHNCQUFzQixLQUFLLG1DQUFtQyxhQUFhLG9CQUFvQixzQkFBc0IseUJBQXlCLHlCQUF5QiwyQkFBMkIsT0FBTyxLQUFLLFdBQVcsa0ZBQWtGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxxREFBcUQsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsS0FBSyxjQUFjLGdDQUFnQyxvQkFBb0IsOEJBQThCLDBCQUEwQix3QkFBd0IsaUNBQWlDLGdEQUFnRCwwQkFBMEIsS0FBSyxlQUFlLGlCQUFpQixvQkFBb0IsdUJBQXVCLHVCQUF1Qix5QkFBeUIsS0FBSyxrQ0FBa0MsbUJBQW1CLEtBQUssd0NBQXdDLG1EQUFtRCxLQUFLLHdDQUF3QyxnQ0FBZ0Msb0NBQW9DLEtBQUssb0JBQW9CLDZCQUE2QixxQkFBcUIsa0JBQWtCLCtDQUErQyxLQUFLLGVBQWUsb0JBQW9CLDBCQUEwQixxQ0FBcUMsdUNBQXVDLG9CQUFvQixxQkFBcUIsS0FBSyw2QkFBNkIseUJBQXlCLEtBQUssb0NBQW9DLHlCQUF5Qiw0QkFBNEIsbUJBQW1CLGtCQUFrQix5QkFBeUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsa0JBQWtCLDhCQUE4Qix3QkFBd0IsbUJBQW1CLG1CQUFtQixLQUFLLG1EQUFtRCx1Q0FBdUMsb0JBQW9CLDBCQUEwQixxQ0FBcUMscUJBQXFCLG9CQUFvQixLQUFLLCtCQUErQixxQkFBcUIsS0FBSywrQkFBK0IseUJBQXlCLHVCQUF1Qix1Q0FBdUMsb0JBQW9CLHFDQUFxQywwQkFBMEIscUJBQXFCLHdCQUF3QixLQUFLLHNDQUFzQyxpREFBaUQsS0FBSyw0Q0FBNEMsd0JBQXdCLG9CQUFvQixxQkFBcUIsS0FBSyw2Q0FBNkMsMkJBQTJCLGtCQUFrQix1QkFBdUIseUJBQXlCLEtBQUssdURBQXVELG9DQUFvQyxLQUFLLDBDQUEwQywyQkFBMkIsa0JBQWtCLG1CQUFtQixvQ0FBb0MsbUJBQW1CLHFCQUFxQixLQUFLLGdEQUFnRCxxQkFBcUIsbUJBQW1CLEtBQUssMkNBQTJDLG9CQUFvQix5QkFBeUIsYUFBYSxlQUFlLG1CQUFtQiwwQkFBMEIsOEJBQThCLGtCQUFrQixvQ0FBb0MsbUJBQW1CLHFCQUFxQixLQUFLLGlEQUFpRCxxQkFBcUIsc0JBQXNCLEtBQUssOEJBQThCLG1CQUFtQix5QkFBeUIscUJBQXFCLG9CQUFvQix1QkFBdUIsa0JBQWtCLG1CQUFtQiwyQkFBMkIsS0FBSywwQkFBMEIsZ0NBQWdDLG9CQUFvQixxQkFBcUIsc0JBQXNCLHVCQUF1QixrQkFBa0IsbUJBQW1CLEtBQUssZ0NBQWdDLHFCQUFxQixzQkFBc0IsS0FBSyxtQ0FBbUMsYUFBYSxvQkFBb0Isc0JBQXNCLHlCQUF5Qix5QkFBeUIsMkJBQTJCLE9BQU8sS0FBSyx1QkFBdUI7QUFDcGpTO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQzRCO0FBQ0U7QUFDSTtBQUNWO0FBQ0E7QUFDQTs7QUFFOUI7QUFDZjtBQUNBLDBCQUEwQixnRUFBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdFQUFrQjtBQUMxQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsSUFBSSxrRUFBVTtBQUNkOztBQUVBO0FBQ0E7QUFDQSxzRUFBc0UsMkJBQTJCO0FBQ2pHOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsOERBQVU7QUFDMUI7O0FBRUE7O0FBRUEsb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0EsUUFBUSxnRUFBa0I7QUFDMUI7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsSUFBSSxnRUFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0VBQWtCO0FBQ3hCO0FBQ0EsS0FBSztBQUNMLElBQUksOERBQVU7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0QrQzs7QUFFL0M7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFrQjtBQUNwQjs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYcUI7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQWtCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7OztBQ25DdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FDUjdCO0FBQ0E7QUFDQSx5REFBeUQsWUFBWTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1gxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7OztBQ0xjOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFrQjtBQUMxQjtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2NyZWF0ZURhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2VkaXREYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9yZWFkRGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9zYXZlVG9EYi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvc3RhdHVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG46OmFmdGVyLFxcclxcbjo6YmVmb3JlIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxuICBtYXgtaGVpZ2h0OiA3NXZoO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gIHdpZHRoOiAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTtcXHJcXG4gIG91dGxpbmU6IDAuMDFlbSBzb2xpZCAjNTQ1ODYyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2IoMCwgMCwgMCwgMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbW8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItYm90dG9tOiAjZWJlYmViIDJweCBzb2xpZDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDMuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbW8gLm5vdGlmaWNhdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5kZW1vIC5ub3RpZmljYXRpb24gLmJhZGdlIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gIHRvcDogLTAuNXJlbTtcXHJcXG4gIGxlZnQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtYW5kLWlucHV0LWNvbnRhaW5lciAuaW5wdXQtYW5kLWljb24ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogI2ViZWJlYiAycHggc29saWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGhlaWdodDogMy41cmVtO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0LWFuZC1pY29uIC5pY29uIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3Qge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206ICNlYmViZWIgMnB4IHNvbGlkO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDMuNXJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QuYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMzIxKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC50b2RvLXN0YXR1cyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gIHdpZHRoOiAxLjFyZW07XFxyXFxuICBoZWlnaHQ6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC50b2RvLWNvbnRlbnQge1xcclxcbiAgcGFkZGluZy1pbmxpbmU6IDFyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAudG9kby1jb250ZW50LmNvbXBsZXRlZCB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC5kcmFnLWljb24ge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNiYWJhYmE7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAuZHJhZy1pY29uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLnRyYXNoLWljb24ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgd2lkdGg6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiAjYmFiYWJhO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLnRyYXNoLWljb246aG92ZXIge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDAuOWVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjdXJzb3I6IGNvbnRleHQtbWVudTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyLWNvbXBsZXRlZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGNvbG9yOiAjYmFiYWJhO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItY29tcGxldGVkOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIG1heC1oZWlnaHQ6IDc1dmg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQix5Q0FBeUM7RUFDekMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFdBQVc7RUFDWCx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbjo6YWZ0ZXIsXFxyXFxuOjpiZWZvcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG4gIG1heC1oZWlnaHQ6IDc1dmg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5tYWluOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhO1xcclxcbiAgb3V0bGluZTogMC4wMWVtIHNvbGlkICM1NDU4NjI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYigwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVtbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1ib3R0b206ICNlYmViZWIgMnB4IHNvbGlkO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGhlaWdodDogMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVtbyAubm90aWZpY2F0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbW8gLm5vdGlmaWNhdGlvbiAuYmFkZ2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgdG9wOiAtMC41cmVtO1xcclxcbiAgbGVmdDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1hbmQtaW5wdXQtY29udGFpbmVyIC5pbnB1dC1hbmQtaWNvbiB7XFxyXFxuICBib3JkZXItYm90dG9tOiAjZWJlYmViIDJweCBzb2xpZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiAzLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtYW5kLWljb24gLmljb24ge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogI2ViZWJlYiAycHggc29saWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMy41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdC5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC4zMjEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLnRvZG8tc3RhdHVzIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgd2lkdGg6IDEuMXJlbTtcXHJcXG4gIGhlaWdodDogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLnRvZG8tY29udGVudCB7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC50b2RvLWNvbnRlbnQuY29tcGxldGVkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLmRyYWctaWNvbiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogI2JhYmFiYTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC5kcmFnLWljb246aG92ZXIge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAudHJhc2gtaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNiYWJhYmE7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAudHJhc2gtaWNvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGN1cnNvcjogY29udGV4dC1tZW51O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItY29tcGxldGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgY29sb3I6ICNiYWJhYmE7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1jb21wbGV0ZWQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1haW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgbWF4LWhlaWdodDogNzV2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBjcmVhdGVEYXRhIGZyb20gJy4vbW9kdWxlcy9jcmVhdGVEYXRhLmpzJztcbmltcG9ydCByZWFkRGF0YUZyb21EYiBmcm9tICcuL21vZHVsZXMvcmVhZERhdGEuanMnO1xuaW1wb3J0IHNhdmVUb0xvY2FsU3RvcmFnZSBmcm9tICcuL21vZHVsZXMvc2F2ZVRvRGIuanMnO1xuaW1wb3J0IHJlbmRlckRhdGEgZnJvbSAnLi9tb2R1bGVzL3JlbmRlci5qcyc7XG5pbXBvcnQgZWRpdERhdGEgZnJvbSAnLi9tb2R1bGVzL2VkaXREYXRhLmpzJztcbmltcG9ydCB0b2RvU3RhdHVzIGZyb20gJy4vbW9kdWxlcy9zdGF0dXMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b2RvQ29sbGVjdGlvbiA9IHJlYWREYXRhRnJvbURiKCk7XG4gICAgdGhpcy51c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0lucHV0Jyk7XG4gICAgdGhpcy50b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XG4gICAgdGhpcy51c2VySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5DcmVhdGVEYXRhKCk7XG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSh0aGlzLnRvZG9Db2xsZWN0aW9uKTtcbiAgICAgICAgdGhpcy5TaG93RGF0YSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgQ3JlYXRlRGF0YSgpIHtcbiAgICBjcmVhdGVEYXRhKHRoaXMudG9kb0NvbGxlY3Rpb24pO1xuICB9XG5cbiAgcmVtb3ZlRGF0YShpdGVtKSB7XG4gICAgdGhpcy50b2RvQ29sbGVjdGlvbiA9IHRoaXMudG9kb0NvbGxlY3Rpb24uZmlsdGVyKCh0b2RvcywgaW5kZXgpID0+IGl0ZW0gIT09IGluZGV4KTtcbiAgICB0aGlzLnRvZG9Db2xsZWN0aW9uID0gdGhpcy50b2RvQ29sbGVjdGlvbi5tYXAoKHRvZG8sIGluZGV4KSA9PiAoeyAuLi50b2RvLCBpbmRleDogaW5kZXggKyAxIH0pKTtcbiAgfVxuXG4gIFNob3dEYXRhKCkge1xuICAgIHRoaXMudG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLnRvZG9Db2xsZWN0aW9uLm1hcChcbiAgICAgICh0b2RvKSA9PiByZW5kZXJEYXRhKHRvZG8uZGVzY3JpcHRpb24pLFxuICAgICkuam9pbignJyk7XG5cbiAgICBjb25zdCB0cmFzaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhc2gnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhc2hJY29uLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0cmFzaEljb25baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlRGF0YShpKTtcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHRoaXMudG9kb0NvbGxlY3Rpb24pO1xuICAgICAgICB0aGlzLlNob3dEYXRhKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBlZGl0RGF0YSh0aGlzLnRvZG9Db2xsZWN0aW9uKTtcbiAgICBjb25zdCBjbGVhckNvbXBsZXRlZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1jb21wbGV0ZWQnKTtcbiAgICBjbGVhckNvbXBsZXRlZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMudG9kb0NvbGxlY3Rpb24gPSB0aGlzLnRvZG9Db2xsZWN0aW9uLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGVkKTtcbiAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSh0aGlzLnRvZG9Db2xsZWN0aW9uKTtcbiAgICAgIHRoaXMuU2hvd0RhdGEoKTtcbiAgICB9KTtcbiAgICB0b2RvU3RhdHVzKHRoaXMudG9kb0NvbGxlY3Rpb24pO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IHQgPSBuZXcgVG9kb0FwcCgpO1xuICB0LlNob3dEYXRhKCk7XG59O1xuIiwiaW1wb3J0IHNhdmVUb0xvY2FsU3RvcmFnZSBmcm9tICcuL3NhdmVUb0RiLmpzJztcblxuY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9JbnB1dCcpO1xuY29uc3QgY3JlYXRlRGF0YSA9ICh0b2RvQ29sbGVjdGlvbikgPT4ge1xuICBjb25zdCB0b2RvID0geyBkZXNjcmlwdGlvbjogdXNlcklucHV0LnZhbHVlLCBjb21wbGV0ZWQ6IGZhbHNlLCBpbmRleDogdG9kb0NvbGxlY3Rpb24ubGVuZ3RoICsgMSB9O1xuICB0b2RvQ29sbGVjdGlvbi5wdXNoKHRvZG8pO1xuICB1c2VySW5wdXQudmFsdWUgPSAnJztcbiAgdXNlcklucHV0LmZvY3VzKCk7XG4gIHNhdmVUb0xvY2FsU3RvcmFnZSh0b2RvQ29sbGVjdGlvbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEYXRhO1xuIiwiaW1wb3J0IHNhdmVUb0xvY2FsU3RvcmFnZSBmcm9tICcuL3NhdmVUb0RiLmpzJztcblxuY29uc3QgZWRpdERhdGEgPSAoZGF0YUFycmF5KSA9PiB7XG4gIGNvbnN0IHRvZG9MaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0Jyk7XG4gIGNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tY29udGVudCcpO1xuICBjb25zdCBkcmFnSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnLWljb24nKTtcbiAgY29uc3QgdHJhc2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRyYXNoLWljb24nKTtcblxuICB0b2RvQ29udGVudC5mb3JFYWNoKChpbnB1dCwgaSkgPT4gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgdG9kb0xpc3RzW2ldLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHRvZG9MaXN0c1tpXS5mb2N1cygpO1xuICAgIHRyYXNoSWNvbltpXS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRyYWdJY29uW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdG9kb0NvbnRlbnRbaV0uZm9jdXMoKTtcbiAgfSkpO1xuXG4gIHRvZG9Db250ZW50LmZvckVhY2goKHRvZG8sIGkpID0+IHRvZG8uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZGF0YUFycmF5W2ldLmRlc2NyaXB0aW9uID0gdG9kb0NvbnRlbnRbaV0udmFsdWU7XG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoZGF0YUFycmF5KTtcbiAgICAgIHRvZG9Db250ZW50W2ldLmJsdXIoKTtcbiAgICAgIHRvZG9MaXN0c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIHRyYXNoSWNvbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZHJhZ0ljb25baV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9KSk7XG5cbiAgdG9kb0xpc3RzLmZvckVhY2goKHRyYXNoLCBpKSA9PiB0cmFzaC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIHRvZG9Db250ZW50W2ldLmJsdXIoKTtcbiAgICB0b2RvTGlzdHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgdHJhc2hJY29uW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZHJhZ0ljb25baV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH0pKTtcbn07XG5leHBvcnQgZGVmYXVsdCBlZGl0RGF0YTsiLCJjb25zdCBkYk5hbWUgPSAndG9kb0xpc3QnO1xuY29uc3QgcmVhZERhdGFGcm9tRGIgPSAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYk5hbWUpO1xuICBpZiAoc3RvcmVkRGF0YSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuICB9XG4gIHJldHVybiBbXTtcbn07XG5leHBvcnQgZGVmYXVsdCByZWFkRGF0YUZyb21EYjsiLCJjb25zdCByZW5kZXJEYXRhID0gKGRlc2NyaXB0aW9uKSA9PiBgPGxpIGNsYXNzPVwibGlzdFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ0b2RvLXN0YXR1c1wiLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJ0b2RvLWNvbnRlbnRcIiB2YWx1ZT1cIiR7ZGVzY3JpcHRpb259XCIvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZHJhZy1pY29uXCI+XG4gICAgICAgIDxpIGNsYXNzPSdkcmFnIGZhIGZhLWVsbGlwc2lzLXYnPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0cmFzaC1pY29uXCI+XG4gICAgICAgIDxpIGNsYXNzPSd0cmFzaCBmYS1zb2xpZCBmYS10cmFzaC1jYW4nPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9saT5gO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJEYXRhO1xuIiwiY29uc3QgZGJOYW1lID0gJ3RvZG9MaXN0JztcbmNvbnN0IHNhdmVUb0xvY2FsU3RvcmFnZSA9ICh0b2RvQ29sbGVjdGlvbikgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYk5hbWUsIEpTT04uc3RyaW5naWZ5KHRvZG9Db2xsZWN0aW9uKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzYXZlVG9Mb2NhbFN0b3JhZ2U7IiwiaW1wb3J0IHNhdmVUb0xvY2FsU3RvcmFnZSBmcm9tICcuL3NhdmVUb0RiLmpzJztcblxuY29uc3Qgbm90aWZpY2F0aW9uSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWRnZScpO1xuY29uc3QgdG9kb1N0YXR1cyA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IGNoZWNrU3RhdHVzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1zdGF0dXMnKTtcbiAgY29uc3QgdG9kb0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1jb250ZW50Jyk7XG4gIGNvbnN0IGZpbHRlcmVkbm90aWZpY2F0aW9uID0gdG9kby5maWx0ZXIoKGRhdGEpID0+ICFkYXRhLmNvbXBsZXRlZCk7XG4gIG5vdGlmaWNhdGlvbkljb24uaW5uZXJIVE1MID0gZmlsdGVyZWRub3RpZmljYXRpb24ubGVuZ3RoO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kby5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0b2RvW2ldLmNvbXBsZXRlZCkge1xuICAgICAgY2hlY2tTdGF0dXNJbnB1dFtpXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIHRvZG9Db250ZW50W2ldLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xuICAgIH1cbiAgICBpZiAoIXRvZG9baV0uY29tcGxldGVkKSB7XG4gICAgICBjaGVja1N0YXR1c0lucHV0W2ldLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgIHRvZG9Db250ZW50W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kby5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNoZWNrU3RhdHVzSW5wdXRbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgIHRvZG9baV0uY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgY2hlY2tTdGF0dXNJbnB1dFtpXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdG9kb0NvbnRlbnRbaV0uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkJyk7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkbm90aWZpY2F0aW9uID0gdG9kby5maWx0ZXIoKGRhdGEpID0+ICFkYXRhLmNvbXBsZXRlZCk7XG4gICAgICAgIG5vdGlmaWNhdGlvbkljb24uaW5uZXJIVE1MID0gZmlsdGVyZWRub3RpZmljYXRpb24ubGVuZ3RoO1xuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UodG9kbyk7XG4gICAgICB9XG4gICAgICBpZiAoIWUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgdG9kb0NvbnRlbnRbaV0uY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XG4gICAgICAgIHRvZG9baV0uY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIGNoZWNrU3RhdHVzSW5wdXRbaV0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0b2RvQ29udGVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWRub3RpZmljYXRpb24gPSB0b2RvLmZpbHRlcigoZGF0YSkgPT4gIWRhdGEuY29tcGxldGVkKTtcbiAgICAgICAgbm90aWZpY2F0aW9uSWNvbi5pbm5lckhUTUwgPSBmaWx0ZXJlZG5vdGlmaWNhdGlvbi5sZW5ndGg7XG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSh0b2RvKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb1N0YXR1czsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=