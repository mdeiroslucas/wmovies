import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../../../model/movie';
import './favorite.scss';


function Favorite () {
  const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const myList = localStorage.getItem('@wmovies');
    setFavoriteMovies(JSON.parse(myList || "[]"));


  })

  return (
    <div className="my-movies">
      <h1>Tela Favorita</h1>

      <ul>
        {favoriteMovies.map((favoriteMovie: Movie) => {
          return (
            <li key={favoriteMovie.id}>
              <span>{favoriteMovie.title}</span>
              <div className='my-movies--details'>
                <Link to={`/movie/${favoriteMovie.id}`}>Details </Link>
                <button>Exclude</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favorite;