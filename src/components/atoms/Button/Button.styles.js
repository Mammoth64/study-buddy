import styled from "styled-components";

export const StyledButton = styled.button`
  width: 28px;
  height: 28px;
  margin: 0 10px;
  background-color: ${({theme}) => theme.colors.ligthGrey};
  border-radius: 50px;
  border-style: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 80%;
  top: 35%;
  
  
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