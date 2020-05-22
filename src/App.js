import React, { useState, useCallback, useEffect } from "react"
import "./App.css"
import Login from "./components/login/Login"
import SignUp from "./components/login/SignUp"
import Menu from "./components/Menu/menu"


import { fetchAdherents } from "./services/adherents.service"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import ListeAdherents from "./components/listeAdherents/ListeAdherents"
import BibliothécaireRoute from './components/bibliothecaireRoute/BibliothecaireRoute'
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
          <Route  path="/biblio">
            <BibliothécaireRoute />
          </Route>    
          </Switch> 
          </Router>
          
          
      </div>
)
}

export default App