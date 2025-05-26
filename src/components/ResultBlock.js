import DefinitionBlock from "./DefinitionBlock";

export default function ResultBlock({ result, index, word }) {
  // let word;
  // let phonetic;
  // if (index === 0) {
  //   word = result.word;
  //   phonetic = result.phonetic;
  // }
  return (
    <div className="ResultBlock" key={index}>
      <h3 className="text-capitalize">{word}</h3>
      {/* <p>{phonetic}</p> */}
      {result.meanings.map((meaning, index) => {
        if (index >= 0 && index < 3) {
          return (
            <div className="meaning" key={index}>
              <h4>{meaning.partOfSpeech}</h4>
              <ul>
                {meaning.definitions.map((definition, index) => {
                  if (index >= 0 && index < 3) {
                    return <DefinitionBlock definition={definition} key={index} />;
                    
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
