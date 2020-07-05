import types from "./types"

export default {

  getPopularMovies: (page = 1, filter = null) => {
    return {
      type: types.GET_POPULAR_MOVIES,
      page, filter,
    }
  },

  getTopRatedMovies: (page = 1, filter = null) => {
    return {
      type: types.GET_TOP_RATED_MOVIES,
      page, filter,
    }
  },

  getUpcomingMovies: (page = 1, filter = null) => {
    return {
      type: types.GET_UPCOMING_MOVIES,
      page, filter,
    }
  },

  getListGenres: () => {
    return {
      type: types.GET_LIST_GENRES,
    }
  },

  getBannerTrending: () => {
    return {
      type: types.GET_BANNER_TRENDING
    }
  }

}