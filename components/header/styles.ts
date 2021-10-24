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

  @media (max-width: 768px) {
    height: 6.5rem;
  }

  &::after {
    content: "";
    width: 100%;
    height: 8rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
    background: rgb(0, 0, 0);
    opacity: 0.6;
    box-shadow: 0 -15px 15px 24px rgb(0 0 0 / 0.4);

    @media (max-width: 768px) {
      height: 6.5rem;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    z-index: 8;
  }

  @media (min-width: 769px) {
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
`;

export const Brand = styled.div`
  margin-right: auto;
  width: 16rem;

  @media (max-width: 768px) {
    width: 14rem;
  }
`;

export const Nav = styled.nav`
  display: none;
  align-items: center;

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
  width: 60%;
  height: 100%;
  z-index: 6;
  background: #111111;
  box-shadow: 0px 2px 30px 20px rgba(0, 0, 0, 0.5);
  padding-top: 10rem;

  nav {
    display: flex;
    transform: none;
    justify-content: flex-end;

    ul {
      width: 100%;
      justify-content: flex-end;
      padding-right: 15px;

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
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      padding: 1rem 0 2rem 0;

      button {
        font-size: 2rem;

        &:last-of-type {
          margin-left: 2rem;
        }
      }
    }
  }

  .content__jobs {
    display: block;
    padding: 2rem 15px 0 0;

    ul {
      display: block;
      text-align: right;
      padding-left: 24px;

      li {
        margin-bottom: 2rem;
        display: flex;
        width: 100%;
        justify-content: flex-end;

        &:last-of-type {
          margin-bottom: 0;
        }

        a {
          color: #ffffff;
          font-size: 1.2rem;
          line-height: 2.6rem;
        }
      }
    }
  }
`;
