import React from 'react';
import styled from 'styled-components';

const StyledPasswordInput = styled.input`
  font-family: 'Arial', sans-serif;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  padding-left: 10px;
  margin-top:20px;
   margin-bottom:10px;
`;

const PasswordInput = ({ register, trigger, errors }) => (
  <>
    <StyledPasswordInput
      type="password"
      {...register("password")}
      placeholder="비밀번호를 입력해주세요!"
      onBlur={() => trigger("password")}
    />
    <div style={{ color: 'red' }}>{errors.password?.message}</div>
  </>
);

export default PasswordInput;
