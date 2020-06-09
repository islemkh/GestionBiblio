import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom"
import AdherentLayout from "./adherentLayout/AdherentLayout"
import PageLivre from '../../livres/PageLivre'
//import AdherentDetails from '../adherentDetails/AdherentDetails'
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

          {/* <Route exact path={`${path}/adherents/:adherentId`}>
            <AdherentDetails />
          </Route> */}
        </Switch>
      </AdherentLayout>

      
    </div>
  )
}

export default AdherentRoute
