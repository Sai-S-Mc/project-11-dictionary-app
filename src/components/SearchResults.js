import ResultBlock from "./ResultBlock";

export default function SearchResults({ results }) {
  console.log(results);

  if (results) {
    let word = results[0].word;
    let phonetic = results[0].phonetic;
    let pronunciation;
    if (results[0].phonetics[0].audio !== "") {
      pronunciation = results[0].phonetics[0].audio;
    } else if (results[0].phonetics[1].audio !== "") {
      pronunciation = results[0].phonetics[1].audio;
    } else if (results[0].phonetics[2].audio !== "") {
      pronunciation = results[0].phonetics[2].audio;
    } else {
      return null;
    }
    return (
      <div className="SearchResults">
        {results.map((result, index) => {
          if (index >= 0 && index < 4) {
            return (
              <ResultBlock
                result={result}
                key={index}
                word={word}
                phonetic={phonetic}
                pronunciation={pronunciation}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
