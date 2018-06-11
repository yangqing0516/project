webpackHotUpdate("index",{

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.0.11@vue-loader/lib??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.18.0@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tdata() {\n\t\treturn {\n\t\t\tcarData: [],\n\t\t\tcityWord: [], // 首字母\n\t\t\tnewCityWord: [] // 所有的數據\n\t\t};\n\t},\n\tmethods: {\n\t\tgetData() {\n\t\t\taxios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/items/list\").then(res => {\n\t\t\t\t// 返回值是一个promise对象，使用then方法来调用\n\t\t\t\t// 所有的数据\n\t\t\t\tthis.carData = JSON.parse(res.data).data;\n\t\t\t\tconst cityWord = [];\n\t\t\t\tconst newCityWord = [];\n\t\t\t\tthis.carData.map((val, ind) => {\n\t\t\t\t\tlet firstWord = val.Spelling.slice(0, 1);\n\t\t\t\t\tif (cityWord.indexOf(firstWord) === -1) {\n\t\t\t\t\t\tcityWord.push(firstWord);\n\t\t\t\t\t\tnewCityWord.push({\n\t\t\t\t\t\t\tcityWord: firstWord,\n\t\t\t\t\t\t\tlist: [val]\n\t\t\t\t\t\t});\n\t\t\t\t\t} else {\n\t\t\t\t\t\tnewCityWord.map((value, ind) => {\n\t\t\t\t\t\t\tif (firstWord === value.cityWord) {\n\t\t\t\t\t\t\t\tvalue.list.push(val);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\tthis.cityWord = cityWord;\n\t\t\t\tthis.newCityWord = newCityWord;\n\t\t\t\tconsole.log(this.cityWord);\n\t\t\t});\n\t\t}\n\t},\n\tmounted() {\n\t\tthis.getData();\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP2U0MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsZUFGQSxFQUVBO0FBQ0Esa0JBSEEsQ0FHQTtBQUhBO0FBS0EsRUFQQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQTtBQUZBO0FBSUEsTUFOQSxNQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBO0FBS0E7QUFDQSxLQWZBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBLElBeEJBO0FBeUJBO0FBM0JBLEVBUkE7QUFxQ0E7QUFDQTtBQUNBO0FBdkNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4wLjExQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zcmMvY29tcG9uZW50cy9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImJveFwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNhckJveFwiPjwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cInJpZ2h0V29yZFwiPlxyXG5cdFx0XHQ8YSA6aHJlZj0nXCIjXCIrd29yZCcgdi1mb3I9XCIod29yZCwgJGluZGV4KSBpbiBjaXR5V29yZFwiIDprZXk9XCIkaW5kZXhcIj57e3dvcmR9fTwvYT5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGNhckRhdGE6IFtdLFxyXG5cdFx0XHRcdGNpdHlXb3JkOiBbXSwgLy8g6aaW5a2X5q+NXHJcblx0XHRcdFx0bmV3Q2l0eVdvcmQ6IFtdIC8vIOaJgOacieeahOaVuOaTmlxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z2V0RGF0YSgpIHtcclxuXHRcdFx0XHRheGlvcy5nZXQoXCIvaXRlbXMvbGlzdFwiKS50aGVuKHJlcyA9PiB7IC8vIOi/lOWbnuWAvOaYr+S4gOS4qnByb21pc2Xlr7nosaHvvIzkvb/nlKh0aGVu5pa55rOV5p2l6LCD55SoXHJcblx0XHRcdFx0XHQvLyDmiYDmnInnmoTmlbDmja5cclxuXHRcdFx0XHRcdHRoaXMuY2FyRGF0YSA9IEpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGE7XHJcblx0XHRcdFx0XHRjb25zdCBjaXR5V29yZCA9IFtdO1xyXG5cdFx0XHRcdFx0Y29uc3QgbmV3Q2l0eVdvcmQgPSBbXTtcclxuXHRcdFx0XHRcdHRoaXMuY2FyRGF0YS5tYXAoKHZhbCwgaW5kKSA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCBmaXJzdFdvcmQgPSB2YWwuU3BlbGxpbmcuc2xpY2UoMCwgMSk7XHJcblx0XHRcdFx0XHRcdGlmKGNpdHlXb3JkLmluZGV4T2YoZmlyc3RXb3JkKSA9PT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRjaXR5V29yZC5wdXNoKGZpcnN0V29yZCk7XHJcblx0XHRcdFx0XHRcdFx0bmV3Q2l0eVdvcmQucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0XHRjaXR5V29yZDogZmlyc3RXb3JkLFxyXG5cdFx0XHRcdFx0XHRcdFx0bGlzdDogW3ZhbF1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdG5ld0NpdHlXb3JkLm1hcCgodmFsdWUsIGluZCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYoZmlyc3RXb3JkID09PSB2YWx1ZS5jaXR5V29yZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZS5saXN0LnB1c2godmFsKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0dGhpcy5jaXR5V29yZCA9IGNpdHlXb3JkO1xyXG5cdFx0XHRcdFx0dGhpcy5uZXdDaXR5V29yZCA9IG5ld0NpdHlXb3JkO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5jaXR5V29yZCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLmdldERhdGEoKTtcclxuXHRcdH1cclxuXHR9O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQuYm94IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cdFxyXG5cdC5kYXRhIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiBhdXRvO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0fVxyXG5cdFxyXG5cdC5kYXRhIHAge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IC4ycmVtO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAuMDRyZW07XHJcblx0XHRsaW5lLWhlaWdodDogLjJyZW07XHJcblx0XHRiYWNrZ3JvdW5kOiAjY2NjY2NjO1xyXG5cdH1cclxuXHJcblx0LmRhdGEgdWwge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0fVx0XHJcblx0XHJcblx0LmRhdGEgdWwgbGkge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IC41cmVtO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcblx0XHRwYWRkaW5nOiAwIC4wMnJlbTtcclxuXHR9XHJcblx0XHJcblx0LmRhdGEgdWwgbGk6bGFzdC1jaGlsZCB7XHJcblx0XHRib3JkZXItYm90dG9tOiBub25lO1xyXG5cdH1cdFxyXG5cdFxyXG5cdC5kYXRhIHVsIGxpIGRsIHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAuNXJlbTtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHRcclxuXHQuZGF0YSB1bCBsaSBkbCBkdCBpbWcge1xyXG5cdFx0d2lkdGg6IC40cmVtO1xyXG5cdFx0aGVpZ2h0OiAuNHJlbTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHR9XHJcblx0XHJcblx0LmRhdGEgdWwgbGkgZGwgZGQge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IC4xcmVtO1xyXG5cdH1cclxuXHRcclxuXHQucmlnaHRXb3JkIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHJpZ2h0OiAuMDNyZW07XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHRvcDogMDtcclxuXHRcdHotaW5kZXg6IDk5O1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHQucmlnaHRXb3JkIGEge1xyXG5cdFx0Y29sb3I6ICM5OTk5OTk7XHJcblx0XHRmb250LXNpemU6IC4xMnJlbTtcclxuXHR9XHJcbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/_vue-loader@15.0.11@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=template&id=6efe4612&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.0.11@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.0.11@vue-loader/lib??vue-loader-options!./src/components/index.vue?vue&type=template&id=6efe4612&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"box\" }, [\n    _c(\"div\", { staticClass: \"carBox\" }),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"rightWord\" },\n      _vm._l(_vm.cityWord, function(word, $index) {\n        return _c(\"a\", { key: $index, attrs: { href: \"#\" + word } }, [\n          _vm._v(_vm._s(word))\n        ])\n      })\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC52dWU/ODMxZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDLGVBQWUsd0JBQXdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLE9BQU8sMkJBQTJCO0FBQ2xDO0FBQ0Esd0JBQXdCLHNCQUFzQixtQkFBbUIsRUFBRTtBQUNuRTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMC4xMUB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMC4xMUB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3JjL2NvbXBvbmVudHMvaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZlZmU0NjEyJnNjb3BlZD10cnVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhckJveFwiIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJyaWdodFdvcmRcIiB9LFxuICAgICAgX3ZtLl9sKF92bS5jaXR5V29yZCwgZnVuY3Rpb24od29yZCwgJGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfYyhcImFcIiwgeyBrZXk6ICRpbmRleCwgYXR0cnM6IHsgaHJlZjogXCIjXCIgKyB3b3JkIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3Mod29yZCkpXG4gICAgICAgIF0pXG4gICAgICB9KVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/_vue-loader@15.0.11@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/index.vue?vue&type=template&id=6efe4612&scoped=true\n");

/***/ })

})