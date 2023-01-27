import { Box } from "components/box/Box"
import { fetchApi } from "components/fetchApi/FetchApi"
import { useEffect } from "react";
import { useState } from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";
import Paragraph_css from '../home/StyledParagraph.module.css';

const {Paragraph} = Paragraph_css;

const Title = styled.h1`
width: 35%;
display: block;
text-align: center;
margin: 0 auto;
box-shadow: 1px 2px 1px 3px ${p=>p.theme.colors.text};

font-family: ${p=>p.theme.fonts.heading};
font-size: ${p=>p.theme.fontSizes[3]}px;

border-radius: ${p=>p.theme.radii.normal};

padding: ${p=>p.theme.space[3]}px;

margin-top: ${p=>p.theme.space[3]}px;
margin-bottom: ${p=>p.theme.space[3]}px;

@media screen and (min-width: 320px) {
    font-size: ${p=>p.theme.fontSizes[4]}px;
    margin-top: ${p=>p.theme.space[4]}px;
    margin-bottom: ${p=>p.theme.space[4]}px;
}
@media screen and (min-width: 720px) {
    font-size: ${p=>p.theme.fontSizes[5]}px;
    margin-top: ${p=>p.theme.space[5]}px;
    margin-bottom: ${p=>p.theme.space[5]}px;
}
@media screen and (min-width: 1200px) {
    font-size: ${p=>p.theme.fontSizes[6]}px;
    margin-top: ${p=>p.theme.space[6]}px;
    margin-bottom: ${p=>p.theme.space[6]}px;
}
`

const ListItem = styled.li`
/* border-radius: ${p=>p.theme.radii.normal}; */
box-shadow: 5px 20px 20px 5px ${p=>p.theme.colors.text};
width: 200px;
height: 150px;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
/* background-color: ${p=>p.theme.colors.backgroundSecondary}; */
margin-bottom: ${p=>p.theme.space[6]}px;

@media screen and (min-width: 320px) {
    width: 450px;
    height: 350px;
}
@media screen and (min-width: 720px) {
    width: 300px;
    height: 250px;
}
@media screen and (min-width: 1200px) {
    width: 350px;
    height: 350px;
}
@media screen and (min-width: 1400px) {
    width: 450px;
    height: 400px;
}
`

// const Paragraph = styled.p`
// display: flex;
// align-items: center;
// justify-content: center;
// font-family: ${p=>p.theme.fonts.body};
// font-weight: ${p=>p.theme.fontWeights.heading};
// font-size: ${p=>p.theme.fontSizes[2]}px;
// padding: ${p=>p.theme.space[3]}px;
// background-color: ${p=>p.theme.colors.backgroundSecondary};
// color: ${p=>p.theme.colors.accent};
// /* margin: ${p=>p.theme.space[4]}px; */
// margin-bottom: ${p=>p.theme.space[4]}px;
// margin-top: 0;
// box-shadow: 5px 5px 1px 4px ${p=>p.theme.colors.text};
// border-radius: ${p=>p.theme.radii.normal};

// @media screen and (min-width: 320px) {
//     font-size: ${p=>p.theme.fontSizes[3]}px;
// }
// @media screen and (min-width: 720px) {
//     margin-bottom: 0;
//     margin: ${p=>p.theme.space[4]}px;
//     font-size: ${p=>p.theme.fontSizes[3]}px;
// }
// @media screen and (min-width: 1200px) {
//     font-size: ${p=>p.theme.fontSizes[4]}px;
// }
// `

const Image = styled.img`
width: 100%;
max-width: 200px;

@media screen and (min-width: 320px) {
    width: 100%;
    max-width: 450px;
}
@media screen and (min-width: 720px) {
    width: 90%;
    max-width: 500px;
}
@media screen and (min-width: 1200px) {
    width: 90%;
    max-width: 600px;
}
`

export const Home = () => {
    const [filmsArray, setFilmsArray] = useState([]);
    
    useEffect(()=>{
        fetchApi().then(({data})=>{setFilmsArray(data.results)});  
    }, [])

    // console.log(filmsArray)
    return (
        <Box width="100%" display="flex" flexDirection="column" >
            <Box><Title>Popular movies</Title></Box>
            <Box as={"ul"} display="flex" flexWrap="wrap" justifyContent="space-evenly" align-items= "center" pr={4} pl={4}>
                {filmsArray.map(({id, title, name, backdrop_path})=>{
                    let pathToImg = 'https://image.tmdb.org/t/p/w500' + backdrop_path;
                    return (
                        <ListItem key={id}>
                            <Link to={`/movies/${id}`} className={Paragraph}>{title || name}</Link>
                            <Image src={pathToImg} alt={title || name} />
                        </ListItem>
                    )
                })}
            </Box>
        </Box>
    )
}