import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Homepage from "./Homepage";
import Login from "./Login";
import TaskBox from "./TaskBox";

function App() {
  const [usersArr, setUsersArr] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then((users) => {
        setUsersArr(users);
      });
  }, [loggedIn]);

  // useEffect(() => {
  //   localStorage.setItem("username", JSON.stringify(usersArr));
  // });

  function addNewUser(newUser) {
    setCurrentUser(newUser);
    setLoggedIn(true);
  }

  function toggleHomePage() {
    if (loggedIn === true) {
      return (
        <TaskBox currentUser={currentUser} setCurrentUser={setCurrentUser} />
      );
    } else {
      return <Homepage />;
    }
  }

  return (
    <div className="App">
      <Header />
      <Login
        setUsersArr={setUsersArr}
        addNewUser={addNewUser}
        loggedIn={loggedIn}
        setloggedIn={setLoggedIn}
        currentUser={currentUser}
        usersArr={usersArr}
        setCurrentUser={setCurrentUser}
      />
      {toggleHomePage()}
    </div>
  );
}

export default App;
