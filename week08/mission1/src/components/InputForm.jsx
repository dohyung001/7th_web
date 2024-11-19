import styled from 'styled-components';

const InputForm = ({ }) => {
  return (
    <InputContainer>
      <Input placeholder='제목을 입력해주세요'></Input>
      <Input placeholder='내용을 입력해주세요'></Input>
      <SubmitButton>Todo 생성</SubmitButton>
    </InputContainer>
  )
}

export default InputForm;

const InputContainer = styled.div`
width:100%;
display:flex;
flex-direction: column;
align-items:center;
gap:5px;
`
const Input = styled.input`
width:100%;
height:30px;
border:0.2px solid rgba(0,0,0,0.2);
border-radius: 5px;
padding-left: 5px;
box-sizing: border-box;
`

const SubmitButton = styled.button`
  width:100%;
height:30px;
border:0.2px solid rgba(0,0,0,0.2);
border-radius: 5px;
font-size: 20px;
box-sizing: border-box;

`