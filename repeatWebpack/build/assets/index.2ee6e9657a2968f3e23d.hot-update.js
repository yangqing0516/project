webpackHotUpdate("index",{

/***/ "./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/login.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.0.11@vue-loader/lib??vue-loader-options!./src/components/login.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/_axios@0.18.0@axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n// 引入axios\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\tdata() {\n\t\treturn {\n\t\t\t// 定义变量与模板中v-model相对应\n\t\t\tusername: '',\n\t\t\tpwd: '',\n\t\t\tisRemeber: false,\n\t\t\tcls: ''\n\t\t};\n\t},\n\tmethods: {\n\t\tgoLogin() {\n\t\t\t// 判断此时按钮是否可以点击------？\n\t\t\tif (!this.cls) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\t// 判断是否记住密码\n\t\t\tif (this.isRemeber) {\n\t\t\t\twindow.localStorage.setItem('account', JSON.stringify({\n\t\t\t\t\tusername: this.username,\n\t\t\t\t\tpwd: this.pwd\n\t\t\t\t}).then(res => {\n\t\t\t\t\tconsole.log('res....', res);\n\t\t\t\t\tif (res.data.code === 1) {\n\t\t\t\t\t\twindow.location = 'http://www.baidu.com';\n\t\t\t\t\t} else {\n\t\t\t\t\t\talert(res.data.msg);\n\t\t\t\t\t}\n\t\t\t\t}).catch(err => {\n\t\t\t\t\tconsole.log('error', err);\n\t\t\t\t}));\n\t\t\t}\n\t\t}\n\t},\n\twatch: {\n\t\tusername() {\n\t\t\tif (this.username && this.pwd) {\n\t\t\t\tthis.cls = 'active';\n\t\t\t} else {\n\t\t\t\tthis.active = '';\n\t\t\t}\n\t\t\tthis.username = this.username.toUpperCase();\n\t\t},\n\t\tpwd() {\n\t\t\tif (this.username && this.password) {\n\t\t\t\tthis.cls = 'active';\n\t\t\t} else {\n\t\t\t\tthis.cls = '';\n\t\t\t}\n\t\t}\n\t},\n\tmounted() {}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvbG9naW4udnVlPzk0Y2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUZBO0FBR0EsVUFIQTtBQUlBLG1CQUpBO0FBS0E7QUFMQTtBQU9BLEVBVEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQ0E7QUFDQSw0QkFEQTtBQUVBO0FBRkEsT0FHQSxJQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FWQSxFQVVBLEtBVkEsQ0FVQTtBQUNBO0FBQ0EsS0FaQSxDQURBO0FBY0E7QUFDQTtBQXZCQSxFQVZBO0FBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FSQTtBQVNBO0FBQ0E7QUFDQTtBQUNBLElBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWZBLEVBbkNBO0FBb0RBLFlBRUE7QUF0REEiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjAuMTFAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NyYy9jb21wb25lbnRzL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwibG9naW5cIj5cclxuXHRcdDxoMj7nmbvpmYbpobXpnaI8L2gyPlxyXG5cdFx0PGZvcm0gYWN0aW9uPVwiXCI+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJcIj7nlKjmiLflkI3vvJo8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJ1c2VybmFtZVwiIC8+XHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0PGxhYmVsIGZvcj1cIlwiPuWvhuegge+8mjwvbGFiZWw+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJwd2RcIiAvPlxyXG5cdFx0XHQ8L3A+XHJcblx0XHRcdDxwPlxyXG5cdFx0XHRcdDxsYWJlbCBmb3I9XCJjaGVja2JveFwiPuaYr+WQpuiusOS9j+WvhueggTo8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImNoZWNrYm94XCIgdi1tb2RlbD1cImlzUmVtZWJlclwiIC8+XHJcblx0XHRcdDwvcD5cclxuXHRcdFx0PHA+XHJcblx0XHRcdFx0PGJ1dHRvbiA6Y2xhc3M9XCJjbHNcIiBAY2xpY2s9XCJnb0xvZ2luXCI+55m76ZmGPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbj7ms6jlhow8L2J1dHRvbj5cclxuXHRcdFx0PC9wPlxyXG5cdFx0PC9mb3JtPlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHQvLyDlvJXlhaVheGlvc1xyXG5cdGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHQvLyDlrprkuYnlj5jph4/kuI7mqKHmnb/kuK12LW1vZGVs55u45a+55bqUXHJcblx0XHRcdFx0dXNlcm5hbWU6ICcnLFxyXG5cdFx0XHRcdHB3ZDogJycsXHJcblx0XHRcdFx0aXNSZW1lYmVyOiBmYWxzZSxcclxuXHRcdFx0XHRjbHM6ICcnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdvTG9naW4oKSB7XHJcblx0XHRcdFx0Ly8g5Yik5pat5q2k5pe25oyJ6ZKu5piv5ZCm5Y+v5Lul54K55Ye7LS0tLS0t77yfXHJcblx0XHRcdFx0aWYoIXRoaXMuY2xzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIOWIpOaWreaYr+WQpuiusOS9j+WvhueggVxyXG5cdFx0XHRcdGlmKHRoaXMuaXNSZW1lYmVyKSB7XHJcblx0XHRcdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FjY291bnQnLFxyXG5cdFx0XHRcdFx0XHRKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdFx0XHRcdFx0dXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXHJcblx0XHRcdFx0XHRcdFx0cHdkOiB0aGlzLnB3ZFxyXG5cdFx0XHRcdFx0XHR9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3Jlcy4uLi4nLCByZXMpO1xyXG5cdFx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLmNvZGUgPT09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbiA9ICdodHRwOi8vd3d3LmJhaWR1LmNvbSdcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0YWxlcnQocmVzLmRhdGEubXNnKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSkuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnZXJyb3InLCBlcnIpXHJcblx0XHRcdFx0XHRcdH0pKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdHVzZXJuYW1lICgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy51c2VybmFtZSAmJiB0aGlzLnB3ZCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNscyA9ICdhY3RpdmUnXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuYWN0aXZlID0gJydcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy51c2VybmFtZSA9IHRoaXMudXNlcm5hbWUudG9VcHBlckNhc2UoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRwd2QgKCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLnVzZXJuYW1lICYmIHRoaXMucGFzc3dvcmQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xzID0gJ2FjdGl2ZSdcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xzID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdGgyIHtcclxuXHRcdGZvbnQtc2l6ZTogLjNyZW07XHJcblx0XHRmb250LXdlaWdodDogYm9sZGVyO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bGluZS1oZWlnaHQ6IC40cmVtO1xyXG5cdFx0Zm9udC1mYW1pbHk6IFwi5qW35L2TXCI7XHJcblx0fVxyXG5cdFxyXG5cdGZvcm0ge1xyXG5cdFx0bWFyZ2luLXRvcDogLjJyZW07XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogYXV0bztcclxuXHR9XHJcblx0XHJcblx0Zm9ybSBwIHtcclxuXHRcdHBhZGRpbmc6IC4xNXJlbSAwO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcblx0fVxyXG5cdFxyXG5cdGZvcm0gcCBsYWJlbCB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IC4wNXJlbTtcclxuXHRcdGZvbnQtc2l6ZTogLjE0cmVtO1xyXG5cdH1cclxuXHRcclxuXHRmb3JtIHA6bnRoLW9mLXR5cGUoMSkgbGFiZWwsXHJcblx0Zm9ybSBwOm50aC1vZi10eXBlKDIpIGxhYmVsIHtcclxuXHRcdHdpZHRoOiAuN3JlbTtcclxuXHRcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblx0fVxyXG5cdFxyXG5cdGZvcm0gcDpudGgtb2YtdHlwZSgxKSBpbnB1dCxcclxuXHRmb3JtIHA6bnRoLW9mLXR5cGUoMikgaW5wdXQge1xyXG5cdFx0d2lkdGg6IDJyZW07XHJcblx0XHRoZWlnaHQ6IC4zcmVtO1xyXG5cdFx0Ym9yZGVyOiAwO1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHR9XHJcblx0XHJcblx0Zm9ybSBwOm50aC1vZi10eXBlKDMpIGlucHV0IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAuNmVtO1xyXG5cdFx0d2lkdGg6IC4yNXJlbTtcclxuXHRcdGhlaWdodDogLjI1cmVtO1xyXG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHR9XHJcblx0XHJcblx0Zm9ybSBwOm50aC1vZi10eXBlKDQpIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRwYWRkaW5nOlxyXG5cdH1cclxuXHRcclxuXHRmb3JtIHA6bnRoLW9mLXR5cGUoNCkgYnV0dG9uIHtcclxuXHRcdHdpZHRoOiA0NSU7XHJcblx0XHRoZWlnaHQ6IC40cmVtO1xyXG5cdFx0Zm9udC1zaXplOiAuMnJlbTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGJvcmRlcjogMDtcclxuXHRcdG1hcmdpbjogMCAyLjUlO1xyXG5cdH1cclxuXHRcclxuXHRmb3JtIHA6bnRoLW9mLXR5cGUoNCkgYnV0dG9uOm50aC1vZi10eXBlKDEpIHtcclxuXHRcdGJhY2tncm91bmQ6IHNreWJsdWU7XHJcblx0fVxyXG5cdFxyXG5cdGZvcm0gcDpudGgtb2YtdHlwZSg0KSBidXR0b246bnRoLW9mLXR5cGUoMikge1xyXG5cdFx0YmFja2dyb3VuZDogcGFsZWdyZWVuO1xyXG5cdH1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/_babel-loader@7.1.4@babel-loader/lib/index.js!./node_modules/_vue-loader@15.0.11@vue-loader/lib/index.js??vue-loader-options!./src/components/login.vue?vue&type=script&lang=js\n");

/***/ })

})