import React, { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { isArray, map, isEmpty } from 'lodash';
import Banner from '../Banner';
import ProgressBar from "@ramonak/react-progress-bar"
import { SIZE_BANNER } from '../../../utils/Constant';

const DotSlider = ({handle, isSelected, index, label}) => {
  return (
      <span onClick={event => handle(event, index)} className={`banner-dot ${isSelected ? 'active' : ''}`} />
  )
}

const SlideBanners = ({ data }) => {

  const [selected, setSelected] = useState(0);

  if(isEmpty(data) || !isArray(data)) {
    return null;
  }

  const handleClick = (event, index) => {
    setSelected(index);
  }

  return (
    <>
      <Carousel
        renderIndicator={(e, isSelected, index, label) => <DotSlider isSelected={isSelected} index={index} label={label} handle={handleClick} />}
        selectedItem={selected}
        showThumbs={false}
        // infiniteLoop={true}
        // autoPlay={true}
        // interval={3000}
      >
        {map(data, (banner, key) => 
          <Banner data={banner} key={key} />
        )}
      </Carousel>
      <ProgressBar 
        completed={Math.floor((selected + 1) / SIZE_BANNER * 100)} 
        bgcolor={'#FF0079'}
        baseBgColor={'#FFFFFF'}
        height={'3'}
        labelSize={'0'}
      />
    </>
  );
}
export default SlideBanners;