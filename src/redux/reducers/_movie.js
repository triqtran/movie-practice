import types from "../actions/types";
import { get } from "lodash";

const initialState = {
  populars: [],
  toprateds: [],
  upcomings: [],
  genres: null,
  trendings: [], 
};

export default (state = initialState, action = {}) => {

  switch(action.type) {
    //Get popular movies
    case types.GET_POPULAR_MOVIES_SUCCESS:
      return { ...state, populars: get(action, "data", []) };
    //Get top rated movies
    case types.GET_TOP_RATED_MOVIES_SUCCESS:
      return { ...state, toprateds: get(action, "data", []) };
    //Get top rated movies
    case types.GET_UPCOMING_MOVIES_SUCCESS:
      return { ...state, upcomings: get(action, "data", []) };
    //Get banner trending
    case types.GET_BANNER_TRENDING_SUCCESS:
      return { ...state, trendings: get(action, "data", []) };
    case types.GET_LIST_GENRES_SUCCESS:
      return { 
        ...state, 
        genres: get(action, "data"),
        genreMaps: get(action, "genreMaps"), 
      };
    default:
      return {...state};
  }

};