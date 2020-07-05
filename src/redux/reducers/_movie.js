import types from "../actions/types";
import { get } from "lodash";

const initialState = {
  populars: [],
  toprateds: [],
  upcomings: [],
  genres: [], 
};

export default (state = initialState, action = {}) => {

  switch(action.type) {
    //Get popular movies
    case types.GET_POPULAR_MOVIES:
    case types.GET_POPULAR_MOVIES_FAILED:
      return { ...state };
    case types.GET_POPULAR_MOVIES_SUCCESS:
      return { ...state, populars: get(action, "data", []) };
    //Get top rated movies
    case types.GET_TOP_RATED_MOVIES:
    case types.GET_TOP_RATED_MOVIES_FAILED:
      return { ...state };
    case types.GET_TOP_RATED_MOVIES_SUCCESS:
      return { ...state, toprateds: get(action, "data", []) };
    //Get top rated movies
    case types.GET_UPCOMING_MOVIES:
    case types.GET_UPCOMING_MOVIES_FAILED:
      return { ...state };
    case types.GET_UPCOMING_MOVIES_SUCCESS:
      return { ...state, upcomings: get(action, "data", []) };
    default:
      return {...state};
  }

};