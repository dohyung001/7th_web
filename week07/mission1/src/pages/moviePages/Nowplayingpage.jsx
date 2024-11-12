import React from 'react';
import MoviePoster from '../../components/MoviePoster';
import styled from 'styled-components';

import useGetInfiniteMovies from '../../hooks/queries/useGetinfiniteMovies';
import { useInView } from 'react-intersection-observer'; //특정 요소가 현재 뷰에 보이는지 감시

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



const NowplayingPage = () => {
  //useInfiniteQuery로 api 데이터 받아오기(미리 선언해놈)
  const { data: movies, isLoading, isFetching, isPending, isError } = useGetInfiniteMovies('now_playing'); //useQuery와 다르게 0~n 페이지까지 정보가 담김(movies.pages[0~n] 이렇게)

  console.log(movies?.pages?.results)
  const { ref, inView } = useInView({
    threshold: 0,
  })



  return (
    <GridContainer>
      {movies?.pages.map((page) => {
        return page.results.map((movie, _) => {
          return <MoviePoster movie={movie} key={movie.id} />
        })
      })}
    </GridContainer>
  );
};

export default NowplayingPage;