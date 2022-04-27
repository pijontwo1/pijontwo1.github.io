webpackHotUpdate_N_E("pages/product",{

/***/ "./node_modules/decode-uri-component/index.js":
false,

/***/ "./node_modules/query-string/index.js":
false,

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
false,

/***/ "./pages/product.js":
/*!**************************!*\
  !*** ./pages/product.js ***!
  \**************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _PCList_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PCList.json */ "./pages/PCList.json");
var _PCList_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./PCList.json */ "./pages/PCList.json", 1);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "C:\\Users\\pijon\\react-tutorial\\YDConnect\\pages\\product.js";


function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var ShopDetailTop = styled_components__WEBPACK_IMPORTED_MODULE_11__["default"].th.attrs({
  colSpan: 2
}).withConfig({
  displayName: "product__ShopDetailTop",
  componentId: "sc-11zivy0-0"
})(["border-bottom:1px solid #ccc;font-weight:bold;padding:15px 0;background-color:#f5f5f5;width:930px;"]);
_c = ShopDetailTop;

var Product = /*#__PURE__*/function (_React$Component) {
  Object(C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Product, _React$Component);

  var _super = _createSuper(Product);

  function Product(props) {
    var _this;

    Object(C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Product);

    _this = _super.call(this, props);
    _this.state = {
      isLogin: false,
      email: null,
      itemId: null,
      data: _PCList_json__WEBPACK_IMPORTED_MODULE_12__
    };
    return _this;
  } // componentDidMount() {
  //   const { query } = this.props.router;
  //   window.sessionStorage.getItem("email") != null &&
  //     this.setState({
  //       isLogin: true,
  //       email: window.sessionStorage.getItem("email"),
  //       itemId: query.id,
  //     });
  //   fetch(process.env.LocalHost + "/product", {
  //     method: "post",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: query.id,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       this.setState({
  //         data: res,
  //       });
  //     });
  // }


  Object(C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Product, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var data = this.state.data;

      var checkCartFunction = function checkCartFunction() {// fetch(process.env.LocalHost + "/productCheckExist", {
        //   method: "post",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: this.state.email,
        //     itemId: this.state.itemId,
        //   }),
        // })
        //   .then((res) => res.json())
        //   .then((res) => {
        //     if (res.length != 0) {
        //       alert("장바구니에 이미 추가된 상품입니다");
        //       Router.push("/cart");
        //     } else {
        //       addCartFunction();
        //     }
        //   });
      };

      var addCartFunction = function addCartFunction() {
        window.confirm("장바구니에 담으시겠습니까?") && alert("완료"); // fetch(process.env.LocalHost + "/productAddCart", {
        //   method: "post",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: this.state.email,
        //     itemId: this.state.itemId,
        //   }),
        // })
        //   .then((res) => res.json())
        //   .then((res) => {
        //     alert("장바구니에 추가되었습니다.");
        //     Router.push("/cart");
        //   });
      };

      var addCart = function addCart() {
        _this2.state.isLogin == true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: checkCartFunction()
        }, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [alert("로그인 후 이용가능합니다"), next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/signin")]
        }, void 0, true);
      };

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
            id: "553851713",
            children: ".shopDetailBody.jsx-553851713{margin:50px auto;width:1020px;position:relative;}.shopDetailTable.jsx-553851713{border-top:2px solid #1199ff;border-bottom:1px solid #dddddd;border-right:1px solid #dddddd;border-left:1px solid #dddddd;width:100%;margin-top:10px;margin-bottom:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.shopDetailTbody.jsx-553851713{padding:15px;}.shopDetailTr.jsx-553851713{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:1000px;margin:0 auto;}.shopDetailImg.jsx-553851713{width:320px;padding:15px;display:inline-block;}.shopDetailSpan.jsx-553851713{display:block;line-height:20px;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;}.tableCate.jsx-553851713{padding:0 30px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;border-bottom:1px solid #ccc;width:150px;height:30px;font-size:15px;font-weight:bold;}.tableDetail.jsx-553851713{text-align:left;padding:0 30px;height:30px;width:450px;border-bottom:1px solid #ccc;font-size:14px;font-weight:500;}.btnKeep.jsx-553851713{width:200px;height:40px;background-color:#ffffff;color:#346aff;font-size:18px;font-weight:bold;border:1px solid #346aff;}.btnBuy.jsx-553851713{width:200px;height:40px;background-color:#346aff;color:#ffffff;font-size:18px;font-weight:bold;border:1px solid #346aff;margin-left:20px;}.sellPrice.jsx-553851713,.sellButton.jsx-553851713{-webkit-flex:1;-ms-flex:1;flex:1;font-size:20px;font-weight:bold;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGlqb25cXHJlYWN0LXR1dG9yaWFsXFxZRENvbm5lY3RcXHBhZ2VzXFxwcm9kdWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ic0IsQUFHZ0MsQUFLWSxBQVdoQixBQUdBLEFBTUQsQUFLRSxBQUtDLEFBVUMsQUFTSixBQVNBLEFBV0wsWUFoRE0sQUE2QkQsQUFTQSxDQS9DZCxDQWNtQixDQUtXLENBVWIsQ0E3Q0YsT0F1RFksQUFTQSxDQXRDSixJQXJCVyxDQUpkLENBOEJFLEFBZVIsRUE0QkcsVUF0Q2MsQUFXakIsR0FwQmQsRUF6QkEsQUF5RW1CLENBbkJILEFBU0EsTUFqQmUsTUExQ0UsRUFtRGhCLEFBU0EsRUFVRixPQXZDZ0IsRUFsQk4sSUF1Q04sQUFTQSxNQWxCRixRQTFDZSxHQW9ETCxBQVNBLElBbEJULEVBWkosWUFDQSxFQVlkLEtBU0EsQUFTbUIsRUE3RE4sR0FnQ0ksR0FSakIsS0F2QmtCLElBNkRsQixFQU95QixDQXBDTixTQS9CRSxRQWdDckIsV0EvQmUsS0FTQSxhQUNDLGNBQ2hCLHNDQXdEQSxJQWxFd0IsOEVBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGlqb25cXHJlYWN0LXR1dG9yaWFsXFxZRENvbm5lY3RcXHBhZ2VzXFxwcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUENMaXN0IGZyb20gXCIuL1BDTGlzdC5qc29uXCJcclxuaW1wb3J0ICogYXMgcXMgZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XHJcblxyXG5jb25zdCBTaG9wRGV0YWlsVG9wID0gc3R5bGVkLnRoLmF0dHJzKHtcclxuICBjb2xTcGFuOiAyLFxyXG59KWBcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB3aWR0aDogOTMwcHg7XHJcbmA7XHJcblxyXG5jbGFzcyBQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNMb2dpbjogZmFsc2UsXHJcbiAgICAgIGVtYWlsOiBudWxsLFxyXG4gICAgICBpdGVtSWQ6IG51bGwsXHJcbiAgICAgIGRhdGE6IFBDTGlzdCxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMucHJvcHMucm91dGVyO1xyXG4gIC8vICAgd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKSAhPSBudWxsICYmXHJcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gIC8vICAgICAgIGlzTG9naW46IHRydWUsXHJcbiAgLy8gICAgICAgZW1haWw6IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIiksXHJcbiAgLy8gICAgICAgaXRlbUlkOiBxdWVyeS5pZCxcclxuICAvLyAgICAgfSk7XHJcblxyXG4gIC8vICAgZmV0Y2gocHJvY2Vzcy5lbnYuTG9jYWxIb3N0ICsgXCIvcHJvZHVjdFwiLCB7XHJcbiAgLy8gICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgLy8gICAgIGhlYWRlcnM6IHtcclxuICAvLyAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAvLyAgICAgfSxcclxuICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gIC8vICAgICAgIGlkOiBxdWVyeS5pZCxcclxuICAvLyAgICAgfSksXHJcbiAgLy8gICB9KVxyXG4gIC8vICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gIC8vICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICBkYXRhOiByZXMsXHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICAgIH0pO1xyXG4gIC8vIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBjaGVja0NhcnRGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgXHJcbiAgICAgIC8vIGZldGNoKHByb2Nlc3MuZW52LkxvY2FsSG9zdCArIFwiL3Byb2R1Y3RDaGVja0V4aXN0XCIsIHtcclxuICAgICAgLy8gICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAvLyAgIGhlYWRlcnM6IHtcclxuICAgICAgLy8gICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAvLyAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXHJcbiAgICAgIC8vICAgICBpdGVtSWQ6IHRoaXMuc3RhdGUuaXRlbUlkLFxyXG4gICAgICAvLyAgIH0pLFxyXG4gICAgICAvLyB9KVxyXG4gICAgICAvLyAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAvLyAgICAgaWYgKHJlcy5sZW5ndGggIT0gMCkge1xyXG4gICAgICAvLyAgICAgICBhbGVydChcIuyepeuwlOq1rOuLiOyXkCDsnbTrr7gg7LaU6rCA65CcIOyDge2SiOyeheuLiOuLpFwiKTtcclxuICAgICAgLy8gICAgICAgUm91dGVyLnB1c2goXCIvY2FydFwiKTtcclxuICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vICAgICAgIGFkZENhcnRGdW5jdGlvbigpO1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRDYXJ0RnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5jb25maXJtKFwi7J6l67CU6rWs64uI7JeQIOuLtOycvOyLnOqyoOyKteuLiOq5jD9cIikgJiZcclxuICAgICAgYWxlcnQoXCLsmYTro4xcIilcclxuICAgICAgICAvLyBmZXRjaChwcm9jZXNzLmVudi5Mb2NhbEhvc3QgKyBcIi9wcm9kdWN0QWRkQ2FydFwiLCB7XHJcbiAgICAgICAgLy8gICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIC8vICAgaGVhZGVyczoge1xyXG4gICAgICAgIC8vICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgLy8gICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgLy8gICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxyXG4gICAgICAgIC8vICAgICBpdGVtSWQ6IHRoaXMuc3RhdGUuaXRlbUlkLFxyXG4gICAgICAgIC8vICAgfSksXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLy8gICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGFsZXJ0KFwi7J6l67CU6rWs64uI7JeQIOy2lOqwgOuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgICAgICAgLy8gICAgIFJvdXRlci5wdXNoKFwiL2NhcnRcIik7XHJcbiAgICAgICAgLy8gICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkQ2FydCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5zdGF0ZS5pc0xvZ2luID09IHRydWUgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtjaGVja0NhcnRGdW5jdGlvbigpfVxyXG4gICAgICAgICAgey8qIHt3aW5kb3cuY29uZmlybShcIuyepeuwlOq1rOuLiOyXkCDri7TsnLzsi5zqsqDsirXri4jquYw/XCIpICYmIGNoZWNrQ2FydEZ1bmN0aW9uKCl9ICovfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7YWxlcnQoXCLroZzqt7jsnbgg7ZuEIOydtOyaqeqwgOuKpe2VqeuLiOuLpFwiKX1cclxuICAgICAgICAgIHtSb3V0ZXIucHVzaChcIi9zaWduaW5cIil9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuc2hvcERldGFpbEJvZHkge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNTBweCBhdXRvO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDIwcHg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaG9wRGV0YWlsVGFibGUge1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTE5OWZmO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNob3BEZXRhaWxUYm9keSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2hvcERldGFpbFRyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNob3BEZXRhaWxJbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2hvcERldGFpbFNwYW4ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50YWJsZUNhdGUge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50YWJsZURldGFpbCB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuS2VlcCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMzQ2YWZmO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzQ2YWZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG5CdXkge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0NmFmZjtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM0NmFmZjtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VsbFByaWNlLFxyXG4gICAgICAgICAgICAuc2VsbEJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wRGV0YWlsQm9keVwiPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2hvcERldGFpbFRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cInNob3BEZXRhaWxUYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNob3BEZXRhaWxUclwiPlxyXG4gICAgICAgICAgICAgICAgICB7Lyoge2NvbnNvbGUubG9nKGRhdGEucGNsaXN0WzJdKX0gKi99XHJcbiAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhuZXcgVVJMU2VhcmNoUGFyYW1zKHRoaXMucHJvcHMubG9jYXRpb24uc2VhcmNoKSl9XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG9wRGV0YWlsSW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIHNyYz17ZGF0YS5wY2xpc3RbcXVlcnldLmltZ3NyYzF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG9wRGV0YWlsSW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVswXSAmJiBkYXRhWzBdLmltZ3NyYzJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG9wRGV0YWlsSW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVswXSAmJiBkYXRhWzBdLmltZ3NyYzN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgey8qIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG9wRGV0YWlsSW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVswXSAmJiBkYXRhWzBdLmltZ3NyYzF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG9wRGV0YWlsSW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVswXSAmJiBkYXRhWzBdLmltZ3NyYzJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG9wRGV0YWlsSW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZGF0YVswXSAmJiBkYXRhWzBdLmltZ3NyYzN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC90ZD4gKi99XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNob3BEZXRhaWxUclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNob3BEZXRhaWxUb3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhWzBdICYmIHRoaXMuc3RhdGUuZGF0YVswXS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Nob3BEZXRhaWxUb3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVDYXRlXCI+Q1BVPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVEZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLmNwdX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlQ2F0ZVwiPuy/qOufrDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlRGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhWzBdICYmIHRoaXMuc3RhdGUuZGF0YVswXS5jb29sZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZUNhdGVcIj7rqZTrqqjrpqw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZURldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YVswXSAmJiB0aGlzLnN0YXRlLmRhdGFbMF0ubWVtb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVDYXRlXCI+66mU7J2467O065OcPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVEZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLm1haW5ib2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlQ2F0ZVwiPuq3uOuemO2Uvey5tOuTnDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlRGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhWzBdICYmIHRoaXMuc3RhdGUuZGF0YVswXS52Z2F9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZUNhdGVcIj7tlZjrk5zrlJTsiqTtgaw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZURldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YVswXSAmJiB0aGlzLnN0YXRlLmRhdGFbMF0uaGRkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVDYXRlXCI+U1NEPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVEZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLnNzZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlQ2F0ZVwiPk9ERDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlRGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhWzBdICYmIHRoaXMuc3RhdGUuZGF0YVswXS5vZGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZUNhdGVcIj7tjIzsm4w8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZURldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YVswXSAmJiB0aGlzLnN0YXRlLmRhdGFbMF0ucG93ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZUNhdGVcIj7smrTsmIHssrTsoJw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZURldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YVswXSAmJiB0aGlzLnN0YXRlLmRhdGFbMF0ub3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwic2hvcERldGFpbFRib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwic2hvcERldGFpbFRyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzZWxsUHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICDtjJDrp6TqsIAgOiB7dGhpcy5zdGF0ZS5kYXRhWzBdICYmIHRoaXMuc3RhdGUuZGF0YVswXS5wcmljZX0g7JuQXHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJzZWxsQnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuS2VlcFwiIG9uQ2xpY2s9e2FkZENhcnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAg7J6l67CU6rWs64uIIOuLtOq4sFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkJ1eVwiIG9uQ2xpY2s9e2FkZENhcnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAg7J6l67CU6rWs64uIIOuLtOq4sFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bkJ1eVwiPuuwlOuhnOq1rOunpCDvvJ48L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihQcm9kdWN0KTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\pijon\\\\react-tutorial\\\\YDConnect\\\\pages\\\\product.js */"
          }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "jsx-553851713" + " " + "shopDetailBody",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
              className: "jsx-553851713" + " " + "shopDetailTable",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                className: "jsx-553851713" + " " + "shopDetailTbody",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  className: "jsx-553851713" + " " + "shopDetailTr",
                  children: [console.log(new URLSearchParams(this.props.location.search)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: "jsx-553851713",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      className: "jsx-553851713" + " " + "shopDetailImg"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 207,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: data[0] && data[0].imgsrc2,
                      className: "jsx-553851713" + " " + "shopDetailImg"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 21
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      src: data[0] && data[0].imgsrc3,
                      className: "jsx-553851713" + " " + "shopDetailImg"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 215,
                      columnNumber: 21
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 206,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 203,
                  columnNumber: 17
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  className: "jsx-553851713",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: "jsx-553851713",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
                      className: "jsx-553851713" + " " + "shopDetailTr",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                        className: "jsx-553851713",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          className: "jsx-553851713",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ShopDetailTop, {
                            children: this.state.data[0] && this.state.data[0].title
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 240,
                            columnNumber: 27
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 239,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          className: "jsx-553851713",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableCate",
                            children: "CPU"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 245,
                            columnNumber: 27
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableDetail",
                            children: this.state.data[0] && this.state.data[0].cpu
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 246,
                            columnNumber: 27
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 244,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          className: "jsx-553851713",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableCate",
                            children: "\uCFE8\uB7EC"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 251,
                            columnNumber: 27
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableDetail",
                            children: this.state.data[0] && this.state.data[0].cooler
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 252,
                            columnNumber: 27
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 250,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          className: "jsx-553851713",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableCate",
                            children: "\uBA54\uBAA8\uB9AC"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 257,
                            columnNumber: 27
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableDetail",
                            children: this.state.data[0] && this.state.data[0].memory
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 258,
                            columnNumber: 27
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 256,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          className: "jsx-553851713",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableCate",
                            children: "\uBA54\uC778\uBCF4\uB4DC"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 263,
                            columnNumber: 27
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableDetail",
                            children: this.state.data[0] && this.state.data[0].mainboard
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 264,
                            columnNumber: 27
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 262,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          className: "jsx-553851713",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableCate",
                            children: "\uADF8\uB798\uD53D\uCE74\uB4DC"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 269,
                            columnNumber: 27
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableDetail",
                            children: this.state.data[0] && this.state.data[0].vga
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 270,
                            columnNumber: 27
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 268,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          className: "jsx-553851713",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableCate",
                            children: "\uD558\uB4DC\uB514\uC2A4\uD06C"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 275,
                            columnNumber: 27
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableDetail",
                            children: this.state.data[0] && this.state.data[0].hdd
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 276,
                            columnNumber: 27
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 274,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          className: "jsx-553851713",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableCate",
                            children: "SSD"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 281,
                            columnNumber: 27
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableDetail",
                            children: this.state.data[0] && this.state.data[0].ssd
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 282,
                            columnNumber: 27
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 280,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          className: "jsx-553851713",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableCate",
                            children: "ODD"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 287,
                            columnNumber: 27
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableDetail",
                            children: this.state.data[0] && this.state.data[0].odd
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 288,
                            columnNumber: 27
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 286,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          className: "jsx-553851713",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableCate",
                            children: "\uD30C\uC6CC"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 293,
                            columnNumber: 27
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableDetail",
                            children: this.state.data[0] && this.state.data[0].power
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 294,
                            columnNumber: 27
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 292,
                          columnNumber: 25
                        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                          className: "jsx-553851713",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableCate",
                            children: "\uC6B4\uC601\uCCB4\uC81C"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 299,
                            columnNumber: 27
                          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                            className: "jsx-553851713" + " " + "tableDetail",
                            children: this.state.data[0] && this.state.data[0].os
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 300,
                            columnNumber: 27
                          }, this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 298,
                          columnNumber: 25
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 238,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 235,
                  columnNumber: 17
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
                className: "jsx-553851713" + " " + "shopDetailTbody",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                  className: "jsx-553851713" + " " + "shopDetailTr",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: "jsx-553851713" + " " + "sellPrice",
                    children: ["\uD310\uB9E4\uAC00 : ", this.state.data[0] && this.state.data[0].price, " \uC6D0"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 311,
                    columnNumber: 19
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                    className: "jsx-553851713" + " " + "sellButton",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: addCart,
                      className: "jsx-553851713" + " " + "btnBuy",
                      children: "\uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 318,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 314,
                    columnNumber: 19
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 310,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 309,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 9
        }, this)
      }, void 0, false);
    }
  }]);

  return Product;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Product));

