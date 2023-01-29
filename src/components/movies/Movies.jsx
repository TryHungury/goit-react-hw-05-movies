import { Box } from "components/box/Box"
import { fetchOnSearch } from "components/fetchApi/FetchApi"
import { MoviesItems } from "components/moviesitems/MoviesItems"
import { Search } from "components/search/Search"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"


const Movies = () => {
    const [data, setData] = useState([])
    const [searchParams] = useSearchParams();

    const fetchData = (searchValue) => {
        fetchOnSearch(searchValue).then((data)=>{setData(data)})
    }

    useEffect(()=>{
        let search = searchParams.get("query")
        // console.log(search)

        if (!search) {
            return
        }

        fetchOnSearch(search).then((data)=>{setData(data)})
    }, [searchParams])

    return (
        <Box width="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Search makeFetch={fetchData}></Search>
            <MoviesItems dataArray={data}></MoviesItems>
        </Box>

    )
 }

 export default Movies;