import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch}) => {
    return(
        <nav>
             <Link to='/'>LOGOUT</Link>
            <Link to='about'>About</Link>
            <br/>
            <Link to='home'>Home</Link>
            <SearchBar onSearch={onSearch} />
        </nav>

    )

}

export default Nav;