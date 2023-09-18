import style from "./Detail.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getCountry } from "../../redux/actions";
import Activity from "../Activity/Activity.jsx";

function Detail() {
    const dispatch = useDispatch();
    const { id:detailId } = useParams();
    const country = useSelector((state) => state.country);

    const navigate = useNavigate();

    const handlerclick = ()=>{        
      navigate(`/createActivities?id=${detailId}`)         
  }

    useEffect(() => {
        dispatch(getCountry(detailId));
    }, [detailId])

    return (
      <div className={style.detail}>
        <Link to="/home">
        <button className={style.but}>Back</button>
        </Link>
        <div className={style.card}>
          <h1>Country: {country.name}</h1>
          <h2>Id: {country.id}</h2>
          <h3>Capital: {country.capital}</h3>
          <h3>Continent: {country.continent}</h3>
          <h3>Subregion: {country.subRegion}</h3>
          <h3>Population: {country.population}</h3>
          <h3>Area: {country.area}</h3>
          <img className={style.image} src={country.image} alt={country.name}/>
        </div>
        <div> 
<h1 className={style.activity}> Tourist Activities:</h1> 
    <div> 
      { //si existen actividades para ese país 
      country.Activities && 
      country.Activities.length>0 ? (                             
      country.Activities.map((elem)=>
      <Activity 
      key={elem.id} 
      name={elem.name} 
      season={elem.season}                             
      Countries={[]} 
      />)
      ):( // si no existen actividades 
      <> 
      <h2 className={style.not}>Not tourist activities</h2>                             
      </> 
      )}                 
    </div>   
        <button className={style.but} onClick={()=>handlerclick()}>Create Activity</button>
        </div>
      </div>
    )
}

export default Detail;