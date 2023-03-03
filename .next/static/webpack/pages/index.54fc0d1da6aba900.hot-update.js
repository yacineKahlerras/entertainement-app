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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TrendingSlide; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_icon_category_movie_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icon-category-movie.svg */ \"./src/assets/icon-category-movie.svg\");\n/* harmony import */ var _assets_icon_category_tv_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icon-category-tv.svg */ \"./src/assets/icon-category-tv.svg\");\n\n\n\n\n\n\nfunction TrendingSlide(props) {\n    const { src , year , video , title , id  } = props;\n    const isMovie = video === false;\n    const genre = isMovie ? \"movie\" : \"TV series\";\n    const imgSrc = isMovie ? _assets_icon_category_movie_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"] : _assets_icon_category_tv_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: \"/\".concat(isMovie ? \"movie\" : \"tv-show\", \"/\").concat(id),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"trending-slide\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"https://image.tmdb.org/t/p/w500\".concat(src),\n                    alt: title\n                }, void 0, false, {\n                    fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\home\\\\TrendingSlide.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"slide-text\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"info\",\n                            children: [\n                                String(year).substring(0, 4),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: imgSrc,\n                                    alt: \"movie logo\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\home\\\\TrendingSlide.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 13\n                                }, this),\n                                \" \",\n                                genre\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\home\\\\TrendingSlide.jsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"title\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\home\\\\TrendingSlide.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\home\\\\TrendingSlide.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\home\\\\TrendingSlide.jsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\home\\\\TrendingSlide.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_c = TrendingSlide;\nvar _c;\n$RefreshReg$(_c, \"TrendingSlide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ob21lL1RyZW5kaW5nU2xpZGUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNGO0FBQ0g7QUFDbUM7QUFDTjtBQUV4QyxTQUFTSyxjQUFjQyxLQUFLLEVBQUU7SUFDM0MsTUFBTSxFQUFFQyxJQUFHLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLEdBQUUsRUFBRSxHQUFHTDtJQUN4QyxNQUFNTSxVQUFVSCxVQUFVLEtBQUs7SUFDL0IsTUFBTUksUUFBUUQsVUFBVSxVQUFVLFdBQVc7SUFDN0MsTUFBTUUsU0FBU0YsVUFBVVQsdUVBQVNBLEdBQUdDLG9FQUFNO0lBRTNDLHFCQUNFLDhEQUFDSCxrREFBSUE7UUFBQ2MsTUFBTSxJQUFxQ0osT0FBakNDLFVBQVUsVUFBVSxTQUFTLEVBQUMsS0FBTSxPQUFIRDtrQkFDL0MsNEVBQUNLO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBSVgsS0FBSyxrQ0FBc0MsT0FBSkE7b0JBQU9ZLEtBQUtUOzs7Ozs7OEJBQ3hELDhEQUFDTTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFLSCxXQUFVOztnQ0FDYkksT0FBT2IsTUFBTWMsU0FBUyxDQUFDLEdBQUc7OENBQzNCLDhEQUFDdEIsbURBQUtBO29DQUFDTyxLQUFLTztvQ0FBUUssS0FBSTs7Ozs7O2dDQUFlO2dDQUFFTjs7Ozs7OztzQ0FFM0MsOERBQUNPOzRCQUFLSCxXQUFVO3NDQUFTUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkMsQ0FBQztLQXBCdUJMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2hvbWUvVHJlbmRpbmdTbGlkZS5qc3g/NTVhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBtb3ZpZUxvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pY29uLWNhdGVnb3J5LW1vdmllLnN2Z1wiO1xyXG5pbXBvcnQgdHZMb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaWNvbi1jYXRlZ29yeS10di5zdmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyZW5kaW5nU2xpZGUocHJvcHMpIHtcclxuICBjb25zdCB7IHNyYywgeWVhciwgdmlkZW8sIHRpdGxlLCBpZCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgaXNNb3ZpZSA9IHZpZGVvID09PSBmYWxzZTtcclxuICBjb25zdCBnZW5yZSA9IGlzTW92aWUgPyBcIm1vdmllXCIgOiBcIlRWIHNlcmllc1wiO1xyXG4gIGNvbnN0IGltZ1NyYyA9IGlzTW92aWUgPyBtb3ZpZUxvZ28gOiB0dkxvZ287XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtgLyR7aXNNb3ZpZSA/IFwibW92aWVcIiA6IFwidHYtc2hvd1wifS8ke2lkfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZW5kaW5nLXNsaWRlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwJHtzcmN9YH0gYWx0PXt0aXRsZX0+PC9pbWc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS10ZXh0XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgIHtTdHJpbmcoeWVhcikuc3Vic3RyaW5nKDAsIDQpfVxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWdTcmN9IGFsdD1cIm1vdmllIGxvZ29cIiAvPiB7Z2VucmV9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIlJlYWN0IiwibW92aWVMb2dvIiwidHZMb2dvIiwiVHJlbmRpbmdTbGlkZSIsInByb3BzIiwic3JjIiwieWVhciIsInZpZGVvIiwidGl0bGUiLCJpZCIsImlzTW92aWUiLCJnZW5yZSIsImltZ1NyYyIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJhbHQiLCJzcGFuIiwiU3RyaW5nIiwic3Vic3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/home/TrendingSlide.jsx\n"));

/***/ })

});