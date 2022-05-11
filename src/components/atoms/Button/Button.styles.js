import styled from "styled-components";

export const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${({theme}) => theme.colors.ligthGrey};
  border-radius: 50px;
  border-style: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  svg{
    width: 100%;
    height: 100%;
    stroke: white;
  }
  svg:hover{
    fill: #FF6666;
    cursor: pointer;
  }
`;