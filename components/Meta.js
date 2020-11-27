import Head from "next/head";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GloablStyle = createGlobalStyle`
  
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-weight: 400;
    height: 100%;
    
  }
  html > *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 1.5;
    min-height: 100%;
    font-size: 16px;
    background-color: #0b0a0a;
  }
  button {
    :focus {
      outline: 0;
      border: none;
    }
  }
  #nprogress {
    pointer-events: none;
    .bar {
    background: #59bbb9 ;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    } 
  }
`;

const Meta = () => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initali-scale=1"
        charSet="utf-8"
      />
      {/*  <link rel="shortcut icon" href="/static/favicon.png" /> */}
      {/*  <link rel="stylesheet" type="text/css" href="/static/nprogress.css" /> */}
      <title>Mon site</title>
    </Head>
    <GloablStyle />
  </>
);

export default Meta;
