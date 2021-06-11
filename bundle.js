/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/base.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/base.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".danmaku-containers{\r\n    position: relative;\r\n}\r\n.danmaku-containers  *{\r\n    box-sizing: border-box;\r\n    /* perspective: 700px; */\r\n    transform-style: preserve-3d;\r\n}\r\n.danmaku-containers .stage{\r\n    position: absolute;\r\n    overflow: hidden;\r\n    perspective:1000px;\r\n    transform-style: preserve-3d;\r\n}\r\n.danmaku-containers-debug *{\r\n    /* outline: 1px solid black; */\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/css/base.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;AACA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,4BAA4B;AAChC;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,4BAA4B;AAChC;AACA;IACI,8BAA8B;AAClC","sourcesContent":[".danmaku-containers{\r\n    position: relative;\r\n}\r\n.danmaku-containers  *{\r\n    box-sizing: border-box;\r\n    /* perspective: 700px; */\r\n    transform-style: preserve-3d;\r\n}\r\n.danmaku-containers .stage{\r\n    position: absolute;\r\n    overflow: hidden;\r\n    perspective:1000px;\r\n    transform-style: preserve-3d;\r\n}\r\n.danmaku-containers-debug *{\r\n    /* outline: 1px solid black; */\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/css/base.css":
/*!**************************!*\
  !*** ./src/css/base.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./base.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/base.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/ts/Context/Context.ts":
/*!***********************************!*\
  !*** ./src/ts/Context/Context.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context)
/* harmony export */ });
/**
 * 全局上下文
 */
var Context = /** @class */ (function () {
    function Context() {
    }
    /**
     * 当前语言
     */
    Context.language = "zh-cn";
    Context.debug = true;
    return Context;
}());



/***/ }),

/***/ "./src/ts/Controller/Controller.ts":
/*!*****************************************!*\
  !*** ./src/ts/Controller/Controller.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Controller": () => (/* binding */ Controller)
/* harmony export */ });
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Context/Context */ "./src/ts/Context/Context.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../i18n */ "./src/ts/i18n/index.ts");
/* harmony import */ var src_ts_Factory_RendererFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/ts/Factory/RendererFactory */ "./src/ts/Factory/RendererFactory.ts");
/* harmony import */ var _interface_Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interface/Style/Unit/PxSize */ "./src/ts/interface/Style/Unit/PxSize.ts");
/* harmony import */ var _Factory_TimeLineFactort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Factory/TimeLineFactort */ "./src/ts/Factory/TimeLineFactort.ts");
/* harmony import */ var _Factory_DanmakuParser_JsonDanmakuParser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Factory/DanmakuParser/JsonDanmakuParser */ "./src/ts/Factory/DanmakuParser/JsonDanmakuParser.ts");






/**
 * 控制器 ，统一管理整个弹幕系统
 * 在这里，每种弹幕类型都会得到一个舞台对象，进行渲染
 */
var Controller = /** @class */ (function () {
    function Controller(containers) {
        /**
         * 舞台列表
        */
        this.stageList = [];
        /**
         * 暂停状态
         */
        this.pauseStatus = true;
        /**
         * 时间戳
         */
        this.timeStamp = 0;
        /**
         * 播放的时间
         */
        this.time = 0;
        /**
         * 跳转状态
         */
        this.skipStatus = false;
        this.danmakuFunction = {};
        this.containers = containers;
        //获取实时的style对象，当大小发生变化时，会更新自身
        this.canvasStyle = window.getComputedStyle(containers);
        //初始化容器
        this.initContainer();
        var that = this;
        (function animloop() {
            if (!that.pauseStatus) {
                that.refresh();
            }
            requestAnimationFrame(animloop);
        })();
    }
    /**
     * 获得容器尺寸
     */
    Controller.prototype.getContainersSize = function () {
        return {
            width: new _interface_Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_3__.PxSize(parseInt(this.canvasStyle.width)),
            height: new _interface_Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_3__.PxSize(parseInt(this.canvasStyle.height))
        };
    };
    /**
     * 将一个舞台添加到容器内
     * @param stage 舞台
     * @param index 排列顺序
     * @returns 成功与失败的状态
     */
    Controller.prototype.registStage = function (stage, index) {
        //检查列表中是否存在
        if (this.stageList[index]) {
            return false;
        }
        this.stageList[index] = stage;
        return true;
    };
    /**
     * 将舞台挂载到容器中
     */
    Controller.prototype.mount = function () {
        var _this = this;
        console.info(_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.t("Start mount stage"));
        //遍历每一个舞台
        this.stageList.forEach(function (stage, key) {
            //获取一个div
            var div = _this.getDIV();
            //给舞台初始化渲染器
            var render = src_ts_Factory_RendererFactory__WEBPACK_IMPORTED_MODULE_2__.RendererFactory.getRenderInstance(stage.rendererType());
            //将div挂载到渲染器
            render.setCanvasContainer(div);
            //设置舞台渲染器
            stage.stageRenderer(render);
            //设置舞台时间轴
            var lineType = stage.timeLineType();
            var timeline = _Factory_TimeLineFactort__WEBPACK_IMPORTED_MODULE_4__.TimeLineFactory.getTimeLine(lineType);
            stage.timeLine(timeline);
            if (_this.danmakuFunction[lineType]) {
                _this.resetDanmaku(key);
            }
            else {
                console.warn(_i18n__WEBPACK_IMPORTED_MODULE_1__.i18n.t("danmaku get function is null :" + lineType));
            }
            //更新渲染器内画布样式
            render.updateCanvasStyle(_this.getCanvasStylByStage(stage));
        });
    };
    /**
     * 初始化弹幕容器
     */
    Controller.prototype.initContainer = function () {
        if (_Context_Context__WEBPACK_IMPORTED_MODULE_0__.Context.debug) {
            //debug模式
            this.containers.classList.add("danmaku-containers-debug");
        }
        this.containers.classList.add("danmaku-containers");
    };
    /**
     * 重置尺寸
     */
    Controller.prototype.resize = function () {
        var _this = this;
        //重置舞台的尺寸
        this.stageList.forEach(function (stage) {
            var render = stage.getRenderer();
            if (render) {
                render.updateCanvasStyle(_this.getCanvasStylByStage(stage));
            }
        });
    };
    /**
     * 创建div容器
     */
    Controller.prototype.getDIV = function () {
        var div = document.createElement("div");
        div.classList.add("stage");
        this.containers.appendChild(div);
        return div;
    };
    /**
     * 根据舞台对象创建一个canvasStyle
     * @param stage 舞台对象
     * @returns
     */
    Controller.prototype.getCanvasStylByStage = function (stage) {
        var size = stage.stageSize(this.getContainersSize());
        var color = stage.stageBackgroundColor(this.getContainersSize());
        var pos = stage.stagePosition(this.getContainersSize(), size);
        return { position: pos, color: color, size: size };
    };
    Controller.prototype.refresh = function () {
        var _this = this;
        this.time = Date.now() - this.timeStamp;
        //通知每个舞台刷新
        this.stageList.forEach(function (stage) {
            // console.log(1)
            stage.refresh(_this.time);
        });
    };
    /**
     * 暂停
     */
    Controller.prototype.pause = function () {
        if (!this.pauseStatus) {
            this.pauseStatus = true;
        }
    };
    /**
     * 播放
     */
    Controller.prototype.start = function () {
        if (this.pauseStatus) {
            //同步时间
            this.timeStamp = Date.now() - this.time;
            this.pauseStatus = false;
        }
    };
    /**
     * 跳转
     */
    Controller.prototype.skip = function (time) {
        if (this.pauseStatus) {
            //如果是暂停状态
            this.time = time;
        }
        else {
            //否则使用这个方法
            this.timeStamp = Date.now() - time;
        }
    };
    /**
     * 重置整个系统
     */
    Controller.prototype.reset = function () {
        //清空所有舞台
        this.stageList.forEach(function (stage) {
            stage.reset();
        });
        this.pauseStatus = true;
        this.timeStamp = 0;
        this.time = 0;
        this.skipStatus = false;
    };
    Controller.prototype.getTime = function () {
        return this.time;
    };
    Controller.prototype.addGetDanmakuFunction = function (type, fun) {
        this.danmakuFunction[type] = fun;
    };
    Controller.prototype.resetDanmaku = function (type) {
        if (this.stageList[type]) {
            var stage_1 = this.stageList[type];
            stage_1.getTimeLine().reset();
            var lineType = stage_1.timeLineType();
            var fun = this.danmakuFunction[lineType];
            if (!!fun) {
                fun(function (res) {
                    var parser = new _Factory_DanmakuParser_JsonDanmakuParser__WEBPACK_IMPORTED_MODULE_5__.JsonDanmakuParser();
                    var timeline = stage_1.getTimeLine();
                    parser.parser(res).forEach(function (danmaku) {
                        timeline.addDanmaku(danmaku);
                    });
                });
            }
        }
    };
    return Controller;
}());



/***/ }),

/***/ "./src/ts/Factory/AnimationFactory.ts":
/*!********************************************!*\
  !*** ./src/ts/Factory/AnimationFactory.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationFactory": () => (/* binding */ AnimationFactory)
/* harmony export */ });
/* harmony import */ var _interface_Danmaku_Animation_GroupAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interface/Danmaku/Animation/GroupAnimations */ "./src/ts/interface/Danmaku/Animation/GroupAnimations.ts");
/* harmony import */ var _interface_Danmaku_Animation_ListAnimations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interface/Danmaku/Animation/ListAnimations */ "./src/ts/interface/Danmaku/Animation/ListAnimations.ts");
/* harmony import */ var _interface_Danmaku_Animation_RepeatAnimations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interface/Danmaku/Animation/RepeatAnimations */ "./src/ts/interface/Danmaku/Animation/RepeatAnimations.ts");
/* harmony import */ var _interface_Danmaku_Animation_RotationXAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interface/Danmaku/Animation/RotationXAnimation */ "./src/ts/interface/Danmaku/Animation/RotationXAnimation.ts");
/* harmony import */ var _interface_Danmaku_Animation_RotationYAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interface/Danmaku/Animation/RotationYAnimation */ "./src/ts/interface/Danmaku/Animation/RotationYAnimation.ts");
/* harmony import */ var _interface_Danmaku_Animation_RotationZAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interface/Danmaku/Animation/RotationZAnimation */ "./src/ts/interface/Danmaku/Animation/RotationZAnimation.ts");
/* harmony import */ var _interface_Danmaku_Animation_ScaleAnimations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interface/Danmaku/Animation/ScaleAnimations */ "./src/ts/interface/Danmaku/Animation/ScaleAnimations.ts");
/* harmony import */ var _interface_Danmaku_Animation_StaticAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../interface/Danmaku/Animation/StaticAnimation */ "./src/ts/interface/Danmaku/Animation/StaticAnimation.ts");
/* harmony import */ var _interface_Danmaku_Animation_TranslateAnimation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../interface/Danmaku/Animation/TranslateAnimation */ "./src/ts/interface/Danmaku/Animation/TranslateAnimation.ts");









var AnimationFactory = /** @class */ (function () {
    function AnimationFactory() {
    }
    AnimationFactory.getAnimations = function (type, params) {
        if (this.animationList[type]) {
            // console.log(params);
            var ani = new this.animationList[type]();
            // console.log(ani);
            ani.setParams(params);
            return ani;
        }
        return false;
    };
    AnimationFactory.getAnimationsList = function (list) {
        var _this = this;
        var animationList = [];
        list === null || list === void 0 ? void 0 : list.forEach(function (val) {
            var ani = _this.getAnimations(val["type"], val);
            if (ani) {
                animationList.push(ani);
            }
        });
        return animationList;
    };
    AnimationFactory.animationList = {
        "static": _interface_Danmaku_Animation_StaticAnimation__WEBPACK_IMPORTED_MODULE_7__.default,
        "translate": _interface_Danmaku_Animation_TranslateAnimation__WEBPACK_IMPORTED_MODULE_8__.TranslateAnimation,
        "rotateX": _interface_Danmaku_Animation_RotationXAnimation__WEBPACK_IMPORTED_MODULE_3__.RotationXAnimation,
        "rotateY": _interface_Danmaku_Animation_RotationYAnimation__WEBPACK_IMPORTED_MODULE_4__.RotationYAnimation,
        "rotateZ": _interface_Danmaku_Animation_RotationZAnimation__WEBPACK_IMPORTED_MODULE_5__.RotationZAnimation,
        "scale": _interface_Danmaku_Animation_ScaleAnimations__WEBPACK_IMPORTED_MODULE_6__.ScaleAnimations,
        "list": _interface_Danmaku_Animation_ListAnimations__WEBPACK_IMPORTED_MODULE_1__.ListAnimations,
        "group": _interface_Danmaku_Animation_GroupAnimations__WEBPACK_IMPORTED_MODULE_0__.GroupAnimations,
        "repeat": _interface_Danmaku_Animation_RepeatAnimations__WEBPACK_IMPORTED_MODULE_2__.RepeatAnimations //重复动画
    };
    return AnimationFactory;
}());



/***/ }),

/***/ "./src/ts/Factory/DanmakuParser/DanmakuFactory.ts":
/*!********************************************************!*\
  !*** ./src/ts/Factory/DanmakuParser/DanmakuFactory.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DanmakuFactory": () => (/* binding */ DanmakuFactory)
/* harmony export */ });
/* harmony import */ var src_ts_interface_Danmaku_BaseDanmaku__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/ts/interface/Danmaku/BaseDanmaku */ "./src/ts/interface/Danmaku/BaseDanmaku.ts");

var DanmakuFactory = /** @class */ (function () {
    function DanmakuFactory() {
    }
    DanmakuFactory.getDanmakuInstance = function (type) {
        if (!this.list[type]) {
            type = "text";
        }
        return new this.list[type]();
    };
    DanmakuFactory.list = {
        "text": src_ts_interface_Danmaku_BaseDanmaku__WEBPACK_IMPORTED_MODULE_0__.BaseDanmaku
    };
    return DanmakuFactory;
}());



/***/ }),

/***/ "./src/ts/Factory/DanmakuParser/JsonDanmakuParser.ts":
/*!***********************************************************!*\
  !*** ./src/ts/Factory/DanmakuParser/JsonDanmakuParser.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonDanmakuParser": () => (/* binding */ JsonDanmakuParser)
/* harmony export */ });
/* harmony import */ var src_ts_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/ts/i18n */ "./src/ts/i18n/index.ts");
/* harmony import */ var _AnimationFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AnimationFactory */ "./src/ts/Factory/AnimationFactory.ts");
/* harmony import */ var _DanmakuFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DanmakuFactory */ "./src/ts/Factory/DanmakuParser/DanmakuFactory.ts");



var JsonDanmakuParser = /** @class */ (function () {
    function JsonDanmakuParser() {
    }
    JsonDanmakuParser.prototype.parser = function (content) {
        try {
            var json = JSON.parse(content);
            return this.getDanmaku(json);
        }
        catch (e) {
            console.warn(src_ts_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.t("Danmaku parser fail"));
            console.warn(e);
            return [];
        }
    };
    JsonDanmakuParser.prototype.getDanmaku = function (obj) {
        var _this = this;
        var list = [];
        obj === null || obj === void 0 ? void 0 : obj.forEach(function (dan) {
            var danmaku = _DanmakuFactory__WEBPACK_IMPORTED_MODULE_2__.DanmakuFactory.getDanmakuInstance(dan.type);
            if (!(dan === null || dan === void 0 ? void 0 : dan.animations)) {
                dan.animations = [{ type: "static" }];
            }
            danmaku.setParams({
                start: dan === null || dan === void 0 ? void 0 : dan.start,
                content: dan === null || dan === void 0 ? void 0 : dan.content,
                style: dan === null || dan === void 0 ? void 0 : dan.style,
                animation: _AnimationFactory__WEBPACK_IMPORTED_MODULE_1__.AnimationFactory.getAnimations("list", { animations: dan === null || dan === void 0 ? void 0 : dan.animations }),
                child: _this.getDanmaku(dan.childs)
            });
            list.push(danmaku);
        });
        return list;
    };
    return JsonDanmakuParser;
}());



/***/ }),

/***/ "./src/ts/Factory/RendererFactory.ts":
/*!*******************************************!*\
  !*** ./src/ts/Factory/RendererFactory.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RendererFactory": () => (/* binding */ RendererFactory)
/* harmony export */ });
/* harmony import */ var src_ts_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/ts/i18n */ "./src/ts/i18n/index.ts");
/* harmony import */ var src_ts_interface_Renderer_BaseRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/ts/interface/Renderer/BaseRenderer */ "./src/ts/interface/Renderer/BaseRenderer.ts");
/* harmony import */ var _interface_Renderer_CSS3Renderer_CSS3Renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interface/Renderer/CSS3Renderer/CSS3Renderer */ "./src/ts/interface/Renderer/CSS3Renderer/CSS3Renderer.ts");
/**
 * 简单渲染器工厂
 */



var RendererFactory = /** @class */ (function () {
    function RendererFactory() {
    }
    RendererFactory.getRenderInstance = function (type) {
        if (this.rendererList[type]) {
            return new this.rendererList[type]();
        }
        else {
            throw ReferenceError(src_ts_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.t("Renderer type is null"));
        }
    };
    RendererFactory.rendererList = {
        base: src_ts_interface_Renderer_BaseRenderer__WEBPACK_IMPORTED_MODULE_1__.BaseRenderer,
        css3: _interface_Renderer_CSS3Renderer_CSS3Renderer__WEBPACK_IMPORTED_MODULE_2__.CSS3Renderer
    };
    return RendererFactory;
}());



/***/ }),

/***/ "./src/ts/Factory/TimeLineFactort.ts":
/*!*******************************************!*\
  !*** ./src/ts/Factory/TimeLineFactort.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeLineFactory": () => (/* binding */ TimeLineFactory)
/* harmony export */ });
/* harmony import */ var _TimeLine_AdvancedLine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../TimeLine/AdvancedLine */ "./src/ts/TimeLine/AdvancedLine.ts");

var TimeLineFactory = /** @class */ (function () {
    function TimeLineFactory() {
    }
    TimeLineFactory.getTimeLine = function (type) {
        if (!this.list[type]) {
            type = "default";
        }
        return new this.list[type]();
    };
    TimeLineFactory.list = {
        "defult": _TimeLine_AdvancedLine__WEBPACK_IMPORTED_MODULE_0__.AdvancedLine,
        "advance": _TimeLine_AdvancedLine__WEBPACK_IMPORTED_MODULE_0__.AdvancedLine
    };
    return TimeLineFactory;
}());



/***/ }),

/***/ "./src/ts/TimeLine/AdvancedLine.ts":
/*!*****************************************!*\
  !*** ./src/ts/TimeLine/AdvancedLine.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdvancedLine": () => (/* binding */ AdvancedLine)
/* harmony export */ });
var AdvancedLine = /** @class */ (function () {
    function AdvancedLine() {
        /**
         * 上次获取时间(10ms)
         */
        this.lastTime = 0;
        /**
         * 时间轴,二维数组，一维是弹幕的开始10毫秒数，二维是此毫秒数下的弹幕集合
         * 注意：为了节省性能，最小单位时间是10ms，
         *       仅仅是数组下标是10ms，其余的都是按照ms计算的
         */
        this.danmakuList = [];
    }
    /**
     * 添加一个弹幕
     * @param danmaku
     * @param start
     * @param end
     */
    AdvancedLine.prototype.addDanmaku = function (danmaku, start, end) {
        start = start || danmaku.startTime();
        end = end || danmaku.getAnimation().getDuration() + start;
        var index = this.timeToIndex(start);
        if (!this.danmakuList[index]) {
            this.danmakuList[index] = [];
        }
        this.danmakuList[index].push({
            danmaku: danmaku,
            start: start,
            end: end
        });
    };
    /**
     * 时间转换
     * @param time
     * @returns
     */
    AdvancedLine.prototype.timeToIndex = function (time) {
        return Math.floor(time / 10);
    };
    AdvancedLine.prototype.getDanmakuList = function (time) {
        time = this.timeToIndex(time);
        //如果请求的时间超过了时间轴。。。
        if (time < 0) {
            return { skip: false, DanmakuList: [] };
        }
        var arr = [];
        var skip = false;
        if (this.lastTime <= time && time - this.lastTime < 5) {
            //正常播放情况,遍历期间的所有内容
            // console.log(this.lastTime);
            for (var a = this.lastTime; a < time; a++) {
                if (this.danmakuList[a]) {
                    // console.log(time);
                    arr.push.apply(arr, this.danmakuList[a]);
                }
            }
        }
        else {
            //否则说明播放发生了跳转，则遍历找到合适的内容
            //查找范围：在当前时间之前开始的，并且结束于当前时间之后的，
            //先找到之前开始的
            // console.log(time);
            for (var timeIndex = 0; timeIndex < time; timeIndex++) {
                if (!this.danmakuList[timeIndex]) {
                    continue; //当前时间不存在
                }
                //接着再查找当前时间之后结束的
                for (var l = 0; l < this.danmakuList.length; l++) {
                    if (this.danmakuList[timeIndex][l]
                        &&
                            this.timeToIndex(this.danmakuList[timeIndex][l].end)
                                > time) {
                        arr.push(this.danmakuList[timeIndex][l]);
                    }
                }
            }
            skip = true;
        }
        this.lastTime = time;
        return { skip: skip, DanmakuList: arr };
    };
    AdvancedLine.prototype.reset = function () {
        this.danmakuList = [];
        return true;
    };
    return AdvancedLine;
}());



/***/ }),

/***/ "./src/ts/i18n/index.ts":
/*!******************************!*\
  !*** ./src/ts/i18n/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i18n": () => (/* binding */ i18n)
/* harmony export */ });
/* harmony import */ var _Context_Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Context/Context */ "./src/ts/Context/Context.ts");
/* harmony import */ var _zh_cn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zh-cn */ "./src/ts/i18n/zh-cn.ts");


/**
 * i18n 国际化函数
 */
var i18n = /** @class */ (function () {
    function i18n() {
    }
    /**
     * 获取翻译，如果不存在，则返回自身
     * @param str 需要国际化的字符串
     * @returns 翻译结果
     */
    i18n.t = function (str) {
        //检查字符串是否存在
        if (this.tranTxt[this.language] && this.tranTxt[this.language][str]) {
            return this.tranTxt[this.language][str];
        }
        return str;
    };
    i18n.tranTxt = {
        "zh-cn": _zh_cn__WEBPACK_IMPORTED_MODULE_1__.default
    };
    /**
     * 当前语言
     */
    i18n.language = _Context_Context__WEBPACK_IMPORTED_MODULE_0__.Context.language;
    return i18n;
}());



/***/ }),

/***/ "./src/ts/i18n/zh-cn.ts":
/*!******************************!*\
  !*** ./src/ts/i18n/zh-cn.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    "Containers is null": "容器为空",
    "Start mount stage": "开始挂载舞台",
    "Renderer type is null": "没有找到合适的渲染器",
    "matrix3d param less than 16": "matrix3d 参数小于16个",
});


/***/ }),

/***/ "./src/ts/interface/Danmaku/Animation/Cubic.ts":
/*!*****************************************************!*\
  !*** ./src/ts/interface/Danmaku/Animation/Cubic.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cubic": () => (/* binding */ Cubic)
/* harmony export */ });
/**
 * 贝塞尔相关工具函数
 */
