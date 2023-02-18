import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/pages/home/home';
import Movies from './components/pages/movies/movies';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<Home/>}/>
        <Route path="/movie/:id" element={<Movies/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default RoutesApp;
