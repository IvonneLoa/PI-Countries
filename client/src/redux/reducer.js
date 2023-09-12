import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_NAME,
  GET_ACTIVITIES,
  POST_ACTIVITY,
  ORDER_NAME,
  ASCENDING,
  ORDER_POPULATION,
  LOW,
  FILTER_CONTINENT,
  FILTER_ACTIVITIES,
  RESET } from "./types";

const initialState = {
  countries: [],
  countriesOrigin: [],
  country: [],
  activities: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesOrigin: action.payload,
      };

    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };

    case SEARCH_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };
    
    case POST_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      }

    case ORDER_NAME:
      const orderNameCopy = [...state.countriesOrigin];
      orderNameCopy.sort((a, b) => {
        if(a.name < b.name) {
          return action.payload === ASCENDING ? -1 : 1 };
        if(a.name > b.name) {
          return action.payload === ASCENDING ? 1 : -1 };
        return 0;
      });
      return {
        ...state,
        countries: orderNameCopy
      };

     case ORDER_POPULATION:
      const orderPopulationCopy = [...state.countriesOrigin];
      orderPopulationCopy.sort((a, b) => {
        if(a.population < b.population) {
          return action.payload === LOW ? -1 : 1};
        if(a.population > b.population) {
          return action.payload === LOW ? 1 : -1};
        return 0;
      });
      return {
        ...state,
        countries: orderPopulationCopy
      };

      case FILTER_CONTINENT:
        const filterContinent = [...state.countriesOrigin];
        const continentFilter = filterContinent.filter(country => country.continent === action.payload);
        return {
          ...state,
          countries: continentFilter
        };

      case FILTER_ACTIVITIES:          
        if(action.payload==='') { //todos 
        return { 
            ...state, 
        countries:state.countriesOrigin 
       } 
    } 
      const filterForActivities=state.activities.find((activity)=>activity.name===action.payload) // accedo a mi estado activities y filtro por nombre de actividad             
          return{ 
            ...state, 
         countries:filterForActivities.Countries // en .Countries se encuentra la info de los paises q tienen dicha actividad, esto viene de la tabla intermedia 
             }

      case RESET:
        return {
          ...state,
          countries: [...state.countriesOrigin],
      };
    default:
      return {...state};
  }
}

export default reducer;