import { Box } from "components/box/Box"
import { fetchOnMoviesId } from "components/fetchApi/FetchApi"
import { useEffect } from "react"
import { useState } from "react"
import styled, { keyframes } from 'styled-components';
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import  StyledLink_css  from "../header/StyledLink.module.css";
import  StyledButton_css  from "../movieidpage/MovieIdButton.module.css";
// import Icon from "../icon/Icon";

const { cast, review, } = StyledButton_css;

const {to_back} = StyledLink_css;

const infiniteAnimationAdditionalInformation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Header = styled.h2`
  font-size: ${p=>p.theme.fontSizes[5]}px;
  font-family: ${p=>p.theme.fonts.heading};
  font-weight: ${p=>p.theme.fontWeights.bold};
  color: ${p=>p.theme.colors.text};
  margin-bottom: ${p=>p.theme.space[5]}px;
  text-align: center;
  animation: ${infiniteAnimationAdditionalInformation} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: ${p=>p.theme.fontSizes[4]}px;
  }
`;

const infiniteAnimationMovieTitle = keyframes`
  0% {
    transform: translateX(-2%);
  }
  50% {
    transform: translateX(2%);
  }
  100% {
    transform: translateX(-2%);
  }
`;

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px #fff;
  }
  100% {
    box-shadow: 0 0 20px #ff0;
  }
`;

const pulseAnimation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
`;

const AboutFilmContainer = styled.h3`
  font-size: ${p=>p.theme.fontSizes[7]}px;
  font-family: ${p=>p.theme.fonts.heading};
  font-weight: ${p=>p.theme.fontWeights.bold};
  width: 90%;
  margin: 40px auto;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  animation: ${glowAnimation} 2s ease-in-out infinite, ${pulseAnimation} 2s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: ${p=>p.theme.fontSizes[4]}px;
    width: 80%;
    margin: 20px auto;
    padding: 10px;
  }
  @media (max-width: 1200px) {
    font-size: ${p=>p.theme.fontSizes[5]}px;
    width: 80%;
    margin: 20px auto;
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: ${p=>p.theme.fontSizes[7]}px;
  font-family: ${p=>p.theme.fonts.heading};
  font-weight: ${p=>p.theme.fontWeights.bold};
  color: ${p=>p.theme.colors.text};
  padding: 0 40px;
  padding-bottom: 40px;
  /* padding-right: ${p=>p.theme.space[4]}px; */
  /* padding-left: ${p=>p.theme.space[4]}px; */
  animation: ${infiniteAnimationMovieTitle} 2s ease-in-out infinite;
  text-align: center;
  margin-top: ${p=>p.theme.space[5]}px;

  @media (max-width: 768px) {
    font-size: ${p=>p.theme.fontSizes[4]}px;
    margin-top: ${p=>p.theme.space[4]}px;
  }
  @media (max-width: 1200px) {
    font-size: ${p=>p.theme.fontSizes[5]}px;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;

  @media (max-width: 576px) {
    max-width: 40%;
    /* height: 200px; */
  }

  @media (min-width: 577px) and (max-width: 768px) {
    max-width: 40%;
  }

  @media (min-width: 769px) {
    max-width: 40%;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: ${p=>p.theme.fontWeights.heading};
  font-family: ${p=>p.theme.fonts.body};
  line-height: 1.5;
  text-align: center;
  padding: 1rem;

  @media (max-width: 576px) {
    font-size: 1rem;
  }

  @media (min-width: 577px) and (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (min-width: 769px) {
    font-size: 1.2rem;
  }
`;

const ContainerBox = styled.section`
display: flex; 
flex-direction: column;
justify-content: space-evenly; 
align-items: center; 
text-align: center;
padding-right: ${p=>p.theme.space[4]}px;
padding-left: ${p=>p.theme.space[4]}px;
background-color: #F5F5DC;
/* margin-right: ${p=>p.theme.space[4]}px; */
/* margin-left: ${p=>p.theme.space[4]}px; */
margin-top: ${p=>p.theme.space[5]}px;

border-top: 4px solid;
border-bottom: 4px solid; 

  @media (min-width: 769px) {
    flex-direction: row;
  }
`

const Date = styled.p`
  font-size: 1.5rem;
  font-weight: ${p=>p.theme.fontWeights.body};
  font-family: ${p=>p.theme.fonts.body};

  color: #333;
  text-align: center;
  padding-top: 1rem;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
  @media (min-width: 992px) {
    font-size: 2rem;
  }
  &:hover {
    color: #555;
    transition: color 0.3s ease-in-out;
  }
`;

export const MovieIdPage = () => {
    const params = useParams()
    const [moviesList, setMoviesList] = useState([])
    const [error, setError] = useState(null)
    const locate = useLocation()
    
    useEffect(()=>{
        fetchOnMoviesId(params.movieId).then((data)=>{setMoviesList(data)}).catch((error)=>{setError(error)})

    },[params.movieId])
    
    // console.log(moviesList)
    // console.log(error)
    // console.log(locate)
    return (
        <Box width="100%" pd={5} pt={5}>
            <Box pl={5}>
                <Link to={locate.state?.from ?? "/movies"} className={to_back}>To back</Link>
            </Box>
            {moviesList.data &&
            <>
                <ContainerBox>
                    <Box display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center">
                        <Title>{moviesList.data.title}</Title>
                        <Date>{moviesList.data.release_date}</Date>
                        <Box pt={5}>
                            <AboutFilmContainer>About film</AboutFilmContainer>
                            <Description>{moviesList.data.overview}</Description>
                        </Box>
                    </Box>
                    <Image src={'https://image.tmdb.org/t/p/w500' + moviesList.data.poster_path} alt={moviesList.data.title}></Image>
                </ContainerBox>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mr={4} ml={4} mt={6}>
                    <Header>
                        Additional Information
                    </Header>
                    <Box width="100%" display="flex" justifyContent="center">
                        <Link className={cast} to={"cast"} state={{from: locate.state?.from}}>Cast</Link>
                        <Link className={review} to={"reviews"} state={{from: locate.state?.from}}>Reviews</Link>
                    </Box>
                    <Outlet></Outlet>
                </Box>
            </> 
            }
            {error && <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
                <h3>{error.message}</h3>
                </Box>}
        </Box>
    )
}