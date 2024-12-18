import React from 'react';
import styled from 'styled-components';

//HeadBar
export const BarContainer = styled.div`
  background-color: rgb(87, 80, 253);
  height: 80px;
  display: flex;
  color:white;
  align-items:center;
  padding-left:150px;
  padding-right:150px;
 justify-content:space-between;
`;

export const BarHead = styled.div`
font-size:30px;
`;

export const BarCartIcon = styled.div`
color:white;
width: 30px;
height: 30px;
  position:relative;
`;

export const MusicCount = styled.div`
background-color:rgb(151,146,255);
width: 20px;
height: 20px;
border-radius:20px;
font-size:18px;
display:flex;
justify-content:center;
align-items:center;
position:absolute;
  top: -5px;
right:-6px;
`;

//Footer
export const FooterBarContainer = styled(BarContainer)`

width: 100vw;
justify-content:center;
  padding-left:0px;
  padding-right:0px;
`


//MusicList


export const CustomDiv = styled.div`
display:flex;
justify-content: center;


`;
export const MusicListContainer = styled.div`

display:flex;
flex-direction: column;

align-items: center;
width:70vw;
height:1935px;
`;

export const MusicListHeader = styled.div`
font-size:40px;
margin-top:70px;
margin-bottom:30px;
`;

export const CustomHr = styled.div`
margin:50px 0px 20px 0px;
background-color:gray;
width:70vw;
height:2px;

`;
export const PriceContainer = styled.div`
padding-left: 50px;
padding-right:50px;
display:flex;

width:70vw;
font-size:20px;
`;

export const ClearButton = styled.button`
background-color: inherit;
width: 200px;
height:40px;
display:flex;
align-items:center;
justify-content:center;
border:2px;
border:solid 2px red;
border-radius:5px;
color:red;
margin-bottom:50px;
`;
export const CustomBox = styled.div`
flex:1;
`;


//Music
export const MusicContainer = styled.div`
font-size:40px;
width:60vw;
height:100px;

display:flex;
  justify-content:space-between;
align-items:center;
margin-bottom:20px;
`;

export const AlbumCover = styled.img`

width:80px;
height:80px;
margin-right: 20px;
`;
export const MusicText = styled.div`
flex:1;
display:flex;
flex-direction: column;
font-size:20px;
`;
export const MusicPrice = styled.div`

font-size:18px;
color:gray;
`;

export const MusicReducer = styled.div`

display:flex;
flex-direction: column;
font-size:27px;
color:rgb(87, 80, 253);

`;

export const CustomButton = styled.button`

display:flex;
flex-direction: column;
font-size:27px;
background-color:inherit;
border:none;
color:rgb(87, 80, 253);

`;


//Modal
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 5px;
  text-align: center;
`;

export const ModalButton = styled.button`
  margin: 10px 40px;

  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color:white;
  border-radius:5px;
  border-color: rgb(87, 80, 253);;
color:rgb(87, 80, 253);;
`;

export const CloseModalButton = styled(ModalButton)`
border-color: red;
color:red;
`;
