import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarItemContainer = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: solid 2px #f6d63b;
  border-radius: 25px;
  padding: 10px 20px 10px 20px;
  font-size: 22px;
  width: fit-content;
  cursor: pointer;

  :hover {
    color: black;
  }
`;

const NavbarItem = ({ link, text }) => {
  return (
    <Link to={link}>
      <NavbarItemContainer>{text}</NavbarItemContainer>
    </Link>
  );
};

export default NavbarItem;
