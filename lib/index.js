(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["Vtui"] = factory(require("vue"));
	else
		root["Vtui"] = factory(root["vue"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_vue__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/exportHelper.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/exportHelper.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


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

/***/ "./packages/button/Button.vue":
/*!************************************!*\
  !*** ./packages/button/Button.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_vue_vue_type_template_id_4fc6c08a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=4fc6c08a */ "./packages/button/Button.vue?vue&type=template&id=4fc6c08a");
/* harmony import */ var _Button_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&setup=true&lang=js */ "./packages/button/Button.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_fashandian_Documents_Program_vtui_node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_fashandian_Documents_Program_vtui_node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Button_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Button_vue_vue_type_template_id_4fc6c08a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"packages/button/Button.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/button/Button.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/button/Button.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);



const __default__ = {
    name: "VButton",
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object.assign(__default__, {
  props: {
    type: {
        required: false,
        type: String,
        default: 'default'
    },
    size: {
        required: false,
        type: String,
        default: 'default'
    }
},
  setup(__props, { expose }) {
  expose();

const props = __props



const type = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.type === 'default' ? '' : 'v-btn-' + props.type);
const size = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({ large: 'v-btn-lg', 'default': '', 'small': 'v-btn-sm' }[props.size]));

const __returned__ = { props, type, size, computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}));

/***/ }),

/***/ "./packages/typography/Typography.vue":
/*!********************************************!*\
  !*** ./packages/typography/Typography.vue ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Typography_vue_vue_type_template_id_722fd5ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Typography.vue?vue&type=template&id=722fd5ca */ "./packages/typography/Typography.vue?vue&type=template&id=722fd5ca");
/* harmony import */ var _Typography_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Typography.vue?vue&type=script&setup=true&lang=js */ "./packages/typography/Typography.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Users_fashandian_Documents_Program_vtui_node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_fashandian_Documents_Program_vtui_node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Typography_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Typography_vue_vue_type_template_id_722fd5ca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"packages/typography/Typography.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/typography/Typography.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/typography/Typography.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);



const __default__ = {
    name: "VTypography",
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object.assign(__default__, {
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

/***/ "./packages/button/Button.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************!*\
  !*** ./packages/button/Button.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Button_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Button_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./Button.vue?vue&type=script&setup=true&lang=js */ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/button/Button.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./packages/typography/Typography.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************!*\
  !*** ./packages/typography/Typography.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Typography_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Typography_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./Typography.vue?vue&type=script&setup=true&lang=js */ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/typography/Typography.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./packages/button/Button.vue?vue&type=template&id=4fc6c08a":
/*!******************************************************************!*\
  !*** ./packages/button/Button.vue?vue&type=template&id=4fc6c08a ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Button_vue_vue_type_template_id_4fc6c08a__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Button_vue_vue_type_template_id_4fc6c08a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./Button.vue?vue&type=template&id=4fc6c08a */ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/button/Button.vue?vue&type=template&id=4fc6c08a");


/***/ }),

/***/ "./packages/typography/Typography.vue?vue&type=template&id=722fd5ca":
/*!**************************************************************************!*\
  !*** ./packages/typography/Typography.vue?vue&type=template&id=722fd5ca ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Typography_vue_vue_type_template_id_722fd5ca__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_pnpm_vue_loader_17_0_0_webpack_5_74_0_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_2_use_0_Typography_vue_vue_type_template_id_722fd5ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./Typography.vue?vue&type=template&id=722fd5ca */ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/typography/Typography.vue?vue&type=template&id=722fd5ca");


/***/ }),

/***/ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/button/Button.vue?vue&type=template&id=4fc6c08a":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/button/Button.vue?vue&type=template&id=4fc6c08a ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["v-btn", [$setup.type, $setup.size]])
  }, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

/***/ }),

/***/ "./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/typography/Typography.vue?vue&type=template&id=722fd5ca":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/.pnpm/vue-loader@17.0.0_webpack@5.74.0/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[2].use[0]!./packages/typography/Typography.vue?vue&type=template&id=722fd5ca ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
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

/***/ "./packages/button/index.js":
/*!**********************************!*\
  !*** ./packages/button/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var _Button_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue */ "./packages/button/Button.vue");


_Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"].install = app => {
    app.component(_Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

const Button = _Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (_Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./packages/index.js":
/*!***************************!*\
  !*** ./packages/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_0__.Button; },
/* harmony export */   "Typography": function() { return /* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_1__.Typography; }
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./packages/button/index.js");
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography */ "./packages/typography/index.js");




/***/ }),

/***/ "./packages/typography/index.js":
/*!**************************************!*\
  !*** ./packages/typography/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Typography": function() { return /* binding */ Typography; }
/* harmony export */ });
/* harmony import */ var _Typography_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Typography.vue */ "./packages/typography/Typography.vue");


_Typography_vue__WEBPACK_IMPORTED_MODULE_0__["default"].install = app => {
    app.component(_Typography_vue__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Typography_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
}

const Typography = _Typography_vue__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (_Typography_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vue__;

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

module.exports = JSON.parse('{"name":"vtui","version":"1.0.4","description":"vue template ui","main":"lib/index.js","scripts":{"dev":"npx webpack serve --config webpack.dev.js --progress --color --hot","build:styles":"gulp","build":"npx webpack --progress --color && pnpm run build:styles","pack:local":"npm version patch -m \\"build local test package\\" && pnpm run build && npm pack"},"author":"fashandian","license":"MIT","devDependencies":{"autoprefixer":"^10.4.8","css-loader":"^6.7.1","cssnano":"^5.1.12","gulp":"^4.0.2","gulp-cli":"^2.3.0","gulp-less":"^5.0.0","gulp-postcss":"^9.0.1","html-webpack-plugin":"^5.5.0","less":"^4.1.3","less-loader":"^11.0.0","postcss":"^8.4.14","style-loader":"^3.3.1","through2":"^4.0.2","vue":"^3.2.37","vue-loader":"^17.0.0","vue-template-compiler":"^2.7.8","webpack":"^5.74.0","webpack-cli":"^4.10.0","webpack-dev-server":"^4.9.3"},"peerDependencies":{"vue":"^3.2.37"},"files":["lib","src","packages","example"]}');

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": function() { return /* reexport safe */ _packages__WEBPACK_IMPORTED_MODULE_0__.Button; },
/* harmony export */   "Typography": function() { return /* reexport safe */ _packages__WEBPACK_IMPORTED_MODULE_0__.Typography; }
/* harmony export */ });
/* harmony import */ var _packages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../packages */ "./packages/index.js");


const install = app => {
    console.log(app, _packages__WEBPACK_IMPORTED_MODULE_0__);
    Object.keys(_packages__WEBPACK_IMPORTED_MODULE_0__).forEach(name => app.use(_packages__WEBPACK_IMPORTED_MODULE_0__[name]));
}

// if (typeof window !== undefined && window.Vue) {
//     install(window.Vue);
// }



/* harmony default export */ __webpack_exports__["default"] = ({
    install,
    ..._packages__WEBPACK_IMPORTED_MODULE_0__,
    version: (__webpack_require__(/*! ../package.json */ "./package.json").version),
    name: (__webpack_require__(/*! ../package.json */ "./package.json").name)
});
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map