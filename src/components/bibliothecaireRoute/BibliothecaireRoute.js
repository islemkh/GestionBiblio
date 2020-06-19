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
import BannirAdherent from "../banni-debanni/BannirAdherent"
import PageLivre from '../livres/PageLivre'
import LivreDetails from '../livreDetails/LivreDetails'

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

          <Route exact path={`${path}/livre`}>
            <PageLivre/>
          </Route> 

          <Route exact path={`${path}/adherents/:adherentId`}>
            <AdherentDetails />
          </Route>

          <Route exact path={`${path}/adherents/bannir/:bannirId`}>
            <BannirAdherent />
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
