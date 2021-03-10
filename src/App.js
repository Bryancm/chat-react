import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MainApp from "./routes";
import "./App.css";

function App() {
  const [name, setName] = useState("Bryan");
  const [room, setRoom] = useState("");
  const [avatar, setAvatar] = useState(
    "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
  );
  return (
    <div>
      <BrowserRouter>
        <MainApp
          room={room}
          setRoom={setRoom}
          avatar={avatar}
          setAvatar={setAvatar}
          name={name}
          setName={setName}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
