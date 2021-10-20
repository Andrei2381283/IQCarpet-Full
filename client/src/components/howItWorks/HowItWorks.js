// Import Engine
import React from 'react';

// Import Styles
import howItWorksImage1 from '../../img1/howItWorksImage1.png';
import howItWorksImage2 from '../../img1/howItWorksImage2.png';
import howItWorksImage3 from '../../img1/howItWorksImage3.png';
import howItWorksImage4 from '../../img1/howItWorksImage4.png';
import howItWorksImage5 from '../../img1/howItWorksImage5.png';
import howItWorksImage6 from '../../img1/howItWorksImage6.png';
import './HowItWorks.css';

function HowItWorks() {
  return (
    <div className="howItWorksBlock">
      <div className="howItWorksLeftSideContent">
        <img src={howItWorksImage2} className="howItWorksImage2"></img>
        <img src={howItWorksImage4} className="howItWorksImage4"></img>
        <img src={howItWorksImage6} className="howItWorksImage6"></img>
      </div>
      <div className="howItWorksCentreSideContent">
        <span className="howItWorksHeader">HOW IT WORKS</span>
        <p className="howItWorksSubHeader">
          It is a long established fact that a reader will be of a page when
          established fact looking at its layout.
        </p>
        <div className="howItWorksInfoDiv">
          <div className="howItWorksLineTextLeft">
            <p className="howWorksStep2 howWorksStep howWorksStepLeft">
              Design your carpet layout
            </p>
            <p className="howWorksStep4 howWorksStep howWorksStepLeft">
              Get answers and choose the best carpet
            </p>
            <p className="howWorksStep6 howWorksStep howWorksStepLeft">
              Enjoy your carpet
            </p>
          </div>
          <div className="howItWorksLine"></div>
          <div className="howItWorksLineTextRight">
            <p className="howWorksStep1 howWorksStep howWorksStepRight">
              Registration
            </p>
            <p className="howWorksStep2 howWorksStep howWorksStepMobile">
              Design your carpet layout
            </p>
            <p className="howWorksStep3 howWorksStep howWorksStepRight">
              Send the layout to many sellers
            </p>
            <p className="howWorksStep4 howWorksStep howWorksStepMobile">
              Get answers and choose the best carpet
            </p>
            <p className="howWorksStep5 howWorksStep howWorksStepRight">
              Solve the issue with payment and delivery
            </p>
            <p className="howWorksStep6 howWorksStep howWorksStepMobile">
              Enjoy your carpet
            </p>
          </div>
        </div>
      </div>
      <div className="howItWorksRightSideContent">
        <img src={howItWorksImage1} className="howItWorksImage1"></img>
        <img src={howItWorksImage3} className="howItWorksImage3"></img>
        <img src={howItWorksImage5} className="howItWorksImage5"></img>
      </div>
    </div>
  );
}

export default HowItWorks;
