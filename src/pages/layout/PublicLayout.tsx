import React from "react";
import "./publicLayout.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Navbar from "../../components/navbar/Navbar";
import Categories from "../categories/Categories";
import NotFound from "../notfound/NotFound";
import People from "../people/People";
import Search from "../search/Search";

const PublicLayout = () => {
  return (
    <Router>
      <div className="publiclayout">
        <div className="layoutContainer">
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="categories" element={<Categories />} />
              <Route path="people" element={<People />} />
              <Route path="search/:query" element={<Search />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default PublicLayout;
