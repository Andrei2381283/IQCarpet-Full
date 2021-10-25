// Import Engine
import React, { Fragment } from "react";

// Import Styles
import "./OrderCard.css";

const OrderCard = ({
  iAmSeller,
  myName,
  isSent = false,
  img = "",
  nameBuyer,
  sellerName
}) => {
  const ordersInfoForBuyer = (
    <div className={`orderCard ${isSent ? "sentedOrderCard" : ""}`}>
      <img className="orderImage" src="" />
      <span className="orderSellerName">{sellerName}</span>
      <span className="orderStatus">
        {isSent ? "Offer has been sent" : "Closed"}
      </span>
      <button className="orderSendMessageButton">Send Message</button>
      <button className="orderDeleteOrderButton">Delete a order</button>
    </div>
  );

  const ordersInfoForSeller = (
    <div className={`orderCard ${isSent ? "sentedOrderCard" : ""}`}>
      <img className="orderImage" src="" />
      {/* <span className="orderStatus">
        {myName == nameBuyer ? "You Buyer" : null}
      </span> */}
      <span className="orderSellerName">
        {nameBuyer}
        {myName == nameBuyer ? "(You Buyer)" : null}
      </span>
      <span className="orderStatus">
        {isSent ? "Offer has been sent" : "Closed"}
      </span>
      <button className="orderSendMessageButton">Send Message</button>
      <button className="orderDeleteOrderButton">Delete a order</button>
    </div>
  );

  return (
    <Fragment>{iAmSeller ? ordersInfoForSeller : ordersInfoForBuyer}</Fragment>
  );
};

export default OrderCard;
