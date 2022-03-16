"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/new-meal",{

/***/ "./pages/new-meal.js":
/*!***************************!*\
  !*** ./pages/new-meal.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_cheng_Desktop_hope_FoodApps_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_cheng_Desktop_hope_FoodApps_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_cheng_Desktop_hope_FoodApps_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar NewMealForm = function() {\n    _s();\n    var mealNameInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var mealImagePathInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var mealNumberofDishInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var chefInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    //Implement the newMealHandler function\n    var newMealHandler = function() {\n        var _ref = _asyncToGenerator(C_Users_cheng_Desktop_hope_FoodApps_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var mealData, response, data;\n            return C_Users_cheng_Desktop_hope_FoodApps_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        mealData = {\n                            name: mealNameInputRef.current.value,\n                            image_path: mealImagePathInputRef.current.value,\n                            dishes: mealNumberofDishInputRef.current.value,\n                            chef: chefInputRef.current.value\n                        };\n                        _ctx.next = 4;\n                        return fetch(\"/api/new-meal\", {\n                            method: \"POST\",\n                            body: JSON.stringify(mealData),\n                            headers: {\n                                \"content-Type\": \"application/json\"\n                            }\n                        });\n                    case 4:\n                        response = _ctx.sent;\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        data = _ctx.sent;\n                        console.log(data);\n                        router.replace(\"/\");\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function newMealHandler(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var INPUT_STYLE = \"my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex-col px-12 py-12 max-w-3x1 mx-auto shadow-x1 rounded-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"font-light text-4x1\",\n                children: \"Add a new meal\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Meal Name\",\n                        required: true,\n                        className: INPUT_STYLE\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        max: \"5\",\n                        min: \"1\",\n                        placeholder: \"Number of Dishes\",\n                        required: true,\n                        className: INPUT_STYLE\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Name of chef\",\n                        required: true,\n                        className: INPUT_STYLE\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-yellow-500 text-gray-800 font-medium text-x1 inline-flex w-full items-center px-4 py-4\",\n                        children: \"Add Now\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, _this));\n};\n_s(NewMealForm, \"E0ukxbdIh20knPHP5HTBkeeqeeA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NewMealForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewMealForm);\nvar _c;\n$RefreshReg$(_c, \"NewMealForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXctbWVhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxHQUFLLENBQUNFLFdBQVcsR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFDdkIsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBR0gsNkNBQU07SUFDL0IsR0FBSyxDQUFDSSxNQUFNLEdBQUdILHNEQUFTO0lBQ3hCLEdBQUssQ0FBQ0kscUJBQXFCLEdBQUdMLDZDQUFNO0lBQ3BDLEdBQUssQ0FBQ00sd0JBQXdCLEdBQUdOLDZDQUFNO0lBQ3ZDLEdBQUssQ0FBQ08sWUFBWSxHQUFHUCw2Q0FBTTtJQUUzQixFQUF1QztJQUN2QyxHQUFLLENBQUNRLGNBQWM7b0xBQUcsUUFBUSxTQUFEQyxLQUFLLEVBQUssQ0FBQztnQkFJL0JDLFFBQVEsRUFTUkMsUUFBUSxFQVNSQyxJQUFJOzs7O3dCQXJCVkgsS0FBSyxDQUFDSSxjQUFjO3dCQUdkSCxRQUFRLEdBQUcsQ0FBQzs0QkFDZEksSUFBSSxFQUFFWCxnQkFBZ0IsQ0FBQ1ksT0FBTyxDQUFDQyxLQUFLOzRCQUNwQ0MsVUFBVSxFQUFFWixxQkFBcUIsQ0FBQ1UsT0FBTyxDQUFDQyxLQUFLOzRCQUMvQ0UsTUFBTSxFQUFFWix3QkFBd0IsQ0FBQ1MsT0FBTyxDQUFDQyxLQUFLOzRCQUM5Q0csSUFBSSxFQUFFWixZQUFZLENBQUNRLE9BQU8sQ0FBQ0MsS0FBSzt3QkFDcEMsQ0FBQzs7K0JBSXNCSSxLQUFLLENBQUMsQ0FBZSxnQkFBQyxDQUFDOzRCQUMxQ0MsTUFBTSxFQUFFLENBQU07NEJBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNkLFFBQVE7NEJBQzdCZSxPQUFPLEVBQUUsQ0FBQztnQ0FDTixDQUFjLGVBQUMsQ0FBa0I7NEJBQ3JDLENBQUM7d0JBQ0wsQ0FBQzs7d0JBTktkLFFBQVE7OytCQVNLQSxRQUFRLENBQUNlLElBQUk7O3dCQUExQmQsSUFBSTt3QkFDVmUsT0FBTyxDQUFDQyxHQUFHLENBQUNoQixJQUFJO3dCQUVoQlIsTUFBTSxDQUFDeUIsT0FBTyxDQUFDLENBQUc7Ozs7OztRQUN0QixDQUFDO3dCQTFCS3JCLGNBQWMsQ0FBVUMsS0FBSzs7OztJQTJCbkMsR0FBSyxDQUFDcUIsV0FBVyxHQUFHLENBQW9JO0lBRTFKLE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQTZEOzt3RkFDdkVDLENBQUU7Z0JBQUNELFNBQVMsRUFBQyxDQUFxQjswQkFBQyxDQUFjOzs7Ozs7d0ZBQ2pERSxDQUFJOztnR0FDQUMsQ0FBSzt3QkFBQ0MsSUFBSSxFQUFDLENBQU07d0JBQUNDLFdBQVcsRUFBQyxDQUFXO3dCQUFDQyxRQUFRO3dCQUFDTixTQUFTLEVBQUVGLFdBQVc7Ozs7OztnR0FDekVLLENBQUs7d0JBQUNDLElBQUksRUFBQyxDQUFRO3dCQUFDRyxHQUFHLEVBQUMsQ0FBRzt3QkFBQ0MsR0FBRyxFQUFDLENBQUc7d0JBQUNILFdBQVcsRUFBQyxDQUFrQjt3QkFBQ0MsUUFBUTt3QkFBQ04sU0FBUyxFQUFFRixXQUFXOzs7Ozs7Z0dBQ2xHSyxDQUFLO3dCQUFDQyxJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsV0FBVyxFQUFDLENBQWM7d0JBQUNDLFFBQVE7d0JBQUNOLFNBQVMsRUFBRUYsV0FBVzs7Ozs7O2dHQUM1RVcsQ0FBTTt3QkFBQ0wsSUFBSSxFQUFDLENBQVE7d0JBQUNKLFNBQVMsRUFBQyxDQUEyRjtrQ0FBQyxDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJL0ksQ0FBQztHQWhESzlCLFdBQVc7O1FBRUVELGtEQUFTOzs7S0FGdEJDLFdBQVc7QUFrRGpCLCtEQUFlQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ldy1tZWFsLmpzP2M0NTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTmV3TWVhbEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZWFsTmFtZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IG1lYWxJbWFnZVBhdGhJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgbWVhbE51bWJlcm9mRGlzaElucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBjaGVmSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgICAvL0ltcGxlbWVudCB0aGUgbmV3TWVhbEhhbmRsZXIgZnVuY3Rpb25cclxuICAgIGNvbnN0IG5ld01lYWxIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIC8vc3RvcmUgdGhlIG1lYWwgZGF0IGluIGFuIG9iamVjdFxyXG4gICAgICAgIGNvbnN0IG1lYWxEYXRhID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBtZWFsTmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIGltYWdlX3BhdGg6IG1lYWxJbWFnZVBhdGhJbnB1dFJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICAgICAgICBkaXNoZXM6IG1lYWxOdW1iZXJvZkRpc2hJbnB1dFJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICAgICAgICBjaGVmOiBjaGVmSW5wdXRSZWYuY3VycmVudC52YWx1ZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL3VzZSB0aGUgRmV0Y2ggQVBJIHRvIG1ha2UgcmVxdWVzdCB0byB0aGUgbmV3LW1lYWwtYXBpXHJcbiAgICAgICAgLy90aGVuIGdldCBiYWNrIHRvIHJlc3BvbnNlXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvbmV3LW1lYWxcIix7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsIFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtZWFsRGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiY29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHBhcnNlcyBKU09OIHJlc3BvbnNlIGludG8gbmF0aXZlIEphdmFTY3JpcHQgb2JqZWN0c1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuXHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgSU5QVVRfU1RZTEUgPSBcIm15LTIgcC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTMwMCBmb2N1czpyaW5nLW9wYWNpdHktNTAgZm9jdXM6b3V0bGluZS1ub25lIHctZnVsbCBoLTEwIHJvdW5kZWQtbWRcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wgcHgtMTIgcHktMTIgbWF4LXctM3gxIG14LWF1dG8gc2hhZG93LXgxIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1saWdodCB0ZXh0LTR4MVwiPkFkZCBhIG5ldyBtZWFsPC9oMT5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNZWFsIE5hbWVcIiByZXF1aXJlZCBjbGFzc05hbWU9e0lOUFVUX1NUWUxFfS8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWF4PVwiNVwiIG1pbj1cIjFcIiBwbGFjZWhvbGRlcj1cIk51bWJlciBvZiBEaXNoZXNcIiByZXF1aXJlZCBjbGFzc05hbWU9e0lOUFVUX1NUWUxFfSAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWUgb2YgY2hlZlwiIHJlcXVpcmVkIGNsYXNzTmFtZT17SU5QVVRfU1RZTEV9IC8+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJnLXllbGxvdy01MDAgdGV4dC1ncmF5LTgwMCBmb250LW1lZGl1bSB0ZXh0LXgxIGlubGluZS1mbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIgcHgtNCBweS00XCI+QWRkIE5vdzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3TWVhbEZvcm0iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlUm91dGVyIiwiTmV3TWVhbEZvcm0iLCJtZWFsTmFtZUlucHV0UmVmIiwicm91dGVyIiwibWVhbEltYWdlUGF0aElucHV0UmVmIiwibWVhbE51bWJlcm9mRGlzaElucHV0UmVmIiwiY2hlZklucHV0UmVmIiwibmV3TWVhbEhhbmRsZXIiLCJldmVudCIsIm1lYWxEYXRhIiwicmVzcG9uc2UiLCJkYXRhIiwicHJldmVudERlZmF1bHQiLCJuYW1lIiwiY3VycmVudCIsInZhbHVlIiwiaW1hZ2VfcGF0aCIsImRpc2hlcyIsImNoZWYiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSIsIklOUFVUX1NUWUxFIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm1heCIsIm1pbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/new-meal.js\n");

/***/ })

});