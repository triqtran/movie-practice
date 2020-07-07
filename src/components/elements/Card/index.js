import React from "react";
import PropTypes from "prop-types";
import {get} from 'lodash'
import { Image } from "../../../utils/Constant"
import common from '../../../common/utils'

const Card = props => {
  const postPath = get(props,'poster_path', ''),
  date = get(props,'release_date', ''),
  vote = get(props,'vote_average', 0),
  title = get(props, 'original_title', '')
  // overview = get(props, 'overview', '')
  
  return (
    <div className={'card'}>
      <div className={'card-item'}>
        <img className={'card-poster'} src={Image(postPath)} alt={'imagePoster'} />
        <div className={'date'}>{common.sliceString(date)}</div>
        <div className={'card-content'}>
          <div className={'card-description'}>
            <div className={'title'}>{title}</div>
            <div className={'overview'}>Action, music</div>
          </div>
          <div className={'card-vote'}>{vote}</div>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  date:       PropTypes.string,
  vote:       PropTypes.number,
  title:      PropTypes.string,
  overview:   PropTypes.string
};

Card.defaultProps = {
  date:       "",
  vote:       0,
  title:      "",
  overview:   ""
};

export default Card;