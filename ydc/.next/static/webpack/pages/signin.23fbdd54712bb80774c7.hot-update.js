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
    alert(response.profileObj.name + " 님으로 로그인 성공 \n서버와 연결이 되어있지않습니다.");
  };

  var responseKakao = function responseKakao(response) {
    // console.log(response);
    // console.log(response.profile.id);
    // console.log(response.profile.properties.nickname);
    alert(response.profile.properties.nickname + "님으로 로그인 성공 \n서버와 연결이 되어있지않습니다.");
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
              lineNumber: 129,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
            name: "email",
            type: "text",
            placeholder: "\uC774\uBA54\uC77C",
            ref: register
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          pl: 2,
          color: "red",
          fontSize: "0.85rem",
          children: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          mt: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputLeftElement"], {
            pointerEvents: "none",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__["LockIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
            name: "password",
            type: showPassword ? "text" : "password",
            placeholder: "\uBE44\uBC00\uBC88\uD638",
            ref: register,
            autoComplete: "off"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputRightElement"], {
            children: showPassword ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ViewIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 19
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ViewOffIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 19
            }, this),
            onClick: function onClick(e) {
              setShowPassword(!showPassword);
            },
            cursor: "pointer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          pl: 2,
          color: "red",
          fontSize: "0.85rem",
          children: (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
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
          lineNumber: 174,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_google_login__WEBPACK_IMPORTED_MODULE_11__["GoogleLogin"], {
          clientId: "728145388139-7efv8sbus6ei2ga14m9009c46opu8eec.apps.googleusercontent.com",
          buttonText: "\uAD6C\uAE00\uC73C\uB85C \uB85C\uADF8\uC778\uD558\uAE30",
          onSuccess: responseGoogle,
          onFailure: responseGoogle,
          cookiePolicy: "single_host_origin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_kakao_login__WEBPACK_IMPORTED_MODULE_12__["default"], {
          token: "bf9cfd474116c62e93d93544758dda6e",
          buttonText: "Kakao",
          onSuccess: responseKakao,
          onFailure: responseFail,
          getProfile: "true"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
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
            lineNumber: 204,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
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
            lineNumber: 216,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 119,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbInVzZVl1cFZhbGlkYXRpb25SZXNvbHZlciIsInZhbGlkYXRpb25TY2hlbWEiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJ2YWxpZGF0ZSIsImFib3J0RWFybHkiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJpbm5lciIsInJlZHVjZSIsImFsbEVycm9ycyIsImN1cnJlbnRFcnJvciIsInBhdGgiLCJ0eXBlIiwibWVzc2FnZSIsInNpZ25pbiIsInVzZVN0YXRlIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwidXNlTWVtbyIsInl1cCIsImVtYWlsIiwicmVxdWlyZWQiLCJwYXNzd29yZCIsIm1pbiIsIm1heCIsInJlc29sdmVyIiwidXNlRm9ybSIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImFsZXJ0IiwicmVzcG9uc2VHb29nbGUiLCJyZXNwb25zZSIsInByb2ZpbGVPYmoiLCJuYW1lIiwicmVzcG9uc2VLYWthbyIsInByb2ZpbGUiLCJwcm9wZXJ0aWVzIiwibmlja25hbWUiLCJyZXNwb25zZUZhaWwiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUNDLGdCQUFEO0FBQUE7O0FBQUEsU0FDL0JDLHlEQUFXO0FBQUEsMFVBQ1QsaUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUV5QkYsZ0JBQWdCLENBQUNHLFFBQWpCLENBQTBCRCxJQUExQixFQUFnQztBQUNuREUsMEJBQVUsRUFBRTtBQUR1QyxlQUFoQyxDQUZ6Qjs7QUFBQTtBQUVV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LG9CQUFVLEVBQUM7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXRFRixlQStFRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQ0UscUVBQUMsdURBQUQ7QUFDRSxjQUFFLEVBQUUsQ0FETjtBQUVFLHVCQUFXLEVBQUMsTUFGZDtBQUdFLGdCQUFJLEVBQUMsSUFIUDtBQUlFLG1CQUFPLEVBQUMsU0FKVjtBQUtFLHVCQUFXLE1BTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9FRixlQTJGRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxnQkFBWDtBQUFBLGlDQUNFLHFFQUFDLG9EQUFEO0FBQ0UsaUJBQUssRUFBQyxTQURSO0FBRUUsa0JBQU0sRUFBQyxTQUZUO0FBR0UsY0FBRSxFQUFDLEdBSEw7QUFJRSxxQkFBTSxPQUpSO0FBS0Usb0JBQVEsRUFBQyxNQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEzRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdIRDs7SUFuTHVCekIsTTtVQWlCTGYsd0IsRUFDMEIyQix1RCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduaW4uMjNmYmRkNTQ3MTJiYjgwNzc0YzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQge1xyXG4gIENoYWtyYVByb3ZpZGVyLFxyXG4gIElucHV0LFxyXG4gIElucHV0R3JvdXAsXHJcbiAgSW5wdXRMZWZ0RWxlbWVudCxcclxuICBJbnB1dFJpZ2h0RWxlbWVudCxcclxuICBCb3gsXHJcbiAgQnV0dG9uLFxyXG4gIERpdmlkZXIsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgRW1haWxJY29uLCBMb2NrSWNvbiwgVmlld0ljb24sIFZpZXdPZmZJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IFNpZ25MYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lnbkxheW91dFwiO1xyXG5pbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gXCJyZWFjdC1nb29nbGUtbG9naW5cIjtcclxuaW1wb3J0IEtha2FvTG9naW4gZnJvbSBcInJlYWN0LWtha2FvLWxvZ2luXCI7XHJcblxyXG5jb25zdCB1c2VZdXBWYWxpZGF0aW9uUmVzb2x2ZXIgPSAodmFsaWRhdGlvblNjaGVtYSkgPT5cclxuICB1c2VDYWxsYmFjayhcclxuICAgIGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gYXdhaXQgdmFsaWRhdGlvblNjaGVtYS52YWxpZGF0ZShkYXRhLCB7XHJcbiAgICAgICAgICBhYm9ydEVhcmx5OiBmYWxzZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgIGVycm9yczoge30sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3JzKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHZhbHVlczoge30sXHJcbiAgICAgICAgICBlcnJvcnM6IGVycm9ycy5pbm5lci5yZWR1Y2UoXHJcbiAgICAgICAgICAgIChhbGxFcnJvcnMsIGN1cnJlbnRFcnJvcikgPT4gKHtcclxuICAgICAgICAgICAgICAuLi5hbGxFcnJvcnMsXHJcbiAgICAgICAgICAgICAgW2N1cnJlbnRFcnJvci5wYXRoXToge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogY3VycmVudEVycm9yLnR5cGUgPz8gXCJ2YWxpZGF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBjdXJyZW50RXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAge31cclxuICAgICAgICAgICksXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFt2YWxpZGF0aW9uU2NoZW1hXVxyXG4gICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaWduaW4oKSB7XHJcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHVzZU1lbW8oKCkgPT5cclxuICAgIHl1cC5vYmplY3Qoe1xyXG4gICAgICBlbWFpbDogeXVwXHJcbiAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgLmVtYWlsKFwi7J2066mU7J28IOyjvOyGjCDtmJXsi53snbQg7JWE64uZ64uI64ukXCIpXHJcbiAgICAgICAgLnJlcXVpcmVkKFwi7J2066mU7J28IOyjvOyGjOulvCDsnoXroKXtlbTso7zshLjsmpRcIiksXHJcbiAgICAgIHBhc3N3b3JkOiB5dXBcclxuICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAubWluKDgsIFwi67mE67CA67KI7Zi464qUIOy1nOyGjCA466y47J6QLCDstZzrjIAgMTbrrLjsnpDroZwg7J6F66Cl7ZW0IOyjvOyEuOyalFwiKVxyXG4gICAgICAgIC5tYXgoMTYsIFwi67mE67CA67KI7Zi464qUIOy1nOyGjCA466y47J6QLCDstZzrjIAgMTbrrLjsnpDroZwg7J6F66Cl7ZW0IOyjvOyEuOyalFwiKVxyXG4gICAgICAgIC5yZXF1aXJlZChcIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpRcIiksXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHJlc29sdmVyID0gdXNlWXVwVmFsaWRhdGlvblJlc29sdmVyKHZhbGlkYXRpb25TY2hlbWEpO1xyXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCByZWdpc3RlciwgZXJyb3JzIH0gPSB1c2VGb3JtKHsgcmVzb2x2ZXIgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG4gICAgYWxlcnQoXCLshJzrsoTsmYAg7Jew6rKw65CY7Ja07J6I7KeA7JWK7Iq164uI64ukLlwiKTtcclxuICAgIC8vIGZldGNoKHByb2Nlc3MuZW52LkxvY2FsSG9zdCArIFwiL3NpZ25pblwiLCB7XHJcbiAgICAvLyAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAvLyAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICBcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgLy8gICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgLy8gICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLFxyXG4gICAgLy8gICB9KSxcclxuICAgIC8vIH0pXHJcbiAgICAvLyAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpIC8vID0+IEpTT04gYm9keSDrpbwgSlProZwg67OA7ZmYXHJcbiAgICAvLyAgIC50aGVuKChyZXMpID0+IHtcclxuICAgIC8vICAgICBpZiAocmVzWzBdICE9IG51bGwpIHtcclxuICAgIC8vICAgICAgIGlmIChyZXNbMF0uZW1haWwgPT0gZGF0YS5lbWFpbCAmJiByZXNbMF0ucGFzc3dvcmQgPT0gZGF0YS5wYXNzd29yZCkge1xyXG4gICAgLy8gICAgICAgICBhbGVydChyZXNbMF0ubmFtZSArIFwi64uYIOyWtOyEnOyYpOyEuOyalFwiKTtcclxuICAgIC8vICAgICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJlbWFpbFwiLCByZXNbMF0uZW1haWwpO1xyXG4gICAgLy8gICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcIm5hbWVcIiwgcmVzWzBdLm5hbWUpO1xyXG4gICAgLy8gICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvXCI7XHJcbiAgICAvLyAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBhbGVydChcIuuhnOq3uOyduOyXkCDsi6TtjKjtlZjsmIDsirXri4jri6QuXFxu7KCV67O066W8IOu2iOufrOyYrCDsiJgg7JeG7Iq164uI64ukLlwiKTtcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgYWxlcnQoXCLroZzqt7jsnbjsi6TtjKhcXG7slYTsnbTrlJTsmYAg67mE67CA67KI7Zi466W8IO2ZleyduO2VtOyjvOyEuOyalFwiKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlR29vZ2xlID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5nb29nbGVJZCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZS5wcm9maWxlT2JqLm5hbWUpO1xyXG4gICAgYWxlcnQocmVzcG9uc2UucHJvZmlsZU9iai5uYW1lICsgXCIg64uY7Jy866GcIOuhnOq3uOyduCDshLHqs7UgXFxu7ISc67KE7JmAIOyXsOqysOydtCDrkJjslrTsnojsp4DslYrsirXri4jri6QuXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlS2FrYW8gPSAocmVzcG9uc2UpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlLnByb2ZpbGUuaWQpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UucHJvZmlsZS5wcm9wZXJ0aWVzLm5pY2tuYW1lKTtcclxuICAgIGFsZXJ0KHJlc3BvbnNlLnByb2ZpbGUucHJvcGVydGllcy5uaWNrbmFtZSArIFwi64uY7Jy866GcIOuhnOq3uOyduCDshLHqs7UgXFxu7ISc67KE7JmAIOyXsOqysOydtCDrkJjslrTsnojsp4DslYrsirXri4jri6QuXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlRmFpbCA9IChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFrcmFQcm92aWRlcj5cclxuICAgICAgey8qIDxoZWFkPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9kZXZlbG9wZXJzLmtha2FvLmNvbS9zZGsvanMva2FrYW8uanNcIj48L3NjcmlwdD5cclxuICAgICAgPC9oZWFkPiAqL31cclxuICAgICAgPFNpZ25MYXlvdXQ+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChoYW5kbGVGb3JtU3VibWl0KX0+XHJcbiAgICAgICAgICB7Lyog7J2066mU7J28ICovfVxyXG4gICAgICAgICAgPElucHV0R3JvdXAgbXQ9ezN9PlxyXG4gICAgICAgICAgICA8SW5wdXRMZWZ0RWxlbWVudFxyXG4gICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM9XCJub25lXCJcclxuICAgICAgICAgICAgICBjaGlsZHJlbj17PEVtYWlsSWNvbiBjb2xvcj1cImdyYXkuNDAwXCIgLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7J2066mU7J28XCJcclxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgPEJveCBwbD17Mn0gY29sb3I9XCJyZWRcIiBmb250U2l6ZT1cIjAuODVyZW1cIj5cclxuICAgICAgICAgICAge2Vycm9ycy5lbWFpbD8ubWVzc2FnZX1cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIHsvKiDruYTrsIDrsojtmLggKi99XHJcbiAgICAgICAgICA8SW5wdXRHcm91cCBtdD17M30+XHJcbiAgICAgICAgICAgIDxJbnB1dExlZnRFbGVtZW50XHJcbiAgICAgICAgICAgICAgcG9pbnRlckV2ZW50cz1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuPXs8TG9ja0ljb24gY29sb3I9XCJncmF5LjQwMFwiIC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4XCJcclxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFJpZ2h0RWxlbWVudFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuPXtcclxuICAgICAgICAgICAgICAgIHNob3dQYXNzd29yZCA/IChcclxuICAgICAgICAgICAgICAgICAgPFZpZXdJY29uIGNvbG9yPVwiZ3JheS40MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPFZpZXdPZmZJY29uIGNvbG9yPVwiZ3JheS40MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICA8Qm94IHBsPXsyfSBjb2xvcj1cInJlZFwiIGZvbnRTaXplPVwiMC44NXJlbVwiPlxyXG4gICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkPy5tZXNzYWdlfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgey8qIOuhnOq3uOyduCDrsoTtirwgKi99XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBtdD17NX1cclxuICAgICAgICAgICAgbWI9ezN9XHJcbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiYmx1ZVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgIGlzRnVsbFdpZHRoXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIOuhnOq3uOyduFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICAgIDxHb29nbGVMb2dpblxyXG4gICAgICAgICAgICBjbGllbnRJZD1cIjcyODE0NTM4ODEzOS03ZWZ2OHNidXM2ZWkyZ2ExNG05MDA5YzQ2b3B1OGVlYy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXHJcbiAgICAgICAgICAgIGJ1dHRvblRleHQ9XCLqtazquIDsnLzroZwg66Gc6re47J247ZWY6riwXCJcclxuICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZX1cclxuICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZX1cclxuICAgICAgICAgICAgY29va2llUG9saWN5PXtcInNpbmdsZV9ob3N0X29yaWdpblwifVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8S2FrYW9Mb2dpblxyXG4gICAgICAgICAgICB0b2tlbj1cImJmOWNmZDQ3NDExNmM2MmU5M2Q5MzU0NDc1OGRkYTZlXCJcclxuICAgICAgICAgICAgYnV0dG9uVGV4dD1cIktha2FvXCJcclxuICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUtha2FvfVxyXG4gICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlRmFpbH1cclxuICAgICAgICAgICAgZ2V0UHJvZmlsZT1cInRydWVcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICB7Lyog7ZqM7JuQ6rCA7J6FIO2ZlOuptCDsnbTrj5kg67KE7Yq8ICovfVxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG10PXszfVxyXG4gICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiYmx1ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgaXNGdWxsV2lkdGhcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIO2ajOybkOqwgOyehVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL2FjY291bnRJZEZpbmRcIj5cclxuICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiIzAwNzNlOVwiXHJcbiAgICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgbXQ9XCIzXCJcclxuICAgICAgICAgICAgICBmbG9hdD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjE1cHhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg7JWE7J2065SUKOydtOuplOydvCkv67mE67CA67KI7Zi4IOywvuq4sCDvvJ5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L1NpZ25MYXlvdXQ+XHJcbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==