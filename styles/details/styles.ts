import styled from "styled-components";

export const Hero = styled.section`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  display: block;
  height: 200px;
  position: relative;
  z-index: 5;
  margin: -6rem 0 0 0;
  background-size: 105%;
  background-position: center center;
  box-shadow: 0 5px 22px 4px rgba(0, 0, 0, 0.37);

  @media (min-width: 769px) {
    height: 370px;
  }

  &::before {
    opacity: 0.5;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
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
  padding: 3rem 2rem;

  @media (min-width: 769px) {
    padding: 7rem 14rem;
  }

  .content-area__heading {
    display: block;
    width: 100%;

    h2 {
      display: block;
      font-family: "jetbrains_mono_nlbold";
      font-size: 2rem;
      line-height: 3rem;
      font-weight: normal;
      margin-bottom: 2rem;

      @media (min-width: 769px) {
        font-size: 3rem;
        line-height: 3.5rem;
      }
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
      line-height: 2.4rem;

      strong,
      a {
        font-family: "Montserrat";
        font-weight: 700;
      }

      a {
        color: #f1c40f;
        text-decoration: underline;

        &:hover {
          text-decoration: none;
        }
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    h2 {
      font-family: "jetbrains_mono_nlbold";
      font-size: 2rem;
    }
  }
`;

export const SectionArea = styled.section`
  &.content-area {
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 1.5rem;

      @media (min-width: 769px) {
        padding: 0 6rem;
      }
    }
  }
`;

export const SectionScreenShotArea = styled.section`
  display: block;
  width: 100%;
  position: relative;
  height: 100%;

  &.image-container {
    width: 100%;

    > div {
      position: unset !important;
    }

    .image {
      object-fit: contain;
      width: 100% !important;
      position: relative !important;
      height: unset !important;
    }
  }
`;

export const Carousel = styled.section`
  width: 100%;
  display: block;
  padding: 2rem 0;

  @media (min-width: 769px) {
    padding: 8rem 0;
  }

  > div {
    position: relative;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;

    h2 {
      font-size: 2.5rem;
      font-family: "jetbrains_mono_nlbold";
      position: relative;
      z-index: 6;
      display: block;
      padding: 1.5rem 0 0 1.5rem;

      @media (min-width: 769px) {
        font-size: 3rem;
      }
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
      right: 15px;
      background: linear-gradient(
        -90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );

      @media (min-width: 769px) {
        right: -15px;
      }
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
