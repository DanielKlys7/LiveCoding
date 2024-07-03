import { SearchResult } from "../mock/search";

const SearchResultItem = ({ result }: { result: SearchResult }) => {
  return (
    <li>
      <img src={result.imgUrl} alt="" />
      {result.name}
    </li>
  );
};

export default SearchResultItem;
