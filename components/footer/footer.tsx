/* eslint-disable react/display-name */
import { FC } from "react";
import Link from "next/link";
import fm from "format-message";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

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
        <div className="footer__content">
          <div>
            <ul>
              <li>
                <Link href="/" passHref>
                  <a>
                    <AiOutlineGithub />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a>
                    <FaLinkedin />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/" passHref>
                  <a>
                    <GrInstagram />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p>
              &copy; 2021 -{" "}
              {language.currentLanguage === "pt-br"
                ? fm("text.rights")
                : eng("text.rights")}
            </p>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
