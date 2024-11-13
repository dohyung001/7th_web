import styled  from "styled-components";
import useCustomFetch from "../hooks/useCustomFetch";
import { useState, useCallback } from "react";
import MoviePoster from "../components/MoviePoster";
import SkeletonBox from "../components/SkeletonBox";
import debounce from "lodash/debounce";


const SearchPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [url, setUrl] = useState(null);
  const { data, isLoading } = useCustomFetch(url); // 커스텀패치: url이 바뀔떄마다 실행

  // 디바운스 처리
  const debouncedSubmit = useCallback(
    debounce((query) => {
      const encodedQuery = encodeURIComponent(query.trim());
      setUrl(`/search/movie?query=${encodedQuery}&include_adult=false&language=ko-KR&page=1`);
    }, 500),
    []
  );

  //인풋 함수
  const handleInput = (e) => {
    setInputValue(e.target.value);
      debouncedSubmit(e.target.value);

  };

  return (
    <SearchPageBackground>
      <SearchPageContainer>
        <SearchWrapper>
          <SearchInput
            placeholder="영화 제목을 입력해주세요"
            value={inputValue}
            onChange={handleInput}
          />
          <SearchButton onClick={() => debouncedSubmit(inputValue)}> 검색 </SearchButton>
        </SearchWrapper>
        
        <CardContainer>
          {isLoading ? (
            Array.from({ length: 9 }).map((_, index) => (
              <SkeletonBox key={index}/>
            ))
          ) : data?.results?.length > 0 ? (
            data.results.map((movie) => <MoviePoster key={movie.id} movie={movie} />)
          ) : (
            /*초기상태에 대한 처리: url*/
            inputValue.trim() && <NoResultsMessage>검색어: "{inputValue}"에 해당하는 데이터가 없습니다.</NoResultsMessage>
          )}
        </CardContainer>
      </SearchPageContainer>
    </SearchPageBackground>
  );
};

export default SearchPage;

const SearchPageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  padding: 20px;
`;

const SearchPageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const SearchWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 100px;
`;

const SearchInput = styled.input`
  border-radius: 10px 0px 0px 10px;
  border: none;
  padding-left: 20px;
`;

const SearchButton = styled.button`
  border-radius: 0px 10px 10px 0px;
  border: none;
  background-color: rgb(253, 4, 91);
`;




const CardContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(9, 1fr);
  width: 100%;
  height: calc(100% - 60px);
  background-color: black;
  color: white;
  margin-top: 20px;
`;

const NoResultsMessage = styled.div`
  grid-column: span 9;
  text-align: center;
  color: gray;
  font-size: 18px;
  margin-top: 20px;
`;
