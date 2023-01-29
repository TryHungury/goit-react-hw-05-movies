import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
import Paragraph_css from '../home/StyledParagraph.module.css';

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
box-shadow: 5px 20px 20px 5px ${p=>p.theme.colors.text};
width: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
margin-top: ${p=>p.theme.space[6]}px;

@media screen and (min-width: 320px) {
    width: 100%;
    height: 300px;
    max-width: 300px;
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
    const locate = useLocation()

    return (
        <Ul>
        {dataArray.data && dataArray.data.results.map(({id, title, name, poster_path})=>{
            let pathToImg = 'https://image.tmdb.org/t/p/w500' + poster_path;
            return (
                <ListItem key={id}>
                    <Link to={`/movies/${id}`} className={Paragraph} state={{from: locate}}>{title || name}</Link>
                    <Image src={pathToImg} alt={title || name} />
                </ListItem>
            )
        })}
    </Ul>
    ) 
}