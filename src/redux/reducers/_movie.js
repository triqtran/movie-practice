import types from "../actions/types";
import { get, concat } from "lodash";

const initialState = {
  currentMovieType: "populars",
  populars: null,
  toprateds: null,
  upcomings: null,
  genres: null,
  trendings: [], 
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    //Get popular movies
    case types.GET_POPULAR_MOVIES_SUCCESS:
      const populars = loadingMoreAction(get(action, "data"), get(state, "populars.results", []));
      return { ...state, currentMovieType: "populars", populars };
    //Get top rated movies
    case types.GET_TOP_RATED_MOVIES_SUCCESS:
      const toprateds = loadingMoreAction(get(action, "data"), get(state, "toprateds.results", []));
      return { ...state, currentMovieType: "toprateds", toprateds };
    //Get top rated movies
    case types.GET_UPCOMING_MOVIES_SUCCESS:
      const upcomings = loadingMoreAction(get(action, "data"), get(state, "upcomings.results", []));
      return { ...state, currentMovieType: "toprateds", upcomings };
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

const loadingMoreAction = (newData, currentResult) => {
  const { page = 1, results = []} = newData;
  console.log("Current result:", currentResult);
  console.log("Page:", page);
  const news =  page > 1 ? 
    { 
      ...newData, 
      results: concat(currentResult, results) 
    } 
    : newData;
  console.log("News:\n", news);
  return news;
}