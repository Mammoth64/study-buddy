
import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList, StyledTitle, Wrapper } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const UsersList = () => {
  const [users, setUsers] = useState(usersData);
  const [formsValues, setFormValues] = useState(initialFormState);

  

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formsValues,
      [e.target.name]: e.target.value,
    });
  }

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      name: formsValues.name,
      attendance: formsValues.attendance,
      average: formsValues.average,
    }

    setUsers([newUser, ...users]);
    setFormValues(initialFormState);
  }

  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser} >
        <StyledTitle>Add a new student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={formsValues.name} onChange={handleInputChange}></FormField>
        <FormField label="Attendance" id="attendance" name="attendance" value={formsValues.attendance} onChange={handleInputChange}></FormField>
        <FormField label="Average" id="average" name="average" value={formsValues.average} onChange={handleInputChange}></FormField>
        <Button type="submit">Add</Button>
      </Wrapper>
      <Wrapper>
        <StyledTitle>Students list</StyledTitle>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;