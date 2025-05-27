import DefinitionSynonyms from "./DefinitionSynonyms";

export default function DefinitionBlock({ definition, index }) {
  let example;
  if (definition.example) {
    example = definition.example.replace(" ", ". ");
  }

  return (
    <li className="DefinitionBlock mt-2 mb-2" key={index}>
      <p>{definition.definition}</p>
      <p>
        <em>{example}</em>
      </p>
      <DefinitionSynonyms definition={definition} />
    </li>
  );
}
