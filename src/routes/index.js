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
    const user = JSON.parse(localStorage.getItem("user"));

    if (location.pathname === "/") {
      !user || !user.room ? history.push("/home") : history.push("/chat");
    }
    if (location.pathname === "/chat") {
      if (!user) return history.push("/home");
      socket.emit(
        "join",
        { room: user.room, name: user.name, url: user.avatar },
        (err) => {
          if (err) return console.log(err);
          localStorage.setItem("user", JSON.stringify(user));
          setName(user.name);
          setRoom(user.room);
          setAvatar(user.avatar);
          const ids = JSON.parse(localStorage.getItem("ids"));
          if (ids) {
            const newIds = [...ids, socket.id];
            localStorage.setItem("ids", JSON.stringify(newIds));
          }
          socket.emit("getMessagesList", user.room, (messages) => {
            setMessages(messages);
            console.log("get messages", messages);
          });
        }
      );
    }
  }, [socket, setMessages, setAvatar, setName, setRoom, location, history]);

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
