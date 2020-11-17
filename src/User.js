import React from 'react';
import ApiFacade from "./ApiFacade";
import {useEffect, useState} from "react"


function User() {
    const [userData, setUserData] = useState("Loading...")
  
    useEffect(() => {
      ApiFacade().getUser().then(data => setUserData(data.msg));
    }, []);
  
    return (
      <div>
        <h1>Hello from user!</h1>
        <p>{userData}</p>
      </div>
    );
  };

  export default User;