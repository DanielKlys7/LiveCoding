import { useState } from "react";
import { search, SearchResult } from "../mock/search";
import { RecipeTile } from "./RecipeTile";
import { useQuery } from "../hooks/useQuery";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data } = useQuery<SearchResult[]>({
    key: `recipeSearch/${searchQuery}`,
    fetcher: () => search(searchQuery),
  });

  return (
    <main className="flex flex-col items-center mx-auto  max-w-[1200px] my-5">
      <h1 className="mb-2 font-bold text-4xl self-start">Recipe Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border border-gray-300 w-full px-2 py-2 mb-2"
        placeholder="Search for a recipe..."
      />

      <div className="grid grid-cols-3 gap-2 max-w-[1200px]">
        {data?.map((result) => (
          <RecipeTile
            name={result.name}
            imageUrl={result.imgUrl}
            key={result.id}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
