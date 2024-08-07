import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserWithPrepare, fetchUsers } from "./usersSlice";

function Users() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const nameRef = useRef();
  const emailRef = useRef();

  function handleAddUser() {
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    // dispatch(addUser({ name, email }));
    dispatch(addUserWithPrepare(name, email));
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <input type="text" ref={nameRef} />
      <input type="text" ref={emailRef} />
      <button onClick={handleAddUser}>Add User</button>

      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
