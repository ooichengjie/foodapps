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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_cheng_Desktop_hope_FoodApps_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_cheng_Desktop_hope_FoodApps_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_cheng_Desktop_hope_FoodApps_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar NewMealForm = function() {\n    _s();\n    var mealNameInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var mealImagePathInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var mealNumberofDishInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var chefInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    //Implement the newMealHandler function\n    var newMealHandler = function() {\n        var _ref = _asyncToGenerator(C_Users_cheng_Desktop_hope_FoodApps_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var mealData, response, data;\n            return C_Users_cheng_Desktop_hope_FoodApps_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        mealData = {\n                            name: mealNameInputRef.current.value,\n                            image_path: mealImagePathInputRef.current.value,\n                            dishes: mealNumberofDishInputRef.current.value,\n                            chef: chefInputRef.current.value\n                        };\n                        _ctx.next = 4;\n                        return fetch(\"/api/new-meal\", {\n                            method: \"POST\",\n                            body: JSON.stringify(mealData),\n                            headers: {\n                                \"content-Type\": \"application/json\"\n                            }\n                        });\n                    case 4:\n                        response = _ctx.sent;\n                        _ctx.next = 7;\n                        return response.json();\n                    case 7:\n                        data = _ctx.sent;\n                        console.log(data);\n                        router.replace(\"/\");\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function newMealHandler(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var INPUT_STYLE = \"my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex-col px-12 py-12 max-w-3x1 mx-auto shadow-x1 rounded-2x1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"font-light text-4x1\",\n                children: \"Add a new meal\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: newMealHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Meal Name\",\n                        required: true,\n                        className: INPUT_STYLE\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        max: \"5\",\n                        min: \"1\",\n                        placeholder: \"Number of Dishes\",\n                        required: true,\n                        className: INPUT_STYLE\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Name of chef\",\n                        required: true,\n                        className: INPUT_STYLE\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-yellow-500 text-gray-800 font-medium text-x1 inline-flex w-full items-center px-4 py-4\",\n                        children: \"Add Now\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, _this));\n};\n_s(NewMealForm, \"E0ukxbdIh20knPHP5HTBkeeqeeA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NewMealForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewMealForm);\nvar _c;\n$RefreshReg$(_c, \"NewMealForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9uZXctbWVhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QjtBQUNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2QyxHQUFLLENBQUNFLFdBQVcsR0FBRyxRQUFRLEdBQUYsQ0FBQzs7SUFDdkIsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBR0gsNkNBQU07SUFDL0IsR0FBSyxDQUFDSSxNQUFNLEdBQUdILHNEQUFTO0lBQ3hCLEdBQUssQ0FBQ0kscUJBQXFCLEdBQUdMLDZDQUFNO0lBQ3BDLEdBQUssQ0FBQ00sd0JBQXdCLEdBQUdOLDZDQUFNO0lBQ3ZDLEdBQUssQ0FBQ08sWUFBWSxHQUFHUCw2Q0FBTTtJQUUzQixFQUF1QztJQUN2QyxHQUFLLENBQUNRLGNBQWM7b0xBQUcsUUFBUSxTQUFEQyxLQUFLLEVBQUssQ0FBQztnQkFJL0JDLFFBQVEsRUFTUkMsUUFBUSxFQVNSQyxJQUFJOzs7O3dCQXJCVkgsS0FBSyxDQUFDSSxjQUFjO3dCQUdkSCxRQUFRLEdBQUcsQ0FBQzs0QkFDZEksSUFBSSxFQUFFWCxnQkFBZ0IsQ0FBQ1ksT0FBTyxDQUFDQyxLQUFLOzRCQUNwQ0MsVUFBVSxFQUFFWixxQkFBcUIsQ0FBQ1UsT0FBTyxDQUFDQyxLQUFLOzRCQUMvQ0UsTUFBTSxFQUFFWix3QkFBd0IsQ0FBQ1MsT0FBTyxDQUFDQyxLQUFLOzRCQUM5Q0csSUFBSSxFQUFFWixZQUFZLENBQUNRLE9BQU8sQ0FBQ0MsS0FBSzt3QkFDcEMsQ0FBQzs7K0JBSXNCSSxLQUFLLENBQUMsQ0FBZSxnQkFBQyxDQUFDOzRCQUMxQ0MsTUFBTSxFQUFFLENBQU07NEJBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNkLFFBQVE7NEJBQzdCZSxPQUFPLEVBQUUsQ0FBQztnQ0FDTixDQUFjLGVBQUMsQ0FBa0I7NEJBQ3JDLENBQUM7d0JBQ0wsQ0FBQzs7d0JBTktkLFFBQVE7OytCQVNLQSxRQUFRLENBQUNlLElBQUk7O3dCQUExQmQsSUFBSTt3QkFDVmUsT0FBTyxDQUFDQyxHQUFHLENBQUNoQixJQUFJO3dCQUVoQlIsTUFBTSxDQUFDeUIsT0FBTyxDQUFDLENBQUc7Ozs7OztRQUN0QixDQUFDO3dCQTFCS3JCLGNBQWMsQ0FBVUMsS0FBSzs7OztJQTJCbkMsR0FBSyxDQUFDcUIsV0FBVyxHQUFHLENBQW9JO0lBRTFKLE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQThEOzt3RkFDeEVDLENBQUU7Z0JBQUNELFNBQVMsRUFBQyxDQUFxQjswQkFBQyxDQUFjOzs7Ozs7d0ZBQ2pERSxDQUFJO2dCQUFDQyxRQUFRLEVBQUUzQixjQUFjOztnR0FDekI0QixDQUFLO3dCQUFDQyxJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsV0FBVyxFQUFDLENBQVc7d0JBQUNDLFFBQVE7d0JBQUNQLFNBQVMsRUFBRUYsV0FBVzs7Ozs7O2dHQUN6RU0sQ0FBSzt3QkFBQ0MsSUFBSSxFQUFDLENBQVE7d0JBQUNHLEdBQUcsRUFBQyxDQUFHO3dCQUFDQyxHQUFHLEVBQUMsQ0FBRzt3QkFBQ0gsV0FBVyxFQUFDLENBQWtCO3dCQUFDQyxRQUFRO3dCQUFDUCxTQUFTLEVBQUVGLFdBQVc7Ozs7OztnR0FDbEdNLENBQUs7d0JBQUNDLElBQUksRUFBQyxDQUFNO3dCQUFDQyxXQUFXLEVBQUMsQ0FBYzt3QkFBQ0MsUUFBUTt3QkFBQ1AsU0FBUyxFQUFFRixXQUFXOzs7Ozs7Z0dBQzVFWSxDQUFNO3dCQUFDTCxJQUFJLEVBQUMsQ0FBUTt3QkFBQ0wsU0FBUyxFQUFDLENBQTJGO2tDQUFDLENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkvSSxDQUFDO0dBaERLOUIsV0FBVzs7UUFFRUQsa0RBQVM7OztLQUZ0QkMsV0FBVztBQWtEakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lYWwuanM/YzQ1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBOZXdNZWFsRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1lYWxOYW1lSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgbWVhbEltYWdlUGF0aElucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBtZWFsTnVtYmVyb2ZEaXNoSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGNoZWZJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICAgIC8vSW1wbGVtZW50IHRoZSBuZXdNZWFsSGFuZGxlciBmdW5jdGlvblxyXG4gICAgY29uc3QgbmV3TWVhbEhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICAgICAgLy9zdG9yZSB0aGUgbWVhbCBkYXQgaW4gYW4gb2JqZWN0XHJcbiAgICAgICAgY29uc3QgbWVhbERhdGEgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IG1lYWxOYW1lSW5wdXRSZWYuY3VycmVudC52YWx1ZSxcclxuICAgICAgICAgICAgaW1hZ2VfcGF0aDogbWVhbEltYWdlUGF0aElucHV0UmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIGRpc2hlczogbWVhbE51bWJlcm9mRGlzaElucHV0UmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIGNoZWY6IGNoZWZJbnB1dFJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vdXNlIHRoZSBGZXRjaCBBUEkgdG8gbWFrZSByZXF1ZXN0IHRvIHRoZSBuZXctbWVhbC1hcGlcclxuICAgICAgICAvL3RoZW4gZ2V0IGJhY2sgdG8gcmVzcG9uc2VcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9uZXctbWVhbFwiLHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIiwgXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1lYWxEYXRhKSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJjb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gcGFyc2VzIEpTT04gcmVzcG9uc2UgaW50byBuYXRpdmUgSmF2YVNjcmlwdCBvYmplY3RzXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG5cclxuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9cIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBJTlBVVF9TVFlMRSA9IFwibXktMiBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbmRpZ28tMzAwIGZvY3VzOnJpbmctb3BhY2l0eS01MCBmb2N1czpvdXRsaW5lLW5vbmUgdy1mdWxsIGgtMTAgcm91bmRlZC1tZFwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWNvbCBweC0xMiBweS0xMiBtYXgtdy0zeDEgbXgtYXV0byBzaGFkb3cteDEgcm91bmRlZC0yeDFcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1saWdodCB0ZXh0LTR4MVwiPkFkZCBhIG5ldyBtZWFsPC9oMT5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17bmV3TWVhbEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1lYWwgTmFtZVwiIHJlcXVpcmVkIGNsYXNzTmFtZT17SU5QVVRfU1RZTEV9Lz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBtYXg9XCI1XCIgbWluPVwiMVwiIHBsYWNlaG9sZGVyPVwiTnVtYmVyIG9mIERpc2hlc1wiIHJlcXVpcmVkIGNsYXNzTmFtZT17SU5QVVRfU1RZTEV9IC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZSBvZiBjaGVmXCIgcmVxdWlyZWQgY2xhc3NOYW1lPXtJTlBVVF9TVFlMRX0gLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwMCB0ZXh0LWdyYXktODAwIGZvbnQtbWVkaXVtIHRleHQteDEgaW5saW5lLWZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBweC00IHB5LTRcIj5BZGQgTm93PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdNZWFsRm9ybSJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJOZXdNZWFsRm9ybSIsIm1lYWxOYW1lSW5wdXRSZWYiLCJyb3V0ZXIiLCJtZWFsSW1hZ2VQYXRoSW5wdXRSZWYiLCJtZWFsTnVtYmVyb2ZEaXNoSW5wdXRSZWYiLCJjaGVmSW5wdXRSZWYiLCJuZXdNZWFsSGFuZGxlciIsImV2ZW50IiwibWVhbERhdGEiLCJyZXNwb25zZSIsImRhdGEiLCJwcmV2ZW50RGVmYXVsdCIsIm5hbWUiLCJjdXJyZW50IiwidmFsdWUiLCJpbWFnZV9wYXRoIiwiZGlzaGVzIiwiY2hlZiIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlIiwiSU5QVVRfU1RZTEUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJtYXgiLCJtaW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/new-meal.js\n");

/***/ })

});