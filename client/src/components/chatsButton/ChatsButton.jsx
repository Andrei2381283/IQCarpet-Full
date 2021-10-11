import React from "react";
import { Link } from "react-router-dom";

import "./ChatsButton.css";

const ChatsButton = () => {
  return (
    <Link to="/chats" className="chatsBlock">
      My Chats
      <div className="chatsNotify"></div>
    </Link>
  );
};

export default ChatsButton;
