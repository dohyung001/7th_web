import { axiosInstance } from '../../apis/axios-instance';

const useGetMovieCredit = async ({ movieId }) => {
    console.log(movieId)
  const { data } = await axiosInstance.get(`/movie/${movieId}/credits?language=ko-KR`);
    console.log(data);
  return data;
}

export default useGetMovieCredit;