import { NavLink } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="sections">
        <div className="chuck">
          <NavLink to={"/categories"}>
            <span className="initial">CN</span>
            <hr />
            <span className="title">Chuck Norris Jokes</span>
          </NavLink>
        </div>
        <div className="swapi">
          <NavLink to={"/people"}>
            <span className="initial">SW</span>
            <hr />
            <span className="title">Stars of StarWars</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
