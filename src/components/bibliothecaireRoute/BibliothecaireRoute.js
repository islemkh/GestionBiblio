import React from "react"
import ListeAdherents from '../listeAdherents/ListeAdherents'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useRouteMatch
} from "react-router-dom"
import BiblioLayout from "./bibliothecaireLayout/BiblioLayout"
import PageAdherents from '../pageAdherents/PageAdherents'

function BibliothecaireRoute() {
    let { path } = useRouteMatch()
  return (
    <div className="biblio-route">
       
      <BiblioLayout>
        <Switch>
          <Route exact path={`${path}/`}>
          < PageAdherents/>
          </Route>
          
          <Route exact path={`${path}/listeAdh`}>
            < PageAdherents/>
          </Route>

          {/* <Route exact path={`${path}/adherent/:adherentId`}>
            <AdherentDetails />
          </Route> */}

        </Switch>
      </BiblioLayout>

      
    </div>
  )
}

export default BibliothecaireRoute
