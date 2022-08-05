import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ActivityContainer = styled.a`
  width: 150px;
  height: 250px;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(246, 214, 59, 1) 0%,
    rgba(255, 140, 137, 1) 100%
  );
  border: solid black 2px;
  border-radius: 25px;
  cursor: pointer;

  span {
    display: none;
  }

  :hover {
    flex-direction: column;
    justify-content: space-evenly;
    span {
      display: flex;
    }
  }

  @media (max-width: 850px) {
    height: 150px;
    margin-bottom: 5px;
  }
`;

const ActivityText = styled.h3`
  font-weight: 900;
  font-size: 24px;
`;

const ActivityExp = styled.span`
  font-size: 16px;
`;

const Activity = ({ link, title }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={link}>
      <ActivityContainer>
        <ActivityText>{title}</ActivityText>
        <ActivityExp>Bilgi icin tiklayiniz.</ActivityExp>
      </ActivityContainer>
    </Link>
  );
};

export default Activity;
