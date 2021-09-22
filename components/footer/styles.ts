import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #111111;
  width: 100%;
  padding: 45px 0;

  .footer__content {
    display: flex;
    flex-direction: column;

    h2 {
      color: #ffffff;
      font-family: "jetbrains_mono_nlextrabold";
      font-size: 3rem;
    }

    ul {
      display: block;
      width: 100%;

      li {
        a,
        strong {
          color: #f1c40f;
          font-size: 1.6rem;
          font-family: "jetbrains_mono_nlmedium";
        }
      }
    }
  }
`;
