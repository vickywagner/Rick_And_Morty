import React from "react";
import style from "../styles/nav.module.css"
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
    return(
        <nav className={style.nav}>
            <div className={style.btns}>
             <Link to='/' className={style.about}>LOGOUT</Link>
            <Link to='about' className={style.about}>About</Link>
            <Link to='home' className={style.home}>Home</Link>
            <SearchBar onSearch={onSearch} />
            </div>
        </nav>

    )

}

export default Nav;