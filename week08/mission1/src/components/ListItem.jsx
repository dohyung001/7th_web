import styled from 'styled-components';
import axiosInstance from '../apis/axiosInstance';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ListItem = ({ todo, onNewTodo }) => {
  const navigate = useNavigate();
  const [toggleEdit, setToggleEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editContent, setEditContent] = useState(todo.content);
  const [isChecked, setIsChecked] = useState(todo.checked);
  const id = todo.id;

  // 삭제 함수
  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/${id}`);
      window.location.reload(); // 새로고침
    } catch (e) {
      console.log(e);
    }
  };

  // 수정 함수
  const handleEdit = () => {
    setToggleEdit(true);
  };

  // 수정 완료
  const submitEdit = async () => {
    try {
      await axiosInstance.patch(`/${id}`, {
        ...todo,
        title: editTitle,
        content: editContent,
      });
      onNewTodo();
      setToggleEdit(false);
    } catch (e) {
      console.log(e);
    }
  };

  // 체크박스
  const handleCheckBoxChange = async () => {

    const newCheckedStatus = !isChecked;
    setIsChecked(newCheckedStatus); 
    try {
      await axiosInstance.patch(`/${id}`, {
        ...todo,
        checked: newCheckedStatus,
      });

    } catch (e) {
      console.log('에러:', e);
      setIsChecked(!newCheckedStatus); 
    } 
  };

  const handleChangeTitle = (e) => {
    setEditTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    setEditContent(e.target.value);
  };

  const handleNavigate = ()=>{
    navigate(`/detail/${todo.id}`)
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
            <TextInput value={editTitle} onChange={handleChangeTitle} />
            <TextInput value={editContent} onChange={handleChangeContent} />
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
