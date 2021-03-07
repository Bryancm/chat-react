import React from "react";

const avatar = ({ avatar, setAvatar, url }) => {
  return (
    <img
      className={`avatar ${avatar === url ? "border-blue" : ""}`}
      src={url}
      loading="lazy"
      alt="avatar"
      onClick={() => setAvatar(url)}
    />
  );
};

export default avatar;
