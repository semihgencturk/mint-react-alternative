import React from "react";
import styled from "styled-components";
import Activity from "../ui/Activity";

const ActivitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 50px 50px 0 0;
  gap: 10%;
  justify-content: center;
`;

const Activities = () => {
  return (
    <ActivitiesContainer>
      <Activity link="/Communities" title="Topluluklar" />
      <Activity link="/" title="Takımlar" />
      <Activity link="/" title="Eğitimler" />
      <Activity link="/" title="Zirveler" />
      <Activity link="/" title="Buluşmalar" />
    </ActivitiesContainer>
  );
};

export default Activities;
