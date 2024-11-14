import { useEffect } from 'react';
import MoviePoster from '../../components/MoviePoster';
import styled from 'styled-components';

import useGetInfiniteMovies from '../../hooks/queries/useGetinfiniteMovies';
import { useInView } from 'react-intersection-observer'; //특정 요소가 현재 뷰에 보이는지 감시
import SkeletonBox from './../../components/SkeletonBox';
import ClipLoader from "react-spinners/ClipLoader";

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
  min-width:calc(100% - 250px);
`

const InViewBox = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
`


const NowplayingPage = () => {
  //useInfiniteQuery로 api 데이터 받아오기(미리 선언해놈)
  const { data: movies, isLoading, isFetching, isPending,hasNextPage,fetchNextPage, isError } = useGetInfiniteMovies('now_playing'); 
  //useQuery와 다르게 0~n 페이지까지 정보가 담김(movies.pages[0~n] 이렇게)

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(()=>{
    if(inView){
      !isFetching && hasNextPage &&fetchNextPage();
    }
  },[inView,isFetching,hasNextPage,fetchNextPage])


  if(isError){
    return(
      <BackGround style={{color:'white'}}>
        에러
      </BackGround>
    )
  }


  return (
    <BackGround>
      
    <GridContainer>
      {movies?.pages.map((page) => {
        return page.results.map((movie, _) => {
          return <MoviePoster movie={movie} key={movie.id} />
        })
      })}
      
      
      {1 &&
        Array.from({ length: 9 }).map((_, index) => (
          <SkeletonBox key={index} />
        ))}

    </GridContainer>
    <InViewBox ref={ref}><ClipLoader color='red' size={50}/></InViewBox>{/*뷰에 보이면 감지되는 상자(ref로 연결됨) */}
    </BackGround>
  );
};

export default NowplayingPage;
