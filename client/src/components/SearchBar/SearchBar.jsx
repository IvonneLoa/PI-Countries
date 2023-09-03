import style from "./SearchBar.module.css";
import React ,{ useState } from "react";
import { connect } from "react-redux";
import { getSearchName } from "../../redux/actions";

const SearchBar = (name) => {
  const handleChange = (e) => {
    name.getSearchName(e.target.value)
    if(!e.target.value) name.getSearchName("")
  }

  return (
    <div className={style.div}>
      <input className={style.input} type="text" placeholder='search' onChange={handleChange} />
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getSearchName:(name) => {
      dispatch(getSearchName(name))
    }
  }
}

export default connect(null, mapDispatchToProps)
(SearchBar);