import { Box } from "components/box/Box"
import { fetchApi } from "components/fetchApi/FetchApi"
import { useEffect } from "react";
import { useState } from "react"

export const Home = () => {
    const [filmsArray, setFilmsArray] = useState([]);
    
    useEffect(()=>{
        fetchApi().then(({data})=>{setFilmsArray(data.results)});
            
    }, [])
    console.log(filmsArray)
    
    return (
        <Box>
            <Box as={"ul"} display="block">
                {filmsArray.map(({id, name})=>{
                    return (
                        <li key={id}>{name}</li>
                    )
                })}
            </Box>
        </Box>
    )
}