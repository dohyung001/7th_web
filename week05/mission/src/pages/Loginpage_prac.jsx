import React, { useState } from "react";
import styled from "styled-components";
import useForm from "../hooks/use-form";
import { validateLogin } from "../utils/validate";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  padding: 20px;
  padding-top: 10%;
  justify-content: center;
`;

const LoginContainer = styled.form`
  width: 50%;
  min-width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  height: 50px;
  font-family: 'Arial', sans-serif;
  width: 100%;
  border-radius: 10px;
  padding-left: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
`;
const StyledSubmitButton = styled.button`
  width: 100%;
  height: 50px;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
  background-color: rgb(253,4,91);
  color: white;
  font-size:20px;
`;
const LoginPage_prac = () => {
  const login = useForm({
    initialValue: {
      email: '',
      password: '',
    },
    validate: validateLogin
  });
  const PressLogin = () => {
    console.log(login.values);
  }
  return (
    <Background>
      <LoginContainer>
        <Input
          type="email"
          placeholder="이메일을 입력해주세요!"
          {...login.getTextInputProps("email")}
        />
        {login.touched.email && login.errors.email && (
          <div style={{ color: "red" }}>{login.errors.email}</div>
        )}

        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          {...login.getTextInputProps("password")}
        />
        {login.touched.password && login.errors.password && (
          <div style={{ color: "red" }}>{login.errors.password}</div>
        )}
        <StyledSubmitButton onClick={PressLogin}>로그인</StyledSubmitButton>
      </LoginContainer>
    </Background>
  );
};

export default LoginPage_prac;
