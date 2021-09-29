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

  .carousel {
    position: relative;
    transition: all 0.4s;
  }
`;

export const CarouselButtons = styled.div`
  width: 300px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 5;

  button {
    background-color: #dadada;
  }
`;
