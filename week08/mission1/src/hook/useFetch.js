import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;
        switch (options.method) {
          case 'POST':
            response = await axios.post(url, options.data, options.config);
            break;
          case 'PATCH':
            response = await axios.patch(url, options.data, options.config);
            break;
          case 'DELETE':
            response = await axios.delete(url, options.config);
            break;
          case 'GET':
          default:
            response = await axios.get(url);
            break;
        }

        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
