import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import useGetUser from '../hooks/queries/useGetUser';

const Navbar = () => {
  const { isLoggedIn, userNickname, login, logout } = useAuth();
  const token = localStorage.getItem("accessToken");

  //useQuery로 유저 데이터 가져오기
  const { data, error, isSuccess, isError } = useQuery({
    queryFn: () => useGetUser(token),
    queryKey: ['user'],
    cacheTime: 100000,
    staleTime: 100000,
    retry: false,
  });


  //유저 데이터가져오기에 대한 처리
  useEffect(() => {
    if (isSuccess ) {
      const nickname = data.data.email.split('@')[0];
      login(nickname);
    } else if (isError) {
      //logout();
      console.log("유저 정보를 불러오지 못했습니다.");
    }
  }, [isSuccess, isError]);

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
  );
}

export default Navbar;




// 스타일드 컴포넌트 정의
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
`;
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
