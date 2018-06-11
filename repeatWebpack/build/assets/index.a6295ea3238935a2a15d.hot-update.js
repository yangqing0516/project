webpackHotUpdate("index",{

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.0.11@vue-loader/lib??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.18.0@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tdata() {\n\t\treturn {\n\t\t\tcarData: [],\n\t\t\tcityWord: [],\n\t\t\tnewCityWord: []\n\t\t};\n\t},\n\tmethods: {\n\t\tgetData() {\n\t\t\taxios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/items/list\").then(res => {\n\t\t\t\t// 返回值是一个promise对象，使用then方法来调用\n\t\t\t\t// 所有的数据\n\t\t\t\tthis.carData = JSON.parse(res.data).data;\n\t\t\t\tconst cityWord = [];\n\t\t\t\tconst newCityWord = [];\n\t\t\t\tthis.carData.map((val, ind) => {\n\t\t\t\t\t//\t\t\t\t\t\tlet firstWord = val.Spelling.slice(0, 1);\n\t\t\t\t\t//\t\t\t\t\t\tword.push(firstWord)\n\t\t\t\t\t//\t\t\t\t\t\tthis.cityWord = new Set(word);\n\t\t\t\t\t//\t\t\t\t\t\tthis.newCityWord = [...this.cityWord];\n\t\t\t\t\tlet firstWord = val.Spelling.slice(0, 1);\n\t\t\t\t\tif (cityWord.indexOf(firstWord) === -1) {\n\t\t\t\t\t\tcityWord.push(firstWord);\n\t\t\t\t\t\tnewCityWord.push({\n\t\t\t\t\t\t\tcityWord: firstWord,\n\t\t\t\t\t\t\tlist: [val]\n\t\t\t\t\t\t});\n\t\t\t\t\t} else {}\n\t\t\t\t});\n\t\t\t});\n\t\t}\n\t},\n\tmounted() {\n\t\tthis.getData();\n\t\t//res.data.data.forEach((item, index) => {\n\t\t//\t\t\tlet letter = item.Spelling.slice(0, 1);\n\t\t//\t\t\tif(spelling.indexOf(letter) == -1) {\n\t\t//\t\t\t\tspelling.push(letter);\n\t\t//\t\t\t\t// 创建新的首字母对应的对象，并把当前车辆添加到list的第一项\n\t\t//\t\t\t\tdata.push({\n\t\t//\t\t\t\t\tspelling: letter,\n\t\t//\t\t\t\t\tlist: [item]\n\t\t//\t\t\t\t});\n\t\t//\t\t\t} else {\n\t\t//\t\t\t\t// 直接把车辆添加到所对应首字母的list里\n\t\t//\t\t\t\tdata.forEach((value, key) => {\n\t\t//\t\t\t\t\tif(letter == value.spelling) {\n\t\t//\t\t\t\t\t\tvalue.list.push(item);\n\t\t//\t\t\t\t\t}\n\t\t//\t\t\t\t})\n\t\t//\t\t\t}\n\t\t//})\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP2U0MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsZUFGQTtBQUdBO0FBSEE7QUFLQSxFQVBBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUE7QUFGQTtBQUlBLE1BTkEsTUFNQSxDQUVBO0FBRUEsS0FoQkE7QUFpQkEsSUF0QkE7QUF1QkE7QUF6QkEsRUFSQTtBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2REEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjAuMTFAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiYm94XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZGF0YVwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjYXJEYXRhXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdDxwPkE8L3A+XHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8ZGw+XHJcblx0XHRcdFx0XHRcdDxkdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cIml0ZW0uQ292ZXJQaG90b1wiIGFsdC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZHQ+XHJcblx0XHRcdFx0XHRcdDxkZD5cclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0uTmFtZX19XHJcblx0XHRcdFx0XHRcdDwvZGQ+XHJcblx0XHRcdFx0XHQ8L2RsPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJyaWdodFdvcmRcIj5cclxuXHRcdFx0PGEgaHJlZj1cIlwiIHYtZm9yPVwid29yZCBpbiBuZXdDaXR5V29yZFwiPnt7d29yZH19PC9hPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y2FyRGF0YTogW10sXHJcblx0XHRcdFx0Y2l0eVdvcmQ6IFtdLFxyXG5cdFx0XHRcdG5ld0NpdHlXb3JkOiBbXVxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z2V0RGF0YSgpIHtcclxuXHRcdFx0XHRheGlvcy5nZXQoXCIvaXRlbXMvbGlzdFwiKS50aGVuKHJlcyA9PiB7IC8vIOi/lOWbnuWAvOaYr+S4gOS4qnByb21pc2Xlr7nosaHvvIzkvb/nlKh0aGVu5pa55rOV5p2l6LCD55SoXHJcblx0XHRcdFx0XHQvLyDmiYDmnInnmoTmlbDmja5cclxuXHRcdFx0XHRcdHRoaXMuY2FyRGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGE7XHJcblx0XHRcdFx0XHRjb25zdCBjaXR5V29yZCA9IFtdO1xyXG5cdFx0XHRcdFx0Y29uc3QgbmV3Q2l0eVdvcmQgPSBbXTtcclxuXHRcdFx0XHRcdHRoaXMuY2FyRGF0YS5tYXAoKHZhbCwgaW5kKSA9PiB7XHJcbi8vXHRcdFx0XHRcdFx0bGV0IGZpcnN0V29yZCA9IHZhbC5TcGVsbGluZy5zbGljZSgwLCAxKTtcclxuLy9cdFx0XHRcdFx0XHR3b3JkLnB1c2goZmlyc3RXb3JkKVxyXG4vL1x0XHRcdFx0XHRcdHRoaXMuY2l0eVdvcmQgPSBuZXcgU2V0KHdvcmQpO1xyXG4vL1x0XHRcdFx0XHRcdHRoaXMubmV3Q2l0eVdvcmQgPSBbLi4udGhpcy5jaXR5V29yZF07XHJcblx0XHRcdFx0XHRcdGxldCBmaXJzdFdvcmQgPSB2YWwuU3BlbGxpbmcuc2xpY2UoMCwgMSk7XHJcblx0XHRcdFx0XHRcdGlmIChjaXR5V29yZC5pbmRleE9mKGZpcnN0V29yZCkgPT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjaXR5V29yZC5wdXNoKGZpcnN0V29yZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRuZXdDaXR5V29yZC5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2l0eVdvcmQ6IGZpcnN0V29yZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdDogW3ZhbF1cclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuZ2V0RGF0YSgpO1xyXG5cdFx0XHQvL3Jlcy5kYXRhLmRhdGEuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuXHRcdFx0Ly9cdFx0XHRsZXQgbGV0dGVyID0gaXRlbS5TcGVsbGluZy5zbGljZSgwLCAxKTtcclxuXHRcdFx0Ly9cdFx0XHRpZihzcGVsbGluZy5pbmRleE9mKGxldHRlcikgPT0gLTEpIHtcclxuXHRcdFx0Ly9cdFx0XHRcdHNwZWxsaW5nLnB1c2gobGV0dGVyKTtcclxuXHRcdFx0Ly9cdFx0XHRcdC8vIOWIm+W7uuaWsOeahOmmluWtl+avjeWvueW6lOeahOWvueixoe+8jOW5tuaKiuW9k+WJjei9pui+hua3u+WKoOWIsGxpc3TnmoTnrKzkuIDpoblcclxuXHRcdFx0Ly9cdFx0XHRcdGRhdGEucHVzaCh7XHJcblx0XHRcdC8vXHRcdFx0XHRcdHNwZWxsaW5nOiBsZXR0ZXIsXHJcblx0XHRcdC8vXHRcdFx0XHRcdGxpc3Q6IFtpdGVtXVxyXG5cdFx0XHQvL1x0XHRcdFx0fSk7XHJcblx0XHRcdC8vXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly9cdFx0XHRcdC8vIOebtOaOpeaKiui9pui+hua3u+WKoOWIsOaJgOWvueW6lOmmluWtl+avjeeahGxpc3Tph4xcclxuXHRcdFx0Ly9cdFx0XHRcdGRhdGEuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG5cdFx0XHQvL1x0XHRcdFx0XHRpZihsZXR0ZXIgPT0gdmFsdWUuc3BlbGxpbmcpIHtcclxuXHRcdFx0Ly9cdFx0XHRcdFx0XHR2YWx1ZS5saXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdC8vXHRcdFx0XHRcdH1cclxuXHRcdFx0Ly9cdFx0XHRcdH0pXHJcblx0XHRcdC8vXHRcdFx0fVxyXG5cdFx0XHQvL30pXHJcblx0XHR9XHJcblx0fTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LmJveCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdH1cclxuXHRcclxuXHRwIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAwLjJyZW07XHJcblx0XHRsaW5lLWhlaWdodDogMC4ycmVtO1xyXG5cdFx0YmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuXHRcdHBhZGRpbmctbGVmdDogMC4wNXJlbTtcclxuXHR9XHJcblx0XHJcblx0dWwge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDAuNXJlbTtcclxuXHR9XHJcblx0XHJcblx0dWwgbGkge1xyXG5cdFx0d2lkdGg6IDk1JTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcblx0fVxyXG5cdFxyXG5cdHVsIGxpIGRsIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAwLjVyZW07XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblx0XHJcblx0dWwgbGkgZGwgZHQgaW1nIHtcclxuXHRcdHdpZHRoOiAwLjQ1cmVtO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHR9XHJcblx0XHJcblx0dWwgbGkgZGwgZGQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDAuMnJlbTtcclxuXHR9XHJcblx0XHJcblx0LnJpZ2h0V29yZCB7XHJcblx0XHR3aWR0aDogLjE0cmVtO1xyXG5cdFx0aGVpZ2h0OiAzLjM2cmVtO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRyaWdodDogLjAycmVtO1xyXG5cdFx0dG9wOiAuNjRyZW07XHJcblx0XHRtYXJnaW46IGF1dG87XHJcblx0fVxyXG5cdFxyXG5cdC5yaWdodFdvcmQgYSB7XHJcblx0XHRmb250LXNpemU6IC4xMnJlbTtcclxuXHR9XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js\n");

/***/ })

})