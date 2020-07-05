import { all, call, put, takeLatest } from "redux-saga/effects";
import types from "../actions/types";
import services from "../../services";
import { concat } from "lodash";

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
    yield put({ type: types.GET_TOP_RATED_MOVIES, data });
  } catch(error) {
    yield put({ type: types.GET_TOP_RATED_MOVIES_SUCCESS, error });
  }
}

function* getUpcomingMovies (action) {
  try {
    const { page, filter } = action;
    const data = yield call(services.getListTopRatedMovies, page);
    if(filter) {
      //filtering data;
    }
    yield put({ type: types.GET_UPCOMING_MOVIES_SUCCESS, data });
  } catch(error) {
    yield put({ type: types.GET_UPCOMING_MOVIES_FAILED, error });
  }
}

function* getTrending (action) {
  try {
    const { filter } = action;
    const data = yield call(services.getListTrendings);
    if(filter) {
      //filtering data;
    }
    yield put({ type: types.GET_BANNER_TRENDING_SUCCESS, data });
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
    yield put({ type: types.GET_LIST_GENRES, data: concat(movies, tvs) });
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