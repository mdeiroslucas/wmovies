import { useEffect, useState } from "react";
import api from "../../../services/api";

function sideBar(){
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    async function loadGenre(){
      const response = await api.get("")
    }
  })
  return (
    <div className="sideBar">

    </div>
  )
}