var Cubic = /** @class */ (function () {
    function Cubic(a, b, c, d) {
        this.px3 = 3 * a;
        this.px2 = 3 * (c - a) - this.px3;
        this.px1 = 1 - this.px3 - this.px2;
        this.py3 = 3 * b;
        this.py2 = 3 * (d - b) - this.py3;
        this.py1 = 1 - this.py3 - this.py2;
        this.epsilon = 1e-7; // 目标精度
    }
    Cubic.prototype.getX = function (t) {
        return ((this.px1 * t + this.px2) * t + this.px3) * t;
    };
    Cubic.prototype.getY = function (t) {
        return ((this.py1 * t + this.py2) * t + this.py3) * t;
    };
    Cubic.prototype.solve = function (x) {
        if (x === 0 || x === 1) { // 对 0 和 1 两个特殊 t 不做计算
            return this.getY(x);
        }
        var t = x;
        for (var i = 0; i < 8; i++) { // 进行 8 次迭代
            var g = this.getX(t) - x;
            if (Math.abs(g) < this.epsilon) { // 检测误差到可以接受的范围
                return this.getY(t);
            }
            var d = (3 * this.px1 * t + 2 * this.px2) * t + this.px3; // 对 x 求导
            if (Math.abs(d) < 1e-6) { // 如果梯度过低，说明牛顿迭代法无法达到更高精度
                break;
            }
            t = t - g / d;
        }
        return this.getY(t); // 对得到的近似 t 求 y
    };
    return Cubic;
}());



/***/ }),

/***/ "./src/ts/interface/Danmaku/Animation/CubicAnimations.ts":
/*!***************************************************************!*\
  !*** ./src/ts/interface/Danmaku/Animation/CubicAnimations.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CubicAnimations": () => (/* binding */ CubicAnimations)
/* harmony export */ });
/* harmony import */ var _Cubic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cubic */ "./src/ts/interface/Danmaku/Animation/Cubic.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};

/**
 * 贝塞尔动画类
 */
var CubicAnimations = /** @class */ (function () {
    function CubicAnimations() {
        /**
         * 贝塞尔参数
         */
        this.cubic = [0, 0, 1, 1];
        /**
         * 动画总时间
         */
        this.duration = 1;
    }
    //currentTime:number = 0
    CubicAnimations.prototype.getMatrix = function (time) {
        if (this.isEnd(time))
            return false;
        var p = this.getProgress(time);
        var a = this.getMatrixForCubic(p, this.duration * p);
        return a;
    };
    CubicAnimations.prototype.getStyle = function (time) {
        if (this.isEnd(time))
            return false;
        var p = this.getProgress(time);
        return this.getCubicStyle(p, this.duration * p);
    };
    CubicAnimations.prototype.setParams = function (param) {
        this.cubic = (param === null || param === void 0 ? void 0 : param.cubic) ? param === null || param === void 0 ? void 0 : param.cubic : this.cubic;
        this.duration = (param === null || param === void 0 ? void 0 : param.duration) ? param === null || param === void 0 ? void 0 : param.duration : this.duration;
        return true;
    };
    CubicAnimations.prototype.getDuration = function () {
        return this.duration;
    };
    /**
     * 根据动画时间获取动画进度
     * @param time 动画时间
     * @returns
     */
    CubicAnimations.prototype.getProgress = function (time) {
        //计算当前动画进度
        var progress = time / this.duration;
        // console.log(progress);
        // console.log();
        //计算出实际动画进度
        var a = this.getCubic().solve(progress);
        // console.log(a);
        return a;
    };
    /**
     * 根据进度返回区间内的值
     * @param start
     * @param end
     * @param progress
     */
    CubicAnimations.prototype.getProgressValue = function (start, end, progress) {
        return start + (end - start) * progress;
    };
    /**
     * 判断动画是否结束
     */
    CubicAnimations.prototype.isEnd = function (time) {
        return time > this.duration;
    };
    /**
     * 获取贝塞尔函数
     * @returns
     */
    CubicAnimations.prototype.getCubic = function () {
        if (!this.cubicFunc) {
            this.cubicFunc = new (_Cubic__WEBPACK_IMPORTED_MODULE_0__.Cubic.bind.apply(_Cubic__WEBPACK_IMPORTED_MODULE_0__.Cubic, __spreadArray([void 0], this.cubic)))();
        }
        return this.cubicFunc;
    };
    return CubicAnimations;
}());



/***/ }),

/***/ "./src/ts/interface/Danmaku/Animation/GroupAnimations.ts":
/*!***************************************************************!*\
  !*** ./src/ts/interface/Danmaku/Animation/GroupAnimations.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GroupAnimations": () => (/* binding */ GroupAnimations)
/* harmony export */ });
/* harmony import */ var src_ts_Factory_AnimationFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/ts/Factory/AnimationFactory */ "./src/ts/Factory/AnimationFactory.ts");
/* harmony import */ var src_ts_util_deepMerge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/ts/util/deepMerge */ "./src/ts/util/deepMerge.ts");
/* harmony import */ var _CubicAnimations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CubicAnimations */ "./src/ts/interface/Danmaku/Animation/CubicAnimations.ts");
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Matrix */ "./src/ts/interface/Danmaku/Animation/Matrix.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * 动画组，用于多个动画并行播放
 */
var GroupAnimations = /** @class */ (function (_super) {
    __extends(GroupAnimations, _super);
    function GroupAnimations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animations = [];
        /**
         * 每个动画结束的累计矩阵
         */
        _this.cumulativeMatrix = [];
        return _this;
    }
    GroupAnimations.prototype.setParams = function (param) {
        var _this = this;
        _super.prototype.setParams.call(this, param);
        this.animations = src_ts_Factory_AnimationFactory__WEBPACK_IMPORTED_MODULE_0__.AnimationFactory.getAnimationsList((param === null || param === void 0 ? void 0 : param.animations) || []);
        //计算出最大的动画时长
        this.animations.forEach(function (val, key) {
            var dur = val.getDuration();
            //计算最后一帧
            _this.cumulativeMatrix[key] = val.getMatrix(dur) || _Matrix__WEBPACK_IMPORTED_MODULE_3__.Matrix.getNullMatrix();
            if (dur > _this.duration) {
                //这里覆盖了父类的属性
                //实际上，只有父类的时长不够，才会被更新
                _this.duration = val.getDuration();
            }
        });
        return true;
    };
    GroupAnimations.prototype.getCubicStyle = function (_progress, time) {
        /**
         * 合并样式，由于样式的特殊性，如果存在冲突的样式，后面的会覆盖前面的
         */
        var style = { boxStyle: {}, fontStyle: {} };
        var noneStyle = true;
        for (var i = 0; i < this.animations.length; i++) {
            var style2 = this.animations[i].getStyle(time);
            if (style2) {
                noneStyle = false;
                style = (0,src_ts_util_deepMerge__WEBPACK_IMPORTED_MODULE_1__.deepMerge)(style, style2);
            }
        }
        if (noneStyle)
            return false;
        return style;
    };
    GroupAnimations.prototype.getMatrixForCubic = function (_progress, time) {
        //建立一个空白矩阵
        var arr = [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
        //倒着计算所有的矩阵
        for (var i = this.animations.length - 1; i >= 0; i--) {
            var matrix = this.animations[i].getMatrix(time);
            // console.log(matrix);
            if (matrix) {
                arr = _Matrix__WEBPACK_IMPORTED_MODULE_3__.Matrix.mult(arr, matrix);
            }
            else {
                arr = _Matrix__WEBPACK_IMPORTED_MODULE_3__.Matrix.mult(arr, this.cumulativeMatrix[i]);
            }
        }
        return arr;
    };
    return GroupAnimations;
}(_CubicAnimations__WEBPACK_IMPORTED_MODULE_2__.CubicAnimations));



/***/ }),

/***/ "./src/ts/interface/Danmaku/Animation/ListAnimations.ts":
/*!**************************************************************!*\
  !*** ./src/ts/interface/Danmaku/Animation/ListAnimations.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListAnimations": () => (/* binding */ ListAnimations)
/* harmony export */ });
/* harmony import */ var src_ts_Factory_AnimationFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/ts/Factory/AnimationFactory */ "./src/ts/Factory/AnimationFactory.ts");
/* harmony import */ var _CubicAnimations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CubicAnimations */ "./src/ts/interface/Danmaku/Animation/CubicAnimations.ts");
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Matrix */ "./src/ts/interface/Danmaku/Animation/Matrix.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



/**
 * 动画列表组，所有动画按顺序播放
 */
var ListAnimations = /** @class */ (function (_super) {
    __extends(ListAnimations, _super);
    function ListAnimations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animations = [];
        /**
         * 每个动画结束的累计矩阵
         */
        _this.cumulativeMatrix = [];
        _this.cumulativeTime = [];
        return _this;
    }
    ListAnimations.prototype.setParams = function (param) {
        var _this = this;
        _super.prototype.setParams.call(this, param);
        this.animations = src_ts_Factory_AnimationFactory__WEBPACK_IMPORTED_MODULE_0__.AnimationFactory.getAnimationsList((param === null || param === void 0 ? void 0 : param.animations) || []);
        var duration = 0;
        this.cumulativeMatrix[0] = _Matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix.getNullMatrix();
        this.cumulativeTime[0] = duration;
        this.animations.forEach(function (val, key) {
            var dur = val.getDuration();
            //自增1，因为0的结束帧的1的开头
            key++;
            //计算出每个动画结束后的矩阵叠加,传入持续时间以获得最后一帧动画
            var matrix = val.getMatrix(dur) || _Matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix.getNullMatrix();
            //叠加
            _this.cumulativeMatrix[key] =
                _Matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix.mult(matrix, _this.cumulativeMatrix[key - 1]);
            duration += dur;
            _this.cumulativeTime[key] = duration;
        });
        if (this.duration < duration) {
            this.duration = duration;
        }
        return true;
    };
    ListAnimations.prototype.getCubicStyle = function (_progress, time) {
        var curAnimation = this.getCurAnimation(time);
        if (curAnimation) {
            return curAnimation.animation.getStyle(time);
        }
        return false;
    };
    ListAnimations.prototype.getMatrixForCubic = function (_progress, time) {
        var curAnimation = this.getCurAnimation(time);
        if (curAnimation) {
            time = time - this.cumulativeTime[curAnimation.key];
            var mat = curAnimation.animation.getMatrix(time) || _Matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix.getNullMatrix();
            return _Matrix__WEBPACK_IMPORTED_MODULE_2__.Matrix.mult(mat, this.cumulativeMatrix[curAnimation.key]);
        }
        return false;
    };
    /**
     * 获取当前的动画元素,如果不存在则返回false
     */
    ListAnimations.prototype.getCurAnimation = function (time) {
        for (var i = this.animations.length - 1; i >= 0; i--) {
            var duration = this.cumulativeTime[i];
            if (time > duration) {
                return { key: i, animation: this.animations[i] };
            }
        }
        return false;
    };
    return ListAnimations;
}(_CubicAnimations__WEBPACK_IMPORTED_MODULE_1__.CubicAnimations));



/***/ }),

/***/ "./src/ts/interface/Danmaku/Animation/Matrix.ts":
/*!******************************************************!*\
  !*** ./src/ts/interface/Danmaku/Animation/Matrix.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Matrix": () => (/* binding */ Matrix)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
/**
 * 矩阵变换相关工具函数
 */
var Matrix = /** @class */ (function () {
    function Matrix() {
    }
    /**
     * 加法
     * @param a
     * @param b
     */
    Matrix.add = function (a, b) {
        var c = [];
        for (var i = 0; i < a.length; i++) {
            c[i] = a[i] + b[i];
        }
        return c;
    };
    /**
     * 减法
     * @param a
     * @param b
     * @returns
     */
    Matrix.sub = function (a, b) {
        var c = [];
        for (var i = 0; i < a.length; i++) {
            c[i] = a[i] - b[i];
        }
        return c;
    };
    Matrix.mult = function (a, b) {
        var a1 = this.tran(a);
        var b1 = this.tran(b);
        // 相乘约束
        if (a1[0].length !== b1.length) {
            throw new Error();
        }
        var m = a1.length;
        var p = a1[0].length;
        var n = b1[0].length;
        // 初始化 m*n 全 0 二维数组
        var c = new Array(m).fill(0).map(function () { return new Array(n).fill(0); });
        for (var i = 0; i < m; i++) {
            for (var j = 0; j < n; j++) {
                for (var k = 0; k < p; k++) {
                    c[i][j] += a1[i][k] * b1[k][j];
                }
            }
        }
        return __spreadArray(__spreadArray(__spreadArray(__spreadArray([], c[0]), c[1]), c[2]), c[3]);
    };
    /**
     * 将一维16位数组转换成4*4二维数组
     * @param a
     */
    Matrix.tran = function (a) {
        var arr = [];
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                var index = i * 4 + j;
                if (!arr[i])
                    arr[i] = [];
                arr[i][j] = a[index];
            }
        }
        return arr;
    };
    /**
     * 获得一个无效果的4x4矩阵
     */
    Matrix.getNullMatrix = function () {
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
    };
    return Matrix;
}());



/***/ }),

/***/ "./src/ts/interface/Danmaku/Animation/OriginAnimations.ts":
/*!****************************************************************!*\
  !*** ./src/ts/interface/Danmaku/Animation/OriginAnimations.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OriginAnimations": () => (/* binding */ OriginAnimations)
/* harmony export */ });
/* harmony import */ var _CubicAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CubicAnimations */ "./src/ts/interface/Danmaku/Animation/CubicAnimations.ts");
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Matrix */ "./src/ts/interface/Danmaku/Animation/Matrix.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * 可改变动画中心点的动画
 */
var OriginAnimations = /** @class */ (function (_super) {
    __extends(OriginAnimations, _super);
    function OriginAnimations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.origin = [0, 0, 0];
        return _this;
    }
    OriginAnimations.prototype.setParams = function (param) {
        if (!_super.prototype.setParams.call(this, param))
            return false;
        this.origin = (param === null || param === void 0 ? void 0 : param.origin) || this.origin;
        return true;
    };
    OriginAnimations.prototype.getMatrixForCubic = function (progress) {
        var arr = this.getMatrixForOrigin(progress);
        if (!arr)
            return false;
        arr = _Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix.mult([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            -this.origin[0], -this.origin[1], -this.origin[2], 1
        ], arr);
        return _Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix.mult(arr, [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            this.origin[0], this.origin[1], this.origin[2], 1
        ]);
    };
    return OriginAnimations;
}(_CubicAnimations__WEBPACK_IMPORTED_MODULE_0__.CubicAnimations));



/***/ }),

/***/ "./src/ts/interface/Danmaku/Animation/RepeatAnimations.ts":
/*!****************************************************************!*\
  !*** ./src/ts/interface/Danmaku/Animation/RepeatAnimations.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepeatAnimations": () => (/* binding */ RepeatAnimations)
/* harmony export */ });
/* harmony import */ var src_ts_Factory_AnimationFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/ts/Factory/AnimationFactory */ "./src/ts/Factory/AnimationFactory.ts");
/* harmony import */ var _CubicAnimations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CubicAnimations */ "./src/ts/interface/Danmaku/Animation/CubicAnimations.ts");
/* harmony import */ var _StaticAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StaticAnimation */ "./src/ts/interface/Danmaku/Animation/StaticAnimation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var RepeatAnimations = /** @class */ (function (_super) {
    __extends(RepeatAnimations, _super);
    function RepeatAnimations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 重复次数
         */
        _this.repeat = 1;
        return _this;
    }
    RepeatAnimations.prototype.getCubicStyle = function (_progress, time) {
        return this.animation.getStyle(this.getCurTime(time));
    };
    RepeatAnimations.prototype.getMatrixForCubic = function (_progress, time) {
        return this.animation.getMatrix(this.getCurTime(time));
    };
    RepeatAnimations.prototype.setParams = function (param) {
        _super.prototype.setParams.call(this, param);
        if (param === null || param === void 0 ? void 0 : param.animation) {
            this.animation = src_ts_Factory_AnimationFactory__WEBPACK_IMPORTED_MODULE_0__.AnimationFactory.getAnimations(param === null || param === void 0 ? void 0 : param.animation.type, param === null || param === void 0 ? void 0 : param.animation.params) || new _StaticAnimation__WEBPACK_IMPORTED_MODULE_2__.default();
        }
        else {
            this.animation = new _StaticAnimation__WEBPACK_IMPORTED_MODULE_2__.default();
        }
        console.log(this.animation);
        this.repeat = (param === null || param === void 0 ? void 0 : param.repeat) || this.repeat;
        this.animationTime = this.animation.getDuration();
        //覆盖父级存活时间 
        //计算方式 单个弹幕时间 X 弹幕重复次数
        this.duration = this.animationTime * this.repeat;
        console.log(this.duration);
        return true;
    };
    /**
     * 获得当前的弹幕时间
     */
    RepeatAnimations.prototype.getCurTime = function (time) {
        //取余
        return time % this.animationTime;
    };
    return RepeatAnimations;
}(_CubicAnimations__WEBPACK_IMPORTED_MODULE_1__.CubicAnimations));



/***/ }),

/***/ "./src/ts/interface/Danmaku/Animation/RotationAnimation.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/interface/Danmaku/Animation/RotationAnimation.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RotationAnimation": () => (/* binding */ RotationAnimation)
/* harmony export */ });
/* harmony import */ var _OriginAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OriginAnimations */ "./src/ts/interface/Danmaku/Animation/OriginAnimations.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * 旋转父类
 */
var RotationAnimation = /** @class */ (function (_super) {
    __extends(RotationAnimation, _super);
    function RotationAnimation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.angle = { start: 0, end: 360 };
        return _this;
    }
    RotationAnimation.prototype.setParams = function (param) {
        if (!_super.prototype.setParams.call(this, param))
            return false;
        this.angle = Object.assign(this.angle, param === null || param === void 0 ? void 0 : param.angle);
        return true;
    };
    RotationAnimation.prototype.getCubicStyle = function (_progress) {
        return false;
    };
    /**
     * 角度转弧度
     */
    RotationAnimation.prototype.A2R = function (a) {
        return a * (Math.PI / 180);
    };
    return RotationAnimation;
}(_OriginAnimations__WEBPACK_IMPORTED_MODULE_0__.OriginAnimations));



/***/ }),

/***/ "./src/ts/interface/Danmaku/Animation/RotationXAnimation.ts":
/*!******************************************************************!*\
  !*** ./src/ts/interface/Danmaku/Animation/RotationXAnimation.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RotationXAnimation": () => (/* binding */ RotationXAnimation)
/* harmony export */ });
/* harmony import */ var _RotationAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RotationAnimation */ "./src/ts/interface/Danmaku/Animation/RotationAnimation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * X轴旋转
 */
var RotationXAnimation = /** @class */ (function (_super) {
    __extends(RotationXAnimation, _super);
    function RotationXAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RotationXAnimation.prototype.getMatrixForOrigin = function (progress) {
        var angle = this.getProgressValue(this.angle.start, this.angle.end, progress);
        var sin = Math.sin(this.A2R(angle));
        var cos = Math.cos(this.A2R(angle));
        return [
            1, 0, 0, 0,
            0, cos, sin, 0,
            0, -sin, cos, 0,
            0, 0, 0, 1
        ];
    };
    return RotationXAnimation;
}(_RotationAnimation__WEBPACK_IMPORTED_MODULE_0__.RotationAnimation));



/***/ }),

/***/ "./src/ts/interface/Danmaku/Animation/RotationYAnimation.ts":
/*!******************************************************************!*\
  !*** ./src/ts/interface/Danmaku/Animation/RotationYAnimation.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RotationYAnimation": () => (/* binding */ RotationYAnimation)
/* harmony export */ });
/* harmony import */ var _RotationAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RotationAnimation */ "./src/ts/interface/Danmaku/Animation/RotationAnimation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * y轴旋转
 */
var RotationYAnimation = /** @class */ (function (_super) {
    __extends(RotationYAnimation, _super);
    function RotationYAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RotationYAnimation.prototype.getMatrixForOrigin = function (progress) {
        var angle = this.getProgressValue(this.angle.start, this.angle.end, progress);
        var sin = Math.sin(this.A2R(angle));
        var cos = Math.cos(this.A2R(angle));
        return [
            cos, 0, sin, 0,
            0, 1, 0, 0,
            -sin, 0, cos, 0,
            0, 0, 0, 1
        ];
    };
    return RotationYAnimation;
}(_RotationAnimation__WEBPACK_IMPORTED_MODULE_0__.RotationAnimation));



/***/ }),

/***/ "./src/ts/interface/Danmaku/Animation/RotationZAnimation.ts":
/*!******************************************************************!*\
  !*** ./src/ts/interface/Danmaku/Animation/RotationZAnimation.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RotationZAnimation": () => (/* binding */ RotationZAnimation)
/* harmony export */ });
/* harmony import */ var _RotationAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RotationAnimation */ "./src/ts/interface/Danmaku/Animation/RotationAnimation.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * z轴旋转
 */
var RotationZAnimation = /** @class */ (function (_super) {
    __extends(RotationZAnimation, _super);
    function RotationZAnimation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RotationZAnimation.prototype.getMatrixForOrigin = function (progress) {
        var angle = this.getProgressValue(this.angle.start, this.angle.end, progress);
        var sin = Math.sin(this.A2R(angle));
        var cos = Math.cos(this.A2R(angle));
        return [
            cos, sin, 0, 0,
            -sin, cos, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];
    };
    return RotationZAnimation;
}(_RotationAnimation__WEBPACK_IMPORTED_MODULE_0__.RotationAnimation));



/***/ }),

/***/ "./src/ts/interface/Danmaku/Animation/ScaleAnimations.ts":
/*!***************************************************************!*\
  !*** ./src/ts/interface/Danmaku/Animation/ScaleAnimations.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScaleAnimations": () => (/* binding */ ScaleAnimations)
/* harmony export */ });
/* harmony import */ var _OriginAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OriginAnimations */ "./src/ts/interface/Danmaku/Animation/OriginAnimations.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * 缩放动画
 */
var ScaleAnimations = /** @class */ (function (_super) {
    __extends(ScaleAnimations, _super);
    function ScaleAnimations() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scale = { x1: 1, y1: 1, z1: 1, x2: 1, y2: 1, z2: 1 };
        return _this;
    }
    ScaleAnimations.prototype.setParams = function (param) {
        if (!_super.prototype.setParams.call(this, param))
            return false;
        this.scale = Object.assign(this.scale, param === null || param === void 0 ? void 0 : param.scale);
        return true;
    };
    ScaleAnimations.prototype.getMatrixForOrigin = function (progress) {
        var x = this.getProgressValue(this.scale.x1, this.scale.x2, progress);
        var y = this.getProgressValue(this.scale.y1, this.scale.y2, progress);
        var z = this.getProgressValue(this.scale.z1, this.scale.z2, progress);
        var m = [
            x, 0, 0, 0,
            0, y, 0, 0,
            0, 0, z, 0,
            0, 0, 0, 1
        ];
        return m;
    };
    ScaleAnimations.prototype.getCubicStyle = function (progress) {
        return false;
    };
    return ScaleAnimations;
}(_OriginAnimations__WEBPACK_IMPORTED_MODULE_0__.OriginAnimations));



/***/ }),

/***/ "./src/ts/interface/Danmaku/Animation/StaticAnimation.ts":
/*!***************************************************************!*\
  !*** ./src/ts/interface/Danmaku/Animation/StaticAnimation.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * 静止动画 仅仅悬停在某一个位置一定时间
 */
var StaticAnimation = /** @class */ (function () {
    function StaticAnimation() {
        this.duration = 1000;
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    StaticAnimation.prototype.getDuration = function () {
        return this.duration;
    };
    StaticAnimation.prototype.setParams = function (param) {
        var def = 0;
        this.duration = (param === null || param === void 0 ? void 0 : param.duration) || this.duration;
        this.x = (param === null || param === void 0 ? void 0 : param.x) || def;
        this.y = (param === null || param === void 0 ? void 0 : param.y) || def;
        this.z = (param === null || param === void 0 ? void 0 : param.z) || def;
        return true;
    };
    StaticAnimation.prototype.getMatrix = function (time) {
        // console.log(time);
        if (time > this.duration)
            return false;
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            this.x, this.y, this.z, 1
        ];
    };
    StaticAnimation.prototype.getStyle = function () {
        return false;
    };
    return StaticAnimation;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StaticAnimation);


/***/ }),

