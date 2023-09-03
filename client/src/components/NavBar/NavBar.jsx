import style from "./NavBar.module.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className={style.div}>
            <SearchBar/>
            <Link>
            <h1>Form</h1>
            </Link>
        </div>
    )
}

export default NavBar;