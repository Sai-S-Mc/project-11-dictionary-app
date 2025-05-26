import ResultBlock from "./ResultBlock";

export default function SearchResults({ results }) {
  console.log(results);

  if (results) {
    return (
      <div className="SearchResults">
        {results.map((result, index) => {
          console.log(result);
          if (index >= 0 && index < 4) {
            return <ResultBlock result={result} key={index} />;
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
