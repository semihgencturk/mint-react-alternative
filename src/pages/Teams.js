import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import TeamCard from "../components/TeamCard";

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
`;

const TeamsHeader = styled.h2`
  font-size: 50px;
`;

const Teams = () => {
  return (
    <>
      <Navbar />
      <TeamsContainer>
        <TeamsHeader>Takımlarımız</TeamsHeader>
        <TeamCard />
      </TeamsContainer>
    </>
  );
};

export default Teams;
