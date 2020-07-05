import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../redux/actions';
import { get } from 'lodash';

const HomePage = () => {

  const dispatch = useDispatch();

  const movieData = useSelector(state => get(state, "movie"));

  useEffect(() => {
    onGetBannerTrending();
    onGetPopularMovies();
  }, []);

  const onGetPopularMovies = () => dispatch(actions.getPopularMovies());

  const onGetTopRatedMovies = () => dispatch(actions.getTopRatedMovies())

  const onGetUpcomingMovies = () => dispatch(actions.getUpcomingMovies());

  const onGetBannerTrending = () => dispatch(actions.getBannerTrending());

  return (
    <div id={"home-page"}>
      <p>Home Page</p>
      
    </div>
  );
}

export default HomePage;