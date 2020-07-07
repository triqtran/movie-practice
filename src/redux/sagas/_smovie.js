import { all, call, put, takeLatest } from "redux-saga/effects";
import types from "../actions/types";
import services from "../../services";
import { slice, get, sortBy, concat } from "lodash";
import { SIZE_BANNER } from "../../utils/Constant";

function* getPopularMovies (action) {
  try {
    const { page, filter } = action;
    const data = yield call(services.getListPopularMovies, page);
    if(filter) {
      //filtering data;
    }
    yield put({ type: types.GET_POPULAR_MOVIES_SUCCESS, data });
  } catch(error) {
    yield put({ type: types.GET_POPULAR_MOVIES_FAILED, error });
  }
}

function* getTopRatedMovies (action) {
  try {
    const { page, filter } = action;
    const data = yield call(services.getListTopRatedMovies, page);
    if(filter) {
      //filtering data;
    }
    yield put({ type: types.GET_TOP_RATED_MOVIES_SUCCESS, data });
  } catch(error) {
    yield put({ type: types.GET_TOP_RATED_MOVIES_FAILED, error });
  }
}

function* getUpcomingMovies (action) {
  try {
    const { page, filter } = action;
    const data = yield call(services.getListUpcomingMovies, page);
    if(filter) {
      //filtering data;
    }
    yield put({ type: types.GET_UPCOMING_MOVIES_SUCCESS, data });
  } catch(error) {
    yield put({ type: types.GET_UPCOMING_MOVIES_FAILED, error });
  }
}

function* getTrending () {
  try {
    const data = yield call(services.getListTrendings);
    const list = get(data, "results", []);
    yield put({ type: types.GET_BANNER_TRENDING_SUCCESS, data: slice(list,0, SIZE_BANNER) });
  } catch(error) {
    yield put({ type: types.GET_BANNER_TRENDING_FAILED, error });
  }
}

function* getListGenres () {
  try {
    const [movies, tvs] = yield all([
      call(services.getMovieGenres),
      call(services.getTVGenres),
    ]);
    let result = new Map();
    const genres = concat(movies.genres, tvs.genres);
    genres.forEach(item => result.set(item.id, item));
    let temp = [];
    result.forEach((value, key) => temp.push(value))
    yield put({ 
      type: types.GET_LIST_GENRES_SUCCESS, 
      data: sortBy(temp, [(item) => { return item.id; }]),
      genreMaps: result
    });
  } catch(error) {
    yield put({ type: types.GET_BANNER_TRENDING_FAILED, error });
  }
}

export default function* root () {
  yield all([
    takeLatest(types.GET_POPULAR_MOVIES, getPopularMovies),
    takeLatest(types.GET_TOP_RATED_MOVIES, getTopRatedMovies),
    takeLatest(types.GET_UPCOMING_MOVIES, getUpcomingMovies),
    takeLatest(types.GET_BANNER_TRENDING, getTrending),
    takeLatest(types.GET_LIST_GENRES, getListGenres),
  ])
}