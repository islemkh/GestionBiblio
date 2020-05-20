import React, { useState, useCallback, useEffect } from "react"
import Adherent from "../adherent/Adherent"

 
function ListeAdherents({adherents}){
console.log(adherents,'rrrr')
  return (
    <div className="adherentsTab-list">
     
        {adherents.map((adherentT, index)=> (
          <Adherent
            key={index}
              id={adherentT.id}
              nom={adherentT.nom}
              prenom={adherentT.prenom}
              email={adherentT.email}
              statut={adherentT.statut}
             
            />
        ))}
      
    </div>
  )

}
export default  ListeAdherents