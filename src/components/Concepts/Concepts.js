function Concepts(props) {
  return (
    <li className="concept">
      <img src={props.Concepts.image} alt={props.Concepts.title} />
      <h2>{props.Concepts.title}</h2>
      <p>{props.Concepts.description}</p>
    </li>
  );
}

export default Concepts;
