import axios from "axios";
import {
    GET_COUNTRIES,
    GET_COUNTRY,
    SEARCH_NAME,
    GET_ACTIVITIES,
    ORDER_NAME,
    ORDER_POPULATION,
    FILTER_CONTINENT,
    FILTER_ACTIVITIES,
    RESET,
    POST_ACTIVITY
    } from "./types";

export const getCountries = () => {
  return async function(dispatch) {
   try {
    const countriesData = (await axios.get("http://localhost:3001/countries")).data;
    dispatch({
      type: GET_COUNTRIES,
      payload: countriesData,
    });
   } catch (error) {
    alert(error.message);
   }
  }
}

export const getCountry = (id) => {
  return async function(dispatch) {
   try {
    const countryData = (await axios.get(`http://localhost:3001/countries/${id}`)).data;
    dispatch({
      type: GET_COUNTRY,
      payload: countryData,
    });
   } catch (error) {
    alert(error.message);
   }
  }
}

export const getSearchName = (name) => {
  return async function(dispatch) {
    try {
      const countrySearchData = (await axios.get(`http://localhost:3001/countries?name=${name}`)).data;
    countrySearchData?.length ? 
    dispatch({
      type: SEARCH_NAME,
      payload: countrySearchData,
    }) :
    dispatch({
      type: SEARCH_NAME,
      payload: [],
    });
    } catch (error) {
      alert(error.message)
    }
  }
}

export const getActivities = ()=>{ 
  return async (dispatch) =>{ 
      try { 
        const {data}= await axios('http://localhost:3001/activities')              
        return dispatch({ 
          type:GET_ACTIVITIES,  
          payload:data            
      }) 
      } 
      catch (error) { 
        alert(error.message);        
      } 
  } 
}
export const postActivity =(activity)=>{ 
  return async (dispatch) =>{ 
      try { 
          const {data} = await axios.post('http://localhost:3001/activities',activity )             
          return dispatch({ 
          type:POST_ACTIVITY,   
          payload:data               
          }) 
      } 
       catch (error) { 
          console.log(error); 
          return dispatch ({ 
              type:POST_ACTIVITY, 
              payload:{error:error.response.data} // el errror q mandamos de la bd y server 
          }) 
      } 
  } 
}

export function orderName(order) {
  return {
    type: ORDER_NAME,
    payload: order,
  }
}

export function orderPopulation(order) {
  return {
    type: ORDER_POPULATION,
    payload: order,
  }
}

export function filterContinent(filter) {
  return {
    type: FILTER_CONTINENT,
    payload: filter,
  }
}

export function filterActivities(filter) {
  return {
    type: FILTER_ACTIVITIES,
    payload: filter,
  }
}

export function reset() {
  return {
    type: RESET,
  }
}