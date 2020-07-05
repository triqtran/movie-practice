import Restful from "./Restful";
import API from "../utils/API";

const services = {

  getListTrendings: () => Restful.get(API.GET_LIST_TRENDING),

  getListPopularMovies: page => Restful.get(API.GET_POPULAR_MOVIES, { page }),

  getListTopRatedMovies: page => Restful.get(API.GET_TOP_RATED_MOVIES, { page }),

  getListUpcomingMovies: page => Restful.get(API.GET_UPCOMING_MOVIES, { page }),

  getMovieGenres: () => Restful.get(API.GET_MOVIE_GENRES),

  getTVGenres: () => Restful.get(API.GET_TV_GENRES),

}

export default services;