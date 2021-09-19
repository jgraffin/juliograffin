import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
  }

  body {
    color: #111111;
  }

  button {
    background-color: transparent;
  }

  @media (max-width: 720px){
    html, body {
      font-size: 52.5%;
    }
  }

  @media (min-width: 721px){
    html, body {
      font-size: 62.5%;
    }
  }
`;

export default GlobalStyle;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const Section = styled.section``;
