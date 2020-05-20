import React, { useState, useCallback, useEffect } from "react"
import Adherent from "../adherent/Adherent"
import './ListeAdherents.css'
 
function ListeAdherents({adherents}){

  return (
    <div className="adherentsTab-list">
      <h1>Listes des adherents</h1>
     <div className="listeStyle"  >
        {adherents.map((adherentT, index)=> (
          <Adherent
            key={index}
              id={adherentT.id}
              nom={adherentT.nom}
              prenom={adherentT.prenom}
             
            />
        ))}
      </div>
    </div>
  )

}
export default  ListeAdherents