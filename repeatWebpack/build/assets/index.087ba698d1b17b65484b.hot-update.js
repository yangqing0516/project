webpackHotUpdate("index",{

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.0.11@vue-loader/lib??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.18.0@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tdata() {\n\t\treturn {\n\t\t\tcarData: [],\n\t\t\tword: [],\n\t\t\tnewWord: []\n\t\t};\n\t},\n\tmethods: {},\n\tmounted() {\n\t\taxios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/items/list\").then(res => {\n\t\t\tthis.carData = JSON.parse(res.data).data;\n\t\t\tconst carJson = this.carData;\n\t\t\tconst set = new Set();\n\t\t\tcarJson.map((val, ind) => {\n\t\t\t\tthis.word.push(val.Spelling);\n\t\t\t});\n\t\t\tthis.word.map(val => {\n\t\t\t\tthis.newWord.push(val.slice(0, 1));\n\t\t\t});\n\t\t\tthis.newWord.forEach(val => set.add(val));\n\t\t\tconsole.log(this.newWord);\n\t\t});\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP2U0MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsV0FGQTtBQUdBO0FBSEE7QUFLQSxFQVBBO0FBUUEsWUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFGQTtBQUdBO0FBQ0E7QUFDQSxJQUZBO0FBR0E7QUFDQTtBQUNBLEdBWkE7QUFjQTtBQTFCQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMC4xMUB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxkaXYgY2xhc3M9XCJib3hcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJkYXRhXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGNhckRhdGFcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0PHA+QTwvcD5cclxuXHRcdFx0PHVsPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxkbD5cclxuXHRcdFx0XHRcdFx0PGR0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiaXRlbS5Db3ZlclBob3RvXCIgYWx0Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kdD5cclxuXHRcdFx0XHRcdFx0PGRkPlxyXG5cdFx0XHRcdFx0XHRcdHt7aXRlbS5OYW1lfX1cclxuXHRcdFx0XHRcdFx0PC9kZD5cclxuXHRcdFx0XHRcdDwvZGw+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGNhckRhdGE6IFtdLFxyXG5cdFx0XHRcdHdvcmQ6IFtdLFxyXG5cdFx0XHRcdG5ld1dvcmQ6IFtdXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHRheGlvcy5nZXQoXCIvaXRlbXMvbGlzdFwiKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0dGhpcy5jYXJEYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSkuZGF0YTtcclxuXHRcdFx0XHRjb25zdCBjYXJKc29uID0gdGhpcy5jYXJEYXRhO1xyXG5cdFx0XHRcdGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcclxuXHRcdFx0XHRjYXJKc29uLm1hcCgodmFsLCBpbmQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMud29yZC5wdXNoKHZhbC5TcGVsbGluZyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy53b3JkLm1hcCh2YWw9PntcclxuXHRcdFx0XHRcdHRoaXMubmV3V29yZC5wdXNoKHZhbC5zbGljZSgwLCAxKSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR0aGlzLm5ld1dvcmQuZm9yRWFjaCh2YWw9PnNldC5hZGQodmFsKSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5uZXdXb3JkKVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHR9XHJcblx0fTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuXHQuYm94IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cdFxyXG5cdHAge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDAuMnJlbTtcclxuXHRcdGxpbmUtaGVpZ2h0OiAwLjJyZW07XHJcblx0XHRiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwLjA1cmVtO1xyXG5cdH1cclxuXHRcclxuXHR1bCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMC41cmVtO1xyXG5cdH1cclxuXHRcclxuXHR1bCBsaSB7XHJcblx0XHR3aWR0aDogOTUlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuXHR9XHJcblx0XHJcblx0dWwgbGkgZGwge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDAuNXJlbTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHR1bCBsaSBkbCBkdCBpbWcge1xyXG5cdFx0d2lkdGg6IDAuNDVyZW07XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdH1cclxuXHRcclxuXHR1bCBsaSBkbCBkZCB7XHJcblx0XHRtYXJnaW4tbGVmdDogMC4ycmVtO1xyXG5cdH1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js\n");

/***/ })

})