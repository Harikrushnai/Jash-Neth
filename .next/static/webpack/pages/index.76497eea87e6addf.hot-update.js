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

/***/ "./components/review.tsx":
/*!*******************************!*\
  !*** ./components/review.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Review; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Review(param) {\n    let { review: { stars, name, company, thumbnail = \"\", text } } = param;\n    const starIcons = [];\n    for(let i = 1; i <= stars; i++){\n        starIcons.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: \"/icons/star.svg\",\n            alt: \"\",\n            width: 18,\n            height: 17\n        }, i, false, {\n            fileName: \"C:\\\\Users\\\\VASANT\\\\Desktop\\\\Lala\\\\components\\\\review.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this));\n    }\n    const randomcolor = [\n        \"#A7D7F84D\",\n        \"#FCD4E54D\",\n        \"#FCFAC44D\"\n    ];\n    return(// intial-width: 577\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border rounded-lg max-w-[577px] mx-auto grid sm:grid-cols-2 grid-cols-1 p-4 shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-left font-medium text-[14px]\",\n                                children: [\n                                    stars,\n                                    \".0 Star\",\n                                    stars > 1 ? \"s\" : \"\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\VASANT\\\\Desktop\\\\Lala\\\\components\\\\review.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-1 my-2\",\n                                children: starIcons\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VASANT\\\\Desktop\\\\Lala\\\\components\\\\review.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\VASANT\\\\Desktop\\\\Lala\\\\components\\\\review.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex sm:mb-2 mb-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"/icons/reviewer_thumb.svg\",\n                                alt: \"\",\n                                width: 48,\n                                height: 48,\n                                className: \"block border-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\VASANT\\\\Desktop\\\\Lala\\\\components\\\\review.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-left ml-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"capitalize font-semibold text-[16px]\",\n                                        children: name || \"Client Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VASANT\\\\Desktop\\\\Lala\\\\components\\\\review.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-[14px]\",\n                                        children: company || \"Company\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\VASANT\\\\Desktop\\\\Lala\\\\components\\\\review.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\VASANT\\\\Desktop\\\\Lala\\\\components\\\\review.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\VASANT\\\\Desktop\\\\Lala\\\\components\\\\review.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VASANT\\\\Desktop\\\\Lala\\\\components\\\\review.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-lg bg-opacity-30 p-6\",\n                style: {\n                    backgroundColor: randomcolor[Math.floor(Math.random() * randomcolor.length)]\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/icons/quotes.svg\",\n                        alt: \"\",\n                        width: 29,\n                        height: 24\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VASANT\\\\Desktop\\\\Lala\\\\components\\\\review.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mt-5\",\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\VASANT\\\\Desktop\\\\Lala\\\\components\\\\review.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\VASANT\\\\Desktop\\\\Lala\\\\components\\\\review.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\VASANT\\\\Desktop\\\\Lala\\\\components\\\\review.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this));\n}\n_c = Review;\nvar _c;\n$RefreshReg$(_c, \"Review\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Jldmlldy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStCO0FBRWhCLFNBQVNDLE9BQU8sS0FFOUI7UUFGOEIsRUFDN0JDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsWUFBWSxFQUFFLEVBQUVDLElBQUksRUFBRSxFQUN2RCxHQUY4QjtJQUc3QixNQUFNQyxZQUFZLEVBQUU7SUFDcEIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLEtBQUtOLE9BQU9NLElBQUs7UUFDL0JELFVBQVVFLElBQUksZUFDWiw4REFBQ1YsbURBQUtBO1lBQVNXLEtBQUk7WUFBa0JDLEtBQUk7WUFBR0MsT0FBTztZQUFJQyxRQUFRO1dBQW5ETDs7Ozs7SUFFaEI7SUFFQSxNQUFNTSxjQUFjO1FBQUM7UUFBYTtRQUFhO0tBQVk7SUFFM0QsT0FDRSxvQkFBb0I7a0JBQ3BCLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDs7MENBQ0MsOERBQUNFO2dDQUFFRCxXQUFVOztvQ0FDVmQ7b0NBQU07b0NBQVFBLFFBQVEsSUFBSSxNQUFNOzs7Ozs7OzBDQUVuQyw4REFBQ2E7Z0NBQUlDLFdBQVU7MENBQW1CVDs7Ozs7Ozs7Ozs7O2tDQUdwQyw4REFBQ1E7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDakIsbURBQUtBO2dDQUNKVyxLQUFJO2dDQUNKQyxLQUFJO2dDQUNKQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSRyxXQUFVOzs7Ozs7MENBRVosOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0U7d0NBQUdGLFdBQVU7a0RBQ1hiLFFBQVE7Ozs7OztrREFFWCw4REFBQ2M7d0NBQUVELFdBQVU7a0RBQWVaLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJN0MsOERBQUNXO2dCQUNDQyxXQUFVO2dCQUNWRyxPQUFPO29CQUNMQyxpQkFDRU4sV0FBVyxDQUFDTyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBS1QsWUFBWVUsTUFBTSxFQUFFO2dCQUMvRDs7a0NBRUEsOERBQUN6QixtREFBS0E7d0JBQUNXLEtBQUk7d0JBQW9CQyxLQUFJO3dCQUFHQyxPQUFPO3dCQUFJQyxRQUFROzs7Ozs7a0NBQ3pELDhEQUFDSTt3QkFBRUQsV0FBVTtrQ0FBUVY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUk3QjtLQW5Ed0JOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmV2aWV3LnRzeD80ODU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXZpZXcoe1xuICByZXZpZXc6IHsgc3RhcnMsIG5hbWUsIGNvbXBhbnksIHRodW1ibmFpbCA9IFwiXCIsIHRleHQgfSxcbn0pIHtcbiAgY29uc3Qgc3Rhckljb25zID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0YXJzOyBpKyspIHtcbiAgICBzdGFySWNvbnMucHVzaChcbiAgICAgIDxJbWFnZSBrZXk9e2l9IHNyYz1cIi9pY29ucy9zdGFyLnN2Z1wiIGFsdD1cIlwiIHdpZHRoPXsxOH0gaGVpZ2h0PXsxN30gLz5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgcmFuZG9tY29sb3IgPSBbXCIjQTdEN0Y4NERcIiwgXCIjRkNENEU1NERcIiwgXCIjRkNGQUM0NERcIl07XG5cbiAgcmV0dXJuIChcbiAgICAvLyBpbnRpYWwtd2lkdGg6IDU3N1xuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQtbGcgbWF4LXctWzU3N3B4XSBteC1hdXRvIGdyaWQgc206Z3JpZC1jb2xzLTIgZ3JpZC1jb2xzLTEgcC00IHNoYWRvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGVmdCBmb250LW1lZGl1bSB0ZXh0LVsxNHB4XVwiPlxuICAgICAgICAgICAge3N0YXJzfS4wIFN0YXJ7c3RhcnMgPiAxID8gXCJzXCIgOiBcIlwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEgbXktMlwiPntzdGFySWNvbnN9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzbTptYi0yIG1iLTNcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi9pY29ucy9yZXZpZXdlcl90aHVtYi5zdmdcIlxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIHdpZHRoPXs0OH1cbiAgICAgICAgICAgIGhlaWdodD17NDh9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBib3JkZXItZnVsbFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdCBtbC0yXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FwaXRhbGl6ZSBmb250LXNlbWlib2xkIHRleHQtWzE2cHhdXCI+XG4gICAgICAgICAgICAgIHtuYW1lIHx8IFwiQ2xpZW50IE5hbWVcIn1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxNHB4XVwiPntjb21wYW55IHx8IFwiQ29tcGFueVwifTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy1vcGFjaXR5LTMwIHAtNlwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOlxuICAgICAgICAgICAgcmFuZG9tY29sb3JbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZG9tY29sb3IubGVuZ3RoKV0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvaWNvbnMvcXVvdGVzLnN2Z1wiIGFsdD1cIlwiIHdpZHRoPXsyOX0gaGVpZ2h0PXsyNH0gLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNVwiPnt0ZXh0fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmV2aWV3IiwicmV2aWV3Iiwic3RhcnMiLCJuYW1lIiwiY29tcGFueSIsInRodW1ibmFpbCIsInRleHQiLCJzdGFySWNvbnMiLCJpIiwicHVzaCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicmFuZG9tY29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaDMiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/review.tsx\n"));

/***/ })

});