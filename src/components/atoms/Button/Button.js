import { theme } from 'assets/styles/theme';
import styled from 'styled-components';

export const Button = styled.button`
padding: 7px 20px;
font-size: ${({theme}) => theme.fontSize.s};
background-color: ${({}) => theme.colors.lightPurple};
border-radius: 20px; 
border: none;
font-weight: bold;
margin-block: 15px;
color: ${({}) => theme.colors.darkGrey};
`;



