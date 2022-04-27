webpackHotUpdate_N_E("pages/product",{

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

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
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_13__);







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
            children: ".shopDetailBody.jsx-553851713{margin:50px auto;width:1020px;position:relative;}.shopDetailTable.jsx-553851713{border-top:2px solid #1199ff;border-bottom:1px solid #dddddd;border-right:1px solid #dddddd;border-left:1px solid #dddddd;width:100%;margin-top:10px;margin-bottom:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.shopDetailTbody.jsx-553851713{padding:15px;}.shopDetailTr.jsx-553851713{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:1000px;margin:0 auto;}.shopDetailImg.jsx-553851713{width:320px;padding:15px;display:inline-block;}.shopDetailSpan.jsx-553851713{display:block;line-height:20px;-webkit-letter-spacing:-1px;-moz-letter-spacing:-1px;-ms-letter-spacing:-1px;letter-spacing:-1px;}.tableCate.jsx-553851713{padding:0 30px;border-right:1px solid #ccc;border-bottom:1px solid #ccc;border-bottom:1px solid #ccc;width:150px;height:30px;font-size:15px;font-weight:bold;}.tableDetail.jsx-553851713{text-align:left;padding:0 30px;height:30px;width:450px;border-bottom:1px solid #ccc;font-size:14px;font-weight:500;}.btnKeep.jsx-553851713{width:200px;height:40px;background-color:#ffffff;color:#346aff;font-size:18px;font-weight:bold;border:1px solid #346aff;}.btnBuy.jsx-553851713{width:200px;height:40px;background-color:#346aff;color:#ffffff;font-size:18px;font-weight:bold;border:1px solid #346aff;margin-left:20px;}.sellPrice.jsx-553851713,.sellButton.jsx-553851713{-webkit-flex:1;-ms-flex:1;flex:1;font-size:20px;font-weight:bold;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGlqb25cXHJlYWN0LXR1dG9yaWFsXFxZRENvbm5lY3RcXHBhZ2VzXFxwcm9kdWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Ic0IsQUFHZ0MsQUFLWSxBQVdoQixBQUdBLEFBTUQsQUFLRSxBQUtDLEFBVUMsQUFTSixBQVNBLEFBV0wsWUFoRE0sQUE2QkQsQUFTQSxDQS9DZCxDQWNtQixDQUtXLENBVWIsQ0E3Q0YsT0F1RFksQUFTQSxDQXRDSixJQXJCVyxDQUpkLENBOEJFLEFBZVIsRUE0QkcsVUF0Q2MsQUFXakIsR0FwQmQsRUF6QkEsQUF5RW1CLENBbkJILEFBU0EsTUFqQmUsTUExQ0UsRUFtRGhCLEFBU0EsRUFVRixPQXZDZ0IsRUFsQk4sSUF1Q04sQUFTQSxNQWxCRixRQTFDZSxHQW9ETCxBQVNBLElBbEJULEVBWkosWUFDQSxFQVlkLEtBU0EsQUFTbUIsRUE3RE4sR0FnQ0ksR0FSakIsS0F2QmtCLElBNkRsQixFQU95QixDQXBDTixTQS9CRSxRQWdDckIsV0EvQmUsS0FTQSxhQUNDLGNBQ2hCLHNDQXdEQSxJQWxFd0IsOEVBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGlqb25cXHJlYWN0LXR1dG9yaWFsXFxZRENvbm5lY3RcXHBhZ2VzXFxwcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUENMaXN0IGZyb20gXCIuL1BDTGlzdC5qc29uXCJcclxuaW1wb3J0ICogYXMgcXMgZnJvbSBcInF1ZXJ5LXN0cmluZ1wiO1xyXG5cclxuY29uc3QgU2hvcERldGFpbFRvcCA9IHN0eWxlZC50aC5hdHRycyh7XHJcbiAgY29sU3BhbjogMixcclxufSlgXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgd2lkdGg6IDkzMHB4O1xyXG5gO1xyXG5cclxuY2xhc3MgUHJvZHVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzTG9naW46IGZhbHNlLFxyXG4gICAgICBlbWFpbDogbnVsbCxcclxuICAgICAgaXRlbUlkOiBudWxsLFxyXG4gICAgICBkYXRhOiBQQ0xpc3QsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgLy8gICBjb25zdCB7IHF1ZXJ5IH0gPSB0aGlzLnByb3BzLnJvdXRlcjtcclxuICAvLyAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikgIT0gbnVsbCAmJlxyXG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgICBpc0xvZ2luOiB0cnVlLFxyXG4gIC8vICAgICAgIGVtYWlsOiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpLFxyXG4gIC8vICAgICAgIGl0ZW1JZDogcXVlcnkuaWQsXHJcbiAgLy8gICAgIH0pO1xyXG5cclxuICAvLyAgIGZldGNoKHByb2Nlc3MuZW52LkxvY2FsSG9zdCArIFwiL3Byb2R1Y3RcIiwge1xyXG4gIC8vICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgLy8gICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgLy8gICAgIH0sXHJcbiAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAvLyAgICAgICBpZDogcXVlcnkuaWQsXHJcbiAgLy8gICAgIH0pLFxyXG4gIC8vICAgfSlcclxuICAvLyAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAvLyAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gIC8vICAgICAgICAgZGF0YTogcmVzLFxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgY29uc3QgY2hlY2tDYXJ0RnVuY3Rpb24gPSAoKSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICAvLyBmZXRjaChwcm9jZXNzLmVudi5Mb2NhbEhvc3QgKyBcIi9wcm9kdWN0Q2hlY2tFeGlzdFwiLCB7XHJcbiAgICAgIC8vICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgLy8gICBoZWFkZXJzOiB7XHJcbiAgICAgIC8vICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgLy8gICAgIGVtYWlsOiB0aGlzLnN0YXRlLmVtYWlsLFxyXG4gICAgICAvLyAgICAgaXRlbUlkOiB0aGlzLnN0YXRlLml0ZW1JZCxcclxuICAgICAgLy8gICB9KSxcclxuICAgICAgLy8gfSlcclxuICAgICAgLy8gICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAvLyAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgLy8gICAgIGlmIChyZXMubGVuZ3RoICE9IDApIHtcclxuICAgICAgLy8gICAgICAgYWxlcnQoXCLsnqXrsJTqtazri4jsl5Ag7J2066+4IOy2lOqwgOuQnCDsg4HtkojsnoXri4jri6RcIik7XHJcbiAgICAgIC8vICAgICAgIFJvdXRlci5wdXNoKFwiL2NhcnRcIik7XHJcbiAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAvLyAgICAgICBhZGRDYXJ0RnVuY3Rpb24oKTtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkQ2FydEZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cuY29uZmlybShcIuyepeuwlOq1rOuLiOyXkCDri7TsnLzsi5zqsqDsirXri4jquYw/XCIpICYmXHJcbiAgICAgIGFsZXJ0KFwi7JmE66OMXCIpXHJcbiAgICAgICAgLy8gZmV0Y2gocHJvY2Vzcy5lbnYuTG9jYWxIb3N0ICsgXCIvcHJvZHVjdEFkZENhcnRcIiwge1xyXG4gICAgICAgIC8vICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAvLyAgIGhlYWRlcnM6IHtcclxuICAgICAgICAvLyAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIC8vICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcclxuICAgICAgICAvLyAgICAgaXRlbUlkOiB0aGlzLnN0YXRlLml0ZW1JZCxcclxuICAgICAgICAvLyAgIH0pLFxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgLy8gICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIC8vICAgICBhbGVydChcIuyepeuwlOq1rOuLiOyXkCDstpTqsIDrkJjsl4jsirXri4jri6QuXCIpO1xyXG4gICAgICAgIC8vICAgICBSb3V0ZXIucHVzaChcIi9jYXJ0XCIpO1xyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZENhcnQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdGUuaXNMb2dpbiA9PSB0cnVlID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7Y2hlY2tDYXJ0RnVuY3Rpb24oKX1cclxuICAgICAgICAgIHsvKiB7d2luZG93LmNvbmZpcm0oXCLsnqXrsJTqtazri4jsl5Ag64u07Jy87Iuc6rKg7Iq164uI6rmMP1wiKSAmJiBjaGVja0NhcnRGdW5jdGlvbigpfSAqL31cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2FsZXJ0KFwi66Gc6re47J24IO2bhCDsnbTsmqnqsIDriqXtlanri4jri6RcIil9XHJcbiAgICAgICAgICB7Um91dGVyLnB1c2goXCIvc2lnbmluXCIpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLnNob3BEZXRhaWxCb2R5IHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgICAgICAgICAgICB3aWR0aDogMTAyMHB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2hvcERldGFpbFRhYmxlIHtcclxuICAgICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzExOTlmZjtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkZGRkO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaG9wRGV0YWlsVGJvZHkge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNob3BEZXRhaWxUciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaG9wRGV0YWlsSW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNob3BEZXRhaWxTcGFuIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGFibGVDYXRlIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGFibGVEZXRhaWwge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bktlZXAge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICBjb2xvcjogIzM0NmFmZjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM0NmFmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuQnV5IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDZhZmY7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNDZhZmY7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNlbGxQcmljZSxcclxuICAgICAgICAgICAgLnNlbGxCdXR0b24ge1xyXG4gICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcERldGFpbEJvZHlcIj5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNob3BEZXRhaWxUYWJsZVwiPlxyXG4gICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJzaG9wRGV0YWlsVGJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJzaG9wRGV0YWlsVHJcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIHtjb25zb2xlLmxvZyhkYXRhLnBjbGlzdFsyXSl9ICovfVxyXG4gICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2cobmV3IFVSTFNlYXJjaFBhcmFtcyh0aGlzLnByb3BzLmxvY2F0aW9uLnNlYXJjaCkpfVxyXG4gICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvcERldGFpbEltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBzcmM9e2RhdGEucGNsaXN0W3F1ZXJ5XS5pbWdzcmMxfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvcERldGFpbEltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGFbMF0gJiYgZGF0YVswXS5pbWdzcmMyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvcERldGFpbEltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGFbMF0gJiYgZGF0YVswXS5pbWdzcmMzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvcERldGFpbEltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGFbMF0gJiYgZGF0YVswXS5pbWdzcmMxfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvcERldGFpbEltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGFbMF0gJiYgZGF0YVswXS5pbWdzcmMyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvcERldGFpbEltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGFbMF0gJiYgZGF0YVswXS5pbWdzcmMzfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+ICovfVxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzaG9wRGV0YWlsVHJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG9wRGV0YWlsVG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YVswXSAmJiB0aGlzLnN0YXRlLmRhdGFbMF0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TaG9wRGV0YWlsVG9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlQ2F0ZVwiPkNQVTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlRGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhWzBdICYmIHRoaXMuc3RhdGUuZGF0YVswXS5jcHV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZUNhdGVcIj7sv6jrn6w8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZURldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YVswXSAmJiB0aGlzLnN0YXRlLmRhdGFbMF0uY29vbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVDYXRlXCI+66mU66qo66asPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVEZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLm1lbW9yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlQ2F0ZVwiPuuplOyduOuztOuTnDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlRGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhWzBdICYmIHRoaXMuc3RhdGUuZGF0YVswXS5tYWluYm9hcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZUNhdGVcIj7qt7jrnpjtlL3subTrk5w8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZURldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YVswXSAmJiB0aGlzLnN0YXRlLmRhdGFbMF0udmdhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVDYXRlXCI+7ZWY65Oc65SU7Iqk7YGsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVEZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLmhkZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlQ2F0ZVwiPlNTRDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlRGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhWzBdICYmIHRoaXMuc3RhdGUuZGF0YVswXS5zc2R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZUNhdGVcIj5PREQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZURldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YVswXSAmJiB0aGlzLnN0YXRlLmRhdGFbMF0ub2RkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVDYXRlXCI+7YyM7JuMPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVEZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLnBvd2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVDYXRlXCI+7Jq07JiB7LK07KCcPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVEZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLm9zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cInNob3BEZXRhaWxUYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cInNob3BEZXRhaWxUclwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2VsbFByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg7YyQ66ek6rCAIDoge3RoaXMuc3RhdGUuZGF0YVswXSAmJiB0aGlzLnN0YXRlLmRhdGFbMF0ucHJpY2V9IOybkFxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwic2VsbEJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bktlZXBcIiBvbkNsaWNrPXthZGRDYXJ0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIOyepeuwlOq1rOuLiCDri7TquLBcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5CdXlcIiBvbkNsaWNrPXthZGRDYXJ0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIOyepeuwlOq1rOuLiCDri7TquLBcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5CdXlcIj7rsJTroZzqtazrp6Qg77yePC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUHJvZHVjdCk7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\pijon\\\\react-tutorial\\\\YDConnect\\\\pages\\\\product.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2RlY29kZS11cmktY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXVlcnktc3RyaW5nL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3RyaWN0LXVyaS1lbmNvZGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QuanMiXSwibmFtZXMiOlsiU2hvcERldGFpbFRvcCIsInN0eWxlZCIsInRoIiwiYXR0cnMiLCJjb2xTcGFuIiwiUHJvZHVjdCIsInByb3BzIiwic3RhdGUiLCJpc0xvZ2luIiwiZW1haWwiLCJpdGVtSWQiLCJkYXRhIiwiUENMaXN0IiwiY2hlY2tDYXJ0RnVuY3Rpb24iLCJhZGRDYXJ0RnVuY3Rpb24iLCJ3aW5kb3ciLCJjb25maXJtIiwiYWxlcnQiLCJhZGRDYXJ0IiwiUm91dGVyIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJVUkxTZWFyY2hQYXJhbXMiLCJsb2NhdGlvbiIsInNlYXJjaCIsImltZ3NyYzIiLCJpbWdzcmMzIiwidGl0bGUiLCJjcHUiLCJjb29sZXIiLCJtZW1vcnkiLCJtYWluYm9hcmQiLCJ2Z2EiLCJoZGQiLCJzc2QiLCJvZGQiLCJwb3dlciIsIm9zIiwicHJpY2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLHVCQUF1QixFQUFFO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QWMsWUFBZDtBQUFBLDJDQUlFO0FBQTJCLDZCQUFPLEVBQUVyQixPQUFwQztBQUFBLHlEQUFrQixRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkE1R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFwRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsdUJBREY7QUF3TkQ7Ozs7RUF0VG1Cc0IsNkNBQUssQ0FBQ0MsUzs7QUF5VGIscUVBQUFDLDhEQUFVLENBQUNyQyxPQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QuZTFiYzNjNmNhN2Q4NWE1NmIxMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbnZhciB0b2tlbiA9ICclW2EtZjAtOV17Mn0nO1xudmFyIHNpbmdsZU1hdGNoZXIgPSBuZXcgUmVnRXhwKHRva2VuLCAnZ2knKTtcbnZhciBtdWx0aU1hdGNoZXIgPSBuZXcgUmVnRXhwKCcoJyArIHRva2VuICsgJykrJywgJ2dpJyk7XG5cbmZ1bmN0aW9uIGRlY29kZUNvbXBvbmVudHMoY29tcG9uZW50cywgc3BsaXQpIHtcblx0dHJ5IHtcblx0XHQvLyBUcnkgdG8gZGVjb2RlIHRoZSBlbnRpcmUgc3RyaW5nIGZpcnN0XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChjb21wb25lbnRzLmpvaW4oJycpKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gRG8gbm90aGluZ1xuXHR9XG5cblx0aWYgKGNvbXBvbmVudHMubGVuZ3RoID09PSAxKSB7XG5cdFx0cmV0dXJuIGNvbXBvbmVudHM7XG5cdH1cblxuXHRzcGxpdCA9IHNwbGl0IHx8IDE7XG5cblx0Ly8gU3BsaXQgdGhlIGFycmF5IGluIDIgcGFydHNcblx0dmFyIGxlZnQgPSBjb21wb25lbnRzLnNsaWNlKDAsIHNwbGl0KTtcblx0dmFyIHJpZ2h0ID0gY29tcG9uZW50cy5zbGljZShzcGxpdCk7XG5cblx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuY2FsbChbXSwgZGVjb2RlQ29tcG9uZW50cyhsZWZ0KSwgZGVjb2RlQ29tcG9uZW50cyhyaWdodCkpO1xufVxuXG5mdW5jdGlvbiBkZWNvZGUoaW5wdXQpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KGlucHV0KTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0dmFyIHRva2VucyA9IGlucHV0Lm1hdGNoKHNpbmdsZU1hdGNoZXIpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlucHV0ID0gZGVjb2RlQ29tcG9uZW50cyh0b2tlbnMsIGkpLmpvaW4oJycpO1xuXG5cdFx0XHR0b2tlbnMgPSBpbnB1dC5tYXRjaChzaW5nbGVNYXRjaGVyKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3VzdG9tRGVjb2RlVVJJQ29tcG9uZW50KGlucHV0KSB7XG5cdC8vIEtlZXAgdHJhY2sgb2YgYWxsIHRoZSByZXBsYWNlbWVudHMgYW5kIHByZWZpbGwgdGhlIG1hcCB3aXRoIHRoZSBgQk9NYFxuXHR2YXIgcmVwbGFjZU1hcCA9IHtcblx0XHQnJUZFJUZGJzogJ1xcdUZGRkRcXHVGRkZEJyxcblx0XHQnJUZGJUZFJzogJ1xcdUZGRkRcXHVGRkZEJ1xuXHR9O1xuXG5cdHZhciBtYXRjaCA9IG11bHRpTWF0Y2hlci5leGVjKGlucHV0KTtcblx0d2hpbGUgKG1hdGNoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIERlY29kZSBhcyBiaWcgY2h1bmtzIGFzIHBvc3NpYmxlXG5cdFx0XHRyZXBsYWNlTWFwW21hdGNoWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFswXSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR2YXIgcmVzdWx0ID0gZGVjb2RlKG1hdGNoWzBdKTtcblxuXHRcdFx0aWYgKHJlc3VsdCAhPT0gbWF0Y2hbMF0pIHtcblx0XHRcdFx0cmVwbGFjZU1hcFttYXRjaFswXV0gPSByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bWF0Y2ggPSBtdWx0aU1hdGNoZXIuZXhlYyhpbnB1dCk7XG5cdH1cblxuXHQvLyBBZGQgYCVDMmAgYXQgdGhlIGVuZCBvZiB0aGUgbWFwIHRvIG1ha2Ugc3VyZSBpdCBkb2VzIG5vdCByZXBsYWNlIHRoZSBjb21iaW5hdG9yIGJlZm9yZSBldmVyeXRoaW5nIGVsc2Vcblx0cmVwbGFjZU1hcFsnJUMyJ10gPSAnXFx1RkZGRCc7XG5cblx0dmFyIGVudHJpZXMgPSBPYmplY3Qua2V5cyhyZXBsYWNlTWFwKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcblx0XHQvLyBSZXBsYWNlIGFsbCBkZWNvZGVkIGNvbXBvbmVudHNcblx0XHR2YXIga2V5ID0gZW50cmllc1tpXTtcblx0XHRpbnB1dCA9IGlucHV0LnJlcGxhY2UobmV3IFJlZ0V4cChrZXksICdnJyksIHJlcGxhY2VNYXBba2V5XSk7XG5cdH1cblxuXHRyZXR1cm4gaW5wdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVuY29kZWRVUkkpIHtcblx0aWYgKHR5cGVvZiBlbmNvZGVkVVJJICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGBlbmNvZGVkVVJJYCB0byBiZSBvZiB0eXBlIGBzdHJpbmdgLCBnb3QgYCcgKyB0eXBlb2YgZW5jb2RlZFVSSSArICdgJyk7XG5cdH1cblxuXHR0cnkge1xuXHRcdGVuY29kZWRVUkkgPSBlbmNvZGVkVVJJLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuXG5cdFx0Ly8gVHJ5IHRoZSBidWlsdCBpbiBkZWNvZGVyIGZpcnN0XG5cdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkVVJJKTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gRmFsbGJhY2sgdG8gYSBtb3JlIGFkdmFuY2VkIGRlY29kZXJcblx0XHRyZXR1cm4gY3VzdG9tRGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRVUkkpO1xuXHR9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cmljdFVyaUVuY29kZSA9IHJlcXVpcmUoJ3N0cmljdC11cmktZW5jb2RlJyk7XG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGRlY29kZUNvbXBvbmVudCA9IHJlcXVpcmUoJ2RlY29kZS11cmktY29tcG9uZW50Jyk7XG5cbmZ1bmN0aW9uIGVuY29kZXJGb3JBcnJheUZvcm1hdChvcHRzKSB7XG5cdHN3aXRjaCAob3B0cy5hcnJheUZvcm1hdCkge1xuXHRcdGNhc2UgJ2luZGV4Jzpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgaW5kZXgpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSBudWxsID8gW1xuXHRcdFx0XHRcdGVuY29kZShrZXksIG9wdHMpLFxuXHRcdFx0XHRcdCdbJyxcblx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHQnXSdcblx0XHRcdFx0XS5qb2luKCcnKSA6IFtcblx0XHRcdFx0XHRlbmNvZGUoa2V5LCBvcHRzKSxcblx0XHRcdFx0XHQnWycsXG5cdFx0XHRcdFx0ZW5jb2RlKGluZGV4LCBvcHRzKSxcblx0XHRcdFx0XHQnXT0nLFxuXHRcdFx0XHRcdGVuY29kZSh2YWx1ZSwgb3B0cylcblx0XHRcdFx0XS5qb2luKCcnKTtcblx0XHRcdH07XG5cblx0XHRjYXNlICdicmFja2V0Jzpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBlbmNvZGUoa2V5LCBvcHRzKSA6IFtcblx0XHRcdFx0XHRlbmNvZGUoa2V5LCBvcHRzKSxcblx0XHRcdFx0XHQnW109Jyxcblx0XHRcdFx0XHRlbmNvZGUodmFsdWUsIG9wdHMpXG5cdFx0XHRcdF0uam9pbignJyk7XG5cdFx0XHR9O1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWUgPT09IG51bGwgPyBlbmNvZGUoa2V5LCBvcHRzKSA6IFtcblx0XHRcdFx0XHRlbmNvZGUoa2V5LCBvcHRzKSxcblx0XHRcdFx0XHQnPScsXG5cdFx0XHRcdFx0ZW5jb2RlKHZhbHVlLCBvcHRzKVxuXHRcdFx0XHRdLmpvaW4oJycpO1xuXHRcdFx0fTtcblx0fVxufVxuXG5mdW5jdGlvbiBwYXJzZXJGb3JBcnJheUZvcm1hdChvcHRzKSB7XG5cdHZhciByZXN1bHQ7XG5cblx0c3dpdGNoIChvcHRzLmFycmF5Rm9ybWF0KSB7XG5cdFx0Y2FzZSAnaW5kZXgnOlxuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlLCBhY2N1bXVsYXRvcikge1xuXHRcdFx0XHRyZXN1bHQgPSAvXFxbKFxcZCopXFxdJC8uZXhlYyhrZXkpO1xuXG5cdFx0XHRcdGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXGQqXFxdJC8sICcnKTtcblxuXHRcdFx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoYWNjdW11bGF0b3Jba2V5XSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IHt9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XVtyZXN1bHRbMV1dID0gdmFsdWU7XG5cdFx0XHR9O1xuXG5cdFx0Y2FzZSAnYnJhY2tldCc6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSB7XG5cdFx0XHRcdHJlc3VsdCA9IC8oXFxbXFxdKSQvLmV4ZWMoa2V5KTtcblx0XHRcdFx0a2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcXSQvLCAnJyk7XG5cblx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGFjY3VtdWxhdG9yW2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbdmFsdWVdO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGFjY3VtdWxhdG9yW2tleV0gPSBbXS5jb25jYXQoYWNjdW11bGF0b3Jba2V5XSwgdmFsdWUpO1xuXHRcdFx0fTtcblxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24gKGtleSwgdmFsdWUsIGFjY3VtdWxhdG9yKSB7XG5cdFx0XHRcdGlmIChhY2N1bXVsYXRvcltrZXldID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRhY2N1bXVsYXRvcltrZXldID0gdmFsdWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YWNjdW11bGF0b3Jba2V5XSA9IFtdLmNvbmNhdChhY2N1bXVsYXRvcltrZXldLCB2YWx1ZSk7XG5cdFx0XHR9O1xuXHR9XG59XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWx1ZSwgb3B0cykge1xuXHRpZiAob3B0cy5lbmNvZGUpIHtcblx0XHRyZXR1cm4gb3B0cy5zdHJpY3QgPyBzdHJpY3RVcmlFbmNvZGUodmFsdWUpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0fVxuXG5cdHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24ga2V5c1NvcnRlcihpbnB1dCkge1xuXHRpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcblx0XHRyZXR1cm4gaW5wdXQuc29ydCgpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXR1cm4ga2V5c1NvcnRlcihPYmplY3Qua2V5cyhpbnB1dCkpLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRcdHJldHVybiBOdW1iZXIoYSkgLSBOdW1iZXIoYik7XG5cdFx0fSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBpbnB1dFtrZXldO1xuXHRcdH0pO1xuXHR9XG5cblx0cmV0dXJuIGlucHV0O1xufVxuXG5mdW5jdGlvbiBleHRyYWN0KHN0cikge1xuXHR2YXIgcXVlcnlTdGFydCA9IHN0ci5pbmRleE9mKCc/Jyk7XG5cdGlmIChxdWVyeVN0YXJ0ID09PSAtMSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHRyZXR1cm4gc3RyLnNsaWNlKHF1ZXJ5U3RhcnQgKyAxKTtcbn1cblxuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRzKSB7XG5cdG9wdHMgPSBvYmplY3RBc3NpZ24oe2FycmF5Rm9ybWF0OiAnbm9uZSd9LCBvcHRzKTtcblxuXHR2YXIgZm9ybWF0dGVyID0gcGFyc2VyRm9yQXJyYXlGb3JtYXQob3B0cyk7XG5cblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIG5vIHByb3RvdHlwZVxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZy9pc3N1ZXMvNDdcblx0dmFyIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0aWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdHN0ciA9IHN0ci50cmltKCkucmVwbGFjZSgvXls/IyZdLywgJycpO1xuXG5cdGlmICghc3RyKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdHN0ci5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG5cdFx0dmFyIHBhcnRzID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKTtcblx0XHQvLyBGaXJlZm94IChwcmUgNDApIGRlY29kZXMgYCUzRGAgdG8gYD1gXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9xdWVyeS1zdHJpbmcvcHVsbC8zN1xuXHRcdHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpO1xuXHRcdHZhciB2YWwgPSBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHMuam9pbignPScpIDogdW5kZWZpbmVkO1xuXG5cdFx0Ly8gbWlzc2luZyBgPWAgc2hvdWxkIGJlIGBudWxsYDpcblx0XHQvLyBodHRwOi8vdzMub3JnL1RSLzIwMTIvV0QtdXJsLTIwMTIwNTI0LyNjb2xsZWN0LXVybC1wYXJhbWV0ZXJzXG5cdFx0dmFsID0gdmFsID09PSB1bmRlZmluZWQgPyBudWxsIDogZGVjb2RlQ29tcG9uZW50KHZhbCk7XG5cblx0XHRmb3JtYXR0ZXIoZGVjb2RlQ29tcG9uZW50KGtleSksIHZhbCwgcmV0KTtcblx0fSk7XG5cblx0cmV0dXJuIE9iamVjdC5rZXlzKHJldCkuc29ydCgpLnJlZHVjZShmdW5jdGlvbiAocmVzdWx0LCBrZXkpIHtcblx0XHR2YXIgdmFsID0gcmV0W2tleV07XG5cdFx0aWYgKEJvb2xlYW4odmFsKSAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWwpKSB7XG5cdFx0XHQvLyBTb3J0IG9iamVjdCBrZXlzLCBub3QgdmFsdWVzXG5cdFx0XHRyZXN1bHRba2V5XSA9IGtleXNTb3J0ZXIodmFsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0W2tleV0gPSB2YWw7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSwgT2JqZWN0LmNyZWF0ZShudWxsKSk7XG59XG5cbmV4cG9ydHMuZXh0cmFjdCA9IGV4dHJhY3Q7XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5cbmV4cG9ydHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24gKG9iaiwgb3B0cykge1xuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdFx0ZW5jb2RlOiB0cnVlLFxuXHRcdHN0cmljdDogdHJ1ZSxcblx0XHRhcnJheUZvcm1hdDogJ25vbmUnXG5cdH07XG5cblx0b3B0cyA9IG9iamVjdEFzc2lnbihkZWZhdWx0cywgb3B0cyk7XG5cblx0aWYgKG9wdHMuc29ydCA9PT0gZmFsc2UpIHtcblx0XHRvcHRzLnNvcnQgPSBmdW5jdGlvbiAoKSB7fTtcblx0fVxuXG5cdHZhciBmb3JtYXR0ZXIgPSBlbmNvZGVyRm9yQXJyYXlGb3JtYXQob3B0cyk7XG5cblx0cmV0dXJuIG9iaiA/IE9iamVjdC5rZXlzKG9iaikuc29ydChvcHRzLnNvcnQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0dmFyIHZhbCA9IG9ialtrZXldO1xuXG5cdFx0aWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXG5cdFx0aWYgKHZhbCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuIGVuY29kZShrZXksIG9wdHMpO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcblx0XHRcdHZhciByZXN1bHQgPSBbXTtcblxuXHRcdFx0dmFsLnNsaWNlKCkuZm9yRWFjaChmdW5jdGlvbiAodmFsMikge1xuXHRcdFx0XHRpZiAodmFsMiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVzdWx0LnB1c2goZm9ybWF0dGVyKGtleSwgdmFsMiwgcmVzdWx0Lmxlbmd0aCkpO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiByZXN1bHQuam9pbignJicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRzKSArICc9JyArIGVuY29kZSh2YWwsIG9wdHMpO1xuXHR9KS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geC5sZW5ndGggPiAwO1xuXHR9KS5qb2luKCcmJykgOiAnJztcbn07XG5cbmV4cG9ydHMucGFyc2VVcmwgPSBmdW5jdGlvbiAoc3RyLCBvcHRzKSB7XG5cdHJldHVybiB7XG5cdFx0dXJsOiBzdHIuc3BsaXQoJz8nKVswXSB8fCAnJyxcblx0XHRxdWVyeTogcGFyc2UoZXh0cmFjdChzdHIpLCBvcHRzKVxuXHR9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCBmdW5jdGlvbiAoYykge1xuXHRcdHJldHVybiAnJScgKyBjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG5cdH0pO1xufTtcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyLCB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IFBDTGlzdCBmcm9tIFwiLi9QQ0xpc3QuanNvblwiXHJcbmltcG9ydCAqIGFzIHFzIGZyb20gXCJxdWVyeS1zdHJpbmdcIjtcclxuXHJcbmNvbnN0IFNob3BEZXRhaWxUb3AgPSBzdHlsZWQudGguYXR0cnMoe1xyXG4gIGNvbFNwYW46IDIsXHJcbn0pYFxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIHdpZHRoOiA5MzBweDtcclxuYDtcclxuXHJcbmNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc0xvZ2luOiBmYWxzZSxcclxuICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgIGl0ZW1JZDogbnVsbCxcclxuICAgICAgZGF0YTogUENMaXN0LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIC8vICAgY29uc3QgeyBxdWVyeSB9ID0gdGhpcy5wcm9wcy5yb3V0ZXI7XHJcbiAgLy8gICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImVtYWlsXCIpICE9IG51bGwgJiZcclxuICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgaXNMb2dpbjogdHJ1ZSxcclxuICAvLyAgICAgICBlbWFpbDogd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJlbWFpbFwiKSxcclxuICAvLyAgICAgICBpdGVtSWQ6IHF1ZXJ5LmlkLFxyXG4gIC8vICAgICB9KTtcclxuXHJcbiAgLy8gICBmZXRjaChwcm9jZXNzLmVudi5Mb2NhbEhvc3QgKyBcIi9wcm9kdWN0XCIsIHtcclxuICAvLyAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAvLyAgICAgaGVhZGVyczoge1xyXG4gIC8vICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIC8vICAgICB9LFxyXG4gIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgLy8gICAgICAgaWQ6IHF1ZXJ5LmlkLFxyXG4gIC8vICAgICB9KSxcclxuICAvLyAgIH0pXHJcbiAgLy8gICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgLy8gICAgIC50aGVuKChyZXMpID0+IHtcclxuICAvLyAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgICAgIGRhdGE6IHJlcyxcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IGNoZWNrQ2FydEZ1bmN0aW9uID0gKCkgPT4ge1xyXG4gICAgICBcclxuICAgICAgLy8gZmV0Y2gocHJvY2Vzcy5lbnYuTG9jYWxIb3N0ICsgXCIvcHJvZHVjdENoZWNrRXhpc3RcIiwge1xyXG4gICAgICAvLyAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIC8vICAgaGVhZGVyczoge1xyXG4gICAgICAvLyAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgIC8vICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbCxcclxuICAgICAgLy8gICAgIGl0ZW1JZDogdGhpcy5zdGF0ZS5pdGVtSWQsXHJcbiAgICAgIC8vICAgfSksXHJcbiAgICAgIC8vIH0pXHJcbiAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLy8gICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIC8vICAgICBpZiAocmVzLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgIC8vICAgICAgIGFsZXJ0KFwi7J6l67CU6rWs64uI7JeQIOydtOuvuCDstpTqsIDrkJwg7IOB7ZKI7J6F64uI64ukXCIpO1xyXG4gICAgICAvLyAgICAgICBSb3V0ZXIucHVzaChcIi9jYXJ0XCIpO1xyXG4gICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgLy8gICAgICAgYWRkQ2FydEZ1bmN0aW9uKCk7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZENhcnRGdW5jdGlvbiA9ICgpID0+IHtcclxuICAgICAgd2luZG93LmNvbmZpcm0oXCLsnqXrsJTqtazri4jsl5Ag64u07Jy87Iuc6rKg7Iq164uI6rmMP1wiKSAmJlxyXG4gICAgICBhbGVydChcIuyZhOujjFwiKVxyXG4gICAgICAgIC8vIGZldGNoKHByb2Nlc3MuZW52LkxvY2FsSG9zdCArIFwiL3Byb2R1Y3RBZGRDYXJ0XCIsIHtcclxuICAgICAgICAvLyAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgLy8gICBoZWFkZXJzOiB7XHJcbiAgICAgICAgLy8gICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAvLyAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXHJcbiAgICAgICAgLy8gICAgIGl0ZW1JZDogdGhpcy5zdGF0ZS5pdGVtSWQsXHJcbiAgICAgICAgLy8gICB9KSxcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAvLyAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAvLyAgICAgYWxlcnQoXCLsnqXrsJTqtazri4jsl5Ag7LaU6rCA65CY7JeI7Iq164uI64ukLlwiKTtcclxuICAgICAgICAvLyAgICAgUm91dGVyLnB1c2goXCIvY2FydFwiKTtcclxuICAgICAgICAvLyAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhZGRDYXJ0ID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnN0YXRlLmlzTG9naW4gPT0gdHJ1ZSA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2NoZWNrQ2FydEZ1bmN0aW9uKCl9XHJcbiAgICAgICAgICB7Lyoge3dpbmRvdy5jb25maXJtKFwi7J6l67CU6rWs64uI7JeQIOuLtOycvOyLnOqyoOyKteuLiOq5jD9cIikgJiYgY2hlY2tDYXJ0RnVuY3Rpb24oKX0gKi99XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHthbGVydChcIuuhnOq3uOyduCDtm4Qg7J207Jqp6rCA64ql7ZWp64uI64ukXCIpfVxyXG4gICAgICAgICAge1JvdXRlci5wdXNoKFwiL3NpZ25pblwiKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIC5zaG9wRGV0YWlsQm9keSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMjBweDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNob3BEZXRhaWxUYWJsZSB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICMxMTk5ZmY7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2hvcERldGFpbFRib2R5IHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaG9wRGV0YWlsVHIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2hvcERldGFpbEltZyB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaG9wRGV0YWlsU3BhbiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRhYmxlQ2F0ZSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRhYmxlRGV0YWlsIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG5LZWVwIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMzNDZhZmY7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNDZhZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bkJ1eSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ2YWZmO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzQ2YWZmO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWxsUHJpY2UsXHJcbiAgICAgICAgICAgIC5zZWxsQnV0dG9uIHtcclxuICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3BEZXRhaWxCb2R5XCI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzaG9wRGV0YWlsVGFibGVcIj5cclxuICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwic2hvcERldGFpbFRib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwic2hvcERldGFpbFRyXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiB7Y29uc29sZS5sb2coZGF0YS5wY2xpc3RbMl0pfSAqL31cclxuICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKG5ldyBVUkxTZWFyY2hQYXJhbXModGhpcy5wcm9wcy5sb2NhdGlvbi5zZWFyY2gpKX1cclxuICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3BEZXRhaWxJbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gc3JjPXtkYXRhLnBjbGlzdFtxdWVyeV0uaW1nc3JjMX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3BEZXRhaWxJbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhWzBdICYmIGRhdGFbMF0uaW1nc3JjMn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3BEZXRhaWxJbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhWzBdICYmIGRhdGFbMF0uaW1nc3JjM31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3BEZXRhaWxJbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhWzBdICYmIGRhdGFbMF0uaW1nc3JjMX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3BEZXRhaWxJbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhWzBdICYmIGRhdGFbMF0uaW1nc3JjMn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3BEZXRhaWxJbWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtkYXRhWzBdICYmIGRhdGFbMF0uaW1nc3JjM31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPiAqL31cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwic2hvcERldGFpbFRyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvcERldGFpbFRvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2hvcERldGFpbFRvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZUNhdGVcIj5DUFU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZURldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YVswXSAmJiB0aGlzLnN0YXRlLmRhdGFbMF0uY3B1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVDYXRlXCI+7L+o65+sPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVEZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLmNvb2xlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlQ2F0ZVwiPuuplOuqqOumrDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlRGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhWzBdICYmIHRoaXMuc3RhdGUuZGF0YVswXS5tZW1vcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZUNhdGVcIj7rqZTsnbjrs7Trk5w8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZURldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YVswXSAmJiB0aGlzLnN0YXRlLmRhdGFbMF0ubWFpbmJvYXJkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVDYXRlXCI+6re4656Y7ZS97Lm065OcPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVEZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLnZnYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlQ2F0ZVwiPu2VmOuTnOuUlOyKpO2BrDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlRGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhWzBdICYmIHRoaXMuc3RhdGUuZGF0YVswXS5oZGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZUNhdGVcIj5TU0Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0YWJsZURldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZGF0YVswXSAmJiB0aGlzLnN0YXRlLmRhdGFbMF0uc3NkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVDYXRlXCI+T0REPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFibGVEZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLm9kZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlQ2F0ZVwiPu2MjOybjDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlRGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhWzBdICYmIHRoaXMuc3RhdGUuZGF0YVswXS5wb3dlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlQ2F0ZVwiPuyatOyYgeyytOygnDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRhYmxlRGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhWzBdICYmIHRoaXMuc3RhdGUuZGF0YVswXS5vc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJzaG9wRGV0YWlsVGJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJzaG9wRGV0YWlsVHJcIj5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNlbGxQcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIO2MkOunpOqwgCA6IHt0aGlzLnN0YXRlLmRhdGFbMF0gJiYgdGhpcy5zdGF0ZS5kYXRhWzBdLnByaWNlfSDsm5BcclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInNlbGxCdXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG5LZWVwXCIgb25DbGljaz17YWRkQ2FydH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICDsnqXrsJTqtazri4gg64u06riwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuQnV5XCIgb25DbGljaz17YWRkQ2FydH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICDsnqXrsJTqtazri4gg64u06riwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuQnV5XCI+67CU66Gc6rWs66ekIO+8njwvYnV0dG9uPiAqL31cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFByb2R1Y3QpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9