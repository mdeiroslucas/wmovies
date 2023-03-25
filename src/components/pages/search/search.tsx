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
     await api.get('/search/keyword', {
      params:{
        api_key:'3e5e48c2fadb1d201ea994c146ebff5d',
        // language: "pt-br",
        query: `${cleanedName}`, 
        page: 1,
      }
     }).then((res) => {
      console.log('leu aqui')
      setSearhTerm(res.data)
      console.log(res.data);
     }).catch (() => {
      navigate("/", {replace: true});
      return
    })
    }
    
    loadMovie();

  }, [Navigate, name]);


  return (
    <h1>foi para essa rota</h1>
  )
}


    //https://api.themoviedb.org/3/search/keyword?api_Key=3e5e48c2fadb1d201ea994c146ebff5d&query=sex&page=1
    //https://api.themoviedb.org/3/search/keyword?api_key=3e5e48c2fadb1d201ea994c146ebff5d&query=sex&page=1

export default Search;