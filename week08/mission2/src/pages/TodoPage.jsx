import styled from "styled-components";
import InputForm from "../components/InputForm";
import { useEffect, useState } from "react";
import ListItem from "./../components/ListItem";
import useFetch from "../hook/useFetch";
import ClipLoader from "react-spinners/ClipLoader";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../apis/axiosInstance";


const TodoPage = () => {
  //useQuery 
  //mutation을 통해 data를 
  const {data,error,isError,isLoading} = useQuery({
    queryKey:['todoDatas'],
    queryFn: async()=>{
      const response = await axiosInstance.get('http://localhost:3000/todo')
      return response.data[0];
    }
  })

  return (
    <Background>
      <MainContainer>
        <Header>🍠 UMC ToDoList 🍠</Header>
        <InputForm  />
        <ListContainer>
          {isLoading ? (<ClipLoader />) :
            (<>
              {data.length > 0 ? (
                data.map((todo, index) => (
                  <ListItem key={index} todo={todo} />
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
