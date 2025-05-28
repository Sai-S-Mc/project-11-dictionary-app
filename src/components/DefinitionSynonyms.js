import "../styles/DefinitionSynonyms.css"

export default function DefinitionSynonyms({ definition }) {
  if (definition.synonyms.length > 0) {
    return (
      <div className="DefinitionSynonyms">
        {" "}
        Synonyms :
        {definition.synonyms.map((synonym, index) => {
          return <span key={index} className="synonym">{synonym}</span>;
        })}
      </div>
    );
  }
}
