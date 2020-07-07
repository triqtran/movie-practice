import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const ScreenBase = ({ children }) => {
  return (
    <div className={'screen-base'}>
      <Header />
      <div className={'content'}>
        <div className={'main'}>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ScreenBase;