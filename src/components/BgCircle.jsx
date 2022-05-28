import React from "react";
import styled, { css } from "styled-components";

const BgCircleStyle = styled.div`
  position: fixed;
  background: #097cf9;
  height: 200px;
  width: 200px;
  filter: blur(150px);
  z-index: 1;
  ${({ dir }) => css`
    ${() => dir === "top right" && "top: 0px;right: 0px;background: #097cf9"}
    ${() => dir === "top left" && "top:200px;left:200px; background: #2c69d1;"}
    ${() =>
      dir === "bottom right" &&
      "bottom: 100px;right: 250px; background: #2c69d1;"}
  `}
`;

const BgCircle = (props) => {
  return <BgCircleStyle {...props}>{props.children}</BgCircleStyle>;
};

export default BgCircle;
