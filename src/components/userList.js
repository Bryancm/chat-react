import React from "react";
import peopleIcon from "../assets/user.svg";
// import "../styles/chat.css";

const UserList = ({ members }) => {
  return (
    <div className="user-list-container">
      {members.map((m, index) => (
        <div key={index} className="user-list-item">
          <img
            src={m.url ? m.url : peopleIcon}
            className="user-list-avatar"
            alt="avatar"
          />
          <span className="text-medium text-dark-green">{m.name}</span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
