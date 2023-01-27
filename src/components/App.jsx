import { Routes, Route } from "react-router-dom";
import { Header } from "./header/Header";
import { Box } from "./box/Box";
import { Home } from "./home/Home";
// import { Search } from "./search/Search";
import { Movies } from "./movies/Movies";

export const App = () => {
  return (
    <Box height='100%' display='flex' flexDirection='column' justifyContent='start' alignItems='start' fontSize={6} color='text'>
      <Box width="100%"><Header></Header></Box>
      <Routes>
        <Route path="" element={ <Home /> } />
        <Route path="/movies" element={ <Movies/> }/>
        <Route path="/movies/:movieId"></Route>
      </Routes>
    </Box>
  );
};
