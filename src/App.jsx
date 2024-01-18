import { useState } from "react";
import UserList from "./components/list";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState([
    {
      name: "Derin",
      email: "derin@gmail.com",
      age: 24,
    },
    {
      name: "Umut",
      email: "umut@gmail.com",
      age: 30,
    },
  ]);

  const addUser = (user) => {
    setUsers(users.concat(user));
  };

  return (
    <div className="container">
      <Form addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
