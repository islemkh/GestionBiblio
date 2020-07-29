import React from "react"
import Adherent from "../adherent/Adherent"
import './ListeAdherents.css'
 
function ListeAdherents(){
  var tabAdherents = localStorage.getItem("adherentsTab");
  var listaAdherents = JSON.parse(tabAdherents);
  return (
    <div className="adherentsTab-list">
      <h1>Listes des adherents</h1>
     <div className="listeStyle"  >
        {listaAdherents.map((adherentT, index)=> (
          <Adherent
            key={index}
              id={adherentT.id}
              nom={adherentT.nom}
              prenom={adherentT.prenom}
             statut={adherentT.statut}
             adheretsTab={listaAdherents}
            />
        ))}
      </div>
    </div>
  )

}
export default  ListeAdherents