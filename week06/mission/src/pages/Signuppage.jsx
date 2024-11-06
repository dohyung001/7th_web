import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../components/Input/InputField";
import SubmitButton from "../components/Button/SubmitButton";
import axios from "axios";
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  padding: 20px;
  display: flex;
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

const Signuppage = () => {
  // 유효성 검사 스키마(yup)
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("올바른 이메일 형식이 아닙니다! 다시 입력해주세요")
      .required("이메일을 반드시 입력해주세요."),
    password: yup
      .string()
      .min(8, "비밀번호는 8자 이상이어야 합니다.")
      .max(16, "비밀번호는 16자 이하여야 합니다.")
      .required("비밀번호를 입력해주세요"),
    passwordCheck: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
      .required("비밀번호를 다시 입력해주세요"),
  });

  //useForm, 폼, 스키마 연결
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log(data);
    const fetch = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/auth/register",
          {
            email: "23423@gmail.com",
            password: "hihi",
            passwordCheck: "hihi",
          }
        );
        console.log(response);
      } catch (error){
        console.log("에러",error);
      } finally {
        console.log("되긴함");
      }
      
    };
    fetch();
  };

  return (
    <Background>
      <LoginContainer onSubmit={handleSubmit(onSubmit)}>
        <h1>회원가입</h1>

        <InputField
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요!"
          register={register}
          errors={errors}
        />

        <InputField
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요!"
          register={register}
          errors={errors}
        />

        <InputField
          type="password"
          name="passwordCheck"
          placeholder="비밀번호를 다시 입력해주세요!"
          register={register}
          errors={errors}
        />

        <SubmitButton label="제출" isvalidate={isValid} />
      </LoginContainer>
    </Background>
  );
};

export default Signuppage;
