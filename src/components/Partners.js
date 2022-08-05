import React from "react";
import styled from "styled-components";
import YtuTextLogo from "../assets/YtuTextLogo.png";

const PartnersContainer = styled.div`
  min-height: 40vh;
  background: linear-gradient(
    135deg,
    rgba(96, 163, 188, 1) 0%,
    rgba(106, 192, 104, 1) 100%
  );
  display: flex;
  flex-direction: column;
  gap: 100px;
  align-items: center;
  padding: 5vh 0 5vh 0;
`;

const PartnersHeader = styled.div`
  font-size: 50px;
`;

const PartnersLogos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;

const PartnerLogo = styled.img`
  width: 75px;
  height: auto;
`;
const Partners = () => {
  return (
    <PartnersContainer>
      <PartnersHeader>Partnerlerimiz</PartnersHeader>
      <PartnersLogos>
        <PartnerLogo src={YtuTextLogo} />
        {/* <PartnerLogo src={YtuTextLogo} />
        <PartnerLogo src={YtuTextLogo} />
        <PartnerLogo src={YtuTextLogo} /> */}
      </PartnersLogos>
    </PartnersContainer>
  );
};

export default Partners;
