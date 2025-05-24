import { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function handleApiResonse(response) {
    console.log(response.data);
  }

  function captureInput(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "tbfob32e017e01391b34fe15b81ad2a6";
    const apiUrl = ` https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
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
    </div>
  );
}
