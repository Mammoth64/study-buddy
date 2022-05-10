import React from "react";
import propTypes from 'prop-types';

const UsersListItem = ({userData: {average, name, attendance = '0%'}}) => (
  <div>
    <li>
          <div>{average}</div>
          <div>
            <p>{name}</p>
            <p>{attendance}</p>
          </div>
          <button>X</button>
        </li>
  </div>
);


UsersListItem.propTypes = {
  userData: propTypes.shape({
    average: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    attendance: propTypes.string
  }),
};


export default UsersListItem;
