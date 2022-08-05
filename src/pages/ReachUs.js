import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import MintUs from "../assets/MintUs.png";
import LinkButton from "../ui/LinkButton";

const ReachUsBigContainer = styled.div`
  display: flex;
  min-height: 85vh;
  background: linear-gradient(
    135deg,
    rgba(106, 192, 104, 1) 0%,
    rgba(96, 163, 188, 1) 100%
  );
  padding: 15vh 0 0 5vh;
  margin-top: -10vh;
`;

const ReachUsContainer = styled.div`
  min-height: 85vh;
  display: flex;
  gap: 65px;
  flex-direction: column;
  align-items: flex-start;
  flex-basis: 33%;
`;

const ReachUsHeader = styled.div`
  font-size: 50px;
`;

const SocialMedias = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
  padding-left: 15vh;
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

  padding-left: 30vh;
`;

const ReachUsImageContainer = styled.div`
  flex-basis: 67%;
  padding: 0 3% 0 3%;
`;

const ReachUsImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 25px;
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
  margin-left: 30vh;
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
      <ReachUsBigContainer>
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
          <LinkButton link="/Hakkimizda" text="Yönetim Kurulumuza Ulaşın" />
          <ExternalLinkButton href="">Uye Başvurusu</ExternalLinkButton>
        </ReachUsContainer>
        <ReachUsImageContainer>
          <ReachUsImage src={MintUs} alt="Mint Yönetim Kurulu" />
        </ReachUsImageContainer>
      </ReachUsBigContainer>
    </>
  );
};

export default ReachUs;
