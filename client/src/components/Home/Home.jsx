import style from "./Home.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards.jsx";
import Filter from "../Filter/Filter.jsx";

function Home() {

   //Control del paginado 
   const [currentPage, setCurrentPage] = useState(1); 
   const countriesPerPage = 10; 
   const indexOfLastCountry = currentPage * countriesPerPage; 
   const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; 
  
  
   const pagination = (pageNumber) => {  
       setCurrentPage(pageNumber); 
   }

    return (
      <div className={style.home}>
        <Link to="/">
          <button className={style.but}>Back</button>
        </Link>
        <h1>🌎 Welcome to the home page 🌎</h1>
          <div className={style.filter}>
            <Filter pagination={pagination} />
          </div>
      <div className={style.div}>
          <Cards
        indexOfFirstCountry={indexOfFirstCountry}  
        indexOfLastCountry={indexOfLastCountry}  
        pagination={pagination} 
        countriesPerPage={countriesPerPage}
          />
      </div>
     </div>
    )
}

export default Home;