import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Users Slice
import { fetchUsers } from "./usersSlice";

// Components
import UserCard from "./UserCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorDisplay from "../../components/ErrorDisplay";

function UsersDisplay() {
  const users = useSelector((state) => state.users.users);
  const status = useSelector((state) => state.users.status);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="main-container">
      {status === "loading" && <LoadingSpinner />}
      {status === "error" && <ErrorDisplay error={error} />}
      {(status === "idle" || status === "success") && !error && (
        <div className="users-container">
          {users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UsersDisplay;
