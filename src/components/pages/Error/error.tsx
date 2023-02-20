import { Link } from "react-router-dom";

import './error.scss';

function Error(){
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Pagina não encontrada!</h2>
      <Link to='/'>Veja todos os filmes</Link>
    </div>
  )
}

export default Error;