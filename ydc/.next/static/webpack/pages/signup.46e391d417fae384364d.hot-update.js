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
      alert("서버와 연결되어있지않습니다."); // fetch(process.env.LocalHost + "/signupCheck", {
      //   method: "post",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     email: changeEmail,
      //   }),
      // })
      //   .then((res) => res.json())
      //   .then((res) => {
      //     if (res[0] == null) {
      //       alert("사용 가능한 이메일입니다.");
      //       setIsCheckEmail(true);
      //     } else {
      //       alert("이미 사용중인 이메일입니다.");
      //     }
      //   });
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
              lineNumber: 190,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
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
            lineNumber: 192,
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
            lineNumber: 200,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          pl: 2,
          color: "red",
          fontSize: "0.85rem",
          children: (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          mt: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputLeftElement"], {
            pointerEvents: "none",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__["LockIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 218,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
            name: "password",
            type: showPassword[0] ? "text" : "password",
            placeholder: "\uBE44\uBC00\uBC88\uD638 \uCD5C\uC18C8\uC5D0\uC11C \uCD5C\uB300 16\uC790\uB9AC",
            ref: register,
            autoComplete: "off"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputRightElement"], {
            children: showPassword[0] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__["ViewIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 230,
              columnNumber: 19
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__["ViewOffIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 19
            }, this),
            onClick: function onClick(e) {
              clickShowButton(0, e);
            },
            cursor: "pointer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 227,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          pl: 2,
          color: "red",
          fontSize: "0.85rem",
          children: (_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          mt: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputLeftElement"], {
            pointerEvents: "none",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__["LockIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 249,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 247,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
            name: "passwordConfirm",
            type: showPassword[1] ? "text" : "password",
            placeholder: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
            ref: register,
            autoComplete: "off"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 251,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputRightElement"], {
            children: showPassword[1] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__["ViewIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 261,
              columnNumber: 19
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__["ViewOffIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 19
            }, this),
            onClick: function onClick(e) {
              clickShowButton(1, e);
            },
            cursor: "pointer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          pl: 2,
          color: "red",
          fontSize: "0.85rem",
          children: (_errors$passwordConfi = errors.passwordConfirm) === null || _errors$passwordConfi === void 0 ? void 0 : _errors$passwordConfi.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          mt: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputLeftElement"], {
            pointerEvents: "none",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_9__["RiUserFill"], {
              color: "#A0AEC0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 280,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 278,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Input"], {
            autoComplete: "off",
            name: "name",
            type: "text",
            placeholder: "\uC774\uB984",
            ref: register
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 282,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 277,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          pl: 2,
          color: "red",
          fontSize: "0.85rem",
          children: (_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputGroup"], {
          mt: 3,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["InputLeftElement"], {
            pointerEvents: "none",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_10__["PhoneIcon"], {
              color: "gray.400"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 296,
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
            lineNumber: 300,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          pl: 2,
          color: "red",
          fontSize: "0.85rem",
          children: (_errors$phone = errors.phone) === null || _errors$phone === void 0 ? void 0 : _errors$phone.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 309,
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
            lineNumber: 322,
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
              lineNumber: 334,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], {
              title: "\uC640\uC774\uB514\uCEE4\uB125\uD2B8\uC0F5 \uC774\uC6A9\uC57D\uAD00",
              content: agreeTos
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 333,
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
              lineNumber: 345,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Modal__WEBPACK_IMPORTED_MODULE_12__["default"], {
              title: "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1 \uBC0F \uC774\uC6A9",
              content: agreePersoanl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 344,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Box"], {
          pl: 2,
          color: "red",
          fontSize: "0.85rem",
          children: (_errors$termsCheck = errors.termsCheck) === null || _errors$termsCheck === void 0 ? void 0 : _errors$termsCheck.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 359,
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
          lineNumber: 364,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__["Divider"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 374,
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
            lineNumber: 378,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 183,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInVzZVl1cFZhbGlkYXRpb25SZXNvbHZlciIsInZhbGlkYXRpb25TY2hlbWEiLCJ1c2VDYWxsYmFjayIsImRhdGEiLCJ2YWxpZGF0ZSIsImFib3J0RWFybHkiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJpbm5lciIsInJlZHVjZSIsImFsbEVycm9ycyIsImN1cnJlbnRFcnJvciIsInBhdGgiLCJ0eXBlIiwibWVzc2FnZSIsInNpZ251cCIsInVzZVN0YXRlIiwiYWdyZWVQZXJzb2FubCIsInNldEFncmVlUGVyc29uYWwiLCJhZ3JlZVRvcyIsInNldEFncmVlVG9zIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiY2xpY2tTaG93QnV0dG9uIiwiaW5kZXgiLCJlIiwidmFsdWUiLCJjaGVja2VkSXRlbXMiLCJzZXRDaGVja2VkSXRlbXMiLCJhbGxDaGVja2VkIiwiZXZlcnkiLCJCb29sZWFuIiwiaXNJbmRldGVybWluYXRlIiwic29tZSIsInVzZU1lbW8iLCJ5dXAiLCJlbWFpbCIsInJlcXVpcmVkIiwicGFzc3dvcmQiLCJtaW4iLCJtYXgiLCJwYXNzd29yZENvbmZpcm0iLCJvbmVPZiIsIm5hbWUiLCJwaG9uZSIsInR5cGVFcnJvciIsInRlcm1zQ2hlY2siLCJyZXNvbHZlciIsInVzZUZvcm0iLCJoYW5kbGVTdWJtaXQiLCJyZWdpc3RlciIsImlzQ2hlY2tFbWFpbCIsInNldElzQ2hlY2tFbWFpbCIsImNoYW5nZUVtYWlsIiwic2V0Q2hhbmdlRW1haWwiLCJjaGFuZ2VQaG9uZSIsInNldENoYW5nZVBob25lIiwiZW1haWxDaGFuZ2UiLCJ0YXJnZXQiLCJwaG9uZUNoYW5nZSIsIkNoZWNrRW1haWwiLCJhbGVydCIsImhhbmRsZUZvcm1TdWJtaXQiLCJmZXRjaCIsInByb2Nlc3MiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwi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LEVBQUUsQ0FGTjtBQUdFLFlBQUUsRUFBRSxDQUhOO0FBSUUscUJBQVcsRUFBQyxNQUpkO0FBS0UsY0FBSSxFQUFDLElBTFA7QUFNRSxxQkFBVyxNQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5MRixlQTZMRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTdMRixlQWdNRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQ0UscUVBQUMsdURBQUQ7QUFDRSxjQUFFLEVBQUUsQ0FETjtBQUVFLHVCQUFXLEVBQUMsTUFGZDtBQUdFLGdCQUFJLEVBQUMsSUFIUDtBQUlFLG1CQUFPLEVBQUMsU0FKVjtBQUtFLHVCQUFXLE1BTGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhNRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa05EOztJQTFVdUJDLE07VUEyRExmLHdCLEVBQzBCZ0QsdUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjQ2ZTM5MWQ0MTdmYWUzODQzNjRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgKiBhcyB5dXAgZnJvbSBcInl1cFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQge1xyXG4gIENoYWtyYVByb3ZpZGVyLFxyXG4gIElucHV0LFxyXG4gIElucHV0R3JvdXAsXHJcbiAgSW5wdXRMZWZ0RWxlbWVudCxcclxuICBJbnB1dFJpZ2h0RWxlbWVudCxcclxuICBCb3gsXHJcbiAgU3RhY2ssXHJcbiAgRmxleCxcclxuICBDaGVja2JveCxcclxuICBCdXR0b24sXHJcbiAgRGl2aWRlcixcclxuICBUZXh0LFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IFJpVXNlckZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuaW1wb3J0IHtcclxuICBFbWFpbEljb24sXHJcbiAgTG9ja0ljb24sXHJcbiAgVmlld0ljb24sXHJcbiAgVmlld09mZkljb24sXHJcbiAgUGhvbmVJY29uLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcblxyXG5pbXBvcnQgU2lnbkxheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9TaWduTGF5b3V0XCI7XHJcbmltcG9ydCBNb2RhbEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Nb2RhbFwiO1xyXG5cclxuY29uc3QgdXNlWXVwVmFsaWRhdGlvblJlc29sdmVyID0gKHZhbGlkYXRpb25TY2hlbWEpID0+XHJcbiAgdXNlQ2FsbGJhY2soXHJcbiAgICBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IGF3YWl0IHZhbGlkYXRpb25TY2hlbWEudmFsaWRhdGUoZGF0YSwge1xyXG4gICAgICAgICAgYWJvcnRFYXJseTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2YWx1ZXMsXHJcbiAgICAgICAgICBlcnJvcnM6IHt9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9ycykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB2YWx1ZXM6IHt9LFxyXG4gICAgICAgICAgZXJyb3JzOiBlcnJvcnMuaW5uZXIucmVkdWNlKFxyXG4gICAgICAgICAgICAoYWxsRXJyb3JzLCBjdXJyZW50RXJyb3IpID0+ICh7XHJcbiAgICAgICAgICAgICAgLi4uYWxsRXJyb3JzLFxyXG4gICAgICAgICAgICAgIFtjdXJyZW50RXJyb3IucGF0aF06IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGN1cnJlbnRFcnJvci50eXBlID8/IFwidmFsaWRhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogY3VycmVudEVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHt9XHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbdmFsaWRhdGlvblNjaGVtYV1cclxuICApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2lnbnVwKCkge1xyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBmZXRjaChwcm9jZXNzLmVudi5Mb2NhbEhvc3QgKyBcIi9zaWdudXBBZ3JlZVwiKVxyXG4gIC8vICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gIC8vICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgLy8gICAgICAgc2V0QWdyZWVUb3MocmVzWzBdLmNvbnRlbnQpO1xyXG4gIC8vICAgICAgIHNldEFncmVlUGVyc29uYWwocmVzWzFdLmNvbnRlbnQpO1xyXG4gIC8vICAgICB9KTtcclxuICAvLyB9KTtcclxuXHJcbiAgY29uc3QgW2FncmVlUGVyc29hbmwsIHNldEFncmVlUGVyc29uYWxdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbYWdyZWVUb3MsIHNldEFncmVlVG9zXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKFtmYWxzZSwgZmFsc2VdKTtcclxuICBjb25zdCBjbGlja1Nob3dCdXR0b24gPSAoaW5kZXgsIGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gc2hvd1Bhc3N3b3JkW2luZGV4XTtcclxuXHJcbiAgICAvLyBUT0RPXHJcbiAgICAvLyDrpqztjKnthqDrp4FcclxuICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICBzZXRTaG93UGFzc3dvcmQoWyF2YWx1ZSwgc2hvd1Bhc3N3b3JkWzFdXSk7XHJcbiAgICB9IGVsc2UgaWYgKGluZGV4ID09PSAxKSB7XHJcbiAgICAgIHNldFNob3dQYXNzd29yZChbc2hvd1Bhc3N3b3JkWzBdLCAhdmFsdWVdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2NoZWNrZWRJdGVtcywgc2V0Q2hlY2tlZEl0ZW1zXSA9IHVzZVN0YXRlKFtmYWxzZSwgZmFsc2VdKTtcclxuICBjb25zdCBhbGxDaGVja2VkID0gY2hlY2tlZEl0ZW1zLmV2ZXJ5KEJvb2xlYW4pO1xyXG4gIGNvbnN0IGlzSW5kZXRlcm1pbmF0ZSA9IGNoZWNrZWRJdGVtcy5zb21lKEJvb2xlYW4pICYmICFhbGxDaGVja2VkO1xyXG5cclxuICBjb25zdCB2YWxpZGF0aW9uU2NoZW1hID0gdXNlTWVtbygoKSA9PlxyXG4gICAgeXVwLm9iamVjdCh7XHJcbiAgICAgIGVtYWlsOiB5dXBcclxuICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAuZW1haWwoXCLsnbTrqZTsnbwg7KO87IaMIO2YleyLneydtCDslYTri5nri4jri6RcIilcclxuICAgICAgICAucmVxdWlyZWQoXCLsnbTrqZTsnbwg7KO87IaM66W8IOyeheugpe2VtOyjvOyEuOyalFwiKSxcclxuICAgICAgcGFzc3dvcmQ6IHl1cFxyXG4gICAgICAgIC5zdHJpbmcoKVxyXG4gICAgICAgIC5taW4oOCwgXCLruYTrsIDrsojtmLjripQg7LWc7IaMIDjrrLjsnpAsIOy1nOuMgCAxNuusuOyekOuhnCDsnoXroKXtlbQg7KO87IS47JqUXCIpXHJcbiAgICAgICAgLm1heCgxNiwgXCLruYTrsIDrsojtmLjripQg7LWc7IaMIDjrrLjsnpAsIOy1nOuMgCAxNuusuOyekOuhnCDsnoXroKXtlbQg7KO87IS47JqUXCIpXHJcbiAgICAgICAgLnJlcXVpcmVkKFwi67mE67CA67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalFwiKSxcclxuICAgICAgcGFzc3dvcmRDb25maXJtOiB5dXBcclxuICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAub25lT2YoW3l1cC5yZWYoXCJwYXNzd29yZFwiKSwgbnVsbF0sIFwi67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6RcIilcclxuICAgICAgICAucmVxdWlyZWQoXCLruYTrsIDrsojtmLjrpbwg7J6F66Cl7ZW07KO87IS47JqUXCIpLFxyXG4gICAgICBuYW1lOiB5dXBcclxuICAgICAgICAuc3RyaW5nKClcclxuICAgICAgICAubWluKDIsIFwi7J2066aE7J2AIOy1nOyGjCAy66y47J6Q66GcIOyeheugpe2VtOyjvOyEuOyalFwiKVxyXG4gICAgICAgIC5yZXF1aXJlZChcIuydtOumhOydhCDsnoXroKXtlbTso7zshLjsmpRcIiksXHJcbiAgICAgIHBob25lOiB5dXBcclxuICAgICAgICAubnVtYmVyKClcclxuICAgICAgICAucmVxdWlyZWQoXCLtnLTrjIDtj7Ag67KI7Zi466W8IOyeheugpe2VtOyjvOyEuOyalFwiKVxyXG4gICAgICAgIC50eXBlRXJyb3IoXCIt7JeG7J20IOyIq+yekOunjCDsnoXroKXtlbTso7zshLjsmpRcIiksXHJcbiAgICAgIHRlcm1zQ2hlY2s6IHl1cFxyXG4gICAgICAgIC5ib29sZWFuKClcclxuICAgICAgICAub25lT2YoW3RydWVdLCBcIuyghOyytCDsnbTsmqnslb3qtIDsl5Ag64+Z7J2Y7ZWY7KeAIOyViuyVmOyKteuLiOuLpFwiKSxcclxuICAgIH0pXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgcmVzb2x2ZXIgPSB1c2VZdXBWYWxpZGF0aW9uUmVzb2x2ZXIodmFsaWRhdGlvblNjaGVtYSk7XHJcbiAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIHJlZ2lzdGVyLCBlcnJvcnMgfSA9IHVzZUZvcm0oeyByZXNvbHZlciB9KTtcclxuXHJcbiAgLy/spJHrs7XssrTtgaxcclxuICBjb25zdCBbaXNDaGVja0VtYWlsLCBzZXRJc0NoZWNrRW1haWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjaGFuZ2VFbWFpbCwgc2V0Q2hhbmdlRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2NoYW5nZVBob25lLCBzZXRDaGFuZ2VQaG9uZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBlbWFpbENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRDaGFuZ2VFbWFpbChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRJc0NoZWNrRW1haWwoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBob25lQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldENoYW5nZVBob25lKGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBDaGVja0VtYWlsID0gKCkgPT4ge1xyXG4gICAgaWYgKGNoYW5nZUVtYWlsID09IFwiXCIpIHtcclxuICAgICAgYWxlcnQoXCLsnbTrqZTsnbzrpbwg7J6F66Cl7ZW07KO87IS47JqUXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQoXCLshJzrsoTsmYAg7Jew6rKw65CY7Ja07J6I7KeA7JWK7Iq164uI64ukLlwiKVxyXG4gICAgICAvLyBmZXRjaChwcm9jZXNzLmVudi5Mb2NhbEhvc3QgKyBcIi9zaWdudXBDaGVja1wiLCB7XHJcbiAgICAgIC8vICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgLy8gICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgIC8vICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAvLyAgICAgZW1haWw6IGNoYW5nZUVtYWlsLFxyXG4gICAgICAvLyAgIH0pLFxyXG4gICAgICAvLyB9KVxyXG4gICAgICAvLyAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC8vICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAvLyAgICAgaWYgKHJlc1swXSA9PSBudWxsKSB7XHJcbiAgICAgIC8vICAgICAgIGFsZXJ0KFwi7IKs7JqpIOqwgOuKpe2VnCDsnbTrqZTsnbzsnoXri4jri6QuXCIpO1xyXG4gICAgICAvLyAgICAgICBzZXRJc0NoZWNrRW1haWwodHJ1ZSk7XHJcbiAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAvLyAgICAgICBhbGVydChcIuydtOuvuCDsgqzsmqnspJHsnbgg7J2066mU7J287J6F64uI64ukLlwiKTtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gKGRhdGEpID0+IHtcclxuICAgIGlmIChpc0NoZWNrRW1haWwpIHtcclxuICAgICAgZmV0Y2gocHJvY2Vzcy5lbnYuTG9jYWxIb3N0ICsgXCIvc2lnbnVwXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgcGhvbmU6IGNoYW5nZVBob25lLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICByZXMuanNvbigpO1xyXG4gICAgICAgIGFsZXJ0KFwi7ZqM7JuQ6rCA7J6F7J20IOyZhOujjOuQmOyXiOyKteuLiOuLpC5cIik7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZiA9IFwiL1wiO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwi7JWE7J2065SUIOykkeuzte2ZleyduOydhCDtlbTso7zshLjsmpRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFrcmFQcm92aWRlcj5cclxuICAgICAgPFNpZ25MYXlvdXQ+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChoYW5kbGVGb3JtU3VibWl0KX0+XHJcbiAgICAgICAgICB7Lyog7J2066mU7J28ICovfVxyXG4gICAgICAgICAgPElucHV0R3JvdXAgbXQ9ezN9PlxyXG4gICAgICAgICAgICA8SW5wdXRMZWZ0RWxlbWVudFxyXG4gICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM9XCJub25lXCJcclxuICAgICAgICAgICAgICBjaGlsZHJlbj17PEVtYWlsSWNvbiBjb2xvcj1cImdyYXkuNDAwXCIgLz59XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuydtOuplOydvFwiXHJcbiAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZW1haWxDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHc9XCI3MHB4XCJcclxuICAgICAgICAgICAgICBmb250U2l6ZT1cIjEzcHhcIlxyXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCItMnB4XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtDaGVja0VtYWlsfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg7KSR67O17ZmV7J24XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgPEJveCBwbD17Mn0gY29sb3I9XCJyZWRcIiBmb250U2l6ZT1cIjAuODVyZW1cIj5cclxuICAgICAgICAgICAge2Vycm9ycy5lbWFpbD8ubWVzc2FnZX1cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIHsvKiDruYTrsIDrsojtmLggKi99XHJcbiAgICAgICAgICA8SW5wdXRHcm91cCBtdD17M30+XHJcbiAgICAgICAgICAgIDxJbnB1dExlZnRFbGVtZW50XHJcbiAgICAgICAgICAgICAgcG9pbnRlckV2ZW50cz1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuPXs8TG9ja0ljb24gY29sb3I9XCJncmF5LjQwMFwiIC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZFswXSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi67mE67CA67KI7Zi4IOy1nOyGjDjsl5DshJwg7LWc64yAIDE27J6Q66asXCJcclxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbnB1dFJpZ2h0RWxlbWVudFxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuPXtcclxuICAgICAgICAgICAgICAgIHNob3dQYXNzd29yZFswXSA/IChcclxuICAgICAgICAgICAgICAgICAgPFZpZXdJY29uIGNvbG9yPVwiZ3JheS40MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPFZpZXdPZmZJY29uIGNvbG9yPVwiZ3JheS40MDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xpY2tTaG93QnV0dG9uKDAsIGUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICA8Qm94IHBsPXsyfSBjb2xvcj1cInJlZFwiIGZvbnRTaXplPVwiMC44NXJlbVwiPlxyXG4gICAgICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkPy5tZXNzYWdlfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgey8qIOu5hOuwgOuyiO2YuCDtmZXsnbggKi99XHJcbiAgICAgICAgICA8SW5wdXRHcm91cCBtdD17M30+XHJcbiAgICAgICAgICAgIDxJbnB1dExlZnRFbGVtZW50XHJcbiAgICAgICAgICAgICAgcG9pbnRlckV2ZW50cz1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIGNoaWxkcmVuPXs8TG9ja0ljb24gY29sb3I9XCJncmF5LjQwMFwiIC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRDb25maXJtXCJcclxuICAgICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmRbMV0gPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuCDtmZXsnbhcIlxyXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPElucHV0UmlnaHRFbGVtZW50XHJcbiAgICAgICAgICAgICAgY2hpbGRyZW49e1xyXG4gICAgICAgICAgICAgICAgc2hvd1Bhc3N3b3JkWzFdID8gKFxyXG4gICAgICAgICAgICAgICAgICA8Vmlld0ljb24gY29sb3I9XCJncmF5LjQwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8Vmlld09mZkljb24gY29sb3I9XCJncmF5LjQwMFwiIC8+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbGlja1Nob3dCdXR0b24oMSwgZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBjdXJzb3I9XCJwb2ludGVyXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgIDxCb3ggcGw9ezJ9IGNvbG9yPVwicmVkXCIgZm9udFNpemU9XCIwLjg1cmVtXCI+XHJcbiAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmRDb25maXJtPy5tZXNzYWdlfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgey8qIOydtOumhCAqL31cclxuICAgICAgICAgIDxJbnB1dEdyb3VwIG10PXszfT5cclxuICAgICAgICAgICAgPElucHV0TGVmdEVsZW1lbnRcclxuICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW49ezxSaVVzZXJGaWxsIGNvbG9yPVwiI0EwQUVDMFwiIC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrpoRcIlxyXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICA8Qm94IHBsPXsyfSBjb2xvcj1cInJlZFwiIGZvbnRTaXplPVwiMC44NXJlbVwiPlxyXG4gICAgICAgICAgICB7ZXJyb3JzLm5hbWU/Lm1lc3NhZ2V9XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICB7Lyog7Zy064yA7Y+wIOuyiO2YuCAqL31cclxuICAgICAgICAgIDxJbnB1dEdyb3VwIG10PXszfT5cclxuICAgICAgICAgICAgPElucHV0TGVmdEVsZW1lbnRcclxuICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgY2hpbGRyZW49ezxQaG9uZUljb24gY29sb3I9XCJncmF5LjQwMFwiIC8+fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIu2ctOuMgO2PsCDrsojtmLggKCAtIOyXhuydtCDsiKvsnpDrp4wpXCJcclxuICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxyXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3Bob25lQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgPEJveCBwbD17Mn0gY29sb3I9XCJyZWRcIiBmb250U2l6ZT1cIjAuODVyZW1cIj5cclxuICAgICAgICAgICAge2Vycm9ycy5waG9uZT8ubWVzc2FnZX1cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIHsvKiDsnbTsmqnslb3qtIAgKi99XHJcbiAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgcD17Mn1cclxuICAgICAgICAgICAgbXQ9ezN9XHJcbiAgICAgICAgICAgIHNwYWNpbmc9ezF9XHJcbiAgICAgICAgICAgIGJvcmRlcj1cIjFweFwiXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yPVwiZ3JheS4yMDBcIlxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCJtZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ0ZXJtc0NoZWNrXCJcclxuICAgICAgICAgICAgICBpc0NoZWNrZWQ9e2FsbENoZWNrZWR9XHJcbiAgICAgICAgICAgICAgaXNJbmRldGVybWluYXRlPXtpc0luZGV0ZXJtaW5hdGV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRDaGVja2VkSXRlbXMoW2UudGFyZ2V0LmNoZWNrZWQsIGUudGFyZ2V0LmNoZWNrZWRdKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDsoITssrQg64+Z7J2YXHJcbiAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgIGlzQ2hlY2tlZD17Y2hlY2tlZEl0ZW1zWzBdfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldENoZWNrZWRJdGVtcyhbZS50YXJnZXQuY2hlY2tlZCwgY2hlY2tlZEl0ZW1zWzFdXSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIOyZgOydtOuUlOy7pOuEpe2KuOyDtSDsnbTsmqnslb3qtIAg64+Z7J2YXHJcbiAgICAgICAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgICAgICAgICA8TW9kYWxCdXR0b24gdGl0bGU9XCLsmYDsnbTrlJTsu6TrhKXtirjsg7Ug7J207Jqp7JW96rSAXCIgY29udGVudD17YWdyZWVUb3N9IC8+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPEZsZXgganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgaXNDaGVja2VkPXtjaGVja2VkSXRlbXNbMV19XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgc2V0Q2hlY2tlZEl0ZW1zKFtjaGVja2VkSXRlbXNbMF0sIGUudGFyZ2V0LmNoZWNrZWRdKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg6rCc7J247KCV67O0IOyImOynkSDrsI8g7J207JqpIOuPmeydmFxyXG4gICAgICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgPE1vZGFsQnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIuqwnOyduOygleuztCDsiJjsp5Eg67CPIOydtOyaqVwiXHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXthZ3JlZVBlcnNvYW5sfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICA8Qm94IHBsPXsyfSBjb2xvcj1cInJlZFwiIGZvbnRTaXplPVwiMC44NXJlbVwiPlxyXG4gICAgICAgICAgICB7ZXJyb3JzLnRlcm1zQ2hlY2s/Lm1lc3NhZ2V9XHJcbiAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICB7Lyog7ZqM7JuQ6rCA7J6FIOuyhO2KvCAqL31cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIG10PXs1fVxyXG4gICAgICAgICAgICBtYj17M31cclxuICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJibHVlXCJcclxuICAgICAgICAgICAgc2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgaXNGdWxsV2lkdGhcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg7ZqM7JuQ6rCA7J6FXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgICAgey8qIOuhnOq3uOyduCDtmZTrqbQg7J2064+ZIOuyhO2KvCAqL31cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBtdD17M31cclxuICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsdWVcIlxyXG4gICAgICAgICAgICAgIHNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgIGlzRnVsbFdpZHRoXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDroZzqt7jsnbhcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L1NpZ25MYXlvdXQ+XHJcbiAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==