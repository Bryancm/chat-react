import React from "react";
import logoutIcon from "../assets/logout.svg";
const UserInfo = ({ name, avatar }) => {
  return (
    <div className="user-info-container">
      <img className="user-info-avatar" src={avatar} alt="avatar" />
      <span className="text-medium text-dark-green">{name}</span>
      {/* <span className="button-leave">
        Leave
        <img className="icon" src={logoutIcon} alt="leave" />
      </span> */}
    </div>
  );
};

export default UserInfo;
