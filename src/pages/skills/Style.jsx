import styled from "styled-components";

export const SkillsStyle = styled.div`
  min-height: 100vh;
`;

export const MySkills = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Skill = styled.span`
  display: flex;
  align-items: center;
  gap: 15px;
  width: calc(93% / 3);
  background-color: #031022;
  text-transform: uppercase;
  font-size: 1.6rem;
  border-left: 5px solid ${({ theme }) => theme.colors.primary_blue};
  border-radius: 5px;
  padding: 10px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_blue};
  }

  @media (max-width: 768px) {
    width: calc(92% / 2);
    font-size: ${({ theme }) => theme.font_size.xsm};
  }
  @media (max-width: 992px) {
    width: calc(92% / 2);
    font-size: ${({ theme }) => theme.font_size.sm};
  }
`;

export const Lang = styled.span``;
