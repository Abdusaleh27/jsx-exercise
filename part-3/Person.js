function Person({ name, age, hobbies }) {
  return (
    <div>
      <p>
        Learn some information about{" "}
        {name.length > 6 ? name.substring(0, 5) : name}:
      </p>
      <p>Age: {age}</p>
      <p>Hobbies: </p>
      <ul>
        {hobbies.map((hobby) => (
          <li>{hobby}</li>
        ))}
      </ul>
      {age >= 18 ? <h3>Please go Vote</h3> : <h3>You must be 18 to vote</h3>}
    </div>
  );
}
