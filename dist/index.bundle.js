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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f6f6f6;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  text-transform: capitalize;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\n.main {\r\n  width: 50%;\r\n  padding: 3rem;\r\n  max-height: 75vh;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.main::-webkit-scrollbar {\r\n  width: 0.5em;\r\n}\r\n\r\n.main::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.main::-webkit-scrollbar-thumb {\r\n  background-color: #bababa;\r\n  outline: 0.01em solid #545862;\r\n}\r\n\r\n.container {\r\n  background-color: #fff;\r\n  color: #545862;\r\n  width: 100%;\r\n  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.3);\r\n}\r\n\r\n.demo {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: #ebebeb 2px solid;\r\n  padding: 1rem;\r\n  height: 3.5rem;\r\n}\r\n\r\n.demo .notification {\r\n  position: relative;\r\n}\r\n\r\n.demo .notification .badge {\r\n  position: absolute;\r\n  background-color: red;\r\n  height: 1rem;\r\n  width: 1rem;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #fff;\r\n  font-family: sans-serif;\r\n  font-size: 0.8rem;\r\n  top: -0.5rem;\r\n  left: 0.5rem;\r\n}\r\n\r\n.list-and-input-container .input-and-icon {\r\n  border-bottom: #ebebeb 2px solid;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 3.5rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.input-and-icon .icon {\r\n  color: #545862;\r\n}\r\n\r\n.list-container .list {\r\n  position: relative;\r\n  list-style: none;\r\n  border-bottom: #ebebeb 2px solid;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 3.5rem;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.list-container .list.active {\r\n  background-color: rgba(255, 255, 0, 0.321);\r\n}\r\n\r\n.list-container .list .todo-status {\r\n  margin-left: 1rem;\r\n  width: 1.1rem;\r\n  height: 1.1rem;\r\n}\r\n\r\n.list-container .list .todo-content {\r\n  padding-inline: 1rem;\r\n  width: 100%;\r\n  background: none;\r\n  font-style: normal;\r\n}\r\n\r\n.list-container .list .todo-content.completed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.list-container .list .drag-icon {\r\n  margin-right: 0.5rem;\r\n  width: 2rem;\r\n  height: 100%;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #bababa;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.list-container .list .drag-icon:hover {\r\n  color: #545862;\r\n  cursor: move;\r\n}\r\n\r\n.list-container .list .trash-icon {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0.3rem;\r\n  height: 100%;\r\n  font-size: 1.2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 2rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #bababa;\r\n}\r\n\r\n.list-container .list .trash-icon:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  border: none;\r\n  font-style: italic;\r\n  color: #545862;\r\n  outline: none;\r\n  font-size: 0.9em;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: context-menu;\r\n}\r\n\r\n.clear-completed {\r\n  background-color: #f6f6f6;\r\n  padding: 1rem;\r\n  color: #bababa;\r\n  font-size: 1rem;\r\n  font-weight: 200;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.clear-completed:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .main {\r\n    width: 100%;\r\n    padding: 1rem;\r\n    max-height: 75vh;\r\n    overflow: hidden;\r\n    overflow-y: scroll;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;EAC1B,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,yBAAyB;EACzB,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,gCAAgC;EAChC,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,uBAAuB;EACvB,iBAAiB;EACjB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,gCAAgC;EAChC,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,cAAc;EACd,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,gCAAgC;EAChC,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,oBAAoB;EACpB,WAAW;EACX,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,YAAY;EACZ,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,MAAM;EACN,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,6BAA6B;EAC7B,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE;IACE,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;EACpB;AACF","sourcesContent":["*,\r\n::after,\r\n::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #f6f6f6;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  min-height: 100vh;\r\n  text-transform: capitalize;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\n.main {\r\n  width: 50%;\r\n  padding: 3rem;\r\n  max-height: 75vh;\r\n  overflow: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.main::-webkit-scrollbar {\r\n  width: 0.5em;\r\n}\r\n\r\n.main::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.main::-webkit-scrollbar-thumb {\r\n  background-color: #bababa;\r\n  outline: 0.01em solid #545862;\r\n}\r\n\r\n.container {\r\n  background-color: #fff;\r\n  color: #545862;\r\n  width: 100%;\r\n  box-shadow: 0 2px 10px rgb(0, 0, 0, 0.3);\r\n}\r\n\r\n.demo {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: #ebebeb 2px solid;\r\n  padding: 1rem;\r\n  height: 3.5rem;\r\n}\r\n\r\n.demo .notification {\r\n  position: relative;\r\n}\r\n\r\n.demo .notification .badge {\r\n  position: absolute;\r\n  background-color: red;\r\n  height: 1rem;\r\n  width: 1rem;\r\n  border-radius: 50%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #fff;\r\n  font-family: sans-serif;\r\n  font-size: 0.8rem;\r\n  top: -0.5rem;\r\n  left: 0.5rem;\r\n}\r\n\r\n.list-and-input-container .input-and-icon {\r\n  border-bottom: #ebebeb 2px solid;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  height: 3.5rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.input-and-icon .icon {\r\n  color: #545862;\r\n}\r\n\r\n.list-container .list {\r\n  position: relative;\r\n  list-style: none;\r\n  border-bottom: #ebebeb 2px solid;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  height: 3.5rem;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.list-container .list.active {\r\n  background-color: rgba(255, 255, 0, 0.321);\r\n}\r\n\r\n.list-container .list .todo-status {\r\n  margin-left: 1rem;\r\n  width: 1.1rem;\r\n  height: 1.1rem;\r\n}\r\n\r\n.list-container .list .todo-content {\r\n  padding-inline: 1rem;\r\n  width: 100%;\r\n  background: none;\r\n  font-style: normal;\r\n}\r\n\r\n.list-container .list .todo-content.completed {\r\n  text-decoration: line-through;\r\n}\r\n\r\n.list-container .list .drag-icon {\r\n  margin-right: 0.5rem;\r\n  width: 2rem;\r\n  height: 100%;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #bababa;\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.list-container .list .drag-icon:hover {\r\n  color: #545862;\r\n  cursor: move;\r\n}\r\n\r\n.list-container .list .trash-icon {\r\n  display: none;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0.3rem;\r\n  height: 100%;\r\n  font-size: 1.2rem;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 2rem;\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #bababa;\r\n}\r\n\r\n.list-container .list .trash-icon:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n  border: none;\r\n  font-style: italic;\r\n  color: #545862;\r\n  outline: none;\r\n  font-size: 0.9em;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: context-menu;\r\n}\r\n\r\n.clear-completed {\r\n  background-color: #f6f6f6;\r\n  padding: 1rem;\r\n  color: #bababa;\r\n  font-size: 1rem;\r\n  font-weight: 200;\r\n  width: 100%;\r\n  border: none;\r\n}\r\n\r\n.clear-completed:hover {\r\n  color: #545862;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .main {\r\n    width: 100%;\r\n    padding: 1rem;\r\n    max-height: 75vh;\r\n    overflow: hidden;\r\n    overflow-y: scroll;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

  ShowData() {
    this.todoContainer.innerHTML = this.todoCollection.map(
      (todo) => (0,_modules_render_js__WEBPACK_IMPORTED_MODULE_4__["default"])(todo.description),
    ).join('');
    (0,_modules_removeData_js__WEBPACK_IMPORTED_MODULE_7__["default"])(this.todoCollection);
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


const removeData = (todoCollection) => {
  const trashIcon = document.querySelectorAll('.trash');
  trashIcon.forEach((todo, item) => todo.addEventListener('click', () => {
    todoCollection = todoCollection.filter((todos, index) => item !== index);
    todoCollection = todoCollection.map((todo, index) => ({ ...todo, index: index + 1 }));
    (0,_saveToDb_js__WEBPACK_IMPORTED_MODULE_0__["default"])(todoCollection);
    window.location.reload();
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkYsSUFBSSx3REFBa0I7QUFDdEI7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDWnpCO0FBQ0E7QUFDQSx5REFBeUQsWUFBWTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNYMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7QUNMYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBa0I7QUFDMUI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvY3JlYXRlRGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvZWRpdERhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3JlYWREYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9yZW1vdmVEYXRhLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3NhdmVUb0RiLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9zdGF0dXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbjo6YWZ0ZXIsXFxyXFxuOjpiZWZvcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG4gIG1heC1oZWlnaHQ6IDc1dmg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5tYWluOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhO1xcclxcbiAgb3V0bGluZTogMC4wMWVtIHNvbGlkICM1NDU4NjI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYigwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVtbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1ib3R0b206ICNlYmViZWIgMnB4IHNvbGlkO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGhlaWdodDogMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVtbyAubm90aWZpY2F0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbW8gLm5vdGlmaWNhdGlvbiAuYmFkZ2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgdG9wOiAtMC41cmVtO1xcclxcbiAgbGVmdDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1hbmQtaW5wdXQtY29udGFpbmVyIC5pbnB1dC1hbmQtaWNvbiB7XFxyXFxuICBib3JkZXItYm90dG9tOiAjZWJlYmViIDJweCBzb2xpZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiAzLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtYW5kLWljb24gLmljb24ge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogI2ViZWJlYiAycHggc29saWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMy41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdC5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC4zMjEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLnRvZG8tc3RhdHVzIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgd2lkdGg6IDEuMXJlbTtcXHJcXG4gIGhlaWdodDogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLnRvZG8tY29udGVudCB7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC50b2RvLWNvbnRlbnQuY29tcGxldGVkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLmRyYWctaWNvbiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogI2JhYmFiYTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLmRyYWctaWNvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC50cmFzaC1pY29uIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMC4zcmVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNiYWJhYmE7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAudHJhc2gtaWNvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGN1cnNvcjogY29udGV4dC1tZW51O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItY29tcGxldGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgY29sb3I6ICNiYWJhYmE7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1jb21wbGV0ZWQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1haW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgbWF4LWhlaWdodDogNzV2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7RUFHRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHlDQUF5QztFQUN6QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsV0FBVztFQUNYLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbjo6YWZ0ZXIsXFxyXFxuOjpiZWZvcmUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG4gIG1heC1oZWlnaHQ6IDc1dmg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgd2lkdGg6IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5tYWluOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhO1xcclxcbiAgb3V0bGluZTogMC4wMWVtIHNvbGlkICM1NDU4NjI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYigwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVtbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1ib3R0b206ICNlYmViZWIgMnB4IHNvbGlkO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIGhlaWdodDogMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVtbyAubm90aWZpY2F0aW9uIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbW8gLm5vdGlmaWNhdGlvbiAuYmFkZ2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbiAgdG9wOiAtMC41cmVtO1xcclxcbiAgbGVmdDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1hbmQtaW5wdXQtY29udGFpbmVyIC5pbnB1dC1hbmQtaWNvbiB7XFxyXFxuICBib3JkZXItYm90dG9tOiAjZWJlYmViIDJweCBzb2xpZDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgaGVpZ2h0OiAzLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQtYW5kLWljb24gLmljb24ge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogI2ViZWJlYiAycHggc29saWQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMy41cmVtO1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdC5hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC4zMjEpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLnRvZG8tc3RhdHVzIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgd2lkdGg6IDEuMXJlbTtcXHJcXG4gIGhlaWdodDogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLnRvZG8tY29udGVudCB7XFxyXFxuICBwYWRkaW5nLWlubGluZTogMXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC50b2RvLWNvbnRlbnQuY29tcGxldGVkIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLmRyYWctaWNvbiB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gIHdpZHRoOiAycmVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjb2xvcjogI2JhYmFiYTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1jb250YWluZXIgLmxpc3QgLmRyYWctaWNvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIGN1cnNvcjogbW92ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtY29udGFpbmVyIC5saXN0IC50cmFzaC1pY29uIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMC4zcmVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6ICNiYWJhYmE7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWNvbnRhaW5lciAubGlzdCAudHJhc2gtaWNvbjpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGN1cnNvcjogY29udGV4dC1tZW51O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xlYXItY29tcGxldGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxyXFxuICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgY29sb3I6ICNiYWJhYmE7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogMjAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jbGVhci1jb21wbGV0ZWQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1haW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgbWF4LWhlaWdodDogNzV2aDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IGNyZWF0ZURhdGEgZnJvbSAnLi9tb2R1bGVzL2NyZWF0ZURhdGEuanMnO1xyXG5pbXBvcnQgcmVhZERhdGFGcm9tRGIgZnJvbSAnLi9tb2R1bGVzL3JlYWREYXRhLmpzJztcclxuaW1wb3J0IHNhdmVUb0xvY2FsU3RvcmFnZSBmcm9tICcuL21vZHVsZXMvc2F2ZVRvRGIuanMnO1xyXG5pbXBvcnQgcmVuZGVyRGF0YSBmcm9tICcuL21vZHVsZXMvcmVuZGVyLmpzJztcclxuaW1wb3J0IGVkaXREYXRhIGZyb20gJy4vbW9kdWxlcy9lZGl0RGF0YS5qcyc7XHJcbmltcG9ydCB0b2RvU3RhdHVzIGZyb20gJy4vbW9kdWxlcy9zdGF0dXMuanMnO1xyXG5pbXBvcnQgcmVtb3ZlRGF0YSBmcm9tICcuL21vZHVsZXMvcmVtb3ZlRGF0YS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvQXBwIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudG9kb0NvbGxlY3Rpb24gPSByZWFkRGF0YUZyb21EYigpO1xyXG4gICAgdGhpcy51c2VySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0lucHV0Jyk7XHJcbiAgICB0aGlzLnRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1jb250YWluZXInKTtcclxuICAgIHRoaXMudXNlcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuQ3JlYXRlRGF0YSgpO1xyXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSh0aGlzLnRvZG9Db2xsZWN0aW9uKTtcclxuICAgICAgICB0aGlzLlNob3dEYXRhKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgQ3JlYXRlRGF0YSgpIHtcclxuICAgIGNyZWF0ZURhdGEodGhpcy50b2RvQ29sbGVjdGlvbik7XHJcbiAgfVxyXG5cclxuICBTaG93RGF0YSgpIHtcclxuICAgIHRoaXMudG9kb0NvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLnRvZG9Db2xsZWN0aW9uLm1hcChcclxuICAgICAgKHRvZG8pID0+IHJlbmRlckRhdGEodG9kby5kZXNjcmlwdGlvbiksXHJcbiAgICApLmpvaW4oJycpO1xyXG4gICAgcmVtb3ZlRGF0YSh0aGlzLnRvZG9Db2xsZWN0aW9uKTtcclxuICAgIGVkaXREYXRhKHRoaXMudG9kb0NvbGxlY3Rpb24pO1xyXG4gICAgY29uc3QgY2xlYXJDb21wbGV0ZWRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXItY29tcGxldGVkJyk7XHJcbiAgICBjbGVhckNvbXBsZXRlZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy50b2RvQ29sbGVjdGlvbiA9IHRoaXMudG9kb0NvbGxlY3Rpb24uZmlsdGVyKCh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZWQpO1xyXG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UodGhpcy50b2RvQ29sbGVjdGlvbik7XHJcbiAgICAgIHRoaXMuU2hvd0RhdGEoKTtcclxuICAgIH0pO1xyXG4gICAgdG9kb1N0YXR1cyh0aGlzLnRvZG9Db2xsZWN0aW9uKTtcclxuICB9XHJcbn1cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdCA9IG5ldyBUb2RvQXBwKCk7XHJcbiAgdC5TaG93RGF0YSgpO1xyXG59O1xyXG4iLCJpbXBvcnQgc2F2ZVRvTG9jYWxTdG9yYWdlIGZyb20gJy4vc2F2ZVRvRGIuanMnO1xyXG5cclxuY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9JbnB1dCcpO1xyXG5jb25zdCBjcmVhdGVEYXRhID0gKHRvZG9Db2xsZWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgdG9kbyA9IHsgZGVzY3JpcHRpb246IHVzZXJJbnB1dC52YWx1ZSwgY29tcGxldGVkOiBmYWxzZSwgaW5kZXg6IHRvZG9Db2xsZWN0aW9uLmxlbmd0aCArIDEgfTtcclxuICB0b2RvQ29sbGVjdGlvbi5wdXNoKHRvZG8pO1xyXG4gIHVzZXJJbnB1dC52YWx1ZSA9ICcnO1xyXG4gIHVzZXJJbnB1dC5mb2N1cygpO1xyXG4gIHNhdmVUb0xvY2FsU3RvcmFnZSh0b2RvQ29sbGVjdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVEYXRhO1xyXG4iLCJpbXBvcnQgc2F2ZVRvTG9jYWxTdG9yYWdlIGZyb20gJy4vc2F2ZVRvRGIuanMnO1xyXG5cclxuY29uc3QgZWRpdERhdGEgPSAoZGF0YUFycmF5KSA9PiB7XHJcbiAgY29uc3QgdG9kb0xpc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QnKTtcclxuICBjb25zdCB0b2RvQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWNvbnRlbnQnKTtcclxuICBjb25zdCBkcmFnSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnLWljb24nKTtcclxuICBjb25zdCB0cmFzaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudHJhc2gtaWNvbicpO1xyXG5cclxuICB0b2RvQ29udGVudC5mb3JFYWNoKChpbnB1dCwgaSkgPT4gaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIHRvZG9MaXN0c1tpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIHRvZG9MaXN0c1tpXS5mb2N1cygpO1xyXG4gICAgdHJhc2hJY29uW2ldLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICBkcmFnSWNvbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgdG9kb0NvbnRlbnRbaV0uZm9jdXMoKTtcclxuICB9KSk7XHJcblxyXG4gIHRvZG9Db250ZW50LmZvckVhY2goKHRvZG8sIGkpID0+IHRvZG8uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIGRhdGFBcnJheVtpXS5kZXNjcmlwdGlvbiA9IHRvZG9Db250ZW50W2ldLnZhbHVlO1xyXG4gICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoZGF0YUFycmF5KTtcclxuICAgICAgdG9kb0NvbnRlbnRbaV0uYmx1cigpO1xyXG4gICAgICB0b2RvTGlzdHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIHRyYXNoSWNvbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBkcmFnSWNvbltpXS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH1cclxuICB9KSk7XHJcblxyXG4gIHRvZG9MaXN0cy5mb3JFYWNoKCh0cmFzaCwgaSkgPT4gdHJhc2guYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgIHRvZG9Db250ZW50W2ldLmJsdXIoKTtcclxuICAgIHRvZG9MaXN0c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIHRyYXNoSWNvbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgZHJhZ0ljb25baV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfSkpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBlZGl0RGF0YTsiLCJjb25zdCBkYk5hbWUgPSAndG9kb0xpc3QnO1xuY29uc3QgcmVhZERhdGFGcm9tRGIgPSAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYk5hbWUpO1xuICBpZiAoc3RvcmVkRGF0YSkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuICB9XG4gIHJldHVybiBbXTtcbn07XG5leHBvcnQgZGVmYXVsdCByZWFkRGF0YUZyb21EYjsiLCJpbXBvcnQgc2F2ZVRvTG9jYWxTdG9yYWdlIGZyb20gJy4vc2F2ZVRvRGIuanMnO1xyXG5cclxuY29uc3QgcmVtb3ZlRGF0YSA9ICh0b2RvQ29sbGVjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHRyYXNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50cmFzaCcpO1xyXG4gIHRyYXNoSWNvbi5mb3JFYWNoKCh0b2RvLCBpdGVtKSA9PiB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdG9kb0NvbGxlY3Rpb24gPSB0b2RvQ29sbGVjdGlvbi5maWx0ZXIoKHRvZG9zLCBpbmRleCkgPT4gaXRlbSAhPT0gaW5kZXgpO1xyXG4gICAgdG9kb0NvbGxlY3Rpb24gPSB0b2RvQ29sbGVjdGlvbi5tYXAoKHRvZG8sIGluZGV4KSA9PiAoeyAuLi50b2RvLCBpbmRleDogaW5kZXggKyAxIH0pKTtcclxuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSh0b2RvQ29sbGVjdGlvbik7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfSkpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlRGF0YTsiLCJjb25zdCByZW5kZXJEYXRhID0gKGRlc2NyaXB0aW9uKSA9PiBgPGxpIGNsYXNzPVwibGlzdFwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRvZG8tc3RhdHVzXCIvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidG9kby1jb250ZW50XCIgdmFsdWU9XCIke2Rlc2NyaXB0aW9ufVwiLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZHJhZy1pY29uXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9J2RyYWcgZmEgZmEtZWxsaXBzaXMtdic+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0cmFzaC1pY29uXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9J3RyYXNoIGZhLXNvbGlkIGZhLXRyYXNoLWNhbic+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9saT5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyRGF0YTtcclxuIiwiY29uc3QgZGJOYW1lID0gJ3RvZG9MaXN0JztcbmNvbnN0IHNhdmVUb0xvY2FsU3RvcmFnZSA9ICh0b2RvQ29sbGVjdGlvbikgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShkYk5hbWUsIEpTT04uc3RyaW5naWZ5KHRvZG9Db2xsZWN0aW9uKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzYXZlVG9Mb2NhbFN0b3JhZ2U7IiwiaW1wb3J0IHNhdmVUb0xvY2FsU3RvcmFnZSBmcm9tICcuL3NhdmVUb0RiLmpzJztcclxuXHJcbmNvbnN0IG5vdGlmaWNhdGlvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFkZ2UnKTtcclxuY29uc3QgdG9kb1N0YXR1cyA9ICh0b2RvKSA9PiB7XHJcbiAgY29uc3QgY2hlY2tTdGF0dXNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLXN0YXR1cycpO1xyXG4gIGNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8tY29udGVudCcpO1xyXG4gIGNvbnN0IGZpbHRlcmVkbm90aWZpY2F0aW9uID0gdG9kby5maWx0ZXIoKGRhdGEpID0+ICFkYXRhLmNvbXBsZXRlZCk7XHJcbiAgbm90aWZpY2F0aW9uSWNvbi5pbm5lckhUTUwgPSBmaWx0ZXJlZG5vdGlmaWNhdGlvbi5sZW5ndGg7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kby5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgaWYgKHRvZG9baV0uY29tcGxldGVkKSB7XHJcbiAgICAgIGNoZWNrU3RhdHVzSW5wdXRbaV0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIHRvZG9Db250ZW50W2ldLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0b2RvW2ldLmNvbXBsZXRlZCkge1xyXG4gICAgICBjaGVja1N0YXR1c0lucHV0W2ldLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgdG9kb0NvbnRlbnRbaV0uY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG8ubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgIGNoZWNrU3RhdHVzSW5wdXRbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICB0b2RvW2ldLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgY2hlY2tTdGF0dXNJbnB1dFtpXS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB0b2RvQ29udGVudFtpXS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZG5vdGlmaWNhdGlvbiA9IHRvZG8uZmlsdGVyKChkYXRhKSA9PiAhZGF0YS5jb21wbGV0ZWQpO1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbkljb24uaW5uZXJIVE1MID0gZmlsdGVyZWRub3RpZmljYXRpb24ubGVuZ3RoO1xyXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSh0b2RvKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICB0b2RvQ29udGVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZWQnKTtcclxuICAgICAgICB0b2RvW2ldLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNoZWNrU3RhdHVzSW5wdXRbaV0uY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRvZG9Db250ZW50W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlZCcpO1xyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkbm90aWZpY2F0aW9uID0gdG9kby5maWx0ZXIoKGRhdGEpID0+ICFkYXRhLmNvbXBsZXRlZCk7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uSWNvbi5pbm5lckhUTUwgPSBmaWx0ZXJlZG5vdGlmaWNhdGlvbi5sZW5ndGg7XHJcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKHRvZG8pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvU3RhdHVzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==