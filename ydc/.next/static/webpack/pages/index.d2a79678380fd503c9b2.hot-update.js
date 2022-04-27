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
      var _this2 = this;

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
      // db사용시 data.map

      var contents = data.pclist.map(function (productDatas, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          style: tableTd,
          width: "330px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              style: tableImg,
              src: productDatas.imgsrc
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  style: tableDetail,
                  children: productDatas.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 17
                }, _this2)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 15
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 13
            }, _this2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 11
          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 11
          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: tablePrice,
                    children: productDatas.price
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 19
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: tablePriceLabel,
                    children: "\uC6D0"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 19
                  }, _this2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 17
                }, _this2)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 15
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 13
            }, _this2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 11
          }, _this2)]
        }, index, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 9
        }, _this2);
      }); // const contents = () => {
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
          children: ".shopListTable.jsx-1239214441{border-top:2px solid #1199ff;border-bottom:1px solid #dddddd;border-right:1px solid #dddddd;border-left:1px solid #dddddd;width:100%;margin-top:10px;margin-bottom:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGlqb25cXHJlYWN0LXR1dG9yaWFsXFxZRENvbm5lY3RcXGNvbXBvbmVudHNcXFNob3BMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStJb0IsQUFHMEMsNkJBQ0csZ0NBQ0QsK0JBQ0QsOEJBQ25CLFdBQ0ssZ0JBQ0csbUJBQ04sMEVBQ1MsOEVBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGlqb25cXHJlYWN0LXR1dG9yaWFsXFxZRENvbm5lY3RcXGNvbXBvbmVudHNcXFNob3BMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBQQ0xpc3QgZnJvbSBcIi4uL3BhZ2VzL1BDTGlzdC5qc29uXCI7XHJcblxyXG5jbGFzcyBTaG9wTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IFBDTGlzdCxcclxuICAgICAgdGV4dHM6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gZGLsgqzsmqnsi5wgZGF0YSBzdGF0ZeyXkCDrsLDsl7TsoIDsnqXrtoDrtoRcclxuICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyAgIGZldGNoKHByb2Nlc3MuZW52LkxvY2FsSG9zdCArIFwiL1Nob3BMaXN0XCIsIHtcclxuICAvLyAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9KVxyXG4gIC8vICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gIC8vICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICBkYXRhOiByZXMsXHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgLy8gc3R5bGVcclxuICAgIGNvbnN0IHRhYmxlSW1nID0ge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgd2lkdGg6IFwiMzMwcHhcIixcclxuICAgIH07XHJcbiAgICBjb25zdCB0YWJsZVRkID0ge1xyXG4gICAgICBtaW5IZWlnaHQ6IFwiMjBweFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjNweCAzcHhcIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjZmZmZmZmXCIsXHJcbiAgICAgIGJvcmRlckxlZnQ6IFwiMXB4IHNvbGlkICNkZGRkZGRcIixcclxuICAgICAgbGluZUhlaWdodDogXCIwLjVcIixcclxuICAgICAgdGV4dEFsaWduOiBcIi13ZWJraXQtY2VudGVyXCIsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdGFibGVEZXRhaWwgPSB7XHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgbGluZUhlaWdodDogXCIxLjVcIixcclxuICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxyXG4gICAgICB3aGl0ZVNwYWNlOiBcInByZS13cmFwXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRhYmxlUHJpY2UgPSB7XHJcbiAgICAgIGZvbnRTaXplOiBcIiAyNXB4XCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiIGJvbGRcIixcclxuICAgICAgZGlzcGxheTogXCIgaW5saW5lLWJsb2NrXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRhYmxlUHJpY2VMYWJlbCA9IHtcclxuICAgICAgZm9udFNpemU6IFwiIDE1cHhcIixcclxuICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMjBweCA1cHggMjBweCA1cHhcIixcclxuICAgICAgZGlzcGxheTogXCIgaW5saW5lLWJsb2NrXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vc3R5bGUgZW5kXHJcblxyXG4gICAgLy8gZGLsgqzsmqnsi5wgbWFw7Jy866GcIOu/jOugpOyjvOuKlCDrtoDrtoRcclxuICAgIC8vIGRi7IKs7Jqp7IucIGRhdGEubWFwXHJcblxyXG4gICAgY29uc3QgY29udGVudHMgPSBkYXRhLnBjbGlzdC5tYXAoKHByb2R1Y3REYXRhcywgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8dGQga2V5PXtpbmRleH0gc3R5bGU9e3RhYmxlVGR9IHdpZHRoPVwiMzMwcHhcIj5cclxuICAgICAgICAgIHsvKiA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IFwicHJvZHVjdFwiLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBwcm9kdWN0RGF0YXMuaWQgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID4gKi99XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3RhYmxlSW1nfSBzcmM9e3Byb2R1Y3REYXRhcy5pbWdzcmN9PjwvaW1nPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGFibGVEZXRhaWx9Pntwcm9kdWN0RGF0YXMudGl0bGV9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlfT57cHJvZHVjdERhdGFzLnByaWNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlTGFiZWx9PuybkDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY29uc3QgY29udGVudHMgPSAoKSA9PiB7XHJcbiAgICAvLyAgIHJldHVybiAoXHJcbiAgICAvLyAgICAgPHRkIHN0eWxlPXt0YWJsZVRkfSB3aWR0aD1cIjMzMHB4XCI+XHJcbiAgICAvLyAgICAgICA8TGlua1xyXG4gICAgLy8gICAgICAgICBocmVmPXt7XHJcbiAgICAvLyAgICAgICAgICAgcGF0aG5hbWU6IFwicHJvZHVjdFwiLFxyXG4gICAgLy8gICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBwcm9kdWN0RGF0YXMuaWQgfSxcclxuICAgIC8vICAgICAgICAgfX1cclxuICAgIC8vICAgICAgID5cclxuICAgIC8vICAgICAgICAgPGE+XHJcbiAgICAvLyAgICAgICAgICAgPGltZyBzdHlsZT17dGFibGVJbWd9IHNyYz17cHJvZHVjdERhdGFzLmltZ30+PC9pbWc+XHJcbiAgICAvLyAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgIDwvTGluaz5cclxuICAgIC8vICAgICAgIDx0YWJsZT5cclxuICAgIC8vICAgICAgICAgPHRib2R5PlxyXG4gICAgLy8gICAgICAgICAgIDx0cj5cclxuICAgIC8vICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGFibGVEZXRhaWx9Pntwcm9kdWN0RGF0YXMudGl0bGV9PC90ZD5cclxuICAgIC8vICAgICAgICAgICA8L3RyPlxyXG4gICAgLy8gICAgICAgICA8L3Rib2R5PlxyXG4gICAgLy8gICAgICAgPC90YWJsZT5cclxuICAgIC8vICAgICAgIDxiciAvPlxyXG4gICAgLy8gICAgICAgPHRhYmxlPlxyXG4gICAgLy8gICAgICAgICA8dGJvZHk+XHJcbiAgICAvLyAgICAgICAgICAgPHRyPlxyXG4gICAgLy8gICAgICAgICAgICAgPHRkPlxyXG4gICAgLy8gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlfT57cHJvZHVjdERhdGFzLnByaWNlfTwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlTGFiZWx9PuybkDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgPC90ZD5cclxuICAgIC8vICAgICAgICAgICA8L3RyPlxyXG4gICAgLy8gICAgICAgICA8L3Rib2R5PlxyXG4gICAgLy8gICAgICAgPC90YWJsZT5cclxuICAgIC8vICAgICA8L3RkPlxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuc2hvcExpc3RUYWJsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTE5OWZmO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNob3BMaXN0VGFibGVcIj5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIHsvKiDrsJjrs7VzdGFydCAqL31cclxuICAgICAgICAgICAgICB7Y29udGVudHN9XHJcbiAgICAgICAgICAgICAgey8qIOuwmOuztWVuZCAqL31cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcExpc3Q7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\pijon\\\\react-tutorial\\\\YDConnect\\\\components\\\\ShopList.js */"
        }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: "jsx-1239214441" + " " + "shopListTable",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            className: "jsx-1239214441",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              className: "jsx-1239214441",
              children: contents
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaG9wTGlzdC5qcyJdLCJuYW1lcyI6WyJTaG9wTGlzdCIsInByb3BzIiwic3RhdGUiLCJkYXRhIiwiUENMaXN0IiwidGV4dHMiLCJ0YWJsZUltZyIsInBhZGRpbmdCb3R0b20iLCJ3aWR0aCIsInRhYmxlVGQiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyVG9wIiwiYm9yZGVyTGVmdCIsImxpbmVIZWlnaHQiLCJ0ZXh0QWxpZ24iLCJ0YWJsZURldGFpbCIsImZvbnRTaXplIiwid2hpdGVTcGFjZSIsInRhYmxlUHJpY2UiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsInRhYmxlUHJpY2VMYWJlbCIsImNvbnRlbnRzIiwicGNsaXN0IiwibWFwIiwicHJvZHVjdERhdGFzIiwiaW5kZXgiLCJpbWdzcmMiLCJ0aXRsZSIsInByaWNlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztJQUVNQSxROzs7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFVBQUksRUFBRUMsK0NBREs7QUFFWEMsV0FBSyxFQUFFO0FBRkksS0FBYjtBQUZpQjtBQU1sQixHLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs2QkFDUztBQUFBOztBQUFBLFVBQ0NGLElBREQsR0FDVSxLQUFLRCxLQURmLENBQ0NDLElBREQsRUFHUDs7QUFDQSxVQUFNRyxRQUFRLEdBQUc7QUFDZkMscUJBQWEsRUFBRSxNQURBO0FBRWZDLGFBQUssRUFBRTtBQUZRLE9BQWpCO0FBSUEsVUFBTUMsT0FBTyxHQUFHO0FBQ2RDLGlCQUFT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eC5kMmE3OTY3ODM4MGZkNTAzYzliMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBQQ0xpc3QgZnJvbSBcIi4uL3BhZ2VzL1BDTGlzdC5qc29uXCI7XHJcblxyXG5jbGFzcyBTaG9wTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IFBDTGlzdCxcclxuICAgICAgdGV4dHM6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gZGLsgqzsmqnsi5wgZGF0YSBzdGF0ZeyXkCDrsLDsl7TsoIDsnqXrtoDrtoRcclxuICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyAgIGZldGNoKHByb2Nlc3MuZW52LkxvY2FsSG9zdCArIFwiL1Nob3BMaXN0XCIsIHtcclxuICAvLyAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICB9KVxyXG4gIC8vICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gIC8vICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICBkYXRhOiByZXMsXHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgLy8gc3R5bGVcclxuICAgIGNvbnN0IHRhYmxlSW1nID0ge1xyXG4gICAgICBwYWRkaW5nQm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgd2lkdGg6IFwiMzMwcHhcIixcclxuICAgIH07XHJcbiAgICBjb25zdCB0YWJsZVRkID0ge1xyXG4gICAgICBtaW5IZWlnaHQ6IFwiMjBweFwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjNweCAzcHhcIixcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNmZmZcIixcclxuICAgICAgYm9yZGVyVG9wOiBcIjFweCBzb2xpZCAjZmZmZmZmXCIsXHJcbiAgICAgIGJvcmRlckxlZnQ6IFwiMXB4IHNvbGlkICNkZGRkZGRcIixcclxuICAgICAgbGluZUhlaWdodDogXCIwLjVcIixcclxuICAgICAgdGV4dEFsaWduOiBcIi13ZWJraXQtY2VudGVyXCIsXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdGFibGVEZXRhaWwgPSB7XHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgbGluZUhlaWdodDogXCIxLjVcIixcclxuICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxyXG4gICAgICB3aGl0ZVNwYWNlOiBcInByZS13cmFwXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRhYmxlUHJpY2UgPSB7XHJcbiAgICAgIGZvbnRTaXplOiBcIiAyNXB4XCIsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IFwiIGJvbGRcIixcclxuICAgICAgZGlzcGxheTogXCIgaW5saW5lLWJsb2NrXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRhYmxlUHJpY2VMYWJlbCA9IHtcclxuICAgICAgZm9udFNpemU6IFwiIDE1cHhcIixcclxuICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiMjBweCA1cHggMjBweCA1cHhcIixcclxuICAgICAgZGlzcGxheTogXCIgaW5saW5lLWJsb2NrXCIsXHJcbiAgICB9O1xyXG5cclxuICAgIC8vc3R5bGUgZW5kXHJcblxyXG4gICAgLy8gZGLsgqzsmqnsi5wgbWFw7Jy866GcIOu/jOugpOyjvOuKlCDrtoDrtoRcclxuICAgIC8vIGRi7IKs7Jqp7IucIGRhdGEubWFwXHJcblxyXG4gICAgY29uc3QgY29udGVudHMgPSBkYXRhLnBjbGlzdC5tYXAoKHByb2R1Y3REYXRhcywgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8dGQga2V5PXtpbmRleH0gc3R5bGU9e3RhYmxlVGR9IHdpZHRoPVwiMzMwcHhcIj5cclxuICAgICAgICAgIHsvKiA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IFwicHJvZHVjdFwiLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBwcm9kdWN0RGF0YXMuaWQgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID4gKi99XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3RhYmxlSW1nfSBzcmM9e3Byb2R1Y3REYXRhcy5pbWdzcmN9PjwvaW1nPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICB7LyogPC9MaW5rPiAqL31cclxuICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGFibGVEZXRhaWx9Pntwcm9kdWN0RGF0YXMudGl0bGV9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlfT57cHJvZHVjdERhdGFzLnByaWNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlTGFiZWx9PuybkDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gY29uc3QgY29udGVudHMgPSAoKSA9PiB7XHJcbiAgICAvLyAgIHJldHVybiAoXHJcbiAgICAvLyAgICAgPHRkIHN0eWxlPXt0YWJsZVRkfSB3aWR0aD1cIjMzMHB4XCI+XHJcbiAgICAvLyAgICAgICA8TGlua1xyXG4gICAgLy8gICAgICAgICBocmVmPXt7XHJcbiAgICAvLyAgICAgICAgICAgcGF0aG5hbWU6IFwicHJvZHVjdFwiLFxyXG4gICAgLy8gICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBwcm9kdWN0RGF0YXMuaWQgfSxcclxuICAgIC8vICAgICAgICAgfX1cclxuICAgIC8vICAgICAgID5cclxuICAgIC8vICAgICAgICAgPGE+XHJcbiAgICAvLyAgICAgICAgICAgPGltZyBzdHlsZT17dGFibGVJbWd9IHNyYz17cHJvZHVjdERhdGFzLmltZ30+PC9pbWc+XHJcbiAgICAvLyAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgIDwvTGluaz5cclxuICAgIC8vICAgICAgIDx0YWJsZT5cclxuICAgIC8vICAgICAgICAgPHRib2R5PlxyXG4gICAgLy8gICAgICAgICAgIDx0cj5cclxuICAgIC8vICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGFibGVEZXRhaWx9Pntwcm9kdWN0RGF0YXMudGl0bGV9PC90ZD5cclxuICAgIC8vICAgICAgICAgICA8L3RyPlxyXG4gICAgLy8gICAgICAgICA8L3Rib2R5PlxyXG4gICAgLy8gICAgICAgPC90YWJsZT5cclxuICAgIC8vICAgICAgIDxiciAvPlxyXG4gICAgLy8gICAgICAgPHRhYmxlPlxyXG4gICAgLy8gICAgICAgICA8dGJvZHk+XHJcbiAgICAvLyAgICAgICAgICAgPHRyPlxyXG4gICAgLy8gICAgICAgICAgICAgPHRkPlxyXG4gICAgLy8gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlfT57cHJvZHVjdERhdGFzLnByaWNlfTwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlTGFiZWx9PuybkDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgPC90ZD5cclxuICAgIC8vICAgICAgICAgICA8L3RyPlxyXG4gICAgLy8gICAgICAgICA8L3Rib2R5PlxyXG4gICAgLy8gICAgICAgPC90YWJsZT5cclxuICAgIC8vICAgICA8L3RkPlxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuc2hvcExpc3RUYWJsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTE5OWZmO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNob3BMaXN0VGFibGVcIj5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIHsvKiDrsJjrs7VzdGFydCAqL31cclxuICAgICAgICAgICAgICB7Y29udGVudHN9XHJcbiAgICAgICAgICAgICAgey8qIOuwmOuztWVuZCAqL31cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcExpc3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=