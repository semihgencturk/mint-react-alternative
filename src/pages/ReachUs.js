import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

const ReachUsContainer = styled.div`
  min-height: 85vh;
  display: flex;
  gap: 65px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: linear-gradient(
    135deg,
    rgba(106, 192, 104, 1) 0%,
    rgba(96, 163, 188, 1) 100%
  );
  padding: 15vh 5vh 0 5vh;
  margin-top: -10vh;
`;

const ReachUsHeader = styled.div`
  font-size: 50px;
`;

const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
`;

const SocialMediaIcon = styled.span`
  font-size: 50px;
  color: white;

  :hover {
    color: #ff8c89;
  }
`;

const MintMail = styled.p`
  font-size: 20px;
  font-weight: 900;
`;

const ExternalLinkButton = styled.a`
  text-decoration: none;
  color: white;
  background: linear-gradient(
    135deg,
    rgba(246, 214, 59, 1) 0%,
    rgba(255, 140, 137, 1) 100%
  );
  border: none;
  border-radius: 25px;
  padding: 10px 20px 10px 20px;
  font-size: 25px;
  width: fit-content;
  cursor: pointer;

  :hover {
    color: black;
  }
`;

const ReachUs = () => {
  return (
    <>
      <Navbar />
      <ReachUsContainer>
        <ReachUsHeader>Bize Ulaşın</ReachUsHeader>
        <SocialMedias>
          <a
            href="https://www.linkedin.com/company/ytumint/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialMediaIcon
              className="fa-brands fa-linkedin"
              aria-hidden="true"
            ></SocialMediaIcon>
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com/ytumint"
            target="_blank"
            rel="noreferrer"
          >
            <SocialMediaIcon
              className="fa-brands fa-twitter-square"
              aria-hidden="true"
            ></SocialMediaIcon>
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://www.instagram.com/ytumint/"
            target="_blank"
            rel="noreferrer"
          >
            <SocialMediaIcon
              className="fa-brands fa-instagram-square"
              aria-hidden="true"
            ></SocialMediaIcon>
            <span className="sr-only">instagram</span>
          </a>
          <a
            href="https://www.youtube.com/channel/UCpDavx79w9XLd2WJuyjw5rg"
            target="_blank"
            rel="noreferrer"
          >
            <SocialMediaIcon
              className="fa-brands fa-youtube-square"
              aria-hidden="true"
            ></SocialMediaIcon>
            <span className="sr-only">Youtube</span>
          </a>
        </SocialMedias>
        <MintMail>mintunity@gmail.com</MintMail>
        {/* <LinkButton link="/Hakkimizda" text="Yönetim Kurulumuza Ulaşın" /> */}
        <ExternalLinkButton
          href="https://docs.google.com/forms/d/e/1FAIpQLSfG_yy2oUhuMitfx-9Taka_ON9UeZOg7Ric5vuTnw7S0Zf1jQ/viewform?usp=sf_link"
          target="_blank"
        >
          Üye Başvurusu
        </ExternalLinkButton>
      </ReachUsContainer>
    </>
  );
};

export default ReachUs;
