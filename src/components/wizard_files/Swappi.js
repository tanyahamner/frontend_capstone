import { useState } from "react";
import { Link } from "react-router-dom";

export default function Swappi() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [endpoint, setEndpoint] = useState("");

  function handleSearch(e) {
    let queryType = endpoint === "people" ? "name" : "search";

    if (endpoint) {
      fetch(
        `https://www.swapi.tech/api/${endpoint}?${queryType}=${search}&page=1&limit=9999`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data.result || data.results);
        })
        .catch((err) => {
          console.error("Get swapi error: ", err);
        });
    }
  }

  function renderResults() {
    return data.map((item) => {
      return (
        <div key={item.uid}>
          {item.properties?.name || item.properties?.title || item.name}
        </div>
      );
    });
  }

  return (
    <div className="swapi-widget">
      <div className="swapi-form">
        <select onChange={(e) => setEndpoint(e.target.value)}>
          <option value={null}>Select a Endpoint</option>
          <option>films</option>
          <option>planets</option>
          <option>people</option>
          <option>species</option>
          <option>starships</option>
          <option>vehicles</option>
        </select>

        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="swapi-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      <div className="endpoint">
        {!endpoint
          ? "Select an endpoint"
          : data?.length < 1
          ? "Nothing to display"
          : renderResults()}
      </div>

      <div className="move-button">
        <Link to="/wizards">
          <button className="back-wizards">Back</button>
        </Link>
      </div>
    </div>
  );
}
