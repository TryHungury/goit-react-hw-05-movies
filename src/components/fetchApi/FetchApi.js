import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/search/company?"
const API_KEY = "bb1efa572a94180b7e4fac8a660bbc90"

export async function fetchApi () {
    const info = await axios.get(`${BASE_URL}api_key=${API_KEY}&query="a"`)

    return info
}