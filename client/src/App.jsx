import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";

function App() {
  const [results, setResults] = useState([]);

  return (
    <>
      <SearchBar setResults={setResults}/>
      <SearchResult results={results}/>
    </>
  );
}

export default App;
