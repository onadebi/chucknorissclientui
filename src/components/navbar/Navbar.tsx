import React, { FormEvent, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.currentTarget.value);
  };

  const handleSearch=(e: FormEvent<HTMLButtonElement>)=>{
      e.preventDefault();
      navigate(`/search/${search}`);
  }
  return (
    <div className="navbar">
      <nav>
        <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/categories'}>Categories</NavLink></li>
          <li>
            <div className="searchbar">
              <input
                type="text"
                name="searcch"
                id="search"
                placeholder="search...e.g Skywalker"
                defaultValue={search}
                onChange={handleChange}
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          </li>
          <li><NavLink to={'/people'}>Starwars People</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
