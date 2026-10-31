function App() {
  const userlist = [
    { id: 1, Name: "ibrahim", email: "ibrahim@gmail.com" },
    { id: 2, Name: "omar", email: "omar@gmail.com" },
  ];

  return (
    <>
      <h1>user list</h1>

      <ul>
        {userlist.map((userlist) => (
          <li key={userlist.id}>
            {userlist.Name} - {userlist.email}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
