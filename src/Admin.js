import React from 'react';
import {useEffect, useState} from "react"
import ApiFacade from "./ApiFacade";


function Admin() {
     const [adminData, setAdminData] = useState("Loading...")
  
    useEffect(() => {
      ApiFacade().getAdmin().then(data => setAdminData(data.msg));
    }, []);
  
    return (
      <div>
        <h1>Hello from admin!</h1>
        <p>{adminData}</p>
      </div>
    );
  };

export default Admin