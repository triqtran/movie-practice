import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import actions from '../../../redux/actions';
import { get, map } from 'lodash';
import ScreenBase from '../../elements/ScreenBase';
import SlideBanners from '../../elements/SlideBanners';
import MovieList from '../../elements/MovieList'
const HomePage = () => {

  const dispatch = useDispatch();

  const movieData = useSelector(state => get(state, "movie"), shallowEqual);

  useEffect(() => {
    onGetBannerTrending();
    onGetPopularMovies();
    onGetListGenres();
  }, []);

  const onGetPopularMovies = () => dispatch(actions.getPopularMovies());

  const onGetBannerTrending = () => dispatch(actions.getBannerTrending());

  const onGetListGenres = () => dispatch(actions.getListGenres());

  // const genreData = get(movieData, "genres");
  const genreMapData = get(movieData, "genreMaps", new Map())
  const trendingData = get(movieData, "trendings", []),
  _trending = map(trendingData, item => {
    const genreIds = get(item, "genre_ids", []);
    return { ...item, genreNames: map(genreIds, gid => get(genreMapData.get(gid), "name", "")) }
  })
  return (
    <ScreenBase>
      <div className={"home-page"} id={"home-page"}>
        <SlideBanners data={_trending} />
        <div className={"home-content"}>
          <div className={"home-container"}>
            <MovieList />
          </div>
        </div>
      </div>
    </ScreenBase>
  );
}

export default HomePage;