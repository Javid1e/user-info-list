import React from "react";

const Profile = (props) => {
  return <img src={props.src} alt="profile" width="100px" key={props.src}></img>;
};
export default Profile;
