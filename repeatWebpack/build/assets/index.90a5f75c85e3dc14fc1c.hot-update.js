webpackHotUpdate("index",{

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.0.11@vue-loader/lib??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.18.0@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tdata() {\n\t\treturn {\n\t\t\tcarData: [],\n\t\t\tword: [],\n\t\t\tnewWord: []\n\t\t};\n\t},\n\tmethods: {},\n\tmounted() {\n\t\taxios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/items/list\").then(res => {\n\t\t\tthis.carData = JSON.parse(res.data).data;\n\t\t\tconst carJson = this.carData;\n\t\t\t// 獲取代表城市的屬性Spelling\n\t\t\tcarJson.map((val, ind) => {\n\t\t\t\tthis.word.push(val.Spelling);\n\t\t\t});\n\t\t\t// 所有的城市字母\n\t\t\tthis.word.map(val => {\n\t\t\t\tthis.newWord.push(val.slice(0, 1));\n\t\t\t});\n\t\t\t// 城市首字母\n\t\t\tconst set = new Set(this.newWord); // 對象\n\t\t\t// 转数组\n\n\t\t});\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP2U0MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsV0FGQTtBQUdBO0FBSEE7QUFLQSxFQVBBO0FBUUEsWUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLElBRkE7QUFHQTtBQUNBLHFDQVpBLENBWUE7QUFDQTs7QUFHQSxHQWhCQTtBQWtCQTtBQTlCQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMC4xMUB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxkaXYgY2xhc3M9XCJib3hcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJkYXRhXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGNhckRhdGFcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0PHA+QTwvcD5cclxuXHRcdFx0PHVsPlxyXG5cdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdDxkbD5cclxuXHRcdFx0XHRcdFx0PGR0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiaXRlbS5Db3ZlclBob3RvXCIgYWx0Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kdD5cclxuXHRcdFx0XHRcdFx0PGRkPlxyXG5cdFx0XHRcdFx0XHRcdHt7aXRlbS5OYW1lfX1cclxuXHRcdFx0XHRcdFx0PC9kZD5cclxuXHRcdFx0XHRcdDwvZGw+XHJcblx0XHRcdFx0PC9saT5cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGNhckRhdGE6IFtdLFxyXG5cdFx0XHRcdHdvcmQ6IFtdLFxyXG5cdFx0XHRcdG5ld1dvcmQ6IFtdXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHRheGlvcy5nZXQoXCIvaXRlbXMvbGlzdFwiKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0dGhpcy5jYXJEYXRhID0gSlNPTi5wYXJzZShyZXMuZGF0YSkuZGF0YTtcclxuXHRcdFx0XHRjb25zdCBjYXJKc29uID0gdGhpcy5jYXJEYXRhO1xyXG5cdFx0XHRcdC8vIOeNsuWPluS7o+ihqOWfjuW4gueahOWxrOaAp1NwZWxsaW5nXHJcblx0XHRcdFx0Y2FySnNvbi5tYXAoKHZhbCwgaW5kKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLndvcmQucHVzaCh2YWwuU3BlbGxpbmcpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIOaJgOacieeahOWfjuW4guWtl+avjVxyXG5cdFx0XHRcdHRoaXMud29yZC5tYXAodmFsPT57XHJcblx0XHRcdFx0XHR0aGlzLm5ld1dvcmQucHVzaCh2YWwuc2xpY2UoMCwgMSkpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8g5Z+O5biC6aaW5a2X5q+NXHJcblx0XHRcdFx0Y29uc3Qgc2V0ID0gbmV3IFNldCh0aGlzLm5ld1dvcmQpOyAvLyDlsI3osaFcclxuXHRcdFx0XHQvLyDovazmlbDnu4RcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcblx0LmJveCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdH1cclxuXHRcclxuXHRwIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAwLjJyZW07XHJcblx0XHRsaW5lLWhlaWdodDogMC4ycmVtO1xyXG5cdFx0YmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuXHRcdHBhZGRpbmctbGVmdDogMC4wNXJlbTtcclxuXHR9XHJcblx0XHJcblx0dWwge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDAuNXJlbTtcclxuXHR9XHJcblx0XHJcblx0dWwgbGkge1xyXG5cdFx0d2lkdGg6IDk1JTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcblx0fVxyXG5cdFxyXG5cdHVsIGxpIGRsIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAwLjVyZW07XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0dWwgbGkgZGwgZHQgaW1nIHtcclxuXHRcdHdpZHRoOiAwLjQ1cmVtO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHR9XHJcblx0XHJcblx0dWwgbGkgZGwgZGQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDAuMnJlbTtcclxuXHR9XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js\n");

/***/ })

})