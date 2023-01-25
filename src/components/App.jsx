import { Routes, Route } from "react-router-dom";
import { Header } from "./header/Header";
import { Box } from "./box/Box";
import { Home } from "./home/Home";

export const App = () => {
  return (
    <Box height='100vh' display='flex' flexDirection='column' justifyContent='start' alignItems='start' fontSize={6} color='text'>
    <Header></Header>
    <Routes>
      <Route path="" element={ <Home /> } />
    </Routes>
    </Box>
  );
};
