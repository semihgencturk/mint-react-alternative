import React from "react";
import styled from "styled-components";

const DividerContainer = styled.div`
  height: 1vh;
  background: linear-gradient(
    135deg,
    rgba(246, 214, 59, 1) 0%,
    rgba(255, 140, 137, 1) 100%
  );
`;

const Divider = () => {
  return <DividerContainer />;
};

export default Divider;
