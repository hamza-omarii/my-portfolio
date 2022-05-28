import styled from "styled-components";

export const ContactStyle = styled.div`
  min-height: 100vh;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  align-items: center;
  flex-direction: row;
  @media (max-width: 992px) {
    flex-direction: column;
  }
  width: 100%;
`;

export const Content = styled.span`
  padding: 10px;
  text-align: center;
  display: block;
  font-size: ${({ theme }) => theme.font_size.sm};
  font-weight: bolder;
  @media (max-width: 768px) {
    &.email {
      font-size: 12px;
    }
  }
`;

export const Logo = styled.div`
  text-align: center;
  font-size: 6rem;
  border-right: 5px solid ${({ theme }) => theme.colors.primary_blue};
  border-radius: 20px;
  padding: 5px;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const CardContact = styled.a`
  background: #031022;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: rgb(3 102 214 / 30%) 0px 0px 0px 3px;
  border-top: 7px solid ${({ theme }) => theme.colors.primary_blue};
  transition: all 0.3s ease;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_blue};
    color: #031022;
  }

  &:hover ${Logo} {
    border-right: 5px solid #031022;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  position: relative;

  .copy {
    position: absolute;
    right: 10px;
    bottom: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary_blue};
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 30px;
  background: transparent;
  border-top: 3px solid ${({ theme }) => theme.colors.primary_blue};
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 15px;
  @media (max-width: 768px) {
    margin-bottom: 100px;
    font-size: ${({ theme }) => theme.font_size.xsm};
    border-radius: 0px;
    border-width: 1px;
  }
`;

export const End = styled.div`
  text-align: center;
  font-weight: lighter;
`;
