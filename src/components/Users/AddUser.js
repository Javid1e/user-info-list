import React, { useState } from "react";
import styles from "./AddUser.module.css";
const AddUser = (props) => {
    const addUserHandler=(event)=>{
        event.preventDefault();
    };

    return(
        <form onSubmit={addUserHandler}>
            <label htmlFor="userName">User Name : </label>
            <input id="userName" type="text"></input>
            <label htmlFor="userLastName">User Last Name : </label>
            <input id="userLastName" type="text"></input>
            <label htmlFor="userAge">User Age : </label>
            <input id="userAge" type="number"></input>
            <label htmlFor="userNatinalId">User Natinal Id : </label>
            <input id="userNatinalId" type="number" ></input>
            <label htmlFor="userPicture">User Picture : </label>
            <input></input>
            <button type="submit">Add User</button>
        </form>

    );
};
export default AddUser;
