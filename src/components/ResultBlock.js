import { useState, useRef, useEffect } from "react";
import DefinitionBlock from "./DefinitionBlock";
import "../styles/ResultBlock.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

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
    setAudioUrl(pronunciation);
  }, [result, pronunciation]);

  function playPronunciation() {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }

  let audioButton = (
    <>
      <button onClick={playPronunciation}>
        <FontAwesomeIcon icon={faHeadphones} />
      </button>
      <audio ref={audioRef} src={audioUrl}>
        Your browser does not support the audio element.
      </audio>
    </>
  );

  let heading;
  if (index === 0) {
    heading = (
      <div>
        <h3 className="text-capitalize mb-2">
          {word} {audioUrl !== "" ? audioButton : null}
        </h3>
        <p className="phonetic mb-4">{phonetic}</p>{" "}
      </div>
    );
  }

  if (index >= 0 && index < 2) {
    return (
      <div className="ResultBlock">
        {heading}
        {result.meanings.map((meaning, index) => {
          if (index >= 0 && index < 2) {
            return (
              <div className="meaning" key={index}>
                <h5>{meaning.partOfSpeech}</h5>
                <ul>
                  {meaning.definitions.map((definition, index) => {
                    if (index >= 0 && index < 2) {
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
}
