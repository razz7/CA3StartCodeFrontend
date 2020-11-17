import React, { useState,useEffect } from "react"
import LoginFacade from "./LoginFacade";
import Header from "./Header";
import Home from "./Home";
import Link from "./Link";
import { Route, Switch } from "react-router-dom";
import User from "./User";
import Admin from './Admin';
import HowTo from './HowTo';

 
function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
 
  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  }
  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
  }
 
  return (
    <div>
      <h2>Login</h2>
      <form onChange={onChange} >
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
  )
 
}
function LoggedIn({logout}) {
  const [dataFromServer, setDataFromServer] = useState("Loading...")
  
  useEffect(() => { LoginFacade.fetchData().then(data=> setDataFromServer(data.msg)); }, [])
 
  return (
    <div>
      <h2>Data Received from server</h2>
      
      <h3>{dataFromServer}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  )
 
}


const Loginpage = () => {
  const init = LoginFacade.loggedIn;
  const [loggedIn, setLoggedIn] = useState(init)

  const logout = () => {
    LoginFacade.logout()
    setLoggedIn(false)
  }
  const login = (user, pass) => {
    LoginFacade.login(user, pass)
      .then(res => setLoggedIn(true));
  }
  return (
    <div>
      <h1>Login test</h1>
      {!loggedIn ? (<LogIn login={login} />) : (<LoggedIn logout={logout} />)}
     
    </div>
  );
};

 
function App() {

 
  return (
    <div className="App"> 
      <Header />
      <Switch>
        <Route exact path="/">
          
          <Loginpage/>
        </Route>
        <Route exact path="/links">
          <Link/>
        </Route>
        <Route exact path="/user">
          <User />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/howto">
          <HowTo />
        </Route>
      </Switch>
    </div>
  )
 
}
export default App;
 
