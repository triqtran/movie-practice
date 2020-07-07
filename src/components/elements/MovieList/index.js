import React, { useState } from "react";
// import { isEmpty, isArray, map, get } from "lodash";
import {map, get} from "lodash"
import Card from "../Card";
import { useSelector } from "react-redux";
import Images from '../../../config/Images'
import NavContent from "../NavContent";
import Loading from "../Loading";
import {NAVIGATION} from '../../../config/Constants'

const CATEGORY = {
  POPULAR: 'populars',
  TOPRATED: 'toprateds',
  UPCOMING: 'upcomings',
  GENRE: 'genres',
}


const MovieList = (props) => {

  const [viewType, setViewType] = useState('grid');
  const [active, setActive]     = useState(CATEGORY.POPULAR)
  const movies = useSelector(state => get(state, 'movie'));
  const movieType = get(movies, "currentMovieType");
  const list = get(movies,`${movieType}.results`, []);
  // const NAVIGATION = [{nav: 'Populars'}, {nav: 'Top Rateds'}, {nav: 'Upcoming'}]
  const LISTGENRE = [{name: 'Action'},{name: 'Fantasy'},{name: 'Animation'}, {name: 'Comedy'}, {name: 'Music'}, {name: 'Crime'}, {name: 'Terible'}]
  
  const _onCollection = () => {
    setViewType('grid')
  }
  const _onList = () => {
    setViewType('list')
  }
  const _onGenre = () => {
    setActive(CATEGORY.GENRE)
  }
  const _onClickNav = value => setActive(value);
  
  return (
    <div className={`movie-list ${viewType}`}>
      <div className={"navigation-box"}>
        <div className={"navigation-menu"}>
          {map(NAVIGATION, (item, key) =>{
            return <NavContent active={active === item.value} {...item} onClick={_onClickNav} key={key}/>
          })}
          <div className={`nav-item genre ${active}`} onClick={()=>_onGenre()}>
            <p>Genre</p>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
            <div className={"nav-item-dropdown"}>
              {map(LISTGENRE, (item, key)=> {
                return(
                  <div className={'list-genre'} key={key}>{item.name}</div>
                )
              })}
            </div>
          </div>
        </div>
        <div className={"navigation-view"}>
          <img className={"view view-collection"} alt={"img-collection"} src={Images.navigation.viewCollection} onClick={() => _onCollection()}/>
          <img className={"view view-list"} alt={"img-list"} src={Images.navigation.viewList} onClick={() => _onList()}/>
        </div>
      </div>
      <div className={"list-card"}>
        <div className={"list-item"}>
          {map(list, (item, key) =>{
            const cardProps = {
              ...item,
              viewType: viewType
            }
            return(
              <Card {...cardProps} key={key}/>
            )
          })}
        </div>
      </div>
      <div className={'movie-loading'}>
        <Loading />
      </div>
    </div>
  )

}

export default MovieList;