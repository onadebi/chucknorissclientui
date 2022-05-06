import React from "react";
import "./publicLayout.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Navbar from "../../components/navbar/Navbar";

const PublicLayout = () => {
  return (
    <Router>
      <div className="publiclayout">
        <div className="layoutContainer">
          <Navbar />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default PublicLayout;
