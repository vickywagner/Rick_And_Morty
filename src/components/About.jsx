import React from "react";
import style from '../styles/about.module.css'

const About = () => {
    return (
        <div className={style.container}>
            <h1>About</h1>
            <div>
            <h3 className={style.containerInfo}>Mi nombre es Victoria, estoy realizando la carrera Full Stack Web Development en el Bootcamp de Soy Henry 
                y actualmente estoy cursando el Modulo 2 donde aprendemos Front-End.</h3>
            </div>

        </div>
    )
}

export default About;