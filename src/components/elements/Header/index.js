import React from "react";
import NavBar from "../NavBar";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className={'pheader'}>
      <p className={'brand-name text-white'}>{'THEMOVIEBOX'}</p>
      <NavBar>
        <FiSearch className={'ic-search text-white'} size={20} />
        <button className={'btn btn-o'}>
          <p className={'text-white'}>{'Log in'}</p>
        </button>
        <button className={'btn'}>
          <p className={'text-white'}>{'Sign up'}</p>
        </button>
      </NavBar>
    </header>
  )
}

export default Header;