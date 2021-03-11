import React from "react";
import MessageItem from "./messageItem";

const MessageList = ({ messages, socket }) => {
  return (
    <div className="message-list-container">
      {messages.map((m, index) => (
        <MessageItem
          key={index}
          userMessage={m.userId && m.userId === socket.id}
          from={m.from}
          text={m.text}
          createdAt={m.createdAt}
          url={m.url}
        />
      ))}
    </div>
  );
};

export default MessageList;
