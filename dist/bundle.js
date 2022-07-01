/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\nbody {\n  background-color: #22254b;\n  font-family: \"Poppins\", sans-serif;\n  margin: 0;\n  transition: all 250ms ease-out;\n}\n\na {\n  color: inherit;\n  transition: all 250ms ease-out;\n}\na:hover {\n  color: aqua;\n}\n\nheader {\n  background-color: #373b69;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  transition: all 250ms ease-out;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n  white-space: nowrap;\n  box-shadow: 0 3px 10px 0 rgba(75, 75, 75, 0.4509803922);\n}\nheader img {\n  width: 100px;\n}\n\n#count {\n  color: #fff;\n  font-size: 25px;\n  font-weight: 800;\n  text-align: center;\n  font-style: italic;\n}\n\n#discover {\n  display: flex;\n  gap: 50px;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  font-size: 20px;\n}\n\n#form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.search {\n  background-color: transparent;\n  border: 2px solid #22254b;\n  border-radius: 50px;\n  font-family: inherit;\n  font-size: 1rem;\n  padding: 0.5rem 1rem;\n  color: #fff;\n}\n\n.search::placeholder {\n  color: #7378c5;\n}\n\n.search:focus {\n  outline: none;\n  background-color: #22254b;\n}\n\nmain {\n  position: absolute;\n  top: 10%;\n}\n\n#popular-section {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 30px;\n  margin-bottom: 30px;\n}\n\n.movie {\n  width: 300px;\n  margin: 1rem;\n  background-color: #373b69;\n  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  border-radius: 3px;\n  position: relative;\n}\n.movie .comment {\n  width: 45%;\n  padding: 8px;\n  border-radius: 5px;\n  display: flex;\n  gap: 10px;\n  cursor: pointer;\n  justify-content: center;\n}\n\n.movie img {\n  width: 100%;\n}\n\n.movie-info {\n  color: #eee;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 8px 16px;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\n.interact {\n  display: flex;\n  justify-self: center;\n  justify-content: center;\n  gap: 20px;\n  margin-bottom: 14px;\n}\n\n.movie-info h3 {\n  margin-top: 0;\n}\n\n.span {\n  background-color: #22254b;\n  padding: 0.25rem 0.5rem;\n  align-self: center;\n  border-radius: 3px;\n  font-weight: bold;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n}\n\n.like-btn {\n  background-color: transparent;\n  border: none;\n  align-self: center;\n}\n.like-btn:focus {\n  outline: none;\n  border: none;\n}\n\n.fa-heart,\n.bi {\n  font-size: 20px;\n  cursor: pointer;\n  display: flex;\n  align-self: center;\n  transition: all 0.5s;\n}\n\n.fa-regular.fa-heart {\n  color: white;\n}\n\n.fa-solid.fa-heart {\n  color: red;\n  animation: like 0.5s 1;\n}\n\n.d-none {\n  display: none;\n}\n\n.span.green {\n  color: lightgreen;\n}\n\n.span.orange {\n  color: orange;\n}\n\n.span.red {\n  color: red;\n}\n\n.modal-header {\n  height: 600px;\n  overflow: hidden;\n}\n\n.modal-img {\n  display: block;\n  border-radius: 5px;\n  width: 100%;\n  height: 100%;\n}\n\n.modal-dialog {\n  max-width: 850px;\n  padding: 10px;\n}\n\n.comments-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  list-style: none;\n  gap: 8px;\n  overflow-y: auto;\n  max-height: 200px;\n}\n.comments-container li {\n  padding: 10px;\n  border: 1px #e2e5e9 solid;\n}\n\nfooter {\n  display: flex;\n  color: #fff;\n  background: #373b69;\n  justify-content: center;\n  padding: 10px 10px;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  gap: 8px;\n}\n\n@keyframes like {\n  0% {\n    transform: scale(1);\n  }\n  90% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1.1);\n  }\n}", ""]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "logo.svg");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetchComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchComments.js */ "./src/modules/fetchComments.js");
/* eslint-disable camelcase */


const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PBhw11GTdXlueafWDmvL/comments';

const postComment = async (e) => {
  e.preventDefault();
  const movieID = e.target;

  const name = document.getElementById('name').value.trim();
  const addComment = document.getElementById('added-comment').value.trim();
  const commentForm = document.querySelector('.comment-form');

  if (name && addComment) {
    const result = await fetch(commentURL, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${movieID.id}`,
        username: `${name}`,
        comment: `${addComment}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    commentForm.reset();
    await result.text();
    (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movieID.id);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);

/***/ }),

/***/ "./src/modules/addcommentToDom.js":
/*!****************************************!*\
  !*** ./src/modules/addcommentToDom.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addCommentToDom = (comments, ) => {
  const commentList = document.querySelector('.comments-container');
  commentList.innerHTML = '';
  comments.forEach((comment) => {
    commentList.innerHTML += `<li>${comment.creation_date}: ${comment.username}: ${comment.comment}</li>`;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addCommentToDom);


/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countComments = async (comments) => comments.length;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _popUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popUp.js */ "./src/modules/popUp.js");
/* harmony import */ var _likeButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likeButton.js */ "./src/modules/likeButton.js");
/* eslint-disable camelcase */




