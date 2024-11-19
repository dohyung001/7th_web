import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setInputValue, addItem } from '../redux/todoSlice';

const InputForm = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.todos.inputValue);

  const handleChange = (e) => {
    dispatch(setInputValue(e.target.value));
  }
  const handleSubmit = () => {
    dispatch(addItem());
  };

  return (
    <InputContainer>
      <Input
        placeholder='내용을 입력해주세요'
        value={inputValue}
        onChange={handleChange} />
      <Input
        placeholder='제목을 입력해주세요'

      />
      <SubmitButton onClick={handleSubmit}>Todo 생성</SubmitButton>
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