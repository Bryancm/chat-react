import React, { useState } from "react";
import Avatar from "../components/avatar";
import "../styles/home.css";

const avatars = [
  { url: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" },
  {
    url:
      "https://e7.pngegg.com/pngimages/109/994/png-clipart-teacher-student-college-school-education-avatars-child-face.png",
  },
  {
    url:
      "https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png",
  },
  {
    url:
      "http://cemokalab.com/wp-content/uploads/2015/07/avatar-369-456321.png",
  },
  {
    url:
      "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png",
  },
];

const Home = () => {
  const [avatar, setAvatar] = useState();
  return (
    <div className="home-container">
      <h1 className="text-large text-dark-grey">Join a chat</h1>
      <div className="join-container">
        <input className="text-input" type="text" placeholder="Name" />
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
      </div>
    </div>
  );
};

export default Home;
