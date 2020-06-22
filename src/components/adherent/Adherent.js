import React,{useState}  from "react"
import './Adherent.css'
import profilepic from '../../assets/im1.png'
import { useRouteMatch,useHistory} from 'react-router-dom'
import { bannir, updateTab } from "../../services/adherents.service"
import AlertMassage from "../alert/AlertMassage";

function Adherent(
   { id,
    nom,
    prenom,
    statut,
    adheretsTab
    }
)
{
 
  const [adherentB, setAdherentB] = useState(adheretsTab)
  const [alert ,setAlert]=useState("")
   
  const bannirAdherent = () =>  {
    const resultB  = bannir (adheretsTab,id); 
  setAdherentB(resultB)
  }
    
const history = useHistory()
     let { path } = useRouteMatch()
     const handleClickDetails = () => {
        history.push(`${path}/${id}`);
    }
    
    const handleClickBannir = () => {
      bannirAdherent()
      updateTab(adheretsTab,adherentB)
  localStorage.setItem("adherentsTab",JSON.stringify(adheretsTab))
  setAlert({ msg: "Adherent banni", key: Math.random() ,severity : "error"});
     
  }

  const handleClickDeBannir = () => {
    bannirAdherent()
    updateTab(adheretsTab,adherentB)
  localStorage.setItem("adherentsTab",JSON.stringify(adheretsTab))
  setAlert({ msg: "Adherent débanni", key: Math.random() ,severity : "success"});
   
}
    return (
        <div className='adherent'>
        <div>
        
        <img className='profilepic' src={profilepic} alt="profile"/> 
          <div className="title">
           <p>{nom} {prenom}</p> 

          </div>
        
      </div>
      <div className="action">
            
            
          <button onClick={handleClickDetails} className="details" >details</button>
          {statut==="active"?(
          <button onClick={handleClickBannir} className="banni" >bannir</button>):
          (<button onClick={handleClickDeBannir}className="debanni" >débannir</button>)
            }
      </div>
      {alert ? <AlertMassage key={alert.key} message={alert.msg} severity={alert.severity}/> : null} 
      </div>
    )
}
export default Adherent