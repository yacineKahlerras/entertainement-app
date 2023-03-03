"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[mediaType]/[mediaId]",{

/***/ "./src/components/singleItemPage/RatingStars.jsx":
/*!*******************************************************!*\
  !*** ./src/components/singleItemPage/RatingStars.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RatingStars; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_star_empty_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/star-empty.svg */ \"./src/assets/star-empty.svg\");\n/* harmony import */ var _assets_star_full_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/star-full.svg */ \"./src/assets/star-full.svg\");\n/* harmony import */ var _assets_star_half_full_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/star-half-full.svg */ \"./src/assets/star-half-full.svg\");\n\n\n\n\n\n\nfunction RatingStars(props) {\n    const { rating  } = props;\n    const fullStarsCount = Math.floor(rating);\n    const emptyStarsCount = Math.floor(5 - rating) > 0 ? Math.floor(5 - rating) : 0;\n    const halfStar = rating % 1;\n    let fullStarsElements = [];\n    let emptyStarsElements = [];\n    for(let i = 0; i < fullStarsCount; i++){\n        fullStarsElements.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: _assets_star_full_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            alt: \"full star icon\",\n            className: \"star\"\n        }, i, false, {\n            fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\singleItemPage\\\\RatingStars.jsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this));\n    }\n    for(let i = 0; i < emptyStarsCount; i++){\n        emptyStarsElements.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: _assets_star_empty_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            alt: \"full star icon\",\n            className: \"star\"\n        }, i, false, {\n            fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\singleItemPage\\\\RatingStars.jsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this));\n    }\n    const halfStarElement = halfStar ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: _assets_star_half_full_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        alt: \"half full star icon\",\n        className: \"star\"\n    }, void 0, false, {\n        fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\singleItemPage\\\\RatingStars.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this) : \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rating-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"rating\",\n                children: rating\n            }, void 0, false, {\n                fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\singleItemPage\\\\RatingStars.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"stars-container\",\n                children: [\n                    fullStarsElements,\n                    halfStarElement,\n                    emptyStarsElements\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\singleItemPage\\\\RatingStars.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\STUFF\\\\programmation\\\\Apps\\\\34-FrontendChallenges\\\\20-entertainement-app\\\\entertainement-app\\\\src\\\\components\\\\singleItemPage\\\\RatingStars.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_c = RatingStars;\nvar _c;\n$RefreshReg$(_c, \"RatingStars\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zaW5nbGVJdGVtUGFnZS9SYXRpbmdTdGFycy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDTDtBQUMwQjtBQUNGO0FBQ1M7QUFFNUMsU0FBU0ssWUFBWUMsS0FBSyxFQUFFO0lBQ3pDLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdEO0lBQ25CLE1BQU1FLGlCQUFpQkMsS0FBS0MsS0FBSyxDQUFDSDtJQUNsQyxNQUFNSSxrQkFDSkYsS0FBS0MsS0FBSyxDQUFDLElBQUlILFVBQVUsSUFBSUUsS0FBS0MsS0FBSyxDQUFDLElBQUlILFVBQVUsQ0FBQztJQUN6RCxNQUFNSyxXQUFXTCxTQUFTO0lBRTFCLElBQUlNLG9CQUFvQixFQUFFO0lBQzFCLElBQUlDLHFCQUFxQixFQUFFO0lBRTNCLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJUCxnQkFBZ0JPLElBQUs7UUFDdkNGLGtCQUFrQkcsSUFBSSxlQUNwQiw4REFBQ2hCLG1EQUFLQTtZQUFTaUIsS0FBS2QsNkRBQVFBO1lBQUVlLEtBQUk7WUFBaUJDLFdBQVU7V0FBakRKOzs7OztJQUVoQjtJQUVBLElBQUssSUFBSUEsSUFBSSxHQUFHQSxJQUFJSixpQkFBaUJJLElBQUs7UUFDeENELG1CQUFtQkUsSUFBSSxlQUNyQiw4REFBQ0k7WUFBWUgsS0FBS2YsOERBQVNBO1lBQUVnQixLQUFJO1lBQWlCQyxXQUFVO1dBQWxESjs7Ozs7SUFFZDtJQUVBLE1BQU1NLGtCQUFrQlQseUJBQ3RCLDhEQUFDUTtRQUFJSCxLQUFLYixrRUFBWUE7UUFBRWMsS0FBSTtRQUFzQkMsV0FBVTs7Ozs7ZUFFNUQsRUFDRDtJQUVELHFCQUNFLDhEQUFDRztRQUFJSCxXQUFVOzswQkFDYiw4REFBQ0k7Z0JBQUdKLFdBQVU7MEJBQVVaOzs7Ozs7MEJBQ3hCLDhEQUFDZTtnQkFBSUgsV0FBVTs7b0JBQ1pOO29CQUNBUTtvQkFDQVA7Ozs7Ozs7Ozs7Ozs7QUFJVCxDQUFDO0tBdEN1QlQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2luZ2xlSXRlbVBhZ2UvUmF0aW5nU3RhcnMuanN4Pzk3MTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0YXJFbXB0eSBmcm9tIFwiLi4vLi4vYXNzZXRzL3N0YXItZW1wdHkuc3ZnXCI7XHJcbmltcG9ydCBzdGFyRnVsbCBmcm9tIFwiLi4vLi4vYXNzZXRzL3N0YXItZnVsbC5zdmdcIjtcclxuaW1wb3J0IHN0YXJIYWxmRnVsbCBmcm9tIFwiLi4vLi4vYXNzZXRzL3N0YXItaGFsZi1mdWxsLnN2Z1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmF0aW5nU3RhcnMocHJvcHMpIHtcclxuICBjb25zdCB7IHJhdGluZyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgZnVsbFN0YXJzQ291bnQgPSBNYXRoLmZsb29yKHJhdGluZyk7XHJcbiAgY29uc3QgZW1wdHlTdGFyc0NvdW50ID1cclxuICAgIE1hdGguZmxvb3IoNSAtIHJhdGluZykgPiAwID8gTWF0aC5mbG9vcig1IC0gcmF0aW5nKSA6IDA7XHJcbiAgY29uc3QgaGFsZlN0YXIgPSByYXRpbmcgJSAxO1xyXG5cclxuICBsZXQgZnVsbFN0YXJzRWxlbWVudHMgPSBbXTtcclxuICBsZXQgZW1wdHlTdGFyc0VsZW1lbnRzID0gW107XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZnVsbFN0YXJzQ291bnQ7IGkrKykge1xyXG4gICAgZnVsbFN0YXJzRWxlbWVudHMucHVzaChcclxuICAgICAgPEltYWdlIGtleT17aX0gc3JjPXtzdGFyRnVsbH0gYWx0PVwiZnVsbCBzdGFyIGljb25cIiBjbGFzc05hbWU9XCJzdGFyXCIgLz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGVtcHR5U3RhcnNDb3VudDsgaSsrKSB7XHJcbiAgICBlbXB0eVN0YXJzRWxlbWVudHMucHVzaChcclxuICAgICAgPGltZyBrZXk9e2l9IHNyYz17c3RhckVtcHR5fSBhbHQ9XCJmdWxsIHN0YXIgaWNvblwiIGNsYXNzTmFtZT1cInN0YXJcIiAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbGZTdGFyRWxlbWVudCA9IGhhbGZTdGFyID8gKFxyXG4gICAgPGltZyBzcmM9e3N0YXJIYWxmRnVsbH0gYWx0PVwiaGFsZiBmdWxsIHN0YXIgaWNvblwiIGNsYXNzTmFtZT1cInN0YXJcIiAvPlxyXG4gICkgOiAoXHJcbiAgICBcIlwiXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwicmF0aW5nXCI+e3JhdGluZ308L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIHtmdWxsU3RhcnNFbGVtZW50c31cclxuICAgICAgICB7aGFsZlN0YXJFbGVtZW50fVxyXG4gICAgICAgIHtlbXB0eVN0YXJzRWxlbWVudHN9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInN0YXJFbXB0eSIsInN0YXJGdWxsIiwic3RhckhhbGZGdWxsIiwiUmF0aW5nU3RhcnMiLCJwcm9wcyIsInJhdGluZyIsImZ1bGxTdGFyc0NvdW50IiwiTWF0aCIsImZsb29yIiwiZW1wdHlTdGFyc0NvdW50IiwiaGFsZlN0YXIiLCJmdWxsU3RhcnNFbGVtZW50cyIsImVtcHR5U3RhcnNFbGVtZW50cyIsImkiLCJwdXNoIiwic3JjIiwiYWx0IiwiY2xhc3NOYW1lIiwiaW1nIiwiaGFsZlN0YXJFbGVtZW50IiwiZGl2IiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/singleItemPage/RatingStars.jsx\n"));

/***/ })

});