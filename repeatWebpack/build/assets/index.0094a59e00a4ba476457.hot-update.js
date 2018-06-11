webpackHotUpdate("index",{

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.0.11@vue-loader/lib??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.18.0@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tdata() {\n\t\treturn {\n\t\t\tcarData: [],\n\t\t\tcityWord: [],\n\t\t\tnewCityWord: []\n\t\t};\n\t},\n\tmethods: {\n\t\tgetData() {\n\t\t\taxios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/items/list\").then(res => {\n\t\t\t\t// 返回值是一个promise对象，使用then方法来调用\n\t\t\t\t// 所有的数据\n\t\t\t\tthis.carData = JSON.parse(res.data).data;A;\n\t\t\t\tconst word = [];\n\t\t\t\tthis.carData.map((val, ind) => {\n\t\t\t\t\tlet firstWord = val.Spelling.slice(0, 1);\n\t\t\t\t\tword.push(firstWord);\n\t\t\t\t\tthis.cityWord = new Set(word);\n\t\t\t\t\tthis.newCityWord = [...this.cityWord];\n\t\t\t\t});\n\t\t\t});\n\t\t}\n\t},\n\tmounted() {\n\t\tthis.getData();\n\t\tlet letter = item.Spelling.slice(0, 1);\n\t\tif (spelling.indexOf(letter) == -1) {\n\t\t\tspelling.push(letter);\n\t\t\t// 创建新的首字母对应的对象，并把当前车辆添加到list的第一项\n\t\t\tdata.push({\n\t\t\t\tspelling: letter,\n\t\t\t\tlist: [item]\n\t\t\t});\n\t\t} else {\n\t\t\t// 直接把车辆添加到所对应首字母的list里\n\t\t\tdata.forEach((value, key) => {\n\t\t\t\tif (letter == value.spelling) {\n\t\t\t\t\tvalue.list.push(item);\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP2U0MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsZUFGQTtBQUdBO0FBSEE7QUFLQSxFQVBBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsS0FOQTtBQU9BLElBWEE7QUFZQTtBQWRBLEVBUkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBO0FBRkE7QUFJQSxHQVBBLE1BT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFKQTtBQUtBO0FBQ0E7QUExQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjAuMTFAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiYm94XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZGF0YVwiIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjYXJEYXRhXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdDxwPkE8L3A+XHJcblx0XHRcdDx1bD5cclxuXHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHQ8ZGw+XHJcblx0XHRcdFx0XHRcdDxkdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cIml0ZW0uQ292ZXJQaG90b1wiIGFsdC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZHQ+XHJcblx0XHRcdFx0XHRcdDxkZD5cclxuXHRcdFx0XHRcdFx0XHR7e2l0ZW0uTmFtZX19XHJcblx0XHRcdFx0XHRcdDwvZGQ+XHJcblx0XHRcdFx0XHQ8L2RsPlxyXG5cdFx0XHRcdDwvbGk+XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJyaWdodFdvcmRcIj5cclxuXHRcdFx0PGEgaHJlZj1cIlwiIHYtZm9yPVwid29yZCBpbiBuZXdDaXR5V29yZFwiPnt7d29yZH19PC9hPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Y2FyRGF0YTogW10sXHJcblx0XHRcdFx0Y2l0eVdvcmQ6IFtdLFxyXG5cdFx0XHRcdG5ld0NpdHlXb3JkOiBbXVxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z2V0RGF0YSgpIHtcclxuXHRcdFx0XHRheGlvcy5nZXQoXCIvaXRlbXMvbGlzdFwiKS50aGVuKHJlcyA9PiB7IC8vIOi/lOWbnuWAvOaYr+S4gOS4qnByb21pc2Xlr7nosaHvvIzkvb/nlKh0aGVu5pa55rOV5p2l6LCD55SoXHJcblx0XHRcdFx0XHQvLyDmiYDmnInnmoTmlbDmja5cclxuXHRcdFx0XHRcdHRoaXMuY2FyRGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGE7QVxyXG5cdFx0XHRcdFx0Y29uc3Qgd29yZCA9IFtdO1xyXG5cdFx0XHRcdFx0dGhpcy5jYXJEYXRhLm1hcCgodmFsLCBpbmQpID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IGZpcnN0V29yZCA9IHZhbC5TcGVsbGluZy5zbGljZSgwLCAxKTtcclxuXHRcdFx0XHRcdFx0d29yZC5wdXNoKGZpcnN0V29yZClcclxuXHRcdFx0XHRcdFx0dGhpcy5jaXR5V29yZCA9IG5ldyBTZXQod29yZCk7XHJcblx0XHRcdFx0XHRcdHRoaXMubmV3Q2l0eVdvcmQgPSBbLi4udGhpcy5jaXR5V29yZF07XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLmdldERhdGEoKTtcclxuXHRcdFx0XHRsZXQgbGV0dGVyID0gaXRlbS5TcGVsbGluZy5zbGljZSgwLCAxKTtcclxuXHRcdFx0XHRcdFx0XHRpZihzcGVsbGluZy5pbmRleE9mKGxldHRlcikgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNwZWxsaW5nLnB1c2gobGV0dGVyKTtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIOWIm+W7uuaWsOeahOmmluWtl+avjeWvueW6lOeahOWvueixoe+8jOW5tuaKiuW9k+WJjei9pui+hua3u+WKoOWIsGxpc3TnmoTnrKzkuIDpoblcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNwZWxsaW5nOiBsZXR0ZXIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxpc3Q6IFtpdGVtXVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vIOebtOaOpeaKiui9pui+hua3u+WKoOWIsOaJgOWvueW6lOmmluWtl+avjeeahGxpc3Tph4xcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZihsZXR0ZXIgPT0gdmFsdWUuc3BlbGxpbmcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZS5saXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC5ib3gge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcblx0XHJcblx0cCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMC4ycmVtO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDAuMnJlbTtcclxuXHRcdGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDAuMDVyZW07XHJcblx0fVxyXG5cdFxyXG5cdHVsIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAwLjVyZW07XHJcblx0fVxyXG5cdFxyXG5cdHVsIGxpIHtcclxuXHRcdHdpZHRoOiA5NSU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG5cdH1cclxuXHRcclxuXHR1bCBsaSBkbCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMC41cmVtO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdFxyXG5cdHVsIGxpIGRsIGR0IGltZyB7XHJcblx0XHR3aWR0aDogMC40NXJlbTtcclxuXHRcdGhlaWdodDogYXV0bztcclxuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0fVxyXG5cdFxyXG5cdHVsIGxpIGRsIGRkIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwLjJyZW07XHJcblx0fVxyXG5cdFxyXG5cdC5yaWdodFdvcmQge1xyXG5cdFx0d2lkdGg6IC4xNHJlbTtcclxuXHRcdGhlaWdodDogMy4zNnJlbTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0cmlnaHQ6IC4wMnJlbTtcclxuXHRcdHRvcDogLjY0cmVtO1xyXG5cdFx0bWFyZ2luOiBhdXRvO1xyXG5cdH1cclxuXHRcclxuXHQucmlnaHRXb3JkIGEge1xyXG5cdFx0Zm9udC1zaXplOiAuMTJyZW07XHJcblx0fVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js\n");

/***/ })

})