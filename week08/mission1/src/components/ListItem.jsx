import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/todoSlice';

const ListItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <CheckBox type="checkbox" />
      <TextContainer>
        <Text>{todo.title}</Text>
        <Text>{todo.content}</Text>
      </TextContainer>
      <ButtonContainer>
        <Button>수정</Button>
        <Button onClick={() => dispatch(removeItem(index))}>삭제</Button>
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
