// Import Engine
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { newOrder } from "../../actions/order";
import { loadUser } from "../../actions/auth";

// Import Components
import BackButton from "../backButton/BackButton";

// Import Styles
import "./NewOrder.css";

const initialState = {
  fullname: "",
  phoneNumber: "",
  email: "",
};

const NewOrder = ({ auth: { user, loading }, loadUser, newOrder }) => {
  const { id } = useParams();
  console.log(id);

  const [formData, setFormData] = useState({
    nameBuyer: "",
    phoneNumberBuyer: "",
    emailBuyer: "",
    commentBuyer: "",
    buyer: "",
    seller: "",
  });

  useEffect(() => {
    if (!user) loadUser();
    if (!loading && user) {
      const userData = { ...initialState };
      console.log({ ...initialState });
      for (const key in user) {
        if (key in userData) userData[key] = user[key];
      }
      setFormData({
        nameBuyer: userData.fullname,
        phoneNumberBuyer: userData.phoneNumber,
        emailBuyer: userData.email,
        commentBuyer: "",
        buyer: user._id,
        seller: id,
      });
    }
  }, [loading, loadUser, user]);

  const { nameBuyer, phoneNumberBuyer, emailBuyer, commentBuyer } = formData;
  console.log(formData);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    newOrder(formData);
  };

  return (
    <div className="orderBlock">
      <BackButton link="/" />
      <h1 className="orderHeader">Application for a carpet</h1>
      <form className="orderContentDiv" onSubmit={onSubmit}>
        <h2 className="orderContentHeader">A New order</h2>
        <span className="orderFieldHeader">Name</span>
        <input
          className="orderFieldContent"
          name="nameBuyer"
          value={nameBuyer}
          onChange={onChange}
        ></input>
        <span className="orderFieldHeader">Phone number</span>
        <input
          className="orderFieldContent"
          name="phoneNumberBuyer"
          value={phoneNumberBuyer}
          onChange={onChange}
        ></input>
        <span className="orderFieldHeader">Email</span>
        <input
          className="orderFieldContent"
          name="emailBuyer"
          value={emailBuyer}
          onChange={onChange}
        ></input>
        <span className="orderFieldHeader">Your comment</span>
        <textarea
          className="orderFieldContent orderTextArea"
          name="commentBuyer"
          onChange={onChange}
          value={commentBuyer}
        ></textarea>
        <button type="submit" className="orderSendBtn">
          Send the Application
        </button>
      </form>
    </div>
  );
};

NewOrder.propTypes = {
  auth: PropTypes.object.isRequired,
  newOrder: PropTypes.func.isRequired,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser, newOrder })(NewOrder);
