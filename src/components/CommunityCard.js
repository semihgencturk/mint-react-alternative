import React from "react";
import styled from "styled-components";
import VbtLogo from "../assets/VbtLogo.png";
import CyberLogo from "../assets/CyberLogo.png";
import BlockchainLogo from "../assets/BlockchainLogo.png";
import Logo from "../ui/Logo";

const CommunityCardContainer = styled.div`
  max-width: 1400px;
  min-height: 100px;
  height: fit-content;
  border-top: solid #ff8c89 2px;
  border-left: solid #ff8c89 2px;
  border-bottom: solid #f6d63b 2px;
  border-right: solid #f6d63b 2px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 25px 0 25px;
  @media (max-width: 850px) {
    padding-top: 25px;
    justify-content: center;
  }
`;

const CommunityCardLogoContainer = styled.div`
  flex-basis: 20%;
`;

const CommunityCardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 80%;
`;
const CommunityCardTitle = styled.h3`
  font-size: 26px;
  color: black;
  @media (max-width: 850px) {
    text-align: center;
  }
`;
const CommunityCardText = styled.p`
  font-size: 22px;

  @media (max-width: 850px) {
    padding-left: 3%;
  }
`;

const CommunityCard = () => {
  return (
    <>
      <CommunityCardContainer>
        <CommunityCardLogoContainer>
          <Logo src={VbtLogo} alt="Mint-Logo" width={115} />
        </CommunityCardLogoContainer>
        <CommunityCardContent>
          <CommunityCardTitle>Ytü Veri Bilimi Topluluğu</CommunityCardTitle>
          <CommunityCardText>
            Yaklaşan Etkinlik: Ytü Yapay Zeka ve Veri Bilimi Zirvesi
          </CommunityCardText>
        </CommunityCardContent>
      </CommunityCardContainer>
      <br />
      <CommunityCardContainer>
        <CommunityCardLogoContainer>
          <Logo src={CyberLogo} alt="Mint-Logo" width={115} />
        </CommunityCardLogoContainer>
        <CommunityCardContent>
          <CommunityCardTitle>
            Yıldız Siber Güvenlik Topluluğu
          </CommunityCardTitle>
          <CommunityCardText>
            Yaklaşan Etkinlik: Yıldız Siber Güvenlik Zirvesi
          </CommunityCardText>
        </CommunityCardContent>
      </CommunityCardContainer>
      <br />
      <CommunityCardContainer>
        <CommunityCardLogoContainer>
          <Logo src={BlockchainLogo} alt="Mint-Logo" width={115} />
        </CommunityCardLogoContainer>
        <CommunityCardContent>
          <CommunityCardTitle>Ytü Blockchain Topluluğu</CommunityCardTitle>
          <CommunityCardText>
            Yaklaşan Etkinlik: Ytü Blockchain Zirvesi
          </CommunityCardText>
        </CommunityCardContent>
      </CommunityCardContainer>
    </>
  );
};

export default CommunityCard;
