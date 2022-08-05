import React from "react";
import styled from "styled-components";
import Activity from "../ui/Activity";

const ActivitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 50px 0 0 0;
  gap: 3%;
  justify-content: center;
`;

const Activities = () => {
  return (
    <ActivitiesContainer>
      <Activity link="/Topluluklar" title="Topluluklar" />
      <Activity link="/Takimlar" title="Takımlar" />
      <Activity link="/Etkinlikler" title="Eğitimler" />
      <Activity link="/Etkinlikler" title="Zirveler" />
      <Activity link="/Etkinlikler" title="Buluşmalar" />
    </ActivitiesContainer>
  );
};

export default Activities;
