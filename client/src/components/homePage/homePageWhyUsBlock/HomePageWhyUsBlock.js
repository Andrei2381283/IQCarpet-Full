// Import Engine
import React from "react";

// Import Styles
import "./HomePageWhyUsBlock.css";

function HomePageWhyUsBlock() {
    return (
        <div className="whyUsBlock">
            <span className="whyUsBlockHeader">WHY US?</span>
            <div className="whyusReasons">
                <div className="whyusReasonsBlock">
                    <div className="whyusReason">
                        <span className="whyusReasonValue">2222</span>
                        <span className="whyusReasonText">Sold carpets</span>
                    </div>
                    <div className="whyusReason">
                        <span className="whyusReasonValue">2222</span>
                        <span className="whyusReasonText">Sellers</span>
                    </div>
                </div>
                <div className="whyusReasonsBlock">
                    <div className="whyusReason">
                        <span className="whyusReasonValue">2222</span>
                        <span className="whyusReasonText">Buyers</span>
                    </div>
                    <div className="whyusReason">
                        <span className="whyusReasonValue">2222</span>
                        <span className="whyusReasonText">Dollars</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageWhyUsBlock;
