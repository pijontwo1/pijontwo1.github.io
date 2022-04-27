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
      data: [],
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

      var contents = function contents() {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
          style: tableTd,
          width: "330px",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
            href: {
              pathname: "product",
              query: {
                id: productDatas.id
              }
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                style: tableImg,
                src: productDatas.img
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 15
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 13
            }, _this2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 11
          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  style: tableDetail,
                  children: productDatas.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 17
                }, _this2)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 15
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 13
            }, _this2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 11
          }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
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
                    lineNumber: 129,
                    columnNumber: 19
                  }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: tablePriceLabel,
                    children: "\uC6D0"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 19
                  }, _this2)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 17
                }, _this2)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 15
              }, _this2)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 13
            }, _this2)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 11
          }, _this2)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }, _this2);
      };

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
          id: "1239214441",
          children: ".shopListTable.jsx-1239214441{border-top:2px solid #1199ff;border-bottom:1px solid #dddddd;border-right:1px solid #dddddd;border-left:1px solid #dddddd;width:100%;margin-top:10px;margin-bottom:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGlqb25cXHJlYWN0LXR1dG9yaWFsXFxZRENvbm5lY3RcXGNvbXBvbmVudHNcXFNob3BMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZJb0IsQUFHMEMsNkJBQ0csZ0NBQ0QsK0JBQ0QsOEJBQ25CLFdBQ0ssZ0JBQ0csbUJBQ04sMEVBQ1MsOEVBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGlqb25cXHJlYWN0LXR1dG9yaWFsXFxZRENvbm5lY3RcXGNvbXBvbmVudHNcXFNob3BMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jbGFzcyBTaG9wTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IFtdLFxyXG4gICAgICB0ZXh0czogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBkYuyCrOyaqeyLnCBkYXRhIHN0YXRl7JeQIOuwsOyXtOyggOyepeu2gOu2hFxyXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIC8vICAgZmV0Y2gocHJvY2Vzcy5lbnYuTG9jYWxIb3N0ICsgXCIvU2hvcExpc3RcIiwge1xyXG4gIC8vICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAvLyAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH0pXHJcbiAgLy8gICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gICAgIC50aGVuKChyZXMpID0+IHtcclxuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgICAgIGRhdGE6IHJlcyxcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAvLyBzdHlsZVxyXG4gICAgY29uc3QgdGFibGVJbWcgPSB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206IFwiMjBweFwiLFxyXG4gICAgICB3aWR0aDogXCIzMzBweFwiLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHRhYmxlVGQgPSB7XHJcbiAgICAgIG1pbkhlaWdodDogXCIyMHB4XCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiM3B4IDNweFwiLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkICNmZmZmZmZcIixcclxuICAgICAgYm9yZGVyTGVmdDogXCIxcHggc29saWQgI2RkZGRkZFwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjAuNVwiLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiLXdlYmtpdC1jZW50ZXJcIixcclxuICAgIH07XHJcbiAgICBjb25zdCB0YWJsZURldGFpbCA9IHtcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxyXG4gICAgICBmb250U2l6ZTogXCIxNXB4XCIsXHJcbiAgICAgIHdoaXRlU3BhY2U6IFwicHJlLXdyYXBcIixcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdGFibGVQcmljZSA9IHtcclxuICAgICAgZm9udFNpemU6IFwiIDI1cHhcIixcclxuICAgICAgZm9udFdlaWdodDogXCIgYm9sZFwiLFxyXG4gICAgICBkaXNwbGF5OiBcIiBpbmxpbmUtYmxvY2tcIixcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdGFibGVQcmljZUxhYmVsID0ge1xyXG4gICAgICBmb250U2l6ZTogXCIgMTVweFwiLFxyXG4gICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgcGFkZGluZzogXCIyMHB4IDVweCAyMHB4IDVweFwiLFxyXG4gICAgICBkaXNwbGF5OiBcIiBpbmxpbmUtYmxvY2tcIixcclxuICAgIH07XHJcblxyXG4gICAgLy9zdHlsZSBlbmRcclxuXHJcbiAgICAvLyBkYuyCrOyaqeyLnCBtYXDsnLzroZwg67+M66Ck7KO864qUIOu2gOu2hFxyXG5cclxuICAgIC8vIGNvbnN0IGNvbnRlbnRzID0gZGF0YS5tYXAoKHByb2R1Y3REYXRhcywgaW5kZXgpID0+IHtcclxuICAgIC8vICAgcmV0dXJuIChcclxuICAgIC8vICAgICA8dGQga2V5PXtpbmRleH0gc3R5bGU9e3RhYmxlVGR9IHdpZHRoPVwiMzMwcHhcIj5cclxuICAgIC8vICAgICAgIDxMaW5rXHJcbiAgICAvLyAgICAgICAgIGhyZWY9e3tcclxuICAgIC8vICAgICAgICAgICBwYXRobmFtZTogXCJwcm9kdWN0XCIsXHJcbiAgICAvLyAgICAgICAgICAgcXVlcnk6IHsgaWQ6IHByb2R1Y3REYXRhcy5pZCB9LFxyXG4gICAgLy8gICAgICAgICB9fVxyXG4gICAgLy8gICAgICAgPlxyXG4gICAgLy8gICAgICAgICA8YT5cclxuICAgIC8vICAgICAgICAgICA8aW1nIHN0eWxlPXt0YWJsZUltZ30gc3JjPXtwcm9kdWN0RGF0YXMuaW1nc3JjMX0+PC9pbWc+XHJcbiAgICAvLyAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgIDwvTGluaz5cclxuICAgIC8vICAgICAgIDx0YWJsZT5cclxuICAgIC8vICAgICAgICAgPHRib2R5PlxyXG4gICAgLy8gICAgICAgICAgIDx0cj5cclxuICAgIC8vICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGFibGVEZXRhaWx9Pntwcm9kdWN0RGF0YXMudGl0bGV9PC90ZD5cclxuICAgIC8vICAgICAgICAgICA8L3RyPlxyXG4gICAgLy8gICAgICAgICA8L3Rib2R5PlxyXG4gICAgLy8gICAgICAgPC90YWJsZT5cclxuICAgIC8vICAgICAgIDxiciAvPlxyXG4gICAgLy8gICAgICAgPHRhYmxlPlxyXG4gICAgLy8gICAgICAgICA8dGJvZHk+XHJcbiAgICAvLyAgICAgICAgICAgPHRyPlxyXG4gICAgLy8gICAgICAgICAgICAgPHRkPlxyXG4gICAgLy8gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlfT57cHJvZHVjdERhdGFzLnByaWNlfTwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlTGFiZWx9PuybkDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgPC90ZD5cclxuICAgIC8vICAgICAgICAgICA8L3RyPlxyXG4gICAgLy8gICAgICAgICA8L3Rib2R5PlxyXG4gICAgLy8gICAgICAgPC90YWJsZT5cclxuICAgIC8vICAgICA8L3RkPlxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgY29uc3QgY29udGVudHMgPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRkIHN0eWxlPXt0YWJsZVRkfSB3aWR0aD1cIjMzMHB4XCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IFwicHJvZHVjdFwiLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBwcm9kdWN0RGF0YXMuaWQgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGltZyBzdHlsZT17dGFibGVJbWd9IHNyYz17cHJvZHVjdERhdGFzLmltZ30+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGFibGVEZXRhaWx9Pntwcm9kdWN0RGF0YXMudGl0bGV9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlfT57cHJvZHVjdERhdGFzLnByaWNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlTGFiZWx9PuybkDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuc2hvcExpc3RUYWJsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTE5OWZmO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNob3BMaXN0VGFibGVcIj5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIHsvKiDrsJjrs7VzdGFydCAqL31cclxuICAgICAgICAgICAgICB7Lyoge2NvbnRlbnRzfSAqL31cclxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RhYmxlVGR9IHdpZHRoPVwiMzMwcHhcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCJwcm9kdWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3RhYmxlSW1nfSBzcmM9XCIuL2ltZ3MvcGMxLmpwZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RhYmxlRGV0YWlsfT5wYzEg6rKs67O47IOY7ZSMPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlfT4xMzQxNDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlTGFiZWx9PuybkDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIHsvKiDrsJjrs7VlbmQgKi99XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3BMaXN0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\pijon\\\\react-tutorial\\\\YDConnect\\\\components\\\\ShopList.js */"
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
                      lineNumber: 167,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                  className: "jsx-1239214441",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                    className: "jsx-1239214441",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                      className: "jsx-1239214441",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                        style: tableDetail,
                        className: "jsx-1239214441",
                        children: "pc1 \uACAC\uBCF8\uC0D8\uD50C"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 173,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 172,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 171,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {
                  className: "jsx-1239214441"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
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
                          lineNumber: 182,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          style: tablePriceLabel,
                          className: "jsx-1239214441",
                          children: "\uC6D0"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 183,
                          columnNumber: 25
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 181,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 180,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 178,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 160,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaG9wTGlzdC5qcyJdLCJuYW1lcyI6WyJTaG9wTGlzdCIsInByb3BzIiwic3RhdGUiLCJkYXRhIiwidGV4dHMiLCJ0YWJsZUltZyIsInBhZGRpbmdCb3R0b20iLCJ3aWR0aCIsInRhYmxlVGQiLCJtaW5IZWlnaHQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyVG9wIiwiYm9yZGVyTGVmdCIsImxpbmVIZWlnaHQiLCJ0ZXh0QWxpZ24iLCJ0YWJsZURldGFpbCIsImZvbnRTaXplIiwid2hpdGVTcGFjZSIsInRhYmxlUHJpY2UiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsInRhYmxlUHJpY2VMYWJlbCIsImNvbnRlbnRzIiwicGF0aG5hbWUiLCJxdWVyeSIsImlkIiwicHJvZHVjdERhdGFzIiwiaW1nIiwidGl0bGUiLCJwcmljZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxROzs7OztBQUNKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFVBQUksRUFBRSxFQURLO0FBRVhDLFdBQUssRUFBRTtBQUZJLEtBQWI7QUFGaUI7QUFNbEIsRyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7NkJBQ1M7QUFBQTs7QUFBQSxVQUNDRCxJQURELEdBQ1UsS0FBS0QsS0FEZixDQUNDQyxJQURELEVBR1A7O0FBQ0EsVUFBTUUsUUFBUSxHQUFHO0FBQ2ZDLHFCQUFhLEVBQUUsTUFEQTtBQUVmQyxhQUFLLEVBQUU7QUFGUSxPQUFqQjtBQUlBLFVBQU1DLE9BQU8sR0FBRztBQUNkQyxpQkFBUyxFQUFFLE1BREc7QUFFZEMsZUFB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MDBiOThlNDAyNDc5ZmNiMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jbGFzcyBTaG9wTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGE6IFtdLFxyXG4gICAgICB0ZXh0czogXCJcIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBkYuyCrOyaqeyLnCBkYXRhIHN0YXRl7JeQIOuwsOyXtOyggOyepeu2gOu2hFxyXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIC8vICAgZmV0Y2gocHJvY2Vzcy5lbnYuTG9jYWxIb3N0ICsgXCIvU2hvcExpc3RcIiwge1xyXG4gIC8vICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAvLyAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH0pXHJcbiAgLy8gICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gICAgIC50aGVuKChyZXMpID0+IHtcclxuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgICAgIGRhdGE6IHJlcyxcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAvLyBzdHlsZVxyXG4gICAgY29uc3QgdGFibGVJbWcgPSB7XHJcbiAgICAgIHBhZGRpbmdCb3R0b206IFwiMjBweFwiLFxyXG4gICAgICB3aWR0aDogXCIzMzBweFwiLFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHRhYmxlVGQgPSB7XHJcbiAgICAgIG1pbkhlaWdodDogXCIyMHB4XCIsXHJcbiAgICAgIHBhZGRpbmc6IFwiM3B4IDNweFwiLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkICNmZmZmZmZcIixcclxuICAgICAgYm9yZGVyTGVmdDogXCIxcHggc29saWQgI2RkZGRkZFwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjAuNVwiLFxyXG4gICAgICB0ZXh0QWxpZ246IFwiLXdlYmtpdC1jZW50ZXJcIixcclxuICAgIH07XHJcbiAgICBjb25zdCB0YWJsZURldGFpbCA9IHtcclxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxyXG4gICAgICBmb250U2l6ZTogXCIxNXB4XCIsXHJcbiAgICAgIHdoaXRlU3BhY2U6IFwicHJlLXdyYXBcIixcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdGFibGVQcmljZSA9IHtcclxuICAgICAgZm9udFNpemU6IFwiIDI1cHhcIixcclxuICAgICAgZm9udFdlaWdodDogXCIgYm9sZFwiLFxyXG4gICAgICBkaXNwbGF5OiBcIiBpbmxpbmUtYmxvY2tcIixcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgdGFibGVQcmljZUxhYmVsID0ge1xyXG4gICAgICBmb250U2l6ZTogXCIgMTVweFwiLFxyXG4gICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgcGFkZGluZzogXCIyMHB4IDVweCAyMHB4IDVweFwiLFxyXG4gICAgICBkaXNwbGF5OiBcIiBpbmxpbmUtYmxvY2tcIixcclxuICAgIH07XHJcblxyXG4gICAgLy9zdHlsZSBlbmRcclxuXHJcbiAgICAvLyBkYuyCrOyaqeyLnCBtYXDsnLzroZwg67+M66Ck7KO864qUIOu2gOu2hFxyXG5cclxuICAgIC8vIGNvbnN0IGNvbnRlbnRzID0gZGF0YS5tYXAoKHByb2R1Y3REYXRhcywgaW5kZXgpID0+IHtcclxuICAgIC8vICAgcmV0dXJuIChcclxuICAgIC8vICAgICA8dGQga2V5PXtpbmRleH0gc3R5bGU9e3RhYmxlVGR9IHdpZHRoPVwiMzMwcHhcIj5cclxuICAgIC8vICAgICAgIDxMaW5rXHJcbiAgICAvLyAgICAgICAgIGhyZWY9e3tcclxuICAgIC8vICAgICAgICAgICBwYXRobmFtZTogXCJwcm9kdWN0XCIsXHJcbiAgICAvLyAgICAgICAgICAgcXVlcnk6IHsgaWQ6IHByb2R1Y3REYXRhcy5pZCB9LFxyXG4gICAgLy8gICAgICAgICB9fVxyXG4gICAgLy8gICAgICAgPlxyXG4gICAgLy8gICAgICAgICA8YT5cclxuICAgIC8vICAgICAgICAgICA8aW1nIHN0eWxlPXt0YWJsZUltZ30gc3JjPXtwcm9kdWN0RGF0YXMuaW1nc3JjMX0+PC9pbWc+XHJcbiAgICAvLyAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgIDwvTGluaz5cclxuICAgIC8vICAgICAgIDx0YWJsZT5cclxuICAgIC8vICAgICAgICAgPHRib2R5PlxyXG4gICAgLy8gICAgICAgICAgIDx0cj5cclxuICAgIC8vICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGFibGVEZXRhaWx9Pntwcm9kdWN0RGF0YXMudGl0bGV9PC90ZD5cclxuICAgIC8vICAgICAgICAgICA8L3RyPlxyXG4gICAgLy8gICAgICAgICA8L3Rib2R5PlxyXG4gICAgLy8gICAgICAgPC90YWJsZT5cclxuICAgIC8vICAgICAgIDxiciAvPlxyXG4gICAgLy8gICAgICAgPHRhYmxlPlxyXG4gICAgLy8gICAgICAgICA8dGJvZHk+XHJcbiAgICAvLyAgICAgICAgICAgPHRyPlxyXG4gICAgLy8gICAgICAgICAgICAgPHRkPlxyXG4gICAgLy8gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlfT57cHJvZHVjdERhdGFzLnByaWNlfTwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlTGFiZWx9PuybkDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgPC90ZD5cclxuICAgIC8vICAgICAgICAgICA8L3RyPlxyXG4gICAgLy8gICAgICAgICA8L3Rib2R5PlxyXG4gICAgLy8gICAgICAgPC90YWJsZT5cclxuICAgIC8vICAgICA8L3RkPlxyXG4gICAgLy8gICApO1xyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgY29uc3QgY29udGVudHMgPSAoKSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRkIHN0eWxlPXt0YWJsZVRkfSB3aWR0aD1cIjMzMHB4XCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXt7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6IFwicHJvZHVjdFwiLFxyXG4gICAgICAgICAgICAgIHF1ZXJ5OiB7IGlkOiBwcm9kdWN0RGF0YXMuaWQgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPGltZyBzdHlsZT17dGFibGVJbWd9IHNyYz17cHJvZHVjdERhdGFzLmltZ30+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17dGFibGVEZXRhaWx9Pntwcm9kdWN0RGF0YXMudGl0bGV9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlfT57cHJvZHVjdERhdGFzLnByaWNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlTGFiZWx9PuybkDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuc2hvcExpc3RUYWJsZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTE5OWZmO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNob3BMaXN0VGFibGVcIj5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIHsvKiDrsJjrs7VzdGFydCAqL31cclxuICAgICAgICAgICAgICB7Lyoge2NvbnRlbnRzfSAqL31cclxuICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RhYmxlVGR9IHdpZHRoPVwiMzMwcHhcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCJwcm9kdWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3RhYmxlSW1nfSBzcmM9XCIuL2ltZ3MvcGMxLmpwZ1wiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3RhYmxlRGV0YWlsfT5wYzEg6rKs67O47IOY7ZSMPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPHRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlfT4xMzQxNDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0YWJsZVByaWNlTGFiZWx9PuybkDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgIHsvKiDrsJjrs7VlbmQgKi99XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3BMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9