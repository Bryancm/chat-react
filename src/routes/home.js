import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "../components/avatar";
import { avatars, popular, popula2 } from "../assets/data";

const Home = ({ room, setRoom, avatar, setAvatar, name, setName, socket }) => {
  const [textError, setTextError] = useState("");
  const history = useHistory();

  const joinChat = () => {
    setTextError("");
    if (!socket.connected) socket.connect();
    socket.emit("join", { room, name, url: avatar }, join);
  };

  const join = (err) => {
    if (err) return setTextError(err);
    localStorage.setItem("user", JSON.stringify({ name, room, avatar }));
    localStorage.setItem("ids", JSON.stringify([socket.id]));
    history.push("/chat");
  };

  return (
    <div className="home-container">
      <h1 className="text-large text-dark-grey">Join a chat</h1>
      <div className="join-container">
        <div className="label-container">
          <span className="text-medium text-dark-green">Name</span>
        </div>
        <input
          value={name}
          className="text-input"
          type="text"
          placeholder="John"
          onChange={(e) => setName(e.target.value)}
        />

        <div className="label-container">
          <span className="text-medium text-dark-green">Avatar</span>
        </div>
        <div className="avatar-container">
          {avatars.map((a) => (
            <Avatar
              key={a.url}
              url={a.url}
              avatar={avatar}
              setAvatar={setAvatar}
            />
          ))}
        </div>
        <div className="label-container">
          <span className="text-medium text-dark-green">Room</span>
        </div>
        <input
          value={room}
          className="text-input"
          type="text"
          placeholder="Developers"
          onChange={(e) => setRoom(e.target.value)}
        />

        <div className="label-container">
          <span className="text-medium text-dark-green">Highlighted rooms</span>
        </div>
        <div className="popular-container">
          {popular.map((p) => (
            <span key={p} className="popular-item" onClick={(e) => setRoom(p)}>
              {p}
            </span>
          ))}
        </div>
        <div className="popular-container">
          {popula2.map((p) => (
            <span key={p} className="popular-item" onClick={(e) => setRoom(p)}>
              {p}
            </span>
          ))}
        </div>
        {textError && <span className="text-small text-red">{textError}</span>}
        <div className="button-container">
          <button className="button" onClick={joinChat}>
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
