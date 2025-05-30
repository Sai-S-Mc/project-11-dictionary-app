import { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "../styles/Dictionary.css";
import DictionaryGallery from "./DictionaryGallery";

export default function Dictionary() {
  const [word, setWord] = useState("Brown");
  const [results, setResults] = useState(null);
  const [gallery, setGallery] = useState(null);

  function handleDictionaryApiResonse(response) {
    setResults(response.data);
  }

  function handlePhotoApiResponse(response) {
    setGallery(response.data.photos);
  }

  function captureInput(event) {
    setWord(event.target.value);
  }

  function handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }
    const dictionaryApiUrl = ` https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryApiResonse);

    const photoApiKey =
      "097q3IUVfgl2wnJwIonu2YvTi1nTaAoS4tLLRlIs0HjHXYCxv0o5cHHc";
    const headers = { Authorization: ` ${photoApiKey}` };
    const photoApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=8`;
    axios.get(photoApiUrl, { headers: headers }).then(handlePhotoApiResponse);
  }
  console.log(results);

  if (results) {
    return (
      <div className="Dictionary">
        <div className="row section-row">
          <div className="col-xl-6 first-section-wrapper section-wrapper">
            <section className="first-outer">
              <section className="first-middle">
                <section className="first-inner">
                  <h1 className="text-center mt-3">Dictionary</h1>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="search"
                      placeholder="word inspo: code, galaxy..."
                      defaultValue={word}
                      onChange={captureInput}
                      className="input-field"
                    />
                    <input
                      type="submit"
                      value="Search"
                      className="search-btn"
                    />
                  </form>
                  <SearchResults results={results} />
                </section>
              </section>
            </section>
          </div>
          <div className="col-xl-6 second-section-wrapper section-wrapper">
            <section className="second-outer">
              <section className="second-middle">
                <section className="second-inner">
                  <DictionaryGallery gallery={gallery} />
                </section>
              </section>
            </section>
          </div>
        </div>
      </div>
    );
  } else {
    handleSubmit();
  }
}
