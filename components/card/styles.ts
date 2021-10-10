import styled from "styled-components";

export const Article = styled.article`
  will-change: contents;
  transition: ease-in-out 0.3s;

  div {
    display: flex;
    flex-direction: column;

    &:first-child {
      position: relative;
      box-shadow: 0 5px 22px 4px rgba(0, 0, 0, 0.37);
      border-radius: 12px;
      overflow: hidden;

      img {
        border-radius: 12px;
      }

      span {
        font-family: "jetbrains_mono_nlXBdIt";
        font-size: 1.4rem;
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 3;
        color: #ffffff;
        margin: 2rem;
      }

      svg {
        transition: ease-in-out 0.3s;
        position: absolute;
        left: 0;
        bottom: 0;
        fill: #ffffff;
        font-size: 3.6rem;
        margin: 1.6rem;
        z-index: 3;
      }

      > div {
        > div {
          &::before {
            border-radius: 12px;
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            background-image: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.1) 0%,
              #000000 110%
            );
          }
        }
      }
    }

    &:last-child {
      margin-top: 3rem;

      h3 {
        display: block;
        text-transform: uppercase;
        font-size: 1.6rem;
        font-family: "jetbrains_mono_nlXBdIt";
        margin-bottom: 2rem;
      }

      p {
        font-family: "Montserrat";
        font-weight: 300;
        font-size: 1.4rem;
        line-height: 2.2rem;
      }
    }
  }

  &:hover {
    opacity: 0.8;

    div {
      &:first-child {
        svg {
          transform: rotate(90deg);
        }
      }
    }
  }
`;
