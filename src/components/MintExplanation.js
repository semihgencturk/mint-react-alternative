import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Activities from "../components/Activities";
import ScrollButton from "../ui/ScrollButton";
import { mintExpContent } from "../contents/contents";

const MintExplanationContainer = styled.div`
  min-height: 94vh;
  background: linear-gradient(
    135deg,
    rgba(106, 192, 104, 1) 0%,
    rgba(96, 163, 188, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3vh 0 3vh 0;
  width: 100%;
`;

const MintExplanationHeader = styled.h2`
  font-size: 50px;
`;

const MintExplanationText = styled.p`
  font-size: 24px;
  text-align: center;

  span {
    color: #f6d63b;
    font-weight: 600;
  }
`;

const ScrollButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

const MintExplanation = () => {
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
    <MintExplanationContainer>
      <MintExplanationHeader>
        {mintExpContent.mintExpTitle}
      </MintExplanationHeader>
      <MintExplanationText>
        Mint <span>Yıldız Teknik Üniversitesi</span>nde faaliyet gösteren bir{" "}
        <span>öğrenci kulübüdür</span>. Başta <span>yazılım</span>ın her alanını
        kapsayacak şekilde eğitimler, zirveler, workshoplar, yarışmalar
        düzenlerken, buna ek olarak öğrencilerin <span>kişisel beceri</span>
        lerini geliştirmeyi amaçlayan çalışmalar da yapmaktadır.
      </MintExplanationText>
      {windowSize.innerWidth > 850 ? <Activities /> : null}
      <ScrollButtonContainer>
        <ScrollButton text="Partnerlerimiz" />
      </ScrollButtonContainer>
    </MintExplanationContainer>
  );
};

export default MintExplanation;
