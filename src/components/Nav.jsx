import React from "react";
import styled, { css } from "styled-components";
import { BiHome } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { FaNetworkWired } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";

const NavStyle = styled.nav`
  display: flex;
  position: fixed;
  opacity: 1;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: black;

  @media (min-width: 768px) {
    gap: 50px;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    padding: 25px 5px;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    gap: 20px;
    top: auto;
    justify-content: space-around;
    padding: 5px 25px;
    flex-direction: row;
    bottom: 10px;
    width: 100%;
    z-index: 999;
    opacity: 0.9;
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3px;
    margin-right: 3px;
    border-radius: 50%;
    background-color: #101010;
    cursor: pointer;
    &:hover {
      border: 3px solid ${({ theme }) => theme.colors.primary_blue};
      border-radius: 50%;

      &:hover .icon {
        fill: ${({ theme }) => theme.colors.primary_blue};
      }
    }

    &.active {
      border: 3px solid ${({ theme }) => theme.colors.primary_blue};
      border-radius: 50%;
      .icon {
        fill: ${({ theme }) => theme.colors.primary_blue};
      }
    }

    @media (min-width: 768px) {
      width: 75px;
      height: 75px;
    }
    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }
`;

const sharedIconStyle = css`
  fill: #9ab2d0f7;
  @media (min-width: 768px) {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

const BiHomeStyle = styled(BiHome)`
  ${sharedIconStyle}
`;
const GiSkillsStyle = styled(GiSkills)`
  ${sharedIconStyle}
`;

const FaNetworkWiredtStyle = styled(FaNetworkWired)`
  ${sharedIconStyle}
`;

const BiMessageRoundedDotsStyle = styled(BiMessageRoundedDots)`
  ${sharedIconStyle}
`;

const Nav = () => {
  return (
    <NavStyle>
      <Fade direction={"left"}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={50}
          className="link"
          activeClass="active"
        >
          <BiHomeStyle className="icon" />
        </Link>
        <Link
          to="skills"
          spy={true}
          smooth={true}
          duration={50}
          className="link"
        >
          <GiSkillsStyle className="icon" />
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={50}
          className="link"
        >
          <FaNetworkWiredtStyle className="icon" />
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={50}
          className="link"
        >
          <BiMessageRoundedDotsStyle className="icon" />
        </Link>
      </Fade>
    </NavStyle>
  );
};

export default Nav;
