type UserProps = {
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
  };
};

function User({ user }: UserProps) {
  const { name, username, email } = user;

  return (
    <div className="user-card">
      <p>
        <strong>Name</strong>: {name}
      </p>
      <p>
        <strong>UserName</strong>: {username}
      </p>
      <p>
        <strong>Email</strong>: {email}
      </p>
    </div>
  );
}

export default User;
