import style from "./Home.module.css";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getCountries, getActivities } from "../../redux/actions";
import Cards from "../Cards/Cards.jsx";
import Filter from "../Filter/Filter.jsx";

function Home() {

  // const dispatch = useDispatch(); 
  
  //  useEffect(() => { 
  //    dispatch(getCountries());
  //    dispatch(getActivities());
  //  }, [dispatch]) 

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