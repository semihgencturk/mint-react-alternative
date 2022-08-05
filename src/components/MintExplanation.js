import React from "react";
import styled from "styled-components";
import Activities from "../components/Activities";
import ScrollButton from "../ui/ScrollButton";
import { mintExpContent } from "../contents/contents";

const MintExplanationContainer = styled.div`
  min-height: 90vh;
  background: linear-gradient(
    135deg,
    rgba(106, 192, 104, 1) 0%,
    rgba(96, 163, 188, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5vh 0 5vh 0;
`;

const MintExplanationHeader = styled.h2`
  font-size: 50px;
`;

const MintExplanationText = styled.p`
  font-size: 24px;
  text-align: center;

  span {
    color: black;
    font-weight: 600;
  }
`;

const ScrollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const MintExplanation = () => {
  return (
    <MintExplanationContainer>
      <MintExplanationHeader>
        {mintExpContent.mintExpTitle}
      </MintExplanationHeader>
      <MintExplanationText>
        Mint <span>Yıldız Teknik Üniversitesi</span>nde faaliyet gösteren bir
        <span>öğrenci kulübüdür</span>. Başta <span>yazılım</span>ın her alanını
        kapsayacak şekilde eğitimler, zirveler, workshoplar, yarışmalar
        düzenlerken, buna ek olarak öğrencilerin <span>soft skil</span>lerini
        geliştirmeyi amaçlayan çalışmalar da yapmaktadır.
      </MintExplanationText>
      <Activities />
      <ScrollButtonContainer>
        <ScrollButton text="Partnerlerimiz" />
      </ScrollButtonContainer>
    </MintExplanationContainer>
  );
};

export default MintExplanation;
