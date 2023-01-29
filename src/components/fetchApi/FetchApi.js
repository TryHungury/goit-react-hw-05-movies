import axios from "axios";

// const BASE_URL = "https://api.themoviedb.org/3/search/company?"
const BASE_URL = "https://api.themoviedb.org/3/trending/all/day?"
const API_KEY = "bb1efa572a94180b7e4fac8a660bbc90"

export async function fetchApi () {
    const data = await axios.get(`${BASE_URL}api_key=${API_KEY}`)

    return data;
}

const BASE_URL_SEARCH_QUERY = "https://api.themoviedb.org/3/search/movie?"

export async function fetchOnSearch (query) {
    const data = await axios.get(`${BASE_URL_SEARCH_QUERY}api_key=${API_KEY}&query=${query}`)

    return data;
} 

const BASE_URL_MOVIESID = "https://api.themoviedb.org/3/movie/"

export async function fetchOnMoviesId (moviesId) {
    const data = await axios.get(`${BASE_URL_MOVIESID}${moviesId}?api_key=${API_KEY}`)

    return data;
}