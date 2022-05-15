import React from "react";
import propTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import { StyledGrade, StyledInfo, Wrapper } from "./UsersListItem.styles";


const UsersListItem = ({deleteUser, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <StyledGrade value={average}>{average}</StyledGrade>
    <StyledInfo>
      <p>
        {name}
      <Button onClick={() => deleteUser(name)} />
      </p>
      <p>{attendance}</p>
    </StyledInfo>
  </Wrapper>
);


UsersListItem.propTypes = {
  userData: propTypes.shape({
    average: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    attendance: propTypes.string
  }),
};


export default UsersListItem;
