import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import UserInfo from "../components/userInfo";
import MembersList from "../components/userList";
import ChatFooter from "../components/chatFooter";
import MessageList from "../components/messageList";
import logoutIcon from "../assets/logout.svg";
import useWindowSize from "../util/windowSize";

const Chat = ({
  socket,
  room,
  setRoom,
  name,
  setName,
  setAvatar,
  avatar,
  messages,
  setMessages,
  members,
  setMembers,
}) => {
  const [width] = useWindowSize();
  const [view, setView] = useState("chat");
  const history = useHistory();

  const gotoBottom = (id) => {
    var element = document.getElementById(id);
    if (element)
      element.scrollTop = element.scrollHeight - element.clientHeight;
  };

  useEffect(() => {
    if (width > 768) {
      setView("chat");
    }
  }, [width]);

  useEffect(() => {
    gotoBottom("messageList");
  }, [messages]);

  useEffect(() => {
    gotoBottom("messageList");
  }, []);

  const leave = () => {
    setRoom("");
    setName("");
    setAvatar(
      "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
    );
    setMessages([]);
    setMembers([]);
    history.push("/");
    socket.disconnect();
    localStorage.setItem("user", null);
    localStorage.setItem("ids", null);
  };

  return (
    <div className="container">
      <div className="chat-sidebar">
        <UserInfo name={name} avatar={avatar} />
        <span className="leave-option" onClick={leave}>
          <span>Leave</span>
          <img className="icon" src={logoutIcon} alt="leave" />
        </span>
        <div className="label-container">
          <span className="text-medium">Members ({members.length})</span>
        </div>

        <div className="user-list-scroll">
          <MembersList members={members} />
        </div>
      </div>
      {view === "chat" && (
        <div className="chat-container">
          <div className="room-name-container">
            <span className="room-name shadow-shorter text-dark-grey">
              {room}
            </span>
          </div>
          <div id="messageList" className="message-list-scroll">
            <MessageList messages={messages} socket={socket} />
          </div>
          <ChatFooter setView={setView} socket={socket} leave={leave} />
        </div>
      )}
      {view === "members" && (
        <div className="chat-container">
          <UserInfo name={name} avatar={avatar} />
          <div className="label-container">
            <span className="text-medium">Members ({members.length})</span>
          </div>
          <div className="user-list-scroll">
            <MembersList members={members} />
          </div>
          <ChatFooter setView={setView} socket={socket} leave={leave} />
        </div>
      )}
    </div>
  );
};

export default Chat;
