import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_NAME,
  GET_ACTIVITIES,
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