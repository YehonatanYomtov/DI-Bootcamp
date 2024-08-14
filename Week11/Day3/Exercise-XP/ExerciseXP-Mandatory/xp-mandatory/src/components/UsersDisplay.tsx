import { useEffect, useState } from "react";
import User from "./User";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

function UsersDisplay() {
  const [users, setUsers] = useState<User[]>([]);
  const [status, setStatus] = useState<string>("idle");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    async function fetchUsers() {
      setStatus("loading");
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: User[] = await res.json();

        if (!res.ok) throw new Error("Problem with fetching users.");

        setStatus("success");
        setUsers(data);
      } catch (err) {
        const error = err as Error;
        console.error(error.message);
        setError(error.message);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="users-display-container">
      {error && <h3>{error}</h3>}

      {status === "loading" && <h3>...Loading</h3>}

      {status === "idle" ||
        (status === "success" &&
          users.map((user) => <User user={user} key={user.id} />))}
    </div>
  );
}

export default UsersDisplay;