/***/ "./src/ts/interface/Danmaku/Animation/TranslateAnimation.ts":
/*!******************************************************************!*\
  !*** ./src/ts/interface/Danmaku/Animation/TranslateAnimation.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateAnimation": () => (/* binding */ TranslateAnimation)
/* harmony export */ });
/* harmony import */ var _CubicAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CubicAnimations */ "./src/ts/interface/Danmaku/Animation/CubicAnimations.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TranslateAnimation = /** @class */ (function (_super) {
    __extends(TranslateAnimation, _super);
    function TranslateAnimation() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.path = { x1: 0, y1: 0, x2: 0, y2: 0, z1: 0, z2: 0 };
        return _this;
    }
    TranslateAnimation.prototype.setParams = function (param) {
        if (!_super.prototype.setParams.call(this, param))
            return false;
        this.path = Object.assign(this.path, param === null || param === void 0 ? void 0 : param.path);
        return true;
    };
    TranslateAnimation.prototype.getCubicStyle = function () {
        return false;
    };
    TranslateAnimation.prototype.getMatrixForCubic = function (progress) {
        // console.log(this.path);
        // console.log(progress);
        var x = this.getProgressValue(this.path.x1, this.path.x2, progress);
        var y = this.getProgressValue(this.path.y1, this.path.y2, progress);
        var z = this.getProgressValue(this.path.z1, this.path.z2, progress);
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            x, y, z, 1
        ];
    };
    return TranslateAnimation;
}(_CubicAnimations__WEBPACK_IMPORTED_MODULE_0__.CubicAnimations));



/***/ }),

/***/ "./src/ts/interface/Danmaku/BaseDanmaku.ts":
/*!*************************************************!*\
  !*** ./src/ts/interface/Danmaku/BaseDanmaku.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseDanmaku": () => (/* binding */ BaseDanmaku)
/* harmony export */ });
/* harmony import */ var _Animation_StaticAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animation/StaticAnimation */ "./src/ts/interface/Danmaku/Animation/StaticAnimation.ts");

/**
 * 基础弹幕类型
 */
var BaseDanmaku = /** @class */ (function () {
    function BaseDanmaku() {
        this.style = {};
        this.start = 0;
        this.content = "";
        this.child = [];
    }
    /**
     * 设置参数
     * @param param
     * @returns
     */
    BaseDanmaku.prototype.setParams = function (param) {
        //设置文字样式
        try {
            //设置开始时间
            (param === null || param === void 0 ? void 0 : param.start) && (this.start = param === null || param === void 0 ? void 0 : param.start);
            (param === null || param === void 0 ? void 0 : param.animation) && (this.animation = (param === null || param === void 0 ? void 0 : param.animation) || new _Animation_StaticAnimation__WEBPACK_IMPORTED_MODULE_0__.default());
            (param === null || param === void 0 ? void 0 : param.child) && (this.child = param.child);
            (param === null || param === void 0 ? void 0 : param.style) && (this.style = param === null || param === void 0 ? void 0 : param.style);
            (param === null || param === void 0 ? void 0 : param.content) && (this.content = param === null || param === void 0 ? void 0 : param.content);
        }
        catch (e) {
            console.warn(e);
            return false;
        }
        return true;
    };
    BaseDanmaku.prototype.getType = function () {
        return "base";
    };
    BaseDanmaku.prototype.getContent = function () {
        return this.content;
    };
    BaseDanmaku.prototype.getChild = function () {
        return this.child;
    };
    BaseDanmaku.prototype.getAnimation = function () {
        if (!this.animation) {
            this.animation = new _Animation_StaticAnimation__WEBPACK_IMPORTED_MODULE_0__.default();
        }
        return this.animation;
    };
    BaseDanmaku.prototype.getStyle = function () {
        return this.style;
    };
    BaseDanmaku.prototype.startTime = function () {
        return this.start;
    };
    return BaseDanmaku;
}());



/***/ }),

/***/ "./src/ts/interface/Renderer/BaseRenderer.ts":
/*!***************************************************!*\
  !*** ./src/ts/interface/Renderer/BaseRenderer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseRenderer": () => (/* binding */ BaseRenderer)
/* harmony export */ });
var BaseRenderer = /** @class */ (function () {
    function BaseRenderer() {
    }
    BaseRenderer.prototype.reset = function () {
        throw new Error("Method not implemented.");
    };
    BaseRenderer.prototype.addDanmaku = function (danmaku) {
        return false;
    };
    BaseRenderer.prototype.refresh = function () {
        return false;
    };
    BaseRenderer.prototype.setCanvasContainer = function (canvas) {
        this.canvas = canvas;
        return true;
    };
    BaseRenderer.prototype.updateCanvasStyle = function (style) {
        if (this.canvas) {
            this.canvas.style.width = style.size.width.string();
            this.canvas.style.height = style.size.height.string();
            this.canvas.style.left = style.position.x.string();
            this.canvas.style.top = style.position.y.string();
            this.canvas.style.backgroundColor = style.color.string();
            return true;
        }
        else {
            return false;
        }
    };
    return BaseRenderer;
}());



/***/ }),

/***/ "./src/ts/interface/Renderer/CSS3Renderer/CSS3Renderer.ts":
/*!****************************************************************!*\
  !*** ./src/ts/interface/Renderer/CSS3Renderer/CSS3Renderer.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSS3Renderer": () => (/* binding */ CSS3Renderer)
/* harmony export */ });
/* harmony import */ var src_ts_util_UnitTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/ts/util/UnitTools */ "./src/ts/util/UnitTools.ts");
/* harmony import */ var _Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Style/Unit/PxSize */ "./src/ts/interface/Style/Unit/PxSize.ts");
/* harmony import */ var _CssDanmakuObj__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CssDanmakuObj */ "./src/ts/interface/Renderer/CSS3Renderer/CssDanmakuObj.ts");



var CSS3Renderer = /** @class */ (function () {
    function CSS3Renderer() {
        this.canvasSize = {
            width: new _Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_1__.PxSize(1600),
            height: new _Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_1__.PxSize(900)
        };
        this.danmakuList = [];
    }
    CSS3Renderer.prototype.setCanvasContainer = function (canvas) {
        this.canvas = canvas;
        return true;
    };
    CSS3Renderer.prototype.updateCanvasStyle = function (style) {
        if (this.canvas) {
            this.canvas.style.width = this.canvasSize.width.string();
            this.canvas.style.height = this.canvasSize.height.string();
            this.canvas.style.left = src_ts_util_UnitTools__WEBPACK_IMPORTED_MODULE_0__.UnitTools.lengthSrting((style.size.width.length - this.canvasSize.width.length) / 2);
            this.canvas.style.top = src_ts_util_UnitTools__WEBPACK_IMPORTED_MODULE_0__.UnitTools.lengthSrting((style.size.height.length - this.canvasSize.height.length) / 2);
            this.canvas.style.backgroundColor = style.color.string();
            var r = void 0; //缩放大小
            if (style.size.width.length / style.size.height.length >= this.canvasSize.width.length / this.canvasSize.height.length) {
                //横向
                r = style.size.height.length / this.canvasSize.height.length;
            }
            else {
                //纵向
                r = style.size.width.length / this.canvasSize.width.length;
            }
            this.canvas.style.transform = "scale(" + r + "," + r + ")";
            return true;
        }
        else {
            return false;
        }
    };
    CSS3Renderer.prototype.addDanmaku = function (danmaku) {
        var _a;
        var _this = this;
        if (!this.canvas)
            return false;
        var danmakuobj = _CssDanmakuObj__WEBPACK_IMPORTED_MODULE_2__.DanmakuTool.recursionDanmaku([danmaku]);
        var eles = _CssDanmakuObj__WEBPACK_IMPORTED_MODULE_2__.DanmakuTool.recursionDiv(danmakuobj);
        eles.forEach(function (ele) {
            var _a;
            (_a = _this.canvas) === null || _a === void 0 ? void 0 : _a.appendChild(ele);
        });
        (_a = this.danmakuList).push.apply(_a, danmakuobj);
        // console.log(this.danmakuList);
        return true;
    };
    CSS3Renderer.prototype.refresh = function (time) {
        if (!this.canvas) {
            return false;
        }
        _CssDanmakuObj__WEBPACK_IMPORTED_MODULE_2__.DanmakuTool.recursionStyle(this.danmakuList, this.canvas, time);
        return true;
    };
    CSS3Renderer.prototype.reset = function () {
        //清空画布
        if (this.canvas) {
            this.canvas.innerHTML = "";
        }
        //清空数组
        this.danmakuList = [];
        return true;
    };
    return CSS3Renderer;
}());



/***/ }),

/***/ "./src/ts/interface/Renderer/CSS3Renderer/CssDanmakuObj.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/interface/Renderer/CSS3Renderer/CssDanmakuObj.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DanmakuTool": () => (/* binding */ DanmakuTool)
/* harmony export */ });
/* harmony import */ var src_ts_util_UnitTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/ts/util/UnitTools */ "./src/ts/util/UnitTools.ts");

var DanmakuTool = /** @class */ (function () {
    function DanmakuTool() {
    }
    /**
   * 递归构建弹幕对象
   * @param danmaku
   * @returns
   */
    DanmakuTool.recursionDanmaku = function (danmaku) {
        var _this = this;
        var danmakuobj = [];
        danmaku.forEach(function (danmaku) {
            var div = _this.createDiv(danmaku.getContent());
            _this.setStyle(div, danmaku.getStyle());
            var obj = {
                element: div,
                animation: danmaku.getAnimation(),
                style: danmaku.getStyle(),
                child: [],
                start: danmaku.startTime()
            };
            var child = danmaku.getChild();
            var childObj;
            if (child) {
                childObj = _this.recursionDanmaku(child);
            }
            obj.child = childObj;
            danmakuobj.push(obj);
        });
        return danmakuobj;
    };
    /**
     * 创建一个空div
     * @param content
     * @returns
     */
    DanmakuTool.createDiv = function (content) {
        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.top = "0px";
        div.style.left = "0px";
        div.innerText = content;
        return div;
    };
    /**
     * 递归构建element
     * @param danmakuobj
     * @returns
     */
    DanmakuTool.recursionDiv = function (danmakuobj) {
        var _this = this;
        var array = [];
        danmakuobj.forEach(function (item) {
            var element = item.element;
            if (item.child) {
                var eles = _this.recursionDiv(item.child);
                eles.forEach(function (ele) {
                    element.appendChild(ele);
                });
            }
            array.push(element);
        });
        return array;
    };
    /**
     * 将样式设置到元素中
     */
    DanmakuTool.setStyle = function (element, style) {
        Object.assign(element.style, style);
    };
    /**
     * 递归设置弹幕动画
     * @param danmaku
     */
    DanmakuTool.recursionStyle = function (danmaku, canvas, abstime, parentTime) {
        var _this = this;
        if (parentTime === void 0) { parentTime = 0; }
        danmaku.forEach(function (dan, key) {
            //更新弹幕样式
            var time = parentTime == 0 ? abstime - dan.start : parentTime - dan.start;
            // console.log(dan.animation);
            var sty;
            var max;
            if (sty = dan.animation.getStyle(time)) {
                _this.setStyle(dan.element, sty);
            }
            if (max = dan.animation.getMatrix(time)) {
                dan.element.style.transform = src_ts_util_UnitTools__WEBPACK_IMPORTED_MODULE_0__.UnitTools.Matrix3dString(max);
            }
            //如果都不存在，则表示动画已经完成，销毁元素
            //如果是子元素的情况，有可能存在弹幕未开始的情况
            if (!(sty || max)) {
                if (dan.element.parentElement) {
                    //从父元素删除节点
                    dan.element.parentElement.removeChild(dan.element);
                }
                else {
                    //否则从canvas里面删除
                    canvas.removeChild(dan.element);
                }
                //并且清空节点
                delete danmaku[key];
            }
            //递归
            _this.recursionStyle(dan.child, canvas, abstime, time);
        });
    };
    return DanmakuTool;
}());



/***/ }),

/***/ "./src/ts/interface/Stage/BaseStage.ts":
/*!*********************************************!*\
  !*** ./src/ts/interface/Stage/BaseStage.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseStage": () => (/* binding */ BaseStage)
/* harmony export */ });
/* harmony import */ var _Style_Unit_Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Style/Unit/Color */ "./src/ts/interface/Style/Unit/Color.ts");
/* harmony import */ var _Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Style/Unit/PxSize */ "./src/ts/interface/Style/Unit/PxSize.ts");
/* harmony import */ var src_ts_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/ts/i18n */ "./src/ts/i18n/index.ts");



var BaseStage = /** @class */ (function () {
    function BaseStage() {
    }
    BaseStage.prototype.stageSize = function (containersSize) {
        return {
            width: containersSize.width,
            height: containersSize.height
        };
    };
    BaseStage.prototype.stagePosition = function () {
        return {
            x: new _Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_1__.PxSize(0),
            y: new _Style_Unit_PxSize__WEBPACK_IMPORTED_MODULE_1__.PxSize(0)
        };
    };
    BaseStage.prototype.stageBackgroundColor = function () {
        return new _Style_Unit_Color__WEBPACK_IMPORTED_MODULE_0__.Color(0, 0, 0, 0);
    };
    BaseStage.prototype.stageRenderer = function (render) {
        this.renderer = render;
        return true;
    };
    BaseStage.prototype.getRenderer = function () {
        if (this.renderer) {
            return this.renderer;
        }
        else {
            throw ReferenceError(src_ts_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.t("renderer is null"));
        }
    };
    BaseStage.prototype.timeLine = function (timeLine) {
        this.timeLineObj = timeLine;
        return true;
    };
    BaseStage.prototype.refresh = function (time) {
        var _this = this;
        var _a, _b;
        if (!this.renderer)
            return false;
        var list;
        if (list = ((_a = this.timeLineObj) === null || _a === void 0 ? void 0 : _a.getDanmakuList(time)) || { skip: false, DanmakuList: [] }) {
            if (list.skip) {
                // console.log(list.skip);
                (_b = this.renderer) === null || _b === void 0 ? void 0 : _b.reset();
            }
            list.DanmakuList.forEach(function (val) {
                var _a;
                (_a = _this.renderer) === null || _a === void 0 ? void 0 : _a.addDanmaku(val.danmaku);
            });
        }
        this.renderer.refresh(time);
        return true;
    };
    BaseStage.prototype.rendererType = function () {
        return "css3";
    };
    BaseStage.prototype.timeLineType = function () {
        return "advance";
    };
    BaseStage.prototype.reset = function () {
        var _a;
        (_a = this === null || this === void 0 ? void 0 : this.renderer) === null || _a === void 0 ? void 0 : _a.reset();
        return true;
    };
    BaseStage.prototype.getTimeLine = function () {
        if (!this.timeLineObj) {
            throw ReferenceError(src_ts_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.t("Time line is null"));
        }
        return this.timeLineObj;
    };
    return BaseStage;
}());



/***/ }),

/***/ "./src/ts/interface/Stage/TestStage.ts":
/*!*********************************************!*\
  !*** ./src/ts/interface/Stage/TestStage.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestStage": () => (/* binding */ TestStage)
/* harmony export */ });
/* harmony import */ var _BaseStage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseStage */ "./src/ts/interface/Stage/BaseStage.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TestStage = /** @class */ (function (_super) {
    __extends(TestStage, _super);
    function TestStage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TestStage;
}(_BaseStage__WEBPACK_IMPORTED_MODULE_0__.BaseStage));



/***/ }),

/***/ "./src/ts/interface/Style/Unit/Color.ts":
/*!**********************************************!*\
  !*** ./src/ts/interface/Style/Unit/Color.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
/**
 * 颜色接口
 */
var Color = /** @class */ (function () {
    function Color(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    Color.prototype.string = function () {
        return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")";
    };
    /**
     * 获取预设颜色
     * @param color 颜色名称
     * @returns
     */
    Color.getColor = function (color) {
        if (this.color[color]) {
            return new (this.bind.apply(this, __spreadArray([void 0], this.color[color])))();
        }
        else {
            return new (this.bind.apply(this, __spreadArray([void 0], this.color["black"])))();
        }
    };
    /**
     * 常见颜色表
     */
    Color.color = {
        "black": [0, 0, 0, 1],
        "white": [255, 255, 255, 1],
        "red": [255, 0, 0, 1],
        "green": [0, 255, 0, 1],
        "blue": [0, 0, 255, 1],
        "pink": [255, 105, 108, 1],
        "yellow": [255, 255, 0, 1],
        "grey": [130, 130, 130, 1]
    };
    return Color;
}());



/***/ }),

/***/ "./src/ts/interface/Style/Unit/PxSize.ts":
/*!***********************************************!*\
  !*** ./src/ts/interface/Style/Unit/PxSize.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PxSize": () => (/* binding */ PxSize)
/* harmony export */ });
var PxSize = /** @class */ (function () {
    function PxSize(length) {
        this.length = length;
    }
    PxSize.prototype.string = function () {
        return this.length + "px";
    };
    return PxSize;
}());



/***/ }),

/***/ "./src/ts/util/UnitTools.ts":
/*!**********************************!*\
  !*** ./src/ts/util/UnitTools.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitTools": () => (/* binding */ UnitTools)
/* harmony export */ });
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../i18n */ "./src/ts/i18n/index.ts");

var UnitTools = /** @class */ (function () {
    function UnitTools() {
    }
    /**
     * 拼接带单位的长度字符串
     * @param num 长度
     * @returns
     */
    UnitTools.lengthSrting = function (num) {
        return num + "px";
    };
    /**
     * 拼接 Matrix3d() 字符串
     * @param arr 16位数字
     */
    UnitTools.Matrix3dString = function (arr) {
        if (arr.length != 16) {
            throw SyntaxError(_i18n__WEBPACK_IMPORTED_MODULE_0__.i18n.t("matrix3d param less than 16"));
        }
        return "Matrix3d(" + arr.join(",") + ")";
    };
    return UnitTools;
}());



/***/ }),

/***/ "./src/ts/util/deepMerge.ts":
/*!**********************************!*\
  !*** ./src/ts/util/deepMerge.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deepMerge": () => (/* binding */ deepMerge)
/* harmony export */ });
/**
 * 对象深度合并
 * @param obj1
 * @param obj2
 * @returns
 */
function deepMerge(obj1, obj2) {
    var key;
    for (key in obj2) {
        // 如果target(也就是obj1[key])存在，且是对象的话再去调用deepMerge，否则就是obj1[key]里面没这个对象，需要与obj2[key]合并
        // 如果obj2[key]没有值或者值不是对象，此时直接替换obj1[key]
        obj1[key] =
            obj1[key] &&
                obj1[key].toString() === "[object Object]" &&
                (obj2[key] && obj2[key].toString() === "[object Object]")
                ? deepMerge(obj1[key], obj2[key])
                : (obj1[key] = obj2[key]);
    }
    return obj1;
}


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_base_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/base.css */ "./src/css/base.css");
/* harmony import */ var _Controller_Controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Controller/Controller */ "./src/ts/Controller/Controller.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ "./src/ts/i18n/index.ts");
/* harmony import */ var _interface_Stage_TestStage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface/Stage/TestStage */ "./src/ts/interface/Stage/TestStage.ts");




