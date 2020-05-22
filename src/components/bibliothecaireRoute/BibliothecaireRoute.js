import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom"
import BiblioLayout from "./bibliothecaireLayout/BiblioLayout"
import PageAdherents from '../pageAdherents/PageAdherents'
import AdherentDetails from '../adherentDetails/AdherentDetails'
import Bibliothécaire from '../login/Bibliothécaire'

function BibliothecaireRoute() {
    let { path } = useRouteMatch()
  return (
    <div className="biblio-route">    
      <BiblioLayout>
        <Switch>
         <Route exact path={`${path}/`}>
          < Bibliothécaire/>
          </Route>
          <Route exact path={`${path}/adherents`}>
            < PageAdherents/>
          </Route>

          <Route exact path={`${path}/adherents/:adherentId`}>
            <AdherentDetails />
          </Route>

        </Switch>
      </BiblioLayout>

      
    </div>
  )
}

export default BibliothecaireRoute
