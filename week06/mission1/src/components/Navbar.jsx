import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isLoggedIn, userNickname, login, logout } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("accessToken");
      if (token && !userNickname) {
        try {
          const response = await axios.get("http://localhost:3000/user/me", {
            headers: { Authorization: `Bearer ${token}` }
          });
          const nickname = response.data.email.split('@')[0];
          login(nickname);
        } catch (error) {
          console.log("유저 정보를 불러오지 못했습니다.", error);
          logout();
        }
      }
    };
    fetchUserData();
  }, [isLoggedIn, userNickname, login, logout]);

  return (
    <NavbarContainer>
      <NavLogo to={'/'}>로고에요</NavLogo>
      <NavButtonContainer>
        {isLoggedIn ? (
          <>
            <WelcomText>{userNickname}님 반갑습니다.</WelcomText>
            <LogoutButton color={'rgb(253,4,91)'} onClick={logout}>로그아웃</LogoutButton>
          </>
        ) : (
          <>
            <NavButton color={'rgb(19,21,23)'} to="/login">로그인</NavButton>
            <NavButton color={'rgb(253,4,91)'} to="/signup">회원가입</NavButton>
          </>
        )}
      </NavButtonContainer>
    </NavbarContainer>
  )
}

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(19,21,23);
  height: 80px;
  padding: 0px 30px;
`;
const WelcomText = styled.div`
  height: 30px;
  display:flex;
  color:white;
  justify-content:center;
  align-items: center;
`
const NavButton = styled(Link)`
  &:hover {
    filter: brightness(0.5);
  }
  transition: filter 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 5px;
  width: 70px;
  height: 30px;
  border: none;
  color: white;
  background-color: ${props => props.color || 'rgb(19,21,23)'};
`;

const LogoutButton = styled.button`
  &:hover {
    filter: brightness(0.5);
  }
  transition: filter 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 70px;
  height: 30px;
  border: none;
  color: white;
  background-color: ${props => props.color || 'rgb(19,21,23)'};
`;

const NavButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const NavLogo = styled(Link)`
  font-size: 25px;
  font-weight: bold;
  color: rgb(253,4,91);
  text-decoration: none;
`;
