import React, { FormEvent, useEffect, useState } from "react";
import agent from "../../api/agent-swapi";
import "./categories.scss";

const Categories = () => {
  const [categories, setCategories] = useState([""]);
  const [jokeCategory, setJokeCategory] = useState("");
  const [randomJoke, setRandomJoke] = useState("");

  useEffect(() => {
    agent.ChuckCall.list().then((data) => {
      if (data.isSuccess) {
        setCategories(data.data);
      }
    });
  }, []);

  const handleJokeSelection = async (e: FormEvent<HTMLSpanElement>) => {
    e.preventDefault();
    const selectedCategory = e.currentTarget.textContent;
    setJokeCategory(selectedCategory!);
    const result = await agent.ChuckCall.random(jokeCategory);
    if (result.isSuccess) {
      setRandomJoke(result.data.value);
    } else {
      setRandomJoke("Oops! No joke for the selected category.");
    }
  };


  return (
    <div className="categories">
      <div className="catgoriesContainer">
        <div className="catSection">
          <ul>
            {categories &&
              categories.map((cat, index) => (
                <li key={index}>
                  <span onClick={(e) => handleJokeSelection(e)}>{cat}</span>
                </li>
              ))}
          </ul>
        </div>
        <div className="contentSection">{jokeCategory && randomJoke}</div>
      </div>
    </div>
  );
};

export default Categories;
