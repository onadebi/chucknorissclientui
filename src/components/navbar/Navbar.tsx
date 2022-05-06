import React, { FormEvent, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.currentTarget.value);
  };
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
                placeholder="search item"
                defaultValue={search}
                onChange={handleChange}
              />
              <button>Search</button>
            </div>
          </li>
          <li><NavLink to={'/people'}>Starwars People</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
