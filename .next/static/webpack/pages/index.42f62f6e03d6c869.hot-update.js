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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/theme */ \"./styles/theme.ts\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _utils_imageLists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/imageLists */ \"./src/utils/imageLists.ts\");\n\nvar _this = undefined;\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 128px 64px;\\n  background-color: \",\n        \";\\n  width: 100%;\\n  box-sizing: border-box;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  gap: 48px;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    text-align: center;\\n    \",\n        \"\\n    max-width: 900px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  \",\n        \"\\n  max-width: 1131px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  align-items: center;\\n  background-color: white;\\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\\n  border-radius: 4px;\\n  padding: 8px;\\n  padding-right: 24px;\\n  width: 1440px;\\n  @media (max-width: 1920px) {\\n    padding-right: 20px;\\n    width: 1080px;\\n  }\\n  height: 64px;\\n  margin-top: 92px;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  flex-grow: 1;\\n  border: none;\\n  outline: none;\\n  padding: 12px;\\n  padding-left: 24px;\\n  \",\n        \"\\n  @media (max-width: 1920px) {\\n    padding-left: 16px;\\n    \",\n        \"\\n  }\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background-color: transparent;\\n  border: none;\\n  cursor: pointer;\\n  display: flex;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    font-size: 32px;\\n  @media (max-width: 1920px) {\\n    font-size: 28px;\\n  }\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  margin-top: 64px;\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr); // 4 equal columns\\n  grid-template-rows: repeat(3, auto); // 3 rows, size determined by content\\n  gap: 132px; // Keeping the same gap as before\\n  width: 1440px;\\n\\n  @media (max-width: 1920px) {\\n    width: 1080px;\\n    gap: 100px;\\n    margin-top: 48px;\\n  }\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 230px;\\n  height: 260px;\\n  object-fit: fit-content; // This ensures the image covers the area without distortion\\n  @media (max-width: 1920px) {\\n    width: 200px;\\n    height: 210px;\\n  }\\n\"\n    ]);\n    _templateObject9 = function _templateObject9() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject10() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  margin-top: 8px; // Space between image and label\\n  text-align: center;\\n\"\n    ]);\n    _templateObject10 = function _templateObject10() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject11() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  gap: 24px;\\n  align-items: center;\\n  \",\n        \"\\n  background-color: white;\\n  border: 1px solid black;\\n  padding: 16px;\\n  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;\\n\\n  &:hover {\\n    transform: translateY(-5px); // Slightly raise the button\\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); // Add a shadow for depth\\n    border-color: #00A3FF; // Change border color: ;\\n  }\\n  width: 230px;\\n  height: 350px;\\n\"\n    ]);\n    _templateObject11 = function _templateObject11() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\nvar MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"search__MainContainer\",\n    componentId: \"sc-31d5f2a8-0\"\n})(_templateObject(), _styles_theme__WEBPACK_IMPORTED_MODULE_3__.colors.superLighBlue);\n_c = MainContainer;\nvar TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"search__TextContainer\",\n    componentId: \"sc-31d5f2a8-1\"\n})(_templateObject1());\n_c1 = TextContainer;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].h1.withConfig({\n    displayName: \"search__Title\",\n    componentId: \"sc-31d5f2a8-2\"\n})(_templateObject2(), _styles_theme__WEBPACK_IMPORTED_MODULE_3__.fonts.Bolded48);\n_c2 = Title;\n// Description text\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].p.withConfig({\n    displayName: \"search__Description\",\n    componentId: \"sc-31d5f2a8-3\"\n})(_templateObject3(), _styles_theme__WEBPACK_IMPORTED_MODULE_3__.fonts.H500);\n_c3 = Description;\nvar SearchBarContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"search__SearchBarContainer\",\n    componentId: \"sc-31d5f2a8-4\"\n})(_templateObject4());\nvar Input = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].input.withConfig({\n    displayName: \"search__Input\",\n    componentId: \"sc-31d5f2a8-5\"\n})(_templateObject5(), _styles_theme__WEBPACK_IMPORTED_MODULE_3__.fonts.H500, _styles_theme__WEBPACK_IMPORTED_MODULE_3__.fonts.H400);\nvar SearchButton = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].button.withConfig({\n    displayName: \"search__SearchButton\",\n    componentId: \"sc-31d5f2a8-6\"\n})(_templateObject6());\nvar StyledIcon = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon).withConfig({\n    displayName: \"search__StyledIcon\",\n    componentId: \"sc-31d5f2a8-7\"\n})(_templateObject7());\nvar FlexContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n    displayName: \"search__FlexContainer\",\n    componentId: \"sc-31d5f2a8-8\"\n})(_templateObject8());\n_c4 = FlexContainer;\nvar StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].img.withConfig({\n    displayName: \"search__StyledImage\",\n    componentId: \"sc-31d5f2a8-9\"\n})(_templateObject9());\n_c5 = StyledImage;\nvar ImageLabel = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].span.withConfig({\n    displayName: \"search__ImageLabel\",\n    componentId: \"sc-31d5f2a8-10\"\n})(_templateObject10());\n_c6 = ImageLabel;\nvar FlexColumnContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].button.withConfig({\n    displayName: \"search__FlexColumnContainer\",\n    componentId: \"sc-31d5f2a8-11\"\n})(_templateObject11(), _styles_theme__WEBPACK_IMPORTED_MODULE_3__.fonts.H500);\n_c7 = FlexColumnContainer;\n// React component\nvar NoteComponent = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MainContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(TextContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Title, {\n                        children: \"Look into institutions featuring classes with pre-arranged notes.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hashimsyed/Desktop/StudySnap-App/src/components/searchSectionMain/search.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Description, {\n                        children: \"We offer pre-prepared course summaries and exams for your convenience.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hashimsyed/Desktop/StudySnap-App/src/components/searchSectionMain/search.tsx\",\n                        lineNumber: 143,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hashimsyed/Desktop/StudySnap-App/src/components/searchSectionMain/search.tsx\",\n                lineNumber: 139,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FlexContainer, {\n                children: _utils_imageLists__WEBPACK_IMPORTED_MODULE_5__.imageList.universities.map(function(i, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(FlexColumnContainer, {\n                        onClick: function() {\n                            return console.log(\"click\");\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledImage, {\n                                src: i.src,\n                                alt: \"University \".concat(index)\n                            }, index, false, {\n                                fileName: \"/Users/hashimsyed/Desktop/StudySnap-App/src/components/searchSectionMain/search.tsx\",\n                                lineNumber: 151,\n                                columnNumber: 18\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ImageLabel, {\n                                children: [\n                                    \" \",\n                                    i.alt,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hashimsyed/Desktop/StudySnap-App/src/components/searchSectionMain/search.tsx\",\n                                lineNumber: 152,\n                                columnNumber: 18\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hashimsyed/Desktop/StudySnap-App/src/components/searchSectionMain/search.tsx\",\n                        lineNumber: 150,\n                        columnNumber: 23\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/hashimsyed/Desktop/StudySnap-App/src/components/searchSectionMain/search.tsx\",\n                lineNumber: 147,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hashimsyed/Desktop/StudySnap-App/src/components/searchSectionMain/search.tsx\",\n        lineNumber: 138,\n        columnNumber: 5\n    }, _this);\n};\n_c8 = NoteComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NoteComponent);\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"MainContainer\");\n$RefreshReg$(_c1, \"TextContainer\");\n$RefreshReg$(_c2, \"Title\");\n$RefreshReg$(_c3, \"Description\");\n$RefreshReg$(_c4, \"FlexContainer\");\n$RefreshReg$(_c5, \"StyledImage\");\n$RefreshReg$(_c6, \"ImageLabel\");\n$RefreshReg$(_c7, \"FlexColumnContainer\");\n$RefreshReg$(_c8, \"NoteComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWFyY2hTZWN0aW9uTWFpbi9zZWFyY2gudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFDZTtBQUVXO0FBRWQ7QUFHbkQsSUFBTU0sYUFBYSxHQUFHTCx3RUFBVTs7O3NCQUtWQywrREFBb0IsQ0FHekM7QUFSS0ksS0FBQUEsYUFBYTtBQVVuQixJQUFNRyxhQUFhLEdBQUdSLHdFQUFVOzs7c0JBSy9CO0FBTEtRLE1BQUFBLGFBQWE7QUFPbkIsSUFBTUMsS0FBSyxHQUFHVCx1RUFBUzs7O3VCQUVqQkUseURBQWMsQ0FFbkI7QUFKS08sTUFBQUEsS0FBSztBQU1YLG1CQUFtQjtBQUNuQixJQUFNRyxXQUFXLEdBQUdaLHNFQUFROzs7dUJBQ3hCRSxxREFBVSxDQUViO0FBSEtVLE1BQUFBLFdBQVc7QUFLakIsSUFBTUcsa0JBQWtCLEdBQUdmLHdFQUFVOzs7c0JBZXBDO0FBRUQsSUFBTWdCLEtBQUssR0FBR2hCLDBFQUFZOzs7dUJBTXRCRSxxREFBVSxFQUdSQSxxREFBVSxDQUVmO0FBRUQsSUFBTWlCLFlBQVksR0FBR25CLDJFQUFhOzs7c0JBTWpDO0FBRUQsSUFBTXFCLFVBQVUsR0FBR3JCLDZEQUFNLENBQUNHLDJFQUFlLENBQUM7OztzQkFLekM7QUFFRCxJQUFNbUIsYUFBYSxHQUFHdEIsd0VBQVU7OztzQkFhL0I7QUFiS3NCLE1BQUFBLGFBQWE7QUFjbkIsSUFBTUMsV0FBVyxHQUFHdkIsd0VBQVU7OztzQkFRN0I7QUFSS3VCLE1BQUFBLFdBQVc7QUFVakIsSUFBTUUsVUFBVSxHQUFHekIseUVBQVc7Ozt1QkFHN0I7QUFIS3lCLE1BQUFBLFVBQVU7QUFLaEIsSUFBTUUsbUJBQW1CLEdBQUczQiwyRUFBYTs7O3dCQUtyQ0UscURBQVUsQ0FhYjtBQWxCS3lCLE1BQUFBLG1CQUFtQjtBQXNCekIsa0JBQWtCO0FBQ2xCLElBQU1DLGFBQWEsR0FBYSxXQUFNO0lBQ3BDLHFCQUNFLDhEQUFDdkIsYUFBYTs7MEJBQ1YsOERBQUNHLGFBQWE7O2tDQUNWLDhEQUFDQyxLQUFLO2tDQUFDLG1FQUVQOzs7Ozs2QkFBUTtrQ0FDUiw4REFBQ0csV0FBVztrQ0FBQyx3RUFFYjs7Ozs7NkJBQWM7Ozs7OztxQkFDRjswQkFDaEIsOERBQUNVLGFBQWE7MEJBRU5sQix5RUFBMEIsQ0FBQyxTQUFDMkIsQ0FBTSxFQUFFQyxLQUFhLEVBQUs7b0JBQ3RELHFCQUFNLDhEQUFDTCxtQkFBbUI7d0JBQUNNLE9BQU8sRUFBRTttQ0FBTUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDO3lCQUFBOzswQ0FDN0QsOERBQUNaLFdBQVc7Z0NBQWFhLEdBQUcsRUFBRUwsQ0FBQyxDQUFDSyxHQUFHO2dDQUFFQyxHQUFHLEVBQUUsYUFBWSxDQUFRLE9BQU5MLEtBQUssQ0FBRTsrQkFBN0NBLEtBQUs7Ozs7cUNBQTRDOzBDQUNuRSw4REFBQ1AsVUFBVTs7b0NBQUMsR0FBQztvQ0FBQ00sQ0FBQyxDQUFDTSxHQUFHO29DQUFDLEdBQUM7Ozs7OztxQ0FBYTs7Ozs7OzZCQUNaO2dCQUV2QixDQUFDLENBQUM7Ozs7O3FCQUVNOzs7Ozs7YUFDSixDQUVoQjtBQUNKLENBQUM7QUF6QktULE1BQUFBLGFBQWE7QUEyQm5CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VhcmNoU2VjdGlvbk1haW4vc2VhcmNoLnRzeD9iNmQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGNvbG9ycywgZm9udHMgfSBmcm9tICcuLi8uLi8uLi9zdHlsZXMvdGhlbWUnO1xuaW1wb3J0IHsgZmFNYWduaWZ5aW5nR2xhc3MgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCBTZWxlY3RDb21wb25lbnQgZnJvbSAnLi4vU2VsZWN0L1NlbGVjdCc7XG5pbXBvcnQgeyBpbWFnZUxpc3QgfSBmcm9tICcuLi8uLi91dGlscy9pbWFnZUxpc3RzJztcblxuXG5jb25zdCBNYWluQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTI4cHggNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuc3VwZXJMaWdoQmx1ZX07XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuYDtcblxuY29uc3QgVGV4dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNDhweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAke2ZvbnRzLkJvbGRlZDQ4fVxuICAgIG1heC13aWR0aDogOTAwcHg7XG5gO1xuXG4vLyBEZXNjcmlwdGlvbiB0ZXh0XG5jb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuICAke2ZvbnRzLkg1MDB9XG4gIG1heC13aWR0aDogMTEzMXB4O1xuYDtcblxuY29uc3QgU2VhcmNoQmFyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAxNDQwcHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAxMDgwcHg7XG4gIH1cbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW4tdG9wOiA5MnB4O1xuYDtcblxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG4gIGZsZXgtZ3JvdzogMTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICR7Zm9udHMuSDUwMH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDE5MjBweCkge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAke2ZvbnRzLkg0MDB9XG4gIH1cbmA7XG5cbmNvbnN0IFNlYXJjaEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFN0eWxlZEljb24gPSBzdHlsZWQoRm9udEF3ZXNvbWVJY29uKWBcbiAgICBmb250LXNpemU6IDMycHg7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbmBcblxuY29uc3QgRmxleENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDY0cHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7IC8vIDQgZXF1YWwgY29sdW1uc1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBhdXRvKTsgLy8gMyByb3dzLCBzaXplIGRldGVybWluZWQgYnkgY29udGVudFxuICBnYXA6IDEzMnB4OyAvLyBLZWVwaW5nIHRoZSBzYW1lIGdhcCBhcyBiZWZvcmVcbiAgd2lkdGg6IDE0NDBweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogMTkyMHB4KSB7XG4gICAgd2lkdGg6IDEwODBweDtcbiAgICBnYXA6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IDQ4cHg7XG4gIH1cbmA7XG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAyMzBweDtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgb2JqZWN0LWZpdDogZml0LWNvbnRlbnQ7IC8vIFRoaXMgZW5zdXJlcyB0aGUgaW1hZ2UgY292ZXJzIHRoZSBhcmVhIHdpdGhvdXQgZGlzdG9ydGlvblxuICBAbWVkaWEgKG1heC13aWR0aDogMTkyMHB4KSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IEltYWdlTGFiZWwgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLXRvcDogOHB4OyAvLyBTcGFjZSBiZXR3ZWVuIGltYWdlIGFuZCBsYWJlbFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBGbGV4Q29sdW1uQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAke2ZvbnRzLkg1MDB9XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogMTZweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2UsIGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpOyAvLyBTbGlnaHRseSByYWlzZSB0aGUgYnV0dG9uXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvLyBBZGQgYSBzaGFkb3cgZm9yIGRlcHRoXG4gICAgYm9yZGVyLWNvbG9yOiAjMDBBM0ZGOyAvLyBDaGFuZ2UgYm9yZGVyIGNvbG9yOiA7XG4gIH1cbiAgd2lkdGg6IDIzMHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xuYDtcblxuXG5cbi8vIFJlYWN0IGNvbXBvbmVudFxuY29uc3QgTm90ZUNvbXBvbmVudDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1haW5Db250YWluZXI+XG4gICAgICAgIDxUZXh0Q29udGFpbmVyPlxuICAgICAgICAgICAgPFRpdGxlPlxuICAgICAgICAgICAgIExvb2sgaW50byBpbnN0aXR1dGlvbnMgZmVhdHVyaW5nIGNsYXNzZXMgd2l0aCBwcmUtYXJyYW5nZWQgbm90ZXMuXG4gICAgICAgICAgICA8L1RpdGxlPlxuICAgICAgICAgICAgPERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgV2Ugb2ZmZXIgcHJlLXByZXBhcmVkIGNvdXJzZSBzdW1tYXJpZXMgYW5kIGV4YW1zIGZvciB5b3VyIGNvbnZlbmllbmNlLlxuICAgICAgICAgICAgPC9EZXNjcmlwdGlvbj5cbiAgICAgICAgPC9UZXh0Q29udGFpbmVyPlxuICAgICAgICA8RmxleENvbnRhaW5lcj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWFnZUxpc3QudW5pdmVyc2l0aWVzLm1hcCgoaTogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuPEZsZXhDb2x1bW5Db250YWluZXIgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ2NsaWNrJyl9PlxuICAgICAgICAgICAgICAgICA8U3R5bGVkSW1hZ2Uga2V5PXtpbmRleH0gc3JjPXtpLnNyY30gYWx0PXtgVW5pdmVyc2l0eSAke2luZGV4fWB9IC8+XG4gICAgICAgICAgICAgICAgIDxJbWFnZUxhYmVsPiB7aS5hbHR9IDwvSW1hZ2VMYWJlbD5cbiAgICAgICAgICAgICAgICAgPC9GbGV4Q29sdW1uQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvRmxleENvbnRhaW5lcj5cbiAgICA8L01haW5Db250YWluZXI+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGVDb21wb25lbnQ7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiY29sb3JzIiwiZm9udHMiLCJGb250QXdlc29tZUljb24iLCJpbWFnZUxpc3QiLCJNYWluQ29udGFpbmVyIiwiZGl2Iiwic3VwZXJMaWdoQmx1ZSIsIlRleHRDb250YWluZXIiLCJUaXRsZSIsImgxIiwiQm9sZGVkNDgiLCJEZXNjcmlwdGlvbiIsInAiLCJINTAwIiwiU2VhcmNoQmFyQ29udGFpbmVyIiwiSW5wdXQiLCJpbnB1dCIsIkg0MDAiLCJTZWFyY2hCdXR0b24iLCJidXR0b24iLCJTdHlsZWRJY29uIiwiRmxleENvbnRhaW5lciIsIlN0eWxlZEltYWdlIiwiaW1nIiwiSW1hZ2VMYWJlbCIsInNwYW4iLCJGbGV4Q29sdW1uQ29udGFpbmVyIiwiTm90ZUNvbXBvbmVudCIsInVuaXZlcnNpdGllcyIsIm1hcCIsImkiLCJpbmRleCIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/searchSectionMain/search.tsx\n"));

/***/ })

});