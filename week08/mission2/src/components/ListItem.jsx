import styled from 'styled-components';
import { useState } from 'react';
import axiosInstance from '../apis/axiosInstance';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from 'react-router-dom';

const ListItem = ({ todo }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editContent, setEditContent] = useState(todo.content);
  const [isChecked, setIsChecked] = useState(todo.checked);
  const queryClient = useQueryClient();
  const id = todo.id;
  const navigate = useNavigate();
  // useMutation으로 삭제
  const deleteMutation = useMutation({
    mutationFn: async () => {
      return await axiosInstance.delete(`/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['todoDatas']); // 데이터 새로고침
    },
  });

  // useMutation으로 수정
  const editMutation = useMutation({
    mutationFn: async () => {
      return await axiosInstance.patch(`/${id}`, {
        title: editTitle,
        content: editContent,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['todoDatas']); // 데이터 새로고침
      setToggleEdit(false);
    },
  });

  // useMutation으로 체크박스 상태 변경
  const checkBoxMutation = useMutation({
    mutationFn: async (newCheckedStatus) => {
      return await axiosInstance.patch(`/${id}`, {
        ...todo,
        checked: newCheckedStatus,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['todoDatas']); // 데이터 새로고침
    },
  });

  // 삭제 함수
  const handleDelete = () => {
    deleteMutation.mutate();
  };

  // 수정 완료 함수
  const submitEdit = () => {
    editMutation.mutate();
  };

  // 체크박스 상태 변경 함수
  const handleCheckBoxChange = () => {
    const newCheckedStatus = !isChecked;
    setIsChecked(newCheckedStatus);
    checkBoxMutation.mutate(newCheckedStatus);
  };

  // 수정 모드 전환
  const handleEdit = () => {
    setToggleEdit(true);
  };

  const handleNavigate = ()=>{
    navigate(`/detail/${id}`)
  }
  return (
    <Container>
      <CheckBox type="checkbox" checked={isChecked} onChange={handleCheckBoxChange} />
      <TextContainer>
        {!toggleEdit ? (
          <>
            <Text onClick={handleNavigate}>{todo.title}</Text>
            <Text onClick={handleNavigate}>{todo.content}</Text>
          </>
        ) : (
          <>
            <TextInput value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
            <TextInput value={editContent} onChange={(e) => setEditContent(e.target.value)} />
          </>
        )}
      </TextContainer>
      <ButtonContainer>
        {!toggleEdit ? (
          <>
            <Button onClick={handleEdit}>수정</Button>
            <Button onClick={handleDelete}>삭제</Button>
          </>
        ) : (
          <>
            <Button onClick={submitEdit}>수정완료</Button>
          </>
        )}
      </ButtonContainer>
    </Container>
  );
};

export default ListItem;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 10fr 7fr;
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;
  border: 0.2px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;
const CheckBox = styled.input`
  display: flex;
  width: 25px;
`;
const TextContainer = styled.div``;
const Text = styled.p``;
const TextInput = styled.input``;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;
const Button = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 5px;
  border: none;
`;
