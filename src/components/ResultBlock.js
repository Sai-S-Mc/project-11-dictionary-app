import { useState, useRef, useEffect } from "react";
import DefinitionBlock from "./DefinitionBlock";

export default function ResultBlock({
  result,
  index,
  word,
  phonetic,
  pronunciation,
}) {
  const [audioUrl, setAudioUrl] = useState("");
  const audioRef = useRef(null);

  useEffect(() => {
    setAudioUrl(pronunciation)
  }, [result, pronunciation]);

  function playPronunciation() {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }
  
  let audioButton = (
    <span>
      <button onClick={playPronunciation}>Listen</button>
      <audio ref={audioRef} src={audioUrl}>
        Your browser does not support the audio element.
      </audio>
    </span>
  );

  let heading;
   if(index === 0){
    heading = (
      <div>
        <h3 className="text-capitalize">{word}</h3>
        <p>
          {phonetic} {audioUrl !== "" ? audioButton : null}
        </p>
      </div>
    );
   }


  return (
    <div className="ResultBlock">
      {heading}
      {result.meanings.map((meaning, index) => {
        if (index >= 0 && index < 3) {
          return (
            <div className="meaning" key={index}>
              <h4>{meaning.partOfSpeech}</h4>
              <ul>
                {meaning.definitions.map((definition, index) => {
                  if (index >= 0 && index < 3) {
                    return (
                      <DefinitionBlock definition={definition} key={index} />
                    );
                  } else {
                    return null;
                  }
                })}
              </ul>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
