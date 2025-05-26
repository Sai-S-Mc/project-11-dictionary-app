import { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  function handleApiResonse(response) {
    setResults(response.data);
  }

  function captureInput(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    console.log("apiCalled")
    event.preventDefault();
    const apiUrl = ` https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleApiResonse);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="search"
          autoFocus
          placeholder="Type a word"
          onChange={captureInput}
        />
        <input type="submit" value="Search" />
      </form>
      <SearchResults results={results} />
    </div>
  );
}
