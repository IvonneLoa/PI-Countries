import style from "./NavBar.module.css";
import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.div}>
      <SearchBar/>
        <div>
        <Link className={style.act} to="/createActivities">Create Activities</Link> 
        </div>
        <div>
        <Link className={style.act} to="/activities">View Activities</Link>
        </div>
    </div>
  )
}

export default NavBar;