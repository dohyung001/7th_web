import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../components/Input/InputField";
import SubmitButton from "../components/Button/SubmitButton";

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

const LoginPage = () => {
  /*
  //유효성검사 방식 변경
  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleTouched = (name) => {
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };
*/
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("올바른 이메일 형식이 아닙니다! 다시 입력해주세요")
      .required("이메일을 입력해주세요"),
    password: yup
      .string()
      .min(8, "비밀번호는 8~16자 사이로 입력해주세요")
      .max(16, "비밀번호는 8~16자 사이로 입력해주세요")
      .required("비밀번호를 입력해주세요"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode:"onChange"
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Background>
      <LoginContainer onSubmit={handleSubmit(onSubmit)}>
        <h1>로그인</h1>

        <InputField
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요!"
          register={register}
          errors={errors}
          /*
          onBlur={() => {
            handleTouched("email");
            trigger("email");
          }}
          onChange={() => touched.email && trigger("email")}
          */
        />

        <InputField
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요!"
          register={register}
          errors={errors}
          /*onBlur={() => {
            handleTouched("password");
            trigger("password");
          }}
          onChange={() => touched.password && trigger("password")}
          */
        />

        <SubmitButton label="제출" isvalidate={isValid} />
      </LoginContainer>
    </Background>
  );
};

export default LoginPage;
