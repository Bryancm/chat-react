import React, { useEffect } from "react";
import {
  Route,
  Switch,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import Home from "./home";
import Chat from "./chat";

const App = ({ room, setRoom, avatar, setAvatar, name, setName }) => {
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname === "/") {
      !room ? history.push("/chat") : history.push("/chat");
    }
  }, [room, location, history]);

  return (
    <Switch>
      <Route path={`${match.url}home`}>
        <Home
          room={room}
          setRoom={setRoom}
          avatar={avatar}
          setAvatar={setAvatar}
          name={name}
          setName={setName}
        />
      </Route>
      <Route path={`${match.url}chat`}>
        <Chat
          room={room}
          setRoom={setRoom}
          avatar={avatar}
          setAvatar={setAvatar}
          name={name}
          setName={setName}
        />
      </Route>
    </Switch>
  );
};

export default App;
