import { useInfiniteQuery } from '@tanstack/react-query';
import useGetMovies from './useGetMovies';

function useGetInfiniteMovies(category) {
  return useInfiniteQuery({
    queryFn: ({ pageParam }) => useGetMovies({ category, pageParam }),
    queryKey: ['movies', category],
    initialPageParam: 1, //pageParam의 초기값
    getNextPageParam: (lastPage, allPages) => {  //다음 불러올 pageParam(즉 함수를 통해 1씩 증가해줘야 함)
      //allPages: 현재까지 불러온 모든 페이지, lastPage: 불러온 페이지 중마지막 페이지

      //const lastMovie = lastPage.results[lastPage.results.length - 1]; 
      const lastMovie = lastPage.results.at(-1); //막 페이지의 막 영화
      return lastMovie ? allPages?.length + 1 : undefined; //막영화가 있으면 모든페이지수 +1 반환
    }
  })
}

export default useGetInfiniteMovies;