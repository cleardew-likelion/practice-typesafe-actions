import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./stores";
import { fetchUserListThunk } from "./stores/user/thunks";
import { IUserList } from "./stores/user/types";

function App() {
  const { userList } = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserListThunk());
  }, [dispatch]);

  console.log("userList: ", userList);

  return <div className="App"></div>;
}

export default App;
