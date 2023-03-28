import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { Movie } from "../../../model/movie";
import "./search.scss"

function Search(){
  const [searchTerm, setSearhTerm] = useState([]);
  const {name} = useParams();
  const cleanedName = name?.substring(1);
  const navigate = useNavigate();
  const { VITE_API_KEY } = import.meta.env;

  useEffect (() => {
    async function loadMovie() {
     await api.get('/search/movie', {
      params:{
        api_key: '3e5e48c2fadb1d201ea994c146ebff5d',
        language: "pt-br",
        query: `${cleanedName}`, 
        page: 1,
        include_adult: true,
      }
     }).then((res) => {
      setSearhTerm(res.data.results)
      console.log(res.data.results);
     }).catch (() => {
      navigate("/", {replace: true});
      return;
    });
    }
    
    loadMovie();

  }, [Navigate, name]);


  return (
    <div className="container">
      <div className="movie-list">
        {searchTerm.map((movie: Movie) => {
          return (
            <article key={movie.id} className="container__movie">
              <img className="container__movie--image"src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
              <span><h2 className="container__movie--title">{movie.title}</h2></span>
              <Link to={`/movie/${movie.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Search;