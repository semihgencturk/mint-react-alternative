import React from "react";
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
      <NavbarItem link="/" text="Sponsorluk" />
      <NavbarItem link="/" text="Bize Ulasin" />
      <Logo src={MintGreenLogo} alt="Mint-Logo" width={75} />

      <NavbarItem link="/" text="Topluluklar" />
      <NavbarItem link="/" text="Takimlar" />
      <NavbarItem link="/" text="Etkinlikler" />
    </NavbarContainer>
  );
};

export default Navbar;
