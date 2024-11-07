# 🎯 핵심 키워드

---

<aside>
💡 주요 내용들에 대해 조사해보고, 자신만의 생각을 통해 정리해보세요!
레퍼런스를 참고하여 정의, 속성, 장단점 등을 적어주셔도 됩니다.
조사는 공식 홈페이지 **Best**, 블로그(최신 날짜) **Not Bad**

</aside>

### 키워드 정리 🍠

- Debounce & Throttling 🍠
    - Debounce는 무엇일까요?
        
        :짧은 시간안에 연속적으로 발생한 이벤트를 하나로 처리
        
    - Debounce는 주로 어디에 사용하나요?
        
        :검색창 자동완성, 창 크기 조절 등 빈번히 발생하는 이벤트
        
    - Throttling은 무엇일까요?
        
        : 짧은 시간안에 연속적인 이벤트를 일정 시간 간격으로 한번만 실행되게 
        
    - Throttling은 주로 어디에 사용하나요?
        
        :무한 스크롤
        
    - Debounce와 Throttling의 차이점은 무엇일까요?
        
        : 한번에 실행되는지, 일정 주기마다 실행되는지
        
    - 어떤 기능을 구현할 때 Debounce를 적용하고, Throttling을 적용하는 것이 좋을까요?
        
        :사용자가 입력할 때마다 API 요청 / 무한 스크롤
        
- 쿠키 🍠
    - 쿠키란 무엇이고, 어떤 특징을 가지고 있을까요?
        
        : 브라우저에서 저장되는 데이터로, 서버와 클라이언트 통신간에 추가로 주고받아 사용자 정보 저장
        
    - 쿠키를 어떻게 사용할 수 있을까요?
        
        ```jsx
        document.cookie = "쿠키이름=쿠키값"
        ```
        
- 토큰 🍠
    - 토큰이 왜 필요할까요?
        
        :사용자의 로그인 상태를 관리하기 위해
        
    - CORS 에러가 무엇이고, 이 에러를 어떻게 해결할 수 있을까요?
        
        : 웹브라우저에서 서버는 다른 도메인의 클라의 요청은 기본적으로 차단되지만, 서버의 설정에 따라 허가하기도 한다
        
        :Access-Control-Allow-Origin를 통해 서버측에서 설정 가능
        
    - JWT 토큰 기반 인증 방법이란 무엇일까요?
        
        : JSON형식으로 토큰을 통해 사용자를 이증하는 방식
        
    - JWT 기반 로그인 동작 과정에 대해 알아보세요.
        
        :클라가 로그인(서버가 토큰 부여)→ 클라가 토큰 저장→ 클라가 서버에 요청시 토큰 포함→ 서버는 토큰 유효성 검사
        
    - AccessToken / RefreshToken의 차이에 대해 설명해주세요.
        
        :클라는 로그인 인증에 처음 성공하면 둘다 받는다.
        
        AccessToken(유효기간이 짧음:1시간~60일): 유효기간 동안 사용함
        
        RefreshToken(유효기간이 김:1년): AccessToken이 만료되면 사용함(이떄 다시 AccessToken을 받음)
        
- 웹 스토리지 🍠
    - 웹 스토리지의 메소드와 프로퍼티는 어떤게 있을까요?
        
        : setItem, getItem, removeItem, clear
        
    - 세션 스토리지에 대해 정리해 주세요!
        
        : 현재 세션 동안만 데이터 저장
        
    - 로컬 스토리지에 대해 정리해 주세요!
        
        : 브라우저에 영구히 남는 스토리지
        
    - 로컬 스토리지에서 JWT 토큰을 저장하고, 사용하고, 삭제하는 메소드에 대해 찾아보세요!
        
        ```jsx
        저장: localStorage.setItem('token', jwtToken)
        사용: localStorage.getItem('token')
        삭제: localStorage.removeItem('token')
        ```
        
    - 스토리지가 변경되었을 때 처리하는 방법을 조사해 주세요.
        
        :스토리지의 변경을 감지
        
        ```jsx
        window.addEventListener('localStorage', callbackFunction) //sessionStorage
        ```
        
    - Bearer Token이 무엇인지 찾아보고, 이를 통해 백엔드 서버와 어떠한 방식으로 통신하는지 조사해 보세요!
        
        :사용자 정보를 담지 않는 문자열로 암호화된 토큰유형으로 아래와 같은 형식으로 사용자 인증에 활용됨
        
        ```jsx
        Authorization: Bearer <token>
        ```
        
- Context-API 🍠
    - 전역 상태 관리는 왜 해야할까요?
        
        : 여러 컴포넌트에서 전역적으로 필요한 상태가 있을 수 있다
        
    - Context API란 무엇일까요?
        
        : props로 변수를 전달할 필요 없이 전역적으로 데이터 제공