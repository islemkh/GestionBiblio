import React from "react"
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom"
import AdherentLayout from "./adherentLayout/AdherentLayout"
import PageLivre from '../../livres/PageLivre'
import LivreDetails from '../../livreDetails/LivreDetails'
import Home from '../../home/Home'

function AdherentRoute() {
    let { path } = useRouteMatch()
  return (
    <div className="biblio-route">    
      <AdherentLayout>
        <Switch>
         <Route exact path={`${path}/`}>
          < Home/>
          </Route>
           <Route exact path={`${path}/livre`}>
            <PageLivre/>
          </Route> 
          <Route exact path={`${path}/livre/:livreId`}>
            <LivreDetails />
          </Route>

        </Switch>
      </AdherentLayout>

      
    </div>
  )
}

export default AdherentRoute
