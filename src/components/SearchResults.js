import { useState, useEffect } from "react";
import ResultBlock from "./ResultBlock";

export default function SearchResults({ results }) {
  const [pronunciation, setPronunciation] = useState({status:false});
  console.log(results);

  useEffect(()=>{
    setPronunciation({ status: false });
  },[results])

  if (results) {
    let word = results[0].word;
    let phonetic = results[0].phonetic;
    console.log(results[0].phonetics.length);

    if (results[0].phonetics) {
      for (let i = 0; i < results[0].phonetics.length; i++) {
        if (results[0].phonetics[i].audio !== "" && pronunciation.status === false) {
          setPronunciation({
            status: true,
            pronunciationUrl: results[0].phonetics[i].audio,
          });
        }
      }
    } 
    
    return (
      <div className="SearchResults">
        {results.map((result, index) => {
          if (index >= 0 && index < 4) {
            return (
              <ResultBlock
                results={results}
                result={result}
                key={index}
                word={word}
                phonetic={phonetic}
                pronunciation={pronunciation.pronunciationUrl}
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
