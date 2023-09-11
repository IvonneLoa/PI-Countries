import style from "./Pagination.module.css";

const Paged =({ countriesPerPage, allCountries, pagination }) => { 
  const pageNumbers = []; 

  //Match.ceil devuelve el entero mayo o igual más próximo al número dado
  for (let i = 1; i <= Math.ceil(allCountries/ countriesPerPage); i++) { 
    pageNumbers.push(i); 
  } 

  return ( 
    <div> 
      { 
      pageNumbers && 
      pageNumbers.map(number => ( 
      <button  
          className={style.but} 
          key={number} onClick={() => pagination(number)}>{number}</button> 
              )) 
      } 
    </div> 
  ); 
  }

  export default Paged;