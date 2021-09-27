import {
  FC,
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
  MouseEvent,
} from "react";
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
              <button>
                {language.currentLanguage === "pt-br"
                  ? fm("title.jobs")
                  : eng("title.jobs")}
              </button>
            </li>
            <li>
              <button>
                {language.currentLanguage === "pt-br"
                  ? fm("title.contact")
                  : eng("title.contact")}
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
