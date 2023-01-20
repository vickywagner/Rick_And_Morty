import React from "react";
import style from '../styles/about.module.css'

const About = () => {
    return (
        <div>
            <h1 className = {style.titulo}>About</h1>
            <h3 className = {style.info}>Mi nombre es Victoria, estoy realizando la carrera Full Stack Web Development en el Bootcamp de Soy Henry 
                y actualmente estoy cursando el Modulo 2 donde aprendemos Front-End.</h3>

        </div>
    )
}

export default About;