webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return signup; });
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
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/esm/index.js");
/* harmony import */ var _components_SignLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SignLayout */ "./components/SignLayout.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");





var _jsxFileName = "C:\\Users\\pijon\\react-tutorial\\YDConnect\\pages\\signup.js",
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

function signup() {
  _s2();

  var _errors$email, _errors$password, _errors$passwordConfi, _errors$name, _errors$phone, _errors$termsCheck;

  // useEffect(() => {
  //   fetch(process.env.LocalHost + "/signupAgree")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setAgreeTos(res[0].content);
  //       setAgreePersonal(res[1].content);
  //     });
  // });
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      agreePersoanl = _useState[0],
      setAgreePersonal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      agreeTos = _useState2[0],
      setAgreeTos = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([false, false]),
      showPassword = _useState3[0],
      setShowPassword = _useState3[1];

  var clickShowButton = function clickShowButton(index, e) {
    var value = showPassword[index]; // TODO
    // 리팩토링

    if (index === 0) {
      setShowPassword([!value, showPassword[1]]);
    } else if (index === 1) {
      setShowPassword([showPassword[0], !value]);
    } else {}
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([false, false]),
      checkedItems = _useState4[0],
      setCheckedItems = _useState4[1];

  var allChecked = checkedItems.every(Boolean);
  var isIndeterminate = checkedItems.some(Boolean) && !allChecked;
  var validationSchema = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return yup__WEBPACK_IMPORTED_MODULE_6__["object"]({
      email: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().email("이메일 주소 형식이 아닙니다").required("이메일 주소를 입력해주세요"),
      password: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(8, "비밀번호는 최소 8문자, 최대 16문자로 입력해 주세요").max(16, "비밀번호는 최소 8문자, 최대 16문자로 입력해 주세요").required("비밀번호를 입력해주세요"),
      passwordConfirm: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().oneOf([yup__WEBPACK_IMPORTED_MODULE_6__["ref"]("password"), null], "비밀번호가 일치하지 않습니다").required("비밀번호를 입력해주세요"),
      name: yup__WEBPACK_IMPORTED_MODULE_6__["string"]().min(2, "이름은 최소 2문자로 입력해주세요").required("이름을 입력해주세요"),
      phone: yup__WEBPACK_IMPORTED_MODULE_6__["number"]().required("휴대폰 번호를 입력해주세요").typeError("-없이 숫자만 입력해주세요"),
      termsCheck: yup__WEBPACK_IMPORTED_MODULE_6__["boolean"]().oneOf([true], "전체 이용약관에 동의하지 않았습니다")
    });
  });
  var resolver = useYupValidationResolver(validationSchema);

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_7__["useForm"])({
    resolver: resolver
  }),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors; //중복체크


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isCheckEmail = _useState5[0],
      setIsCheckEmail = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      changeEmail = _useState6[0],
      setChangeEmail = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      changePhone = _useState7[0],
      setChangePhone = _useState7[1];

  var emailChange = function emailChange(e) {
    setChangeEmail(e.target.value);
    setIsCheckEmail(false);
  };

  var phoneChange = function phoneChange(e) {
    setChangePhone(e.target.value);
  };

  var CheckEmail = function CheckEmail() {
    if (changeEmail == "") {
      alert("이메일를 입력해주세요");
    } else {
      fetch("http://localhost:3001" + "/signupCheck", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: changeEmail
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        if (res[0] == null) {
          alert("사용 가능한 이메일입니다.");
          setIsCheckEmail(true);
        } else {
          alert("이미 사용중인 이메일입니다.");
        }
      });
    }
  };

  var handleFormSubmit = function handleFormSubmit(data) {
    if (isCheckEmail) {
      fetch("http://localhost:3001" + "/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          name: data.name,
          phone: changePhone
        })
      }).then(function (res) {
        res.json();
        alert("회원가입이 완료되었습니다.");
        location.href = "/";
      });
    } else {
      alert("아이디 중복확인을 해주세요");
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["ChakraProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SignLayout__WEBPACK_IMPORTED_MODULE_11__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: handleSubmit(handleFormSubmit),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          mt: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputLeftElement"], {
            pointerEvents: "none",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__["EmailIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
            name: "email",
            type: "email",
            placeholder: "\uC774\uBA54\uC77C",
            ref: register,
            onChange: emailChange,
            autoComplete: "off"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            w: "70px",
            fontSize: "13px",
            fontWeight: "normal",
            letterSpacing: "-2px",
            onClick: CheckEmail,
            children: "\uC911\uBCF5\uD655\uC778"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          pl: 2,
          color: "red",
          fontSize: "0.85rem",
          children: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          mt: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputLeftElement"], {
            pointerEvents: "none",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__["LockIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
            name: "password",
            type: showPassword[0] ? "text" : "password",
            placeholder: "\uBE44\uBC00\uBC88\uD638 \uCD5C\uC18C8\uC5D0\uC11C \uCD5C\uB300 16\uC790\uB9AC",
            ref: register,
            autoComplete: "off"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputRightElement"], {
            children: showPassword[0] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__["ViewIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 19
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__["ViewOffIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 231,
              columnNumber: 19
            }, this),
            onClick: function onClick(e) {
              clickShowButton(0, e);
            },
            cursor: "pointer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          pl: 2,
          color: "red",
          fontSize: "0.85rem",
          children: (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          mt: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputLeftElement"], {
            pointerEvents: "none",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__["LockIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
            name: "passwordConfirm",
            type: showPassword[1] ? "text" : "password",
            placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
            ref: register,
            autoComplete: "off"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputRightElement"], {
            children: showPassword[1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__["ViewIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 260,
              columnNumber: 19
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__["ViewOffIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 19
            }, this),
            onClick: function onClick(e) {
              clickShowButton(1, e);
            },
            cursor: "pointer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          pl: 2,
          color: "red",
          fontSize: "0.85rem",
          children: (_errors$passwordConfi = errors.passwordConfirm) === null || _errors$passwordConfi === void 0 ? void 0 : _errors$passwordConfi.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          mt: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputLeftElement"], {
            pointerEvents: "none",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__["RiUserFill"], {
              color: "#A0AEC0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 279,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 277,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
            autoComplete: "off",
            name: "name",
            type: "text",
            placeholder: "\uC774\uB984",
            ref: register
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          pl: 2,
          color: "red",
          fontSize: "0.85rem",
          children: (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          mt: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputLeftElement"], {
            pointerEvents: "none",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__["PhoneIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 295,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
            name: "phone",
            type: "text",
            placeholder: "\uD734\uB300\uD3F0 \uBC88\uD638 ( - \uC5C6\uC774 \uC22B\uC790\uB9CC)",
            ref: register,
            autoComplete: "off",
            onChange: phoneChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 294,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          pl: 2,
          color: "red",
          fontSize: "0.85rem",
          children: (_errors$phone = errors.phone) === null || _errors$phone === void 0 ? void 0 : _errors$phone.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Stack"], {
          p: 2,
          mt: 3,
          spacing: 1,
          border: "1px",
          borderColor: "gray.200",
          borderRadius: "md",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], {
            name: "termsCheck",
            isChecked: allChecked,
            isIndeterminate: isIndeterminate,
            onChange: function onChange(e) {
              setCheckedItems([e.target.checked, e.target.checked]);
            },
            ref: register,
            children: "\uC804\uCCB4 \uB3D9\uC758"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 321,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
            justify: "space-between",
            align: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], {
              isChecked: checkedItems[0],
              onChange: function onChange(e) {
                setCheckedItems([e.target.checked, checkedItems[1]]);
              },
              children: "\uC640\uC774\uB514\uCEE4\uB125\uD2B8\uC0F5 \uC774\uC6A9\uC57D\uAD00 \uB3D9\uC758"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 333,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], {
              title: "\uC640\uC774\uB514\uCEE4\uB125\uD2B8\uC0F5 \uC774\uC6A9\uC57D\uAD00",
              content: agreeTos
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 341,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 332,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Flex"], {
            justify: "space-between",
            align: "center",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], {
              isChecked: checkedItems[1],
              onChange: function onChange(e) {
                setCheckedItems([checkedItems[0], e.target.checked]);
              },
              children: "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9 \uB3D9\uC758"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 344,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], {
              title: "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9",
              content: agreePersoanl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 352,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 343,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          pl: 2,
          color: "red",
          fontSize: "0.85rem",
          children: (_errors$termsCheck = errors.termsCheck) === null || _errors$termsCheck === void 0 ? void 0 : _errors$termsCheck.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          type: "submit",
          mt: 5,
          mb: 3,
          colorScheme: "blue",
          size: "md",
          isFullWidth: true,
          children: "\uD68C\uC6D0\uAC00\uC785"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 363,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/signin",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Button"], {
            mt: 3,
            colorScheme: "blue",
            size: "md",
            variant: "outline",
            isFullWidth: true,
            children: "\uB85C\uADF8\uC778"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 377,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 182,
    columnNumber: 5
  }, this);
}

_s2(signup, "hO8TUL/3qeLmXkuwrA9qkOVDYVc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInVzZVl1cFZhbGlkYXRpb25SZXNvbHZlciIsInZhbGlkYXRpb25TY2hlbWEiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJ2YWxpZGF0ZSIsImFib3J0RWFybHkiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJpbm5lciIsInJlZHVjZSIsImFsbEVycm9ycyIsImN1cnJlbnRFcnJvciIsInBhdGgiLCJ0eXBlIiwibWVzc2FnZSIsInNpZ251cCIsInVzZVN0YXRlIiwiYWdyZWVQZXJzb2FubCIsInNldEFncmVlUGVyc29uYWwiLCJhZ3JlZVRvcyIsInNldEFncmVlVG9zIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiY2xpY2tTaG93QnV0dG9uIiwiaW5kZXgiLCJlIiwidmFsdWUiLCJjaGVja2VkSXRlbXMiLCJzZXRDaGVja2VkSXRlbXMiLCJhbGxDaGVja2VkIiwiZXZlcnkiLCJCb29sZWFuIiwiaXNJbmRldGVybWluYXRlIiwic29tZSIsInVzZU1lbW8iLCJ5dXAiLCJlbWFpbCIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJtaW4iLCJtYXgiLCJwYXNzd29yZENvbmZpcm0iLCJvbmVPZiIsIm5hbWUiLCJwaG9uZSIsInR5cGVFcnJvciIsInRlcm1zQ2hlY2siLCJyZXNvbHZlciIsInVzZUZvcm0iLCJoYW5kbGVTdWJtaXQiLCJyZWdpc3RlciIsImlzQ2hlY2tFbWFpbCIsInNldElzQ2hlY2tFbWFpbCIsImNoYW5nZUVtYWlsIiwic2V0Q2hhbmdlRW1haWwiLCJjaGFuZ2VQaG9uZSIsInNldENoYW5nZVBob25lIiwiZW1haWxDaGFuZ2UiLCJ0YXJnZXQiLCJwaG9uZUNoYW5nZSIsIkNoZWNrRW1haWwiLCJhbGVydCIsImZldGNoIiwicHJvY2VzcyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiaGFuZGxl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ODk4OGYxZjdkOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0ICogYXMgeXVwIGZyb20gXCJ5dXBcIjtcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHtcclxuICBDaGFrcmFQcm92aWRlcixcclxuICBJbnB1dCxcclxuICBJbnB1dEdyb3VwLFxyXG4gIElucHV0TGVmdEVsZW1lbnQsXHJcbiAgSW5wdXRSaWdodEVsZW1lbnQsXHJcbiAgQm94LFxyXG4gIFN0YWNrLFxyXG4gIEZsZXgsXHJcbiAgQ2hlY2tib3gsXHJcbiAgQnV0dG9uLFxyXG4gIERpdmlkZXIsXHJcbiAgVGV4dCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBSaVVzZXJGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcbmltcG9ydCB7XHJcbiAgRW1haWxJY29uLFxyXG4gIExvY2tJY29uLFxyXG4gIFZpZXdJY29uLFxyXG4gIFZpZXdPZmZJY29uLFxyXG4gIFBob25lSWNvbixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5cclxuaW1wb3J0IFNpZ25MYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2lnbkxheW91dFwiO1xyXG5pbXBvcnQgTW9kYWxCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kYWxcIjtcclxuXHJcbmNvbnN0IHVzZVl1cFZhbGlkYXRpb25SZXNvbHZlciA9ICh2YWxpZGF0aW9uU2NoZW1hKSA9PlxyXG4gIHVzZUNhbGxiYWNrKFxyXG4gICAgYXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBhd2FpdCB2YWxpZGF0aW9uU2NoZW1hLnZhbGlkYXRlKGRhdGEsIHtcclxuICAgICAgICAgIGFib3J0RWFybHk6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdmFsdWVzLFxyXG4gICAgICAgICAgZXJyb3JzOiB7fSxcclxuICAgICAgICB9O1xyXG4gICAgICB9IGNhdGNoIChlcnJvcnMpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdmFsdWVzOiB7fSxcclxuICAgICAgICAgIGVycm9yczogZXJyb3JzLmlubmVyLnJlZHVjZShcclxuICAgICAgICAgICAgKGFsbEVycm9ycywgY3VycmVudEVycm9yKSA9PiAoe1xyXG4gICAgICAgICAgICAgIC4uLmFsbEVycm9ycyxcclxuICAgICAgICAgICAgICBbY3VycmVudEVycm9yLnBhdGhdOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBjdXJyZW50RXJyb3IudHlwZSA/PyBcInZhbGlkYXRpb25cIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGN1cnJlbnRFcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB7fVxyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW3ZhbGlkYXRpb25TY2hlbWFdXHJcbiAgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZ251cCgpIHtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZmV0Y2gocHJvY2Vzcy5lbnYuTG9jYWxIb3N0ICsgXCIvc2lnbnVwQWdyZWVcIilcclxuICAvLyAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAvLyAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gIC8vICAgICAgIHNldEFncmVlVG9zKHJlc1swXS5jb250ZW50KTtcclxuICAvLyAgICAgICBzZXRBZ3JlZVBlcnNvbmFsKHJlc1sxXS5jb250ZW50KTtcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gfSk7XHJcblxyXG4gIGNvbnN0IFthZ3JlZVBlcnNvYW5sLCBzZXRBZ3JlZVBlcnNvbmFsXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2FncmVlVG9zLCBzZXRBZ3JlZVRvc10gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShbZmFsc2UsIGZhbHNlXSk7XHJcbiAgY29uc3QgY2xpY2tTaG93QnV0dG9uID0gKGluZGV4LCBlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHNob3dQYXNzd29yZFtpbmRleF07XHJcblxyXG4gICAgLy8gVE9ET1xyXG4gICAgLy8g66as7Yyp7Yag66eBXHJcbiAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgc2V0U2hvd1Bhc3N3b3JkKFshdmFsdWUsIHNob3dQYXNzd29yZFsxXV0pO1xyXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMSkge1xyXG4gICAgICBzZXRTaG93UGFzc3dvcmQoW3Nob3dQYXNzd29yZFswXSwgIXZhbHVlXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtjaGVja2VkSXRlbXMsIHNldENoZWNrZWRJdGVtc10gPSB1c2VTdGF0ZShbZmFsc2UsIGZhbHNlXSk7XHJcbiAgY29uc3QgYWxsQ2hlY2tlZCA9IGNoZWNrZWRJdGVtcy5ldmVyeShCb29sZWFuKTtcclxuICBjb25zdCBpc0luZGV0ZXJtaW5hdGUgPSBjaGVja2VkSXRlbXMuc29tZShCb29sZWFuKSAmJiAhYWxsQ2hlY2tlZDtcclxuXHJcbiAgY29uc3QgdmFsaWRhdGlvblNjaGVtYSA9IHVzZU1lbW8oKCkgPT5cclxuICAgIHl1cC5vYmplY3Qoe1xyXG4gICAgICBlbWFpbDogeXVwXHJcbiAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgLmVtYWlsKFwi7J2066mU7J28IOyjvOyGjCDtmJXsi53snbQg7JWE64uZ64uI64ukXCIpXHJcbiAgICAgICAgLnJlcXVpcmVkKFwi7J2066mU7J28IOyjvOyGjOulvCDsnoXroKXtlbTso7zshLjsmpRcIiksXHJcbiAgICAgIHBhc3N3b3JkOiB5dXBcclxuICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAubWluKDgsIFwi67mE67CA67KI7Zi464qUIOy1nOyGjCA466y47J6QLCDstZzrjIAgMTbrrLjsnpDroZwg7J6F66Cl7ZW0IOyjvOyEuOyalFwiKVxyXG4gICAgICAgIC5tYXgoMTYsIFwi67mE67CA67KI7Zi464qUIOy1nOyGjCA466y47J6QLCDstZzrjIAgMTbrrLjsnpDroZwg7J6F66Cl7ZW0IOyjvOyEuOyalFwiKVxyXG4gICAgICAgIC5yZXF1aXJlZChcIuu5hOuwgOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpRcIiksXHJcbiAgICAgIHBhc3N3b3JkQ29uZmlybTogeXVwXHJcbiAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgLm9uZU9mKFt5dXAucmVmKFwicGFzc3dvcmRcIiksIG51bGxdLCBcIuu5hOuwgOuyiO2YuOqwgCDsnbzsuZjtlZjsp4Ag7JWK7Iq164uI64ukXCIpXHJcbiAgICAgICAgLnJlcXVpcmVkKFwi67mE67CA67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalFwiKSxcclxuICAgICAgbmFtZTogeXVwXHJcbiAgICAgICAgLnN0cmluZygpXHJcbiAgICAgICAgLm1pbigyLCBcIuydtOumhOydgCDstZzshowgMuusuOyekOuhnCDsnoXroKXtlbTso7zshLjsmpRcIilcclxuICAgICAgICAucmVxdWlyZWQoXCLsnbTrpoTsnYQg7J6F66Cl7ZW07KO87IS47JqUXCIpLFxyXG4gICAgICBwaG9uZTogeXVwXHJcbiAgICAgICAgLm51bWJlcigpXHJcbiAgICAgICAgLnJlcXVpcmVkKFwi7Zy064yA7Y+wIOuyiO2YuOulvCDsnoXroKXtlbTso7zshLjsmpRcIilcclxuICAgICAgICAudHlwZUVycm9yKFwiLeyXhuydtCDsiKvsnpDrp4wg7J6F66Cl7ZW07KO87IS47JqUXCIpLFxyXG4gICAgICB0ZXJtc0NoZWNrOiB5dXBcclxuICAgICAgICAuYm9vbGVhbigpXHJcbiAgICAgICAgLm9uZU9mKFt0cnVlXSwgXCLsoITssrQg7J207Jqp7JW96rSA7JeQIOuPmeydmO2VmOyngCDslYrslZjsirXri4jri6RcIiksXHJcbiAgICB9KVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHJlc29sdmVyID0gdXNlWXVwVmFsaWRhdGlvblJlc29sdmVyKHZhbGlkYXRpb25TY2hlbWEpO1xyXG4gIGNvbnN0IHsgaGFuZGxlU3VibWl0LCByZWdpc3RlciwgZXJyb3JzIH0gPSB1c2VGb3JtKHsgcmVzb2x2ZXIgfSk7XHJcblxyXG4gIC8v7KSR67O17LK07YGsXHJcbiAgY29uc3QgW2lzQ2hlY2tFbWFpbCwgc2V0SXNDaGVja0VtYWlsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2hhbmdlRW1haWwsIHNldENoYW5nZUVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjaGFuZ2VQaG9uZSwgc2V0Q2hhbmdlUGhvbmVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgZW1haWxDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q2hhbmdlRW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0SXNDaGVja0VtYWlsKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwaG9uZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRDaGFuZ2VQaG9uZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgQ2hlY2tFbWFpbCA9ICgpID0+IHtcclxuICAgIGlmIChjaGFuZ2VFbWFpbCA9PSBcIlwiKSB7XHJcbiAgICAgIGFsZXJ0KFwi7J2066mU7J2866W8IOyeheugpe2VtOyjvOyEuOyalFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZldGNoKHByb2Nlc3MuZW52LkxvY2FsSG9zdCArIFwiL3NpZ251cENoZWNrXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBlbWFpbDogY2hhbmdlRW1haWwsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzWzBdID09IG51bGwpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCLsgqzsmqkg6rCA64ql7ZWcIOydtOuplOydvOyeheuLiOuLpC5cIik7XHJcbiAgICAgICAgICAgIHNldElzQ2hlY2tFbWFpbCh0cnVlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi7J2066+4IOyCrOyaqeykkeyduCDsnbTrqZTsnbzsnoXri4jri6QuXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGlzQ2hlY2tFbWFpbCkge1xyXG4gICAgICBmZXRjaChwcm9jZXNzLmVudi5Mb2NhbEhvc3QgKyBcIi9zaWdudXBcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICBwaG9uZTogY2hhbmdlUGhvbmUsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJlcy5qc29uKCk7XHJcbiAgICAgICAgYWxlcnQoXCLtmozsm5DqsIDsnoXsnbQg7JmE66OM65CY7JeI7Iq164uI64ukLlwiKTtcclxuICAgICAgICBsb2NhdGlvbi5ocmVmID0gXCIvXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCLslYTsnbTrlJQg7KSR67O17ZmV7J247J2EIO2VtOyjvOyEuOyalFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENoYWtyYVByb3ZpZGVyPlxyXG4gICAgICA8U2lnbkxheW91dD5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KGhhbmRsZUZvcm1TdWJtaXQpfT5cclxuICAgICAgICAgIHsvKiDsnbTrqZTsnbwgKi99XHJcbiAgICAgICAgICA8SW5wdXRHcm91cCBtdD17M30+XHJcbiAgICAgICAgICAgIDxJbnB1dExlZnRFbGVtZW50XHJcbiAgICAgICAgICAgICAgcG9pbnRlckV2ZW50cz1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuPXs8RW1haWxJY29uIGNvbG9yPVwiZ3JheS40MDBcIiAvPn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7J2066mU7J28XCJcclxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlbWFpbENoYW5nZX1cclxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdz1cIjcwcHhcIlxyXG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMTNweFwiXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodD1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZz1cIi0ycHhcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e0NoZWNrRW1haWx9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDspJHrs7XtmZXsnbhcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICA8Qm94IHBsPXsyfSBjb2xvcj1cInJlZFwiIGZvbnRTaXplPVwiMC44NXJlbVwiPlxyXG4gICAgICAgICAgICB7ZXJyb3JzLmVtYWlsPy5tZXNzYWdlfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgey8qIOu5hOuwgOuyiO2YuCAqL31cclxuICAgICAgICAgIDxJbnB1dEdyb3VwIG10PXszfT5cclxuICAgICAgICAgICAgPElucHV0TGVmdEVsZW1lbnRcclxuICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW49ezxMb2NrSWNvbiBjb2xvcj1cImdyYXkuNDAwXCIgLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkWzBdID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLruYTrsIDrsojtmLgg7LWc7IaMOOyXkOyEnCDstZzrjIAgMTbsnpDrpqxcIlxyXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0UmlnaHRFbGVtZW50XHJcbiAgICAgICAgICAgICAgY2hpbGRyZW49e1xyXG4gICAgICAgICAgICAgICAgc2hvd1Bhc3N3b3JkWzBdID8gKFxyXG4gICAgICAgICAgICAgICAgICA8Vmlld0ljb24gY29sb3I9XCJncmF5LjQwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8Vmlld09mZkljb24gY29sb3I9XCJncmF5LjQwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGlja1Nob3dCdXR0b24oMCwgZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgIDxCb3ggcGw9ezJ9IGNvbG9yPVwicmVkXCIgZm9udFNpemU9XCIwLjg1cmVtXCI+XHJcbiAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQ/Lm1lc3NhZ2V9XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICB7Lyog67mE67CA67KI7Zi4IO2ZleyduCAqL31cclxuICAgICAgICAgIDxJbnB1dEdyb3VwIG10PXszfT5cclxuICAgICAgICAgICAgPElucHV0TGVmdEVsZW1lbnRcclxuICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW49ezxMb2NrSWNvbiBjb2xvcj1cImdyYXkuNDAwXCIgLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZENvbmZpcm1cIlxyXG4gICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZFsxXSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4IO2ZleyduFwiXHJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRSaWdodEVsZW1lbnRcclxuICAgICAgICAgICAgICBjaGlsZHJlbj17XHJcbiAgICAgICAgICAgICAgICBzaG93UGFzc3dvcmRbMV0gPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxWaWV3SWNvbiBjb2xvcj1cImdyYXkuNDAwXCIgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxWaWV3T2ZmSWNvbiBjb2xvcj1cImdyYXkuNDAwXCIgLz5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsaWNrU2hvd0J1dHRvbigxLCBlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgPEJveCBwbD17Mn0gY29sb3I9XCJyZWRcIiBmb250U2l6ZT1cIjAuODVyZW1cIj5cclxuICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZENvbmZpcm0/Lm1lc3NhZ2V9XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICB7Lyog7J2066aEICovfVxyXG4gICAgICAgICAgPElucHV0R3JvdXAgbXQ9ezN9PlxyXG4gICAgICAgICAgICA8SW5wdXRMZWZ0RWxlbWVudFxyXG4gICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM9XCJub25lXCJcclxuICAgICAgICAgICAgICBjaGlsZHJlbj17PFJpVXNlckZpbGwgY29sb3I9XCIjQTBBRUMwXCIgLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOumhFwiXHJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgIDxCb3ggcGw9ezJ9IGNvbG9yPVwicmVkXCIgZm9udFNpemU9XCIwLjg1cmVtXCI+XHJcbiAgICAgICAgICAgIHtlcnJvcnMubmFtZT8ubWVzc2FnZX1cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIHsvKiDtnLTrjIDtj7Ag67KI7Zi4ICovfVxyXG4gICAgICAgICAgPElucHV0R3JvdXAgbXQ9ezN9PlxyXG4gICAgICAgICAgICA8SW5wdXRMZWZ0RWxlbWVudFxyXG4gICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM9XCJub25lXCJcclxuICAgICAgICAgICAgICBjaGlsZHJlbj17PFBob25lSWNvbiBjb2xvcj1cImdyYXkuNDAwXCIgLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Zy064yA7Y+wIOuyiO2YuCAoIC0g7JeG7J20IOyIq+yekOunjClcIlxyXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17cGhvbmVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICA8Qm94IHBsPXsyfSBjb2xvcj1cInJlZFwiIGZvbnRTaXplPVwiMC44NXJlbVwiPlxyXG4gICAgICAgICAgICB7ZXJyb3JzLnBob25lPy5tZXNzYWdlfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgey8qIOydtOyaqeyVveq0gCAqL31cclxuICAgICAgICAgIDxTdGFja1xyXG4gICAgICAgICAgICBwPXsyfVxyXG4gICAgICAgICAgICBtdD17M31cclxuICAgICAgICAgICAgc3BhY2luZz17MX1cclxuICAgICAgICAgICAgYm9yZGVyPVwiMXB4XCJcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I9XCJncmF5LjIwMFwiXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIm1kXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgbmFtZT1cInRlcm1zQ2hlY2tcIlxyXG4gICAgICAgICAgICAgIGlzQ2hlY2tlZD17YWxsQ2hlY2tlZH1cclxuICAgICAgICAgICAgICBpc0luZGV0ZXJtaW5hdGU9e2lzSW5kZXRlcm1pbmF0ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldENoZWNrZWRJdGVtcyhbZS50YXJnZXQuY2hlY2tlZCwgZS50YXJnZXQuY2hlY2tlZF0pO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOyghOyytCDrj5nsnZhcclxuICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgPEZsZXgganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgaXNDaGVja2VkPXtjaGVja2VkSXRlbXNbMF19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0Q2hlY2tlZEl0ZW1zKFtlLnRhcmdldC5jaGVja2VkLCBjaGVja2VkSXRlbXNbMV1dKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg7JmA7J2065SU7Luk64Sl7Yq47IO1IOydtOyaqeyVveq0gCDrj5nsnZhcclxuICAgICAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAgICAgIDxNb2RhbEJ1dHRvbiB0aXRsZT1cIuyZgOydtOuUlOy7pOuEpe2KuOyDtSDsnbTsmqnslb3qtIBcIiBjb250ZW50PXthZ3JlZVRvc30gLz5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8RmxleCBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICBpc0NoZWNrZWQ9e2NoZWNrZWRJdGVtc1sxXX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRDaGVja2VkSXRlbXMoW2NoZWNrZWRJdGVtc1swXSwgZS50YXJnZXQuY2hlY2tlZF0pO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDqsJzsnbjsoJXrs7Qg7IiY7KeRIOuwjyDsnbTsmqkg64+Z7J2YXHJcbiAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICA8TW9kYWxCdXR0b25cclxuICAgICAgICAgICAgICAgIHRpdGxlPVwi6rCc7J247KCV67O0IOyImOynkSDrsI8g7J207JqpXCJcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2FncmVlUGVyc29hbmx9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgIDxCb3ggcGw9ezJ9IGNvbG9yPVwicmVkXCIgZm9udFNpemU9XCIwLjg1cmVtXCI+XHJcbiAgICAgICAgICAgIHtlcnJvcnMudGVybXNDaGVjaz8ubWVzc2FnZX1cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIHsvKiDtmozsm5DqsIDsnoUg67KE7Yq8ICovfVxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgbXQ9ezV9XHJcbiAgICAgICAgICAgIG1iPXszfVxyXG4gICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsdWVcIlxyXG4gICAgICAgICAgICBzaXplPVwibWRcIlxyXG4gICAgICAgICAgICBpc0Z1bGxXaWR0aFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICDtmozsm5DqsIDsnoVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgICB7Lyog66Gc6re47J24IO2ZlOuptCDsnbTrj5kg67KE7Yq8ICovfVxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduaW5cIj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG10PXszfVxyXG4gICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwiYmx1ZVwiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgaXNGdWxsV2lkdGhcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOuhnOq3uOyduFxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvU2lnbkxheW91dD5cclxuICAgIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9