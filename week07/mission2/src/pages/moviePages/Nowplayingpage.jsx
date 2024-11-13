import React, { useEffect } from 'react';
import MoviePoster from '../../components/MoviePoster';
import styled from 'styled-components';

import useGetInfiniteMovies from '../../hooks/queries/useGetinfiniteMovies';
import { useInView } from 'react-intersection-observer'; //특정 요소가 현재 뷰에 보이는지 감시

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(9, 1fr); 
  width: 100vw;

  background-color: black;
  color: white;
  padding: 20px;
`;



const NowplayingPage = () => {
  //useInfiniteQuery로 api 데이터 받아오기(미리 선언해놈)
  const { data: movies, isLoading, isFetching, isPending,hasNextPage,fetchNextPage, isError } = useGetInfiniteMovies('now_playing'); //useQuery와 다르게 0~n 페이지까지 정보가 담김(movies.pages[0~n] 이렇게)

  console.log(movies?.pages?.results)
  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(()=>{
    if(inView){
      !isFetching && hasNextPage &&fetchNextPage();
    }
  },[inView,isFetching,hasNextPage,fetchNextPage])


  return (
    <GridContainer>
      {movies?.pages.map((page) => {
        return page.results.map((movie, _) => {
          return <MoviePoster movie={movie} key={movie.id} />
        })
      })}
      {/* (뷰에 보이면 감지되는 상자)(ref로 연결됨) */}
      <div style={{
        backgroundColor:'red',
        width:'100px',
        height:'100px'
      }} ref={ref}><p>상자</p></div>

    </GridContainer>
  );
};

export default NowplayingPage;