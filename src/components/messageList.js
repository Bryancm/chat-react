import React from "react";
import MessageItem from "./messageItem";
import moment from "moment";

const MessageList = ({ messages, socket }) => {
  const ids = JSON.parse(localStorage.getItem("ids"));

  return (
    <div className="message-list-container">
      {messages.map((m, index) => (
        <MessageItem
          key={index}
          userMessage={m.userId && ids && ids.includes(m.userId)}
          from={m.from}
          text={m.text}
          createdAt={moment(Number(m.createdAt)).format("h:mm a")}
          url={m.url}
        />
      ))}
    </div>
  );
};

export default MessageList;
