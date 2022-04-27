webpackHotUpdate_N_E("pages/accountIdFind",{

/***/ "./pages/accountIdFind.js":
/*!********************************!*\
  !*** ./pages/accountIdFind.js ***!
  \********************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var _components_SignLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SignLayout */ "./components/SignLayout.js");





var _jsxFileName = "C:\\Users\\pijon\\react-tutorial\\YDConnect\\pages\\accountIdFind.js",
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

  var _errors$name, _errors$phone;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      findEmail = _useState[0],
      setFindEmail = _useState[1];

  var validationSchema = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return yup__WEBPACK_IMPORTED_MODULE_7__["object"]({
      name: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required("이름을 입력해주세요"),
      phone: yup__WEBPACK_IMPORTED_MODULE_7__["number"]().typeError("-없이 숫자만 입력해주세요").required("전화번호를 입력해주세요")
    });
  });
  var resolver = useYupValidationResolver(validationSchema);

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"])({
    resolver: resolver
  }),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  var handleFormSubmit = function handleFormSubmit(data) {
    alert("서버와 연결되어있지않습니다."); // fetch(process.env.LocalHost + "/accountInfoFindId", {
    //   method: "post",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: data.name,
    //     phone: data.phone,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (res[0] != null) {
    //       setFindEmail(`로그인 아이디는\n${res[0].email}\n입니다`);
    //     } else {
    //       setFindEmail("정보가 없습니다.\n이름과 번호를 확인해주세요");
    //     }
    //   });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["ChakraProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SignLayout__WEBPACK_IMPORTED_MODULE_12__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Tabs"], {
        isFitted: true,
        variant: "enclosed-colored",
        defaultIndex: 0,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["TabList"], {
          mb: "1rem",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
            w: "175px",
            _selected: {
              color: "white",
              bg: "blue.500"
            },
            children: "\uC544\uC774\uB514\uCC3E\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
            w: "175px",
            onClick: function onClick(e) {
              e.preventDefault();
              next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/accountPwFind");
            },
            children: "\uBE44\uBC00\uBC88\uD638\uCC3E\uAE30"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["TabPanels"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["TabPanel"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Heading"], {
              as: "h1",
              size: "md",
              textAlign: "center",
              mb: "30px",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
                onSubmit: handleSubmit(handleFormSubmit),
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
                  mt: 3,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["InputLeftElement"], {
                    pointerEvents: "none",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_11__["RiUserFill"], {
                      color: "gray.400"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 119,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 117,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
                    name: "name",
                    type: "text",
                    placeholder: "\uC774\uB984",
                    ref: register
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Box"], {
                  pl: 2,
                  color: "red",
                  fontSize: "0.85rem",
                  children: (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["InputGroup"], {
                  mt: 3,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["InputLeftElement"], {
                    pointerEvents: "none",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__["PhoneIcon"], {
                      color: "gray.400"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 134,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 132,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Input"], {
                    name: "phone",
                    type: "number",
                    placeholder: "\uC804\uD654\uBC88\uD638",
                    ref: register
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 136,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Box"], {
                  pl: 2,
                  color: "red",
                  fontSize: "0.85rem",
                  children: (_errors$phone = errors.phone) === null || _errors$phone === void 0 ? void 0 : _errors$phone.message
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
                  type: "submit",
                  mt: 5,
                  mb: 3,
                  colorScheme: "blue",
                  size: "md",
                  isFullWidth: true,
                  children: "\uC870\uD68C\uD558\uAE30"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
                  mt: 1,
                  mb: 1,
                  colorScheme: "blue",
                  variant: "outline",
                  size: "md",
                  isFullWidth: true,
                  onClick: function onClick(e) {
                    e.preventDefault();
                    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/signin");
                  },
                  children: "\uB85C\uADF8\uC778\uD654\uBA74\uC73C\uB85C"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Divider"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Box"], {
                p: "0",
                whiteSpace: "pre-wrap",
                border: "0",
                readOnly: true,
                children: findEmail
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__["Box"], {
          color: "#0073e9",
          cursor: "pointer",
          mt: "3",
          "float": "right",
          fontSize: "15px",
          children: "\uD648\uC73C\uB85C \uFF1E"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }, this);
}

_s2(signin, "Rg/N/2qiTn2b516pk+Dzqa+lRQs=", false, function () {
  return [useYupValidationResolver, react_hook_form__WEBPACK_IMPORTED_MODULE_8__["useForm"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjb3VudElkRmluZC5qcyJdLCJuYW1lcyI6WyJ1c2VZdXBWYWxpZGF0aW9uUmVzb2x2ZXIiLCJ2YWxpZGF0aW9uU2NoZW1hIiwidXNlQ2FsbGJhY2siLCJkYXRhIiwidmFsaWRhdGUiLCJhYm9ydEVhcmx5IiwidmFsdWVzIiwiZXJyb3JzIiwiaW5uZXIiLCJyZWR1Y2UiLCJhbGxFcnJvcnMiLCJjdXJyZW50RXJyb3IiLCJwYXRoIiwidHlwZSIsIm1lc3NhZ2UiLCJzaWduaW4iLCJ1c2VTdGF0ZSIsImZpbmRFbWFpbCIsInNldEZpbmRFbWFpbCIsInVzZU1lbW8iLCJ5dXAiLCJuYW1lIiwicmVxdWlyZWQiLCJwaG9uZSIsInR5cGVFcnJvciIsInJlc29sdmVyIiwidXNlRm9ybSIsImhhbmRsZVN1Ym1pdCIsInJlZ2lzdGVyIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImFsZXJ0IiwiY29sb3IiLCJiZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsd0JBQXdCLEdBQUcsU0FBM0JBLHdCQUEyQixDQUFDQyxnQkFBRDtBQUFBOztBQUFBLFNBQy9CQyx5REFBVztBQUFBLDBVQUNULGlCQUFPQyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFeUJGLGdCQUFnQixDQUFDRyxRQUFqQixDQUEwQkQsSUFBMUIsRUFBZ0M7QUFDbkRFLDBCQUFVLEVBQUU7QUFEdUMsZUFBaEMsQ0FGekI7O0FBQUE7QUFFVUMsb0JBRlY7QUFBQSwrQ0FNVztBQUNMQSxzQkFBTSxFQUFOQSxNQURLO0FBRUxDLHNCQUFNLEVBQUU7QUFGSCxlQU5YOztBQUFBO0FBQUE7QUFBQTtBQUFBLCtD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QUFBQSxjQURGLGVBcUZFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFDRSxxRUFBQyxvREFBRDtBQUNFLGVBQUssRUFBQyxTQURSO0FBRUUsZ0JBQU0sRUFBQyxTQUZUO0FBR0UsWUFBRSxFQUFDLEdBSEw7QUFJRSxtQkFBTSxPQUpSO0FBS0Usa0JBQVEsRUFBQyxNQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxR0Q7O0lBMUl1QkYsTTtVQVlMZix3QixFQUMwQjBCLHVEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FjY291bnRJZEZpbmQuY2MwZDc5NDEwYWRhMzkwMjgxOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQge1xyXG4gIFRhYnMsXHJcbiAgVGFiTGlzdCxcclxuICBUYWJQYW5lbHMsXHJcbiAgVGFiLFxyXG4gIFRhYlBhbmVsLFxyXG4gIEhlYWRpbmcsXHJcbiAgQ2hha3JhUHJvdmlkZXIsXHJcbiAgSW5wdXQsXHJcbiAgSW5wdXRHcm91cCxcclxuICBJbnB1dExlZnRFbGVtZW50LFxyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgRGl2aWRlcixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBQaG9uZUljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBSaVVzZXJGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcbmltcG9ydCBTaWduTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL1NpZ25MYXlvdXRcIjtcclxuXHJcbmNvbnN0IHVzZVl1cFZhbGlkYXRpb25SZXNvbHZlciA9ICh2YWxpZGF0aW9uU2NoZW1hKSA9PlxyXG4gIHVzZUNhbGxiYWNrKFxyXG4gICAgYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBhd2FpdCB2YWxpZGF0aW9uU2NoZW1hLnZhbGlkYXRlKGRhdGEsIHtcclxuICAgICAgICAgIGFib3J0RWFybHk6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgZXJyb3JzOiB7fSxcclxuICAgICAgICB9O1xyXG4gICAgICB9IGNhdGNoIChlcnJvcnMpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdmFsdWVzOiB7fSxcclxuICAgICAgICAgIGVycm9yczogZXJyb3JzLmlubmVyLnJlZHVjZShcclxuICAgICAgICAgICAgKGFsbEVycm9ycywgY3VycmVudEVycm9yKSA9PiAoe1xyXG4gICAgICAgICAgICAgIC4uLmFsbEVycm9ycyxcclxuICAgICAgICAgICAgICBbY3VycmVudEVycm9yLnBhdGhdOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBjdXJyZW50RXJyb3IudHlwZSA/PyBcInZhbGlkYXRpb25cIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGN1cnJlbnRFcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB7fVxyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3ZhbGlkYXRpb25TY2hlbWFdXHJcbiAgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZ25pbigpIHtcclxuICBjb25zdCBbZmluZEVtYWlsLCBzZXRGaW5kRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRpb25TY2hlbWEgPSB1c2VNZW1vKCgpID0+XHJcbiAgICB5dXAub2JqZWN0KHtcclxuICAgICAgbmFtZTogeXVwLnN0cmluZygpLnJlcXVpcmVkKFwi7J2066aE7J2EIOyeheugpe2VtOyjvOyEuOyalFwiKSxcclxuICAgICAgcGhvbmU6IHl1cFxyXG4gICAgICAgIC5udW1iZXIoKVxyXG4gICAgICAgIC50eXBlRXJyb3IoXCIt7JeG7J20IOyIq+yekOunjCDsnoXroKXtlbTso7zshLjsmpRcIilcclxuICAgICAgICAucmVxdWlyZWQoXCLsoITtmZTrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqUXCIpLFxyXG4gICAgfSlcclxuICApO1xyXG4gIGNvbnN0IHJlc29sdmVyID0gdXNlWXVwVmFsaWRhdGlvblJlc29sdmVyKHZhbGlkYXRpb25TY2hlbWEpO1xyXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCByZWdpc3RlciwgZXJyb3JzIH0gPSB1c2VGb3JtKHsgcmVzb2x2ZXIgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG4gICAgYWxlcnQoXCLshJzrsoTsmYAg7Jew6rKw65CY7Ja07J6I7KeA7JWK7Iq164uI64ukLlwiKVxyXG4gICAgLy8gZmV0Y2gocHJvY2Vzcy5lbnYuTG9jYWxIb3N0ICsgXCIvYWNjb3VudEluZm9GaW5kSWRcIiwge1xyXG4gICAgLy8gICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgLy8gICBoZWFkZXJzOiB7XHJcbiAgICAvLyAgICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgIC8vICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAvLyAgICAgcGhvbmU6IGRhdGEucGhvbmUsXHJcbiAgICAvLyAgIH0pLFxyXG4gICAgLy8gfSlcclxuICAgIC8vICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgIC8vICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgLy8gICAgIGlmIChyZXNbMF0gIT0gbnVsbCkge1xyXG4gICAgLy8gICAgICAgc2V0RmluZEVtYWlsKGDroZzqt7jsnbgg7JWE7J2065SU64qUXFxuJHtyZXNbMF0uZW1haWx9XFxu7J6F64uI64ukYCk7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgIHNldEZpbmRFbWFpbChcIuygleuztOqwgCDsl4bsirXri4jri6QuXFxu7J2066aE6rO8IOuyiO2YuOulvCDtmZXsnbjtlbTso7zshLjsmpRcIik7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENoYWtyYVByb3ZpZGVyPlxyXG4gICAgICA8U2lnbkxheW91dD5cclxuICAgICAgICA8VGFicyBpc0ZpdHRlZCB2YXJpYW50PVwiZW5jbG9zZWQtY29sb3JlZFwiIGRlZmF1bHRJbmRleD17MH0+XHJcbiAgICAgICAgICB7LyogVGFiIFRpdGxlICovfVxyXG4gICAgICAgICAgPFRhYkxpc3QgbWI9XCIxcmVtXCI+XHJcbiAgICAgICAgICAgIDxUYWIgdz1cIjE3NXB4XCIgX3NlbGVjdGVkPXt7IGNvbG9yOiBcIndoaXRlXCIsIGJnOiBcImJsdWUuNTAwXCIgfX0+XHJcbiAgICAgICAgICAgICAg7JWE7J2065SU7LC+6riwXHJcbiAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdz1cIjE3NXB4XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvYWNjb3VudFB3RmluZFwiKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg67mE67CA67KI7Zi47LC+6riwXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9UYWJMaXN0PlxyXG4gICAgICAgICAgPFRhYlBhbmVscz5cclxuICAgICAgICAgICAgPFRhYlBhbmVsPlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiBzaXplPVwibWRcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj1cIjMwcHhcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoaGFuZGxlRm9ybVN1Ym1pdCl9PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBtdD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGVmdEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPXs8UmlVc2VyRmlsbCBjb2xvcj1cImdyYXkuNDAwXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7J2066aEXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICA8Qm94IHBsPXsyfSBjb2xvcj1cInJlZFwiIGZvbnRTaXplPVwiMC44NXJlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvcnMubmFtZT8ubWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDxJbnB1dEdyb3VwIG10PXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMZWZ0RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50cz1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49ezxQaG9uZUljb24gY29sb3I9XCJncmF5LjQwMFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyghO2ZlOuyiO2YuFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgPEJveCBwbD17Mn0gY29sb3I9XCJyZWRcIiBmb250U2l6ZT1cIjAuODVyZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLnBob25lPy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBtdD17NX1cclxuICAgICAgICAgICAgICAgICAgICBtYj17M31cclxuICAgICAgICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaXNGdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIOyhsO2ajO2VmOq4sFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG10PXsxfVxyXG4gICAgICAgICAgICAgICAgICAgIG1iPXsxfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiYmx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaXNGdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvc2lnbmluXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDroZzqt7jsnbjtmZTrqbTsnLzroZxcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8Qm94IHA9XCIwXCIgd2hpdGVTcGFjZT1cInByZS13cmFwXCIgYm9yZGVyPVwiMFwiIHJlYWRPbmx5PlxyXG4gICAgICAgICAgICAgICAgICB7ZmluZEVtYWlsfVxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgPC9UYWJQYW5lbHM+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGNvbG9yPVwiIzAwNzNlOVwiXHJcbiAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxyXG4gICAgICAgICAgICBtdD1cIjNcIlxyXG4gICAgICAgICAgICBmbG9hdD1cInJpZ2h0XCJcclxuICAgICAgICAgICAgZm9udFNpemU9XCIxNXB4XCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg7ZmI7Jy866GcIO+8nlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L1NpZ25MYXlvdXQ+XHJcbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==