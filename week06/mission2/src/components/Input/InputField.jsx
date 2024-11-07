import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  height: 50px;
  font-family: 'Arial', sans-serif;
  width: 100%;
  border-radius: 10px;
  padding-left: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const InputField = ({ type, name, placeholder, register, errors }) => (
  <>
    <StyledInput
      type={type}
      {...register(name)}
      placeholder={placeholder}
    />
    <div style={{ color: 'red' }}>{errors[name]?.message}</div>
  </>
);

export default InputField;
