import axios from "axios";
import { useContext, useEffect, createContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/products");
      console.log("from search context result", response.data.products);
      console.log("search term in context", searchTerm.toLowerCase());

      setSearchResult(
        response.data.products.filter((products) =>
          products.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    })();
  }, [searchTerm]);

  console.log(searchResult);
  return (
    <SearchContext.Provider value={{ searchResult, setSearchTerm, searchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

const useSearch = () => useContext(SearchContext);

export { useSearch };
