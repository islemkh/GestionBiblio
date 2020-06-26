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
import PageLivre from '../pageLivre/PageLivre'
import LivreDetails from '../livreDetails/LivreDetails'
import ListeEmprunte from "../listeEmprunte/ListeEmprunte"

function BibliothecaireRoute() {
    let { path } = useRouteMatch()

  return (
    <div className="biblio-route">    
      <BiblioLayout>
        
        <Switch>
         <Route exact path={`${path}/`}>
          < Bibliothécaire/>
          </Route>
          <Route exact path={`${path}/empruntes`}>
            < ListeEmprunte/>
          </Route>
          <Route exact path={`${path}/adherents`}>
            < ListeAdherents/>
          </Route>

          <Route exact path={`${path}/demandes`}>
            < ListeDemande/>
          </Route>

          <Route exact path={`${path}/livre`}>
            <PageLivre/>
          </Route> 

          <Route exact path={`${path}/adherents/:adherentId`}>
            <AdherentDetails />
          </Route>

          <Route exact path={`${path}/livre/:livreId`}>
            <LivreDetails />
          </Route>

        </Switch>
      </BiblioLayout>

      
    </div>
  )
}

export default BibliothecaireRoute
