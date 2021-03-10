import React from "react";
import { avatars } from "../assets/data";
// import "../styles/chat.css";

const UserList = () => {
  return (
    <div className="user-list-container">
      {avatars.map((a) => (
        <div key={a.url} className="user-list-item">
          <img src={a.url} className="user-list-avatar" alt="avatar" />
          <span className="text-medium text-dark-green">{a.name}</span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
