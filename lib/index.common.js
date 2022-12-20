/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 744:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AnnularTimer": function() { return /* reexport */ AnnularTimer; },
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[4]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/AnnularTimer/src/annular-timer.vue?vue&type=template&id=57748b24&scoped=true&ts=true

const _withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.pushScopeId)("data-v-57748b24"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.popScopeId)(), n);
const _hoisted_1 = {
  class: "circle-timer__wrapper"
};
const _hoisted_2 = {
  class: "circle-timer__svg",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_3 = {
  class: "circle-timer__circle"
};
const _hoisted_4 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("circle", {
  class: "circle-timer__path-elapsed",
  cx: "50",
  cy: "50",
  r: "45"
}, null, -1));
const _hoisted_5 = ["stroke-dasharray"];
const _hoisted_6 = {
  class: "circle-timer"
};
const _hoisted_7 = {
  class: "label"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("div", _hoisted_1, [((0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementBlock)("svg", _hoisted_2, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("g", _hoisted_3, [_hoisted_4, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("path", {
    "stroke-dasharray": _ctx.strokeDashArray,
    class: "circle-timer__path-remaining",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.normalizeStyle)({
      color: _ctx.pathColor
    }),
    d: "\n            M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "
  }, null, 12, _hoisted_5)])])), (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("div", _hoisted_6, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.createElementVNode)("span", _hoisted_7, (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.toDisplayString)(_ctx.time), 1)])]);
}
;// CONCATENATED MODULE: ./packages/AnnularTimer/src/annular-timer.vue?vue&type=template&id=57748b24&scoped=true&ts=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js!./node_modules/ts-loader/index.js??clonedRuleSet-41.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/AnnularTimer/src/annular-timer.vue?vue&type=script&lang=ts

const FULL_DASH_ARRAY = 283;
const DEFAULT_COLOR = "#FFE2AA";
const __default__ = (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.defineComponent)({
  name: "annular-timer",
  props: {
    defaultColor: {
      type: String,
      default: DEFAULT_COLOR
    },
    textSize: {
      type: String,
      default: "16px"
    },
    endTime: {
      type: Number,
      default: 0
    },
    startTime: Number,
    step: {
      type: Number,
      default: -1
    },
    onFinished: Function,
    thresholds: {
      type: Object,
      default: []
    } // 阶段阈值，以及颜色变化。
  },

  data() {
    return {
      time: this.startTime,
      timer: -1,
      timeLimit: Math.abs(this.startTime - this.endTime),
      currentTextColor: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(this.defaultColor),
      currentTextSize: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(this.textSize),
      currentRadius: (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.ref)(this.radius)
    };
  },
  computed: {
    // 路径颜色
    pathColor() {
      let result = this.defaultColor;
      if (Array.isArray(this.thresholds)) {
        this.thresholds.sort((a, b) => a.threshold - b.threshold).some(item => {
          if (this.time <= this.timeLimit * item.threshold) {
            // 根据当前时间获取距离最近的阈值的颜色
            result = item.color;
            this.currentTextColor = item.color;
            return true;
          }
          return false;
        });
      }
      return result;
    },
    // stroke虚线数组
    strokeDashArray() {
      // 圆滑过渡
      const rawTimeFraction = this.time / this.timeLimit;
      const timeFraction = rawTimeFraction - 1 / this.timeLimit * (1 - rawTimeFraction);
      return `${(timeFraction * FULL_DASH_ARRAY).toFixed(0)} ${FULL_DASH_ARRAY}`;
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      // step>0正计时 和 step<0倒计时
      if (this.step < 0 && this.time <= this.endTime || this.step > 0 && this.time >= this.endTime) {
        this.onFinished?.();
        clearInterval(this.timer);
      } else {
        const cur = this.time + this.step;
        this.time = cur <= 0 ? 0 : cur;
      }
    }, Math.abs(this.step) * 1000);
  },
  beforeDestroye() {
    clearInterval(this.timer);
  }
});

const __injectCSSVars__ = () => {
  (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.useCssVars)(_ctx => ({
    "a27985c4": _ctx.currentTextColor,
    "aa58a234": _ctx.currentTextSize
  }));
};
const __setup__ = __default__.setup;
__default__.setup = __setup__ ? (props, ctx) => {
  __injectCSSVars__();
  return __setup__(props, ctx);
} : __injectCSSVars__;
/* harmony default export */ var annular_timervue_type_script_lang_ts = (__default__);
;// CONCATENATED MODULE: ./packages/AnnularTimer/src/annular-timer.vue?vue&type=script&lang=ts
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./packages/AnnularTimer/src/annular-timer.vue?vue&type=style&index=0&id=57748b24&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./packages/AnnularTimer/src/annular-timer.vue?vue&type=style&index=0&id=57748b24&lang=scss&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./packages/AnnularTimer/src/annular-timer.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(annular_timervue_type_script_lang_ts, [['render',render],['__scopeId',"data-v-57748b24"]])

/* harmony default export */ var annular_timer = (__exports__);
;// CONCATENATED MODULE: ./packages/AnnularTimer/index.ts

// 定义 install 方法， App 作为参数
annular_timer.install = app => {
  app.component(annular_timer.name, annular_timer);
};
/* harmony default export */ var AnnularTimer = (annular_timer);
;// CONCATENATED MODULE: ./packages/index.ts

// 所有组件列表
const components = [AnnularTimer];
// 定义 install 方法， App 作为参数
const install = app => {
  // 遍历注册所有组件
  components.map(component => app.component(component.name, component));
};

/* harmony default export */ var packages_0 = ({
  install
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.common.js.map