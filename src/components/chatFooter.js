import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import menuIcon from "../assets/menuIcon.png";
import peopleIcon from "../assets/user.svg";
import chatIcon from "../assets/chat.svg";
import logoutIcon from "../assets/logout.svg";

const ChatFooter = ({ setView }) => {
  return (
    <div className="chat-footer-container">
      <div className="mobile-menu">
        <Popup
          trigger={
            <button className="mobile-menu-button shadow-shorter">
              <img src={menuIcon} className="menu-icon" alt="menu-icon" />
            </button>
          }
          position="top left"
        >
          <div className="menu-content">
            <span className="menu-option" onClick={() => setView("members")}>
              <span>Members</span>
              <img className="icon" src={peopleIcon} alt="members" />
            </span>
            <span className="menu-option" onClick={() => setView("chat")}>
              <span>Chat</span>
              <img className="icon" src={chatIcon} alt="chat" />
            </span>
            <span className="menu-option">
              <span>Leave</span>
              <img className="icon" src={logoutIcon} alt="leave" />
            </span>
          </div>
        </Popup>
      </div>
      <div className="chat-footer-input-container shadow-shorter">
        <input type="text" className="chat-input" placeholder="Aa" />
        <button style={{ marginLeft: 10 }} className="button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatFooter;
