import React, { useState } from "react";
import "./App.css";
import AddUser from "../src/components/Users/AddUser";
import UserList from "../src/components/Users/UserList";

const App = (props) => {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (name, lastName, age, nationalId, pictureName) => {
    setUsersList((pervUsersList) => {
      return [
        ...pervUsersList,
        {
          userName: name,
          userLastName: lastName,
          userAge: age,
          userNationalId: nationalId,
          userPictureName: pictureName,
          id:Math.random().toString()
        },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </div>
  );
};

export default App;
