import React from 'react';
import MoviePoster from '../components/MoviePoster';
import styled from 'styled-components';
import useCustomFetch from '../hooks/useCustomFetch';

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



const MoviePage = ({ category = "popular" }) => {
  const { data: movies, isLoading, isError } = useCustomFetch(`/movie/${category}?language=ko-KR&page=1`);
  //console.log(movies);
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

export default MoviePage;