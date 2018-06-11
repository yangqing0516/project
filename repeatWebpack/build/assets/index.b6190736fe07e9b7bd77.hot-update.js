webpackHotUpdate("index",{

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.0.11@vue-loader/lib??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.18.0@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tdata() {\n\t\treturn {\n\t\t\tcarData: [],\n\t\t\tcityWord: [],\n\t\t\tnewCityWord: []\n\t\t};\n\t},\n\tmethods: {\n\t\tgetData() {\n\t\t\taxios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/items/list\").then(res => {\n\t\t\t\t// 返回值是一个promise对象，使用then方法来调用\n\t\t\t\t// 所有的数据\n\t\t\t\tthis.carData = JSON.parse(res.data).data;\n\t\t\t\t// 所有的数据\n\t\t\t\tconst carJson = this.carData;\n\t\t\t\tconst word = [];\n\t\t\t\tconst newWord = [];\n\t\t\t\t// 获取代表城市的属性Spelling\n\t\t\t\tcarJson.map((val, ind) => {\n\t\t\t\t\tlet firstWord = val.Spelling.slice(0, 1);\n\t\t\t\t\tword.push(firstWord);\n\t\t\t\t\t// 城市首字母\n\t\t\t\t\tthis.cityWord = new Set(word);\n\t\t\t\t\tthis.newCityWord = [...this.cityWord];\n\t\t\t\t\tconsole.log(this.newCityWord);\n\t\t\t\t});\n\n\t\t\t\t// 转数组\n\n\t\t\t});\n\t\t}\n\t},\n\tmounted() {\n\t\tthis.getData();\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP2U0MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsZUFGQTtBQUdBO0FBSEE7QUFLQSxFQVBBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FQQTs7QUFTQTs7QUFHQSxJQXBCQTtBQXFCQTtBQXZCQSxFQVJBO0FBaUNBO0FBQ0E7QUFDQTtBQW5DQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMC4xMUB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxkaXYgY2xhc3M9XCJib3hcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJkYXRhXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGNhckRhdGFcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0PHA+QTwvcD5cclxuXHRcdFx0PHVsPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxkbD5cclxuXHRcdFx0XHRcdFx0PGR0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiaXRlbS5Db3ZlclBob3RvXCIgYWx0Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kdD5cclxuXHRcdFx0XHRcdFx0PGRkPlxyXG5cdFx0XHRcdFx0XHRcdHt7aXRlbS5OYW1lfX1cclxuXHRcdFx0XHRcdFx0PC9kZD5cclxuXHRcdFx0XHRcdDwvZGw+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cInJpZ2h0V29yZFwiPlxyXG5cdFx0XHQ8YSBocmVmPVwiXCIgdi1mb3I9XCJ3b3JkIGluIG5ld0NpdHlXb3JkXCI+e3t3b3JkfX08L2E+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRjYXJEYXRhOiBbXSxcclxuXHRcdFx0XHRjaXR5V29yZDogW10sXHJcblx0XHRcdFx0bmV3Q2l0eVdvcmQ6IFtdXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRnZXREYXRhKCkge1xyXG5cdFx0XHRcdGF4aW9zLmdldChcIi9pdGVtcy9saXN0XCIpLnRoZW4ocmVzID0+IHsgLy8g6L+U5Zue5YC85piv5LiA5LiqcHJvbWlzZeWvueixoe+8jOS9v+eUqHRoZW7mlrnms5XmnaXosIPnlKhcclxuXHRcdFx0XHRcdC8vIOaJgOacieeahOaVsOaNrlxyXG5cdFx0XHRcdFx0dGhpcy5jYXJEYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSkuZGF0YTtcclxuXHRcdFx0XHRcdC8vIOaJgOacieeahOaVsOaNrlxyXG5cdFx0XHRcdFx0Y29uc3QgY2FySnNvbiA9IHRoaXMuY2FyRGF0YTtcclxuXHRcdFx0XHRcdGNvbnN0IHdvcmQgPSBbXTtcclxuXHRcdFx0XHRcdGNvbnN0IG5ld1dvcmQgPSBbXTtcclxuXHRcdFx0XHRcdC8vIOiOt+WPluS7o+ihqOWfjuW4gueahOWxnuaAp1NwZWxsaW5nXHJcblx0XHRcdFx0XHRjYXJKc29uLm1hcCgodmFsLCBpbmQpID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IGZpcnN0V29yZCA9IHZhbC5TcGVsbGluZy5zbGljZSgwLCAxKTtcclxuXHRcdFx0XHRcdFx0d29yZC5wdXNoKGZpcnN0V29yZClcclxuXHRcdFx0XHRcdFx0Ly8g5Z+O5biC6aaW5a2X5q+NXHJcblx0XHRcdFx0XHRcdHRoaXMuY2l0eVdvcmQgPSBuZXcgU2V0KHdvcmQpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLm5ld0NpdHlXb3JkID0gWy4uLnRoaXMuY2l0eVdvcmRdO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLm5ld0NpdHlXb3JkKVxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdFx0Ly8g6L2s5pWw57uEXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5nZXREYXRhKClcclxuXHRcdH1cclxuXHR9O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQuYm94IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cdFxyXG5cdHAge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDAuMnJlbTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAwLjJyZW07XHJcblx0XHRiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwLjA1cmVtO1xyXG5cdH1cclxuXHRcclxuXHR1bCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMC41cmVtO1xyXG5cdH1cclxuXHRcclxuXHR1bCBsaSB7XHJcblx0XHR3aWR0aDogOTUlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuXHR9XHJcblx0XHJcblx0dWwgbGkgZGwge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDAuNXJlbTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHR1bCBsaSBkbCBkdCBpbWcge1xyXG5cdFx0d2lkdGg6IDAuNDVyZW07XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdH1cclxuXHRcclxuXHR1bCBsaSBkbCBkZCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMC4ycmVtO1xyXG5cdH1cclxuXHRcclxuXHQucmlnaHRXb3JkIHtcclxuXHRcdHdpZHRoOiAuMTRyZW07XHJcblx0XHRoZWlnaHQ6IDMuMzZyZW07XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHJpZ2h0OiAuMDJyZW07XHJcblx0XHR0b3A6IC42NHJlbTtcclxuXHRcdG1hcmdpbjogYXV0bztcclxuXHR9XHJcblx0XHJcblx0LnJpZ2h0V29yZCBhIHtcclxuXHRcdGZvbnQtc2l6ZTogLjEycmVtO1xyXG5cdH1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js\n");

/***/ })

})