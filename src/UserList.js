import React from "react";



const UserList = ({ user }) => {
  return (
    <div className="userList">
     <ul>
       
      {user.map((el) => (
        <div className=" list">
         
         <li className="liste"> {el.name}</li>
        </div>))}
 </ul>
    </div>)
  
}

export default UserList