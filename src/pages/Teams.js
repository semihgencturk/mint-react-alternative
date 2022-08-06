import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import TeamCard from "../components/TeamCard";
import { teamsContent } from "../contents/contents";

const TeamsContainer = styled.div`
 min-height: 90vh;
 height: fit-content;
 display flex;
 flex-direction: column;
 background: linear-gradient(
    135deg,
    rgba(96, 163, 188, 1) 0%,
    rgba(106, 192, 104, 1) 100%
  );
  margin-top: -10vh;
  padding-top: 10vh;
  padding-left: 25px;
  @media (max-width: 850px) {
    padding-left: 0;
  }
`;

const TeamsHeader = styled.h2`
  font-size: 50px;

  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 400px) {
    font-size: 40px;
  }
`;

const Teams = () => {
  return (
    <>
      <Navbar />
      <TeamsContainer>
        <TeamsHeader>Takımlarımız</TeamsHeader>
        <TeamCard items={teamsContent} />
      </TeamsContainer>
    </>
  );
};

export default Teams;
