import { useState } from "react";

export default function Dictionary() {
  const [input, setInput] = useState("");

  function captureInput(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`searching for ${input}`);
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
