"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/searchSectionMain/search.tsx":
/*!*****************************************************!*\
  !*** ./src/components/searchSectionMain/search.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 128px 64px;\\n  background-color: \",\n        \";\\n  width: 100%;\\n  box-sizing: border-box;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  gap: 48px;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    text-align: center;\\n    \",\n        \"\\n    max-width: 900px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  \",\n        \"\\n  max-width: 1131px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  align-items: center;\\n  background-color: white;\\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\\n  border-radius: 4px;\\n  padding: 8px;\\n  padding-right: 24px;\\n  width: 1440px;\\n  @media (max-width: 1920px) {\\n    padding-right: 20px;\\n    width: 1080px;\\n  }\\n  height: 64px;\\n  margin-top: 92px;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  flex-grow: 1;\\n  border: none;\\n  outline: none;\\n  padding: 12px;\\n  padding-left: 24px;\\n  \",\n        \"\\n  @media (max-width: 1920px) {\\n    padding-left: 16px;\\n    \",\n        \"\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background-color: transparent;\\n  border: none;\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    font-size: 32px;\\n  @media (max-width: 1920px) {\\n    font-size: 28px;\\n  }\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  align-items: center;\\n  background-color: white;\\n  border: 1px solid #ccc;\\n  border-radius: 4px;\\n  position: relative;\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: 8px;\\n  border: none;\\n  outline: none;\\n  -webkit-appearance: none;  /* Removes default style of select in WebKit browsers */\\n  -moz-appearance: none;     /* Removes default style of select in Firefox */\\n  appearance: none;          /* Removes default style of select */\\n  flex-grow: 1;\\n\"\n    ]);\n    _templateObject9 = function _templateObject9() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\nvar MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"search__MainContainer\",\n    componentId: \"sc-c8155eb6-0\"\n})(_templateObject(), _styles_theme__WEBPACK_IMPORTED_MODULE_3__.colors.superLighBlue);\n_c = MainContainer;\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"search__TextContainer\",\n    componentId: \"sc-c8155eb6-1\"\n})(_templateObject1());\n_c1 = TextContainer;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].h1.withConfig({\n    displayName: \"search__Title\",\n    componentId: \"sc-c8155eb6-2\"\n})(_templateObject2(), _styles_theme__WEBPACK_IMPORTED_MODULE_3__.fonts.Bolded48);\n_c2 = Title;\n// Description text\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].p.withConfig({\n    displayName: \"search__Description\",\n    componentId: \"sc-c8155eb6-3\"\n})(_templateObject3(), _styles_theme__WEBPACK_IMPORTED_MODULE_3__.fonts.H500);\n_c3 = Description;\nvar SearchBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"search__SearchBarContainer\",\n    componentId: \"sc-c8155eb6-4\"\n})(_templateObject4());\n_c4 = SearchBarContainer;\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].input.withConfig({\n    displayName: \"search__Input\",\n    componentId: \"sc-c8155eb6-5\"\n})(_templateObject5(), _styles_theme__WEBPACK_IMPORTED_MODULE_3__.fonts.H500, _styles_theme__WEBPACK_IMPORTED_MODULE_3__.fonts.H400);\n_c5 = Input;\nvar SearchButton = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].button.withConfig({\n    displayName: \"search__SearchButton\",\n    componentId: \"sc-c8155eb6-6\"\n})(_templateObject6());\n_c6 = SearchButton;\nvar StyledIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon).withConfig({\n    displayName: \"search__StyledIcon\",\n    componentId: \"sc-c8155eb6-7\"\n})(_templateObject7());\n_c7 = StyledIcon;\nvar SelectContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div.withConfig({\n    displayName: \"search__SelectContainer\",\n    componentId: \"sc-c8155eb6-8\"\n})(_templateObject8());\nvar StyledSelect = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].select.withConfig({\n    displayName: \"search__StyledSelect\",\n    componentId: \"sc-c8155eb6-9\"\n})(_templateObject9());\n// React component\nvar NoteComponent = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MainContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Title, {\n                        children: \"Look into institutions featuring classes with pre-arranged notes.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hashimsyed/Desktop/StudySnap-App/src/components/searchSectionMain/search.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Description, {\n                        children: \"We offer pre-prepared course summaries and exams for your convenience.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hashimsyed/Desktop/StudySnap-App/src/components/searchSectionMain/search.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hashimsyed/Desktop/StudySnap-App/src/components/searchSectionMain/search.tsx\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SearchBarContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Input, {\n                        type: \"text\",\n                        placeholder: \"Search for your university\",\n                        value: \"\",\n                        onChange: function(e) {\n                            return console.log(e.target.value);\n                        },\n                        onKeyDown: function(e) {\n                            return console.log(e);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/hashimsyed/Desktop/StudySnap-App/src/components/searchSectionMain/search.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SearchButton, {\n                        onClick: function() {\n                            return console.log(\"clicked\");\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faMagnifyingGlass\n                        }, void 0, false, {\n                            fileName: \"/Users/hashimsyed/Desktop/StudySnap-App/src/components/searchSectionMain/search.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 7\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hashimsyed/Desktop/StudySnap-App/src/components/searchSectionMain/search.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hashimsyed/Desktop/StudySnap-App/src/components/searchSectionMain/search.tsx\",\n                lineNumber: 113,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hashimsyed/Desktop/StudySnap-App/src/components/searchSectionMain/search.tsx\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, _this);\n};\n_c8 = NoteComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoteComponent);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"MainContainer\");\n$RefreshReg$(_c1, \"TextContainer\");\n$RefreshReg$(_c2, \"Title\");\n$RefreshReg$(_c3, \"Description\");\n$RefreshReg$(_c4, \"SearchBarContainer\");\n$RefreshReg$(_c5, \"Input\");\n$RefreshReg$(_c6, \"SearchButton\");\n$RefreshReg$(_c7, \"StyledIcon\");\n$RefreshReg$(_c8, \"NoteComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWFyY2hTZWN0aW9uTWFpbi9zZWFyY2gudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUNlO0FBQ2dCO0FBQ0w7QUFHakUsSUFBTU0sYUFBYSxHQUFHTCx3RUFBVTs7O3NCQUtWQywrREFBb0IsQ0FHekM7QUFSS0ksS0FBQUEsYUFBYTtBQVVuQixJQUFNRyxhQUFhLEdBQUdSLHdFQUFVOzs7c0JBSy9CO0FBTEtRLE1BQUFBLGFBQWE7QUFPbkIsSUFBTUMsS0FBSyxHQUFHVCx1RUFBUzs7O3VCQUVqQkUseURBQWMsQ0FFbkI7QUFKS08sTUFBQUEsS0FBSztBQU1YLG1CQUFtQjtBQUNuQixJQUFNRyxXQUFXLEdBQUdaLHNFQUFROzs7dUJBQ3hCRSxxREFBVSxDQUViO0FBSEtVLE1BQUFBLFdBQVc7QUFLakIsSUFBTUcsa0JBQWtCLEdBQUdmLHdFQUFVOzs7c0JBZXBDO0FBZktlLE1BQUFBLGtCQUFrQjtBQWlCeEIsSUFBTUMsS0FBSyxHQUFHaEIsMEVBQVk7Ozt1QkFNdEJFLHFEQUFVLEVBR1JBLHFEQUFVLENBRWY7QUFYS2MsTUFBQUEsS0FBSztBQWFYLElBQU1HLFlBQVksR0FBR25CLDJFQUFhOzs7c0JBTWpDO0FBTkttQixNQUFBQSxZQUFZO0FBUWxCLElBQU1FLFVBQVUsR0FBR3JCLDZEQUFNLENBQUNJLDJFQUFlLENBQUM7OztzQkFLekM7QUFMS2lCLE1BQUFBLFVBQVU7QUFNaEIsSUFBTUMsZUFBZSxHQUFHdEIsd0VBQVU7OztzQkFPakM7QUFFRCxJQUFNdUIsWUFBWSxHQUFHdkIsMkVBQWE7OztzQkFRakM7QUFHRCxrQkFBa0I7QUFDbEIsSUFBTXlCLGFBQWEsR0FBYSxXQUFNO0lBQ3BDLHFCQUNFLDhEQUFDcEIsYUFBYTs7MEJBQ1YsOERBQUNHLGFBQWE7O2tDQUNWLDhEQUFDQyxLQUFLO2tDQUFDLG1FQUVQOzs7Ozs2QkFBUTtrQ0FDUiw4REFBQ0csV0FBVztrQ0FBQyx3RUFFYjs7Ozs7NkJBQWM7Ozs7OztxQkFDRjswQkFDaEIsOERBQUNHLGtCQUFrQjs7a0NBQ3JCLDhEQUFDQyxLQUFLO3dCQUNKVSxJQUFJLEVBQUMsTUFBTTt3QkFDWEMsV0FBVyxFQUFDLDRCQUE0Qjt3QkFDeENDLEtBQUssRUFBRSxFQUFFO3dCQUNUQyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQzttQ0FBS0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsQ0FBQ0csTUFBTSxDQUFDTCxLQUFLLENBQUM7eUJBQUE7d0JBQzVDTSxTQUFTLEVBQUUsU0FBQ0osQ0FBQzttQ0FBS0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLENBQUMsQ0FBQzt5QkFBQTs7Ozs7NkJBQ2hDO2tDQUNGLDhEQUFDWCxZQUFZO3dCQUFDZ0IsT0FBTyxFQUFFO21DQUFNSixPQUFPLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7eUJBQUE7a0NBQ25ELDRFQUFDWCxVQUFVOzRCQUFDZSxJQUFJLEVBQUVqQyxnRkFBaUI7Ozs7O2lDQUFJOzs7Ozs2QkFFeEI7Ozs7OztxQkFDSTs7Ozs7O2FBQ0wsQ0FFaEI7QUFDSixDQUFDO0FBM0JLc0IsTUFBQUEsYUFBYTtBQTZCbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9zZWFyY2hTZWN0aW9uTWFpbi9zZWFyY2gudHN4P2I2ZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgY29sb3JzLCBmb250cyB9IGZyb20gJy4uLy4uLy4uL3N0eWxlcy90aGVtZSc7XG5pbXBvcnQgeyBmYU1hZ25pZnlpbmdHbGFzcyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5cbmNvbnN0IE1haW5Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMjhweCA2NHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9ycy5zdXBlckxpZ2hCbHVlfTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5gO1xuXG5jb25zdCBUZXh0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0OHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICR7Zm9udHMuQm9sZGVkNDh9XG4gICAgbWF4LXdpZHRoOiA5MDBweDtcbmA7XG5cbi8vIERlc2NyaXB0aW9uIHRleHRcbmNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXG4gICR7Zm9udHMuSDUwMH1cbiAgbWF4LXdpZHRoOiAxMTMxcHg7XG5gO1xuXG5jb25zdCBTZWFyY2hCYXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgd2lkdGg6IDE0NDBweDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE5MjBweCkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDEwODBweDtcbiAgfVxuICBoZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbi10b3A6IDkycHg7XG5gO1xuXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcbiAgZmxleC1ncm93OiAxO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgJHtmb250cy5INTAwfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTkyMHB4KSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICR7Zm9udHMuSDQwMH1cbiAgfVxuYDtcblxuY29uc3QgU2VhcmNoQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgU3R5bGVkSWNvbiA9IHN0eWxlZChGb250QXdlc29tZUljb24pYFxuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE5MjBweCkge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuYFxuY29uc3QgU2VsZWN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkU2VsZWN0ID0gc3R5bGVkLnNlbGVjdGBcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgIC8qIFJlbW92ZXMgZGVmYXVsdCBzdHlsZSBvZiBzZWxlY3QgaW4gV2ViS2l0IGJyb3dzZXJzICovXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTsgICAgIC8qIFJlbW92ZXMgZGVmYXVsdCBzdHlsZSBvZiBzZWxlY3QgaW4gRmlyZWZveCAqL1xuICBhcHBlYXJhbmNlOiBub25lOyAgICAgICAgICAvKiBSZW1vdmVzIGRlZmF1bHQgc3R5bGUgb2Ygc2VsZWN0ICovXG4gIGZsZXgtZ3JvdzogMTtcbmA7XG5cblxuLy8gUmVhY3QgY29tcG9uZW50XG5jb25zdCBOb3RlQ29tcG9uZW50OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TWFpbkNvbnRhaW5lcj5cbiAgICAgICAgPFRleHRDb250YWluZXI+XG4gICAgICAgICAgICA8VGl0bGU+XG4gICAgICAgICAgICAgTG9vayBpbnRvIGluc3RpdHV0aW9ucyBmZWF0dXJpbmcgY2xhc3NlcyB3aXRoIHByZS1hcnJhbmdlZCBub3Rlcy5cbiAgICAgICAgICAgIDwvVGl0bGU+XG4gICAgICAgICAgICA8RGVzY3JpcHRpb24+XG4gICAgICAgICAgICBXZSBvZmZlciBwcmUtcHJlcGFyZWQgY291cnNlIHN1bW1hcmllcyBhbmQgZXhhbXMgZm9yIHlvdXIgY29udmVuaWVuY2UuXG4gICAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxuICAgICAgICA8L1RleHRDb250YWluZXI+XG4gICAgICAgIDxTZWFyY2hCYXJDb250YWluZXI+XG4gICAgICA8SW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgeW91ciB1bml2ZXJzaXR5XCJcbiAgICAgICAgdmFsdWU9e1wiXCJ9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBvbktleURvd249eyhlKSA9PiBjb25zb2xlLmxvZyhlKX1cbiAgICAgIC8+XG4gICAgICA8U2VhcmNoQnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdjbGlja2VkJyl9PlxuICAgICAgPFN0eWxlZEljb24gaWNvbj17ZmFNYWduaWZ5aW5nR2xhc3N9IC8+XG5cbiAgICAgIDwvU2VhcmNoQnV0dG9uPlxuICAgIDwvU2VhcmNoQmFyQ29udGFpbmVyPlxuICAgIDwvTWFpbkNvbnRhaW5lcj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90ZUNvbXBvbmVudDsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJjb2xvcnMiLCJmb250cyIsImZhTWFnbmlmeWluZ0dsYXNzIiwiRm9udEF3ZXNvbWVJY29uIiwiTWFpbkNvbnRhaW5lciIsImRpdiIsInN1cGVyTGlnaEJsdWUiLCJUZXh0Q29udGFpbmVyIiwiVGl0bGUiLCJoMSIsIkJvbGRlZDQ4IiwiRGVzY3JpcHRpb24iLCJwIiwiSDUwMCIsIlNlYXJjaEJhckNvbnRhaW5lciIsIklucHV0IiwiaW5wdXQiLCJINDAwIiwiU2VhcmNoQnV0dG9uIiwiYnV0dG9uIiwiU3R5bGVkSWNvbiIsIlNlbGVjdENvbnRhaW5lciIsIlN0eWxlZFNlbGVjdCIsInNlbGVjdCIsIk5vdGVDb21wb25lbnQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJvbktleURvd24iLCJvbkNsaWNrIiwiaWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/searchSectionMain/search.tsx\n"));

/***/ })

});