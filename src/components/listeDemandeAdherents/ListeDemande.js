import React from "react"
import Demande from "../demandeAdherent/Demande"
import './ListeDemande.css'
function ListeDemande()
{
  
  var retrievedData = localStorage.getItem("demandes");
  var tabDemandes = JSON.parse(retrievedData);
  

  console.log(tabDemandes.length)
    return (

        <div className='listeDemande'>
          <h1>Listes des demandes d'adhesion</h1>
          {tabDemandes.length!==0 ?(
          <div className="liste_demande_style">
         
        {tabDemandes.map((demande, index)=> (
          <Demande
            key={index}
            id={demande.id}
              firstName={demande.firstName}
              lastName={demande.lastName}
             myemail={demande.email}
             mdp={demande.password}
             tabDemandes={tabDemandes}
             
            />
        ))}  
      </div>
          ):( <div> Aucune demande d'adhésion</div>
          )}
      </div>
    )
}
export default ListeDemande