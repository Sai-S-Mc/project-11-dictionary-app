export default function DefinitionSynonyms({ definition }) {
  if (definition.synonyms.length > 0) {
    return (
      <div className="DefinitionSynonyms">
        {" "}
        Synonyms:
        {definition.synonyms.map((synonym, index) => {
          return <span className="btn">{synonym}</span>;
        })}
      </div>
    );
  }
}
