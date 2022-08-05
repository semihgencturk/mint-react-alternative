import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavbarItem from "../ui/NavbarItem";
import Logo from "../ui/Logo";
import NavbarHamburger from "./NavbarHamburger";
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
  width: 100%;
  @media (max-width: 850px) {
    background: linear-gradient(
      135deg,
      rgba(246, 214, 59, 1) 0%,
      rgba(255, 140, 137, 1) 100%
    );
    justify-content: flex-start;

    img {
      margin-left: 10px;
    }
  }
`;

const Navbar = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  return (
    <NavbarContainer>
      {windowSize.innerWidth > 1000 ? (
        <>
          <NavbarItem link="/" text="Hakkimizda" />
          <NavbarItem link="/Iletisim" text="Sponsorluk" />
          <NavbarItem link="/Iletisim" text="Bize Ulasin" />
          <Link to="/">
            <Logo src={MintGreenLogo} alt="Mint-Logo" width={75} />
          </Link>
          <NavbarItem link="/Topluluklar" text="Topluluklar" />
          <NavbarItem link="/Takimlar" text="Takimlar" />
          <NavbarItem link="/Etkinlikler" text="Etkinlikler" />
        </>
      ) : (
        <>
          <Link to="/">
            <Logo src={MintGreenLogo} alt="Mint-Logo" width={75} />
          </Link>
          <NavbarHamburger />
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