var MfunsDanMaku = /** @class */ (function () {
    function MfunsDanMaku() {
    }
    MfunsDanMaku.prototype.main = function (config) {
        var _this = this;
        //类型检查
        if (!config.containers) {
            throw ReferenceError(_i18n__WEBPACK_IMPORTED_MODULE_2__.i18n.t("Containers is null"));
        }
        this.controller = new _Controller_Controller__WEBPACK_IMPORTED_MODULE_1__.Controller(config.containers);
        this.controller.addGetDanmakuFunction("advance", config.danmaku);
        this.controller.registStage(new _interface_Stage_TestStage__WEBPACK_IMPORTED_MODULE_3__.TestStage(), 1);
        this.controller.mount();
        //监听大小变化
        window.addEventListener("resize", function () {
            _this.controller.resize();
        });
    };
    MfunsDanMaku.prototype.pause = function () {
        this.controller.pause();
    };
    MfunsDanMaku.prototype.start = function () {
        this.controller.start();
    };
    MfunsDanMaku.prototype.skip = function (time) {
        this.controller.skip(time);
    };
    MfunsDanMaku.prototype.time = function () {
        return this.controller.getTime();
    };
    MfunsDanMaku.prototype.reset = function () {
        this.controller.resetDanmaku(1);
        this.controller.reset();
    };
    return MfunsDanMaku;
}());
//添加进全局
if (globalThis) {
    globalThis.MfunsDanMaku = MfunsDanMaku;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MfunsDanMaku);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYW5tYWt1Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kYW5tYWt1Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZGFubWFrdS8uL3NyYy9jc3MvYmFzZS5jc3MiLCJ3ZWJwYWNrOi8vZGFubWFrdS8uL3NyYy9jc3MvYmFzZS5jc3M/NmI2YyIsIndlYnBhY2s6Ly9kYW5tYWt1Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Rhbm1ha3UvLi9zcmMvdHMvQ29udGV4dC9Db250ZXh0LnRzIiwid2VicGFjazovL2Rhbm1ha3UvLi9zcmMvdHMvQ29udHJvbGxlci9Db250cm9sbGVyLnRzIiwid2VicGFjazovL2Rhbm1ha3UvLi9zcmMvdHMvRmFjdG9yeS9BbmltYXRpb25GYWN0b3J5LnRzIiwid2VicGFjazovL2Rhbm1ha3UvLi9zcmMvdHMvRmFjdG9yeS9EYW5tYWt1UGFyc2VyL0Rhbm1ha3VGYWN0b3J5LnRzIiwid2VicGFjazovL2Rhbm1ha3UvLi9zcmMvdHMvRmFjdG9yeS9EYW5tYWt1UGFyc2VyL0pzb25EYW5tYWt1UGFyc2VyLnRzIiwid2VicGFjazovL2Rhbm1ha3UvLi9zcmMvdHMvRmFjdG9yeS9SZW5kZXJlckZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vZGFubWFrdS8uL3NyYy90cy9GYWN0b3J5L1RpbWVMaW5lRmFjdG9ydC50cyIsIndlYnBhY2s6Ly9kYW5tYWt1Ly4vc3JjL3RzL1RpbWVMaW5lL0FkdmFuY2VkTGluZS50cyIsIndlYnBhY2s6Ly9kYW5tYWt1Ly4vc3JjL3RzL2kxOG4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZGFubWFrdS8uL3NyYy90cy9pMThuL3poLWNuLnRzIiwid2VicGFjazovL2Rhbm1ha3UvLi9zcmMvdHMvaW50ZXJmYWNlL0Rhbm1ha3UvQW5pbWF0aW9uL0N1YmljLnRzIiwid2VicGFjazovL2Rhbm1ha3UvLi9zcmMvdHMvaW50ZXJmYWNlL0Rhbm1ha3UvQW5pbWF0aW9uL0N1YmljQW5pbWF0aW9ucy50cyIsIndlYnBhY2s6Ly9kYW5tYWt1Ly4vc3JjL3RzL2ludGVyZmFjZS9EYW5tYWt1L0FuaW1hdGlvbi9Hcm91cEFuaW1hdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZGFubWFrdS8uL3NyYy90cy9pbnRlcmZhY2UvRGFubWFrdS9BbmltYXRpb24vTGlzdEFuaW1hdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZGFubWFrdS8uL3NyYy90cy9pbnRlcmZhY2UvRGFubWFrdS9BbmltYXRpb24vTWF0cml4LnRzIiwid2VicGFjazovL2Rhbm1ha3UvLi9zcmMvdHMvaW50ZXJmYWNlL0Rhbm1ha3UvQW5pbWF0aW9uL09yaWdpbkFuaW1hdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZGFubWFrdS8uL3NyYy90cy9pbnRlcmZhY2UvRGFubWFrdS9BbmltYXRpb24vUmVwZWF0QW5pbWF0aW9ucy50cyIsIndlYnBhY2s6Ly9kYW5tYWt1Ly4vc3JjL3RzL2ludGVyZmFjZS9EYW5tYWt1L0FuaW1hdGlvbi9Sb3RhdGlvbkFuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly9kYW5tYWt1Ly4vc3JjL3RzL2ludGVyZmFjZS9EYW5tYWt1L0FuaW1hdGlvbi9Sb3RhdGlvblhBbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vZGFubWFrdS8uL3NyYy90cy9pbnRlcmZhY2UvRGFubWFrdS9BbmltYXRpb24vUm90YXRpb25ZQW5pbWF0aW9uLnRzIiwid2VicGFjazovL2Rhbm1ha3UvLi9zcmMvdHMvaW50ZXJmYWNlL0Rhbm1ha3UvQW5pbWF0aW9uL1JvdGF0aW9uWkFuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly9kYW5tYWt1Ly4vc3JjL3RzL2ludGVyZmFjZS9EYW5tYWt1L0FuaW1hdGlvbi9TY2FsZUFuaW1hdGlvbnMudHMiLCJ3ZWJwYWNrOi8vZGFubWFrdS8uL3NyYy90cy9pbnRlcmZhY2UvRGFubWFrdS9BbmltYXRpb24vU3RhdGljQW5pbWF0aW9uLnRzIiwid2VicGFjazovL2Rhbm1ha3UvLi9zcmMvdHMvaW50ZXJmYWNlL0Rhbm1ha3UvQW5pbWF0aW9uL1RyYW5zbGF0ZUFuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly9kYW5tYWt1Ly4vc3JjL3RzL2ludGVyZmFjZS9EYW5tYWt1L0Jhc2VEYW5tYWt1LnRzIiwid2VicGFjazovL2Rhbm1ha3UvLi9zcmMvdHMvaW50ZXJmYWNlL1JlbmRlcmVyL0Jhc2VSZW5kZXJlci50cyIsIndlYnBhY2s6Ly9kYW5tYWt1Ly4vc3JjL3RzL2ludGVyZmFjZS9SZW5kZXJlci9DU1MzUmVuZGVyZXIvQ1NTM1JlbmRlcmVyLnRzIiwid2VicGFjazovL2Rhbm1ha3UvLi9zcmMvdHMvaW50ZXJmYWNlL1JlbmRlcmVyL0NTUzNSZW5kZXJlci9Dc3NEYW5tYWt1T2JqLnRzIiwid2VicGFjazovL2Rhbm1ha3UvLi9zcmMvdHMvaW50ZXJmYWNlL1N0YWdlL0Jhc2VTdGFnZS50cyIsIndlYnBhY2s6Ly9kYW5tYWt1Ly4vc3JjL3RzL2ludGVyZmFjZS9TdGFnZS9UZXN0U3RhZ2UudHMiLCJ3ZWJwYWNrOi8vZGFubWFrdS8uL3NyYy90cy9pbnRlcmZhY2UvU3R5bGUvVW5pdC9Db2xvci50cyIsIndlYnBhY2s6Ly9kYW5tYWt1Ly4vc3JjL3RzL2ludGVyZmFjZS9TdHlsZS9Vbml0L1B4U2l6ZS50cyIsIndlYnBhY2s6Ly9kYW5tYWt1Ly4vc3JjL3RzL3V0aWwvVW5pdFRvb2xzLnRzIiwid2VicGFjazovL2Rhbm1ha3UvLi9zcmMvdHMvdXRpbC9kZWVwTWVyZ2UudHMiLCJ3ZWJwYWNrOi8vZGFubWFrdS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kYW5tYWt1L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Rhbm1ha3Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Rhbm1ha3Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kYW5tYWt1L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGFubWFrdS8uL3NyYy90cy9pbmRleC50cyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwiY29uY2F0Iiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImRlZHVwZSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJsZW5ndGgiLCJpZCIsIl9pIiwicHVzaCIsIl9zbGljZWRUb0FycmF5IiwiYXJyIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIlR5cGVFcnJvciIsIm8iLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsIm4iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJjYWxsIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwibGVuIiwiYXJyMiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX2FyciIsIl9uIiwiX2QiLCJfZSIsInVuZGVmaW5lZCIsIl9zIiwibmV4dCIsImRvbmUiLCJ2YWx1ZSIsImVyciIsImlzQXJyYXkiLCJfaXRlbSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiXSwibWFwcGlu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RTtZQUM5QixLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRTtRQUM1QixDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0QsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO0lBQzNCLENBQUM7SUFDRCw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7SUFDM0IsQ0FBQztJQUNELDJCQUFJLEdBQUosVUFBSyxJQUFXO1FBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFDRCwyQkFBSSxHQUFKO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtJQUNwQyxDQUFDO0lBQ0QsNEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtJQUUzQixDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQUFDO0FBQ0QsT0FBTztBQUNQLElBQUksVUFBVSxFQUFFO0lBQ1osVUFBVSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7Q0FDMUM7QUFDRCxpRUFBZSxZQUFZLEVBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZGFubWFrdS1jb250YWluZXJze1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5kYW5tYWt1LWNvbnRhaW5lcnMgICp7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIC8qIHBlcnNwZWN0aXZlOiA3MDBweDsgKi9cXHJcXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcXHJcXG59XFxyXFxuLmRhbm1ha3UtY29udGFpbmVycyAuc3RhZ2V7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcGVyc3BlY3RpdmU6MTAwMHB4O1xcclxcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbn1cXHJcXG4uZGFubWFrdS1jb250YWluZXJzLWRlYnVnICp7XFxyXFxuICAgIC8qIG91dGxpbmU6IDFweCBzb2xpZCBibGFjazsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9iYXNlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kYW5tYWt1LWNvbnRhaW5lcnN7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLmRhbm1ha3UtY29udGFpbmVycyAgKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgLyogcGVyc3BlY3RpdmU6IDcwMHB4OyAqL1xcclxcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xcclxcbn1cXHJcXG4uZGFubWFrdS1jb250YWluZXJzIC5zdGFnZXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwZXJzcGVjdGl2ZToxMDAwcHg7XFxyXFxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XFxyXFxufVxcclxcbi5kYW5tYWt1LWNvbnRhaW5lcnMtZGVidWcgKntcXHJcXG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLyoqXHJcbiAqIOWFqOWxgOS4iuS4i+aWh1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENvbnRleHR7XHJcbiAgICAvKipcclxuICAgICAqIOW9k+WJjeivreiogFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGxhbmd1YWdlOnN0cmluZyA9IFwiemgtY25cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZGVidWcgPSB0cnVlO1xyXG59XHJcblxyXG4iLCJcclxuaW1wb3J0IHsgU2l6ZUludGVyZmFjZSB9IGZyb20gXCIuLi9pbnRlcmZhY2UvU3R5bGUvU2l6ZUludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBTdGFnZUludGVyZmFjZSB9IGZyb20gXCIuLi9pbnRlcmZhY2UvU3RhZ2UvU3RhZ2VJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9Db250ZXh0L0NvbnRleHRcIjtcclxuaW1wb3J0IHsgaTE4biB9IGZyb20gXCIuLi9pMThuXCI7XHJcbmltcG9ydCB7IGNhbnZhc1N0eWxlIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9TdHlsZS9DYW52YXNTdHlsZVwiO1xyXG5pbXBvcnQgeyBSZW5kZXJlckZhY3RvcnkgfSBmcm9tIFwic3JjL3RzL0ZhY3RvcnkvUmVuZGVyZXJGYWN0b3J5XCI7XHJcbmltcG9ydCB7IFB4U2l6ZSB9IGZyb20gXCIuLi9pbnRlcmZhY2UvU3R5bGUvVW5pdC9QeFNpemVcIjtcclxuaW1wb3J0IHsgVGltZUxpbmVGYWN0b3J5IH0gZnJvbSBcIi4uL0ZhY3RvcnkvVGltZUxpbmVGYWN0b3J0XCI7XHJcbmltcG9ydCB7IEpzb25EYW5tYWt1UGFyc2VyIH0gZnJvbSBcIi4uL0ZhY3RvcnkvRGFubWFrdVBhcnNlci9Kc29uRGFubWFrdVBhcnNlclwiO1xyXG5cclxuLyoqXHJcbiAqIOaOp+WItuWZqCDvvIznu5/kuIDnrqHnkIbmlbTkuKrlvLnluZXns7vnu59cclxuICog5Zyo6L+Z6YeM77yM5q+P56eN5by55bmV57G75Z6L6YO95Lya5b6X5Yiw5LiA5Liq6Iie5Y+w5a+56LGh77yM6L+b6KGM5riy5p+TXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgICAvKipcclxuICAgICAqIOeUu+W4g+WvueixoVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY29udGFpbmVyczogSFRNTEVsZW1lbnQ7XHJcbiAgICAvKipcclxuICAgICAqIOWunuaXtueahENzc+agt+W8j+ihqFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2FudmFzU3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb247XHJcbiAgICAvKipcclxuICAgICAqIOiInuWPsOWIl+ihqFxyXG4gICAgKi9cclxuICAgIHByb3RlY3RlZCBzdGFnZUxpc3Q6IFN0YWdlSW50ZXJmYWNlW10gPSBbXTtcclxuICAgIC8qKlxyXG4gICAgICog5pqC5YGc54q25oCBXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBwYXVzZVN0YXR1czogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAvKipcclxuICAgICAqIOaXtumXtOaIs1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgdGltZVN0YW1wOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7nmoTml7bpl7RcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHRpbWU6IG51bWJlciA9IDA7XHJcbiAgICAvKipcclxuICAgICAqIOi3s+i9rOeKtuaAgVxyXG4gICAgICovXHJcbiAgICBza2lwU3RhdHVzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJvdGVjdGVkIGRhbm1ha3VGdW5jdGlvbjogeyBbdHlwZTogc3RyaW5nXTogKHNlbmQ6IChzdHI6IHN0cmluZykgPT4gdm9pZCkgPT4gdm9pZCB9ID0ge31cclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcnM6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJzID0gY29udGFpbmVyc1xyXG4gICAgICAgIC8v6I635Y+W5a6e5pe255qEc3R5bGXlr7nosaHvvIzlvZPlpKflsI/lj5HnlJ/lj5jljJbml7bvvIzkvJrmm7TmlrDoh6rouqtcclxuICAgICAgICB0aGlzLmNhbnZhc1N0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY29udGFpbmVycyk7XHJcbiAgICAgICAgLy/liJ3lp4vljJblrrnlmahcclxuICAgICAgICB0aGlzLmluaXRDb250YWluZXIoKVxyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAoZnVuY3Rpb24gYW5pbWxvb3AoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoYXQucGF1c2VTdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVmcmVzaCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1sb29wKTtcclxuXHJcblxyXG4gICAgICAgIH0pKClcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5a655Zmo5bC65a+4XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRDb250YWluZXJzU2l6ZSgpOiBTaXplSW50ZXJmYWNlIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3aWR0aDogbmV3IFB4U2l6ZShwYXJzZUludCh0aGlzLmNhbnZhc1N0eWxlLndpZHRoKSksXHJcbiAgICAgICAgICAgIGhlaWdodDogbmV3IFB4U2l6ZShwYXJzZUludCh0aGlzLmNhbnZhc1N0eWxlLmhlaWdodCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIbkuIDkuKroiJ7lj7Dmt7vliqDliLDlrrnlmajlhoVcclxuICAgICAqIEBwYXJhbSBzdGFnZSDoiJ7lj7BcclxuICAgICAqIEBwYXJhbSBpbmRleCDmjpLliJfpobrluo9cclxuICAgICAqIEByZXR1cm5zIOaIkOWKn+S4juWksei0peeahOeKtuaAgVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVnaXN0U3RhZ2Uoc3RhZ2U6IFN0YWdlSW50ZXJmYWNlLCBpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy/mo4Dmn6XliJfooajkuK3mmK/lkKblrZjlnKhcclxuICAgICAgICBpZiAodGhpcy5zdGFnZUxpc3RbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdGFnZUxpc3RbaW5kZXhdID0gc3RhZ2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWwhuiInuWPsOaMgui9veWIsOWuueWZqOS4rVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbW91bnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKGkxOG4udChcIlN0YXJ0IG1vdW50IHN0YWdlXCIpKTtcclxuICAgICAgICAvL+mBjeWOhuavj+S4gOS4quiInuWPsFxyXG4gICAgICAgIHRoaXMuc3RhZ2VMaXN0LmZvckVhY2goKHN0YWdlLGtleSkgPT4ge1xyXG4gICAgICAgICAgICAvL+iOt+WPluS4gOS4qmRpdlxyXG4gICAgICAgICAgICBsZXQgZGl2ID0gdGhpcy5nZXRESVYoKVxyXG4gICAgICAgICAgICAvL+e7meiInuWPsOWIneWni+WMlua4suafk+WZqFxyXG4gICAgICAgICAgICBsZXQgcmVuZGVyID0gUmVuZGVyZXJGYWN0b3J5LmdldFJlbmRlckluc3RhbmNlKHN0YWdlLnJlbmRlcmVyVHlwZSgpKTtcclxuICAgICAgICAgICAgLy/lsIZkaXbmjILovb3liLDmuLLmn5PlmahcclxuICAgICAgICAgICAgcmVuZGVyLnNldENhbnZhc0NvbnRhaW5lcihkaXYpXHJcbiAgICAgICAgICAgIC8v6K6+572u6Iie5Y+w5riy5p+T5ZmoXHJcbiAgICAgICAgICAgIHN0YWdlLnN0YWdlUmVuZGVyZXIocmVuZGVyKTtcclxuICAgICAgICAgICAgLy/orr7nva7oiJ7lj7Dml7bpl7TovbRcclxuICAgICAgICAgICAgbGV0IGxpbmVUeXBlID0gc3RhZ2UudGltZUxpbmVUeXBlKClcclxuICAgICAgICAgICAgbGV0IHRpbWVsaW5lID0gVGltZUxpbmVGYWN0b3J5LmdldFRpbWVMaW5lKGxpbmVUeXBlKVxyXG4gICAgICAgICAgICBzdGFnZS50aW1lTGluZSh0aW1lbGluZSlcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGFubWFrdUZ1bmN0aW9uW2xpbmVUeXBlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXREYW5tYWt1KGtleSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihpMThuLnQoXCJkYW5tYWt1IGdldCBmdW5jdGlvbiBpcyBudWxsIDpcIiArIGxpbmVUeXBlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8v5pu05paw5riy5p+T5Zmo5YaF55S75biD5qC35byPXHJcbiAgICAgICAgICAgIHJlbmRlci51cGRhdGVDYW52YXNTdHlsZSh0aGlzLmdldENhbnZhc1N0eWxCeVN0YWdlKHN0YWdlKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJblvLnluZXlrrnlmahcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGluaXRDb250YWluZXIoKSB7XHJcbiAgICAgICAgaWYgKENvbnRleHQuZGVidWcpIHtcclxuICAgICAgICAgICAgLy9kZWJ1Z+aooeW8j1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcnMuY2xhc3NMaXN0LmFkZChcImRhbm1ha3UtY29udGFpbmVycy1kZWJ1Z1wiKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lcnMuY2xhc3NMaXN0LmFkZChcImRhbm1ha3UtY29udGFpbmVyc1wiKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmHjee9ruWwuuWvuFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVzaXplKCkge1xyXG4gICAgICAgIC8v6YeN572u6Iie5Y+w55qE5bC65a+4XHJcbiAgICAgICAgdGhpcy5zdGFnZUxpc3QuZm9yRWFjaCgoc3RhZ2UpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlbmRlciA9IHN0YWdlLmdldFJlbmRlcmVyKClcclxuICAgICAgICAgICAgaWYgKHJlbmRlcikge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyLnVwZGF0ZUNhbnZhc1N0eWxlKHRoaXMuZ2V0Q2FudmFzU3R5bEJ5U3RhZ2Uoc3RhZ2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7umRpduWuueWZqCBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGdldERJVigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJzdGFnZVwiKVxyXG4gICAgICAgIHRoaXMuY29udGFpbmVycy5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7oiJ7lj7Dlr7nosaHliJvlu7rkuIDkuKpjYW52YXNTdHlsZVxyXG4gICAgICogQHBhcmFtIHN0YWdlIOiInuWPsOWvueixoVxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXRDYW52YXNTdHlsQnlTdGFnZShzdGFnZTogU3RhZ2VJbnRlcmZhY2UpOiBjYW52YXNTdHlsZSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSBzdGFnZS5zdGFnZVNpemUodGhpcy5nZXRDb250YWluZXJzU2l6ZSgpKVxyXG4gICAgICAgIGxldCBjb2xvciA9IHN0YWdlLnN0YWdlQmFja2dyb3VuZENvbG9yKHRoaXMuZ2V0Q29udGFpbmVyc1NpemUoKSlcclxuICAgICAgICBsZXQgcG9zID0gc3RhZ2Uuc3RhZ2VQb3NpdGlvbih0aGlzLmdldENvbnRhaW5lcnNTaXplKCksIHNpemUpXHJcbiAgICAgICAgcmV0dXJuIHsgcG9zaXRpb246IHBvcywgY29sb3I6IGNvbG9yLCBzaXplOiBzaXplIH1cclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoKCkge1xyXG5cclxuICAgICAgICB0aGlzLnRpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy50aW1lU3RhbXBcclxuICAgICAgICAvL+mAmuefpeavj+S4quiInuWPsOWIt+aWsFxyXG4gICAgICAgIHRoaXMuc3RhZ2VMaXN0LmZvckVhY2goKHN0YWdlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKDEpXHJcbiAgICAgICAgICAgIHN0YWdlLnJlZnJlc2godGhpcy50aW1lKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmoLlgZxcclxuICAgICAqL1xyXG4gICAgcGF1c2UoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhdXNlU3RhdHVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF1c2VTdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhdXNlU3RhdHVzKSB7XHJcbiAgICAgICAgICAgIC8v5ZCM5q2l5pe26Ze0XHJcbiAgICAgICAgICAgIHRoaXMudGltZVN0YW1wID0gRGF0ZS5ub3coKSAtIHRoaXMudGltZTtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZVN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6Lez6L2sXHJcbiAgICAgKi9cclxuICAgIHNraXAodGltZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGF1c2VTdGF0dXMpIHtcclxuICAgICAgICAgICAgLy/lpoLmnpzmmK/mmoLlgZznirbmgIFcclxuICAgICAgICAgICAgdGhpcy50aW1lID0gdGltZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+WQpuWImeS9v+eUqOi/meS4quaWueazlVxyXG4gICAgICAgICAgICB0aGlzLnRpbWVTdGFtcCA9IERhdGUubm93KCkgLSB0aW1lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDph43nva7mlbTkuKrns7vnu59cclxuICAgICAqL1xyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgLy/muIXnqbrmiYDmnInoiJ7lj7BcclxuICAgICAgICB0aGlzLnN0YWdlTGlzdC5mb3JFYWNoKChzdGFnZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGFnZS5yZXNldCgpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnBhdXNlU3RhdHVzID0gdHJ1ZVxyXG4gICAgICAgIHRoaXMudGltZVN0YW1wID0gMFxyXG4gICAgICAgIHRoaXMudGltZSA9IDBcclxuICAgICAgICB0aGlzLnNraXBTdGF0dXMgPSBmYWxzZVxyXG4gICAgfVxyXG4gICAgZ2V0VGltZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50aW1lXHJcbiAgICB9XHJcbiAgICBhZGRHZXREYW5tYWt1RnVuY3Rpb24odHlwZTogc3RyaW5nLCBmdW46IChzZW5kOiAoc3RyOiBzdHJpbmcpID0+IHZvaWQpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmRhbm1ha3VGdW5jdGlvblt0eXBlXSA9IGZ1blxyXG4gICAgfVxyXG4gICAgcmVzZXREYW5tYWt1KHR5cGU6bnVtYmVyKXtcclxuICAgICAgICBpZih0aGlzLnN0YWdlTGlzdFt0eXBlXSl7XHJcbiAgICAgICAgICAgIGxldCBzdGFnZSA9IHRoaXMuc3RhZ2VMaXN0W3R5cGVdXHJcbiAgICAgICAgICAgIHN0YWdlLmdldFRpbWVMaW5lKCkucmVzZXQoKTtcclxuICAgICAgICAgICAgbGV0IGxpbmVUeXBlID0gc3RhZ2UudGltZUxpbmVUeXBlKCk7XHJcbiAgICAgICAgICAgIGxldCBmdW4gPSB0aGlzLmRhbm1ha3VGdW5jdGlvbltsaW5lVHlwZV1cclxuICAgICAgICAgICAgaWYoISFmdW4pe1xyXG4gICAgICAgICAgICAgICAgZnVuKChyZXMpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnNlciA9IG5ldyBKc29uRGFubWFrdVBhcnNlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lbGluZSA9IHN0YWdlLmdldFRpbWVMaW5lKClcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZXIucGFyc2VyKHJlcykuZm9yRWFjaCgoZGFubWFrdSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lbGluZS5hZGREYW5tYWt1KGRhbm1ha3UpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQW5pbWF0aW9uSW50ZXJmYWNlIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9EYW5tYWt1L0FuaW1hdGlvbi9BbmltYXRpb25JbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgR3JvdXBBbmltYXRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9EYW5tYWt1L0FuaW1hdGlvbi9Hcm91cEFuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHsgTGlzdEFuaW1hdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlL0Rhbm1ha3UvQW5pbWF0aW9uL0xpc3RBbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IFJlcGVhdEFuaW1hdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlL0Rhbm1ha3UvQW5pbWF0aW9uL1JlcGVhdEFuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHsgUm90YXRpb25YQW5pbWF0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9EYW5tYWt1L0FuaW1hdGlvbi9Sb3RhdGlvblhBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgUm90YXRpb25ZQW5pbWF0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9EYW5tYWt1L0FuaW1hdGlvbi9Sb3RhdGlvbllBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgUm90YXRpb25aQW5pbWF0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9EYW5tYWt1L0FuaW1hdGlvbi9Sb3RhdGlvblpBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgU2NhbGVBbmltYXRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9EYW5tYWt1L0FuaW1hdGlvbi9TY2FsZUFuaW1hdGlvbnNcIjtcclxuaW1wb3J0IFN0YXRpY0FuaW1hdGlvbiBmcm9tIFwiLi4vaW50ZXJmYWNlL0Rhbm1ha3UvQW5pbWF0aW9uL1N0YXRpY0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVBbmltYXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlL0Rhbm1ha3UvQW5pbWF0aW9uL1RyYW5zbGF0ZUFuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbkZhY3Rvcnkge1xyXG4gICAgc3RhdGljIGFuaW1hdGlvbkxpc3QgPSB7XHJcbiAgICAgICAgXCJzdGF0aWNcIjpTdGF0aWNBbmltYXRpb24sLy/pnZnmgIHlrprkvY1cclxuICAgICAgICBcInRyYW5zbGF0ZVwiOlRyYW5zbGF0ZUFuaW1hdGlvbiwvL+W5s+enu1xyXG4gICAgICAgIFwicm90YXRlWFwiOlJvdGF0aW9uWEFuaW1hdGlvbiwvLyB46L205peL6L2sXHJcbiAgICAgICAgXCJyb3RhdGVZXCI6Um90YXRpb25ZQW5pbWF0aW9uLC8veei9tOaXi+i9rFxyXG4gICAgICAgIFwicm90YXRlWlwiOlJvdGF0aW9uWkFuaW1hdGlvbiwvL3rovbTml4vovaxcclxuICAgICAgICBcInNjYWxlXCI6U2NhbGVBbmltYXRpb25zLC8v57yp5pS+XHJcbiAgICAgICAgXCJsaXN0XCI6TGlzdEFuaW1hdGlvbnMsLy/liqjnlLvliJfooahcclxuICAgICAgICBcImdyb3VwXCI6R3JvdXBBbmltYXRpb25zLC8v5Yqo55S757uEXHJcbiAgICAgICAgXCJyZXBlYXRcIjpSZXBlYXRBbmltYXRpb25zLy/ph43lpI3liqjnlLtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QW5pbWF0aW9ucyh0eXBlOnN0cmluZyxwYXJhbXMpOkFuaW1hdGlvbkludGVyZmFjZSB8IGZhbHNle1xyXG4gICAgICAgIGlmKHRoaXMuYW5pbWF0aW9uTGlzdFt0eXBlXSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGxldCBhbmkgPSBuZXcgdGhpcy5hbmltYXRpb25MaXN0W3R5cGVdKClcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYW5pKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGFuaS5zZXRQYXJhbXMocGFyYW1zKVxyXG4gICAgICAgICAgICByZXR1cm4gYW5pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0QW5pbWF0aW9uc0xpc3QobGlzdDp7a2V5OiB7IFtpZHg6IHN0cmluZ106IGFueTsgfX1bXSk6QW5pbWF0aW9uSW50ZXJmYWNlW117XHJcbiAgICAgICAgbGV0IGFuaW1hdGlvbkxpc3Q6QW5pbWF0aW9uSW50ZXJmYWNlW10gPSBbXVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxpc3Q/LmZvckVhY2goKHZhbCk9PntcclxuICAgICAgICAgICAgbGV0IGFuaSA9ICB0aGlzLmdldEFuaW1hdGlvbnModmFsW1widHlwZVwiXSx2YWwpXHJcbiAgICAgICAgICAgIGlmKGFuaSl7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25MaXN0LnB1c2goYW5pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGFuaW1hdGlvbkxpc3RcclxuICAgIH1cclxufSIsImltcG9ydCB7IEJhc2VEYW5tYWt1IH0gZnJvbSBcInNyYy90cy9pbnRlcmZhY2UvRGFubWFrdS9CYXNlRGFubWFrdVwiO1xyXG5pbXBvcnQgeyBEYW5tYWt1SXRlbUludGVyZmFjZSB9IGZyb20gXCJzcmMvdHMvaW50ZXJmYWNlL0Rhbm1ha3UvRGFubWFrdUl0ZW1JbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEYW5tYWt1RmFjdG9yeXtcclxuICAgIHN0YXRpYyBsaXN0ID0ge1xyXG4gICAgICAgIFwidGV4dFwiOkJhc2VEYW5tYWt1XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0RGFubWFrdUluc3RhbmNlKHR5cGU6c3RyaW5nKTpEYW5tYWt1SXRlbUludGVyZmFjZXtcclxuICAgICAgICBpZighdGhpcy5saXN0W3R5cGVdKXtcclxuICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5saXN0W3R5cGVdKClcclxuICAgIH1cclxufSIsImltcG9ydCB7IGkxOG4gfSBmcm9tIFwic3JjL3RzL2kxOG5cIjtcclxuaW1wb3J0IHsgRGFubWFrdUl0ZW1JbnRlcmZhY2UgfSBmcm9tIFwic3JjL3RzL2ludGVyZmFjZS9EYW5tYWt1L0Rhbm1ha3VJdGVtSW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkZhY3RvcnkgfSBmcm9tIFwiLi4vQW5pbWF0aW9uRmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBEYW5tYWt1RmFjdG9yeSB9IGZyb20gXCIuL0Rhbm1ha3VGYWN0b3J5XCI7XHJcbmltcG9ydCB7IERhbm1ha3VQYXJzZXJJbnRlcmZhY2UgfSBmcm9tIFwiLi9EYW5tYWt1UGFyc2VySW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSnNvbkRhbm1ha3VQYXJzZXIgaW1wbGVtZW50cyBEYW5tYWt1UGFyc2VySW50ZXJmYWNlIHtcclxuXHJcbiAgICBwYXJzZXIoY29udGVudDogc3RyaW5nKTogRGFubWFrdUl0ZW1JbnRlcmZhY2VbXSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGpzb246IGFueVtdID0gSlNPTi5wYXJzZShjb250ZW50KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGFubWFrdShqc29uKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihpMThuLnQoXCJEYW5tYWt1IHBhcnNlciBmYWlsXCIpKVxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBbXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGFubWFrdShvYmo/OiBhbnlbXSk6RGFubWFrdUl0ZW1JbnRlcmZhY2VbXSB7XHJcbiAgICAgICAgbGV0IGxpc3Q6RGFubWFrdUl0ZW1JbnRlcmZhY2VbXSA9IFtdXHJcblxyXG4gICAgICAgIG9iaj8uZm9yRWFjaCgoZGFuKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgZGFubWFrdSA9IERhbm1ha3VGYWN0b3J5LmdldERhbm1ha3VJbnN0YW5jZShkYW4udHlwZSlcclxuICAgICAgICAgICAgaWYoIWRhbj8uYW5pbWF0aW9ucyl7XHJcbiAgICAgICAgICAgICAgICBkYW4uYW5pbWF0aW9ucyA9IFt7dHlwZTpcInN0YXRpY1wifV1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgZGFubWFrdS5zZXRQYXJhbXMoe1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IGRhbj8uc3RhcnQsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OmRhbj8uY29udGVudCxcclxuICAgICAgICAgICAgICAgIHN0eWxlOmRhbj8uc3R5bGUsXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IEFuaW1hdGlvbkZhY3RvcnkuZ2V0QW5pbWF0aW9ucyhcImxpc3RcIix7YW5pbWF0aW9uczpkYW4/LmFuaW1hdGlvbnN9KSwvL+WwhuWIl+ihqOe7hOaIkOS4gOS4qmxpc3RcclxuICAgICAgICAgICAgICAgIGNoaWxkOnRoaXMuZ2V0RGFubWFrdShkYW4uY2hpbGRzKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgbGlzdC5wdXNoKGRhbm1ha3UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcblxyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIOeugOWNlea4suafk+WZqOW3peWOglxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGkxOG4gfSBmcm9tIFwic3JjL3RzL2kxOG5cIjtcclxuaW1wb3J0IHsgQmFzZVJlbmRlcmVyIH0gZnJvbSBcInNyYy90cy9pbnRlcmZhY2UvUmVuZGVyZXIvQmFzZVJlbmRlcmVyXCI7XHJcbmltcG9ydCB7IFJlbmRlcmVySW50ZXJmYWNlIH0gZnJvbSBcInNyYy90cy9pbnRlcmZhY2UvUmVuZGVyZXIvUmVuZGVyZXJJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQ1NTM1JlbmRlcmVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZS9SZW5kZXJlci9DU1MzUmVuZGVyZXIvQ1NTM1JlbmRlcmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyZXJGYWN0b3J5e1xyXG4gICAgc3RhdGljIHJlbmRlcmVyTGlzdCA9IHtcclxuICAgICAgICBiYXNlOkJhc2VSZW5kZXJlcixcclxuICAgICAgICBjc3MzOkNTUzNSZW5kZXJlclxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdldFJlbmRlckluc3RhbmNlKHR5cGU6c3RyaW5nKTpSZW5kZXJlckludGVyZmFjZXtcclxuICAgICAgICBpZiAodGhpcy5yZW5kZXJlckxpc3RbdHlwZV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyB0aGlzLnJlbmRlcmVyTGlzdFt0eXBlXSgpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRocm93IFJlZmVyZW5jZUVycm9yKGkxOG4udChcIlJlbmRlcmVyIHR5cGUgaXMgbnVsbFwiKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBZHZhbmNlZExpbmUgfSBmcm9tIFwiLi4vVGltZUxpbmUvQWR2YW5jZWRMaW5lXCI7XHJcbmltcG9ydCB7IFRpbWVMaW5lSW50ZXJmYWNlIH0gZnJvbSBcIi4uL1RpbWVMaW5lL1RpbWVMaW5lSW50ZXJmYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGltZUxpbmVGYWN0b3J5e1xyXG4gICAgc3RhdGljIGxpc3QgPSB7XHJcbiAgICAgICAgXCJkZWZ1bHRcIjpBZHZhbmNlZExpbmUsXHJcbiAgICAgICAgXCJhZHZhbmNlXCI6QWR2YW5jZWRMaW5lXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0VGltZUxpbmUodHlwZTpzdHJpbmcpOlRpbWVMaW5lSW50ZXJmYWNle1xyXG4gICAgICAgIGlmKCF0aGlzLmxpc3RbdHlwZV0pe1xyXG4gICAgICAgICAgIHR5cGUgPSBcImRlZmF1bHRcIlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IHRoaXMubGlzdFt0eXBlXSgpXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEYW5tYWt1SXRlbUludGVyZmFjZSB9IGZyb20gXCIuLi9pbnRlcmZhY2UvRGFubWFrdS9EYW5tYWt1SXRlbUludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUaW1lTGluZURhbm1ha3UgfSBmcm9tIFwiLi9UaW1lTGluZURhbm1ha3VcIjtcclxuaW1wb3J0IHsgVGltZUxpbmVJbnRlcmZhY2UgfSBmcm9tIFwiLi9UaW1lTGluZUludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFkdmFuY2VkTGluZSBpbXBsZW1lbnRzIFRpbWVMaW5lSW50ZXJmYWNlIHtcclxuICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4iuasoeiOt+WPluaXtumXtCgxMG1zKVxyXG4gICAgICovXHJcbiAgICBsYXN0VGltZTogbnVtYmVyID0gMFxyXG4gICAgLyoqXHJcbiAgICAgKiDml7bpl7TovbQs5LqM57u05pWw57uE77yM5LiA57u05piv5by55bmV55qE5byA5aeLMTDmr6vnp5LmlbDvvIzkuoznu7TmmK/mraTmr6vnp5LmlbDkuIvnmoTlvLnluZXpm4blkIhcclxuICAgICAqIOazqOaEj++8muS4uuS6huiKguecgeaAp+iDve+8jOacgOWwj+WNleS9jeaXtumXtOaYrzEwbXPvvIxcclxuICAgICAqICAgICAgIOS7heS7heaYr+aVsOe7hOS4i+agh+aYrzEwbXPvvIzlhbbkvZnnmoTpg73mmK/mjInnhadtc+iuoeeul+eahFxyXG4gICAgICovXHJcbiAgICBkYW5tYWt1TGlzdDogVGltZUxpbmVEYW5tYWt1W11bXSA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5LiA5Liq5by55bmVXHJcbiAgICAgKiBAcGFyYW0gZGFubWFrdSBcclxuICAgICAqIEBwYXJhbSBzdGFydFxyXG4gICAgICogQHBhcmFtIGVuZFxyXG4gICAgICovXHJcbiAgICBhZGREYW5tYWt1KGRhbm1ha3U6IERhbm1ha3VJdGVtSW50ZXJmYWNlLCBzdGFydD86IG51bWJlciwgZW5kPzogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIHN0YXJ0ID0gc3RhcnQgfHwgZGFubWFrdS5zdGFydFRpbWUoKVxyXG5cclxuICAgICAgICBlbmQgPSBlbmQgfHwgZGFubWFrdS5nZXRBbmltYXRpb24oKS5nZXREdXJhdGlvbigpICsgc3RhcnRcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRpbWVUb0luZGV4KHN0YXJ0KTtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuZGFubWFrdUxpc3RbaW5kZXhdKXtcclxuICAgICAgICAgICAgdGhpcy5kYW5tYWt1TGlzdFtpbmRleF0gPSBbXVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhbm1ha3VMaXN0W2luZGV4XS5wdXNoKHtcclxuICAgICAgICAgICAgZGFubWFrdTogZGFubWFrdSxcclxuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxyXG4gICAgICAgICAgICBlbmQ6ZW5kXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pe26Ze06L2s5o2iXHJcbiAgICAgKiBAcGFyYW0gdGltZSBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgdGltZVRvSW5kZXgodGltZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aW1lIC8gMTApXHJcbiAgICB9XHJcbiAgICBnZXREYW5tYWt1TGlzdCh0aW1lOiBudW1iZXIpOntza2lwOmJvb2xlYW47RGFubWFrdUxpc3Q6VGltZUxpbmVEYW5tYWt1W119ICB7XHJcbiAgICAgICAgdGltZSA9IHRoaXMudGltZVRvSW5kZXgodGltZSk7XHJcbiAgICAgICAgLy/lpoLmnpzor7fmsYLnmoTml7bpl7TotoXov4fkuobml7bpl7TovbTjgILjgILjgIJcclxuICAgICAgICBpZiAodGltZSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtza2lwOmZhbHNlLERhbm1ha3VMaXN0OltdfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhcnI6IFRpbWVMaW5lRGFubWFrdVtdID0gW107XHJcbiAgICAgICAgbGV0IHNraXAgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5sYXN0VGltZSA8PSB0aW1lICYmIHRpbWUgLSB0aGlzLmxhc3RUaW1lIDwgNSkge1xyXG4gICAgICAgICAgICAvL+ato+W4uOaSreaUvuaDheWGtSzpgY3ljobmnJ/pl7TnmoTmiYDmnInlhoXlrrlcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5sYXN0VGltZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGxldCBhID0gdGhpcy5sYXN0VGltZTsgYSA8IHRpbWU7IGErKykge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYW5tYWt1TGlzdFthXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKC4uLnRoaXMuZGFubWFrdUxpc3RbYV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/lkKbliJnor7TmmI7mkq3mlL7lj5HnlJ/kuobot7PovazvvIzliJnpgY3ljobmib7liLDlkIjpgILnmoTlhoXlrrlcclxuICAgICAgICAgICAgLy/mn6Xmib7ojIPlm7TvvJrlnKjlvZPliY3ml7bpl7TkuYvliY3lvIDlp4vnmoTvvIzlubbkuJTnu5PmnZ/kuo7lvZPliY3ml7bpl7TkuYvlkI7nmoTvvIxcclxuICAgICAgICAgICAgLy/lhYjmib7liLDkuYvliY3lvIDlp4vnmoRcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGltZSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRpbWVJbmRleCA9IDA7IHRpbWVJbmRleCA8IHRpbWU7IHRpbWVJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGFubWFrdUxpc3RbdGltZUluZGV4XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlOy8v5b2T5YmN5pe26Ze05LiN5a2Y5ZyoXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL+aOpeedgOWGjeafpeaJvuW9k+WJjeaXtumXtOS5i+WQjue7k+adn+eahFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCB0aGlzLmRhbm1ha3VMaXN0Lmxlbmd0aDsgbCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZGFubWFrdUxpc3RbdGltZUluZGV4XVtsXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVUb0luZGV4KHRoaXMuZGFubWFrdUxpc3RbdGltZUluZGV4XVtsXS5lbmQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID4gdGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh0aGlzLmRhbm1ha3VMaXN0W3RpbWVJbmRleF1bbF0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNraXAgPSB0cnVlO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXN0VGltZSA9IHRpbWVcclxuICAgICAgICByZXR1cm4ge3NraXA6c2tpcCxEYW5tYWt1TGlzdDphcnJ9O1xyXG4gICAgfVxyXG4gICAgcmVzZXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5kYW5tYWt1TGlzdCA9IFtdXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9Db250ZXh0L0NvbnRleHRcIjtcclxuaW1wb3J0IHpoQ24gZnJvbSBcIi4vemgtY25cIjtcclxuLyoqXHJcbiAqIGkxOG4g5Zu96ZmF5YyW5Ye95pWwXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgaTE4biB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyB0cmFuVHh0ID0ge1xyXG4gICAgICAgIFwiemgtY25cIjogemhDblxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPliY3or63oqIBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbGFuZ3VhZ2U6IHN0cmluZyA9IENvbnRleHQubGFuZ3VhZ2U7XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlue/u+ivke+8jOWmguaenOS4jeWtmOWcqO+8jOWImei/lOWbnuiHqui6q1xyXG4gICAgICogQHBhcmFtIHN0ciDpnIDopoHlm73pmYXljJbnmoTlrZfnrKbkuLJcclxuICAgICAqIEByZXR1cm5zIOe/u+ivkee7k+aenFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHQoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8v5qOA5p+l5a2X56ym5Liy5piv5ZCm5a2Y5ZyoXHJcbiAgICAgICAgaWYgKHRoaXMudHJhblR4dFt0aGlzLmxhbmd1YWdlXSAmJiB0aGlzLnRyYW5UeHRbdGhpcy5sYW5ndWFnZV1bc3RyXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFuVHh0W3RoaXMubGFuZ3VhZ2VdW3N0cl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdHI7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBcIkNvbnRhaW5lcnMgaXMgbnVsbFwiIDogXCLlrrnlmajkuLrnqbpcIixcclxuICAgIFwiU3RhcnQgbW91bnQgc3RhZ2VcIiA6IFwi5byA5aeL5oyC6L296Iie5Y+wXCIsXHJcbiAgICBcIlJlbmRlcmVyIHR5cGUgaXMgbnVsbFwiOiBcIuayoeacieaJvuWIsOWQiOmAgueahOa4suafk+WZqFwiLFxyXG4gICAgXCJtYXRyaXgzZCBwYXJhbSBsZXNzIHRoYW4gMTZcIjpcIm1hdHJpeDNkIOWPguaVsOWwj+S6jjE25LiqXCIsXHJcbn0iLCIvKipcclxuICog6LSd5aGe5bCU55u45YWz5bel5YW35Ye95pWwXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ3ViaWMge1xyXG4gICAgcHgzOiBudW1iZXJcclxuICAgIHB4MjogbnVtYmVyXHJcbiAgICBweDE6IG51bWJlclxyXG4gICAgcHkzOiBudW1iZXJcclxuICAgIHB5MjogbnVtYmVyXHJcbiAgICBweTE6IG51bWJlclxyXG4gICAgZXBzaWxvbjogbnVtYmVyXHJcbiAgICBjb25zdHJ1Y3RvciAoYTogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMucHgzID0gMyAqIGFcclxuICAgICAgdGhpcy5weDIgPSAzICogKGMgLSBhKSAtIHRoaXMucHgzXHJcbiAgICAgIHRoaXMucHgxID0gMSAtIHRoaXMucHgzIC0gdGhpcy5weDJcclxuICAgICAgdGhpcy5weTMgPSAzICogYlxyXG4gICAgICB0aGlzLnB5MiA9IDMgKiAoZCAtIGIpIC0gdGhpcy5weTNcclxuICAgICAgdGhpcy5weTEgPSAxIC0gdGhpcy5weTMgLSB0aGlzLnB5MlxyXG4gICAgICB0aGlzLmVwc2lsb24gPSAxZS03ICAgICAgLy8g55uu5qCH57K+5bqmXHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRYKHQ6IG51bWJlcikge1xyXG4gICAgICByZXR1cm4gKCh0aGlzLnB4MSAqIHQgKyB0aGlzLnB4MikgKiB0ICsgdGhpcy5weDMpICogdFxyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0WSh0OiBudW1iZXIpIHtcclxuICAgICAgcmV0dXJuICgodGhpcy5weTEgKiB0ICsgdGhpcy5weTIpICogdCArIHRoaXMucHkzKSAqIHQgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBzb2x2ZSh4OiBudW1iZXIpIHtcclxuICAgICAgaWYgKHggPT09IDAgfHwgeCA9PT0gMSkgeyAgICAgICAgICAgICAvLyDlr7kgMCDlkowgMSDkuKTkuKrnibnmroogdCDkuI3lgZrorqHnrpdcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRZKHgpXHJcbiAgICAgIH0gXHJcbiAgICAgIGxldCB0ID0geFxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykgeyAgICAgICAgIC8vIOi/m+ihjCA4IOasoei/reS7o1xyXG4gICAgICAgIGxldCBnID0gdGhpcy5nZXRYKHQpIC0geFxyXG4gICAgICAgIGlmIChNYXRoLmFicyhnKSA8IHRoaXMuZXBzaWxvbikgeyAgIC8vIOajgOa1i+ivr+W3ruWIsOWPr+S7peaOpeWPl+eahOiMg+WbtFxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0WSh0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZCA9ICgzICogdGhpcy5weDEgKiB0ICsgMiAqIHRoaXMucHgyKSAqIHQgKyB0aGlzLnB4MyAgIC8vIOWvuSB4IOaxguWvvFxyXG4gICAgICAgIGlmIChNYXRoLmFicyhkKSA8IDFlLTYpIHsgICAgICAgICAgIC8vIOWmguaenOair+W6pui/h+S9ju+8jOivtOaYjueJm+mhv+i/reS7o+azleaXoOazlei+vuWIsOabtOmrmOeyvuW6plxyXG4gICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgdCA9IHQgLSBnIC8gZFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmdldFkodCkgICAgICAgICAgICAgICAgICAgLy8g5a+55b6X5Yiw55qE6L+R5Ly8IHQg5rGCIHlcclxuICAgIH1cclxuICB9XHJcbiAgIiwiaW1wb3J0IHsgRGFubWFrdVN0eWxlIH0gZnJvbSBcIi4uLy4uL1N0eWxlL0Rhbm1ha3VTdHlsZVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25JbnRlcmZhY2UgfSBmcm9tIFwiLi9BbmltYXRpb25JbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQ3ViaWMgfSBmcm9tIFwiLi9DdWJpY1wiO1xyXG5cclxuLyoqXHJcbiAqIOi0neWhnuWwlOWKqOeUu+exu1xyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEN1YmljQW5pbWF0aW9ucyBpbXBsZW1lbnRzIEFuaW1hdGlvbkludGVyZmFjZSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDotJ3loZ7lsJTlh73mlbBcclxuICAgICAqL1xyXG4gICAgY3ViaWNGdW5jOiBDdWJpYztcclxuICAgIC8qKlxyXG4gICAgICog6LSd5aGe5bCU5Y+C5pWwXHJcbiAgICAgKi9cclxuICAgIGN1YmljOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSA9IFswLCAwLCAxLCAxXVxyXG4gICAgLyoqXHJcbiAgICAgKiDliqjnlLvmgLvml7bpl7RcclxuICAgICAqL1xyXG4gICAgZHVyYXRpb246IG51bWJlciA9IDFcclxuICAgIC8vY3VycmVudFRpbWU6bnVtYmVyID0gMFxyXG4gICAgZ2V0TWF0cml4KHRpbWU6IG51bWJlcik6IGZhbHNlIHwgbnVtYmVyW10ge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kKHRpbWUpKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBsZXQgcCA9IHRoaXMuZ2V0UHJvZ3Jlc3ModGltZSlcclxuICAgICAgICBsZXQgYSA9IHRoaXMuZ2V0TWF0cml4Rm9yQ3ViaWMocCwgdGhpcy5kdXJhdGlvbiAqIHApXHJcbiAgICAgICAgcmV0dXJuIGFcclxuICAgIH1cclxuICAgIGdldFN0eWxlKHRpbWU6IG51bWJlcik6IGZhbHNlIHwgRGFubWFrdVN0eWxlIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VuZCh0aW1lKSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IHAgPSB0aGlzLmdldFByb2dyZXNzKHRpbWUpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q3ViaWNTdHlsZShwLCB0aGlzLmR1cmF0aW9uICogcClcclxuICAgIH1cclxuICAgIHNldFBhcmFtcyhwYXJhbTogeyBbaWR4OiBzdHJpbmddOiBhbnk7IH0pOiBib29sZWFuIHsgIFxyXG4gICAgICAgIHRoaXMuY3ViaWMgPSBwYXJhbT8uY3ViaWMgPyBwYXJhbT8uY3ViaWMgOiB0aGlzLmN1YmljXHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHBhcmFtPy5kdXJhdGlvbiA/IHBhcmFtPy5kdXJhdGlvbiA6IHRoaXMuZHVyYXRpb25cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgZ2V0RHVyYXRpb24oKTogbnVtYmVyIHtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5kdXJhdGlvbjtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2u5Yqo55S75pe26Ze06I635Y+W5Yqo55S76L+b5bqmXHJcbiAgICAgKiBAcGFyYW0gdGltZSDliqjnlLvml7bpl7RcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBnZXRQcm9ncmVzcyh0aW1lOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIC8v6K6h566X5b2T5YmN5Yqo55S76L+b5bqmXHJcbiAgICAgICAgbGV0IHByb2dyZXNzOiBudW1iZXIgPSB0aW1lIC8gdGhpcy5kdXJhdGlvblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2dyZXNzKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coKTtcclxuICAgICAgICBcclxuICAgICAgICAvL+iuoeeul+WHuuWunumZheWKqOeUu+i/m+W6plxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBhID0gdGhpcy5nZXRDdWJpYygpLnNvbHZlKHByb2dyZXNzKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGEpO1xyXG4gICAgICAgIHJldHVybiBhO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmoLnmja7ov5vluqbov5Tlm57ljLrpl7TlhoXnmoTlgLxcclxuICAgICAqIEBwYXJhbSBzdGFydCBcclxuICAgICAqIEBwYXJhbSBlbmQgXHJcbiAgICAgKiBAcGFyYW0gcHJvZ3Jlc3MgXHJcbiAgICAgKi9cclxuICAgIGdldFByb2dyZXNzVmFsdWUoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIHByb2dyZXNzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBzdGFydCArIChlbmQgLSBzdGFydCkgKiBwcm9ncmVzc1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3liqjnlLvmmK/lkKbnu5PmnZ9cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGlzRW5kKHRpbWU6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aW1lID4gdGhpcy5kdXJhdGlvblxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5botJ3loZ7lsJTlh73mlbBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBnZXRDdWJpYygpOiBDdWJpYyB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmN1YmljRnVuYykge1xyXG4gICAgICAgICAgICB0aGlzLmN1YmljRnVuYyA9IG5ldyBDdWJpYyguLi50aGlzLmN1YmljKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jdWJpY0Z1bmM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuoeeul+i0neWhnuWwlOagt+W8j1xyXG4gICAgICog5rOo5oSP77ya5q2k5aSE6L+U5ZueZmFsc2Xku4XooajnpLrmnKrorr7nva7liqjnlLvvvIzor7fkuI3opoHlnKjmraTlh73mlbDlrp7njrDkuK3liKTmlq3liqjnlLvnu5PmnZ9cclxuICAgICAqIEBwYXJhbSBwcm9ncmVzcyDliqjnlLvov5vluqbvvIwwLTEg5pyJ5Y+v6IO95Lya6LaF6L+H5q2k6IyD5Zu0XHJcbiAgICAgKi9cclxuICAgIGFic3RyYWN0IGdldEN1YmljU3R5bGUocHJvZ3Jlc3M6IG51bWJlciwgdGltZTogbnVtYmVyKTogRGFubWFrdVN0eWxlIHwgZmFsc2VcclxuICAgIC8qKlxyXG4gICAgICog6K6h566X6LSd5aGe5bCU55qE55+p6Zi1XHJcbiAgICAgKiDms6jmhI/vvJrmraTlpITov5Tlm55mYWxzZeS7heihqOekuuacquiuvue9ruWKqOeUu++8jOivt+S4jeimgeWcqOatpOWHveaVsOWunueOsOS4reWIpOaWreWKqOeUu+e7k+adn1xyXG4gICAgICogQHBhcmFtIHByb2dyZXNzIOWKqOeUu+i/m+W6pu+8jDAtMSDmnInlj6/og73kvJrotoXov4fmraTojIPlm7RcclxuICAgICAqIEBcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0TWF0cml4Rm9yQ3ViaWMocHJvZ3Jlc3M6IG51bWJlciwgdGltZTogbnVtYmVyKTogbnVtYmVyW10gfCBmYWxzZVxyXG5cclxufSIsIlxyXG5pbXBvcnQgeyBBbmltYXRpb25GYWN0b3J5IH0gZnJvbSBcInNyYy90cy9GYWN0b3J5L0FuaW1hdGlvbkZhY3RvcnlcIjtcclxuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSBcInNyYy90cy91dGlsL2RlZXBNZXJnZVwiO1xyXG5pbXBvcnQgeyBEYW5tYWt1U3R5bGUgfSBmcm9tIFwiLi4vLi4vU3R5bGUvRGFubWFrdVN0eWxlXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkludGVyZmFjZSB9IGZyb20gXCIuL0FuaW1hdGlvbkludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBDdWJpY0FuaW1hdGlvbnMgfSBmcm9tIFwiLi9DdWJpY0FuaW1hdGlvbnNcIjtcclxuaW1wb3J0IHsgTWF0cml4IH0gZnJvbSBcIi4vTWF0cml4XCI7XHJcblxyXG5cclxuLyoqXHJcbiAqIOWKqOeUu+e7hO+8jOeUqOS6juWkmuS4quWKqOeUu+W5tuihjOaSreaUvlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdyb3VwQW5pbWF0aW9ucyBleHRlbmRzIEN1YmljQW5pbWF0aW9ucyB7XHJcbiAgICBhbmltYXRpb25zOiBBbmltYXRpb25JbnRlcmZhY2VbXSA9IFtdXHJcbiAgICAvKipcclxuICAgICAqIOavj+S4quWKqOeUu+e7k+adn+eahOe0r+iuoeefqemYtVxyXG4gICAgICovXHJcbiAgICAgY3VtdWxhdGl2ZU1hdHJpeDogbnVtYmVyW11bXSA9IFtdXHJcbiAgICBzZXRQYXJhbXMocGFyYW06IHsgW2lkeDogc3RyaW5nXTogYW55OyB9KTogYm9vbGVhbiB7XHJcbiAgICAgICAgc3VwZXIuc2V0UGFyYW1zKHBhcmFtKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMgPSBBbmltYXRpb25GYWN0b3J5LmdldEFuaW1hdGlvbnNMaXN0KHBhcmFtPy5hbmltYXRpb25zIHx8IFtdKSAgICAgIFxyXG4gICAgICAgIC8v6K6h566X5Ye65pyA5aSn55qE5Yqo55S75pe26ZW/XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zLmZvckVhY2goKHZhbCxrZXkpPT57XHJcbiAgICAgICAgICAgIGxldCBkdXIgPSB2YWwuZ2V0RHVyYXRpb24oKVxyXG4gICAgICAgICAgICAgLy/orqHnrpfmnIDlkI7kuIDluKdcclxuICAgICAgICAgICAgdGhpcy5jdW11bGF0aXZlTWF0cml4W2tleV0gPSB2YWwuZ2V0TWF0cml4KGR1cikgfHwgTWF0cml4LmdldE51bGxNYXRyaXgoKTtcclxuICAgICAgICAgICAgaWYoZHVyID4gdGhpcy5kdXJhdGlvbil7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy/ov5nph4zopobnm5bkuobniLbnsbvnmoTlsZ7mgKdcclxuICAgICAgICAgICAgICAgIC8v5a6e6ZmF5LiK77yM5Y+q5pyJ54i257G755qE5pe26ZW/5LiN5aSf77yM5omN5Lya6KKr5pu05pawXHJcbiAgICAgICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gdmFsLmdldER1cmF0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3ViaWNTdHlsZShfcHJvZ3Jlc3M6IG51bWJlcix0aW1lOm51bWJlcik6IGZhbHNlIHwgRGFubWFrdVN0eWxlIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlkIjlubbmoLflvI/vvIznlLHkuo7moLflvI/nmoTnibnmrormgKfvvIzlpoLmnpzlrZjlnKjlhrLnqoHnmoTmoLflvI/vvIzlkI7pnaLnmoTkvJropobnm5bliY3pnaLnmoRcclxuICAgICAgICAgKi9cclxuICAgICAgICBsZXQgc3R5bGU6RGFubWFrdVN0eWxlID0ge2JveFN0eWxlOnt9LGZvbnRTdHlsZTp7fX07XHJcbiAgICAgICAgbGV0IG5vbmVTdHlsZSA9IHRydWU7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDtpPHRoaXMuYW5pbWF0aW9ucy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IHN0eWxlMiA9IHRoaXMuYW5pbWF0aW9uc1tpXS5nZXRTdHlsZSh0aW1lKVxyXG4gICAgICAgICAgICBpZihzdHlsZTIpe1xyXG4gICAgICAgICAgICAgICAgbm9uZVN0eWxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IGRlZXBNZXJnZShzdHlsZSxzdHlsZTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG5vbmVTdHlsZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBzdHlsZTtcclxuICAgIH1cclxuICAgIGdldE1hdHJpeEZvckN1YmljKF9wcm9ncmVzczogbnVtYmVyLHRpbWU6bnVtYmVyKTogZmFsc2UgfCBudW1iZXJbXSB7XHJcbiAgICAgICAgLy/lu7rnq4vkuIDkuKrnqbrnmb3nn6npmLVcclxuICAgICAgICBsZXQgYXJyOm51bWJlcltdID0gW1xyXG4gICAgICAgICAgICAxLDAsMCwwLFxyXG4gICAgICAgICAgICAwLDEsMCwwLFxyXG4gICAgICAgICAgICAwLDAsMSwwLFxyXG4gICAgICAgICAgICAwLDAsMCwxXHJcbiAgICAgICAgXVxyXG4gICAgICAgIC8v5YCS552A6K6h566X5omA5pyJ55qE55+p6Zi1XHJcbiAgICAgICAgZm9yKGxldCBpID0gdGhpcy5hbmltYXRpb25zLmxlbmd0aCAtIDE7aSA+PSAwO2ktLSl7XHJcbiAgICAgICAgICAgIGxldCBtYXRyaXggPSB0aGlzLmFuaW1hdGlvbnNbaV0uZ2V0TWF0cml4KHRpbWUpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hdHJpeCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihtYXRyaXgpe1xyXG4gICAgICAgICAgICAgICAgYXJyID0gTWF0cml4Lm11bHQoYXJyLG1hdHJpeCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYXJyID0gTWF0cml4Lm11bHQoYXJyLHRoaXMuY3VtdWxhdGl2ZU1hdHJpeFtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBBbmltYXRpb25GYWN0b3J5IH0gZnJvbSBcInNyYy90cy9GYWN0b3J5L0FuaW1hdGlvbkZhY3RvcnlcIjtcclxuaW1wb3J0IHsgRGFubWFrdVN0eWxlIH0gZnJvbSBcIi4uLy4uL1N0eWxlL0Rhbm1ha3VTdHlsZVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25JbnRlcmZhY2UgfSBmcm9tIFwiLi9BbmltYXRpb25JbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQ3ViaWNBbmltYXRpb25zIH0gZnJvbSBcIi4vQ3ViaWNBbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IE1hdHJpeCB9IGZyb20gXCIuL01hdHJpeFwiO1xyXG4vKipcclxuICog5Yqo55S75YiX6KGo57uE77yM5omA5pyJ5Yqo55S75oyJ6aG65bqP5pKt5pS+XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTGlzdEFuaW1hdGlvbnMgZXh0ZW5kcyBDdWJpY0FuaW1hdGlvbnMge1xyXG4gICAgYW5pbWF0aW9uczogQW5pbWF0aW9uSW50ZXJmYWNlW10gPSBbXVxyXG4gICAgLyoqXHJcbiAgICAgKiDmr4/kuKrliqjnlLvnu5PmnZ/nmoTntK/orqHnn6npmLVcclxuICAgICAqL1xyXG4gICAgY3VtdWxhdGl2ZU1hdHJpeDogbnVtYmVyW11bXSA9IFtdXHJcbiAgICBjdW11bGF0aXZlVGltZTogbnVtYmVyW10gPSBbXVxyXG4gICAgc2V0UGFyYW1zKHBhcmFtOiB7IFtpZHg6IHN0cmluZ106IGFueTsgfSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHN1cGVyLnNldFBhcmFtcyhwYXJhbSk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gQW5pbWF0aW9uRmFjdG9yeS5nZXRBbmltYXRpb25zTGlzdChwYXJhbT8uYW5pbWF0aW9ucyB8fCBbXSlcclxuXHJcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gMDtcclxuICAgICAgICB0aGlzLmN1bXVsYXRpdmVNYXRyaXhbMF0gPSBNYXRyaXguZ2V0TnVsbE1hdHJpeCgpO1xyXG4gICAgICAgIHRoaXMuY3VtdWxhdGl2ZVRpbWVbMF0gPSBkdXJhdGlvblxyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGlvbnMuZm9yRWFjaCgodmFsLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGR1ciA9IHZhbC5nZXREdXJhdGlvbigpXHJcblxyXG5cclxuICAgICAgICAgICAgLy/oh6rlop4x77yM5Zug5Li6MOeahOe7k+adn+W4p+eahDHnmoTlvIDlpLRcclxuICAgICAgICAgICAga2V5KytcclxuICAgICAgICAgICAgLy/orqHnrpflh7rmr4/kuKrliqjnlLvnu5PmnZ/lkI7nmoTnn6npmLXlj6DliqAs5Lyg5YWl5oyB57ut5pe26Ze05Lul6I635b6X5pyA5ZCO5LiA5bin5Yqo55S7XHJcbiAgICAgICAgICAgIGxldCBtYXRyaXggPSB2YWwuZ2V0TWF0cml4KGR1cikgfHwgTWF0cml4LmdldE51bGxNYXRyaXgoKTtcclxuICAgICAgICAgICAgLy/lj6DliqBcclxuICAgICAgICAgICAgdGhpcy5jdW11bGF0aXZlTWF0cml4W2tleV0gPVxyXG4gICAgICAgICAgICAgICAgTWF0cml4Lm11bHQobWF0cml4LCB0aGlzLmN1bXVsYXRpdmVNYXRyaXhba2V5IC0gMV0pXHJcblxyXG4gICAgICAgICAgICBkdXJhdGlvbiArPSBkdXI7XHJcbiAgICAgICAgICAgIHRoaXMuY3VtdWxhdGl2ZVRpbWVba2V5XSA9IGR1cmF0aW9uXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gPCBkdXJhdGlvbikgeyB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247IH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3ViaWNTdHlsZShfcHJvZ3Jlc3M6IG51bWJlciwgdGltZTogbnVtYmVyKTogZmFsc2UgfCBEYW5tYWt1U3R5bGUge1xyXG4gICAgICAgIGxldCBjdXJBbmltYXRpb24gPSB0aGlzLmdldEN1ckFuaW1hdGlvbih0aW1lKVxyXG5cclxuICAgICAgICBpZiAoY3VyQW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJBbmltYXRpb24uYW5pbWF0aW9uLmdldFN0eWxlKHRpbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1hdHJpeEZvckN1YmljKF9wcm9ncmVzczogbnVtYmVyLCB0aW1lOiBudW1iZXIpOiBmYWxzZSB8IG51bWJlcltdIHtcclxuXHJcblxyXG4gICAgICAgIGxldCBjdXJBbmltYXRpb24gPSB0aGlzLmdldEN1ckFuaW1hdGlvbih0aW1lKVxyXG5cclxuICAgICAgICBpZiAoY3VyQW5pbWF0aW9uKSB7XHJcblxyXG4gICAgICAgICAgICB0aW1lID0gdGltZSAtIHRoaXMuY3VtdWxhdGl2ZVRpbWVbY3VyQW5pbWF0aW9uLmtleV1cclxuXHJcbiAgICAgICAgICAgIGxldCBtYXQgPSBjdXJBbmltYXRpb24uYW5pbWF0aW9uLmdldE1hdHJpeCh0aW1lKSB8fCBNYXRyaXguZ2V0TnVsbE1hdHJpeCgpXHJcbiAgICAgICAgICAgIHJldHVybiBNYXRyaXgubXVsdChtYXQsIHRoaXMuY3VtdWxhdGl2ZU1hdHJpeFtjdXJBbmltYXRpb24ua2V5XSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPluW9k+WJjeeahOWKqOeUu+WFg+e0oCzlpoLmnpzkuI3lrZjlnKjliJnov5Tlm55mYWxzZVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0Q3VyQW5pbWF0aW9uKHRpbWU6IG51bWJlcik6IHsga2V5OiBudW1iZXIsIGFuaW1hdGlvbjogQW5pbWF0aW9uSW50ZXJmYWNlIH0gfCBmYWxzZSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmFuaW1hdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gdGhpcy5jdW11bGF0aXZlVGltZVtpXVxyXG4gICAgICAgICAgICBpZiAodGltZSA+IGR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBrZXk6IGksIGFuaW1hdGlvbjogdGhpcy5hbmltYXRpb25zW2ldIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbn0iLCIvKipcclxuICog55+p6Zi15Y+Y5o2i55u45YWz5bel5YW35Ye95pWwXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWF0cml4IHtcclxuICAgIC8qKlxyXG4gICAgICog5Yqg5rOVXHJcbiAgICAgKiBAcGFyYW0gYSBcclxuICAgICAqIEBwYXJhbSBiIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYWRkKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSk6IG51bWJlcltdIHtcclxuICAgICAgICBsZXQgYzogbnVtYmVyW10gPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjW2ldID0gYVtpXSArIGJbaV1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5YeP5rOVXHJcbiAgICAgKiBAcGFyYW0gYSBcclxuICAgICAqIEBwYXJhbSBiIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzdWIoYTogbnVtYmVyW10sIGI6IG51bWJlcltdKTogbnVtYmVyW10ge1xyXG4gICAgICAgIGxldCBjOiBudW1iZXJbXSA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNbaV0gPSBhW2ldIC0gYltpXVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY1xyXG4gICAgfVxyXG4gICAgc3RhdGljIG11bHQoYTogbnVtYmVyW10sIGI6IG51bWJlcltdKTogbnVtYmVyW10ge1xyXG4gICAgICAgIGxldCBhMSA9IHRoaXMudHJhbihhKTtcclxuICAgICAgICBsZXQgYjEgPSB0aGlzLnRyYW4oYik7XHJcbiAgICAgICAgIC8vIOebuOS5mOe6puadn1xyXG4gICAgICAgICBpZiAoYTFbMF0ubGVuZ3RoICE9PSBiMS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtID0gYTEubGVuZ3RoO1xyXG4gICAgICAgIGxldCBwID0gYTFbMF0ubGVuZ3RoO1xyXG4gICAgICAgIGxldCBuID0gYjFbMF0ubGVuZ3RoO1xyXG4gICAgXHJcbiAgICAgICAgLy8g5Yid5aeL5YyWIG0qbiDlhaggMCDkuoznu7TmlbDnu4RcclxuICAgICAgICBsZXQgYyA9IG5ldyBBcnJheShtKS5maWxsKDApLm1hcCgoKT0+IG5ldyBBcnJheShuKS5maWxsKDApKTtcclxuICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHA7IGsrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNbaV1bal0gKz0gYTFbaV1ba10gKiBiMVtrXVtqXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIHJldHVybiBbLi4uY1swXSwuLi5jWzFdLC4uLmNbMl0sLi4uY1szXV07XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWwhuS4gOe7tDE25L2N5pWw57uE6L2s5o2i5oiQNCo05LqM57u05pWw57uEXHJcbiAgICAgKiBAcGFyYW0gYSBcclxuICAgICAqL1xyXG4gICAgIHByb3RlY3RlZCBzdGF0aWMgdHJhbihhOiBudW1iZXJbXSk6bnVtYmVyW11bXSB7XHJcbiAgICAgICAgbGV0IGFycjogbnVtYmVyW11bXSA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGkgKiA0ICsgalxyXG4gICAgICAgICAgICAgICAgaWYoIWFycltpXSkgYXJyW2ldID0gW107XHJcbiAgICAgICAgICAgICAgICBhcnJbaV1bal0gPSBhW2luZGV4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflvpfkuIDkuKrml6DmlYjmnpznmoQ0eDTnn6npmLVcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldE51bGxNYXRyaXgoKTpudW1iZXJbXXtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAxLDAsMCwwLFxyXG4gICAgICAgICAgICAwLDEsMCwwLFxyXG4gICAgICAgICAgICAwLDAsMSwwLFxyXG4gICAgICAgICAgICAwLDAsMCwxXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ3ViaWNBbmltYXRpb25zIH0gZnJvbSBcIi4vQ3ViaWNBbmltYXRpb25zXCI7XHJcbmltcG9ydCB7IE1hdHJpeCB9IGZyb20gXCIuL01hdHJpeFwiO1xyXG5cclxuLyoqXHJcbiAqIOWPr+aUueWPmOWKqOeUu+S4reW/g+eCueeahOWKqOeUu1xyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE9yaWdpbkFuaW1hdGlvbnMgZXh0ZW5kcyBDdWJpY0FuaW1hdGlvbnMge1xyXG4gICAgb3JpZ2luOm51bWJlcltdID0gWzAsMCwwXVxyXG4gICAgc2V0UGFyYW1zKHBhcmFtOiB7IFtpZHg6IHN0cmluZ106IGFueTsgfSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghc3VwZXIuc2V0UGFyYW1zKHBhcmFtKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3JpZ2luID0gIHBhcmFtPy5vcmlnaW4gfHwgdGhpcy5vcmlnaW5cclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgZ2V0TWF0cml4Rm9yQ3ViaWMocHJvZ3Jlc3M6IG51bWJlcik6IG51bWJlcltdIHwgZmFsc2V7XHJcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuZ2V0TWF0cml4Rm9yT3JpZ2luKHByb2dyZXNzKVxyXG4gICAgICAgIGlmKCFhcnIpIHJldHVybiBmYWxzZVxyXG4gICAgICAgIGFyciA9IE1hdHJpeC5tdWx0KFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgLXRoaXMub3JpZ2luWzBdLCAtdGhpcy5vcmlnaW5bMV0sIC10aGlzLm9yaWdpblsyXSwgMVxyXG5cclxuICAgICAgICBdLGFycilcclxuICAgICAgICByZXR1cm4gTWF0cml4Lm11bHQoYXJyLFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5bMF0sIHRoaXMub3JpZ2luWzFdLCB0aGlzLm9yaWdpblsyXSwgMVxyXG5cclxuICAgICAgICBdKVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5bnlKjkuo7orqHnrpfljp/lnZDmoIfngrnnmoTnn6npmLVcclxuICAgICAqIEBwYXJhbSBwcm9ncmVzcyBcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgZ2V0TWF0cml4Rm9yT3JpZ2luKHByb2dyZXNzOiBudW1iZXIpOiBudW1iZXJbXSB8IGZhbHNlXHJcbn0iLCJpbXBvcnQgeyBBbmltYXRpb25GYWN0b3J5IH0gZnJvbSBcInNyYy90cy9GYWN0b3J5L0FuaW1hdGlvbkZhY3RvcnlcIjtcclxuaW1wb3J0IHsgRGFubWFrdVN0eWxlIH0gZnJvbSBcIi4uLy4uL1N0eWxlL0Rhbm1ha3VTdHlsZVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25JbnRlcmZhY2UgfSBmcm9tIFwiLi9BbmltYXRpb25JbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgQ3ViaWNBbmltYXRpb25zIH0gZnJvbSBcIi4vQ3ViaWNBbmltYXRpb25zXCI7XHJcbmltcG9ydCBTdGF0aWNBbmltYXRpb24gZnJvbSBcIi4vU3RhdGljQW5pbWF0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVwZWF0QW5pbWF0aW9ucyBleHRlbmRzIEN1YmljQW5pbWF0aW9uc3tcclxuICAgIC8qKlxyXG4gICAgICog5Yqo55S75o6l5Y+jXHJcbiAgICAgKi9cclxuICAgIGFuaW1hdGlvbjpBbmltYXRpb25JbnRlcmZhY2VcclxuICAgIC8qKlxyXG4gICAgICog6YeN5aSN5qyh5pWwXHJcbiAgICAgKi9cclxuICAgIHJlcGVhdDpudW1iZXIgPSAxXHJcbiAgICAvKipcclxuICAgICAqIOWNleS4quWKqOeUu+aXtumXtFxyXG4gICAgICovXHJcbiAgICBhbmltYXRpb25UaW1lOm51bWJlclxyXG4gICAgZ2V0Q3ViaWNTdHlsZShfcHJvZ3Jlc3M6IG51bWJlciwgdGltZTogbnVtYmVyKTogZmFsc2UgfCBEYW5tYWt1U3R5bGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbi5nZXRTdHlsZSh0aGlzLmdldEN1clRpbWUodGltZSkpXHJcbiAgICB9XHJcbiAgICBnZXRNYXRyaXhGb3JDdWJpYyhfcHJvZ3Jlc3M6IG51bWJlciwgdGltZTogbnVtYmVyKTogZmFsc2UgfCBudW1iZXJbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLmdldE1hdHJpeCh0aGlzLmdldEN1clRpbWUodGltZSkpXHJcbiAgICB9XHJcbiAgICBzZXRQYXJhbXMocGFyYW06IHsgW2lkeDogc3RyaW5nXTogYW55OyB9KTogYm9vbGVhbiB7XHJcbiAgICAgICAgc3VwZXIuc2V0UGFyYW1zKHBhcmFtKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihwYXJhbT8uYW5pbWF0aW9uKXtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAgQW5pbWF0aW9uRmFjdG9yeS5nZXRBbmltYXRpb25zKHBhcmFtPy5hbmltYXRpb24udHlwZSxwYXJhbT8uYW5pbWF0aW9uLnBhcmFtcykgfHwgbmV3IFN0YXRpY0FuaW1hdGlvbigpXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gbmV3IFN0YXRpY0FuaW1hdGlvbigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYW5pbWF0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlcGVhdCA9IHBhcmFtPy5yZXBlYXQgfHwgdGhpcy5yZXBlYXRcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSB0aGlzLmFuaW1hdGlvbi5nZXREdXJhdGlvbigpXHJcbiAgICAgICAgLy/opobnm5bniLbnuqflrZjmtLvml7bpl7QgXHJcbiAgICAgICAgLy/orqHnrpfmlrnlvI8g5Y2V5Liq5by55bmV5pe26Ze0IFgg5by55bmV6YeN5aSN5qyh5pWwXHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHRoaXMuYW5pbWF0aW9uVGltZSAqIHRoaXMucmVwZWF0XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kdXJhdGlvbik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635b6X5b2T5YmN55qE5by55bmV5pe26Ze0XHJcbiAgICAgKi9cclxuICAgIGdldEN1clRpbWUodGltZTpudW1iZXIpe1xyXG4gICAgICAgIC8v5Y+W5L2ZXHJcbiAgICAgICAgcmV0dXJuIHRpbWUgJSB0aGlzLmFuaW1hdGlvblRpbWVcclxuICAgIH1cclxufSIsImltcG9ydCB7IERhbm1ha3VTdHlsZSB9IGZyb20gXCIuLi8uLi9TdHlsZS9EYW5tYWt1U3R5bGVcIjtcclxuaW1wb3J0IHsgT3JpZ2luQW5pbWF0aW9ucyB9IGZyb20gXCIuL09yaWdpbkFuaW1hdGlvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiDml4vovazniLbnsbtcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSb3RhdGlvbkFuaW1hdGlvbiBleHRlbmRzIE9yaWdpbkFuaW1hdGlvbnMge1xyXG5cclxuICAgIGFuZ2xlOntzdGFydDpudW1iZXIsZW5kOm51bWJlcn0gPSB7c3RhcnQ6MCxlbmQ6MzYwfVxyXG4gICAgc2V0UGFyYW1zKHBhcmFtOiB7IFtpZHg6IHN0cmluZ106IGFueTsgfSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghc3VwZXIuc2V0UGFyYW1zKHBhcmFtKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBPYmplY3QuYXNzaWduKHRoaXMuYW5nbGUscGFyYW0/LmFuZ2xlKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBnZXRDdWJpY1N0eWxlKF9wcm9ncmVzczogbnVtYmVyKTogZmFsc2UgfCBEYW5tYWt1U3R5bGUge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6KeS5bqm6L2s5byn5bqmXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBBMlIoYTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGEgKiAoTWF0aC5QSSAvIDE4MClcclxuICAgIH1cclxufSIsImltcG9ydCB7IFJvdGF0aW9uQW5pbWF0aW9uIH0gZnJvbSBcIi4vUm90YXRpb25BbmltYXRpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBY6L205peL6L2sXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUm90YXRpb25YQW5pbWF0aW9uIGV4dGVuZHMgUm90YXRpb25BbmltYXRpb24ge1xyXG4gICAgZ2V0TWF0cml4Rm9yT3JpZ2luKHByb2dyZXNzOiBudW1iZXIpOiBmYWxzZSB8IG51bWJlcltdIHtcclxuICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmdldFByb2dyZXNzVmFsdWUodGhpcy5hbmdsZS5zdGFydCx0aGlzLmFuZ2xlLmVuZCxwcm9ncmVzcylcclxuICAgICAgICBsZXQgc2luID0gTWF0aC5zaW4odGhpcy5BMlIoYW5nbGUpKTtcclxuICAgICAgICBsZXQgY29zID0gTWF0aC5jb3ModGhpcy5BMlIoYW5nbGUpKVxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIGNvcywgc2luLCAwLFxyXG4gICAgICAgICAgICAwLCAtc2luLCBjb3MsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgICBdXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBSb3RhdGlvbkFuaW1hdGlvbiB9IGZyb20gXCIuL1JvdGF0aW9uQW5pbWF0aW9uXCI7XHJcbi8qKlxyXG4gKiB56L205peL6L2sXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgUm90YXRpb25ZQW5pbWF0aW9uIGV4dGVuZHMgUm90YXRpb25BbmltYXRpb24ge1xyXG4gICAgZ2V0TWF0cml4Rm9yT3JpZ2luKHByb2dyZXNzOiBudW1iZXIpOiBmYWxzZSB8IG51bWJlcltdIHtcclxuICAgICAgICBsZXQgYW5nbGUgPSB0aGlzLmdldFByb2dyZXNzVmFsdWUodGhpcy5hbmdsZS5zdGFydCx0aGlzLmFuZ2xlLmVuZCxwcm9ncmVzcylcclxuICAgICAgICBsZXQgc2luID0gTWF0aC5zaW4odGhpcy5BMlIoYW5nbGUpKTtcclxuICAgICAgICBsZXQgY29zID0gTWF0aC5jb3ModGhpcy5BMlIoYW5nbGUpKVxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIGNvcywgMCwgc2luLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAtc2luLCAwLCBjb3MsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDFcclxuICAgICAgICBdXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBSb3RhdGlvbkFuaW1hdGlvbiB9IGZyb20gXCIuL1JvdGF0aW9uQW5pbWF0aW9uXCI7XHJcblxyXG4vKipcclxuICogeui9tOaXi+i9rFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJvdGF0aW9uWkFuaW1hdGlvbiBleHRlbmRzIFJvdGF0aW9uQW5pbWF0aW9uIHtcclxuICAgIGdldE1hdHJpeEZvck9yaWdpbihwcm9ncmVzczogbnVtYmVyKTogZmFsc2UgfCBudW1iZXJbXSB7XHJcbiAgICAgICAgbGV0IGFuZ2xlID0gdGhpcy5nZXRQcm9ncmVzc1ZhbHVlKHRoaXMuYW5nbGUuc3RhcnQsdGhpcy5hbmdsZS5lbmQscHJvZ3Jlc3MpXHJcbiAgICAgICAgbGV0IHNpbiA9IE1hdGguc2luKHRoaXMuQTJSKGFuZ2xlKSk7XHJcbiAgICAgICAgbGV0IGNvcyA9IE1hdGguY29zKHRoaXMuQTJSKGFuZ2xlKSlcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICBjb3Msc2luLCAwLCAwLFxyXG4gICAgICAgICAgICAtc2luLCBjb3MsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsMSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufSIsImltcG9ydCB7IERhbm1ha3VTdHlsZSB9IGZyb20gXCIuLi8uLi9TdHlsZS9EYW5tYWt1U3R5bGVcIjtcclxuaW1wb3J0IHsgT3JpZ2luQW5pbWF0aW9ucyB9IGZyb20gXCIuL09yaWdpbkFuaW1hdGlvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiDnvKnmlL7liqjnlLtcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTY2FsZUFuaW1hdGlvbnMgZXh0ZW5kcyBPcmlnaW5BbmltYXRpb25ze1xyXG4gICAgc2NhbGU6e3gxOm51bWJlcix5MTpudW1iZXIsejE6bnVtYmVyLHgyOm51bWJlcix5MjpudW1iZXIsejI6bnVtYmVyfSBcclxuICAgID0ge3gxOjEseTE6MSx6MToxLHgyOjEseTI6MSx6MjoxfVxyXG4gICAgc2V0UGFyYW1zKHBhcmFtOiB7IFtpZHg6IHN0cmluZ106IGFueTsgfSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghc3VwZXIuc2V0UGFyYW1zKHBhcmFtKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NhbGUgPSBPYmplY3QuYXNzaWduKHRoaXMuc2NhbGUscGFyYW0/LnNjYWxlKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBnZXRNYXRyaXhGb3JPcmlnaW4ocHJvZ3Jlc3M6IG51bWJlcik6IGZhbHNlIHwgbnVtYmVyW10ge1xyXG4gICAgICAgIGxldCB4ID0gdGhpcy5nZXRQcm9ncmVzc1ZhbHVlKHRoaXMuc2NhbGUueDEsIHRoaXMuc2NhbGUueDIsIHByb2dyZXNzKTtcclxuICAgICAgICBsZXQgeSA9IHRoaXMuZ2V0UHJvZ3Jlc3NWYWx1ZSh0aGlzLnNjYWxlLnkxLCB0aGlzLnNjYWxlLnkyLCBwcm9ncmVzcylcclxuICAgICAgICBsZXQgeiA9IHRoaXMuZ2V0UHJvZ3Jlc3NWYWx1ZSh0aGlzLnNjYWxlLnoxLCB0aGlzLnNjYWxlLnoyLCBwcm9ncmVzcylcclxuICAgICAgICBsZXQgbSA9IFtcclxuICAgICAgICAgICAgeCwwLDAsMCxcclxuICAgICAgICAgICAgMCx5LDAsMCxcclxuICAgICAgICAgICAgMCwwLHosMCxcclxuICAgICAgICAgICAgMCwwLDAsMVxyXG4gICAgICAgIF1cclxuICAgICAgICByZXR1cm4gbVxyXG5cclxuICAgIH1cclxuICAgIGdldEN1YmljU3R5bGUocHJvZ3Jlc3M6IG51bWJlcik6IGZhbHNlIHwgRGFubWFrdVN0eWxlIHtcclxuICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IERhbm1ha3VTdHlsZSB9IGZyb20gXCIuLi8uLi9TdHlsZS9EYW5tYWt1U3R5bGVcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uSW50ZXJmYWNlIH0gZnJvbSBcIi4vQW5pbWF0aW9uSW50ZXJmYWNlXCI7XHJcblxyXG4vKipcclxuICog6Z2Z5q2i5Yqo55S7IOS7heS7heaCrOWBnOWcqOafkOS4gOS4quS9jee9ruS4gOWumuaXtumXtFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljQW5pbWF0aW9uIGltcGxlbWVudHMgQW5pbWF0aW9uSW50ZXJmYWNlIHtcclxuICAgIGdldER1cmF0aW9uKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZHVyYXRpb246IG51bWJlciA9IDEwMDA7XHJcbiAgICB4OiBudW1iZXIgPSAwO1xyXG4gICAgeTogbnVtYmVyID0gMDtcclxuICAgIHo6IG51bWJlciA9IDA7XHJcbiAgICBzZXRQYXJhbXMocGFyYW06IHsgW2lkeDogc3RyaW5nXTogYW55OyB9KTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IGRlZiA9IDA7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IHBhcmFtPy5kdXJhdGlvbiB8fCB0aGlzLmR1cmF0aW9uXHJcbiAgICAgICAgdGhpcy54ID0gcGFyYW0/LnggfHwgZGVmXHJcbiAgICAgICAgdGhpcy55ID0gcGFyYW0/LnkgfHwgZGVmXHJcbiAgICAgICAgdGhpcy56ID0gcGFyYW0/LnogfHwgZGVmXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGdldE1hdHJpeCh0aW1lOiBudW1iZXIpOiBmYWxzZSB8IG51bWJlcltdIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHRpbWUgPiB0aGlzLmR1cmF0aW9uKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIHRoaXMueCwgdGhpcy55LCB0aGlzLnosIDFcclxuICAgICAgICBdXHJcblxyXG4gICAgfVxyXG4gICAgZ2V0U3R5bGUoKTogZmFsc2UgfCBEYW5tYWt1U3R5bGUge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IERhbm1ha3VTdHlsZSB9IGZyb20gXCIuLi8uLi9TdHlsZS9EYW5tYWt1U3R5bGVcIjtcclxuaW1wb3J0IHsgQ3ViaWNBbmltYXRpb25zIH0gZnJvbSBcIi4vQ3ViaWNBbmltYXRpb25zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlQW5pbWF0aW9uIGV4dGVuZHMgQ3ViaWNBbmltYXRpb25zIHtcclxuXHJcbiAgICBwYXRoOiB7IHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHoxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIsIHoyOiBudW1iZXIgfVxyXG4gICAgICAgID1cclxuICAgICAgICB7IHgxOiAwLCB5MTogMCwgeDI6IDAsIHkyOiAwLCB6MTogMCwgejI6IDAgfVxyXG4gICAgc2V0UGFyYW1zKHBhcmFtOiB7IFtpZHg6IHN0cmluZ106IGFueTsgfSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghc3VwZXIuc2V0UGFyYW1zKHBhcmFtKSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGF0aCA9IE9iamVjdC5hc3NpZ24odGhpcy5wYXRoLHBhcmFtPy5wYXRoKVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcbiAgICBnZXRDdWJpY1N0eWxlKCk6IGZhbHNlIHwgRGFubWFrdVN0eWxlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXRNYXRyaXhGb3JDdWJpYyhwcm9ncmVzczogbnVtYmVyKTogZmFsc2UgfCBudW1iZXJbXSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wYXRoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9ncmVzcyk7XHJcblxyXG4gICAgICAgIGxldCB4ID0gdGhpcy5nZXRQcm9ncmVzc1ZhbHVlKHRoaXMucGF0aC54MSwgdGhpcy5wYXRoLngyLCBwcm9ncmVzcyk7XHJcbiAgICAgICAgbGV0IHkgPSB0aGlzLmdldFByb2dyZXNzVmFsdWUodGhpcy5wYXRoLnkxLCB0aGlzLnBhdGgueTIsIHByb2dyZXNzKVxyXG4gICAgICAgIGxldCB6ID0gdGhpcy5nZXRQcm9ncmVzc1ZhbHVlKHRoaXMucGF0aC56MSwgdGhpcy5wYXRoLnoyLCBwcm9ncmVzcylcclxuXHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgeCwgeSwgeiwgMVxyXG4gICAgICAgIF1cclxuICAgIH1cclxufSIsImltcG9ydCB7IERhbm1ha3VTdHlsZSB9IGZyb20gXCIuLi9TdHlsZS9EYW5tYWt1U3R5bGVcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uSW50ZXJmYWNlIH0gZnJvbSBcIi4vQW5pbWF0aW9uL0FuaW1hdGlvbkludGVyZmFjZVwiO1xyXG5pbXBvcnQgU3RhdGljQW5pbWF0aW9uIGZyb20gXCIuL0FuaW1hdGlvbi9TdGF0aWNBbmltYXRpb25cIjtcclxuaW1wb3J0IHsgRGFubWFrdUl0ZW1JbnRlcmZhY2UgfSBmcm9tIFwiLi9EYW5tYWt1SXRlbUludGVyZmFjZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWfuuehgOW8ueW5leexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEJhc2VEYW5tYWt1IGltcGxlbWVudHMgRGFubWFrdUl0ZW1JbnRlcmZhY2Uge1xyXG5cclxuXHJcbiAgICBzdHlsZTpEYW5tYWt1U3R5bGUgPSB7fVxyXG4gICAgc3RhcnQ6bnVtYmVyID0gMDtcclxuICAgIGFuaW1hdGlvbj86QW5pbWF0aW9uSW50ZXJmYWNlXHJcbiAgICBjb250ZW50OnN0cmluZyA9IFwiXCJcclxuICAgIGNoaWxkOkRhbm1ha3VJdGVtSW50ZXJmYWNlW10gPSBbXVxyXG4gICAgLyoqXHJcbiAgICAgKiDorr7nva7lj4LmlbBcclxuICAgICAqIEBwYXJhbSBwYXJhbSBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBzZXRQYXJhbXMocGFyYW06IHsgW2lkeDogc3RyaW5nXTogYW55OyB9KTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy/orr7nva7mloflrZfmoLflvI9cclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIC8v6K6+572u5byA5aeL5pe26Ze0XHJcbiAgICAgICAgICAgIHBhcmFtPy5zdGFydCAmJuOAgCh0aGlzLnN0YXJ0ID0gcGFyYW0/LnN0YXJ0KVxyXG4gICAgICAgICAgICBwYXJhbT8uYW5pbWF0aW9uICYmICh0aGlzLmFuaW1hdGlvbiA9ICBwYXJhbT8uYW5pbWF0aW9uIHx8ICBuZXcgU3RhdGljQW5pbWF0aW9uKCkpXHJcbiAgICAgICAgICAgIHBhcmFtPy5jaGlsZCAmJiAodGhpcy5jaGlsZCA9IHBhcmFtLmNoaWxkKVxyXG4gICAgICAgICAgICBwYXJhbT8uc3R5bGUgJiYgKHRoaXMuc3R5bGUgPSBwYXJhbT8uc3R5bGUpXHJcbiAgICAgICAgICAgIHBhcmFtPy5jb250ZW50ICYmICh0aGlzLmNvbnRlbnQgPSBwYXJhbT8uY29udGVudClcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGdldFR5cGUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJiYXNlXCJcclxuICAgIH1cclxuICAgIGdldENvbnRlbnQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZW50XHJcbiAgICB9XHJcbiAgICBnZXRDaGlsZCgpOiBEYW5tYWt1SXRlbUludGVyZmFjZVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZFxyXG4gICAgfVxyXG4gICAgZ2V0QW5pbWF0aW9uKCk6IEFuaW1hdGlvbkludGVyZmFjZSB7XHJcbiAgICAgICAgaWYoIXRoaXMuYW5pbWF0aW9uKXtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSBuZXcgU3RhdGljQW5pbWF0aW9uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uXHJcbiAgICB9XHJcbiAgICBnZXRTdHlsZSgpOiBEYW5tYWt1U3R5bGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0eWxlXHJcbiAgICB9XHJcbiAgICBzdGFydFRpbWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGFydFxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJcclxuXHJcbmltcG9ydCB7IERhbm1ha3VJdGVtSW50ZXJmYWNlIH0gZnJvbSBcIi4uL0Rhbm1ha3UvRGFubWFrdUl0ZW1JbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgY2FudmFzU3R5bGUgfSBmcm9tIFwiLi4vU3R5bGUvQ2FudmFzU3R5bGVcIjtcclxuaW1wb3J0IHsgUmVuZGVyZXJJbnRlcmZhY2UgfSBmcm9tIFwiLi9SZW5kZXJlckludGVyZmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VSZW5kZXJlciBpbXBsZW1lbnRzIFJlbmRlcmVySW50ZXJmYWNlIHtcclxuICAgIHJlc2V0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgYWRkRGFubWFrdShkYW5tYWt1OiBEYW5tYWt1SXRlbUludGVyZmFjZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJlZnJlc2goKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgY2FudmFzPzogSFRNTEVsZW1lbnRcclxuICAgIHNldENhbnZhc0NvbnRhaW5lcihjYW52YXM6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgdXBkYXRlQ2FudmFzU3R5bGUoc3R5bGU6IGNhbnZhc1N0eWxlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLndpZHRoID0gc3R5bGUuc2l6ZS53aWR0aC5zdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gc3R5bGUuc2l6ZS5oZWlnaHQuc3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmxlZnQgPSBzdHlsZS5wb3NpdGlvbi54LnN0cmluZygpXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9IHN0eWxlLnBvc2l0aW9uLnkuc3RyaW5nKClcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc3R5bGUuY29sb3Iuc3RyaW5nKClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVbml0VG9vbHMgfSBmcm9tIFwic3JjL3RzL3V0aWwvVW5pdFRvb2xzXCI7XHJcbmltcG9ydCB7IERhbm1ha3VJdGVtSW50ZXJmYWNlIH0gZnJvbSBcIi4uLy4uL0Rhbm1ha3UvRGFubWFrdUl0ZW1JbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgY2FudmFzU3R5bGUgfSBmcm9tIFwiLi4vLi4vU3R5bGUvQ2FudmFzU3R5bGVcIjtcclxuaW1wb3J0IHsgU2l6ZUludGVyZmFjZSB9IGZyb20gXCIuLi8uLi9TdHlsZS9TaXplSW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFB4U2l6ZSB9IGZyb20gXCIuLi8uLi9TdHlsZS9Vbml0L1B4U2l6ZVwiO1xyXG5pbXBvcnQgeyBSZW5kZXJlckludGVyZmFjZSB9IGZyb20gXCIuLi9SZW5kZXJlckludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBEYW5tYWt1T2JqLCBEYW5tYWt1VG9vbCB9IGZyb20gXCIuL0Nzc0Rhbm1ha3VPYmpcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQ1NTM1JlbmRlcmVyIGltcGxlbWVudHMgUmVuZGVyZXJJbnRlcmZhY2Uge1xyXG5cclxuICAgIGNhbnZhc1NpemU6IFNpemVJbnRlcmZhY2UgPSB7XHJcbiAgICAgICAgd2lkdGg6IG5ldyBQeFNpemUoMTYwMCksXHJcbiAgICAgICAgaGVpZ2h0OiBuZXcgUHhTaXplKDkwMClcclxuICAgIH1cclxuICAgIGNhbnZhcz86IEhUTUxFbGVtZW50XHJcbiAgICBkYW5tYWt1TGlzdDogRGFubWFrdU9ialtdID0gW11cclxuICAgIHNldENhbnZhc0NvbnRhaW5lcihjYW52YXM6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUNhbnZhc1N0eWxlKHN0eWxlOiBjYW52YXNTdHlsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbnZhcykge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHRoaXMuY2FudmFzU2l6ZS53aWR0aC5zdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID10aGlzLmNhbnZhc1NpemUuaGVpZ2h0LnN0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5sZWZ0ID0gVW5pdFRvb2xzLmxlbmd0aFNydGluZygoc3R5bGUuc2l6ZS53aWR0aC5sZW5ndGggLSB0aGlzLmNhbnZhc1NpemUud2lkdGgubGVuZ3RoKSAvIDIpXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLnRvcCA9IFVuaXRUb29scy5sZW5ndGhTcnRpbmcoKHN0eWxlLnNpemUuaGVpZ2h0Lmxlbmd0aCAtIHRoaXMuY2FudmFzU2l6ZS5oZWlnaHQubGVuZ3RoKSAvIDIpXHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHN0eWxlLmNvbG9yLnN0cmluZygpXHJcbiAgICAgICAgICAgIGxldCByOiBudW1iZXI7Ly/nvKnmlL7lpKflsI9cclxuICAgICAgICAgICAgaWYgKHN0eWxlLnNpemUud2lkdGgubGVuZ3RoIC8gc3R5bGUuc2l6ZS5oZWlnaHQubGVuZ3RoID49IHRoaXMuY2FudmFzU2l6ZS53aWR0aC5sZW5ndGggLyB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgLy/mqKrlkJFcclxuICAgICAgICAgICAgICAgIHIgPSBzdHlsZS5zaXplLmhlaWdodC5sZW5ndGggLyB0aGlzLmNhbnZhc1NpemUuaGVpZ2h0Lmxlbmd0aFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/nurXlkJFcclxuICAgICAgICAgICAgICAgIHIgPSBzdHlsZS5zaXplLndpZHRoLmxlbmd0aCAvIHRoaXMuY2FudmFzU2l6ZS53aWR0aC5sZW5ndGhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKFwiICsgciArIFwiLFwiICsgciArIFwiKVwiXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYWRkRGFubWFrdShkYW5tYWt1OiBEYW5tYWt1SXRlbUludGVyZmFjZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmKCF0aGlzLmNhbnZhcykgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgbGV0IGRhbm1ha3VvYmogPSBEYW5tYWt1VG9vbC5yZWN1cnNpb25EYW5tYWt1KFtkYW5tYWt1XSkgXHJcbiAgICAgICAgbGV0IGVsZXMgPSBEYW5tYWt1VG9vbC5yZWN1cnNpb25EaXYoZGFubWFrdW9iailcclxuICAgICAgICBlbGVzLmZvckVhY2goKGVsZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcz8uYXBwZW5kQ2hpbGQoZWxlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5kYW5tYWt1TGlzdC5wdXNoKC4uLmRhbm1ha3VvYmopO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGFubWFrdUxpc3QpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVmcmVzaCh0aW1lKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNhbnZhcykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIERhbm1ha3VUb29sLnJlY3Vyc2lvblN0eWxlKHRoaXMuZGFubWFrdUxpc3QsdGhpcy5jYW52YXMsdGltZSlcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJlc2V0KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8v5riF56m655S75biDXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5jYW52YXMpe1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhcy5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+a4heepuuaVsOe7hFxyXG4gICAgICAgIHRoaXMuZGFubWFrdUxpc3QgPSBbXVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVW5pdFRvb2xzIH0gZnJvbSBcInNyYy90cy91dGlsL1VuaXRUb29sc1wiO1xyXG5pbXBvcnQgeyBBbmltYXRpb25JbnRlcmZhY2UgfSBmcm9tIFwiLi4vLi4vRGFubWFrdS9BbmltYXRpb24vQW5pbWF0aW9uSW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IERhbm1ha3VJdGVtSW50ZXJmYWNlIH0gZnJvbSBcIi4uLy4uL0Rhbm1ha3UvRGFubWFrdUl0ZW1JbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgRGFubWFrdVN0eWxlIH0gZnJvbSBcIi4uLy4uL1N0eWxlL0Rhbm1ha3VTdHlsZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYW5tYWt1T2JqIHtcclxuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgc3R5bGU6IERhbm1ha3VTdHlsZVxyXG4gICAgYW5pbWF0aW9uOiBBbmltYXRpb25JbnRlcmZhY2VcclxuICAgIGNoaWxkOiBEYW5tYWt1T2JqW11cclxuICAgIHN0YXJ0Om51bWJlclxyXG59XHJcbmV4cG9ydCBjbGFzcyBEYW5tYWt1VG9vbCB7XHJcbiAgICAvKipcclxuICAgKiDpgJLlvZLmnoTlu7rlvLnluZXlr7nosaFcclxuICAgKiBAcGFyYW0gZGFubWFrdSBcclxuICAgKiBAcmV0dXJucyBcclxuICAgKi9cclxuICAgIHN0YXRpYyByZWN1cnNpb25EYW5tYWt1KGRhbm1ha3U6IERhbm1ha3VJdGVtSW50ZXJmYWNlW10pOiBEYW5tYWt1T2JqW10ge1xyXG4gICAgICAgIGxldCBkYW5tYWt1b2JqOiBEYW5tYWt1T2JqW10gPSBbXVxyXG4gICAgICAgIGRhbm1ha3UuZm9yRWFjaCgoZGFubWFrdSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGl2ID0gdGhpcy5jcmVhdGVEaXYoZGFubWFrdS5nZXRDb250ZW50KCkpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3R5bGUoZGl2LGRhbm1ha3UuZ2V0U3R5bGUoKSk7XHJcbiAgICAgICAgICAgIGxldCBvYmo6IERhbm1ha3VPYmogPSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBkaXYsXHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IGRhbm1ha3UuZ2V0QW5pbWF0aW9uKCksXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogZGFubWFrdS5nZXRTdHlsZSgpLFxyXG4gICAgICAgICAgICAgICAgY2hpbGQ6IFtdLFxyXG4gICAgICAgICAgICAgICAgc3RhcnQ6ZGFubWFrdS5zdGFydFRpbWUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGRhbm1ha3UuZ2V0Q2hpbGQoKVxyXG4gICAgICAgICAgICBsZXQgY2hpbGRPYmo7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGRPYmogPSB0aGlzLnJlY3Vyc2lvbkRhbm1ha3UoY2hpbGQpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG9iai5jaGlsZCA9IGNoaWxkT2JqO1xyXG4gICAgICAgICAgICBkYW5tYWt1b2JqLnB1c2gob2JqKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBkYW5tYWt1b2JqXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuS4gOS4quepumRpdlxyXG4gICAgICogQHBhcmFtIGNvbnRlbnQgXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZURpdihjb250ZW50OiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2LnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgZGl2LnN0eWxlLnRvcCA9IFwiMHB4XCJcclxuICAgICAgICBkaXYuc3R5bGUubGVmdCA9IFwiMHB4XCJcclxuICAgICAgICBkaXYuaW5uZXJUZXh0ID0gY29udGVudFxyXG4gICAgICAgIHJldHVybiBkaXZcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJLlvZLmnoTlu7plbGVtZW50XHJcbiAgICAgKiBAcGFyYW0gZGFubWFrdW9iaiBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICAgc3RhdGljIHJlY3Vyc2lvbkRpdihkYW5tYWt1b2JqOkRhbm1ha3VPYmpbXSk6SFRNTEVsZW1lbnRbXXtcclxuICAgICAgICBsZXQgYXJyYXk6QXJyYXk8SFRNTEVsZW1lbnQ+ID0gW11cclxuICAgICAgICBkYW5tYWt1b2JqLmZvckVhY2goKGl0ZW0pPT57XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gaXRlbS5lbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5jaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZWxlcyA9IHRoaXMucmVjdXJzaW9uRGl2KGl0ZW0uY2hpbGQpXHJcbiAgICAgICAgICAgICAgICBlbGVzLmZvckVhY2goKGVsZSk9PntcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gYXJyYXlcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5bCG5qC35byP6K6+572u5Yiw5YWD57Sg5LitXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzZXRTdHlsZShlbGVtZW50OkhUTUxFbGVtZW50LHN0eWxlOnsgW2lkeDogc3RyaW5nXTogYW55OyB9KXtcclxuICAgICAgICBcclxuICAgICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsc3R5bGUpXHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmAkuW9kuiuvue9ruW8ueW5leWKqOeUu1xyXG4gICAgICogQHBhcmFtIGRhbm1ha3UgXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyByZWN1cnNpb25TdHlsZShkYW5tYWt1OkRhbm1ha3VPYmpbXSxjYW52YXM6SFRNTEVsZW1lbnQsYWJzdGltZTpudW1iZXIscGFyZW50VGltZTpudW1iZXIgPSAwKXsgXHJcbiAgICAgICAgZGFubWFrdS5mb3JFYWNoKChkYW4sa2V5KT0+e1xyXG4gICAgICAgICAgICAvL+abtOaWsOW8ueW5leagt+W8j1xyXG4gICAgICAgICAgICBsZXQgdGltZSA9IHBhcmVudFRpbWUgPT0gMCA/IGFic3RpbWUgLSBkYW4uc3RhcnQ6IHBhcmVudFRpbWUgLSBkYW4uc3RhcnQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYW4uYW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCBzdHk7XHJcbiAgICAgICAgICAgIGxldCBtYXg7XHJcbiAgICAgICAgICAgIGlmKHN0eSA9IGRhbi5hbmltYXRpb24uZ2V0U3R5bGUodGltZSkpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdHlsZShkYW4uZWxlbWVudCxzdHkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYobWF4ID0gZGFuLmFuaW1hdGlvbi5nZXRNYXRyaXgodGltZSkpe1xyXG4gICAgICAgICAgICAgICAgZGFuLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gVW5pdFRvb2xzLk1hdHJpeDNkU3RyaW5nKG1heCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8v5aaC5p6c6YO95LiN5a2Y5Zyo77yM5YiZ6KGo56S65Yqo55S75bey57uP5a6M5oiQ77yM6ZSA5q+B5YWD57SgXHJcbiAgICAgICAgICAgIC8v5aaC5p6c5piv5a2Q5YWD57Sg55qE5oOF5Ya177yM5pyJ5Y+v6IO95a2Y5Zyo5by55bmV5pyq5byA5aeL55qE5oOF5Ya1XHJcbiAgICAgICAgICAgIGlmKCEoc3R5IHx8IG1heCkpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGRhbi5lbGVtZW50LnBhcmVudEVsZW1lbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5LuO54i25YWD57Sg5Yig6Zmk6IqC54K5XHJcbiAgICAgICAgICAgICAgICAgICAgZGFuLmVsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChkYW4uZWxlbWVudClcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5ZCm5YiZ5LuOY2FudmFz6YeM6Z2i5Yig6ZmkXHJcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLnJlbW92ZUNoaWxkKGRhbi5lbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5bm25LiU5riF56m66IqC54K5XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgZGFubWFrdVtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6YCS5b2SXHJcbiAgICAgICAgICAgIHRoaXMucmVjdXJzaW9uU3R5bGUoZGFuLmNoaWxkLGNhbnZhcyxhYnN0aW1lLHRpbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBSZW5kZXJlckludGVyZmFjZSB9IGZyb20gXCIuLi9SZW5kZXJlci9SZW5kZXJlckludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuLi9TdHlsZS9Vbml0L0NvbG9yXCI7XHJcbmltcG9ydCB7IFBvc2l0aW9uSW50ZXJmYWNlIH0gZnJvbSBcIi4uL1N0eWxlL1Bvc2l0aW9uSW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFNpemVJbnRlcmZhY2UgfSBmcm9tIFwiLi4vU3R5bGUvU2l6ZUludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBTdGFnZUludGVyZmFjZSB9IGZyb20gXCIuL1N0YWdlSW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IFB4U2l6ZSB9IGZyb20gXCIuLi9TdHlsZS9Vbml0L1B4U2l6ZVwiO1xyXG5pbXBvcnQgeyBUaW1lTGluZUludGVyZmFjZSB9IGZyb20gXCJzcmMvdHMvVGltZUxpbmUvVGltZUxpbmVJbnRlcmZhY2VcIjtcclxuaW1wb3J0IHsgaTE4biB9IGZyb20gXCJzcmMvdHMvaTE4blwiO1xyXG5pbXBvcnQgeyBUaW1lTGluZURhbm1ha3UgfSBmcm9tIFwic3JjL3RzL1RpbWVMaW5lL1RpbWVMaW5lRGFubWFrdVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VTdGFnZSBpbXBsZW1lbnRzIFN0YWdlSW50ZXJmYWNlIHtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyPzogUmVuZGVyZXJJbnRlcmZhY2U7XHJcbiAgICBwcm90ZWN0ZWQgdGltZUxpbmVPYmo/OiBUaW1lTGluZUludGVyZmFjZVxyXG4gICAgc3RhZ2VTaXplKGNvbnRhaW5lcnNTaXplOiBTaXplSW50ZXJmYWNlKTogU2l6ZUludGVyZmFjZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgd2lkdGg6IGNvbnRhaW5lcnNTaXplLndpZHRoLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGNvbnRhaW5lcnNTaXplLmhlaWdodFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YWdlUG9zaXRpb24oKTogUG9zaXRpb25JbnRlcmZhY2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHg6bmV3IFB4U2l6ZSgwKSxcclxuICAgICAgICAgICAgeTpuZXcgUHhTaXplKDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RhZ2VCYWNrZ3JvdW5kQ29sb3IoKTogQ29sb3Ige1xyXG4gICAgICAgIHJldHVybiAgbmV3IENvbG9yKDAsMCwwLDApO1xyXG4gICAgfVxyXG4gICAgc3RhZ2VSZW5kZXJlcihyZW5kZXI6IFJlbmRlcmVySW50ZXJmYWNlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHJlbmRlclxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgZ2V0UmVuZGVyZXIoKTogUmVuZGVyZXJJbnRlcmZhY2Uge1xyXG4gICAgICAgIGlmKHRoaXMucmVuZGVyZXIpe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlclxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyBSZWZlcmVuY2VFcnJvcihpMThuLnQoXCJyZW5kZXJlciBpcyBudWxsXCIpKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHRpbWVMaW5lKHRpbWVMaW5lOiBUaW1lTGluZUludGVyZmFjZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRoaXMudGltZUxpbmVPYmogPSB0aW1lTGluZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJlZnJlc2godGltZTpudW1iZXIpOmJvb2xlYW57XHJcbiAgICAgICAgaWYoIXRoaXMucmVuZGVyZXIpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBsZXQgbGlzdDp7IHNraXA6IGJvb2xlYW47IERhbm1ha3VMaXN0OiBUaW1lTGluZURhbm1ha3VbXTsgfVxyXG4gICAgICAgIGlmKGxpc3QgPSB0aGlzLnRpbWVMaW5lT2JqPy5nZXREYW5tYWt1TGlzdCh0aW1lKSB8fCB7c2tpcDpmYWxzZSxEYW5tYWt1TGlzdDpbXX0pe1xyXG4gICAgICAgICAgICBpZihsaXN0LnNraXApe1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobGlzdC5za2lwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXI/LnJlc2V0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGlzdC5EYW5tYWt1TGlzdC5mb3JFYWNoKCh2YWwpPT57IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlcj8uYWRkRGFubWFrdSh2YWwuZGFubWFrdSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZWZyZXNoKHRpbWUpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJlbmRlcmVyVHlwZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcImNzczNcIlxyXG4gICAgfVxyXG4gICAgdGltZUxpbmVUeXBlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIFwiYWR2YW5jZVwiXHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcz8ucmVuZGVyZXI/LnJlc2V0KClcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICBnZXRUaW1lTGluZSgpOiBUaW1lTGluZUludGVyZmFjZSB7XHJcbiAgICAgICAgaWYoIXRoaXMudGltZUxpbmVPYmope1xyXG4gICAgICAgICAgICB0aHJvdyBSZWZlcmVuY2VFcnJvcihpMThuLnQoXCJUaW1lIGxpbmUgaXMgbnVsbFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVMaW5lT2JqXHJcbiAgICB9XHJcbiAgIFxyXG59IiwiXHJcbmltcG9ydCB7IEJhc2VTdGFnZSB9IGZyb20gXCIuL0Jhc2VTdGFnZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXN0U3RhZ2UgZXh0ZW5kcyBCYXNlU3RhZ2V7XHJcblxyXG59IiwiaW1wb3J0IHsgVW5pdEludGVyZmFjZSB9IGZyb20gXCIuL1VuaXRJbnRlcmZhY2VcIlxyXG5cclxuLyoqXHJcbiAqIOminOiJsuaOpeWPo1xyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xvciBpbXBsZW1lbnRzIFVuaXRJbnRlcmZhY2Uge1xyXG4gICAgcjogbnVtYmVyXHJcbiAgICBnOiBudW1iZXJcclxuICAgIGI6IG51bWJlclxyXG4gICAgYTogbnVtYmVyXHJcbiAgICBjb25zdHJ1Y3RvcihyOm51bWJlciwgZzpudW1iZXIsIGI6bnVtYmVyLCBhOm51bWJlcikge1xyXG4gICAgICAgIHRoaXMuciA9IHJcclxuICAgICAgICB0aGlzLmcgPSBnXHJcbiAgICAgICAgdGhpcy5iID0gYlxyXG4gICAgICAgIHRoaXMuYSA9IGFcclxuICAgIH1cclxuICAgIHN0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcInJnYmEoXCIgKyB0aGlzLnIgKyBcIixcIiArIHRoaXMuZyArIFwiLFwiICsgdGhpcy5iICsgXCIsXCIgKyB0aGlzLmEgKyBcIilcIlxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDluLjop4HpopzoibLooahcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBjb2xvcjp7W2tleTpzdHJpbmddOltudW1iZXIsbnVtYmVyLG51bWJlcixudW1iZXJdfSA9IHtcclxuICAgICAgICBcImJsYWNrXCI6WzAsMCwwLDFdLFxyXG4gICAgICAgIFwid2hpdGVcIjpbMjU1LDI1NSwyNTUsMV0sXHJcbiAgICAgICAgXCJyZWRcIjpbMjU1LDAsMCwxXSxcclxuICAgICAgICBcImdyZWVuXCI6WzAsMjU1LDAsMV0sXHJcbiAgICAgICAgXCJibHVlXCI6WzAsMCwyNTUsMV0sXHJcbiAgICAgICAgXCJwaW5rXCI6WzI1NSwxMDUsMTA4LDFdLFxyXG4gICAgICAgIFwieWVsbG93XCI6WzI1NSwyNTUsMCwxXSxcclxuICAgICAgICBcImdyZXlcIjpbMTMwLDEzMCwxMzAsMV1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog6I635Y+W6aKE6K6+6aKc6ImyXHJcbiAgICAgKiBAcGFyYW0gY29sb3Ig6aKc6Imy5ZCN56ewXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGdldENvbG9yKGNvbG9yOnN0cmluZyk6Q29sb3J7XHJcbiAgICAgICAgaWYodGhpcy5jb2xvcltjb2xvcl0pe1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHRoaXMoLi4udGhpcy5jb2xvcltjb2xvcl0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgdGhpcyguLi50aGlzLmNvbG9yW1wiYmxhY2tcIl0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVW5pdEludGVyZmFjZSB9IGZyb20gXCIuL1VuaXRJbnRlcmZhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQeFNpemUgaW1wbGVtZW50cyBVbml0SW50ZXJmYWNle1xyXG4gICAgbGVuZ3RoOm51bWJlclxyXG4gICAgY29uc3RydWN0b3IobGVuZ3RoOm51bWJlcil7XHJcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XHJcbiAgICB9XHJcbiAgICBzdHJpbmcoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGggK1wicHhcIjtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBpMThuIH0gZnJvbSBcIi4uL2kxOG5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVbml0VG9vbHN7XHJcbiAgICAvKipcclxuICAgICAqIOaLvOaOpeW4puWNleS9jeeahOmVv+W6puWtl+espuS4slxyXG4gICAgICogQHBhcmFtIG51bSDplb/luqZcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbGVuZ3RoU3J0aW5nKG51bTpudW1iZXIpOnN0cmluZ3tcclxuICAgICAgICByZXR1cm4gbnVtICsgXCJweFwiO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmi7zmjqUgTWF0cml4M2QoKSDlrZfnrKbkuLJcclxuICAgICAqIEBwYXJhbSBhcnIgMTbkvY3mlbDlrZdcclxuICAgICAqL1xyXG4gICAgc3RhdGljIE1hdHJpeDNkU3RyaW5nKGFycjpBcnJheTxudW1iZXI+KTpzdHJpbmd7XHJcbiAgICAgICAgaWYoYXJyLmxlbmd0aCAhPSAxNil7XHJcbiAgICAgICAgICAgIHRocm93IFN5bnRheEVycm9yKGkxOG4udChcIm1hdHJpeDNkIHBhcmFtIGxlc3MgdGhhbiAxNlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIk1hdHJpeDNkKFwiICsgYXJyLmpvaW4oXCIsXCIpICsgXCIpXCI7XHJcbiAgICB9XHJcbiAgICAvLyBzdGF0aWMgVW5pdEZhY3RvcnkodHlwZTpzdHJpbmcsb2JqKTpzdHJpbmd7XHJcblxyXG4gICAgLy8gfVxyXG59IiwiLyoqXHJcbiAqIOWvueixoea3seW6puWQiOW5tlxyXG4gKiBAcGFyYW0gb2JqMSBcclxuICogQHBhcmFtIG9iajIgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBNZXJnZShvYmoxLCBvYmoyKSB7XHJcbiAgICBsZXQga2V5O1xyXG4gICAgZm9yIChrZXkgaW4gb2JqMikge1xyXG4gICAgICAvLyDlpoLmnpx0YXJnZXQo5Lmf5bCx5pivb2JqMVtrZXldKeWtmOWcqO+8jOS4lOaYr+WvueixoeeahOivneWGjeWOu+iwg+eUqGRlZXBNZXJnZe+8jOWQpuWImeWwseaYr29iajFba2V5XemHjOmdouayoei/meS4quWvueixoe+8jOmcgOimgeS4jm9iajJba2V5XeWQiOW5tlxyXG4gICAgICAvLyDlpoLmnpxvYmoyW2tleV3msqHmnInlgLzmiJbogIXlgLzkuI3mmK/lr7nosaHvvIzmraTml7bnm7TmjqXmm7/mjaJvYmoxW2tleV1cclxuICAgICAgb2JqMVtrZXldID1cclxuICAgICAgICBvYmoxW2tleV0gJiZcclxuICAgICAgICBvYmoxW2tleV0udG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIiAmJlxyXG4gICAgICAgIChvYmoyW2tleV0gJiYgb2JqMltrZXldLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBPYmplY3RdXCIpXHJcbiAgICAgICAgICA/IGRlZXBNZXJnZShvYmoxW2tleV0sIG9iajJba2V5XSlcclxuICAgICAgICAgIDogKG9iajFba2V5XSA9IG9iajJba2V5XSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2JqMTtcclxuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4uL2Nzcy9iYXNlLmNzc1wiO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9Db250cm9sbGVyL0NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBpMThuIH0gZnJvbSBcIi4vaTE4blwiXHJcbmltcG9ydCB7IEluaXRDb25maWdJbnRlcmZhY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2UvSW5pdENvbmZpZ0ludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBUZXN0U3RhZ2UgfSBmcm9tIFwiLi9pbnRlcmZhY2UvU3RhZ2UvVGVzdFN0YWdlXCI7XHJcbmNsYXNzIE1mdW5zRGFuTWFrdSB7XHJcblxyXG4gICAgY29udHJvbGxlcjpDb250cm9sbGVyOyBcclxuICAgIG1haW4oY29uZmlnOiBJbml0Q29uZmlnSW50ZXJmYWNlKSB7XHJcbiAgICAgICAgLy/nsbvlnovmo4Dmn6VcclxuICAgICAgICBpZiAoIWNvbmZpZy5jb250YWluZXJzKSB7XHJcbiAgICAgICAgICAgIHRocm93IFJlZmVyZW5jZUVycm9yKGkxOG4udChcIkNvbnRhaW5lcnMgaXMgbnVsbFwiKSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoY29uZmlnLmNvbnRhaW5lcnMpXHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyLmFkZEdldERhbm1ha3VGdW5jdGlvbihcImFkdmFuY2VcIixjb25maWcuZGFubWFrdSlcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIucmVnaXN0U3RhZ2UobmV3IFRlc3RTdGFnZSgpLCAxKVxyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5tb3VudCgpXHJcbiAgICAgICAgLy/nm5HlkKzlpKflsI/lj5jljJZcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGxlci5yZXNpemUoKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwYXVzZSgpe1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5wYXVzZSgpXHJcbiAgICB9XHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5zdGFydCgpXHJcbiAgICB9XHJcbiAgICBza2lwKHRpbWU6bnVtYmVyKXtcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIuc2tpcCh0aW1lKVxyXG4gICAgfVxyXG4gICAgdGltZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIuZ2V0VGltZSgpXHJcbiAgICB9XHJcbiAgICByZXNldCgpe1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlci5yZXNldERhbm1ha3UoMSlcclxuICAgICAgICB0aGlzLmNvbnRyb2xsZXIucmVzZXQoKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG4vL+a3u+WKoOi/m+WFqOWxgFxyXG5pZiAoZ2xvYmFsVGhpcykge1xyXG4gICAgZ2xvYmFsVGhpcy5NZnVuc0Rhbk1ha3UgPSBNZnVuc0Rhbk1ha3U7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWZ1bnNEYW5NYWt1OyJdLCJzb3VyY2VSb290IjoiIn0=