import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home   from  './components/pages/home/home';
import Movies from  './components/pages/movies/movie';
import Header from  './components/partials/header/header.component';
import Error  from  './components/pages/Error/error';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movies />} />

          <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>

  )
}

export default RoutesApp;
