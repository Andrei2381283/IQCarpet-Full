import React from "react";

import "./OrderCard.css";

const OrderCard = ({ isSent = false, img = "", name = "" }) => {
  return (
    <div className={`orderCard ${isSent ? "sentedOrderCard" : ""}`}>
      <img className="orderImage" src="" />
      <span className="orderSellerName">{name}</span>
      <span className="orderStatus">
        {isSent ? "Offer has been sent" : "Closed"}
      </span>
      <button className="orderSendMessageButton">Send Message</button>
      <button className="orderDeleteOrderButton">Delete a order</button>
    </div>
  );
};

export default OrderCard;
