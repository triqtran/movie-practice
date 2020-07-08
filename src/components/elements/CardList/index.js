import React, { useState } from "react";
import {map, size, get} from "lodash"
import Card from "../Card";
import Loading from "../Loading";
import { ViewType } from "../../../utils/Constant";
import { RiMenu2Line, RiFunctionLine } from "react-icons/ri";

const CardList = ({ initialCategory, categories, data, onChooseCategory }) => {

  const [viewType, setViewType] = useState(ViewType.GRID);
  const [active, setActive]     = useState(initialCategory);
    
  const _onSetView = event => {
    console.log("Target:", event.target);
    setViewType(ViewType.GRID);
  }

  const _onClickNav = value => {
    setActive(value);
    onChooseCategory && onChooseCategory(value);
  }

  return (
    <div className={`card-list ${viewType}`}>
      <div className={"navigation-box"}>
        <div className={"navigation-menu"}>
          {map(categories, (item, key) => {
            const hasSubList = size(get(item, "sublist", [])) > 0;
            return (
              <div 
                className={`nav-item ${hasSubList ? 'dropdown' : ''} ${get(item, "value") === active ? 'active' : ''}`} 
                onClick={()=> _onClickNav(get(item, "value"))}
                key={key}
              >
                <p>{get(item, "name", "")}</p>
                {hasSubList && (
                  <>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    <div className={"nav-item-dropdown"}>
                      {map(get(item, "sublist", []), (item, _ki)=>
                        <div className={'list-dropdown'} key={_ki}>{item.name}</div>
                      )}
                    </div>
                  </>
                )}
              </div>
          )})}
        </div>
        <div className={"navigation-view"}>
          <RiFunctionLine className={`text-${viewType === ViewType.GRID ? 'pink' : 'gray'}`} size={20} onClick={_onSetView} />
          <RiMenu2Line className={`text-${viewType === ViewType.LIST ? 'pink' : 'gray'}`} size={20} onClick={_onSetView} />
        </div>
      </div>
      <div className={"list-card"}>
        <div className={"list-item"}>
          {map(data, (item, key) =>
            <Card viewType={viewType} key={key} {...item} />
          )}
        </div>
      </div>
      <div className={'movie-loading'}>
        <Loading />
      </div>
    </div>
  )

}

export default CardList;