import { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "../styles/Dictionary.css"

export default function Dictionary() {
  const [word, setWord] = useState("Garden");
  const [results, setResults] = useState(null);

  function handleApiResonse(response) {
    setResults(response.data);
  }

  function captureInput(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }
    const apiUrl = ` https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleApiResonse);
  }
  console.log(results)

  if (results) {
    return (
      <div className="Dictionary">
        <h1 className="text-center mt-3">Dictionary</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus
            placeholder="Type a word"
            defaultValue={word}
            onChange={captureInput}
            className="input-field"
            
          />
          <input type="submit" value="Search" className="search-btn" />
        </form>
        <SearchResults results={results} />
      </div>
    );
  } else {
    handleSubmit();
  }
}
