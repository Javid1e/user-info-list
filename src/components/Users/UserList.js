import React from "react";
import styles from "./UserList.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Male_1 from "./Files/ProfilePicture/Male_1.svg";
import Female_1 from "./Files/ProfilePicture/Female_1.svg";
const UserList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            <Card>
              <div className={`${styles["user__control"]}`}>
                <div align="left" className={`${styles["user__control"]}`} >
                  <img
                    width="100px"
                    height="100px"
                    src={user.userGender === "Male" ? Male_1 : Female_1}
                    alt="prof"
                  ></img>
                </div>
                <div align="middle">
                  <label htmlFor="userName">
                    {user.userName} {user.userLastName}{" "}
                  </label>
                  <label htmlFor="userAge">{user.userAge}</label>
                  <label htmlFor="userNationalId">{user.userNationalId}</label>
                  <label htmlFor="userGender">{user.userPictureName}</label>
                </div>
                <div align="right">
                  <Button className={styles.button}>Delete</Button>
                </div>
              </div>
            </Card>
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
