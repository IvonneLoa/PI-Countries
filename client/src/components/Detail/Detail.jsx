import style from "./Detail.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCountry } from "../../redux/actions";

function Detail() {
    const dispatch = useDispatch();
    const { id:detailId } = useParams();
    const country = useSelector((state) => state.country);

    useEffect(() => {
        dispatch(getCountry(detailId));
    }, [detailId])

    return (
      <div className={style.detail}>
        <Link to="/home">
        <button className={style.button}>Back</button>
        </Link>
        <div className={style.card}>
          <h1>{country.name}</h1>
          <h2>{country.id}</h2>
          <h3>{country.capital}</h3>
          <h3>{country.continent}</h3>
          <h3>{country.subRegion}</h3>
          <h3>{country.population}</h3>
          <h3>{country.area}</h3>
          <img className={style.image} src={country.image} alt={country.name}/>
        </div>
      </div>
    )
}

export default Detail;