const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/';

const container = document.querySelector('#popular-section');

const getClassByRate = (vote) => {
  if (vote >= 7) {
    return 'green';
  } if (vote >= 5) {
    return 'orange';
  }
  return 'red';
};

const display = (movies) => {
  movies.forEach((movie) => {
    const {
      title, poster_path, vote_average, id,
    } = movie;

    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.id = (id);
    movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
          <h4>${title}</h4>
        </div>
  <div class="interact">

          <button type="button" class="btn btn-info comment" data-toggle="modal" data-target="#exampleModal">Comment<i class="bi bi-chat"></i></button>
          <button type="button" class="like-btn">
           <span class="icon">
              <i class="fa-regular fa-heart" id=${id}></i>
           </span>
          </button>
          <span class="${getClassByRate(vote_average)} span count-likes" id=${id}>
        </span>
  </div>
      `;
    container.appendChild(movieEl);
  });

  (0,_likeButton_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_popUp_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movies);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);

/***/ }),

/***/ "./src/modules/fetchComments.js":
/*!**************************************!*\
  !*** ./src/modules/fetchComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addcommentToDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addcommentToDom.js */ "./src/modules/addcommentToDom.js");
/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ "./src/modules/commentCounter.js");



const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PBhw11GTdXlueafWDmvL/comments';

const fetchComments = async (id) => {
  const request = new Request(`${commentURL}?item_id=${id}`);
  const response = await fetch(request);
  const displayCount = document.querySelector('.comments-counter');

  // display 0 comments if no comments were found
  if (!response.ok) {
    displayCount.innerHTML = `0 comments`;
  }
  const recieveComment = await response.json();
  (0,_addcommentToDom_js__WEBPACK_IMPORTED_MODULE_0__["default"])(recieveComment);

  // display number of comments
  (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__["default"])(recieveComment).then((results) => {
    if (!results.ok) {
      displayCount.innerHTML = `${results} comments`;
    }
    
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchComments);

/***/ }),

/***/ "./src/modules/getMovies.js":
/*!**********************************!*\
  !*** ./src/modules/getMovies.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "SEARCH_API": () => (/* binding */ SEARCH_API),
/* harmony export */   "getMovies": () => (/* binding */ getMovies)
/* harmony export */ });
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ "./src/modules/display.js");


const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=24997fed86518e9d29afc6b7f7510f37&page=1';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=24997fed86518e9d29afc6b7f7510f37&query="';

// Get Initial Movies
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  (0,_display_js__WEBPACK_IMPORTED_MODULE_0__["default"])(data.results);

  const counter = document.querySelector('#count');
  counter.innerHTML = `<p>We have ${data.results.length} movies 🎥 🍿</p>`;
}

/***/ }),

/***/ "./src/modules/getlikes.js":
/*!*********************************!*\
  !*** ./src/modules/getlikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PBhw11GTdXlueafWDmvL/likes';

const getLikes = async () => {
  const request = new Request(likesURL);
  const response = await fetch(request);
  const likesCount = await response.json();

  const moviesLikes = document.querySelectorAll('.count-likes');

  for (let i = 0; i < moviesLikes.length; i += 1) {
    let flag = false;
    for (let j = 0; j < likesCount.length; j += 1) {
      if (moviesLikes[i].id === likesCount[j].item_id) {
        flag = true;
        moviesLikes[i].textContent = likesCount[j].likes;
      }
    }
    if (!flag) {
      moviesLikes[i].textContent = 0;
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);

/***/ }),

/***/ "./src/modules/likeButton.js":
/*!***********************************!*\
  !*** ./src/modules/likeButton.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postLikes.js */ "./src/modules/postLikes.js");


const likeFeature = () => {
  const movieDiv = document.querySelectorAll('.movie');
  movieDiv.forEach((div) => {
    div.addEventListener('click', (e) => {
      if (e.target.classList.contains('fa-heart')) {
        e.target.classList.replace('fa-regular', 'fa-solid');
        const movieID = e.target.id;
        (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movieID);
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (likeFeature);

/***/ }),

/***/ "./src/modules/popUp.js":
/*!******************************!*\
  !*** ./src/modules/popUp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addComment.js */ "./src/modules/addComment.js");
/* harmony import */ var _fetchComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchComments.js */ "./src/modules/fetchComments.js");
/* eslint-disable camelcase */



const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/';

const popUP = (movies) => {
  const commentButton = document.querySelectorAll('.comment');
  commentButton.forEach((button) => {
    button.addEventListener('click', () => {
      const movieDiv = button.closest('.movie');
      movies.forEach((movie) => {
        if (movie.id === Number(movieDiv.id)) {
          const {
            title, poster_path, overview, id,
          } = movie;
          const modalPopUp = `
          <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <img src="${IMG_PATH + poster_path}" alt="${title}" class="modal-img">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <h3 class="text-center">${title}</h3>
            <div class="text-center">
              <p>${overview}</p>
            </div>
            <ul class="comments-container">
            </ul>
            <p class="comments-counter" id=${id}></p>
            <form class="form-group form-control p-4 comment-form">
              <input type="text" placeholder="Your name" class="form-group form-control" id="name">
              <textarea class="form-control form-group" placeholder="Your Comment" style="height: 120px;" id="added-comment"></textarea>
              <button type="button" class="add-comment btn btn-info" id=${id}>Comment</button>
            </form>
          </div>
        </div>
      </div>`;
          document.querySelector('#exampleModal').innerHTML = modalPopUp;
          (0,_fetchComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id);

          const submitButton = document.querySelector('.add-comment');
          submitButton.addEventListener('click', _addComment_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
        }
      });
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUP);

/***/ }),

/***/ "./src/modules/postLikes.js":
/*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getlikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getlikes.js */ "./src/modules/getlikes.js");


const likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PBhw11GTdXlueafWDmvL/likes';

const postLikes = async (itemID) => {
  const result = await fetch(likesURL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemID,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  result.text();
  (0,_getlikes_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var _modules_getlikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getlikes.js */ "./src/modules/getlikes.js");
/* harmony import */ var _modules_getMovies_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/getMovies.js */ "./src/modules/getMovies.js");





(0,_modules_getMovies_js__WEBPACK_IMPORTED_MODULE_3__.getMovies)(_modules_getMovies_js__WEBPACK_IMPORTED_MODULE_3__.API_URL);
(0,_modules_getlikes_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
const logoIcon = document.getElementById('logo');

logoIcon.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_1__["default"];

const form = document.getElementById('form');
const search = document.getElementById('search');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    (0,_modules_getMovies_js__WEBPACK_IMPORTED_MODULE_3__.getMovies)(_modules_getMovies_js__WEBPACK_IMPORTED_MODULE_3__.SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});
})();

/******/ })()
;