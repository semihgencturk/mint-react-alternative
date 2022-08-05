import React from "react";
import styled from "styled-components";

const ScrollButtonContainer = styled.a`
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

  span {
    padding-left: 12px;
    padding-right: 12px;
  }

  :hover {
    color: black;
  }
`;

const ScrollButton = ({ text, href }) => {
  return (
    <ScrollButtonContainer href={href}>
      <span className="fa-solid fa-circle-arrow-down"></span>
      {text}
      <span className="fa-solid fa-circle-arrow-down"></span>
    </ScrollButtonContainer>
  );
};

export default ScrollButton;
