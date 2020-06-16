import React from "react"
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom"
import BiblioLayout from "./bibliothecaireLayout/BiblioLayout"
import ListeAdherents from '../listeAdherents/ListeAdherents'
import AdherentDetails from '../adherentDetails/AdherentDetails'
import Bibliothécaire from '../login/Bibliothécaire'
import ListeDemande from "../listeDemandeAdherents/ListeDemande"

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
            < ListeAdherents/>
          </Route>

          <Route exact path={`${path}/demandes`}>
            < ListeDemande/>
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
