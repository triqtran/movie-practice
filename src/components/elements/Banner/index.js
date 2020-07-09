import React from "react";
import { Image } from "../../../utils/Constant";
import { FiPlus } from "react-icons/fi";
import { map, toLower } from "lodash";

const Banner = ({ data }) => {
  const { backdrop_path, original_title, original_name, genreNames } = data;
  const name = original_title || original_name;

  return (
    <div className={'banner'}>
      <img className={'img'} src={Image(backdrop_path)} alt={name} />
      <div className={'banner-opacity'} />
      <div className={'banner-container'}>
        <div className={'banner-content'}>
          <div className={'banner-content-bottom'}>
            <div className={'content-part flex-2'}>
              <p className={'title text-white'}>{name}</p>
              <nav>
                {map(genreNames, (item, key) => 
                  <a href={`/${toLower(item).trim()}`} className={'nav-item'} key={key}>{item}</a>  
                )}
                {/* <span className={'nav-item dashed'}>{'Duration 1h52m'}</span> */}
              </nav>
              <div className={'banner-feature'}>
                <button className={'btn banner-feature-item btn-watch-hover'}>
                  <p>{'WATCH MOIVE'}</p>
                </button>
                <button className={'btn btn-o btn-border-white banner-feature-item btn-view-hover'}>
                  <p>{'VIEW INFO'}</p>
                </button>
                <button className={'btn btn-o banner-feature-item btn-add'}>
                  <FiPlus className={'text-white icon'} size={20} />
                  <p>{'ADD TO WISHLIS'}</p>
                </button>
              </div>
            </div>
            <div className={'content-part'}>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;