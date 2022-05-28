import React from "react";
import styled, { css } from "styled-components";

const ContainerStyle = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  position: relative;
  z-index: 2;
  flex-direction: column;
  padding: 5px;
  ${({ justify }) => css`
    ${() =>
      justify === "space-around" &&
      "display:flex;justify-content:space-around;"}
    ${() =>
      justify === "space-between" &&
      "display:flex;justify-content:space-between;"}
    ${() =>
      justify === "space-evenly" &&
      "display:flex;justify-content:space-evenly;"}
  `}

  align-items: center;
  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media (min-width: 768px) {
    width: 650px;
  }
  @media (min-width: 992px) {
    width: 850px;
  }
  @media (min-width: 1200px) {
    width: 1020px;
  }
  @media (min-width: 1400px) {
    width: 1210px;
  }
`;

const Container = (props) => {
  return <ContainerStyle {...props}>{props.children}</ContainerStyle>;
};

export default Container;
