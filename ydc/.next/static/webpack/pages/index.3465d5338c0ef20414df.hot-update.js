webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ShopList.js":
/*!********************************!*\
  !*** ./components/ShopList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pages_PCList_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/PCList.json */ "./pages/PCList.json");
var _pages_PCList_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../pages/PCList.json */ "./pages/PCList.json", 1);







var _jsxFileName = "C:\\Users\\pijon\\react-tutorial\\YDConnect\\components\\ShopList.js";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var ShopList = /*#__PURE__*/function (_Component) {
  Object(C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ShopList, _Component);

  var _super = _createSuper(ShopList);

  function ShopList(props) {
    var _this;

    Object(C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ShopList);

    _this = _super.call(this, props);
    _this.state = {
      data: _pages_PCList_json__WEBPACK_IMPORTED_MODULE_9__,
      texts: ""
    };
    return _this;
  } // db사용시 data state에 배열저장부분
  // componentDidMount() {
  //   fetch(process.env.LocalHost + "/ShopList", {
  //     method: "get",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         data: res,
  //       });
  //     });
  // }


  Object(C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ShopList, [{
    key: "render",
    value: function render() {
      var data = this.state.data; // style

      var tableImg = {
        paddingBottom: "20px",
        width: "330px"
      };
      var tableTd = {
        minHeight: "20px",
        padding: "3px 3px",
        backgroundColor: "#fff",
        borderTop: "1px solid #ffffff",
        borderLeft: "1px solid #dddddd",
        lineHeight: "0.5",
        textAlign: "-webkit-center"
      };
      var tableDetail = {
        textAlign: "center",
        lineHeight: "1.5",
        fontSize: "15px",
        whiteSpace: "pre-wrap"
      };
      var tablePrice = {
        fontSize: " 25px",
        fontWeight: " bold",
        display: " inline-block"
      };
      var tablePriceLabel = {
        fontSize: " 15px",
        fontWeight: "bold",
        padding: "20px 5px 20px 5px",
        display: " inline-block"
      }; //style end
      // db사용시 map으로 뿌려주는 부분
      // const contents = data.map((productDatas, index) => {
      //   return (
      //     <td key={index} style={tableTd} width="330px">
      //       <Link
      //         href={{
      //           pathname: "product",
      //           query: { id: productDatas.id },
      //         }}
      //       >
      //         <a>
      //           <img style={tableImg} src={productDatas.imgsrc1}></img>
      //         </a>
      //       </Link>
      //       <table>
      //         <tbody>
      //           <tr>
      //             <td style={tableDetail}>{productDatas.title}</td>
      //           </tr>
      //         </tbody>
      //       </table>
      //       <br />
      //       <table>
      //         <tbody>
      //           <tr>
      //             <td>
      //               <div style={tablePrice}>{productDatas.price}</div>
      //               <div style={tablePriceLabel}>원</div>
      //             </td>
      //           </tr>
      //         </tbody>
      //       </table>
      //     </td>
      //   );
      // });
      // const contents = () => {
      //   return (
      //     <td style={tableTd} width="330px">
      //       <Link
      //         href={{
      //           pathname: "product",
      //           query: { id: productDatas.id },
      //         }}
      //       >
      //         <a>
      //           <img style={tableImg} src={productDatas.img}></img>
      //         </a>
      //       </Link>
      //       <table>
      //         <tbody>
      //           <tr>
      //             <td style={tableDetail}>{productDatas.title}</td>
      //           </tr>
      //         </tbody>
      //       </table>
      //       <br />
      //       <table>
      //         <tbody>
      //           <tr>
      //             <td>
      //               <div style={tablePrice}>{productDatas.price}</div>
      //               <div style={tablePriceLabel}>원</div>
      //             </td>
      //           </tr>
      //         </tbody>
      //       </table>
      //     </td>
      //   );
      // };

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
          id: "1239214441",
          children: ".shopListTable.jsx-1239214441{border-top:2px solid #1199ff;border-bottom:1px solid #dddddd;border-right:1px solid #dddddd;border-left:1px solid #dddddd;width:100%;margin-top:10px;margin-bottom:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGlqb25cXHJlYWN0LXR1dG9yaWFsXFxZRENvbm5lY3RcXGNvbXBvbmVudHNcXFNob3BMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThJb0IsQUFHMEMsNkJBQ0csZ0NBQ0QsK0JBQ0QsOEJBQ25CLFdBQ0ssZ0JBQ0csbUJBQ04sMEVBQ1MsOEVBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGlqb25cXHJlYWN0LXR1dG9yaWFsXFxZRENvbm5lY3RcXGNvbXBvbmVudHNcXFNob3BMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBQQ0xpc3QgZnJvbSBcIi4uL3BhZ2VzL1BDTGlzdC5qc29uXCI7XHJcblxyXG5jbGFzcyBTaG9wTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IFBDTGlzdCxcclxuICAgICAgdGV4dHM6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gZGLsgqzsmqnsi5wgZGF0YSBzdGF0ZeyXkCDrsLDsl7TsoIDsnqXrtoDrtoRcclxuICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyAgIGZldGNoKHByb2Nlc3MuZW52LkxvY2FsSG9zdCArIFwiL1Nob3BMaXN0XCIsIHtcclxuICAvLyAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9KVxyXG4gIC8vICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gIC8vICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICBkYXRhOiByZXMsXHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgLy8gc3R5bGVcclxuICAgIGNvbnN0IHRhYmxlSW1nID0ge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgd2lkdGg6IFwiMzMwcHhcIixcclxuICAgIH07XHJcbiAgICBjb25zdCB0YWJsZVRkID0ge1xyXG4gICAgICBtaW5IZWlnaHQ6IFwiMjBweFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjNweCAzcHhcIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjZmZmZmZmXCIsXHJcbiAgICAgIGJvcmRlckxlZnQ6IFwiMXB4IHNvbGlkICNkZGRkZGRcIixcclxuICAgICAgbGluZUhlaWdodDogXCIwLjVcIixcclxuICAgICAgdGV4dEFsaWduOiBcIi13ZWJraXQtY2VudGVyXCIsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdGFibGVEZXRhaWwgPSB7XHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgbGluZUhlaWdodDogXCIxLjVcIixcclxuICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxyXG4gICAgICB3aGl0ZVNwYWNlOiBcInByZS13cmFwXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRhYmxlUHJpY2UgPSB7XHJcbiAgICAgIGZvbnRTaXplOiBcIiAyNXB4XCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiIGJvbGRcIixcclxuICAgICAgZGlzcGxheTogXCIgaW5saW5lLWJsb2NrXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRhYmxlUHJpY2VMYWJlbCA9IHtcclxuICAgICAgZm9udFNpemU6IFwiIDE1cHhcIixcclxuICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMjBweCA1cHggMjBweCA1cHhcIixcclxuICAgICAgZGlzcGxheTogXCIgaW5saW5lLWJsb2NrXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vc3R5bGUgZW5kXHJcblxyXG4gICAgLy8gZGLsgqzsmqnsi5wgbWFw7Jy866GcIOu/jOugpOyjvOuKlCDrtoDrtoRcclxuXHJcbiAgICAvLyBjb25zdCBjb250ZW50cyA9IGRhdGEubWFwKChwcm9kdWN0RGF0YXMsIGluZGV4KSA9PiB7XHJcbiAgICAvLyAgIHJldHVybiAoXHJcbiAgICAvLyAgICAgPHRkIGtleT17aW5kZXh9IHN0eWxlPXt0YWJsZVRkfSB3aWR0aD1cIjMzMHB4XCI+XHJcbiAgICAvLyAgICAgICA8TGlua1xyXG4gICAgLy8gICAgICAgICBocmVmPXt7XHJcbiAgICAvLyAgICAgICAgICAgcGF0aG5hbWU6IFwicHJvZHVjdFwiLFxyXG4gICAgLy8gICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBwcm9kdWN0RGF0YXMuaWQgfSxcclxuICAgIC8vICAgICAgICAgfX1cclxuICAgIC8vICAgICAgID5cclxuICAgIC8vICAgICAgICAgPGE+XHJcbiAgICAvLyAgICAgICAgICAgPGltZyBzdHlsZT17dGFibGVJbWd9IHNyYz17cHJvZHVjdERhdGFzLmltZ3NyYzF9PjwvaW1nPlxyXG4gICAgLy8gICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICA8L0xpbms+XHJcbiAgICAvLyAgICAgICA8dGFibGU+XHJcbiAgICAvLyAgICAgICAgIDx0Ym9keT5cclxuICAgIC8vICAgICAgICAgICA8dHI+XHJcbiAgICAvLyAgICAgICAgICAgICA8dGQgc3R5bGU9e3RhYmxlRGV0YWlsfT57cHJvZHVjdERhdGFzLnRpdGxlfTwvdGQ+XHJcbiAgICAvLyAgICAgICAgICAgPC90cj5cclxuICAgIC8vICAgICAgICAgPC90Ym9keT5cclxuICAgIC8vICAgICAgIDwvdGFibGU+XHJcbiAgICAvLyAgICAgICA8YnIgLz5cclxuICAgIC8vICAgICAgIDx0YWJsZT5cclxuICAgIC8vICAgICAgICAgPHRib2R5PlxyXG4gICAgLy8gICAgICAgICAgIDx0cj5cclxuICAgIC8vICAgICAgICAgICAgIDx0ZD5cclxuICAgIC8vICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFibGVQcmljZX0+e3Byb2R1Y3REYXRhcy5wcmljZX08L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFibGVQcmljZUxhYmVsfT7sm5A8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAvLyAgICAgICAgICAgPC90cj5cclxuICAgIC8vICAgICAgICAgPC90Ym9keT5cclxuICAgIC8vICAgICAgIDwvdGFibGU+XHJcbiAgICAvLyAgICAgPC90ZD5cclxuICAgIC8vICAgKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIGNvbnN0IGNvbnRlbnRzID0gKCkgPT4ge1xyXG4gICAgLy8gICByZXR1cm4gKFxyXG4gICAgLy8gICAgIDx0ZCBzdHlsZT17dGFibGVUZH0gd2lkdGg9XCIzMzBweFwiPlxyXG4gICAgLy8gICAgICAgPExpbmtcclxuICAgIC8vICAgICAgICAgaHJlZj17e1xyXG4gICAgLy8gICAgICAgICAgIHBhdGhuYW1lOiBcInByb2R1Y3RcIixcclxuICAgIC8vICAgICAgICAgICBxdWVyeTogeyBpZDogcHJvZHVjdERhdGFzLmlkIH0sXHJcbiAgICAvLyAgICAgICAgIH19XHJcbiAgICAvLyAgICAgICA+XHJcbiAgICAvLyAgICAgICAgIDxhPlxyXG4gICAgLy8gICAgICAgICAgIDxpbWcgc3R5bGU9e3RhYmxlSW1nfSBzcmM9e3Byb2R1Y3REYXRhcy5pbWd9PjwvaW1nPlxyXG4gICAgLy8gICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICA8L0xpbms+XHJcbiAgICAvLyAgICAgICA8dGFibGU+XHJcbiAgICAvLyAgICAgICAgIDx0Ym9keT5cclxuICAgIC8vICAgICAgICAgICA8dHI+XHJcbiAgICAvLyAgICAgICAgICAgICA8dGQgc3R5bGU9e3RhYmxlRGV0YWlsfT57cHJvZHVjdERhdGFzLnRpdGxlfTwvdGQ+XHJcbiAgICAvLyAgICAgICAgICAgPC90cj5cclxuICAgIC8vICAgICAgICAgPC90Ym9keT5cclxuICAgIC8vICAgICAgIDwvdGFibGU+XHJcbiAgICAvLyAgICAgICA8YnIgLz5cclxuICAgIC8vICAgICAgIDx0YWJsZT5cclxuICAgIC8vICAgICAgICAgPHRib2R5PlxyXG4gICAgLy8gICAgICAgICAgIDx0cj5cclxuICAgIC8vICAgICAgICAgICAgIDx0ZD5cclxuICAgIC8vICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFibGVQcmljZX0+e3Byb2R1Y3REYXRhcy5wcmljZX08L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFibGVQcmljZUxhYmVsfT7sm5A8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAvLyAgICAgICAgICAgPC90cj5cclxuICAgIC8vICAgICAgICAgPC90Ym9keT5cclxuICAgIC8vICAgICAgIDwvdGFibGU+XHJcbiAgICAvLyAgICAgPC90ZD5cclxuICAgIC8vICAgKTtcclxuICAgIC8vIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnNob3BMaXN0VGFibGUge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzExOTlmZjtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzaG9wTGlzdFRhYmxlXCI+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICB7Lyog67CY67O1c3RhcnQgKi99XHJcbiAgICAgICAgICAgICAgey8qIHtjb250ZW50c30gKi99XHJcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0YWJsZVRkfSB3aWR0aD1cIjMzMHB4XCI+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwicHJvZHVjdFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt0YWJsZUltZ30gc3JjPVwiLi9pbWdzL3BjMS5qcGdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKGRhdGFbJzEnXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RhYmxlRGV0YWlsfT57ZGF0YVsncGMxJ11bJ2NwdSddfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFibGVQcmljZX0+MTM0MTQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFibGVQcmljZUxhYmVsfT7sm5A8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICB7Lyog67CY67O1ZW5kICovfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9wTGlzdDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\pijon\\\\react-tutorial\\\\YDConnect\\\\components\\\\ShopList.js */"
        }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: "jsx-1239214441" + " " + "shopListTable",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            className: "jsx-1239214441",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              className: "jsx-1239214441",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                style: tableTd,
                width: "330px",
                className: "jsx-1239214441",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
                  href: {
                    pathname: "product"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    className: "jsx-1239214441",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      style: tableImg,
                      src: "./imgs/pc1.jpg",
                      className: "jsx-1239214441"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 167,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                  className: "jsx-1239214441",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                    className: "jsx-1239214441",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      className: "jsx-1239214441",
                      children: [console.log(data['1']), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        style: tableDetail,
                        className: "jsx-1239214441",
                        children: data['pc1']['cpu']
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 175,
                        columnNumber: 23
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 173,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
                  className: "jsx-1239214441"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                  className: "jsx-1239214441",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                    className: "jsx-1239214441",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      className: "jsx-1239214441",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        className: "jsx-1239214441",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          style: tablePrice,
                          className: "jsx-1239214441",
                          children: "13414"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 184,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          style: tablePriceLabel,
                          className: "jsx-1239214441",
                          children: "\uC6D0"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 185,
                          columnNumber: 25
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 161,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 9
        }, this)]
      }, void 0, true);
    }
  }]);

  return ShopList;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ShopList);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaG9wTGlzdC5qcyJdLCJuYW1lcyI6WyJTaG9wTGlzdCIsInByb3BzIiwic3RhdGUiLCJkYXRhIiwiUENMaXN0IiwidGV4dHMiLCJ0YWJsZUltZyIsInBhZGRpbmdCb3R0b20iLCJ3aWR0aCIsInRhYmxlVGQiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyVG9wIiwiYm9yZGVyTGVmdCIsImxpbmVIZWlnaHQiLCJ0ZXh0QWxpZ24iLCJ0YWJsZURldGFpbCIsImZvbnRTaXplIiwid2hpdGVTcGFjZSIsInRhYmxlUHJpY2UiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsInRhYmxlUHJpY2VMYWJlbCIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsUTs7Ozs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxVQUFJLEVBQUVDLCtDQURLO0FBRVhDLFdBQUssRUFBRTtBQUZJLEtBQWI7QUFGaUI7QUFNbEIsRyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7NkJBQ1M7QUFBQSxVQUNDRixJQURELEdBQ1UsS0FBS0QsS0FEZixDQUNDQyxJQURELEVBR1A7O0FBQ0EsVUFBTUcsUUFBUSxHQUFHO0FBQ2ZDLHFCQUFhLEVBQUUsTUFEQTtBQUVmQyxhQUFLLEVBQUU7QUFGUSxPQUFqQjtBQUlBLFVBQU1DLE9BQU8sR0FBRztBQUNkQyxpQkFBUyxFQUFFLE1BREc7QUFFZEMsZUFBTyxFQUFFLFNBRks7QUFHZEMsdUJBQWUsRUFBRSxNQUhI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QkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUEsc0JBREY7QUF3REQ7Ozs7RUFoTW9CSSwrQzs7QUFtTVIzQix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNDY1ZDUzMzhjMGVmMjA0MTRkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBQQ0xpc3QgZnJvbSBcIi4uL3BhZ2VzL1BDTGlzdC5qc29uXCI7XHJcblxyXG5jbGFzcyBTaG9wTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IFBDTGlzdCxcclxuICAgICAgdGV4dHM6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gZGLsgqzsmqnsi5wgZGF0YSBzdGF0ZeyXkCDrsLDsl7TsoIDsnqXrtoDrtoRcclxuICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyAgIGZldGNoKHByb2Nlc3MuZW52LkxvY2FsSG9zdCArIFwiL1Nob3BMaXN0XCIsIHtcclxuICAvLyAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9KVxyXG4gIC8vICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gIC8vICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICBkYXRhOiByZXMsXHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgLy8gc3R5bGVcclxuICAgIGNvbnN0IHRhYmxlSW1nID0ge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgd2lkdGg6IFwiMzMwcHhcIixcclxuICAgIH07XHJcbiAgICBjb25zdCB0YWJsZVRkID0ge1xyXG4gICAgICBtaW5IZWlnaHQ6IFwiMjBweFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjNweCAzcHhcIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjZmZmZmZmXCIsXHJcbiAgICAgIGJvcmRlckxlZnQ6IFwiMXB4IHNvbGlkICNkZGRkZGRcIixcclxuICAgICAgbGluZUhlaWdodDogXCIwLjVcIixcclxuICAgICAgdGV4dEFsaWduOiBcIi13ZWJraXQtY2VudGVyXCIsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdGFibGVEZXRhaWwgPSB7XHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgbGluZUhlaWdodDogXCIxLjVcIixcclxuICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxyXG4gICAgICB3aGl0ZVNwYWNlOiBcInByZS13cmFwXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRhYmxlUHJpY2UgPSB7XHJcbiAgICAgIGZvbnRTaXplOiBcIiAyNXB4XCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiIGJvbGRcIixcclxuICAgICAgZGlzcGxheTogXCIgaW5saW5lLWJsb2NrXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRhYmxlUHJpY2VMYWJlbCA9IHtcclxuICAgICAgZm9udFNpemU6IFwiIDE1cHhcIixcclxuICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMjBweCA1cHggMjBweCA1cHhcIixcclxuICAgICAgZGlzcGxheTogXCIgaW5saW5lLWJsb2NrXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vc3R5bGUgZW5kXHJcblxyXG4gICAgLy8gZGLsgqzsmqnsi5wgbWFw7Jy866GcIOu/jOugpOyjvOuKlCDrtoDrtoRcclxuXHJcbiAgICAvLyBjb25zdCBjb250ZW50cyA9IGRhdGEubWFwKChwcm9kdWN0RGF0YXMsIGluZGV4KSA9PiB7XHJcbiAgICAvLyAgIHJldHVybiAoXHJcbiAgICAvLyAgICAgPHRkIGtleT17aW5kZXh9IHN0eWxlPXt0YWJsZVRkfSB3aWR0aD1cIjMzMHB4XCI+XHJcbiAgICAvLyAgICAgICA8TGlua1xyXG4gICAgLy8gICAgICAgICBocmVmPXt7XHJcbiAgICAvLyAgICAgICAgICAgcGF0aG5hbWU6IFwicHJvZHVjdFwiLFxyXG4gICAgLy8gICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBwcm9kdWN0RGF0YXMuaWQgfSxcclxuICAgIC8vICAgICAgICAgfX1cclxuICAgIC8vICAgICAgID5cclxuICAgIC8vICAgICAgICAgPGE+XHJcbiAgICAvLyAgICAgICAgICAgPGltZyBzdHlsZT17dGFibGVJbWd9IHNyYz17cHJvZHVjdERhdGFzLmltZ3NyYzF9PjwvaW1nPlxyXG4gICAgLy8gICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICA8L0xpbms+XHJcbiAgICAvLyAgICAgICA8dGFibGU+XHJcbiAgICAvLyAgICAgICAgIDx0Ym9keT5cclxuICAgIC8vICAgICAgICAgICA8dHI+XHJcbiAgICAvLyAgICAgICAgICAgICA8dGQgc3R5bGU9e3RhYmxlRGV0YWlsfT57cHJvZHVjdERhdGFzLnRpdGxlfTwvdGQ+XHJcbiAgICAvLyAgICAgICAgICAgPC90cj5cclxuICAgIC8vICAgICAgICAgPC90Ym9keT5cclxuICAgIC8vICAgICAgIDwvdGFibGU+XHJcbiAgICAvLyAgICAgICA8YnIgLz5cclxuICAgIC8vICAgICAgIDx0YWJsZT5cclxuICAgIC8vICAgICAgICAgPHRib2R5PlxyXG4gICAgLy8gICAgICAgICAgIDx0cj5cclxuICAgIC8vICAgICAgICAgICAgIDx0ZD5cclxuICAgIC8vICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFibGVQcmljZX0+e3Byb2R1Y3REYXRhcy5wcmljZX08L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFibGVQcmljZUxhYmVsfT7sm5A8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAvLyAgICAgICAgICAgPC90cj5cclxuICAgIC8vICAgICAgICAgPC90Ym9keT5cclxuICAgIC8vICAgICAgIDwvdGFibGU+XHJcbiAgICAvLyAgICAgPC90ZD5cclxuICAgIC8vICAgKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIGNvbnN0IGNvbnRlbnRzID0gKCkgPT4ge1xyXG4gICAgLy8gICByZXR1cm4gKFxyXG4gICAgLy8gICAgIDx0ZCBzdHlsZT17dGFibGVUZH0gd2lkdGg9XCIzMzBweFwiPlxyXG4gICAgLy8gICAgICAgPExpbmtcclxuICAgIC8vICAgICAgICAgaHJlZj17e1xyXG4gICAgLy8gICAgICAgICAgIHBhdGhuYW1lOiBcInByb2R1Y3RcIixcclxuICAgIC8vICAgICAgICAgICBxdWVyeTogeyBpZDogcHJvZHVjdERhdGFzLmlkIH0sXHJcbiAgICAvLyAgICAgICAgIH19XHJcbiAgICAvLyAgICAgICA+XHJcbiAgICAvLyAgICAgICAgIDxhPlxyXG4gICAgLy8gICAgICAgICAgIDxpbWcgc3R5bGU9e3RhYmxlSW1nfSBzcmM9e3Byb2R1Y3REYXRhcy5pbWd9PjwvaW1nPlxyXG4gICAgLy8gICAgICAgICA8L2E+XHJcbiAgICAvLyAgICAgICA8L0xpbms+XHJcbiAgICAvLyAgICAgICA8dGFibGU+XHJcbiAgICAvLyAgICAgICAgIDx0Ym9keT5cclxuICAgIC8vICAgICAgICAgICA8dHI+XHJcbiAgICAvLyAgICAgICAgICAgICA8dGQgc3R5bGU9e3RhYmxlRGV0YWlsfT57cHJvZHVjdERhdGFzLnRpdGxlfTwvdGQ+XHJcbiAgICAvLyAgICAgICAgICAgPC90cj5cclxuICAgIC8vICAgICAgICAgPC90Ym9keT5cclxuICAgIC8vICAgICAgIDwvdGFibGU+XHJcbiAgICAvLyAgICAgICA8YnIgLz5cclxuICAgIC8vICAgICAgIDx0YWJsZT5cclxuICAgIC8vICAgICAgICAgPHRib2R5PlxyXG4gICAgLy8gICAgICAgICAgIDx0cj5cclxuICAgIC8vICAgICAgICAgICAgIDx0ZD5cclxuICAgIC8vICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFibGVQcmljZX0+e3Byb2R1Y3REYXRhcy5wcmljZX08L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFibGVQcmljZUxhYmVsfT7sm5A8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAvLyAgICAgICAgICAgPC90cj5cclxuICAgIC8vICAgICAgICAgPC90Ym9keT5cclxuICAgIC8vICAgICAgIDwvdGFibGU+XHJcbiAgICAvLyAgICAgPC90ZD5cclxuICAgIC8vICAgKTtcclxuICAgIC8vIH07XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLnNob3BMaXN0VGFibGUge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzExOTlmZjtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzaG9wTGlzdFRhYmxlXCI+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICB7Lyog67CY67O1c3RhcnQgKi99XHJcbiAgICAgICAgICAgICAgey8qIHtjb250ZW50c30gKi99XHJcbiAgICAgICAgICAgICAgPHRkIHN0eWxlPXt0YWJsZVRkfSB3aWR0aD1cIjMzMHB4XCI+XHJcbiAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwicHJvZHVjdFwiLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt0YWJsZUltZ30gc3JjPVwiLi9pbWdzL3BjMS5qcGdcIj48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKGRhdGFbJzEnXSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RhYmxlRGV0YWlsfT57ZGF0YVsncGMxJ11bJ2NwdSddfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFibGVQcmljZX0+MTM0MTQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGFibGVQcmljZUxhYmVsfT7sm5A8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICB7Lyog67CY67O1ZW5kICovfVxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9wTGlzdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==