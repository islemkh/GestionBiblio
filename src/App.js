import React from "react"
import "./App.css"
import Login from "./components/login/login"
import SignUp from "./components/login/SignUp"
import Accueil from './components/accueil/Accueil'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import BibliothécaireRoute from './components/bibliothecaireRoute/BibliothecaireRoute'
import AdherentRoute from "./components/adherent/adherentRoute/AdherentRoute"
function App() {
 
  
return (
 
  
    <div className="app">
      <Router>
         <Switch>  
        <Route exact path="/">
            <Accueil/>
          </Route> 
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route> 
          
          <Route  path="/biblio">
            <BibliothécaireRoute />
          </Route>    

          <Route  path="/adherent">
            <AdherentRoute />
          </Route> 

          </Switch> 
          </Router>
          
          
      </div>
)
}

export default App