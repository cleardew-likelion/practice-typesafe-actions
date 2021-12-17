import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./stores";
import { createUserThunk, fetchUserListThunk } from "./stores/user/thunks";
import { Container, Card, Text, Image, Pagination } from "@mantine/core";

function App() {
  const { userList } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [activePage, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUserListThunk(activePage));
  }, [dispatch, activePage]);

  const onClick = () => {
    const data = {
      name: "John",
      email: "test@test.com",
    };
    dispatch(createUserThunk(data));
  };

  return (
    <div className="App">
      <Container style={{ display: "flex", flexWrap: "wrap" }}>
        {userList.data &&
          userList.data.map((user) => (
            <div style={{ width: 300, margin: "auto" }}>
              <Card shadow="sm" padding="xl">
                <Card.Section>
                  <Image src={user.avatar} alt={user.first_name} height={160} />
                </Card.Section>

                <Text weight={500} size="lg">
                  {user.id}. {user.first_name} {user.last_name}
                </Text>

                <Text size="sm">{user.email}</Text>
              </Card>
            </div>
          ))}
        <Pagination
          total={userList.per_page}
          page={activePage}
          onChange={setPage}
        />
      </Container>
      <button onClick={onClick}>Create User</button>
    </div>
  );
}

export default App;
