import React, { useState } from "react";

function ProfileCard() {
  const [message, setMessage] = useState(
    "Hi, I am Shivani (B.Tech CS Student)",
  );

  const handleClick = () => {
    setMessage("Currently learning React & MERN Stack");
  };
  return (
    <center className="profile-card">
      <p>{message}</p>
      <button onClick={handleClick}>Click Me</button>
    </center>
  );
}

export default ProfileCard;
