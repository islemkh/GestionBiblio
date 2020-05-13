import React from "react"
import "./App.css"
import Login from "./components/login/Login"
import SignUp from "./components/login/SignUp"

import Bibliothécaire from "./components/login/Bibliothécaire"
import Logout from "./components/login/Logout"
import Menu from "./components/Menu/menu"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Router>
         <Switch>  
        <Route exact path="/">
            <Login/>
          </Route> 
          
          <Route exact path="/login">
            <SignUp/>
          </Route> 

          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route exact path="/Bibliothécaire">
            <Bibliothécaire />
          </Route>
          <Route  path="/logout">
            <Logout />
          </Route> 
          </Switch> 
          </Router>
      </div>
)
}

export default App