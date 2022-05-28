import React from "react";
import styled from "styled-components";
import { JackInTheBox } from "react-awesome-reveal";

const TitleStyle = styled.div`
  position: relative;
  text-align: center;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding: 0 5px;
  background: #177fff;
  font-size: 3.5rem;
  font-weight: bold;
  color: #020c1a;
  border-radius: 5px;
  text-transform: uppercase;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.lg};
  }
`;

const Slash = styled.span`
  color: #020c1a;
  position: absolute;
  font-size: 4.3rem;
  right: 29px;
  top: -10px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    right: 20px;
    top: -7px;
  }
`;

const Title = (props) => {
  return (
    <JackInTheBox>
      <TitleStyle>
        &#60; {props.children}
        &nbsp;<Slash>/</Slash>&nbsp;&nbsp;&#62;
      </TitleStyle>
    </JackInTheBox>
  );
};

export default Title;
