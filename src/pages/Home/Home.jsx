import React from "react";
import "./Home.scss";
import { Post, Story } from "../../components";
const Home = () => {
  return (
    <div className="home">
      <Story />
      <Post />
    </div>
  );
};

export default Home;
