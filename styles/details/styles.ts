import styled, { keyframes } from "styled-components";

export const Hero = styled.section`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  display: block;
  height: 370px;
  position: relative;
  z-index: 5;
  margin: -6rem 0 0 0;
  background-size: cover;
  box-shadow: 0px 0 20px 6px rgba(0, 0, 0, 0.4);
  box-shadow: 0 5px 22px 4px rgba(0, 0, 0, 0.37);

  &::before {
    opacity: 0.5;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    opacity: 0.7;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.16) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`;

export const ContentArea = styled.section`
  width: 100%;
  display: block;
  padding: 7rem 14rem;

  .content-area__heading {
    display: block;
    width: 100%;

    h2 {
      display: block;
      font-family: "jetbrains_mono_nlbold";
      font-size: 3rem;
      margin-bottom: 2rem;
    }
  }

  .content-area__post {
    display: block;
    width: 100%;

    p {
      color: #222222;
      display: block;
      margin-bottom: 2rem;
      font-family: "Montserrat";
      font-size: 1.4rem;
      line-height: 2.8rem;

      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;

export const SectionArea = styled.section`
  &.content-area {
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 6rem;
    }
  }
`;

export const SectionScreenShotArea = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d8d8d8;
  padding: 2rem;
  width: 100%;
`;

export const Carousel = styled.section`
  width: 100%;
  display: block;
  padding: 8rem 0;

  > div {
    position: relative;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;

    h2 {
      font-size: 3rem;
      font-family: "jetbrains_mono_nlbold";
      position: relative;
      z-index: 6;
      display: block;
      padding: 1.5rem 0 0 1.5rem;
    }

    @media (min-width: 768px) {
      width: 750px;
    }

    @media (min-width: 992px) {
      width: 970px;
    }

    @media (min-width: 1200px) {
      width: 1140px;
    }

    &::before,
    &::after {
      display: none;
      content: "";
      width: 60px;
      height: 100%;
      position: absolute;
      left: 15px;
      top: 0;
      background: rgb(255, 255, 255);
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      z-index: 5;
    }

    &::after {
      left: auto;
      right: -15px;
      background: linear-gradient(
        -90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    &.has-many-cards {
      &::before,
      &::after {
        display: block;
      }
    }
  }

  .carousel {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }

    .card-link {
      width: 350px;
      margin-right: 2rem;
      flex: none;
      padding-top: 3rem;

      a {
        > div {
          &:first-child {
            box-shadow: 0 5px 13px 0px rgb(0 0 0 / 37%);
          }
        }
      }

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

export const CarouselButtons = styled.div`
  width: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 6;
  margin: 26.5rem 1.5rem 0 0;
  display: none;

  @media (min-width: 769px) {
    display: block;
  }

  button {
    cursor: pointer;
    background-color: #f1c40f;
    width: 42px;
    height: 42px;
    border-radius: 90px;
    margin: 0 0.5rem;

    &::before {
      content: "";
      width: 42px;
      height: 42px;
      display: block;
      background: url("../arrow.svg") no-repeat center center;
      transform: rotate(90deg);
      background-size: 17px;
    }

    &#next {
      &::before {
        transform: rotate(-90deg);
      }
    }
  }
`;
