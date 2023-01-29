import { Box } from "components/box/Box"
import { fetchOnMoviesId } from "components/fetchApi/FetchApi"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useLocation, useParams } from "react-router-dom"
import  StyledLink_css  from "../header/StyledLink.module.css";

const {Styled__Link} = StyledLink_css;

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
    // console.log(locate.state.from)
    return (
        <Box width="100%" pd={5} pt={5}>
            <Box pl={5}>
                <Link to={locate.state.from.pathname + "/" + locate.state.from.search} className={Styled__Link}>To back</Link>
            </Box>
            {moviesList.data &&
            <>
                <Box display="flex" justifyContent="space-evenly" mr={4} ml={4} mt={5} border="4px solid" borderRadius="8px">
                    <Box display="flex" flexDirection="column" justifyContent="space-evenly" alignItems="center">
                        <h2>{moviesList.data.title}</h2>
                        <p>{moviesList.data.release_date}</p>
                        <Box pt={5}>
                            <h3>About film</h3>
                            <p>{moviesList.data.overview}</p>
                        </Box>
                    </Box>
                    <img src={'https://image.tmdb.org/t/p/w500' + moviesList.data.poster_path} alt={moviesList.data.title}></img>
                </Box>
                <Box mt={6}>
                    <h2>
                        Additional Information
                    </h2>
                </Box>
            </> 
            }
            {error && <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
                <h3>{error.message}</h3>
                </Box>}
        </Box>
    )
}