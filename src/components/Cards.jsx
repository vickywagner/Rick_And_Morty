import React from "react";
import Card from './Card';
import style from "../styles/cards.module.css"


function Cards({ characters, onClose }) {
   return (
      <div className= {style.container}>
         { 
         characters.map(({id, name, species, gender, image}) => {
            return <Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            id = {id}
            onClose={() => onClose(id)} />
         })
// si hacemos characters.map((character)){  se puede hacer--> key ={character.id}, name={character.name}
      }
      </div>);
}

export default Cards;