import React from "react";
import style from "../Card/card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions" ;
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function Card({ name, gender, onClose, species, image, id}) {
 // props ---> name: " ", gender:" ", onClose: fn, species:" ", image:" " 
 const dispatch = useDispatch();
   const { myFavorites } = useSelector(state => state);
   const [ isFav, setIsFav ] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id));
      }
      else{
         setIsFav(true);
         dispatch(addFavorite({ name, gender, onClose, species, image, id }));
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   
 return (
      <div className = {style.card}>
          {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
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