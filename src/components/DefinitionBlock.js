import DefinitionSynonyms from "./DefinitionSynonyms";
import "../styles/DefinitionBlock.css"

export default function DefinitionBlock({ definition, index }) {
  let example;
  if (definition.example) {
    example = definition.example.replace(" ", ". ");
  }

  return (
    <li className="DefinitionBlock mt-2 mb-3" key={index}>
      <p className="definition mb-2">{definition.definition}</p>
      <p className="example mb-2">{example}</p>
      <DefinitionSynonyms definition={definition} />
    </li>
  );
}
