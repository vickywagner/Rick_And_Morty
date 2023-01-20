import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import style from '../styles/detail.module.css'

const Detail = () => {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
          fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return(
        <div>
            <button className = {style.btn}>
                <Link to="/home" >Home</Link>
            </button>
            <h1 className = {style.title} >{character?.name}</h1>
            <p className = {style.info} >{character?.status}</p> 
            <p className = {style.info} >{character?.species}</p>
            <p className = {style.info} >{character?.gender}</p>
            <p className = {style.info} >{character?.origin?.name}</p>
            <img src={character?.image} alt={character.name} />
        </div>
    )
}

export default Detail;