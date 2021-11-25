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
              <Link href="mailto:juliograffin@gmail.com">
                <a>juliograffin@gmail.com</a>
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
                <Link href="https://github.com/jgraffin" passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Github"
                  >
                    <AiOutlineGithub />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://linkedin.com/in/juliograffin" passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/jotagraffin/" passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <GrInstagram />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p>
              <span>&copy;</span> 2021 -{" "}
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
