import { useEffect, useState } from 'react';
import { axiosInstance } from '../apis/axios-instance';

const useCustomFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!url) return; // url이 null 또는 빈 문자열일 경우 중단

    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axiosInstance.get(url);
        setData(response.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useCustomFetch;
