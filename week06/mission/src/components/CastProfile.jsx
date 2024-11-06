import styled from 'styled-components'
const ProfileImg = styled.img`
  width:80px;
  height:80px;
  border-radius:50%;
  object-fit: cover;
  border:solid white 2px;
`

const ProfileCard = styled.div`
display:flex;
flex-direction:column;
justify-contents:center;
align-items:center;
width:150px;
height:150px;
gap:5px;
`
const ProfileName = styled.span`
color: white;
`
const ProfileRole = styled.span`
color: grey;
font-size:13px;
`

const CastProfile = ({ actor }) => {
  const url = `https://image.tmdb.org/t/p/original/${actor.profile_path}`
  return (
    <ProfileCard >
      <ProfileImg src={url} alt="Movie Poster" />
      <ProfileName>{actor.name}</ProfileName>
      <ProfileRole>{actor.character}</ProfileRole>
    </ProfileCard>
  )
}

export default CastProfile;