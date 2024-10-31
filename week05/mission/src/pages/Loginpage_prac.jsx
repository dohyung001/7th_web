
/*
import React, { useState } from "react";
import styled from "styled-components";
import useForm from "../hooks/use-form"
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

const LoginPage_prac = () => {
  const login = useForm({
    initialValue:{
      email:'',
      password:'',
    },
    validate:validateLogin
  })

  const handleBlur = (name) => {
    setTouched((touched) => ({
      ...touched,
      [name]: true,
    }));
  };

  const handleChangeInput = (name, value) => {
    setValues({ ...values, [name]: value });
  };
  console.log(touched)
  return (
    <Background>
      <LoginContainer>
        <h1>로그인</h1>
        <input
          type="email"
          placeholder="이메일"
          value={values.email}
          onBlur={() => handleBlur("email")}
          onChange={() => handleChangeInput("email", e.target.value)}
        />
        <input
          type="password"
          placeholder="비번"
          value={values.password}
          onBlur={() => handleBlur("password")}
          onChange={() => handleChangeInput("password", e.target.value)}
        />
        <button>제출</button>
      </LoginContainer>
    </Background>
  );
};

export default LoginPage_prac;
*/