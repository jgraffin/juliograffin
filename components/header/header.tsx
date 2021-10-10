import { FC, useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import fm from "format-message";

import {
  HeaderWrapper,
  Brand,
  Nav,
  Lang,
  NavButtonMobile,
  NavMobile,
} from "./styles";
import { Container } from "../../styles/global";
import { useHeader } from "../../hooks/useHeader";
import { eng } from "../../locales/translate";
import Logo from "../../public/logo.svg";
import { CgMenuRight } from "react-icons/cg";
import { VscClose } from "react-icons/vsc";
import content from "../../frontaid.content.json";

const Header: FC = () => {
  const { switchLanguage, language } = useHeader() as any;
  const [isActivePtBr, setIsActivePtBr] = useState("");
  const [isActiveEnUs, setIsActiveEnUs] = useState("");
  const [isNavOpened, setIsNavOpened] = useState(false);
  const handleChange = (event: MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;
    switchLanguage(id);
  };
  const handleOpenNav = () => {
    isNavOpened ? setIsNavOpened(false) : setIsNavOpened(true);
  };

  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });

    if (language.currentLanguage === "pt-br") {
      setIsActivePtBr("is-active");
      setIsActiveEnUs("");
    } else {
      setIsActiveEnUs("is-active");
      setIsActivePtBr("");
    }
  }, [language]);

  return (
    <>
      <HeaderWrapper>
        <Container>
          <Brand>
            <Link href="/">
              <a>
                <Image src={Logo} alt="Julio Graffin" />
              </a>
            </Link>
          </Brand>
          <NavButtonMobile onClick={handleOpenNav}>
            {isNavOpened ? <VscClose viewBox="0 0 15 15" /> : <CgMenuRight />}
          </NavButtonMobile>
          <Nav>
            <ul>
              <li>
                <button
                  onClick={(e) => {
                    let jobs = document.getElementById("jobs");
                    e.preventDefault();
                    jobs &&
                      jobs.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                >
                  {language.currentLanguage === "pt-br"
                    ? fm("title.jobs")
                    : eng("title.jobs")}
                </button>
              </li>
            </ul>
          </Nav>
          <Lang>
            <button
              onClick={(e) => handleChange(e)}
              className={isActivePtBr}
              id="pt-br"
            >
              pt
            </button>
            <button
              onClick={(e) => handleChange(e)}
              className={isActiveEnUs}
              id="en-us"
            >
              en
            </button>
          </Lang>
        </Container>
      </HeaderWrapper>
      {isNavOpened && (
        <NavMobile>
          <Nav>
            <ul>
              <li>
                <button
                  onClick={(e) => {
                    let jobs = document.getElementById("jobs");
                    e.preventDefault();
                    jobs &&
                      jobs.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                >
                  {language.currentLanguage === "pt-br"
                    ? fm("title.jobs")
                    : eng("title.jobs")}
                </button>
              </li>
            </ul>
          </Nav>
          <div className="content__jobs">
            <ul>
              {content.pages.map((item: any) => (
                <li key={item.id}>
                  <Link href="[...slug]" as={item.path}>
                    <a onClick={handleOpenNav}>
                      <h3>
                        {language.currentLanguage === "pt-br"
                          ? item.title
                          : item?.title_en}
                      </h3>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </NavMobile>
      )}
    </>
  );
};

export default Header;
