import React from "react";
import styled from "styled-components";
import LinkButton from "../ui/LinkButton";

const ContactContainer = styled.div`
  min-height: 40vh;
  background: linear-gradient(
    135deg,
    rgba(106, 192, 104, 1) 0%,
    rgba(96, 163, 188, 1) 100%
  );
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3vh 0 3vh 0;
  width: 100%;
`;

const ContactHeader = styled.div`
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

const LinkButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5%;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeader>Bize Ulaşın</ContactHeader>
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
        <a href="https://twitter.com/ytumint" target="_blank" rel="noreferrer">
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
      <LinkButtons>
        <LinkButton link="/Topluluklar" text="Topluluklar" />
        <LinkButton link="/Etkinlikler" text="Etkinlikler" />
        <LinkButton link="/Takimlar" text="Takımlar" />
      </LinkButtons>
    </ContactContainer>
  );
};

export default Contact;
