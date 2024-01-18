const UserList = ({ users }) => {
  return (
    <table className="table my-3 table-dark table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody data-testid="table-body">
        {users.map((user, i) => (
          <tr key={i}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
