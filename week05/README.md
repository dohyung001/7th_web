이것 저것 한번에 하다보니 실습이랑 미션 구분을 못했네요..
src/pages/Loginpage_prac.jsx 가 실습1(localhost:5173/Login_prac)이고 src/pages/Loginpage.jsx 가 미션&실습2입니다

### 키워드 정리 🍠

- useRef 🍠
    
    :리랜더링에 참여하지 않는 변수 선언
    
    ```jsx
    import React, { useRef } from 'react';
    
    const InputFocusExample = () => {
      const inputRef = useRef(null);
    
      const focusInput = () => {
        inputRef.current.focus(); // input에 포커스 설정
      };
    
      return (
        <div>
          <input ref={inputRef} type="text" placeholder="입력하세요" />
          <button onClick={focusInput}>포커스 이동</button>
        </div>
      );
    };
    
    export default InputFocusExample;
    ```
    