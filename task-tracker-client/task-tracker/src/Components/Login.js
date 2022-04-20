import React, { useState, useEffect } from "react";

function Login({
  addNewUser,
  loggedIn,
  setloggedIn,
  currentUser,
  usersArr,
  setUsersArr,
  setCurrentUser,
}) {
  const [userName, setUserName] = useState("");
  const tasks = [];

  function handleDeleteUser(id) {
    fetch(`http://localhost:9292/users/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedUsersArr = usersArr.filter((user) => user.id !== id);
        setUsersArr(updatedUsersArr);
      });
  }

  function createNewUser(e) {
    e.preventDefault();
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        tasks: tasks,
      }),
    })
      .then((r) => r.json())
      .then((newUser) => {
        setCurrentUser(newUser);
        addNewUser(newUser);
      });
    setUserName("");
  }

  // const displayUsers = usersArr.map((users) => (
  //   <option value={users.username} key={users.username}>
  //     {users.username}
  //   </option>
  // ));

  console.log(currentUser);

  function selectUser(e) {
    setCurrentUser(
      usersArr.find((users) => {
        if (e.target.value === users.username) {
          return users;
        }
      })
    );
    setloggedIn(true);
  }

  function toggleLogin() {
    if (loggedIn === false) {
      return (
        <div id="createUserName">
          <div>
            <form onSubmit={createNewUser}>
              <div className="inputName">
                <label htmlFor="name">
                  Username
                  <input
                    type="text"
                    placeholder={"enter name here"}
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  ></input>
                </label>
              </div>
              <input type="submit" value="Create"></input>
            </form>
          </div>
          <div>
            <label>
              Sign In
              <select onChange={(e) => selectUser(e)}>
                <option>Select User</option>
                {usersArr.map((users) => (
                  <option value={users.username} key={users.username}>
                    {users.username}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      );
    } else {
      return (
        <div id="logOut">
          <button
            onClick={() => {
              setUsersArr(usersArr);
              setloggedIn(false);
            }}
          >
            Log out
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleDeleteUser(currentUser.id);
              setloggedIn(false);
            }}
          >
            delete user
          </button>
          <h2>Welcome {currentUser.username}</h2>
        </div>
      );
    }
  }

  return toggleLogin();
}

export default Login;
