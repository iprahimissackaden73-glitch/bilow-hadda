


import { useState } from "react";

const UserLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
    // setUsername('')
    // setPassword('')
  };
  

  if (isLoggedIn) {
    return (
      <>
        <h1>Welcome, {username || "text"}!</h1>
        <p>You are successfully logged in.</p>
        <button onClick={handleToggle}>Log Out</button>
      </>
    );
  }

  return (
    <>
      <h1>Login</h1>
      <label htmlFor="Username">Username</label>
      <input 
        id="Username"
        type="text" 
        placeholder="userName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /> 
      <br />
      
      <label htmlFor="password">Password</label>
      <input 
        id="password"
        type="password" 
        placeholder="enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      /> 
      <br />
      
      <button onClick={handleToggle}>Login</button>
    </>
  );
};

export default UserLogin;