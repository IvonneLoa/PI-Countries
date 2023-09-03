import style from "./Home.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card.jsx";

function Home() {
  const data = useSelector(state => state.countries);

  const page = 10;

  const [currentPage, setCurrentPage] = useState({
    initialIndex: 0,
    finalIndex: page
  })

  const currentCards = data.slice(currentPage.initialIndex, currentPage.finalIndex)

  const countries = data.length > 10 ? currentCards : data

  const back = () => {
    setCurrentPage({
      initialIndex: currentPage.initialIndex - 10,
      finalIndex: currentPage.finalIndex - 10
    })
  }

  const next = () => {
    setCurrentPage({
      initialIndex: currentPage.initialIndex + 10,
      finalIndex: currentPage.finalIndex + 10
    })
  }

    return (
        <div className={style.home}>
            <h1>Welcome to the home page</h1>
          <div className={style.div}>
          {countries && countries.map((country) => 
          <Card
          name={country.name}
          continent={country.continent}
          image={country.image}
          id={country.id}
          key={country.id}
          />)}
          </div>
          <div className={style.divbut}>
            <button className={style.but} onClick={back} disabled={currentPage.initialIndex === 0}>Back</button>
            <button className={style.but} onClick={next} disabled={currentPage.finalIndex >= data.length}>Next</button>
          </div>
        </div>
    )
}

export default Home;