var _c, _c2;

$RefreshReg$(_c, "ShopDetailTop");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nLWVzMy9kZWNvZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZW5jb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0LmpzIl0sIm5hbWVzIjpbIlNob3BEZXRhaWxUb3AiLCJzdHlsZWQiLCJ0aCIsImF0dHJzIiwiY29sU3BhbiIsIlByb2R1Y3QiLCJwcm9wcyIsInN0YXRlIiwiaXNMb2dpbiIsImVtYWlsIiwiaXRlbUlkIiwiZGF0YSIsIlBDTGlzdCIsImNoZWNrQ2FydEZ1bmN0aW9uIiwiYWRkQ2FydEZ1bmN0aW9uIiwid2luZG93IiwiY29uZmlybSIsImFsZXJ0IiwiYWRkQ2FydCIsIlJvdXRlciIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJpbWdzcmMyIiwiaW1nc3JjMyIsInRpdGxlIiwiY3B1IiwiY29vbGVyIiwibWVtb3J5IiwibWFpbmJvYXJkIiwidmdhIiwiaGRkIiwic3NkIiwib2RkIiwicG93ZXIiLCJvcyIsInByaWNlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QjtBQUFBLHVDQUNFO0FBQUEscURBQWMsY0FBZDtBQUFBLDBDQUNFO0FBQUEsdURBQWMsV0FBZDtBQUFBLHdEQUNTLEtBQUsvQixLQUFMLENBQVdJLElBQVgsQ0FBZ0IsQ0FBaEIsS0FBc0IsS0FBS0osS0FBTCxDQUFXSSxJQUFYLENBQWdCLENBQWhCLEVBQW1CNEIsS0FEbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURGLGVBSUU7QUFBQSx1REFBYyxZQUFkO0FBQUEsMkNBSUU7QUFBMkIsNkJBQU8sRUFBRXJCLE9BQXBDO0FBQUEseURBQWtCLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQTVHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQXBGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix1QkFERjtBQXdORDs7OztFQXRUbUJzQiw2Q0FBSyxDQUFDQyxTOztBQXlUYixxRUFBQUMsOERBQVUsQ0FBQ3JDLE9BQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC4zZjJhNDNjZDRkMzI3ZjQzMDhkMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gSWYgb2JqLmhhc093blByb3BlcnR5IGhhcyBiZWVuIG92ZXJyaWRkZW4sIHRoZW4gY2FsbGluZ1xuLy8gb2JqLmhhc093blByb3BlcnR5KHByb3ApIHdpbGwgYnJlYWsuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcwN1xuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxcywgc2VwLCBlcSwgb3B0aW9ucykge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcXMgIT09ICdzdHJpbmcnIHx8IHFzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgcmVnZXhwID0gL1xcKy9nO1xuICBxcyA9IHFzLnNwbGl0KHNlcCk7XG5cbiAgdmFyIG1heEtleXMgPSAxMDAwO1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhLZXlzID09PSAnbnVtYmVyJykge1xuICAgIG1heEtleXMgPSBvcHRpb25zLm1heEtleXM7XG4gIH1cblxuICB2YXIgbGVuID0gcXMubGVuZ3RoO1xuICAvLyBtYXhLZXlzIDw9IDAgbWVhbnMgdGhhdCB3ZSBzaG91bGQgbm90IGxpbWl0IGtleXMgY291bnRcbiAgaWYgKG1heEtleXMgPiAwICYmIGxlbiA+IG1heEtleXMpIHtcbiAgICBsZW4gPSBtYXhLZXlzO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciB4ID0gcXNbaV0ucmVwbGFjZShyZWdleHAsICclMjAnKSxcbiAgICAgICAgaWR4ID0geC5pbmRleE9mKGVxKSxcbiAgICAgICAga3N0ciwgdnN0ciwgaywgdjtcblxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAga3N0ciA9IHguc3Vic3RyKDAsIGlkeCk7XG4gICAgICB2c3RyID0geC5zdWJzdHIoaWR4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtzdHIgPSB4O1xuICAgICAgdnN0ciA9ICcnO1xuICAgIH1cblxuICAgIGsgPSBkZWNvZGVVUklDb21wb25lbnQoa3N0cik7XG4gICAgdiA9IGRlY29kZVVSSUNvbXBvbmVudCh2c3RyKTtcblxuICAgIGlmICghaGFzT3duUHJvcGVydHkob2JqLCBrKSkge1xuICAgICAgb2JqW2tdID0gdjtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgb2JqW2tdLnB1c2godik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrXSA9IFtvYmpba10sIHZdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnlQcmltaXRpdmUgPSBmdW5jdGlvbih2KSB7XG4gIHN3aXRjaCAodHlwZW9mIHYpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHY7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcblxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJyc7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgc2VwLCBlcSwgbmFtZSkge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIG9iaiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBtYXAob2JqZWN0S2V5cyhvYmopLCBmdW5jdGlvbihrKSB7XG4gICAgICB2YXIga3MgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKGspKSArIGVxO1xuICAgICAgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICByZXR1cm4gbWFwKG9ialtrXSwgZnVuY3Rpb24odikge1xuICAgICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUodikpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9ialtrXSkpO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcblxuICB9XG5cbiAgaWYgKCFuYW1lKSByZXR1cm4gJyc7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG5hbWUpKSArIGVxICtcbiAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqKSk7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuZnVuY3Rpb24gbWFwICh4cywgZikge1xuICBpZiAoeHMubWFwKSByZXR1cm4geHMubWFwKGYpO1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICByZXMucHVzaChmKHhzW2ldLCBpKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSByZXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLmRlY29kZSA9IGV4cG9ydHMucGFyc2UgPSByZXF1aXJlKCcuL2RlY29kZScpO1xuZXhwb3J0cy5lbmNvZGUgPSBleHBvcnRzLnN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciwgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBQQ0xpc3QgZnJvbSBcIi4vUENMaXN0Lmpzb25cIlxyXG5pbXBvcnQgKiBhcyBxcyBmcm9tIFwicXVlcnlzdHJpbmdcIjtcclxuXHJcbmNvbnN0IFNob3BEZXRhaWxUb3AgPSBzdHlsZWQudGguYXR0cnMoe1xyXG4gIGNvbFNwYW46IDIsXHJcbn0pYFxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIHdpZHRoOiA5MzBweDtcclxuYDtcclxuXHJcbmNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgIGl0ZW1JZDogbnVsbCxcclxuICAgICAgZGF0YTogUENMaXN0LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIC8vICAgY29uc3QgeyBxdWVyeSB9ID0gdGhpcy5wcm9wcy5yb3V0ZXI7XHJcbiAgLy8gICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpICE9IG51bGwgJiZcclxuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgaXNMb2dpbjogdHJ1ZSxcclxuICAvLyAgICAgICBlbWFpbDogd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKSxcclxuICAvLyAgICAgICBpdGVtSWQ6IHF1ZXJ5LmlkLFxyXG4gIC8vICAgICB9KTtcclxuXHJcbiAgLy8gICBmZXRjaChwcm9jZXNzLmVudi5Mb2NhbEhvc3QgKyBcIi9wcm9kdWN0XCIsIHtcclxuICAvLyAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAvLyAgICAgaGVhZGVyczoge1xyXG4gIC8vICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgLy8gICAgICAgaWQ6IHF1ZXJ5LmlkLFxyXG4gIC8vICAgICB9KSxcclxuICAvLyAgIH0pXHJcbiAgLy8gICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gICAgIC50aGVuKChyZXMpID0+IHtcclxuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgICAgIGRhdGE6IHJlcyxcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGNoZWNrQ2FydEZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICBcclxuICAgICAgLy8gZmV0Y2gocHJvY2Vzcy5lbnYuTG9jYWxIb3N0ICsgXCIvcHJvZHVjdENoZWNrRXhpc3RcIiwge1xyXG4gICAgICAvLyAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIC8vICAgaGVhZGVyczoge1xyXG4gICAgICAvLyAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIC8vICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcclxuICAgICAgLy8gICAgIGl0ZW1JZDogdGhpcy5zdGF0ZS5pdGVtSWQsXHJcbiAgICAgIC8vICAgfSksXHJcbiAgICAgIC8vIH0pXHJcbiAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLy8gICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIC8vICAgICBpZiAocmVzLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIC8vICAgICAgIGFsZXJ0KFwi7J6l67CU6rWs64uI7JeQIOydtOuvuCDstpTqsIDrkJwg7IOB7ZKI7J6F64uI64ukXCIpO1xyXG4gICAgICAvLyAgICAgICBSb3V0ZXIucHVzaChcIi9jYXJ0XCIpO1xyXG4gICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgLy8gICAgICAgYWRkQ2FydEZ1bmN0aW9uKCk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZENhcnRGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgd2luZG93LmNvbmZpcm0oXCLsnqXrsJTqtazri4jsl5Ag64u07Jy87Iuc6rKg7Iq164uI6rmMP1wiKSAmJlxyXG4gICAgICBhbGVydChcIuyZhOujjFwiKVxyXG4gICAgICAgIC8vIGZldGNoKHByb2Nlc3MuZW52LkxvY2FsSG9zdCArIFwiL3Byb2R1Y3RBZGRDYXJ0XCIsIHtcclxuICAgICAgICAvLyAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgLy8gICBoZWFkZXJzOiB7XHJcbiAgICAgICAgLy8gICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAvLyAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXHJcbiAgICAgICAgLy8gICAgIGl0ZW1JZDogdGhpcy5zdGF0ZS5pdGVtSWQsXHJcbiAgICAgICAgLy8gICB9KSxcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAvLyAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAvLyAgICAgYWxlcnQoXCLsnqXrsJTqtazri4jsl5Ag7LaU6rCA65CY7JeI7Iq164uI64ukLlwiKTtcclxuICAgICAgICAvLyAgICAgUm91dGVyLnB1c2goXCIvY2FydFwiKTtcclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRDYXJ0ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXRlLmlzTG9naW4gPT0gdHJ1ZSA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2NoZWNrQ2FydEZ1bmN0aW9uKCl9XHJcbiAgICAgICAgICB7Lyoge3dpbmRvdy5jb25maXJtKFwi7J6l67CU6rWs64uI7JeQIOuLtOycvOyLnOqyoOyKteuLiOq5jD9cIikgJiYgY2hlY2tDYXJ0RnVuY3Rpb24oKX0gKi99XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHthbGVydChcIuuhnOq3uOyduCDtm4Qg7J207Jqp6rCA64ql7ZWp64uI64ukXCIpfVxyXG4gICAgICAgICAge1JvdXRlci5wdXNoKFwiL3NpZ25pblwiKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5zaG9wRGV0YWlsQm9keSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMjBweDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNob3BEZXRhaWxUYWJsZSB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxMTk5ZmY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2hvcERldGFpbFRib2R5IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaG9wRGV0YWlsVHIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2hvcERldGFpbEltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaG9wRGV0YWlsU3BhbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRhYmxlQ2F0ZSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRhYmxlRGV0YWlsIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG5LZWVwIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzNDZhZmY7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNDZhZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bkJ1eSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ2YWZmO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzQ2YWZmO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWxsUHJpY2UsXHJcbiAgICAgICAgICAgIC5zZWxsQnV0dG9uIHtcclxuICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3BEZXRhaWxCb2R5XCI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzaG9wRGV0YWlsVGFibGVcIj5cclxuICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwic2hvcERldGFpbFRib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwic2hvcERldGFpbFRyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiB7Y29uc29sZS5sb2coZGF0YS5wY2xpc3RbMl0pfSAqL31cclxuICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKG5ldyBVUkxTZWFyY2hQYXJhbXModGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpKX1cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3BEZXRhaWxJbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gc3JjPXtkYXRhLnBjbGlzdFtxdWVyeV0uaW1nc3JjMX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3BEZXRhaWxJbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhWzBdICYmIGRhdGFbMF0uaW1nc3JjMn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3BEZXRhaWxJbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhWzBdICYmIGRhdGFbMF0uaW1nc3JjM31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3BEZXRhaWxJbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhWzBdICYmIGRhdGFbMF0uaW1nc3JjMX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3BEZXRhaWxJbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhWzBdICYmIGRhdGFbMF0uaW1nc3JjMn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3BEZXRhaWxJbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhWzBdICYmIGRhdGFbMF0uaW1nc3JjM31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPiAqL31cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2hvcERldGFpbFRyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvcERldGFpbFRvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2hvcERldGFpbFRvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZUNhdGVcIj5DUFU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZURldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YVswXSAmJiB0aGlzLnN0YXRlLmRhdGFbMF0uY3B1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVDYXRlXCI+7L+o65+sPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVEZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLmNvb2xlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlQ2F0ZVwiPuuplOuqqOumrDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlRGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhWzBdICYmIHRoaXMuc3RhdGUuZGF0YVswXS5tZW1vcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZUNhdGVcIj7rqZTsnbjrs7Trk5w8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZURldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YVswXSAmJiB0aGlzLnN0YXRlLmRhdGFbMF0ubWFpbmJvYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVDYXRlXCI+6re4656Y7ZS97Lm065OcPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVEZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLnZnYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlQ2F0ZVwiPu2VmOuTnOuUlOyKpO2BrDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlRGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhWzBdICYmIHRoaXMuc3RhdGUuZGF0YVswXS5oZGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZUNhdGVcIj5TU0Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZURldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YVswXSAmJiB0aGlzLnN0YXRlLmRhdGFbMF0uc3NkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVDYXRlXCI+T0REPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVEZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLm9kZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlQ2F0ZVwiPu2MjOybjDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlRGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhWzBdICYmIHRoaXMuc3RhdGUuZGF0YVswXS5wb3dlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlQ2F0ZVwiPuyatOyYgeyytOygnDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlRGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhWzBdICYmIHRoaXMuc3RhdGUuZGF0YVswXS5vc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJzaG9wRGV0YWlsVGJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJzaG9wRGV0YWlsVHJcIj5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNlbGxQcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIO2MkOunpOqwgCA6IHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLnByaWNlfSDsm5BcclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNlbGxCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5LZWVwXCIgb25DbGljaz17YWRkQ2FydH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICDsnqXrsJTqtazri4gg64u06riwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuQnV5XCIgb25DbGljaz17YWRkQ2FydH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICDsnqXrsJTqtazri4gg64u06riwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuQnV5XCI+67CU66Gc6rWs66ekIO+8njwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFByb2R1Y3QpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9