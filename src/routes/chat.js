import React, { useState, useLayoutEffect, useEffect } from "react";
// import "../styles/chat.css";
import UserInfo from "../components/userInfo";
import UserList from "../components/userList";
import ChatFooter from "../components/chatFooter";
import MessageList from "../components/messageList";
import logoutIcon from "../assets/logout.svg";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const Chat = ({ room, setRoom, name, avatar }) => {
  const [width] = useWindowSize();
  const [view, setView] = useState("chat");
  useEffect(() => {
    if (width > 768) {
      setView("chat");
    }
  }, [width]);
  return (
    <div className="container">
      <div className="chat-sidebar">
        <UserInfo name={name} avatar={avatar} />
        <span className="leave-option">
          <span>Leave</span>
          <img className="icon" src={logoutIcon} alt="leave" />
        </span>
        <div className="label-container">
          <span className="text-medium">Members (34)</span>
        </div>

        <div className="user-list-scroll">
          <UserList />
        </div>
      </div>
      {view === "chat" && (
        <div className="chat-container">
          <div className="room-name-container">
            <span className="room-name shadow-shorter text-dark-grey">
              Developers
            </span>
          </div>
          <div className="message-list-scroll">
            <MessageList />
          </div>
          <ChatFooter setView={setView} />
        </div>
      )}
      {view === "members" && (
        <div className="chat-container">
          <UserInfo name={name} avatar={avatar} />
          <div className="label-container">
            <span className="text-medium">Members (34)</span>
          </div>
          <div className="user-list-scroll">
            <UserList />
          </div>
          <ChatFooter setView={setView} />
        </div>
      )}
    </div>
  );
};

export default Chat;
