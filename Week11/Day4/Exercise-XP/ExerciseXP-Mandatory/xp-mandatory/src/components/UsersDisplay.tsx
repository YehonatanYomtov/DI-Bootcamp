import { useEffect, useState } from "react";
import User from "./User";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

function UsersDisplay() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        const modifiedUsers: User[] = data.map((user: User) => {
          return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
          };
        });

        setUsers(modifiedUsers);
      } catch (err) {
        console.error(err);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="users-display-container">
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UsersDisplay;
