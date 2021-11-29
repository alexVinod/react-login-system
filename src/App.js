import logo from './logo.svg';
import './App.css';
import Login from './Login';
import React, { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode';

function App() {

  const [state, setState] = useState();

  const adminUser = {
    username: "vpasupuleti",
    password: "12345"
  }

  const [user, setUser] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  // useEffect((e) => {
  //   const jwt = localStorage.getItem("token");
  //   const user = jwtDecode(jwt);
  //   // this.setState({ user });
  // })

  const login = (details) => {
    console.log(details);

    if (details.username == adminUser.username && details.password == adminUser.password) {
      console.log("LoggedIn");
      setUser({ username: details.username });
      localStorage.setItem("token", JSON.stringify(details));

      // window.location = "/";
    } else {
      console.log("Details do not Match..!");
      setError("Details do not Match..!");
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({ username: "" });
    localStorage.removeItem("token");
  }

  return (
    <div className="container">
      {(user.username != "") ? (
        <div>
          <h3>Welcome To {user.username} </h3>
          <button onClick={Logout} className="btn btn-info btn-sm">Logout</button>
        </div>
      ) : (<Login login={login} error={error} />)}

    </div>
  );
}

export default App;
