webpackHotUpdate("index",{

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.0.11@vue-loader/lib??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.18.0@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tdata() {\n\t\treturn {\n\t\t\tcarData: [],\n\t\t\tcityWord: [],\n\t\t\tnewCityWord: []\n\t\t};\n\t},\n\tmethods: {\n\t\tgetData() {\n\t\t\taxios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/items/list\").then(res => {\n\t\t\t\t// 返回值是一个promise对象，使用then方法来调用\n\t\t\t\t// 所有的数据\n\t\t\t\tthis.carData = JSON.parse(res.data).data;\n\t\t\t\tconst cityWord = [];\n\t\t\t\tconst newCityWord = [];\n\t\t\t\tthis.carData.map((val, ind) => {\n\t\t\t\t\tlet firstWord = val.Spelling.slice(0, 1);\n\t\t\t\t\tif (cityWord.indexOf(firstWord) === -1) {\n\t\t\t\t\t\tcityWord.push(firstWord);\n\t\t\t\t\t\tnewCityWord.push({\n\t\t\t\t\t\t\tcityWord: firstWord,\n\t\t\t\t\t\t\tlist: [val]\n\t\t\t\t\t\t});\n\t\t\t\t\t} else {\n\t\t\t\t\t\tnewCityWord.map((value, ind) => {\n\t\t\t\t\t\t\tif (firstWord === value.cityWord) {\n\t\t\t\t\t\t\t\tvalue.list.push(val);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\tconsole.log(newCityWord);\n\t\t\t});\n\t\t}\n\t},\n\tmounted() {\n\t\tthis.getData();\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP2U0MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsZUFGQTtBQUdBO0FBSEE7QUFLQSxFQVBBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBO0FBRkE7QUFJQSxNQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQTtBQUVBLEtBaEJBO0FBaUJBO0FBQ0EsSUF2QkE7QUF3QkE7QUExQkEsRUFSQTtBQW9DQTtBQUNBO0FBQ0E7QUF0Q0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjAuMTFAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiYm94XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZGF0YVwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjYXJEYXRhXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdDxwPkE8L3A+XHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8ZGw+XHJcblx0XHRcdFx0XHRcdDxkdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cIml0ZW0uQ292ZXJQaG90b1wiIGFsdC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZHQ+XHJcblx0XHRcdFx0XHRcdDxkZD5cclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0uTmFtZX19XHJcblx0XHRcdFx0XHRcdDwvZGQ+XHJcblx0XHRcdFx0XHQ8L2RsPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJyaWdodFdvcmRcIj5cclxuXHRcdFx0PGEgaHJlZj1cIlwiIHYtZm9yPVwid29yZCBpbiBuZXdDaXR5V29yZFwiPnt7d29yZH19PC9hPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y2FyRGF0YTogW10sXHJcblx0XHRcdFx0Y2l0eVdvcmQ6IFtdLFxyXG5cdFx0XHRcdG5ld0NpdHlXb3JkOiBbXVxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z2V0RGF0YSgpIHtcclxuXHRcdFx0XHRheGlvcy5nZXQoXCIvaXRlbXMvbGlzdFwiKS50aGVuKHJlcyA9PiB7IC8vIOi/lOWbnuWAvOaYr+S4gOS4qnByb21pc2Xlr7nosaHvvIzkvb/nlKh0aGVu5pa55rOV5p2l6LCD55SoXHJcblx0XHRcdFx0XHQvLyDmiYDmnInnmoTmlbDmja5cclxuXHRcdFx0XHRcdHRoaXMuY2FyRGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGE7XHJcblx0XHRcdFx0XHRjb25zdCBjaXR5V29yZCA9IFtdO1xyXG5cdFx0XHRcdFx0Y29uc3QgbmV3Q2l0eVdvcmQgPSBbXTtcclxuXHRcdFx0XHRcdHRoaXMuY2FyRGF0YS5tYXAoKHZhbCwgaW5kKSA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCBmaXJzdFdvcmQgPSB2YWwuU3BlbGxpbmcuc2xpY2UoMCwgMSk7XHJcblx0XHRcdFx0XHRcdGlmIChjaXR5V29yZC5pbmRleE9mKGZpcnN0V29yZCkgPT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjaXR5V29yZC5wdXNoKGZpcnN0V29yZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRuZXdDaXR5V29yZC5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2l0eVdvcmQ6IGZpcnN0V29yZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdDogW3ZhbF1cclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0bmV3Q2l0eVdvcmQubWFwKCh2YWx1ZSwgaW5kKT0+e1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGZpcnN0V29yZCA9PT0gdmFsdWUuY2l0eVdvcmQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWUubGlzdC5wdXNoKHZhbClcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2cobmV3Q2l0eVdvcmQpXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLmdldERhdGEoKTtcclxuXHRcdH1cclxuXHR9O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQuYm94IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cdFxyXG5cdHAge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDAuMnJlbTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAwLjJyZW07XHJcblx0XHRiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwLjA1cmVtO1xyXG5cdH1cclxuXHRcclxuXHR1bCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMC41cmVtO1xyXG5cdH1cclxuXHRcclxuXHR1bCBsaSB7XHJcblx0XHR3aWR0aDogOTUlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuXHR9XHJcblx0XHJcblx0dWwgbGkgZGwge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDAuNXJlbTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHR1bCBsaSBkbCBkdCBpbWcge1xyXG5cdFx0d2lkdGg6IDAuNDVyZW07XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdH1cclxuXHRcclxuXHR1bCBsaSBkbCBkZCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMC4ycmVtO1xyXG5cdH1cclxuXHRcclxuXHQucmlnaHRXb3JkIHtcclxuXHRcdHdpZHRoOiAuMTRyZW07XHJcblx0XHRoZWlnaHQ6IDMuMzZyZW07XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHJpZ2h0OiAuMDJyZW07XHJcblx0XHR0b3A6IC42NHJlbTtcclxuXHRcdG1hcmdpbjogYXV0bztcclxuXHR9XHJcblx0XHJcblx0LnJpZ2h0V29yZCBhIHtcclxuXHRcdGZvbnQtc2l6ZTogLjEycmVtO1xyXG5cdH1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js\n");

/***/ })

})