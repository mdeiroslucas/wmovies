import { FormEvent, useState } from 'react';
import './header.component.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars} from 'react-icons/fa';

export default function Header(){
  const [query, setQuery] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>):void => {
    e.preventDefault();
    
    if (!search) return;

    navigate(`/search/:${search}`)
    setSearch('');
    
    // await api.get("movie/now_playing", {
    //   params: {
    //     api_key: '3e5e48c2fadb1d201ea994c146ebff5d',
    //     language: "pt-br",
    //     page: 1,
    //   }
    // }).then(res => { 
    //   setNowMovies(res.data.results)
    //   setLoading(false);
    // })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const showSideBar = () => setSidebar(!sidebar);

  // async function handleKeyDown (){
  //   await api.get("movie/now_playing", {
  //     params: {
  //       api_key: '3e5e48c2fadb1d201ea994c146ebff5d',
  //       language: "pt-br",
  //       page: 1,
        
  //     }
  //   }).then(res => { 
  //     setNowMovies(res.data.results)
  //     setLoading(false);
  //   })
  // }
  // }

  return (
    <header>
      <Link className='logo' to="/">
        <span>W</span>Movies
      </Link>
      <form className='search' onSubmit={handleSubmit}> 
        <input type="text" placeholder='Search...' value={search} onChange={handleChange}/>
        {/* onChange={e => setQuery(e.target.value)} */}
      </form>
      <Link className='favorite' to='/favorite'>MyMovies</Link>
      <div className="sideBar">
        <FaBars onClick={showSideBar} />
      </div>
    </header>
  )
}