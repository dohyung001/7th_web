import React from 'react';
import MoviePoster from '../../components/MoviePoster';
import styled from 'styled-components';
import useCustomFetch from '../../hooks/useCustomFetch';
import useGetMovies from '../../hooks/queries/useGetMovies';
import { useQuery } from '@tanstack/react-query';
import useGetInfiniteMovies from '../../hooks/queries/useGetinfiniteMovies';

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(9, 1fr); 
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  padding: 20px;
`;



const PopularPage = () => {
  //useQuery로 api 데이터 받아오기
  const { data: movies, isLoading, isError } = useQuery({
    queryFn: () => useGetMovies({ category: 'popular', pageParam: 1 }), //fetch함수
    queryKey: ['movies', 'popular'], //해당 쿼리의 키 설정
    cacheTime: 10000,  //10초안에 다시 쿼리로 api 요청해도 요청하지 않고 캐시된 데이터를 활용
    staleTime: 10000   //데이터가 10초간 fresh(신선함) -> stale(상함: 최신화 필요)
  })

  const { data } = useGetInfiniteMovies('now_playing');

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>에러</div>;

  return (
    <GridContainer>
      {movies?.results?.length > 0 ? (
        movies.results.map((movie) => (
          <MoviePoster movie={movie} key={movie.id} />
        ))
      ) : (
        <div>No movies found</div>
      )}
    </GridContainer>
  );
};

export default PopularPage;