import styled from "styled-components";

export const ProjectStyle = styled.div`
  min-height: 100vh;
`;

export const ProjectsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const SingleProject = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 5px;
  width: calc(95% / 2);
`;

export const ImgProjact = styled.img`
  width: 100%;
  max-width: 100%;
  border-radius: 5px 5px 0px 0px;
`;

export const Name = styled.h3`
  text-align: center;
  padding-bottom: 5px;
  border-radius: 10px;
  text-transform: capitalize;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary_blue};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.sm};
  }
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  gap: 15px;
  text-transform: uppercase;
  flex-wrap: wrap;
`;

export const Tab = styled.span`
  border: 2px solid ${({ theme }) => theme.colors.primary_blue};
  padding: 10px;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #020c1a;
    border: 2px solid #020c1a;
    transform: rotate(5deg);
  }

  &.active {
    background-color: #020c1a;
    border: 2px solid #020c1a;
    transform: rotate(5deg);
  }
`;

export const Information = styled.div`
  padding: 10px;
`;

export const Tools = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
`;
export const Buttons = styled.div`
  display: flex;
  gap: 15px;
  border-top: 2px solid ${({ theme }) => theme.colors.primary_blue};
  border-radius: 5px;
  padding: 10px;
  @media (max-width: 768px) {
    padding: 5px;
    gap: 5px;
  }
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  background-color: transparent;
  color: #fff;
  padding: 5px;
  width: calc(99% / 2);
  cursor: pointer;
  border-radius: 3px;
  font-size: ${({ theme }) => theme.font_size.sm};
  font-weight: lighter;
  color: #fff;
  border: 2px solid #448ce638;
  border-radius: 2px;
  text-transform: uppercase;
  text-decoration: none;
  font-family: "Kaushan Script", cursive;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.colors.primary_blue};
    font-weight: bold;
  }
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.font_size.xsm};
  }
`;
