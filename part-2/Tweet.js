function Tweet(props) {
  return (
    <div>
      <hr></hr>
      <h4>
        {props.name} <small>{props.date}</small>
      </h4>
      <p>{props.message}</p>
    </div>
  );
}
