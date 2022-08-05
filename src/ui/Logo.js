import React from "react";
import styled from "styled-components";

const LogoContainer = styled.img`
  width: ${(props) => props.width && props.width}px;
  height: auto;
  @media (max-height: 850px) {
    display: none;
  }
`;

const Logo = ({ src, alt, width }) => {
  return <LogoContainer src={src} alt={alt} width={width} />;
};

export default Logo;
