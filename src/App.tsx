import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./stores";
import { fetchUserListThunk } from "./stores/user/thunks";

function App() {
  const { userList } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserListThunk(2));
  }, [dispatch]);

  return (
    <div className="App">
      {userList.data &&
        userList.data.map((user) => (
          <div key={user.id}>
            <h1>{user.id}</h1>
            <span>
              {user.first_name} {user.last_name}
            </span>
          </div>
        ))}
    </div>
  );
}

export default App;
