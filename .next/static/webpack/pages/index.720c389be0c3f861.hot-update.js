"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/home/TrendingSlide.jsx":
/*!***********************************************!*\
  !*** ./src/components/home/TrendingSlide.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TrendingSlide; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_icon_category_movie_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icon-category-movie.svg */ \"./src/assets/icon-category-movie.svg\");\n/* harmony import */ var _assets_icon_category_tv_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icon-category-tv.svg */ \"./src/assets/icon-category-tv.svg\");\n\n\n\n\n\n\nfunction TrendingSlide(props) {\n    const { src , year , video , title , id  } = props;\n    const isMovie = video === false;\n    const genre = isMovie ? \"movie\" : \"TV series\";\n    const imgSrc = isMovie ? _assets_icon_category_movie_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"] : _assets_icon_category_tv_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\".concat(isMovie ? \"movie\" : \"tv-show\", \"/\").concat(id),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"trending-slide\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"https://image.tmdb.org/t/p/w500\".concat(src),\n                    alt: title\n                }, void 0, false, {\n                    fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\home\\\\TrendingSlide.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slide-text\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"info\",\n                            children: [\n                                String(year).substring(0, 4),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: imgSrc,\n                                    alt: \"movie logo\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\home\\\\TrendingSlide.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 13\n                                }, this),\n                                \" \",\n                                genre\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\home\\\\TrendingSlide.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"title\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\home\\\\TrendingSlide.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\home\\\\TrendingSlide.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\home\\\\TrendingSlide.jsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\home\\\\TrendingSlide.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = TrendingSlide;\nvar _c;\n$RefreshReg$(_c, \"TrendingSlide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1RyZW5kaW5nU2xpZGUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNGO0FBQ0g7QUFDbUM7QUFDTjtBQUV4QyxTQUFTSyxjQUFjQyxLQUFLLEVBQUU7SUFDM0MsTUFBTSxFQUFFQyxJQUFHLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLEdBQUUsRUFBRSxHQUFHTDtJQUN4QyxNQUFNTSxVQUFVSCxVQUFVLEtBQUs7SUFDL0IsTUFBTUksUUFBUUQsVUFBVSxVQUFVLFdBQVc7SUFDN0MsTUFBTUUsU0FBU0YsVUFBVVQsdUVBQVNBLEdBQUdDLG9FQUFNO0lBRTNDLHFCQUNFLDhEQUFDSCxrREFBSUE7UUFBQ2MsTUFBTSxJQUFxQ0osT0FBakNDLFVBQVUsVUFBVSxTQUFTLEVBQUMsS0FBTSxPQUFIRDtrQkFDL0MsNEVBQUNLO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDakIsbURBQUtBO29CQUFDTyxLQUFLLGtDQUFzQyxPQUFKQTtvQkFBT1csS0FBS1I7Ozs7Ozs4QkFDMUQsOERBQUNNO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQUtGLFdBQVU7O2dDQUNiRyxPQUFPWixNQUFNYSxTQUFTLENBQUMsR0FBRztnQ0FBSTs4Q0FDL0IsOERBQUNDO29DQUFJZixLQUFLTztvQ0FBUUksS0FBSTs7Ozs7O2dDQUFtQjtnQ0FBRUw7Ozs7Ozs7c0NBRTdDLDhEQUFDTTs0QkFBS0YsV0FBVTtzQ0FBU1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS25DLENBQUM7S0FwQnVCTCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lL1RyZW5kaW5nU2xpZGUuanN4PzU1YWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbW92aWVMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbi1jYXRlZ29yeS1tb3ZpZS5zdmdcIjtcclxuaW1wb3J0IHR2TG9nbyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ljb24tY2F0ZWdvcnktdHYuc3ZnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmVuZGluZ1NsaWRlKHByb3BzKSB7XHJcbiAgY29uc3QgeyBzcmMsIHllYXIsIHZpZGVvLCB0aXRsZSwgaWQgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGlzTW92aWUgPSB2aWRlbyA9PT0gZmFsc2U7XHJcbiAgY29uc3QgZ2VucmUgPSBpc01vdmllID8gXCJtb3ZpZVwiIDogXCJUViBzZXJpZXNcIjtcclxuICBjb25zdCBpbWdTcmMgPSBpc01vdmllID8gbW92aWVMb2dvIDogdHZMb2dvO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC8ke2lzTW92aWUgPyBcIm1vdmllXCIgOiBcInR2LXNob3dcIn0vJHtpZH1gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1zbGlkZVwiPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwJHtzcmN9YH0gYWx0PXt0aXRsZX0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLXRleHRcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgICAge1N0cmluZyh5ZWFyKS5zdWJzdHJpbmcoMCwgNCl9e1wiIFwifVxyXG4gICAgICAgICAgICA8aW1nIHNyYz17aW1nU3JjfSBhbHQ9XCJtb3ZpZSBsb2dvXCI+PC9pbWc+IHtnZW5yZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiUmVhY3QiLCJtb3ZpZUxvZ28iLCJ0dkxvZ28iLCJUcmVuZGluZ1NsaWRlIiwicHJvcHMiLCJzcmMiLCJ5ZWFyIiwidmlkZW8iLCJ0aXRsZSIsImlkIiwiaXNNb3ZpZSIsImdlbnJlIiwiaW1nU3JjIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsImFsdCIsInNwYW4iLCJTdHJpbmciLCJzdWJzdHJpbmciLCJpbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/home/TrendingSlide.jsx\n"));

/***/ })

});