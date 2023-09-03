import axios from "axios";
import {
    GET_COUNTRIES,
    GET_COUNTRY,
    SEARCH_NAME,
    GET_ACTIVITIES,
    RESET } from "./types";

export const getCountries = () => {
  return async function(dispatch) {
    const countriesData = (await axios.get("http://localhost:3001/countries")).data;
    dispatch({
      type: GET_COUNTRIES,
      payload: countriesData,
    });
  }
}

export const getCountry = (id) => {
  return async function(dispatch) {
    const countryData = (await axios.get(`http://localhost:3001/countries/${id}`)).data;
    dispatch({
      type: GET_COUNTRY,
      payload: countryData,
    });
  }
}

export const getSearchName = (name) => {
  return async function(dispatch) {
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
  }
}

export const getActivities = () => {
  return async function(dispatch) {
    const activitiesData = (await axios.get("http://localhost:3001/activities")).data;
    dispatch({
      type: GET_ACTIVITIES,
      payload: activitiesData,
    });
  }
}

export function reset() {
  return {
    type: RESET,
  }
}