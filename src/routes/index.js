import React, { useEffect } from "react";
import {
  Route,
  Switch,
  Redirect,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import Home from "./home";
import Chat from "./chat";
import NotFound from "./notFound";

const App = ({ room, setRoom, avatar, setAvatar, name, setName }) => {
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname === "/") {
      !room ? history.push("/home") : history.push("/chat");
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
      <Route path={`${match.url}404`}>
        <NotFound />
      </Route>
      <Redirect to="/404" />
    </Switch>
  );
};

export default App;
