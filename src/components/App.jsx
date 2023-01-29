import { Routes, Route } from "react-router-dom";
import { Header } from "./header/Header";
import { Box } from "./box/Box";
import { Home } from "./home/Home";
import { Movies } from "./movies/Movies";
import { MovieIdPage } from "./movieidpage/MovieIdPage";
import { Cast } from "./cast/Cast";
import { Reviews } from "./reviews/Reviews";

export const App = () => {

  return (
    <Box width="100%" height='100%' display='flex' flexDirection='column' justifyContent='start' alignItems='start' fontSize={6} color='text' position="relative">
      <Box width="100%"><Header></Header></Box>
      <Box width="100%" display='flex' flexDirection='column' justifyContent='start' alignItems='start' pt={7}>
        <Routes>
          <Route path="" element={ <Home /> } />
          <Route path="/movies" element={ <Movies/> }/>
          <Route path="/movies/:movieId" element={ <MovieIdPage/> }>
            <Route path="cast" element={ <Cast/>}></Route>
            <Route path="reviews" element={ <Reviews/>}></Route>
          </Route>
        </Routes>
      </Box>
    </Box>
  );
};
