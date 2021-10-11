// Import Engine
import React from 'react';

import advantages2Image from '../../../img1/advantages2_1.png';
import advantages2Image2 from '../../../img1/advantages2_2.png';
import advantage2Image from '../../../img1/advantages2Image.png';

import './HomePageAdvantages2Block.css';

function HomePageAdvantages2Block() {
  return (
    <div className="advantages2Block">
      <img className="advantages2Image" src={advantages2Image}></img>
      <div className="advantages2Div">
        <span className="advantages2Header">ADVANTAGES</span>
        <div className="advantage2">
          <img className="advantage2Image" src={advantage2Image}></img>
          <span className="advantage2Text">Up to 60% off the market price</span>
        </div>
        <div className="advantage2">
          <img className="advantage2Image" src={advantage2Image}></img>
          <span className="advantage2Text">
            Buy carpets from local producers
          </span>
        </div>
        <div className="advantage2">
          <img className="advantage2Image" src={advantage2Image}></img>
          <span className="advantage2Text">
            Find best carpet according to your template
          </span>
        </div>
      </div>
      <img className="advantages2Image2" src={advantages2Image2}></img>
    </div>
  );
}

export default HomePageAdvantages2Block;
