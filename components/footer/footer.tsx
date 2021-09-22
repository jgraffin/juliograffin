/* eslint-disable react/display-name */
import { FC } from "react";
import Link from "next/link";
import fm from "format-message";
import { FooterWrapper } from "./styles";
import { Container } from "../../styles/global";
import { useHeader } from "../../hooks/useHeader";
import { eng } from "../../locales/translate";

const Footer: FC = () => {
  const { language } = useHeader() as any;
  return (
    <FooterWrapper>
      <Container>
        <div className="footer__content">
          <h2>
            {language.currentLanguage === "pt-br"
              ? fm.rich(fm("title.contact"), {
                  br: () => <br key="br" />,
                })
              : eng.rich(eng("title.contact"), {
                  br: () => <br key="br" />,
                })}
          </h2>
          <ul>
            <li>
              <Link href="/" passHref>
                <a>me@juliograffin.com</a>
              </Link>
            </li>
            <li>
              <strong>+5541 99505-2527</strong>
            </li>
          </ul>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
