import React from "react";
import "./Home.scss";
import { Posts, Story } from "../../components";
const Home = () => {
  return (
    <div className="home">
      <Story />
      <Posts />
    </div>
  );
};

export default Home;
