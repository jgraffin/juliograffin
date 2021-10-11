import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #111111;
  width: 100%;
  padding: 45px 0;

  > div {
    display: flex;
    flex-direction: column;
  }

  .footer__content {
    display: flex;
    flex-direction: column;
    position: relative;

    &:first-of-type {
      padding-bottom: 2.8rem;

      h2 {
        color: #ffffff;
        display: block;
        font-family: "jetbrains_mono_nlextrabold";
        font-size: 3rem;
        margin-bottom: 5rem;
      }

      ul {
        display: block;
        width: 100%;

        li {
          line-height: 4rem;
          a,
          strong {
            color: #f1c40f;
            font-size: 1.6rem;
            font-family: "jetbrains_mono_nlmedium";
          }
        }
      }

      &::after {
        content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        left: 0;
        bottom: 0;
        background: #f1c40f;
        opacity: 0.2;
      }
    }

    &:last-of-type {
      align-items: center;
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding-top: 4rem;

      div {
        ul {
          align-items: center;
          display: flex;

          li {
            margin-right: 2rem;

            &:first-child {
              svg {
                fill: #f1c40f;
                height: 2.4rem;
                width: 2.4rem;
              }
            }
          }
        }

        a {
          font-size: 3rem;
          transition: ease-in-out 0.3s;

          &:hover {
            opacity: 0.6;
          }

          svg {
            fill: #f1c40f;
            height: 2.2rem;
            width: 2.2rem;
          }
        }

        p {
          color: #ffffff;
          font-size: 1.2rem;
          line-height: 2.2rem;
          text-align: right;

          span {
            display: inline-block;
            font-size: 2.2rem;
            vertical-align: middle;
          }
        }
      }
    }
  }
`;
