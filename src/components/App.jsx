import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import { Header } from "./header/Header";
import { Box } from "./box/Box";

// import { Home } from "./home/Home";
// import { Movies } from "./movies/Movies";
// import { MovieIdPage } from "./movieidpage/MovieIdPage";
// import { Cast } from "./cast/Cast";
// import { Reviews } from "./reviews/Reviews";
// import { LoaderWrapper } from "./loader/Loader"

const Home = lazy(()=> import('./home/Home'))
const Movies = lazy(() => import('./movies/Movies'));
const MovieIdPage = lazy(() => import('./movieidpage/MovieIdPage'));
const Cast = lazy(() => import('./cast/Cast'));
const Reviews = lazy(() => import('./reviews/Reviews'));
const LoaderWrapper = lazy(() => import('./loader/Loader'));

export const App = () => {

  return (
    <Box width="100%" height='100%' display='flex' flexDirection='column' justifyContent='start' alignItems='start' fontSize={6} color='text' position="relative">
      <Box width="100%"><Header></Header></Box>
      <Box width="100%" display='flex' flexDirection='column' justifyContent='start' alignItems='start' pt={7}>
      <Suspense fallback={<LoaderWrapper/>}>
        <Routes>
            <Route path="" element={ <Home /> } />
          <Route path="/movies" element={ <Movies/> }/>
          <Route path="/movies/:movieId" element={ <MovieIdPage/> }>
            <Route path="cast" element={ <Cast/>}></Route>
            <Route path="reviews" element={ <Reviews/>}></Route>
          </Route>
        </Routes>
      </Suspense>
      </Box>
    </Box>
  );
};