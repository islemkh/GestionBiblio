import React, { useState, useCallback, useEffect } from "react"
import Livre from "../livres/Livre"

 
function ListeLivres({livres}){

  return (
   <center> <div className="adherentsTab-list">
      <h1>Listes des livres</h1>
     <div className="listeStyle"  >
        {livres.map((livre, index)=> (
          <Livre
            key={index}
              id={livre.id}
              titre={livre.titre}
              auteur={livre.auteur}
              edition={livre.edition}  
            />
        ))}
      </div>
    </div>
    </center>
  )

}
export default  ListeLivres