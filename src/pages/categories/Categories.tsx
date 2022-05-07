import React, { FormEvent, useEffect, useState } from "react";
import agent from "../../api/agent-swapi";
import "./categories.scss";

const Categories = () => {
  const [categories, setCategories] = useState([""]);
  const [jokeCategory, setJokeCategory] = useState("");
  const [randomJoke, setRandomJoke] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    agent.ChuckCall.list().then((data) => {
      if (data.isSuccess) {
        setCategories(data.data);
      }
    });
  }, []);

  const handleJokeSelection = async (e: FormEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const selectedCategory = e.currentTarget.textContent;
    setJokeCategory(selectedCategory!);
    const result = await agent.ChuckCall.random(selectedCategory!);
    if (result.isSuccess) {
      setRandomJoke(result.data.value);
      setIsLoading(false);
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
                <li key={index} onClick={(e) => handleJokeSelection(e)}>
                  <span>{cat}</span>
                </li>
              ))}
          </ul>
        </div>
        <div className="contentSection">
        {isLoading ? <span>Loading...</span>:(
          (jokeCategory && randomJoke)
        )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
