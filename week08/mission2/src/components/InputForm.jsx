import styled from 'styled-components';
import { useState } from 'react';
import axiosInstance from '../apis/axiosInstance';
import { useMutation, useQueryClient } from "@tanstack/react-query";

const InputForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  // mutation실행-> useQuery의 data변환
  const mutation = useMutation({
    mutationFn: async (newTodo) => {
      return await axiosInstance.post('/', newTodo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['todoDatas']);
      setTitle('');
      setContent('');
    },
  });

  // 생성 함수
  const handleSubmit = () => {
    if (!title || !content) {
      alert('입력해라.');
      return;
    }
    mutation.mutate({
      title,
      content,
      checked: false,
    });
  };

  return (
    <InputContainer>
      <Input
        placeholder='제목을 입력해주세요'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder='내용을 입력해주세요'
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <SubmitButton onClick={handleSubmit} disabled={!title || !content}>
        Todo 생성
      </SubmitButton>
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
