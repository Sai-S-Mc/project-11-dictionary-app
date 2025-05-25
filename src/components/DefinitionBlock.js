export default function DefinitionBlock({ definition, index }) {
  return (
    <li className="DefinitionBlock mt-2 mb-2" key={index}>
      <p>{definition.definition}</p>
      <p>
        <em>{definition.example}</em>
      </p>{" "}
    </li>
  );
}
