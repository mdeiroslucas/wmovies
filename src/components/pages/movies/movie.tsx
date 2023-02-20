import { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import api from '../../../services/api'
import { Movie } from "../../../model/movie";
import './movie.scss';

function Movies () {
  const { id } = useParams();
  const [movieSelect, setMovieSelect] = useState<Movie>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() =>{
    async function getMovieById() {
      await api.get(`movie/${id}`, {
        params: {
          api_key: '3e5e48c2fadb1d201ea994c146ebff5d',
          language: "pt-br",
        }
      })
      .then((res) => {
        setMovieSelect(res.data);
        setLoading(false);
      })
      .catch (() => {
        navigate("/", {replace: true});
        return
      })
    }

    getMovieById();

    return () => {
      console.log('componente desmontado')
    }
  }, [navigate, id]);

  function saveMovie(){
    const myList: string | null = localStorage.getItem('@wmovies');
    let savedMovies = JSON.parse(myList || "[]");

    const hasMovie = savedMovies.some( (movieSaved: Movie) => movieSaved!.id === movieSelect!.id);

    if (hasMovie) {
      alert("You've already added this movie to the list.");
      return;
    }

    savedMovies.push(movieSelect);
    localStorage.setItem('@wmovies', JSON.stringify(savedMovies));
    alert('Movie has been saved');
  }

  if(loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className="movieCard">
      <h1>{movieSelect!.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${movieSelect!.backdrop_path}`} alt={movieSelect!.title} />

      <h3>Sinopse</h3>
      <span>{movieSelect!.overview}</span>

      <strong>Grade: {movieSelect!.vote_average} / 10</strong>

      <div className="buttons">
        <button onClick={saveMovie}>Save</button>
        <button>
          <a target='blank' rel='external' href={`https://www.youtube.com/results?search_query=${movieSelect!.title} Trailer`}>Trailer</a>

        </button>
      </div>
    </div>
  )
}

export default Movies;
