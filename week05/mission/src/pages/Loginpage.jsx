import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import EmailInput from '../components/Input/EmailInput';
import PasswordInput from '../components/Input/PasswordInput';
import SubmitButton from '../components/Button/SubmitButton';

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
  //유효성 검사 스키마
  const schema = yup.object().shape({
    email: yup.string().email("올바른 이메일 형식이 아닙니다! 다시 입력해주세요").required("이메일을 입력해주세요"),
    password: yup.string().min(8, "비밀번호는 8~16자 사이로 입력해주세요").max(16, "비밀번호는 8~16자 사이로 입력해주세요").required("비밀번호를 입력해주세요"),
  });


  const {
    register,
    handleSubmit,
    formState: { errors,isValid },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur", // 제출 이전 유효성 검사
    reValidateMode:"onChange" //제출 이후 유효성 검사 (onBlur 다음 이거로 변환 안됨)

  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Background>
      <LoginContainer onSubmit={handleSubmit(onSubmit)}>
        <h1>로그인</h1>
        <EmailInput register={register} trigger={trigger} errors={errors} />
        <PasswordInput register={register} trigger={trigger} errors={errors} />
        <SubmitButton label="로그인" isvalidate={isValid}/>
      </LoginContainer>
    </Background>
  );
};

export default LoginPage;
