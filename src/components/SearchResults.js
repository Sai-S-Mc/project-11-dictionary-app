import { useState, useEffect } from "react";
import ResultBlock from "./ResultBlock";

export default function SearchResults({ results }) {
  const [pronunciation, setPronunciation] = useState({
    status: false,
    pronunciationUrl: "",
  });

  useEffect(() => {
    setPronunciation({ status: false, pronunciationUrl: "" });
  }, [results]);

 
    let word = results[0].word;
    let phonetic = results[0].phonetic;

    if (results[0].phonetics) {
      for (let i = 0; i < results[0].phonetics.length; i++) {
        if (
          results[0].phonetics[i].audio !== "" &&
          pronunciation.status === false
        ) {
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
                result={result}
                index ={index}
                key ={index}
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
  } 
