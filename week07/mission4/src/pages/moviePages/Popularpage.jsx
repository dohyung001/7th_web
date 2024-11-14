import React, { useState } from 'react';
import MoviePoster from '../../components/MoviePoster';
import styled, { css } from 'styled-components';
import SkeletonBox from '../../components/SkeletonBox';
import { useQuery } from '@tanstack/react-query';
import useGetMovies from '../../hooks/queries/useGetMovies';

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  width: 100%;
  background-color: black;
  color: white;
  padding: 20px;
  justify-items: center; 
`;

const BackGround = styled.div`
  background-color: black;
  min-height: 100vh;
  width: calc(100vw - 250px); 
  position:relative;
  
`;

const ButtonContainer = styled.div`
  position:absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
  color: white;
  transform:translate(-50%); //버튼컨테이너의 50%만큼 이동()
  left:50%;
`;

const Button = styled.button`
  background-color: rgb(253, 4, 91);
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  border: none;

  &:hover {
    filter: grayscale(0.1);
    cursor: pointer;
  }
  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

const PopularPage = () => {
  const [page, setPage] = useState(1);

  // useQuery로 API 데이터 받아오기
  const { data: movies, isFetching, isError } = useQuery({
    queryFn: () => useGetMovies({ category: 'popular', pageParam: page }), 
    queryKey: ['movies', 'popular', page],
    cacheTime: 10000,
    staleTime: 10000,
    keepPreviousData: true,
  });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  if (isError) return <BackGround style={{ color: 'white' }}>에러</BackGround>;

  return (
    <BackGround>
      <GridContainer>
        {isFetching
          ? Array.from({ length: 9 }).map((_, index) => (
              <SkeletonBox key={index} />
            ))
          : movies?.results?.length > 0 
            ? movies.results.map((movie) => (
                <MoviePoster movie={movie} key={movie.id} />
              ))
            : <div>No movies found</div>
        }
      </GridContainer>
      <ButtonContainer>
        <Button onClick={handlePrevPage} disabled={page === 1}>이전</Button>
        <p>{page} 페이지</p>
        <Button onClick={handleNextPage}>다음</Button>
      </ButtonContainer>
    </BackGround>
  );
};

export default PopularPage;
