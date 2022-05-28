import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
const Glow = keyframes`
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6, 0 0 25px #0073e6, 0 0 30px #0073e6, 0 0 35px #0073e6;
  }
  to {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0073e6, 0 0 40px #0073e6, 0 0 50px #0073e6, 0 0 60px #0073e6, 0 0 70px #0073e6;
  }
`;

export const HomeStyle = styled.div`
  min-height: 100vh;
`;

export const Header = styled.header``;

export const Title = styled.div`
  text-align: center;
  padding-top: 30px;
  letter-spacing: 2px;
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: "Kaushan Script", cursive;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.sm};
  }
`;

export const Comma = styled.span`
  color: ${({ theme }) => theme.colors.primary_blue};
  font-size: 1.5rem;
`;

export const Name = styled.h1`
  margin-top: 7px;
  margin-bottom: 7px;
  font-size: ${({ theme }) => theme.font_size.xlg};
  animation: ${Glow} 1s ease-in-out infinite alternate;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.lg};
  }
`;

export const Job = styled(Typewriter)`
  font-size: ${({ theme }) => theme.font_size.md};
  font-family: cursive;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.sm};
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary_blue};

  @media (max-width: 768px) {
    width: 320px;
    height: 320px;
  }
`;

export const Desc = styled.p`
  font-weight: bold;
  font-style: italic;
  padding: 5px;
  width: 75%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
