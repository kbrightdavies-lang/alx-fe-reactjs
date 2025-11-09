import { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
  const user = useContext(UserContext);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
     <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p> 
    </div>
  );
}

export default UserDetails;
