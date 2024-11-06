import { useEffect, useState } from "react";


//값,에러,touched,
function useForm({ initialValue, validate }) {
  const [touched, setTouched] = useState({});
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});

  //{'email':'freddy@naver.com'}
  const handleChangeInput = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  //{'email':true , 'password':false}
  const handleBlur = (name) => {
    setTouched((touched) => ({
      ...touched,
      [name]: true,
    }));
  };

  //input 텍스트를 관리하는 객체 반환 함수
  const getTextInputProps = (name) => {
    const value = values[name];
    const onChange = (event) => handleChangeInput(name, event.target.value);
    const onBlur = () => handleBlur(name);

    return { value, onChange, onBlur }; //리턴
  }

  //값이 바뀔때 마다 유효성 검사 실행
  useEffect(() => {
    const newErrors = validate(values);
    console.log(newErrors);
    setErrors(newErrors);

  }, [validate, values])

  return { values, errors, touched, getTextInputProps } //리턴
}


export default useForm
