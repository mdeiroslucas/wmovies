import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/pages/home/home';
import Movies from './components/pages/movies/movies';
import Header from "./components/partials/header/header.component";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movies />} />
        </Routes>
    </BrowserRouter>

  )
}

export default RoutesApp;
