import styled from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
    font-family: 'Montserat', sans-serif;
  }
`;

export const StyledGrade = styled.li`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background:${({theme, value}) => {
    if (value <= 3) return theme.colors.error;
    if (value < 4) return theme.colors.warning;
    if (value >= 4) return theme.colors.success; 
  }};
`;

export const StyledInfo = styled.div`
  padding: 25px 20px;

  p{
    color: ${({ theme }) => theme.colors.darkGrey};
    margin: 0;
  }

  p:first-child {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
    align-items: center;
    display: flex;
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
