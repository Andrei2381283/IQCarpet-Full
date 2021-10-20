// Import Engine
import React from "react";

import LinkImage1 from "../../img1/helpContactsLinkImage1.png";
import LinkImage2 from "../../img1/helpContactsLinkImage2.png";
import LinkImage3 from "../../img1/helpContactsLinkImage3.png";
import LinkImage4 from "../../img1/helpContactsLinkImage4.png";
import LinkImage5 from "../../img1/helpContactsLinkImage5.png";
import LinkImage6 from "../../img1/helpContactsLinkImage6.png";
import AddAttachImage from "../../img1/helpAddAttachImage.png";

import "./Support.css";

const Support = () => {
  return (
    <div className="helpContent">
      <span className="helpHeader">HELP</span>
      <span className="helpSubHeader">
        Still have questions? Do you have any suggestions for the site? Having a
        problem? Fill out the feedback form and we will contact you! Or write to
        us!
      </span>
      <div className="contactLinksDiv">
        <a href="/">
          <img className="contactLink" src={LinkImage1} />
        </a>
        <a href="/">
          <img className="contactLink" src={LinkImage2} />
        </a>
        <a href="/">
          <img className="contactLink" src={LinkImage3} />
        </a>
        <a href="/">
          <img className="contactLink" src={LinkImage4} />
        </a>
        <a href="/">
          <img className="contactLink" src={LinkImage5} />
        </a>
        <a href="/">
          <img className="contactLink" src={LinkImage6} />
        </a>
      </div>
      <div className="helpContactsTextDiv">
        <span className="helpPhone">+7 (996) 053 81 10</span>
        <span className="helpLink">http://www.iselectricscom</span>
      </div>
      <div className="feedBackFormDiv">
        <span className="formHeader">Feedback form</span>
        <span className="feedBackFieldHeader">Name</span>
        <input
          className="feedBackFieldInput"
          defaultValue="Gavrilova Hanna Igorevna"
        ></input>
        <span className="feedBackFieldHeader">Phone number</span>
        <input
          className="feedBackFieldInput"
          defaultValue="+7 (990) 324 11 11"
        ></input>
        <span className="feedBackFieldHeader">Email</span>
        <input
          className="feedBackFieldInput"
          defaultValue="Gavrilova_Hanna_Ig@gmail.com"
        ></input>
        <span className="feedBackFieldHeader">Your comment or message</span>
        <textarea className="formTextarea"></textarea>
        <label className="addAttach">
          <div src={AddAttachImage} />
          <input type="file" />
        </label>
        <div className="sendFormDiv">
          <button>Send the Form</button>
        </div>
      </div>
    </div>
  );
};

export default Support;
