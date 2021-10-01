import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 15rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Brand = styled.div`
  margin-right: auto;
  transform: translateY(-3rem);
`;

export const Nav = styled.nav`
  display: none;
  align-items: center;
  transform: translateY(-3rem);

  @media (min-width: 768px) {
    display: flex;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      &::after {
        font-size: 1.4rem;
        display: inline-block;
        margin: 0 3rem;
        content: "/";
        color: #ffffff;
      }

      button {
        transition: ease-in-out 0.3s;
        cursor: pointer;
        color: #ffffff;
        font-size: 1.4rem;

        &:hover {
          color: #f1c40f;
        }
      }
    }
  }
`;

export const Lang = styled.nav`
  display: none;
  align-items: center;
  justify-content: center;
  transform: translateY(-3rem);

  @media (min-width: 768px) {
    display: flex;
  }

  button {
    color: #ffffff;
    font-size: 1.6rem;
    transition: ease-in-out 0.3s;
    cursor: pointer;

    &:first-child {
      margin-right: 1rem;
    }

    &.is-active {
      color: #f1c40f;
      font-family: "jetbrains_mono_nlextrabold";
      cursor: default;
    }

    &:hover {
      color: #f1c40f;
    }
  }
`;
