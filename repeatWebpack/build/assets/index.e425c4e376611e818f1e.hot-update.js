webpackHotUpdate("index",{

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.0.11@vue-loader/lib??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.18.0@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tdata() {\n\t\treturn {\n\t\t\tcarData: [],\n\t\t\tword: [],\n\t\t\tnewWord: []\n\t\t};\n\t},\n\tmethods: {},\n\tmounted() {\n\t\taxios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/items/list\").then(res => {\n\t\t\tthis.carData = JSON.parse(res.data).data;\n\t\t\tconst carJson = this.carData;\n\t\t\tcarJson.map((val, ind) => {\n\t\t\t\tthis.word.push(val.Spelling);\n\t\t\t});\n\t\t\tthis.word.map(val => {\n\t\t\t\tthis.newWord.push(val.slice(0, 1));\n\t\t\t});\n\t\t\tconst [...set] = new Set(this.newWord);\n\t\t\tconsole.log();\n\t\t});\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP2U0MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsV0FGQTtBQUdBO0FBSEE7QUFLQSxFQVBBO0FBUUEsWUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBRkE7QUFHQTtBQUNBO0FBQ0EsSUFGQTtBQUdBO0FBQ0E7QUFDQSxHQVhBO0FBYUE7QUF6QkEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjAuMTFAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiYm94XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZGF0YVwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjYXJEYXRhXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdDxwPkE8L3A+XHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8ZGw+XHJcblx0XHRcdFx0XHRcdDxkdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cIml0ZW0uQ292ZXJQaG90b1wiIGFsdC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZHQ+XHJcblx0XHRcdFx0XHRcdDxkZD5cclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0uTmFtZX19XHJcblx0XHRcdFx0XHRcdDwvZGQ+XHJcblx0XHRcdFx0XHQ8L2RsPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRjYXJEYXRhOiBbXSxcclxuXHRcdFx0XHR3b3JkOiBbXSxcclxuXHRcdFx0XHRuZXdXb3JkOiBbXVxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0YXhpb3MuZ2V0KFwiL2l0ZW1zL2xpc3RcIikudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdHRoaXMuY2FyRGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGE7XHJcblx0XHRcdFx0Y29uc3QgY2FySnNvbiA9IHRoaXMuY2FyRGF0YTtcclxuXHRcdFx0XHRjYXJKc29uLm1hcCgodmFsLCBpbmQpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMud29yZC5wdXNoKHZhbC5TcGVsbGluZyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy53b3JkLm1hcCh2YWw9PntcclxuXHRcdFx0XHRcdHRoaXMubmV3V29yZC5wdXNoKHZhbC5zbGljZSgwLCAxKSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRjb25zdCBbLi4uc2V0XSA9IG5ldyBTZXQodGhpcy5uZXdXb3JkKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygpXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdH1cclxuXHR9O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG5cdC5ib3gge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcblx0XHJcblx0cCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMC4ycmVtO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDAuMnJlbTtcclxuXHRcdGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDAuMDVyZW07XHJcblx0fVxyXG5cdFxyXG5cdHVsIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAwLjVyZW07XHJcblx0fVxyXG5cdFxyXG5cdHVsIGxpIHtcclxuXHRcdHdpZHRoOiA5NSU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG5cdH1cclxuXHRcclxuXHR1bCBsaSBkbCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMC41cmVtO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdFxyXG5cdHVsIGxpIGRsIGR0IGltZyB7XHJcblx0XHR3aWR0aDogMC40NXJlbTtcclxuXHRcdGhlaWdodDogYXV0bztcclxuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0fVxyXG5cdFxyXG5cdHVsIGxpIGRsIGRkIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwLjJyZW07XHJcblx0fVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js\n");

/***/ })

})