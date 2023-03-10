import { useEffect, useState } from "react";
import api from '../../../services/api'
import { Movie } from "../../../model/movie";
import { Link } from 'react-router-dom';
import './home.scss';



function home () {
  const [nowMovies, setNowMovies] = useState([]);
  const [loading, setLoading]     = useState(true);

  useEffect(() =>{

    async function loadMovies(){
      // const response = 
      await api.get("movie/now_playing", {
        params: {
          api_key: '3e5e48c2fadb1d201ea994c146ebff5d',
          language: "pt-br",
          page: 1,
        }
      }).then(res => {
        setNowMovies(res.data.results)
        setLoading(false);
      })
        
      
      
      // setNowMovies(response.data.result);

      // console.log(response.data.results.slice(0, 10));

      
    }

    loadMovies();
  }, []);

  if(loading){
    return (
     <div className='loading'>
      <h2>Loading movies...</h2>
     </div>
    )
  }

  return (
    <div className="container">
      <div className="movie-list">
        {nowMovies.map((movie: Movie) => {
          return (
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
              <Link to={`/movie/${movie.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default home;
