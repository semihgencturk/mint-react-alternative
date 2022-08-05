import React from "react";
import styled from "styled-components";
import MintGreenLogo from "../assets/MintGreenLogo.png";
import Logo from "../ui/Logo";

const EventCardContainer = styled.div`
  max-width: 1400px;
  min-height: 100px;
  height: fit-content;
  min-height: 100px;
  border-top: solid #ff8c89 2px;
  border-left: solid #ff8c89 2px;
  border-bottom: solid #f6d63b 2px;
  border-right: solid #f6d63b 2px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding: 0 25px 0 25px;
  flex-wrap: wrap;
  @media (max-width: 850px) {
    padding-top: 25px;
    justify-content: center;
  }
`;

const EventCardLogoContainer = styled.div`
  flex-basis: 20%;
`;

const EventCardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 80%;
`;
const EventCardTitle = styled.h3`
  font-size: 26px;
  color: black;
  @media (max-width: 850px) {
    text-align: center;
  }
`;
const EventCardText = styled.p`
  font-size: 22px;
`;

const EventCard = () => {
  return (
    <>
      <EventCardContainer>
        <EventCardLogoContainer>
          <Logo src={MintGreenLogo} alt="Mint-Logo" width={115} />
        </EventCardLogoContainer>
        <EventCardContent>
          <EventCardTitle>Zirveler</EventCardTitle>
          <EventCardText>
            2022-2023 Zirveleri: Yıldız Yazılım Zirvesi, Ytü Yapay Zeka ve Veri
            Bilimi Zirvesi, Yıldız Siber Güvenlik Zirvesi, Ytü Blockchain
            Zirvesi
          </EventCardText>
        </EventCardContent>
      </EventCardContainer>
      <br />
      <EventCardContainer>
        <EventCardLogoContainer>
          <Logo src={MintGreenLogo} alt="Mint-Logo" width={115} />
        </EventCardLogoContainer>
        <EventCardContent>
          <EventCardTitle>Eğitimler</EventCardTitle>
          <EventCardText>
            2022-2023 Eğitimleri: Python, SQL, ROS, Image-Processing, Microsoft
            Apps, Flutter, C
          </EventCardText>
        </EventCardContent>
      </EventCardContainer>
      <br />
      <EventCardContainer>
        <EventCardLogoContainer>
          <Logo src={MintGreenLogo} alt="Mint-Logo" width={115} />
        </EventCardLogoContainer>
        <EventCardContent>
          <EventCardTitle>Buluşmalar</EventCardTitle>
          <EventCardText>
            2022-2023 Buluşmaları: Tanışma Kahvaltısı
          </EventCardText>
        </EventCardContent>
      </EventCardContainer>
      <br />
    </>
  );
};

export default EventCard;
