import React from "react";
import NavBar from "../NavBar";
import { FaPinterest, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={'pfooter'}>
      <div className={'pfooter-top'}>
        <p className={'text'}>{'THEMOVIEBOX'}</p>
        <NavBar>
          <a href={'/about'} className={'text-gray-lighter'}>{'About'}</a>
          <a href={'/movie'} className={'text-gray-lighter'}>{'Movie'}</a>
          <a href={'/rating'} className={'text-gray-lighter'}>{'Rating'}</a>
          <a href={'/contact'} className={'text-gray-lighter'}>{'Contact'}</a>
        </NavBar>
      </div>
      <div className={'pfooter-down'}>
        <p className={'text-gray-lighter'}>{'Desgined by Bruce Tran - 2020'}</p>
        <NavBar>
          <FaFacebookF href={'/facebook'} size={16} className={'ic-socical'} />
          <FaPinterest href={'/pinterest'} size={16} className={'ic-socical'} />
          <FaTwitter href={'/twitter'} size={16} className={'ic-socical'} />
          <FaLinkedinIn href={'/linkedin'} size={16} className={'ic-socical'} />
        </NavBar>
      </div>
    </footer>
  )
}

export default Footer;