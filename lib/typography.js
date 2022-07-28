/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/exportHelper.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/exportHelper.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./packages/typography/Typography.vue":
/*!********************************************!*\
  !*** ./packages/typography/Typography.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Typography_vue_vue_type_template_id_722fd5ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Typography.vue?vue&type=template&id=722fd5ca */ "./packages/typography/Typography.vue?vue&type=template&id=722fd5ca");
/* harmony import */ var _Typography_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Typography.vue?vue&type=script&setup=true&lang=js */ "./packages/typography/Typography.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_fashandian_Documents_Program_vtui_node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_fashandian_Documents_Program_vtui_node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Typography_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Typography_vue_vue_type_template_id_722fd5ca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"packages/typography/Typography.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/typography/Typography.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/typography/Typography.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);



const __default__ = {
    name: "VTypography",
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  props: {
    type: {
        required: false,
        type: String,
        default: 'default'
    },
},
  setup(__props, { expose }) {
  expose();

const props = __props



const type = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({ secondary: 'v-typography-secondary', 'success': 'v-typography-success', 'default': '' }[props.type]));

const __returned__ = { props, type, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}));

/***/ }),

/***/ "./packages/typography/Typography.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************!*\
  !*** ./packages/typography/Typography.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Typography_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Typography_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./Typography.vue?vue&type=script&setup=true&lang=js */ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/typography/Typography.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./packages/typography/Typography.vue?vue&type=template&id=722fd5ca":
/*!**************************************************************************!*\
  !*** ./packages/typography/Typography.vue?vue&type=template&id=722fd5ca ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Typography_vue_vue_type_template_id_722fd5ca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Typography_vue_vue_type_template_id_722fd5ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./Typography.vue?vue&type=template&id=722fd5ca */ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/typography/Typography.vue?vue&type=template&id=722fd5ca");


/***/ }),

/***/ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/typography/Typography.vue?vue&type=template&id=722fd5ca":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/typography/Typography.vue?vue&type=template&id=722fd5ca ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["v-typography", [$setup.type]])
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/***/ ((module) => {

module.exports = vue;

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
/*!**************************************!*\
  !*** ./packages/typography/index.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Typrography": () => (/* binding */ Typrography),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Typography_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Typography.vue */ "./packages/typography/Typography.vue");


_Typography_vue__WEBPACK_IMPORTED_MODULE_0__["default"].install = app => {
    app.component(_Typography_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Typography_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

const Typrography = _Typography_vue__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Typography_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=typography.js.map