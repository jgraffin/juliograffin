import styled, { keyframes } from "styled-components";

const scaleUp = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.1);
    }
`;

const scaleDown = keyframes`
    from {
        transform: scale(1.1);
    }
    to {
        transform: scale(1);
    }
`;

const scaleIntro = keyframes`
    from {
        transform: scale(1.1);
    }
    to {
        transform: scale(1);
    }
`;

export const Section = styled.section`
  &.intro {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 5rem;
      color: #ffffff;
      font-family: "jetbrains_mono_nlextrabold";
    }

    p {
      font-size: 1.6rem;
      color: #ffffff;
    }

    &::before,
    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 2;
      background-image: linear-gradient(
        180deg,
        #000000 0%,
        rgba(0, 0, 0, 0.86) 100%
      );
    }

    &::after {
      animation: ${scaleIntro} ease-in-out;
      animation-duration: 0.8s;
      background: url("../../images/background-image.jpeg") no-repeat center
        center;
      background-size: cover;
      z-index: 1;
    }

    > div {
      display: flex;
      justify-content: space-between;
      z-index: 3;
    }

    .intro__text {
      display: flex;
      flex-wrap: wrap;
      width: 48.55rem;

      .intro-button--next {
        cursor: pointer;
        display: inline-block;
        margin-right: 4rem;
        background: transparent;
        transition: ease-in-out 0.3s;

        &:hover {
          transform: translateY(0.5rem);
        }

        svg {
          fill: #f1c40f;
          width: 3rem;
          height: 3rem;
          transform: translateY(-0.5rem);
        }
      }

      .intro-button--video {
        &:hover {
          background: #ffffff;
        }

        svg {
          fill: #111111;
          width: 2.7rem;
          height: 2.7rem;
          margin-right: 1rem;
        }

        span {
          font-family: "jetbrains_mono_nlextrabold";
          font-size: 1.3rem;
        }
      }
    }

    .intro__video {
      cursor: pointer;
      position: relative;
      width: 50rem;

      &::before,
      &::after {
        animation: ${scaleDown} ease-in-out 0.3s forwards;
        content: "";
        width: 6.6rem;
        height: 6.6rem;
        background-color: #ffffff;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -3.3rem;
        margin-left: -3.3rem;
        z-index: 5;
        border-radius: 90px;
      }

      &::after {
        z-index: 4;
        width: 10.4rem;
        height: 10.4rem;
        margin-top: -5.2rem;
        margin-left: -5.2rem;
        opacity: 0.3;
      }

      &__icon {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -2rem;
        margin-left: -2rem;
        z-index: 5;
        width: 4rem;
        height: 4rem;
        fill: #f1c40f;
      }

      &:hover {
        &::after {
          animation: ${scaleUp} ease-in-out 0.3s forwards;
        }

        &::before {
          animation: ${scaleUp} ease-in-out 0.3s forwards;
          animation-delay: 0.1s;
        }
      }

      > div {
        &::before {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 3;
          background-image: linear-gradient(
            206deg,
            rgba(215, 207, 91, 0.5) 10%,
            rgba(0, 0, 0, 0.5) 100%
          );
          box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.5);
          border-radius: 12px;
        }
      }

      img {
        border-radius: 12px;
      }
    }
  }

  &.content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;

    &::after {
      content: "";
    }

    .content__jobs {
      justify-content: flex-end;
      display: flex;
      flex-wrap: wrap;
      border-top-right-radius: 60px;
      background: #f1c40f;
      padding: 6rem 6rem 8rem 0;
      width: 60%;

      .content__jobs__title {
        width: 68.5rem;

        h2 {
          font-size: 3rem;
          font-family: "jetbrains_mono_nlextrabold";
          margin-bottom: 2rem;
          width: 40rem;
        }
      }
    }

    .content__jobs__cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 3rem;
      width: 68.5rem;
    }

    .content__about {
      display: flex;
      flex-direction: column;
      width: 30%;
      margin-right: auto;
      position: relative;

      #curved-corner-bottomleft {
        width: 100px;
        height: 100px;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: 0;

        &::before {
          content: "";
          display: block;
          width: 200%;
          height: 200%;
          position: absolute;
          border-radius: 50%;
          bottom: 0;
          left: 0;
          box-shadow: -50px 50px 0 0 #f1c40f;
        }
      }

      &__author {
        display: flex;
        flex-direction: column;
        padding: 6rem 0 0 3rem;

        .author__image {
          margin-bottom: 2rem;
        }

        .author__text {
          width: 33rem;

          p {
            font-size: 1.4rem;
            font-family: "Montserrat";
            font-weight: 300;
            line-height: 2.6rem;
            margin-bottom: 3rem;
            color: #111111;
          }
        }

        .author__actions {
          .btn--download {
            font-family: "jetbrains_mono_nlextrabold";
            width: auto;
            padding: 0.4rem 2rem;
            border: 1px solid transparent;
            transition: none;

            svg {
              font-size: 2rem;
              margin-right: 1rem;
            }

            &:hover {
              background: #ffffff;
              color: #f1c40f;
              border: 1px solid #f1c40f;

              svg {
                fill: #f1c40f;
              }
            }
          }
        }
      }
    }
  }
`;
