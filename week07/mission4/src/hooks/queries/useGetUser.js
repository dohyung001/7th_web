import axios from 'axios';

const useGetUser = async (token) => {
  const data  = await axios.get(`http://localhost:3000/user/me`,{
    headers: { Authorization: `Bearer ${token}` }
    
  });
  return data;
}

export default useGetUser;