import React from "react"
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom"
import AdherentLayout from "./adherentLayout/AdherentLayout"
import ListeLivres from '../../listeLivres/ListeLivres'
import LivreDetails from '../../livreDetails/LivreDetails'
import Home from '../../home/home'

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
            <ListeLivres/>
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
