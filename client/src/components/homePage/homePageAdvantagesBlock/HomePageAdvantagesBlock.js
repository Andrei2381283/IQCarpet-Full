// Import Engine
import React from 'react';

import advantageImage1 from '../../../img1/advantageImage1.png';
import advantageImage2 from '../../../img1/advantageImage2.png';
import advantageImage3 from '../../../img1/advantageImage3.png';

import './HomePageAdvantagesBlock.css';

function HomePageAdvantagesBlock() {
  return (
    <div className="advantagesBlock">
      <p className="advantagesHeader">ADVANTAGES</p>
      <div className="advantagesDiv">
        <div className="advantage">
          <img className="advantageImage" src={advantageImage1}></img>
          <p className="advantageText">New source of direct sales</p>
        </div>
        <div className="advantage">
          <img className="advantageImage" src={advantageImage2}></img>
          <p className="advantageText">Constant feedback from the client</p>
        </div>
        <div className="advantage">
          <img className="advantageImage" src={advantageImage3}></img>
          <p className="advantageText">Free of charge</p>
        </div>
      </div>
    </div>
  );
}

export default HomePageAdvantagesBlock;
