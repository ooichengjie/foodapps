"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/new-meal";
exports.ids = ["pages/new-meal"];
exports.modules = {

/***/ "./pages/new-meal.js":
/*!***************************!*\
  !*** ./pages/new-meal.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst NewMealForm = ()=>{\n    const mealNameInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const mealImagePathInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const mealNumberOfDishInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const chefInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    //Implement the newMealHandler function\n    const newMealHandler = async (event)=>{\n        event.preventDefault();\n        //store the meal dat in an object\n        const mealData = {\n            name: mealNameInputRef.current.value,\n            image_path: mealImagePathInputRef.current.value,\n            dishes: mealNumberOfDishInputRef.current.value,\n            chef: chefInputRef.current.value\n        };\n        //use the Fetch API to make request to the new-meal-api\n        //then get back to response\n        const response = await fetch(\"/api/new-meal\", {\n            method: \"POST\",\n            body: JSON.stringify(mealData),\n            headers: {\n                \"content-Type\": \"application/json\"\n            }\n        });\n        // parses JSON response into native JavaScript objects\n        const data = await response.json();\n        console.log(data);\n        router.replace(\"/\");\n    };\n    const INPUT_STYLE = \"my-2 p-2 border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-opacity-50 focus:outline-none w-full h-10 rounded-md\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-col px-12 py-12 max-w-3x1 mx-auto shadow-x1 rounded-2x1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-light text-4x1\",\n                children: \"Add a new meal\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: newMealHandler,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Meal Name\",\n                        required: true,\n                        ref: mealNameInputRef,\n                        className: INPUT_STYLE\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Image Path\",\n                        required: true,\n                        ref: mealImagePathInputRef,\n                        className: INPUT_STYLE\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                        lineNumber: 46,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        max: \"5\",\n                        min: \"1\",\n                        placeholder: \"Number of Dishes\",\n                        required: true,\n                        ref: mealNumberOfDishInputRef,\n                        className: INPUT_STYLE\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Name of chef\",\n                        required: true,\n                        ref: chefInputRef,\n                        className: INPUT_STYLE\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-yellow-500 text-gray-800 font-medium text-x1 inline-flex w-full items-center px-4 py-4\",\n                        children: \"Add Now\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\cheng\\\\Desktop\\\\hope\\\\FoodApps\\\\pages\\\\new-meal.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewMealForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly9mb29kYXBwcy8uL3BhZ2VzL25ldy1tZWFsLmpzP2M0NTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTmV3TWVhbEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZWFsTmFtZUlucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IG1lYWxJbWFnZVBhdGhJbnB1dFJlZiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgbWVhbE51bWJlck9mRGlzaElucHV0UmVmID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBjaGVmSW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgICAvL0ltcGxlbWVudCB0aGUgbmV3TWVhbEhhbmRsZXIgZnVuY3Rpb25cclxuICAgIGNvbnN0IG5ld01lYWxIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIFxyXG4gICAgICAgIC8vc3RvcmUgdGhlIG1lYWwgZGF0IGluIGFuIG9iamVjdFxyXG4gICAgICAgIGNvbnN0IG1lYWxEYXRhID0ge1xyXG4gICAgICAgICAgICBuYW1lOiBtZWFsTmFtZUlucHV0UmVmLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIGltYWdlX3BhdGg6IG1lYWxJbWFnZVBhdGhJbnB1dFJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICAgICAgICBkaXNoZXM6IG1lYWxOdW1iZXJPZkRpc2hJbnB1dFJlZi5jdXJyZW50LnZhbHVlLFxyXG4gICAgICAgICAgICBjaGVmOiBjaGVmSW5wdXRSZWYuY3VycmVudC52YWx1ZSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvL3VzZSB0aGUgRmV0Y2ggQVBJIHRvIG1ha2UgcmVxdWVzdCB0byB0aGUgbmV3LW1lYWwtYXBpXHJcbiAgICAgICAgLy90aGVuIGdldCBiYWNrIHRvIHJlc3BvbnNlXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvbmV3LW1lYWxcIix7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsIFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtZWFsRGF0YSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiY29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHBhcnNlcyBKU09OIHJlc3BvbnNlIGludG8gbmF0aXZlIEphdmFTY3JpcHQgb2JqZWN0c1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuXHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgSU5QVVRfU1RZTEUgPSBcIm15LTIgcC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5kaWdvLTMwMCBmb2N1czpyaW5nLW9wYWNpdHktNTAgZm9jdXM6b3V0bGluZS1ub25lIHctZnVsbCBoLTEwIHJvdW5kZWQtbWRcIjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1jb2wgcHgtMTIgcHktMTIgbWF4LXctM3gxIG14LWF1dG8gc2hhZG93LXgxIHJvdW5kZWQtMngxXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtbGlnaHQgdGV4dC00eDFcIj5BZGQgYSBuZXcgbWVhbDwvaDE+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e25ld01lYWxIYW5kbGVyfT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNZWFsIE5hbWVcIiByZXF1aXJlZCByZWY9e21lYWxOYW1lSW5wdXRSZWZ9IGNsYXNzTmFtZT17SU5QVVRfU1RZTEV9Lz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJJbWFnZSBQYXRoXCIgcmVxdWlyZWQgcmVmPXttZWFsSW1hZ2VQYXRoSW5wdXRSZWZ9IGNsYXNzTmFtZT17SU5QVVRfU1RZTEV9IC8+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbWF4PVwiNVwiIG1pbj1cIjFcIiBwbGFjZWhvbGRlcj1cIk51bWJlciBvZiBEaXNoZXNcIiByZXF1aXJlZCByZWY9e21lYWxOdW1iZXJPZkRpc2hJbnB1dFJlZn0gY2xhc3NOYW1lPXtJTlBVVF9TVFlMRX0gLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lIG9mIGNoZWZcIiByZXF1aXJlZCByZWY9e2NoZWZJbnB1dFJlZn0gY2xhc3NOYW1lPXtJTlBVVF9TVFlMRX0gLz5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwMCB0ZXh0LWdyYXktODAwIGZvbnQtbWVkaXVtIHRleHQteDEgaW5saW5lLWZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBweC00IHB5LTRcIj5BZGQgTm93PC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdNZWFsRm9ybSJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJOZXdNZWFsRm9ybSIsIm1lYWxOYW1lSW5wdXRSZWYiLCJyb3V0ZXIiLCJtZWFsSW1hZ2VQYXRoSW5wdXRSZWYiLCJtZWFsTnVtYmVyT2ZEaXNoSW5wdXRSZWYiLCJjaGVmSW5wdXRSZWYiLCJuZXdNZWFsSGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJtZWFsRGF0YSIsIm5hbWUiLCJjdXJyZW50IiwidmFsdWUiLCJpbWFnZV9wYXRoIiwiZGlzaGVzIiwiY2hlZiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlIiwiSU5QVVRfU1RZTEUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJyZWYiLCJtYXgiLCJtaW4iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/new-meal.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/new-meal.js"));
module.exports = __webpack_exports__;

})();