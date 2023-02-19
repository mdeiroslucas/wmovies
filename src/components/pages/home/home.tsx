import { useEffect, useState } from "react";
import api from '../../../services/api'

function home () {
  const [moveis, setMovies] = useState([]);

  useEffect(() =>{

    async function loadMovies(){
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: '3e5e48c2fadb1d201ea994c146ebff5d',
          language: "pt-br",
          page: 1,
        }
      });

      console.log(response.data.results);
    }

    loadMovies();
  }, []);
  return (
    <div>
      <h1>Bem vindo a home</h1>
    </div>
  )
}

export default home;
