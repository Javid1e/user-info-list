import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import userIcon from "./Files/ProfilePicture/user.svg";
const AddUser = (props) => {
  const [enteredUserName, setEntredUserName] = useState("");
  const [enteredUserLastName, setEntredUserLastName] = useState("");
  const [enteredUserAge, setEntredUserAge] = useState("");
  const [enteredUserNationalId, setEntredUserNationalId] = useState("");
  const [enteredUserGender, setEntredUserGender] = useState("");
  const [isValidUserName, setIsValidUserName] = useState(false);
  const [isValidUserLastName, setIsValidUserLastName] = useState(false);
  const [isValidUserAge, setIsValidUserAge] = useState(false);
  const [isValidUserNationalId, setIsValidUserNationalId] = useState(false);
  const [isValidUserGender, setIsValidUserGender] = useState(false);

  const userNameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidUserName(true);
    }
    setEntredUserName(event.target.value);
  };
  const userLastNameChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidUserLastName(true);
    }
    setEntredUserLastName(event.target.value);
  };
  const userAgeChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidUserAge(true);
    }
    setEntredUserAge(event.target.value);
  };
  const userNationalIdChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValidUserNationalId(true);
    }
    setEntredUserNationalId(event.target.value);
  };
  const userGenderChangeHandler = (event) => {
    setEntredUserGender(event.target.value);
    setIsValidUserGender(true);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserLastName.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      enteredUserNationalId.trim().length === 0 ||
      enteredUserGender.trim().length === 0
    ) {
      return;
    }

    props.onAddUser(
      enteredUserName,
      enteredUserLastName,
      enteredUserAge,
      enteredUserNationalId,
      enteredUserGender
    );
    setEntredUserName("");
    setEntredUserLastName("");
    setEntredUserAge("");
    setEntredUserNationalId("");
    setEntredUserGender("");
  };

  return (
    <Card className={styles["new-user__controls"]}>
      <Card>
        <img src={userIcon} width="300px" alt="Prof"></img>
      </Card>
      <Card>
      <form onSubmit={addUserHandler}>
        <div className={`${styles["new-user__controls"]}`}>
          <div
            className={`${styles["new-user"]} ${
              !isValidUserName && styles.invalid
            }   }`}
          >
            <label htmlFor="userName">User Name : </label>
            <input
              id="userName"
              type="text"
              value={enteredUserName}
              onChange={userNameChangeHandler}
            ></input>
          </div>
          <div
            className={`${styles["new-user"]} ${
              !isValidUserLastName && styles.invalid
            }   }`}
          >
            <label htmlFor="userLastName">User Last Name : </label>
            <input
              id="userLastName"
              type="text"
              value={enteredUserLastName}
              onChange={userLastNameChangeHandler}
            ></input>
          </div>
          <div
            className={`${styles["new-user"]} ${
              !isValidUserAge && styles.invalid
            }   }`}
          >
            <label htmlFor="userAge">User Age : </label>
            <input
              id="userAge"
              type="number"
              value={enteredUserAge}
              onChange={userAgeChangeHandler}
            ></input>
          </div>
          <div
            className={`${styles["new-user"]} ${
              !isValidUserNationalId && styles.invalid
            }   }`}
          >
            <label htmlFor="userNatinalId">User Natinal Id : </label>
            <input
              id="userNatinalId"
              type="number"
              value={enteredUserNationalId}
              onChange={userNationalIdChangeHandler}
            ></input>
          </div>
          <div className={`${styles["new-user__control"]}`}>
            <div className={`${styles["new-user__control"]} ${!isValidUserGender && styles.invalid}`}>
              <label>
                <input
                  type="radio"
                  value="Male"
                  name="userGender"
                  checked={enteredUserGender === "Male"}
                  onChange={userGenderChangeHandler}
                />
                Male
              </label>
            </div>
            <div className={`${styles["new-user__control"]} ${!isValidUserGender && styles.invalid}`}>
              <label>
                <input
                  type="radio"
                  value="Female"
                  name="userGender"
                  checked={enteredUserGender === "Female"}
                  onChange={userGenderChangeHandler}
                />
                Female
              </label>
            </div>
            <div className={`${styles["new-user__control"]} ${!isValidUserGender && styles.invalid}`}>
              <label>
                <input
                  type="radio"
                  value="Trans"
                  name="userGender"
                  checked={enteredUserGender === "Trans"}
                  onChange={userGenderChangeHandler}
                />
                Trans
              </label>
            </div>
          </div>
        </div>
        <Button type="submit">Add User</Button>
      </form>
      </Card>
    </Card>
  );
};
export default AddUser;
