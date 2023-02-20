import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import api from '../../../services/api'
import { Movie } from "../../../model/movie";

function Movies () {
  const { id } = useParams();
  const [movieSelect, setMovieSelect] = useState<Movie>();
  const [loading, setLoading] = useState(true);

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
        console.log('filme não encontrado');
      })
    }

    getMovieById();

    return () => {
      console.log('componente desmontado')
    }
  }, []);

  if(loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div className="container">
          <img src={`https://image.tmdb.org/t/p/original/${movieSelect!.backdrop_path}`} alt={movieSelect!.title} />

          <h3>Sinopse</h3>
          <span>{movieSelect!.overview}</span>

          <strong>Grade: {movieSelect!.vote_average} / 10</strong>
    </div>
  )
}

export default Movies;
