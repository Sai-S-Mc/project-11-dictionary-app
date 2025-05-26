import ResultBlock from "./ResultBlock";

export default function SearchResults({ results }) {
  console.log(results);

  if (results) {
    let word = results[0].word;
    return (
      <div className="SearchResults">
        {results.map((result, index) => {
          if (index >= 0 && index < 4) {
            return <ResultBlock result={result} key={index} word={word} />;
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
