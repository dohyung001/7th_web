import styled from 'styled-components';
import { useState } from 'react';
import axiosInstance from '../apis/axiosInstance';

const InputForm = ({ onNewTodo }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  //생성 함수
  const handleSubmit = async () => {
    if (!title || !content) {
      alert('입력해라.');
      return;
    }
    try {
      await axiosInstance.post('/', {
        title,
        content,
        checked: false
      });

      // 새로운 할 일이 추가된 후 Todo페이지 데이터를 다시 불러옴
      onNewTodo();

      // 인풋 초기화
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('에러:', error);
    }
  };

  // 제목 입력
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  // 내용 입력
  const handleContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <InputContainer>
      <Input
        placeholder='제목을 입력해주세요'
        value={title}
        onChange={handleTitle}
      />
      <Input
        placeholder='내용을 입력해주세요'
        value={content}
        onChange={handleContent}
      />
      <SubmitButton onClick={handleSubmit} disabled={!title || !content}>Todo 생성</SubmitButton>
    </InputContainer>
  );
};

export default InputForm;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding-left: 5px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 30px;
  border: 0.2px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 20px;
  box-sizing: border-box;
`;
