import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Users Slice
import { fetchUsers } from "./usersSlice";
import UserCard from "./UserCard";

function UsersDisplay() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="users-container">
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UsersDisplay;
