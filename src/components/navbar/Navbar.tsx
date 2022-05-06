import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>Categories</li>
          <li>Starwars People</li>
          <li>
            <div className="searchbar">
              <input type="text" name="searcch" id="search" placeholder='search item' />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
