import React from "react";
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from "./components/Nav/Nav";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Favorites from "./components/Favorites/Favorites";
import Form from './components/Form/Form';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App () {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "vicw@gmail.com";
  const password = "123asd";

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate('/')
  }, [access])
  //  }, [access, navigate]) por el warning

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
    //fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
         if (data.id) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('No hay personajes con ese ID');
         }
      })
      .catch(err => console.log(err))
  }

const onClose = (id) => {
  setCharacters (
    characters.filter(character => character.id !== id)
  )
}

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === '/' ? <Form login={login}/> : <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='home' element={<Cards onClose = {onClose} characters={characters}/> } />
        <Route path='about' element={<About/> } />
        <Route path='detail/:detailId' element={<Detail/> } />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
    </div>
  )
}

export default App
