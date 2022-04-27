webpackHotUpdate_N_E("pages/signin",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return signin; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var _components_SignLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SignLayout */ "./components/SignLayout.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_kakao_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-kakao-login */ "./node_modules/react-kakao-login/lib/index.es.js");





var _jsxFileName = "C:\\Users\\pijon\\react-tutorial\\YDConnect\\pages\\signin.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var useYupValidationResolver = function useYupValidationResolver(validationSchema) {
  _s();

  return Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])( /*#__PURE__*/function () {
    var _ref = Object(C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {
      var values;
      return C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return validationSchema.validate(data, {
                abortEarly: false
              });

            case 3:
              values = _context.sent;
              return _context.abrupt("return", {
                values: values,
                errors: {}
              });

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", {
                values: {},
                errors: _context.t0.inner.reduce(function (allErrors, currentError) {
                  var _currentError$type;

                  return _objectSpread(_objectSpread({}, allErrors), {}, Object(C_Users_pijon_react_tutorial_YDConnect_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, currentError.path, {
                    type: (_currentError$type = currentError.type) !== null && _currentError$type !== void 0 ? _currentError$type : "validation",
                    message: currentError.message
                  }));
                }, {})
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }(), [validationSchema]);
};

_s(useYupValidationResolver, "epj4qY15NHsef74wNqHIp5fdZmg=");

function signin() {
  _s2();

  var _errors$email, _errors$password;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      showPassword = _useState[0],
      setShowPassword = _useState[1];

  var validationSchema = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return yup__WEBPACK_IMPORTED_MODULE_6__["object"]({
      email: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().email("이메일 주소 형식이 아닙니다").required("이메일 주소를 입력해주세요"),
      password: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(8, "비밀번호는 최소 8문자, 최대 16문자로 입력해 주세요").max(16, "비밀번호는 최소 8문자, 최대 16문자로 입력해 주세요").required("비밀번호를 입력해주세요")
    });
  });
  var resolver = useYupValidationResolver(validationSchema);

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"])({
    resolver: resolver
  }),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  var handleFormSubmit = function handleFormSubmit(data) {
    alert("서버와 연결되어있지않습니다."); // fetch(process.env.LocalHost + "/signin", {
    //   method: "post",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: data.email,
    //     password: data.password,
    //   }),
    // })
    //   .then((res) => res.json()) // => JSON body 를 JS로 변환
    //   .then((res) => {
    //     if (res[0] != null) {
    //       if (res[0].email == data.email && res[0].password == data.password) {
    //         alert(res[0].name + "님 어서오세요");
    //         window.sessionStorage.setItem("email", res[0].email);
    //         window.sessionStorage.setItem("name", res[0].name);
    //         location.href = "/";
    //       } else {
    //         alert("로그인에 실패하였습니다.\n정보를 불러올 수 없습니다.");
    //       }
    //     } else {
    //       alert("로그인실패\n아이디와 비밀번호를 확인해주세요");
    //     }
    //   });
  };

  var responseGoogle = function responseGoogle(response) {
    // console.log(response);
    // console.log(response.googleId);
    // console.log(response.profileObj.name);
    alert(response.profileObj.name + " 님으로 로그인 성공");
  };

  var responseKakao = function responseKakao(response) {
    console.log(response); // console.log(response.profile.id);
    // console.log(response.profile.properties.nickname);
  };

  var responseFail = function responseFail(err) {
    console.log(err);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["ChakraProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SignLayout__WEBPACK_IMPORTED_MODULE_10__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: handleSubmit(handleFormSubmit),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          mt: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputLeftElement"], {
            pointerEvents: "none",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__["EmailIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
            name: "email",
            type: "text",
            placeholder: "\uC774\uBA54\uC77C",
            ref: register
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          pl: 2,
          color: "red",
          fontSize: "0.85rem",
          children: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          mt: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputLeftElement"], {
            pointerEvents: "none",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__["LockIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
            name: "password",
            type: showPassword ? "text" : "password",
            placeholder: "\uBE44\uBC00\uBC88\uD638",
            ref: register,
            autoComplete: "off"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputRightElement"], {
            children: showPassword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ViewIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 19
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ViewOffIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 19
            }, this),
            onClick: function onClick(e) {
              setShowPassword(!showPassword);
            },
            cursor: "pointer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          pl: 2,
          color: "red",
          fontSize: "0.85rem",
          children: (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          mt: 5,
          mb: 3,
          colorScheme: "blue",
          size: "md",
          isFullWidth: true,
          children: "\uB85C\uADF8\uC778"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_google_login__WEBPACK_IMPORTED_MODULE_11__["GoogleLogin"], {
          clientId: "728145388139-7efv8sbus6ei2ga14m9009c46opu8eec.apps.googleusercontent.com",
          buttonText: "\uAD6C\uAE00\uC73C\uB85C \uB85C\uADF8\uC778\uD558\uAE30",
          onSuccess: responseGoogle,
          onFailure: responseGoogle,
          cookiePolicy: "single_host_origin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_kakao_login__WEBPACK_IMPORTED_MODULE_12__["default"], {
          token: "bf9cfd474116c62e93d93544758dda6e",
          buttonText: "Kakao",
          onSuccess: responseKakao,
          onFailure: responseFail,
          getProfile: "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/signup",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            mt: 3,
            colorScheme: "blue",
            size: "md",
            variant: "outline",
            isFullWidth: true,
            children: "\uD68C\uC6D0\uAC00\uC785"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/accountIdFind",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
            color: "#0073e9",
            cursor: "pointer",
            mt: "3",
            "float": "right",
            fontSize: "15px",
            children: "\uC544\uC774\uB514(\uC774\uBA54\uC77C)/\uBE44\uBC00\uBC88\uD638 \uCC3E\uAE30 \uFF1E"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 118,
    columnNumber: 5
  }, this);
}

_s2(signin, "4IhVGyrhqN2WrArUTwlp6OBiknY=", false, function () {
  return [useYupValidationResolver, react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbInVzZVl1cFZhbGlkYXRpb25SZXNvbHZlciIsInZhbGlkYXRpb25TY2hlbWEiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJ2YWxpZGF0ZSIsImFib3J0RWFybHkiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJpbm5lciIsInJlZHVjZSIsImFsbEVycm9ycyIsImN1cnJlbnRFcnJvciIsInBhdGgiLCJ0eXBlIiwibWVzc2FnZSIsInNpZ25pbiIsInVzZVN0YXRlIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwidXNlTWVtbyIsInl1cCIsImVtYWlsIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsIm1pbiIsIm1heCIsInJlc29sdmVyIiwidXNlRm9ybSIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImFsZXJ0IiwicmVzcG9uc2VHb29nbGUiLCJyZXNwb25zZSIsInByb2ZpbGVPYmoiLCJuYW1lIiwicmVzcG9uc2VLYWthbyIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZUZhaWwiLCJlcnIiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsQ0FBQ0MsZ0JBQUQ7QUFBQTs7QUFBQSxTQUMvQkMseURBQVc7QUFBQSwwVUFDVCxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRXlCRixnQkFBZ0IsQ0FBQ0csUUFBakIsQ0FBMEJELElBQTFCLEVBQWdDO0FBQ25ERSwwQkFBVSxFQUFFO0FBRHVDLGVBQWhDLENBRnpCOztBQUFBO0FBRVVDLG9CQUZWO0FBQUEsK0NBTVc7QUFDTEEsc0JBQU0sRUFB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U0FBWDtBQUFBLGlDQUNFLHFFQUFDLHVEQUFEO0FBQ0UsY0FBRSxFQUFFLENBRE47QUFFRSx1QkFBVyxFQUFDLE1BRmQ7QUFHRSxnQkFBSSxFQUFDLElBSFA7QUFJRSxtQkFBTyxFQUFDLFNBSlY7QUFLRSx1QkFBVyxNQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvRUYsZUEyRkUscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsZ0JBQVg7QUFBQSxpQ0FDRSxxRUFBQyxvREFBRDtBQUNFLGlCQUFLLEVBQUMsU0FEUjtBQUVFLGtCQUFNLEVBQUMsU0FGVDtBQUdFLGNBQUUsRUFBQyxHQUhMO0FBSUUscUJBQU0sT0FKUjtBQUtFLG9CQUFRLEVBQUMsTUFMWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0ZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnSEQ7O0lBbEx1QnhCLE07VUFpQkxmLHdCLEVBQzBCMkIsdUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjZjYTNiNzc4OTkzMGExYjY3ZmQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHtcclxuICBDaGFrcmFQcm92aWRlcixcclxuICBJbnB1dCxcclxuICBJbnB1dEdyb3VwLFxyXG4gIElucHV0TGVmdEVsZW1lbnQsXHJcbiAgSW5wdXRSaWdodEVsZW1lbnQsXHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBEaXZpZGVyLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEVtYWlsSWNvbiwgTG9ja0ljb24sIFZpZXdJY29uLCBWaWV3T2ZmSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCBTaWduTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL1NpZ25MYXlvdXRcIjtcclxuaW1wb3J0IHsgR29vZ2xlTG9naW4gfSBmcm9tIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCI7XHJcbmltcG9ydCBLYWthb0xvZ2luIGZyb20gXCJyZWFjdC1rYWthby1sb2dpblwiO1xyXG5cclxuY29uc3QgdXNlWXVwVmFsaWRhdGlvblJlc29sdmVyID0gKHZhbGlkYXRpb25TY2hlbWEpID0+XHJcbiAgdXNlQ2FsbGJhY2soXHJcbiAgICBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGF3YWl0IHZhbGlkYXRpb25TY2hlbWEudmFsaWRhdGUoZGF0YSwge1xyXG4gICAgICAgICAgYWJvcnRFYXJseTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICBlcnJvcnM6IHt9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9ycykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2YWx1ZXM6IHt9LFxyXG4gICAgICAgICAgZXJyb3JzOiBlcnJvcnMuaW5uZXIucmVkdWNlKFxyXG4gICAgICAgICAgICAoYWxsRXJyb3JzLCBjdXJyZW50RXJyb3IpID0+ICh7XHJcbiAgICAgICAgICAgICAgLi4uYWxsRXJyb3JzLFxyXG4gICAgICAgICAgICAgIFtjdXJyZW50RXJyb3IucGF0aF06IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGN1cnJlbnRFcnJvci50eXBlID8/IFwidmFsaWRhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogY3VycmVudEVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHt9XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbdmFsaWRhdGlvblNjaGVtYV1cclxuICApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lnbmluKCkge1xyXG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSB1c2VNZW1vKCgpID0+XHJcbiAgICB5dXAub2JqZWN0KHtcclxuICAgICAgZW1haWw6IHl1cFxyXG4gICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgIC5lbWFpbChcIuydtOuplOydvCDso7zshowg7ZiV7Iud7J20IOyVhOuLmeuLiOuLpFwiKVxyXG4gICAgICAgIC5yZXF1aXJlZChcIuydtOuplOydvCDso7zshozrpbwg7J6F66Cl7ZW07KO87IS47JqUXCIpLFxyXG4gICAgICBwYXNzd29yZDogeXVwXHJcbiAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgLm1pbig4LCBcIuu5hOuwgOuyiO2YuOuKlCDstZzshowgOOusuOyekCwg7LWc64yAIDE266y47J6Q66GcIOyeheugpe2VtCDso7zshLjsmpRcIilcclxuICAgICAgICAubWF4KDE2LCBcIuu5hOuwgOuyiO2YuOuKlCDstZzshowgOOusuOyekCwg7LWc64yAIDE266y47J6Q66GcIOyeheugpe2VtCDso7zshLjsmpRcIilcclxuICAgICAgICAucmVxdWlyZWQoXCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqUXCIpLFxyXG4gICAgfSlcclxuICApO1xyXG5cclxuICBjb25zdCByZXNvbHZlciA9IHVzZVl1cFZhbGlkYXRpb25SZXNvbHZlcih2YWxpZGF0aW9uU2NoZW1hKTtcclxuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgcmVnaXN0ZXIsIGVycm9ycyB9ID0gdXNlRm9ybSh7IHJlc29sdmVyIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGRhdGEpID0+IHtcclxuICAgIGFsZXJ0KFwi7ISc67KE7JmAIOyXsOqysOuQmOyWtOyeiOyngOyViuyKteuLiOuLpC5cIik7XHJcbiAgICAvLyBmZXRjaChwcm9jZXNzLmVudi5Mb2NhbEhvc3QgKyBcIi9zaWduaW5cIiwge1xyXG4gICAgLy8gICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgLy8gICBoZWFkZXJzOiB7XHJcbiAgICAvLyAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgIC8vICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgIC8vICAgICBwYXNzd29yZDogZGF0YS5wYXNzd29yZCxcclxuICAgIC8vICAgfSksXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKSAvLyA9PiBKU09OIGJvZHkg66W8IEpT66GcIOuzgO2ZmFxyXG4gICAgLy8gICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKHJlc1swXSAhPSBudWxsKSB7XHJcbiAgICAvLyAgICAgICBpZiAocmVzWzBdLmVtYWlsID09IGRhdGEuZW1haWwgJiYgcmVzWzBdLnBhc3N3b3JkID09IGRhdGEucGFzc3dvcmQpIHtcclxuICAgIC8vICAgICAgICAgYWxlcnQocmVzWzBdLm5hbWUgKyBcIuuLmCDslrTshJzsmKTshLjsmpRcIik7XHJcbiAgICAvLyAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiZW1haWxcIiwgcmVzWzBdLmVtYWlsKTtcclxuICAgIC8vICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJuYW1lXCIsIHJlc1swXS5uYW1lKTtcclxuICAgIC8vICAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgLy8gICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgYWxlcnQoXCLroZzqt7jsnbjsl5Ag7Iuk7Yyo7ZWY7JiA7Iq164uI64ukLlxcbuygleuztOulvCDrtojrn6zsmKwg7IiYIOyXhuyKteuLiOuLpC5cIik7XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgIGFsZXJ0KFwi66Gc6re47J247Iuk7YyoXFxu7JWE7J2065SU7JmAIOu5hOuwgOuyiO2YuOulvCDtmZXsnbjtlbTso7zshLjsmpRcIik7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNwb25zZUdvb2dsZSA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UuZ29vZ2xlSWQpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UucHJvZmlsZU9iai5uYW1lKTtcclxuICAgIGFsZXJ0KHJlc3BvbnNlLnByb2ZpbGVPYmoubmFtZSArIFwiIOuLmOycvOuhnCDroZzqt7jsnbgg7ISx6rO1XCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlS2FrYW8gPSAocmVzcG9uc2UpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLnByb2ZpbGUuaWQpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UucHJvZmlsZS5wcm9wZXJ0aWVzLm5pY2tuYW1lKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZXNwb25zZUZhaWwgPSAoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hha3JhUHJvdmlkZXI+XHJcbiAgICAgIHsvKiA8aGVhZD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vZGV2ZWxvcGVycy5rYWthby5jb20vc2RrL2pzL2tha2FvLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDwvaGVhZD4gKi99XHJcbiAgICAgIDxTaWduTGF5b3V0PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoaGFuZGxlRm9ybVN1Ym1pdCl9PlxyXG4gICAgICAgICAgey8qIOydtOuplOydvCAqL31cclxuICAgICAgICAgIDxJbnB1dEdyb3VwIG10PXszfT5cclxuICAgICAgICAgICAgPElucHV0TGVmdEVsZW1lbnRcclxuICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW49ezxFbWFpbEljb24gY29sb3I9XCJncmF5LjQwMFwiIC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOuplOydvFwiXHJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgIDxCb3ggcGw9ezJ9IGNvbG9yPVwicmVkXCIgZm9udFNpemU9XCIwLjg1cmVtXCI+XHJcbiAgICAgICAgICAgIHtlcnJvcnMuZW1haWw/Lm1lc3NhZ2V9XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICB7Lyog67mE67CA67KI7Zi4ICovfVxyXG4gICAgICAgICAgPElucHV0R3JvdXAgbXQ9ezN9PlxyXG4gICAgICAgICAgICA8SW5wdXRMZWZ0RWxlbWVudFxyXG4gICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM9XCJub25lXCJcclxuICAgICAgICAgICAgICBjaGlsZHJlbj17PExvY2tJY29uIGNvbG9yPVwiZ3JheS40MDBcIiAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuFwiXHJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRSaWdodEVsZW1lbnRcclxuICAgICAgICAgICAgICBjaGlsZHJlbj17XHJcbiAgICAgICAgICAgICAgICBzaG93UGFzc3dvcmQgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxWaWV3SWNvbiBjb2xvcj1cImdyYXkuNDAwXCIgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxWaWV3T2ZmSWNvbiBjb2xvcj1cImdyYXkuNDAwXCIgLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgPEJveCBwbD17Mn0gY29sb3I9XCJyZWRcIiBmb250U2l6ZT1cIjAuODVyZW1cIj5cclxuICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZD8ubWVzc2FnZX1cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIHsvKiDroZzqt7jsnbgg67KE7Yq8ICovfVxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgbXQ9ezV9XHJcbiAgICAgICAgICAgIG1iPXszfVxyXG4gICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsdWVcIlxyXG4gICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICBpc0Z1bGxXaWR0aFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgICA8R29vZ2xlTG9naW5cclxuICAgICAgICAgICAgY2xpZW50SWQ9XCI3MjgxNDUzODgxMzktN2VmdjhzYnVzNmVpMmdhMTRtOTAwOWM0Nm9wdThlZWMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxyXG4gICAgICAgICAgICBidXR0b25UZXh0PVwi6rWs6riA7Jy866GcIOuhnOq3uOyduO2VmOq4sFwiXHJcbiAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgIG9uRmFpbHVyZT17cmVzcG9uc2VHb29nbGV9XHJcbiAgICAgICAgICAgIGNvb2tpZVBvbGljeT17XCJzaW5nbGVfaG9zdF9vcmlnaW5cIn1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEtha2FvTG9naW5cclxuICAgICAgICAgICAgdG9rZW49XCJiZjljZmQ0NzQxMTZjNjJlOTNkOTM1NDQ3NThkZGE2ZVwiXHJcbiAgICAgICAgICAgIGJ1dHRvblRleHQ9XCJLYWthb1wiXHJcbiAgICAgICAgICAgIG9uU3VjY2Vzcz17cmVzcG9uc2VLYWthb31cclxuICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUZhaWx9XHJcbiAgICAgICAgICAgIGdldFByb2ZpbGU9XCJ0cnVlXCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgey8qIO2ajOybkOqwgOyehSDtmZTrqbQg7J2064+ZIOuyhO2KvCAqL31cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBtdD17M31cclxuICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsdWVcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgIGlzRnVsbFdpZHRoXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDtmozsm5DqsIDsnoVcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50SWRGaW5kXCI+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBjb2xvcj1cIiMwMDczZTlcIlxyXG4gICAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgIG10PVwiM1wiXHJcbiAgICAgICAgICAgICAgZmxvYXQ9XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgZm9udFNpemU9XCIxNXB4XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOyVhOydtOuUlCjsnbTrqZTsnbwpL+u5hOuwgOuyiO2YuCDssL7quLAg77yeXHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9TaWduTGF5b3V0PlxyXG4gICAgPC9DaGFrcmFQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=