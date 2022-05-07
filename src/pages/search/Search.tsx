import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import agent from "../../api/agent-swapi";
import ISearch from "../../interfaces/ISearch";
import "./search.scss";


const Search = () => {
  const { query } = useParams();
  const [searchItems, setSearchItems] = useState<ISearch.Search>({
    data: [{ content: "", metadata: "" }],
    isSuccess: false,
    message: "",
  });

  useEffect(() => {
    const fecthData = async () => {
      const data = await agent.SearchCall.list(query!);
      if (data.isSuccess) {
        setSearchItems(data);
      }
    };
    fecthData();
  }, [query]);

  return (
    <div className="search">
      <div className="searchContainer">
        <ul>
          {searchItems &&
            searchItems.data.map((data, index) => (
              <li key={index} className="searchList">
                {data.content} -<span className="metadata">Metadata: [{data.metadata}]</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
