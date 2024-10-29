import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const SignUpPage = () => {
  //유효성검사 스키마 선언
  //(커스텀 에러메세지 설정)
  const schema = yup.object().shape({
    email: yup.string().email().required('이메일을 반드시 입력해주세요.'),
    password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required(),
  })

  //패키지로 설치한 yupResolver를 통해 스키마와 폼 연결
  //(에러 메시지 useForm hook에서 formState를 추가로 불러와야 합니다.)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log('폼 데이터 제출')
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type={'email'} {...register("email")} />
      <p style={{ color: 'red' }}>{errors.email?.message}</p>
      <input type={'password'} {...register("password")} />
      <p style={{ color: 'red' }}>{errors.password?.message}</p>
      <input type={'submit'} />
    </form>
  );
};

export default SignUpPage;
