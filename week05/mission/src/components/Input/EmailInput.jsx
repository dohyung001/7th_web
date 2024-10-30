import React from 'react';
import styled from 'styled-components';

const StyledEmailInput = styled.input`
  height: 50px;
  font-family: 'Arial', sans-serif;
  width: 100%;
  border-radius: 10px;
  padding-left: 10px;
  margin-top:20px;
  margin-bottom:10px;
`;

const EmailInput = ({ register, trigger, errors }) => (
  <>
    <StyledEmailInput
      type="email"
      {...register("email")}
      placeholder="이메일을 입력해주세요!"
      onBlur={() => trigger("email")}
    />
    <div style={{ color: 'red' }}>{errors.email?.message}</div>
  </>
);

export default EmailInput;
