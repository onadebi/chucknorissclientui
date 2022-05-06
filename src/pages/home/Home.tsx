import React from "react";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="sections">
        <div className="chuck">
          <span className="initial">CN</span>
          <hr/>
          <span className="title">Chuck Norris Jokes</span>
        </div>
        <div className="swapi">
          <span className="initial">SW</span>
          <hr/>
          <span className="title">Stars of StarWars</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
