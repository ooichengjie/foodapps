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
exports.id = "pages/api/new-meal";
exports.ids = ["pages/api/new-meal"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meal.js":
/*!*******************************!*\
  !*** ./pages/api/new-meal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst handler = async (req, res)=>{\n    const DATABASE_NAME = \"foodapp\";\n    const DATABASE_PASSWORD = \"12345abc\";\n    if (req.method === \"POST\") {\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(`mongodb+srv://user:${DATABASE_PASSWORD}@foodapp.rjiol.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`);\n        const db = client.db();\n        const mealsCollection = db.collection(\"meals\");\n        await mealsCollection.insertOne(req.body);\n        client.close();\n        res.status(201).send({\n            Message: \"Meal inserted\"\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lYWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBRW5DLEtBQUssQ0FBQ0MsT0FBTyxVQUFVQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ2pDLEtBQUssQ0FBQ0MsYUFBYSxHQUFHLENBQVM7SUFDL0IsS0FBSyxDQUFDQyxpQkFBaUIsR0FBRyxDQUFVO0lBRXhDLEVBQUUsRUFBRUgsR0FBRyxDQUFDSSxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDUCx3REFBbUIsRUFDbkMsbUJBQW1CLEVBQUVLLGlCQUFpQixDQUFDLDJCQUEyQixFQUFFRCxhQUFhLENBQUMsNEJBQTRCO1FBRW5ILEtBQUssQ0FBQ0ssRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQUU7UUFDcEIsS0FBSyxDQUFDQyxlQUFlLEdBQUdELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLENBQU87UUFDN0MsS0FBSyxDQUFDRCxlQUFlLENBQUNFLFNBQVMsQ0FBQ1YsR0FBRyxDQUFDVyxJQUFJO1FBQ3hDTixNQUFNLENBQUNPLEtBQUs7UUFDWlgsR0FBRyxDQUFDWSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBZTtRQUFBLENBQUM7SUFDbkQsQ0FBQztBQUNGLENBQUM7QUFFRCxpRUFBZWhCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2RhcHBzLy4vcGFnZXMvYXBpL25ldy1tZWFsLmpzPzBmMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb25nb0NsaWVudH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IERBVEFCQVNFX05BTUUgPSBcImZvb2RhcHBcIjtcclxuICAgIGNvbnN0IERBVEFCQVNFX1BBU1NXT1JEID0gXCIxMjM0NWFiY1wiO1xyXG5cclxuaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgICAgIGBtb25nb2RiK3NydjovL3VzZXI6JHtEQVRBQkFTRV9QQVNTV09SRH1AZm9vZGFwcC5yamlvbC5tb25nb2RiLm5ldC8ke0RBVEFCQVNFX05BTUV9P3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eWBcclxuICAgICk7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gICAgY29uc3QgbWVhbHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lYWxzXCIpO1xyXG4gICAgYXdhaXQgbWVhbHNDb2xsZWN0aW9uLmluc2VydE9uZShyZXEuYm9keSk7XHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuICAgIHJlcy5zdGF0dXMoMjAxKS5zZW5kKHsgTWVzc2FnZTogXCJNZWFsIGluc2VydGVkXCJ9KTtcclxuIH0gXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIkRBVEFCQVNFX05BTUUiLCJEQVRBQkFTRV9QQVNTV09SRCIsIm1ldGhvZCIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lYWxzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJpbnNlcnRPbmUiLCJib2R5IiwiY2xvc2UiLCJzdGF0dXMiLCJzZW5kIiwiTWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meal.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meal.js"));
module.exports = __webpack_exports__;

})();