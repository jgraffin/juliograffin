import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
  }

  :root {

  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: red;
  padding: 0 15px;
  margin: 0 auto;

  @media (min-width: 768px) {
    background: blue;
    width: 750px;
  }

  @media (min-width: 992px) {
    background: purple;
    width: 970px;
  }

  @media (min-width: 1200px) {
    background: brown;
    width: 1140px;
  }
`;
