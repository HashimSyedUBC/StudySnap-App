"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonIcon = exports.ButtonLinkWrapper = exports.ButtonTextWrapper = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const toRem_1 = require("../../utils/toRem");
const theme_1 = require("../../../styles/theme");
exports.ButtonTextWrapper = styled_components_1.default.p `
  ${({ theme }) => (theme === 'TextBoxHome' ? theme_1.fonts.H200 : theme_1.fonts.H100)};
  padding-left: ${(0, toRem_1.toRem)(10)}; 
  color: ${theme_1.colors.defaultBlack};
`;
exports.ButtonLinkWrapper = styled_components_1.default.a `
  width: ${({ width }) => width};
  text-decoration: none;
  margin-top: -5px;
`;
exports.ButtonIcon = styled_components_1.default.i `
  font-size: ${({ theme }) => (theme === 'TextBoxHome' ? (0, toRem_1.toRem)(20) : (0, toRem_1.toRem)(16))};
  padding-right: ${(0, toRem_1.toRem)(10)}; ;
  color: ${theme_1.colors.defaultBlack}
`;
