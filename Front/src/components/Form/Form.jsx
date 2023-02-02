import { useState } from "react";
import validation from "./validation";
import style from "../Form/Form.module.css";
import gif from "../../Image/morty.gif"
import logo from "../../Image/logo.png"
//import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer"

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }
    
    return(
     <div className={style.landing}>
        <img className={style.logorick} src={logo} alt="Rick-and-Morty-logo" />
        <form onSubmit={handleSubmit} className={style.formulario} >
            <label htmlFor="username" style={{ color:'white' }} >Username:</label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
            {errors.username && <p style={{color: 'red'}} >{errors.username}</p>}

            <label htmlFor="password" style={{ color:'white' }}>Password:</label>
            <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
            {errors.password && <p style={{color: 'red'}} >{errors.password}</p>}

            <button>LOGIN</button>
        </form>
        <div >
        <img src={gif} alt="Morty-gif"/>
        </div>
        <Footer />
     </div>
        // <a href='https://github.com/vickywagner/Rick_And_Morty'>
        //   <img className={style.icono} src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="github"/>
        // </a>
        // <a href='https://www.linkedin.com/in/victoria-wagner-trento-153441176/'> 
        //   <img className={style.icono} src="https://cdn-icons-png.flaticon.com/512/3955/3955051.png" alt="linkedin"/>
        // </a>
        //<Link to={"/home"}><button>HOME</button></Link>
    )
}

export default Form;