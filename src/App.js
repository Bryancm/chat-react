import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MainApp from "./routes";
import "./App.css";

function App() {
  const [room, setRoom] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <MainApp room={room} setRoom={setRoom} />
      </BrowserRouter>
    </div>
  );
}

export default App;
