import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { Label } from "components/atoms/Label/Label";
import { Input } from "components/atoms/Imput/Input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 10px;
  }
`;

const FormField = ({onChange, value, label, name, id, type = 'text', ...props}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>
        {label}
      </Label>
      <Input name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label}></Input>
    </Wrapper>
  )
};

FormField.propTypes = {
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  type: propTypes.string,
}

export default FormField;