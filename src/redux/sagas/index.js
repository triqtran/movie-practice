import { all, fork } from "redux-saga/effects";
import movie from './_smovie';

export default function* root() {
	yield all([
    fork(movie),
  ]);
};