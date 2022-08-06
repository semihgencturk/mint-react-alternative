import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const HorizontalCardContainer = styled.div`
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

const HorizontalCardLogoContainer = styled.div`
  flex-basis: 20%;
`;

const HorizontalCardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 80%;
`;
const HorizontalCardTitle = styled.h3`
  font-size: 26px;
  color: black;
  @media (max-width: 850px) {
    text-align: center;
  }
`;
const HorizontalCardText = styled.p`
  font-size: 22px;

  @media (max-width: 850px) {
    padding-left: 3%;
  }
`;

const HorizontalCard = ({ item }) => {
  return (
    <>
      <HorizontalCardContainer>
        <HorizontalCardLogoContainer>
          <Logo src={item.logo.src} alt={item.logo.alt} width={115} />
        </HorizontalCardLogoContainer>
        <HorizontalCardContent>
          <HorizontalCardTitle>{item.title}</HorizontalCardTitle>
          <HorizontalCardText>{item.text}</HorizontalCardText>
        </HorizontalCardContent>
      </HorizontalCardContainer>
    </>
  );
};

export default HorizontalCard;
