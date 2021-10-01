import styled, { keyframes } from "styled-components";

const slideInNav = keyframes`
  from {
    opacity: 0;
    transform: translateX(50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 8rem;
  backdrop-filter: blur(6px);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    width: 100%;
    height: 8rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
    background: rgb(0, 0, 0);
    opacity: 0.7;
  }

  > div {
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    z-index: 8;
  }

  @media (min-width: 769px) {
    height: 15rem;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

export const Brand = styled.div`
  margin-right: auto;

  @media (max-width: 768px) {
    width: 17rem;
  }

  @media (min-width: 769px) {
    transform: translateY(-3rem);
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  transform: none;

  @media (min-width: 769px) {
    transform: translateY(0);
  }

  button {
    color: #ffffff;
    font-size: 2rem;
    transition: ease-in-out 0.3s;
    cursor: pointer;

    @media (min-width: 769px) {
      font-size: 1.6rem;
    }

    &:first-child {
      margin-right: 2rem;
      margin-left: 2rem;

      @media (min-width: 769px) {
        margin-right: 1rem;
        margin-left: 0;
      }
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

export const NavButtonMobile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;

  svg {
    color: #ffffff;
    width: 60%;
    height: 60%;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const NavMobile = styled.div`
  animation: ${slideInNav} ease-in-out 0.4s forwards;
  position: fixed;
  right: 0;
  top: 0;
  width: 50%;
  height: 100%;
  z-index: 6;
  background: #111111;
  box-shadow: 0px 2px 30px 20px rgba(0, 0, 0, 0.5);
  padding-top: 12rem;

  nav {
    display: flex;
    transform: none;
    justify-content: flex-end;

    ul {
      width: 100%;
      justify-content: flex-end;
      padding-right: 24px;

      li {
        &:after {
          display: none;
        }

        button {
          font-size: 2rem;
        }
      }
    }

    &:last-of-type {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 3rem 2.4rem 0 0;
      margin-top: 3rem;

      button {
        font-size: 2rem;

        &:last-of-type {
          margin-left: 2rem;
        }
      }
    }
  }
`;
