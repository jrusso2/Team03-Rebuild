// src/ui-components/ITunesSearch.tsx
import React, { useState } from "react";

const ITunesSearch: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const [results, setResults] = useState<any[]>([]); // Update `any` with specific types if possible

  const handleSearch = async () => {
    if (!term) return;

    try {
      const response = await fetch(`/api/itunes?term=${encodeURIComponent(term)}`);
      const data = await response.json();
      setResults(data.results);
    } catch (error) {
      console.error("Error fetching data from iTunes API:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search for music..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((item) => (
          <li key={item.trackId}>
            {item.trackName} by {item.artistName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ITunesSearch;
