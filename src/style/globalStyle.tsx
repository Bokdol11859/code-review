'use client';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
  }

  main{
    min-height: calc(100vh - 120px);
  }


  body {
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    line-height: 1.5;
    max-width: 100%;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 20px;
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }

  pre {
    border-radius: 10px;
    padding: 0 1em;
    white-space: pre-wrap;
    font-family: inherit;
    word-wrap: break-word;
  }

`;
export default GlobalStyle;
