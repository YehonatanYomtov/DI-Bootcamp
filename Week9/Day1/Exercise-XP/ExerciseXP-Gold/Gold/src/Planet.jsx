const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

function Planet() {
  return (
    <div className="container">
      <h2 className="my-4">Planets</h2>
      <ul className="list-group">
        {planets.map((planet, i) => (
          <li key={i} className="list-group-item">
            {planet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Planet;
