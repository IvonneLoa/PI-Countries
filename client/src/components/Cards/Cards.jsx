import style from "./Cards.module.css";
import Card from "../Card/Card.jsx"; 
import Pagination from "../Pagination/Pagination.jsx"; 
import { useSelector } from 'react-redux'; 
  
 export default function Cards({ indexOfFirstCountry, indexOfLastCountry, countriesPerPage, pagination }) { 

  //estado de los países
  const countries = useSelector(state => state.countries); 
  
  const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry); 
  
  const handleRefreshPage = () => { 
    window.location.reload(); 
       }; 
  
  return ( 
    <> 
      <div className={style.div}> 
        {countries?.length === 0 ? 
        <span> 
        <p>Country Not Found</p> 
        <button onClick={handleRefreshPage}>Refresh</button> 
        </span> 
      : 
        currentCountries?.map((country) => { 
  return <Card 
            id={country.id} 
            image={country.image} 
            name={country.name} 
            continent={country.continent} 
            population={country.population}
            key={country.id} 
    /> 
      })} 
      </div> 
        <Pagination 
            countriesPerPage={countriesPerPage} 
            allCountries={countries.length} 
            pagination={pagination} 
             /> 
         </> 
     ) 
 }