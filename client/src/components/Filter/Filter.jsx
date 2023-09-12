import style from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getCountries, orderName, orderPopulation, filterContinent, filterActivities, reset } from "../../redux/actions";
import { ASCENDING, DESCENDING, HIG, LOW } from "../../redux/types";
import { useEffect } from "react";

const Filter = ({ pagination }) => {
  //Estado de las actividades
  const activities = useSelector(state => state.activities);

  const dispatch = useDispatch();

  useEffect(()=>{        
    dispatch(getCountries())
},[])

  function handleClick(e) {
    e.preventDefault();
    const { name, value } = e.target;
    pagination(1)

    if(name === "orderName") dispatch(orderName(value));
    if(name === "orderPopulation") dispatch(orderPopulation(value));
    if(name === "filterContinent") dispatch(filterContinent(value));
    if(name === "filterActivities") dispatch(filterActivities(value));
  }

  return (
    <div>
      <div>
        <select className={style.select} name="orderName" defaultValue={"DEFAULT"} onChange={handleClick}>
          <option value="DEFAULT" disabled>Sort by name</option>
          <option value={ASCENDING}>ASCENDING</option>
          <option value={DESCENDING}>DESCENDING</option>
        </select>
      </div>
      <div>
        <select className={style.select} name="orderPopulation" defaultValue={"DEFAULT"} onChange={handleClick}>
          <option value="DEFAULT" disabled>Population</option>
          <option value={HIG}>HIG</option>
          <option value={LOW}>LOW</option>
        </select>
      </div>
      <div>
        <select className={style.select} name="filterContinent" defaultValue={"DEFAULT"} onChange={handleClick}>
          <option value="DEFAULT" disabled>Continent</option>
          <option value="Asia">Asia</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europe</option>
        </select>
      </div>
<select className={style.select} name="filterActivities" onChange={handleClick}> 
          <option value=''>All Activities</option> 
          { activities.length > 0 ? activities.map((activity) => ( 
          <option key={activity.id} value={activity.name}> 
          { activity.name} </option> 
            )) : ( 
          <option value='' disabled> 
          No hay actividades disponibles 
          </option> 
          ) 
          }                         
</select>
      <div>
        <button className={style.select} onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  )
}

export default Filter;