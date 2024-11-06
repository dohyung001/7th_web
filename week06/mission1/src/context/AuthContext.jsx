import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userNickname, setUserNickname] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("accessToken"));

  //로그인 & 닉네임 할당
  const login = (nickname) => {
    setUserNickname(nickname);
    setIsLoggedIn(true);
  };
  //로그아웃
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUserNickname(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userNickname, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Context 사용 편의 함수
export const useAuth = () => useContext(AuthContext);
