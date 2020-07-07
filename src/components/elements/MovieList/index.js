import React, { useState } from "react";
import { isEmpty, isArray, map, get } from "lodash";
import Card from "../Card";
import { useSelector } from "react-redux";

const CATEGORY = {
  POPULAR: 'populars',
  TOPRATED: 'toprateds',
  UPCOMING: 'upcomings',
}

const MovieList = () => {

  const [viewType, setViewType] = useState('grid');
  const [category, setCategory] = useState('');

  const movies = useSelector(state => get(state, 'movie'));

  if(isEmpty(list) || !isArray(list)) {
    return null;
  }

  const list = get(movies, category, []);

  return (
    <div className={'list-header'}>
      <div className={''}></div>
    </div>
  )

}

export default MovieList;