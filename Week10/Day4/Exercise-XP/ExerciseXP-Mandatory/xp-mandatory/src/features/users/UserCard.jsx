function UserCard({ user }) {
  const { name, username, phone, email } = user;
  return (
    <div className="user-card">
      <p>{name}</p>
      <p>{username}</p>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;
