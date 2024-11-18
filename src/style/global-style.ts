import { createGlobalStyle } from "styled-components";
import theme from "./theme";
import "./normalize.css";
import "./fonts.css";

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: 'Pretendard Variable', 'Pretendard', '-apple-system', 'BlinkMacSystemFont',
      'system-ui', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
      'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif';
    color: ${theme.colors.black100};
    background-color: ${theme.colors.gray100};   
  }

  * {
    box-sizing: border-box;
    scrollbar-width: none;
    -ms-overflow-style: none;
    font-family: inherit;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  *::before,
  *::after {
    box-sizing: border-box !important;
  }

  html{
    margin: 0;
	  padding: 0;
	  border: 0;
    display: flex;
    justify-content: center;
}
  body {
    width: 100%;
    height: 100%;
    padding: 0 25px;
    overscroll-behavior: none;
    background-color: ${theme.colors.white};
    max-width: ${theme.size.maxWidth};
    min-width: ${theme.size.minWidth};
    margin: 0;
    display: flex;
    justify-content: center;
  }

  a {
    outline: none;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
    padding-block: 0;
    padding-inline: 0;
  }

  textarea {
    border: none;
    resize: none;
    outline: none;
  }

  input {
    outline: none;
    border: none;
    background: none;
  }
`;

export default GlobalStyle;
