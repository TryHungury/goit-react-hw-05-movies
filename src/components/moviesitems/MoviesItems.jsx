// import { Box } from "components/box/Box"
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Paragraph_css from '../home/StyledParagraph.module.css';
// import { useState } from "react";
// import { useEffect } from "react";

const {Paragraph} = Paragraph_css;

const Ul = styled.ul`
display: flex;
flex-wrap: wrap; 
justify-content: space-evenly; 
align-items: center; 
padding-right: ${p=>p.theme.space[4]}px; 
padding-left: ${p=>p.theme.space[4]}px;  

`

const ListItem = styled.li`
/* border-radius: ${p=>p.theme.radii.normal}; */
box-shadow: 5px 20px 20px 5px ${p=>p.theme.colors.text};
width: 100%;
/* height: 150px; */
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
/* background-color: ${p=>p.theme.colors.backgroundSecondary}; */
margin-top: ${p=>p.theme.space[6]}px;
/* margin-bottom: ${p=>p.theme.space[6]}px; */

@media screen and (min-width: 320px) {
    width: 100%;
    height: 300px;
    max-width: 300px;
    /* height: 100%; */
}
@media screen and (min-width: 480px) {
    width: 100%;
    height: 500px;
    max-width: 480px;
}
@media screen and (min-width: 720px) {
    width: 40%;
    height: 500px;
}
@media screen and (min-width: 1200px) {
    width: 28%;
    height: 500px;
}

`

const Image = styled.img`
width: 100%;
max-width: 200px;
height: 150px;

@media screen and (min-width: 320px) {
    max-width: 300px;
    height: 200px;
}
@media screen and (min-width: 480px) {
    max-width: 480px;
    height: 420px;
}
@media screen and (min-width: 720px) {
    max-width: 400px;
    height: 400px;
}
@media screen and (min-width: 1200px) {
    max-width: 500px;
    height: 400px;
}
`

export const MoviesItems = ({dataArray}) => {
    // const [filmsList, setFilmsList] = useState("");
    // const [search, setSearch] = useState("");
    // const [seachParams, setSearchParams] = useSearchParams();

    // useEffect(()=>{
    //     console.log(seachParams.get("query"))
    // }, [])
    // const makeList = () => {
    //     setFilmsList(markup)
    // }

    // console.log("Mark", filmsList)
    return (
        <Ul>
        {dataArray.data && dataArray.data.results.map(({id, title, name, poster_path})=>{
            let pathToImg = 'https://image.tmdb.org/t/p/w500' + poster_path;
            return (
                <ListItem key={id}>
                    <Link to={`/movies/${id}`} className={Paragraph}>{title || name}</Link>
                    <Image src={pathToImg} alt={title || name} />
                </ListItem>
            )
        })}
    </Ul>
    ) 
}