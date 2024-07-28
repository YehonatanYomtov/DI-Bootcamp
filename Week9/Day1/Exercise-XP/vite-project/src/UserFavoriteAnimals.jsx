function UserFavoriteAnimals({ favAnimals }) {
  return (
    <ul>
      {favAnimals.map((animal, i) => (
        <li key={i}>{animal}</li>
      ))}
    </ul>
  );
}

export default UserFavoriteAnimals;
