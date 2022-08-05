import React from "react";
import styled from "styled-components";
import AuroraLogo from "../assets/AuroraLogo.png";
import AstridLogo from "../assets/AstridLogo.png";
import Logo from "../ui/Logo";

const TeamCardContainer = styled.div`
  max-width: 1400px;
  min-height: 100px;
  border-top: solid #ff8c89 2px;
  border-left: solid #ff8c89 2px;
  border-bottom: solid #f6d63b 2px;
  border-right: solid #f6d63b 2px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  padding: 0 25px 0 25px;
`;

const TeamCardLogoContainer = styled.div`
  flex-basis: 20%;
`;

const TeamCardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 80%;
`;
const TeamCardTitle = styled.h3`
  font-size: 26px;
  color: black;
`;
const TeamCardText = styled.p`
  font-size: 22px;
`;

const TeamCard = () => {
  return (
    <>
      <TeamCardContainer>
        <TeamCardLogoContainer>
          <Logo src={AuroraLogo} alt="Aurora-Logo" width={115} />
        </TeamCardLogoContainer>
        <TeamCardContent>
          <TeamCardTitle>Aurora UAV</TeamCardTitle>
          <TeamCardText>
            AURORA UAV, Yıldız Teknik Üniversitesi MINT kulübü bünyesinde
            kurulmuş, insansız hava aracı sistemleri geliştirme takımıdır. Döner
            Kanat IHA ve Sabit Kanat IHA olmak üzere iki aracı vardır.
          </TeamCardText>
        </TeamCardContent>
      </TeamCardContainer>
      <br />
      <TeamCardContainer>
        <TeamCardLogoContainer>
          <Logo src={AstridLogo} alt="Astrid-Logo" width={115} />
        </TeamCardLogoContainer>
        <TeamCardContent>
          <TeamCardTitle>Astrid Otonom</TeamCardTitle>
          <TeamCardText>
            YTÜ-Astrid Otonom Takımı, Ekim 2020’de farklı mühendislik
            disiplinleri üzerine çalışan üniversite öğrencileri tarafından
            kurulan bir proje takımıdır.Takımımız “mobilite özellikler taşıyan
            otonom sistemler” üzerine çalışmaktadır ve süregelen teorik
            eğitimlerimizdeki öğretileri uygulamalı olarak hayata geçirmeyi
            hedeflemektedir.
          </TeamCardText>
        </TeamCardContent>
      </TeamCardContainer>
    </>
  );
};

export default TeamCard;
