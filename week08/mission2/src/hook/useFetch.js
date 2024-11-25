import { useState, useEffect } from 'react';
import axios from 'axios';

//get만 하는 커스텀 훅
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  // 데이터를 다시 가져올 수 있도록 하는 refetch(근데 안씀)
  return { data, loading, error, refetch: fetchData };
};

export default useFetch;