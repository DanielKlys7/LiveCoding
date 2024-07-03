import { useEffect, useState } from "react";
import { search, SearchResult } from "../mock/search";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      const results = await search(searchQuery);
      setSearchResults(results as SearchResult[]);
    };

    fetchResults();
  });

  return (
    <main>
      <h1>Recipe Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </main>
  );
};

export default App;
