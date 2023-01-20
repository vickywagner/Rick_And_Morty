import React from "react";
import style from "../styles/SearchBar.module.css"
import { useState } from "react";



function SearchBar({ onSearch}) {
   const [character, setCharacter] = useState('') // mi estado es un string no un obj
//character es el estado

   const handleChange = (event) => {
      setCharacter(event.target.value)
//mi estado pasa a ser el event.target.value
   }

   return (
      <div className ={style.container}>
        <input className ={style.input} type='search'  value={character} onChange={handleChange} /> 
      <button className ={style.btn} onClick={() => onSearch(character)}>Agregar</button> 
      </div>
   );
}

export default SearchBar;

// el onChange me dispara un evento cuando algo cambia, se actualiza
// con el onchange detecto cada cambio de mi input