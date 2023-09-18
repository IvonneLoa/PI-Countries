import style from "./LandingPage.module.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";


function LandingPage() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, [])

  const onClick = () => {
    navigate("/home")
  }

    return (
        <div className={style.content}>
          <div className={style.nav}>
            <h2>App Countries</h2>
            <div className={style.nav2}>
                  <button
                  onClick={onClick}
                  >Home</button>
              <i/>
            </div>
          </div>
          <div className={style.content}>
            <div className={style.left}>
              <h1>Hello, I am <span>Ivonne</span> curious developer from <span>México</span></h1>
            </div>
            <div>
              <img className={style.image} src="../src/image/mundo-banderas.png" alt="image"/>
            </div>
          </div>
        </div>
    )
}

export default LandingPage;