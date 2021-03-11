import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import SocketContext from "./util/socketContext";
import { io } from "socket.io-client";
import MainApp from "./routes";
import "./App.css";

const uri = `http://localhost:3001`;
const socket = io(uri, {
  transport: ["websocket"],
});

function App() {
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [avatar, setAvatar] = useState(
    "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
  );

  useEffect(() => {
    socket.on("updateUserList", (newMembers) => {
      setMembers(newMembers);
    });

    socket.on("newMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
  }, []);

  return (
    <div>
      <SocketContext.Provider value={socket}>
        <BrowserRouter>
          <SocketContext.Consumer>
            {(s) => (
              <MainApp
                socket={s}
                room={room}
                setRoom={setRoom}
                avatar={avatar}
                setAvatar={setAvatar}
                name={name}
                setName={setName}
                messages={messages}
                setMessages={setMessages}
                members={members}
                setMembers={setMembers}
              />
            )}
          </SocketContext.Consumer>
        </BrowserRouter>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
