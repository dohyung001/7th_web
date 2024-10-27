import React from 'react';
import { useParams } from 'react-router-dom';
import useCustomFetch from '../hooks/useCustomFetch';
import styled from 'styled-components';
import CastProfile from '../components/CastProfile'


const Background = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  padding: 20px 20px 20px 40px;
`;
const MovieBackgroundImg = styled.div`
padding-top:5px;
padding-left:5px;
  width: 100%;
  height: 300px;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  color: white;
  display: grid;
  grid-template-rows: 3fr 1.5fr 1.5fr 1.5fr 3fr 7fr;
`;

const CreditHeader = styled.h1`
color:white;
margin: 20px 0px 20px;
`
const ProfileContainer = styled.div`
  width: 100%;
  max-height: 500px; 
  overflow-y: auto; 
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding-right: 10px; 
`;



const MovieDetailpage = () => {
  const { movieId } = useParams();

  const { data, isLoading: isLoading1, isError: isError1 } = useCustomFetch(`/movie/${movieId}?language=ko-kr`); //영화 정보
  console.log(data);

  const { data: credits, isLoading: isLoading2, isError: isError2 } = useCustomFetch(`/movie/${movieId}/credits?language=ko-KR`); //credit(배우 정보)
  console.log(credits);

  if (isLoading1 || isLoading2) return <h1>Loading...</h1>;
  if (isError1 || isError2) return <h1>에러에요</h1>;

  //백그라운드 이미지 스타일
  const style = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4) 50%), url(https://image.tmdb.org/t/p/original${data.backdrop_path})`
  };

  return (
    <Background>
      <div>
        <MovieBackgroundImg style={style}>  {/* 백그라운드 이미지 적용 */}
          <h1>{data.title}</h1>
          <span>평균 {data.vote_average}</span>
          <span>{data.release_date}</span>
          <span>{data.runtime}분</span>
          <h2>{data?.tagline}</h2>
          <span>{data.overview}</span>
        </MovieBackgroundImg>
      </div>
      <div>
        <CreditHeader>감독/출연</CreditHeader>
        <ProfileContainer>
          {credits?.cast?.map((actor) => {
            return (<CastProfile key={actor.id} actor={actor} />)
          })}

        </ProfileContainer>
      </div>
    </Background>
  );
};

export default MovieDetailpage;
