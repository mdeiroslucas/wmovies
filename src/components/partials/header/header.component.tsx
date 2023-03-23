import { useState } from 'react';
import './header.component.scss';
import { Link } from 'react-router-dom';
import { FaBars} from 'react-icons/fa';

export default function Header(){
  const [query, setQuery] = useState("");
  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);

  return (
    <header>
      <Link className='logo' to="/">
        <span>W</span>Movies
      </Link>
      <div className='search'> 
        <input type="text" placeholder='Search...' onChange={e => setQuery(e.target.value)} />
      </div>
      <Link className='favorite' to='/favorite'>MyMovies</Link>
      <div className="sideBar">
        <FaBars onClick={showSideBar} />
      </div>
    </header>
  )
}