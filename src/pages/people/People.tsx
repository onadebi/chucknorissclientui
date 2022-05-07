import React, { useEffect, useState } from "react";
import agent from "../../api/agent-swapi";
import ISwapi from "../../interfaces/ISwapi";
import './people.scss';

const People = () => {
  const [people, setPeople] = useState<ISwapi.SwapiContent[]>([]);

  useEffect(() => {
    agent.SwapiCall.list().then((data) => {
      if (data.isSuccess) {
        setPeople(data.data.results);
      }
    });
  },[]);
  return (
    <div className="people">
      <div className="peopleContainer">
          {people && (<div style={{backgroundColor:'lightblue'}}>{people.length + '- Starwars people'}</div>)}
        <ul>{people && people.map((p, i) => <li key={i}>({i+1}). {p.name}</li>)}</ul>
      </div>
    </div>
  );
};

export default People;
