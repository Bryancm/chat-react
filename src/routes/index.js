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

const App = ({
  socket,
  room,
  setRoom,
  avatar,
  setAvatar,
  name,
  setName,
  messages,
  setMessages,
  members,
  setMembers,
}) => {
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
          socket={socket}
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
      </Route>
      <Route path={`${match.url}chat`}>
        <Chat
          socket={socket}
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
      </Route>
      <Route path={`${match.url}404`}>
        <NotFound />
      </Route>
      <Redirect to="/404" />
    </Switch>
  );
};

export default App;
