import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButtonContainer = styled.button`
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

const LinkButton = ({ link, text }) => {
  return (
    <Link to={link}>
      <LinkButtonContainer>{text}</LinkButtonContainer>
    </Link>
  );
};

export default LinkButton;
