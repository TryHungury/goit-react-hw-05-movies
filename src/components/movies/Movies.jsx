import { Box } from "components/box/Box"
import { fetchOnSearch } from "components/fetchApi/FetchApi"
import { MoviesItems } from "components/moviesitems/MoviesItems"
import { Search } from "components/search/Search"
import { useState } from "react"

 export const Movies = () => {
    const [data, setData] = useState([])

    const fetchData = (searchValue) => {
        fetchOnSearch(searchValue).then((data)=>{setData(data)})
    }
    console.log(data)

    return (
        <Box width="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Search makeFetch={fetchData}></Search>
        <MoviesItems dataArray={data}></MoviesItems>
        </Box>

    )
 }