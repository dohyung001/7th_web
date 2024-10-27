# 🎯 핵심 키워드

---

<aside>
💡 주요 내용들에 대해 조사해보고, 자신만의 생각을 통해 정리해보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad**

</aside>

### 키워드 정리 🍠

- `useEffect`  🍠
    
    :컴포넌트가 마운트, 의존성 배열 업데이트, 언마운트 단계에서  동작
    
    ```jsx
    
    import { useEffect} from 'react';
    
     useEffect(() => {
        axios.get('https://api.example.com/data')
          .then(response => setData(response.data))
          .catch(error => console.error('Error fetching data:', error));
      }, []); 
    ```
    
- `try, catch, finally` 구문  🍠
    
    : api요청시 오류를 처리
    
    `try`는 코드 실행을 시도하고, `catch`는 에러 발생 시 처리하며, `finally`는 예외 여부와 상관없이 항상 실행
    
    ```jsx
    async function fetchData() {
      try {
        const response = await axios.get('https://api.example.com/data');
        console.log('Data fetched:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        console.log('Fetch attempt finished.');
      }
    }
    ```
    
- `axios`  🍠
    
    ```jsx
    import axios from 'axios'; // 별도의 라이브러리 설치 필요
    
    async function postData() {
      try {
        const response = await axios.post('https://api.example.com/data', {
          name: 'John Doe',
          age: 30,
        });
        console.log('Data posted:', response.data);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    }
    ```
    
- `fetch`  🍠
    
    ```jsx
    async function getData() {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json(); // JSON 변환 필요
        console.log('Data fetched:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    ```
    
- `axios` vs `fetch` (차이점)  🍠
    - `axios`는 자동으로 JSON 처리를 해주지만, `fetch`는 응답에 대해 수동으로 `.json()`을 호출해야 합니다.
    - `axios`는 웹 브라우저 호환성이 높고 보완성이 우수,Request TimeOut설정 등 많은 기능 지원
    
- `.env` 파일에는 어떤 내용들을 관리할까요?  🍠
    
    :api키나 환경변수를 저장
    
    ```jsx
    REACT_APP_API_URL=https://api.example.com
    REACT_APP_API_KEY=abcdef123456
    ```
    
    ```jsx
    const apiUrl = process.env.REACT_APP_API_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    
    async function getData() {
      try {
        const response = await axios.get(`${apiUrl}/data`, {
          headers: { 'Authorization': `Bearer ${apiKey}` }
        });
        console.log('Data:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    ```
    
- **`custom hook ?`**
    
    :React에서 `custom hook`은 상태와 로직을 재사용하기 위해 생성한 사용자 정의 hook입니다.
    
    ```jsx
    import { useEffect, useState } from 'react';
    import { axiosInstance } from '../apis/axios-instance';
    
    const useCustomFetch = (url) => {
      const [data, setData] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [isError, setIsError] = useState(false);
    
      useEffect(() => {
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
    
    ```