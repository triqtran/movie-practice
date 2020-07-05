import { API_HOST, API_VERSION } from "../utils/Constant";

const API = `${API_HOST}/${API_VERSION}`;

export default {
  
  GET_LIST_TRENDING:    `${API}/trending/all/day`,

  GET_POPULAR_MOVIES:   `${API}/movie/popular`,

  GET_TOP_RATED_MOVIES: `${API}/movie/top_rated`,

  GET_UPCOMING_MOVIES:  `${API}/movie/upcoming`,

  GET_MOVIE_GENRES:     `${API}/genre/movie/list`,

  GET_TV_GENRES:        `${API}/genre/tv/list`,

}