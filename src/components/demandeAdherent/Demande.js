import React from "react"
import profilepic from '../../assets/im1.png'
import {addAdherents} from '../../services/adherents.service'
function Demande(
  { tabDemandes,
    firstName,
    lastName,
    myemail,
    mdp
  }
)
{
  var tabAdherents = localStorage.getItem("adherentsTab");
  var listaAdherents = JSON.parse(tabAdherents);
  
    const statut ="active"

    const handleClickRefuser = (myid) => {
      var i=tabDemandes.findIndex(demande=>demande.id===myid);
      console.log(i);
      if(i!==0){
        tabDemandes.splice(tabDemandes[0],1);
        console.log(tabDemandes);
        localStorage.setItem("demandes", JSON.stringify(tabDemandes));
      } 
      
    }
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
      handleClickRefuser()
    }
    
    
    
    return (

        <div className='adherent'>
       
        <div>
            
        <img className='profilepic' src={profilepic} alt="profile"/> 
          <div className="title">
           <p>{firstName} {lastName}</p> 
            <p>{myemail}</p>

          </div>
        
      
      <div className="action">
        
           <button onClick={handleClickRefuser}>refuser</button>
          <button onClick={handleClickAccepter}>accepter</button>
          
      </div></div>
          
          
      </div>
    )
}
export default Demande