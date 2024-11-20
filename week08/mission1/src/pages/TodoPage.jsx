import styled from "styled-components";
import InputForm from "../components/InputForm";
import { useEffect, useState } from "react";
import ListItem from "./../components/ListItem";
import useFetch from "../hook/useFetch";
import ClipLoader from "react-spinners/ClipLoader";


const TodoPage = () => {
  // useFetch 훅을 사용하여 초기 데이터를 가져옴
  const { data, loading, error, refetch } = useFetch('http://localhost:3000/todo');
  const [todos, setTodos] = useState([]);

  // useFetch로 가져온 데이터 설정
  useEffect(() => {
    if (data && Array.isArray(data[0])) {
      setTodos(data[0]);
    }
  }, [data]);

  return (
    <Background>
      <MainContainer>
        <Header>🍠 UMC ToDoList 🍠</Header>
        <InputForm onNewTodo={refetch} />
        <ListContainer>
          {loading ? (<ClipLoader />) :
            (<>
              {todos.length > 0 ? (
                todos.map((todo, index) => (
                  <ListItem key={index} todo={todo} onNewTodo={refetch} />
                ))
              ) : (
                <p>No Todos Available</p>
              )}
            </>)}
        </ListContainer>



      </MainContainer>
    </Background>
  );
};

export default TodoPage;

const Background = styled.div`
  padding: 50px;
  height: 100vh;
  width: 100vw;
  background-color: aliceblue;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const MainContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 5fr;
  width: 100%;
  min-width: 700px;
  max-width: 1200px;
  height: 100%;
`;
const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;
