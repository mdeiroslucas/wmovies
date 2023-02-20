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

  function deleteMovie(id: string){
    let filterMovie = favoriteMovies.filter((movie) => {
      return (movie.id !== id)
    })

    setFavoriteMovies(filterMovie);
    localStorage.setItem('@wmovies', JSON.stringify(filterMovie));
  }

  return (
    <div className="my-movies">
      <h1>My Favorites</h1>

      {favoriteMovies.length === 0 && <span>You don't have favorite movies</span> };

      <ul>
        {favoriteMovies.map((favoriteMovie: Movie) => {
          return (
            <li key={favoriteMovie.id}>
              <span>{favoriteMovie.title}</span>
              <div className='my-movies--details'>
                <Link to={`/movie/${favoriteMovie.id}`}>Details </Link>
                <button onClick={ () => deleteMovie(favoriteMovie.id)}>Exclude</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Favorite;