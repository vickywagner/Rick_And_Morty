import React from "react";
import style from "../styles/card.module.css"
import { Link } from "react-router-dom";

function Card({ name, gender, onClose, species, image, id}) {
 // props ---> name: " ", gender:" ", onClose: fn, species:" ", image:" " 
   return (
      <div className = {style.card}>
          <button className ={style.btn} onClick={onClose}>X</button>
          <Link to={`/detail/${id}`}  className={style.link}>
         <h2 className = {style.name}>{name}</h2>
          </Link>
         <h2 className = {style.title}>Specie: {species}</h2>
         <h2 className = {style.title}>Gender: {gender}</h2>
         <img className = {style.img} src={image} alt={name} /> 
      </div>
   );
}

export default Card;