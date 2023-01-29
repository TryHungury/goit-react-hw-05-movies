import { Box } from "components/box/Box"
import StyledCast_css from "../cast/StyledCast.module.css"
import { fetchOnCast } from "components/fetchApi/FetchApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const {cast, cast__actor} = StyledCast_css;

const StyledDetails = styled.li`
  font-family: ${p=>p.theme.fonts.body};
  font-weight: ${p=>p.theme.fontWeights.body};
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${p=>p.theme.space[5]}px;

  p {
    margin: 10px 0;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

const Item = styled.p`
  padding: 5px;
  margin: 20px 0;
`;

const Job = styled(Item)`
  font-family: ${p=>p.theme.fonts.heading};
  font-weight: ${p=>p.theme.fontWeights.heading};
`;

const Name = styled(Item)`
  font-style: italic;
`;

const OriginalName = styled(Item)`
  /* text-decoration: underline; */
`;

const Cast = () => {
    // const locate = useLocation()
    const params = useParams()
    const [castArray, setCatsArray] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        // console.log(Number(params.movieId))
        fetchOnCast(params.movieId).then((data)=>{setCatsArray(data)}).catch((error)=>{setError(error)})
    }, [params])

    // console.log(castArray.data)
    return (
        <Box as={"ul"} className={cast} pt={5}>
        {castArray && castArray.data.crew.map(({job, name, original_name, profile_path}, id)=>{     
        // console.log(castArray)
            return(
            <StyledDetails key={id} className={cast__actor}><img src={'https://image.tmdb.org/t/p/w500' + profile_path} alt={name}></img>
                <Job>Job: {job}</Job>
                <Name>Name: {name}</Name>
                <OriginalName>Original name: {original_name}</OriginalName>
            </StyledDetails>)
        })}
        {error && <Box display="flex" justifyContent="center" alignItems="center" mt={5}> 
            <h3>{error.message}</h3> 
        </Box>} 
    </Box>
    )
}

export default Cast;