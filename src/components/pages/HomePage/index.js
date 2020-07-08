import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import actions from '../../../redux/actions';
import { get, map } from 'lodash';
import ScreenBase from '../../elements/ScreenBase';
import SlideBanners from '../../elements/SlideBanners';
import CardList from '../../elements/CardList';
import { CATEGORIES, CategoryType } from '../../../utils/Constant';
const HomePage = () => {

  const dispatch = useDispatch();

  const movieData = useSelector(state => get(state, "movie"), shallowEqual);

  useEffect(() => {
    dispatch(actions.getPopularMovies());
    dispatch(actions.getBannerTrending());
    dispatch(actions.getListGenres());
  }, []);

  const onCategory = value => {
    switch(value) {
      case CategoryType.POPULAR:
        dispatch(actions.getPopularMovies());
        break;
      case CategoryType.TOPRATED:
        dispatch(actions.getTopRatedMovies());
        break;
      case CategoryType.UPCOMING:
          dispatch(actions.getUpcomingMovies());
          break;
      default:
          break;
    }
  }

  const genreData = get(movieData, "genres"),
  _categories = map(CATEGORIES, item => {
    const _item = item.value === 'genres' ? { ...item, sublist: genreData } : item;
    return _item;
  }),
  genreMapData = get(movieData, "genreMaps", new Map()),
  trendingData = get(movieData, "trendings", []),
  _trending = map(trendingData, item => {
    const genreIds = get(item, "genre_ids", []);
    return { ...item, genreNames: map(genreIds, gid => get(genreMapData.get(gid), "name", "")) }
  }),
  movieType = get(movieData, "currentMovieType"),
  data = get(movieData,`${movieType}.results`, []);

  return (
    <ScreenBase>
      <div className={"home-page"} id={"home-page"}>
        <SlideBanners data={_trending} />
        <div className={"home-content"}>
          <div className={"home-container"}>
            <CardList 
              initialCategory={CategoryType.POPULAR} 
              categories={_categories} 
              data={data} 
              onChooseCategory={onCategory} 
            />
          </div>
        </div>
      </div>
    </ScreenBase>
  );
}

export default HomePage;