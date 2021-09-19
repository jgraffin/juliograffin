import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { HeaderWrapper, Brand, Nav, Lang } from "./styles";
import { Container } from "../../styles/global";
import Logo from "../../public/logo.svg";

const Header: FC = () => {
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
          <button className="is-active">pt</button>
          <button>en</button>
        </Lang>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
