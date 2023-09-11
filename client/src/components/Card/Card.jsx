import style from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ id, name, image, continent, population }) {
    return (
        <div className={style.card} key={id}>
            <Link to={`/detail/${id}`}>
              <h1 className={style.h1}>{name}</h1>
              <h3 className={style.h3}>{continent}</h3>
              <h3 className={style.h3}>{population}</h3>
              <img className={style.image} src={image} alt="" />
            </Link>
        </div>
    )
}

export default Card;