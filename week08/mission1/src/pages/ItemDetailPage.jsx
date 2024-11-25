import styled from "styled-components";
import useFetch from "../hook/useFetch";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axiosInstance from "../apis/axiosInstance";
import ClipLoader from "react-spinners/ClipLoader";
const ItemDetailPage = () => {
  const { id } = useParams();
  const { data, loading, error, refetch } = useFetch(`http://localhost:3000/todo/${id}`);
  
  const [editMode, setEditMode] = useState(false);
  const [editTitle, setEditTitle] = useState(data?.title || '');
  const [editContent, setEditContent] = useState(data?.content || '');

  // 수정
  const handleEditClick = () => {
    setEditMode(true);
  };
  //취소
  const handleCancelClick = () => {
    setEditMode(false);
  };
  //저장
  const handleSaveClick = async () => {
    try {
      await axiosInstance.patch(`/${id}`, {
        title: editTitle,
        content: editContent,
      });
      refetch(); // 데이터 재로드
      setEditMode(false);
    } catch (e) {
      console.log("Error updating item:", e);
    }
  };

  // 로딩 & 에러
  if (loading) return <Background><ClipLoader/></Background>;
  if (error) return <Background>Error: {error}</Background>;

  return (
    <Background>
      {editMode ? (
        <>
          <EditInput
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="제목을 입력해주세요"
          />
          <EditInput
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            placeholder="내용을 입력해주세요"
          />
          <ButtonContainer>
            <Button onClick={handleSaveClick}>저장</Button>
            <Button onClick={handleCancelClick}>취소</Button>
          </ButtonContainer>
        </>
      ) : (
        <>
          <DetailText>제목: {data?.title}</DetailText>
          <DetailText>내용: {data?.content}</DetailText>
          <ButtonContainer>
            <Button onClick={handleEditClick}>수정</Button>
          </ButtonContainer>
        </>
      )}
    </Background>
  );
};

export default ItemDetailPage;

const Background = styled.div`
  padding: 50px;
  height: 100vh;
  width: 100vw;
  background-color: aliceblue;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
`;

const DetailText = styled.p`
  font-size: 1.5rem;
  color: #333;
`;

const EditInput = styled.input`
  width: 80%;
  padding: 10px;
  font-size: 1.2rem;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #003f7f;
  }
`;
