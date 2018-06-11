webpackHotUpdate("index",{

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.0.11@vue-loader/lib??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.18.0@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tdata() {\n\t\treturn {\n\t\t\tcarData: [],\n\t\t\tcityWord: [],\n\t\t\tnewCityWord: []\n\t\t};\n\t},\n\tmethods: {\n\t\tgetData() {\n\t\t\taxios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/items/list\").then(res => {\n\t\t\t\t// 返回值是一个promise对象，使用then方法来调用\n\t\t\t\t// 所有的数据\n\t\t\t\tthis.carData = JSON.parse(res.data).data;\n\t\t\t\tconst cityWord = [];\n\t\t\t\tconst newCityWord = [];\n\t\t\t\tthis.carData.map((val, ind) => {\n\t\t\t\t\tlet firstWord = val.Spelling.slice(0, 1);\n\t\t\t\t\tif (cityWord.indexOf(firstWord) === -1) {\n\t\t\t\t\t\tcityWord.push(firstWord);\n\t\t\t\t\t\tnewCityWord.push({\n\t\t\t\t\t\t\tcityWord: firstWord,\n\t\t\t\t\t\t\tlist: [val]\n\t\t\t\t\t\t});\n\t\t\t\t\t} else {\n\t\t\t\t\t\tnewCityWord.map((value, ind) => {\n\t\t\t\t\t\t\tif (firstWord === value.cityWord) {\n\t\t\t\t\t\t\t\tvalue.list.push(val);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\tthis.cityWord = cityWord;\n\t\t\t\tthis.newCityWord = newCityWord;\n\t\t\t});\n\t\t}\n\t},\n\tmounted() {\n\t\tthis.getData();\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP2U0MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsZUFGQTtBQUdBO0FBSEE7QUFLQSxFQVBBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBO0FBRkE7QUFJQSxNQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQTtBQUNBLEtBZkE7QUFnQkE7QUFDQTtBQUNBLElBdkJBO0FBd0JBO0FBMUJBLEVBUkE7QUFvQ0E7QUFDQTtBQUNBO0FBdENBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4wLjExQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcmMvY29tcG9uZW50cy9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImJveFwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImRhdGFcIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gY2FyRGF0YVwiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHQ8cD5BPC9wPlxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0PGRsPlxyXG5cdFx0XHRcdFx0XHQ8ZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJpdGVtLkNvdmVyUGhvdG9cIiBhbHQvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2R0PlxyXG5cdFx0XHRcdFx0XHQ8ZGQ+XHJcblx0XHRcdFx0XHRcdFx0e3tpdGVtLk5hbWV9fVxyXG5cdFx0XHRcdFx0XHQ8L2RkPlxyXG5cdFx0XHRcdFx0PC9kbD5cclxuXHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwicmlnaHRXb3JkXCI+XHJcblx0XHRcdDxhIGhyZWY9XCJcIiB2LWZvcj1cIndvcmQgaW4gbmV3Q2l0eVdvcmRcIj57e3dvcmR9fTwvYT5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGNhckRhdGE6IFtdLFxyXG5cdFx0XHRcdGNpdHlXb3JkOiBbXSxcclxuXHRcdFx0XHRuZXdDaXR5V29yZDogW11cclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdldERhdGEoKSB7XHJcblx0XHRcdFx0YXhpb3MuZ2V0KFwiL2l0ZW1zL2xpc3RcIikudGhlbihyZXMgPT4geyAvLyDov5Tlm57lgLzmmK/kuIDkuKpwcm9taXNl5a+56LGh77yM5L2/55SodGhlbuaWueazleadpeiwg+eUqFxyXG5cdFx0XHRcdFx0Ly8g5omA5pyJ55qE5pWw5o2uXHJcblx0XHRcdFx0XHR0aGlzLmNhckRhdGEgPSBKU09OLnBhcnNlKHJlcy5kYXRhKS5kYXRhO1xyXG5cdFx0XHRcdFx0Y29uc3QgY2l0eVdvcmQgPSBbXTtcclxuXHRcdFx0XHRcdGNvbnN0IG5ld0NpdHlXb3JkID0gW107XHJcblx0XHRcdFx0XHR0aGlzLmNhckRhdGEubWFwKCh2YWwsIGluZCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgZmlyc3RXb3JkID0gdmFsLlNwZWxsaW5nLnNsaWNlKDAsIDEpO1xyXG5cdFx0XHRcdFx0XHRpZihjaXR5V29yZC5pbmRleE9mKGZpcnN0V29yZCkgPT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2l0eVdvcmQucHVzaChmaXJzdFdvcmQpO1xyXG5cdFx0XHRcdFx0XHRcdG5ld0NpdHlXb3JkLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2l0eVdvcmQ6IGZpcnN0V29yZCxcclxuXHRcdFx0XHRcdFx0XHRcdGxpc3Q6IFt2YWxdXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRuZXdDaXR5V29yZC5tYXAoKHZhbHVlLCBpbmQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmKGZpcnN0V29yZCA9PT0gdmFsdWUuY2l0eVdvcmQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWUubGlzdC5wdXNoKHZhbClcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHRoaXMuY2l0eVdvcmQgPSBjaXR5V29yZDtcclxuXHRcdFx0XHRcdHRoaXMubmV3Q2l0eVdvcmQgPSBuZXdDaXR5V29yZDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRoaXMuZ2V0RGF0YSgpO1xyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC5ib3gge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcblx0XHJcblx0cCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMC4ycmVtO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDAuMnJlbTtcclxuXHRcdGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDAuMDVyZW07XHJcblx0fVxyXG5cdFxyXG5cdHVsIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAwLjVyZW07XHJcblx0fVxyXG5cdFxyXG5cdHVsIGxpIHtcclxuXHRcdHdpZHRoOiA5NSU7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG5cdH1cclxuXHRcclxuXHR1bCBsaSBkbCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMC41cmVtO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cdFxyXG5cdHVsIGxpIGRsIGR0IGltZyB7XHJcblx0XHR3aWR0aDogMC40NXJlbTtcclxuXHRcdGhlaWdodDogYXV0bztcclxuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0fVxyXG5cdFxyXG5cdHVsIGxpIGRsIGRkIHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAwLjJyZW07XHJcblx0fVxyXG5cdFxyXG5cdC5yaWdodFdvcmQge1xyXG5cdFx0d2lkdGg6IC4xNHJlbTtcclxuXHRcdGhlaWdodDogMy4zNnJlbTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0cmlnaHQ6IC4wMnJlbTtcclxuXHRcdHRvcDogLjY0cmVtO1xyXG5cdFx0bWFyZ2luOiBhdXRvO1xyXG5cdH1cclxuXHRcclxuXHQucmlnaHRXb3JkIGEge1xyXG5cdFx0Zm9udC1zaXplOiAuMTJyZW07XHJcblx0fVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js\n");

/***/ })

})