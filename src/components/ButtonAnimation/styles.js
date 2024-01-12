"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonStyled = exports.BackgroundAnimation = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = require("../../../styles/theme");
const toRem_1 = require("../../utils/toRem");
exports.BackgroundAnimation = styled_components_1.default.div `
  position: absolute;
  transition: all 0.2s linear;
  z-index: -2;
  width: 100%;
  height: 100%;
  background: ${theme_1.colors.defaultWhite};
  border-bottom: 1px solid ${theme_1.colors.mainColor};
`;
exports.ButtonStyled = styled_components_1.default.button `
  height: ${({ height }) => (height || 'auto')};;
  z-index: 0;
  border: none;
  width: max-content;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  transition: all 0.2s linear;
  overflow: hidden;
  background: ${theme_1.colors.mainColor};
  color: ${({ theme }) => (theme === 'TextSection' ? theme_1.colors.mainColor : theme_1.colors.defaultBlack)};
  p {
    transition: all 0.2s linear;
  }
  i {
    transition: all 0.2s linear;
    margin: 0 0 0 ${(0, toRem_1.toRem)(12)};
  }

  ${exports.BackgroundAnimation} {
    transform: translateY(-100%);
  }

  padding: ${(0, toRem_1.toRem)(16)} 0;

  &:hover {
    padding: ${(0, toRem_1.toRem)(16)} ${(0, toRem_1.toRem)(16)} ${(0, toRem_1.toRem)(16)} 0;
    transition: all 0.1s linear;
    color: ${theme_1.colors.mainColor};
    p {
      transition: all 0.1s linear;
      padding: 0 0 0 ${(0, toRem_1.toRem)(12)};
    }
    i {
      transition: all 0.1s linear;
    }
    ${exports.BackgroundAnimation} {
      transform: translateY(0%);
    }
  }

  &:disabled {
    color: ${theme_1.colors.broderGray};
    border: none;
  }
`;
