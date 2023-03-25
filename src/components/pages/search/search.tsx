import { useEffect, useState } from "react";
import api from "../../../services/api";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function Search(){
  const [searchTerm, setSearhTerm] = useState([]);
  const {name} = useParams();
  const cleanedName = name?.substring(1);
  const navigate = useNavigate();

  useEffect (() => {
    async function loadMovie() {
     await api.get('/search/movie', {
      params:{
        api_Key:'3e5e48c2fadb1d201ea994c146ebff5d',
        language: "pt-br",
        query: `${cleanedName}`, 
        page: 1,
        include_adult: true,
      }
     }).then((res) => {
      setSearhTerm(res.data)
      console.log(res.data);
     }).catch (() => {
      navigate("/", {replace: true});
      return
    })
    }

    loadMovie();

    return () => {
      console.log('vendo se foi')
    }

  }, [Navigate, name]);


  return (
    <h1>foi para essa rota</h1>
  )
}




export default Search;