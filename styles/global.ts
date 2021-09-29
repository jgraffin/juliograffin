import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    font-family: "jetbrains_monothin";
    list-style-type: none;
  }


  button {
    background-color: transparent;
  }

  .btn {
    cursor: pointer;
    background: #f1c40f;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 90px;
    height: 4.2rem;
    width: 11.3rem;
    padding: 0.5rem 1.4rem;
    transition: ease-in-out 0.3s;
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
