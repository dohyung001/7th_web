import React from 'react';
import MoviePoster from '../../components/MoviePoster';
import styled from 'styled-components';
import useGetMovies from '../../hooks/queries/useGetMovies';
import { useQuery } from '@tanstack/react-query';
import SkeletonBox from '../../components/SkeletonBox';
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



const NowplayingPage  = () => {
  //useQuery로 api 데이터 받아오기
  const { data: movies, isLoading, isError } = useQuery({
    queryFn: () => useGetMovies({ category: 'now_playing', pageParam: 1 }), //fetch함수
    queryKey: ['movies', 'now_playing'], //해당 쿼리의 키 설정
    cacheTime: 10000,  //10초 동안 캐시된 데이터 저장
    staleTime: 10000   //데이터가 10초간 fresh(신선함) -> stale(상함: 최신화 필요)
  })
  if (isError) return <div>에러</div>;

  return (
    <GridContainer>
      {isLoading
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
  );
};

export default NowplayingPage ;