import React from "react";
import styled from "styled-components";
import MintGreenLogo from "../assets/MintGreenLogo.png";
import YtuLogo from "../assets/YtuLogo.png";
import ScrollButton from "../ui/ScrollButton";
import Logo from "../ui/Logo";

const BundleContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(96, 163, 188, 1) 0%,
    rgba(106, 192, 104, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

const BundleLogos = styled.div`
  display: flex;
  justify-content: center;
  gap: 75px;
`;

const BundleHeader = styled.h1`
  font-size: 50px;

  span {
    color: #f6d63b;
  }
`;

const Bundle = () => {
  return (
    <BundleContainer>
      <BundleLogos>
        <Logo src={MintGreenLogo} alt="Mint-Logo" width={150} />
        <Logo src={YtuLogo} alt="Ytu-Logo" width={125} />
      </BundleLogos>
      <BundleHeader>
        <span>M</span>ultidisipliner <span>İn</span>ovasyon <span>T</span>
        eknolojileri Kulübü
      </BundleHeader>
      <ScrollButton text="Mint Nedir?" />
    </BundleContainer>
  );
};

export default Bundle;
