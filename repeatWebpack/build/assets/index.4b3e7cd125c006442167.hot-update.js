webpackHotUpdate("index",{

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.0.11@vue-loader/lib??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.18.0@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tdata() {\n\t\treturn {\n\t\t\tcarData: [],\n\t\t\tcityWord: [],\n\t\t\tnewCityWord: []\n\t\t};\n\t},\n\tmethods: {\n\t\tgetData() {\n\t\t\taxios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/items/list\").then(res => {\n\t\t\t\t// 返回值是一个promise对象，使用then方法来调用\n\t\t\t\t// 所有的数据\n\t\t\t\tthis.carData = JSON.parse(res.data).data;\n\t\t\t\tconst carJson = this.carData;\n\t\t\t\tconst word = [];\n\t\t\t\tconst newWord = [];\n\t\t\t\t// 获取代表城市的属性Spelling\n\t\t\t\tcarJson.map((val, ind) => {\n\t\t\t\t\tword.push(val.Spelling);\n\t\t\t\t});\n\t\t\t\t// 所有的城市字母\n\t\t\t\tword.map(val => {\n\t\t\t\t\tnewWord.push(val.slice(0, 1));\n\t\t\t\t});\n\t\t\t\t// 城市首字母\n\t\t\t\tthis.cityWord = new Set(newWord);\n\t\t\t\t// 转数组\n\t\t\t\tthis.newCityWord = [...this.cityWord];\n\t\t\t\tconsole.log(this.newCityWord);\n\t\t\t});\n\t\t}\n\t},\n\tmounted() {\n\t\tthis.getData();\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP2U0MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsZUFGQTtBQUdBO0FBSEE7QUFLQSxFQVBBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFuQkE7QUFvQkE7QUF0QkEsRUFSQTtBQWdDQTtBQUNBO0FBQ0E7QUFsQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjAuMTFAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiYm94XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZGF0YVwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjYXJEYXRhXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdDxwPkE8L3A+XHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8ZGw+XHJcblx0XHRcdFx0XHRcdDxkdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cIml0ZW0uQ292ZXJQaG90b1wiIGFsdC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZHQ+XHJcblx0XHRcdFx0XHRcdDxkZD5cclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0uTmFtZX19XHJcblx0XHRcdFx0XHRcdDwvZGQ+XHJcblx0XHRcdFx0XHQ8L2RsPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJyaWdodFdvcmRcIj5cclxuXHRcdFx0PGEgaHJlZj1cIlwiIHYtZm9yPVwid29yZCBpbiBuZXdDaXR5V29yZFwiPnt7d29yZH19PC9hPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y2FyRGF0YTogW10sXHJcblx0XHRcdFx0Y2l0eVdvcmQ6IFtdLFxyXG5cdFx0XHRcdG5ld0NpdHlXb3JkOiBbXVxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z2V0RGF0YSgpIHtcclxuXHRcdFx0XHRheGlvcy5nZXQoXCIvaXRlbXMvbGlzdFwiKS50aGVuKHJlcyA9PiB7IC8vIOi/lOWbnuWAvOaYr+S4gOS4qnByb21pc2Xlr7nosaHvvIzkvb/nlKh0aGVu5pa55rOV5p2l6LCD55SoXHJcblx0XHRcdFx0XHQvLyDmiYDmnInnmoTmlbDmja5cclxuXHRcdFx0XHRcdHRoaXMuY2FyRGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGE7XHJcblx0XHRcdFx0XHRjb25zdCBjYXJKc29uID0gdGhpcy5jYXJEYXRhO1xyXG5cdFx0XHRcdFx0Y29uc3Qgd29yZCA9IFtdO1xyXG5cdFx0XHRcdFx0Y29uc3QgbmV3V29yZCA9IFtdO1xyXG5cdFx0XHRcdFx0Ly8g6I635Y+W5Luj6KGo5Z+O5biC55qE5bGe5oCnU3BlbGxpbmdcclxuXHRcdFx0XHRcdGNhckpzb24ubWFwKCh2YWwsIGluZCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR3b3JkLnB1c2godmFsLlNwZWxsaW5nKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Ly8g5omA5pyJ55qE5Z+O5biC5a2X5q+NXHJcblx0XHRcdFx0XHR3b3JkLm1hcCh2YWwgPT4ge1xyXG5cdFx0XHRcdFx0XHRuZXdXb3JkLnB1c2godmFsLnNsaWNlKDAsIDEpKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQvLyDln47luILpppblrZfmr41cclxuXHRcdFx0XHRcdHRoaXMuY2l0eVdvcmQgPSBuZXcgU2V0KG5ld1dvcmQpO1xyXG5cdFx0XHRcdFx0Ly8g6L2s5pWw57uEXHJcblx0XHRcdFx0XHR0aGlzLm5ld0NpdHlXb3JkID0gWy4uLnRoaXMuY2l0eVdvcmRdO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5uZXdDaXR5V29yZClcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuZ2V0RGF0YSgpXHJcblx0XHR9XHJcblx0fTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LmJveCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdH1cclxuXHRcclxuXHRwIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAwLjJyZW07XHJcblx0XHRsaW5lLWhlaWdodDogMC4ycmVtO1xyXG5cdFx0YmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuXHRcdHBhZGRpbmctbGVmdDogMC4wNXJlbTtcclxuXHR9XHJcblx0XHJcblx0dWwge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDAuNXJlbTtcclxuXHR9XHJcblx0XHJcblx0dWwgbGkge1xyXG5cdFx0d2lkdGg6IDk1JTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcblx0fVxyXG5cdFxyXG5cdHVsIGxpIGRsIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAwLjVyZW07XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0dWwgbGkgZGwgZHQgaW1nIHtcclxuXHRcdHdpZHRoOiAwLjQ1cmVtO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHR9XHJcblx0XHJcblx0dWwgbGkgZGwgZGQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDAuMnJlbTtcclxuXHR9XHJcblx0XHJcblx0LnJpZ2h0V29yZCB7XHJcblx0XHR3aWR0aDogLjE0cmVtO1xyXG5cdFx0aGVpZ2h0OiAzLjM2cmVtO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRyaWdodDogLjAycmVtO1xyXG5cdFx0dG9wOi42NHJlbTtcclxuXHRcdG1hcmdpbjogYXV0bztcclxuXHR9XHJcblx0XHJcblx0LnJpZ2h0V29yZCBhIHtcclxuXHRcdGZvbnQtc2l6ZTogLjEycmVtO1xyXG5cdH1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js\n");

/***/ })

})