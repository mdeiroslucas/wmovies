import './header.component.scss';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <header>
      <Link className='logo' to="/"> WMovies </Link>
      <div className='search'> 
        <input type="text" placeholder='Search...' />
      </div>
      <Link className='favorite' to='/favorite'>My movies</Link>
    </header>
  )
}

export default Header;