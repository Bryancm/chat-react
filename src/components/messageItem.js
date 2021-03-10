import React from "react";

const MessageItem = ({ userMessage, url, text }) => {
  return (
    <div
      className={`${
        userMessage ? "message-item-container-user" : "message-item-container"
      }`}
    >
      <div className={`${userMessage ? "message-item-user" : "message-item"} `}>
        <div className="message-item-avatar-container">
          <img
            src={
              url
                ? url
                : "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
            }
            className="user-list-avatar"
            alt="avatar"
          />
          <span className={`text-small text-dark-green`}>Bryan</span>
        </div>
        <div
          className={`${
            userMessage
              ? "message-item-text-container-user"
              : "message-item-text-container"
          }`}
        >
          <span
            className={`${
              userMessage
                ? "text-white message-text-user"
                : "text-dark-green message-text"
            }  shadow-4`}
          >
            {text
              ? text
              : "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure"}
          </span>
          <span className="text-hour"> 10 min ago</span>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
