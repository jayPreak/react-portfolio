import React from "react";
import styled from "styled-components";
import Me from "../assets/Images/jay2.png";

const Box = styled.div`
  position: absolute;
  display: flex;
  width: 55vw;
  // height: 40vh;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  // background-repeat: no-repeat;
  // background-size: 100% 2px;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export default function Intro() {
  return (
    <Box>
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Jayesh Bhushan</h3>
          <h6>
            Passionate about crafting seamless digital experiences that bridge
            the gap between aesthetics and functionality
          </h6>
        </Text>
      </SubBox>
      <SubBox>
        <div>
          <img className="pic" src={Me} alt="Profile"></img>
        </div>
      </SubBox>
    </Box>
  );
}
