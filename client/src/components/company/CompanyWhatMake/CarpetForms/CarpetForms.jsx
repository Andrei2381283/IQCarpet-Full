import React from "react";

import "./CarpetForms.css";

const CarpetForms = ({forms = []}) => {

    const FormsMap = {
        Rectangle: "carpetRectangleForm",
        Square : "carpetSquareForm",
        Circle: "carpetCircleForm",
        Oval : "carpetOvalForm"
    }

    return (
        <div className="companyMakeCategText companyFormCategory">
            {
                forms.map((value, index) => <div key={index} className={FormsMap[value]}></div>)
            }
        </div>
    )
}

export default CarpetForms;