import { FC, useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import fm from "format-message";

import { HeaderWrapper, Brand, Nav, Lang } from "./styles";
import { Container } from "../../styles/global";
import { useHeader } from "../../hooks/useHeader";
import { eng } from "../../locales/translate";
import Logo from "../../public/logo.svg";

const Header: FC = () => {
  const { switchLanguage, language } = useHeader() as any;
  const [isActivePtBr, setIsActivePtBr] = useState("");
  const [isActiveEnUs, setIsActiveEnUs] = useState("");
  const handleChange = (event: MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;
    switchLanguage(id);
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
    <HeaderWrapper>
      <Container>
        <Brand>
          <Link href="/">
            <a>
              <Image src={Logo} alt="Julio Graffin" />
            </a>
          </Link>
        </Brand>
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
  );
};

export default Header;
