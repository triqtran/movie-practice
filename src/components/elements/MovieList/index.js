import React, { useState } from "react";
// import { isEmpty, isArray, map, get } from "lodash";
import {map, get} from "lodash"
import Card from "../Card";
import { useSelector } from "react-redux";
import Images from '../../../config/Images'
import NavContent from "../NavContent";

const CATEGORY = {
  POPULAR: 'populars',
  TOPRATED: 'toprateds',
  UPCOMING: 'upcomings',
}


const MovieList = (props) => {

  const [viewType, setViewType] = useState('grid');
  const [category, setCategory] = useState('');

  const movies = useSelector(state => get(state, 'movie'));
  const list = get(movies,'populars.results', []);
  const NAVIGATION = [{nav: 'Populars'}, {nav: 'Top Rateds'}, {nav: 'Upcoming'}]
   
  return (
    <div className={'movie-list'}>
      <div className={"navigation-box"}>
        <div className={"navigation-menu"}>
          {map(NAVIGATION, (item, key) =>{
            return <NavContent {...item} key={key}/>
          })}
          <div className={"nav-item genre"}>
            <p>Genre</p>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </div>
        </div>
        <div className={"navigation-view"}>
          <img className={"view view-collection"} alt={"img-collection"} src={Images.navigation.viewCollection}/>
          <img className={"view view-list"} alt={"img-list"} src={Images.navigation.viewList}/>
        </div>
      </div>
      <div className={"list-card"}>
        <div className={"list-item"}>
          {map(list, (item, key) =>{
            return(
              <Card {...item} key={key}/>
            )
          })}
        </div>
      </div>
    </div>
  )

}

export default MovieList;