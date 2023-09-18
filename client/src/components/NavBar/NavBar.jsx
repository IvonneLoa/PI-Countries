import style from "./NavBar.module.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.div}>
      <SearchBar/>
        <div className={style.div2}>
        <Link className={style.act} to="/createActivities">Create Activities</Link> 
        </div>
        <div className={style.div2}>
        <Link className={style.act} to="/activities">View Activities</Link>
        </div>
    </div>
  )
}

export default NavBar;