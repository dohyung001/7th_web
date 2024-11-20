import styled from 'styled-components';
import axiosInstance from '../apis/axiosInstance';
import { useState } from 'react';

const ListItem = ({ todo, onNewTodo }) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editContent, setEditContent] = useState(todo.content);
  const [isChecked, setIsChecked] = useState(todo.checked);
  const id = todo.id;
  //삭제함수
  const handleDelete = async () => {
    try {
      const response = await axiosInstance.delete(`/${id}`);
      console.log(response);
      onNewTodo();
    } catch (e) {
      console.log(e);
    }
  }

  //수정함수
  const handleEdit = async () => {
    setToggleEdit(true);

  }
  //수정완료
  const submitEdit = async () => {
    try {
      const response = await axiosInstance.patch(`/${id}`, {
        title: editTitle,
        content: editContent,
        checked: isChecked
      });
      console.log(response);
      onNewTodo();
      setToggleEdit(false);
    } catch (e) {
      console.log(e);
    }
  }

  const hanldeCheckBox = () => {
    setIsChecked(!isChecked);
  }
  const handleChangeTitle = (e) => {
    setEditTitle(e.target.value);
  }

  const handleChangeContent = (e) => {
    setEditContent(e.target.value);
  }

  return (
    <Container>
      <CheckBox type="checkbox" checked={isChecked} onChange={hanldeCheckBox} />
      <TextContainer>
        {!toggleEdit ? (<>
          <Text>{todo.title}</Text>
          <Text>{todo.content}</Text>
        </>) : (<>
          <TextInput value={editTitle} onChange={handleChangeTitle} />
          <TextInput value={editContent} onChange={handleChangeContent} />
        </>)}


      </TextContainer>
      <ButtonContainer>
        {!toggleEdit ? (<>
          <Button onClick={handleEdit}>수정</Button>
          <Button onClick={handleDelete}>삭제</Button>
        </>) : (<>
          <Button onClick={submitEdit}>수정완료</Button>
        </>)}
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
