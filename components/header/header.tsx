import { ChangeEvent, FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { HeaderWrapper, Brand, Nav, Lang } from "./styles";
import { Container } from "../../styles/global";
import Logo from "../../public/logo.svg";
import { useHeader } from "../../hooks/useHeader";

const Header: FC = () => {
  const { switchLanguage, isActive } = useHeader() as any;
  const handleChange = (value: any) => {
    switchLanguage(value.id);
  };

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
              <button>Trabalhos</button>
            </li>
            <li>
              <button>Contato</button>
            </li>
          </ul>
        </Nav>
        <Lang>
          <button
            onClick={(event) => handleChange(event.currentTarget)}
            className={isActive.pt.isActive ? "is-active" : ""}
            id="pt-br"
          >
            pt
          </button>
          <button
            onClick={(event) => handleChange(event.currentTarget)}
            className={isActive.en.isActive ? "is-active" : ""}
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
