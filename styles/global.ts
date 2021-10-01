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
    font-weight: normal;
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
  min-height: 100vh;

  &.page-not-found {
    min-height: 100%;
    margin-bottom: 10%;

    .not-found {
      display: flex;
      width: 100%;
      flex-direction: column;
      padding: 5rem 25rem 0 25rem;

      p {
        display: block;
        font-size: 2.3rem;
        margin-bottom: 3rem;
      }

      a {
        font-family: "jetbrains_mono_nlextrabold";
        width: 28rem;
        padding: 1rem 0 1rem 2rem;
        transition: none;
        font-size: 1.8rem;
        background-color: #f1c40f;
        text-align: center;
        display: block;
        position: relative;
        border: 1px solid transparent;
        border-radius: 90px;

        &::before {
          content: "";
          width: 20px;
          height: 20px;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 2;
          background: url("../arrow.svg") no-repeat center center;
          background-size: 16px;
          transform: rotate(90deg);
          margin: 1.5rem 1.6rem 0 2.5rem;
        }

        &:hover {
          background: #ffffff;
          color: #111111;
          border: 1px solid #111111;
        }
      }
    }
  }
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
