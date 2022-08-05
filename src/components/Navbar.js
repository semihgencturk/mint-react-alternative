import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavbarItem from "../ui/NavbarItem";
import Logo from "../ui/Logo";

import MintGreenLogo from "../assets/MintGreenLogo.png";

const NavbarContainer = styled.div`
  background: transparent;
  height: 10vh;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3%;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarItem link="/" text="Hakkimizda" />
      <NavbarItem link="/Iletisim" text="Sponsorluk" />
      <NavbarItem link="/Iletisim" text="Bize Ulasin" />
      <Link to="/">
        <Logo src={MintGreenLogo} alt="Mint-Logo" width={75} />
      </Link>
      <NavbarItem link="/Topluluklar" text="Topluluklar" />
      <NavbarItem link="/Takimlar" text="Takimlar" />
      <NavbarItem link="/Etkinlikler" text="Etkinlikler" />
    </NavbarContainer>
  );
};

export default Navbar;
