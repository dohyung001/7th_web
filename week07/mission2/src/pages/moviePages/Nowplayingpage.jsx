import React, { useEffect } from 'react';
import MoviePoster from '../../components/MoviePoster';
import styled from 'styled-components';
import useGetInfiniteMovies from '../../hooks/queries/useGetinfiniteMovies';
import SkeletonBox from '../../components/SkeletonBox';
import { useInView } from 'react-intersection-observer';
import ClipLoader from "react-spinners/ClipLoader";

const InViewBox = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(9, 1fr); 
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  color: white;
  padding: 20px;
`;

const NowplayingPage = () => {
  const { data: movies, isLoading, isFetching, hasNextPage, fetchNextPage, isError } = useGetInfiniteMovies('now_playing');
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView && !isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, isFetching, hasNextPage, fetchNextPage]);

  if (isError) {
    return <div>에러가 발생했습니다. 다시 시도해 주세요.</div>;
  }

  return (
    <GridContainer>
      {movies?.pages.map((page) =>
        page.results.map((movie) => (
          <MoviePoster movie={movie} key={movie.id} />
        ))
      )}
      {/* 스크롤 감지 상자 */}
      <InViewBox ref={ref}>
        {isFetching && <ClipLoader color='red' />}
      </InViewBox>
      {/* 로딩 중일 때 SkeletonBox 표시 */}
      {isFetching &&
        Array.from({ length: 9 }).map((_, index) => (
          <SkeletonBox key={`skeleton-${index}`} />
        ))
      }
    </GridContainer>
  );
};

export default NowplayingPage;
