import React , {useState} from "react"
import profilepic from '../../assets/im1.png'
import {addAdherents, effacerAdherentById} from '../../services/adherents.service'
import './Demande.css'
function Demande(
  { tabDemandes,
    firstName,
    lastName,
    myemail,
    mdp,
    id
  }
)
{
  var tabAdherents = localStorage.getItem("adherentsTab");
  var listaAdherents = JSON.parse(tabAdherents);
  const [tabDemande, setTabDemande]=useState(tabDemandes)
    const statut ="active"

    //kol demande refusée ou accépté nfaskhoha m tableau mta3 les demandes
    const effacerDemande =()=>{
      const resultD = effacerAdherentById(tabDemandes,id);
      setTabDemande(resultD)
    }
    const handleClickRefuser = () => {
      effacerDemande()
        localStorage.setItem("demandes", JSON.stringify(tabDemandes));
      } 
      
    // accepter la demande : nfaskhoha men tab demandes w nzidoha f tab adherents
    const handleClickAccepter = () => {
        addAdherents(
        listaAdherents,
        firstName,
        lastName,
        myemail,
        mdp,
        statut
      )
      
      localStorage.setItem("adherentsTab", JSON.stringify(listaAdherents));
      effacerDemande()
      localStorage.setItem("demandes", JSON.stringify(tabDemandes));
    }
    
    
    
    return (

        <div className='adherent'>
       
        <div>
            
        <img className='profilepic' src={profilepic} alt="profile"/> 
          <div className="title">
           <h6>{firstName} {lastName}</h6> 
            <h6>{myemail}</h6>

          </div>
        
      
      <div className="action">
        
           <button onClick={handleClickRefuser} className="refuser">refuser</button>
          <button onClick={handleClickAccepter}className="accepter">accepter</button>
          
      </div></div>
          
          
      </div>
    )
}
export default Demande