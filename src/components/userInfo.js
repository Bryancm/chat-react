import React from "react";

const UserInfo = ({ name, avatar }) => {
  return (
    <div className="user-info-container">
      <img className="user-info-avatar" src={avatar} alt="avatar" />
      <span className="text-medium text-dark-green">{name}</span>
    </div>
  );
};

export default UserInfo;
