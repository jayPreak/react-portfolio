import React from "react";
import styled from "styled-components";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) => props.theme.text};
  font-family: "Fredoka One", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;
export default function LogoComponent() {
  return <Logo>JB</Logo>;
}
