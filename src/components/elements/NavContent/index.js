import React, { useState } from 'react'
import {isEqual} from 'lodash'
import { useDispatch } from 'react-redux';
import { NAVIGATION } from '../../../config/Constants';
import actions from '../../../redux/actions'
const NavContent = ({ nav, value, active, onClick }) => {

  const dispatch = useDispatch();
  
  const _onMovie = value => {

    switch(value) {
      case NAVIGATION[0].value: 
        dispatch(actions.getPopularMovies());
        break;
      case NAVIGATION[1].value: 
        dispatch(actions.getTopRatedMovies());
        break;
      case NAVIGATION[2].value: 
        dispatch(actions.getUpcomingMovies());
        break;
      default:
        break;
    }
    onClick && onClick(value);
  }
  return(
    <div className={`nav-item ${active ? "active" : ''}`}  onClick={() =>_onMovie(value)}>
      <p>{nav}</p>
    </div>
  )

}

export default NavContent