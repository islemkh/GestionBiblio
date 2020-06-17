import React  from "react"
import './Adherent.css'
import profilepic from '../../assets/im1.png'
import { useRouteMatch,useHistory} from 'react-router-dom'

function Adherent(
   { id,
    nom,
    prenom,
    statut,
    }
)
{
 


    
    
const history = useHistory()
     let { path } = useRouteMatch()
     const handleClickDetails = () => {
        history.push(`${path}/${id}`);
    }
    
    const handleClickBannir = () => {
      history.push(`${path}/bannir/${id}`);
     
  }

  const handleClickDeBannir = () => {
    history.push(`${path}/bannir/${id}`);
   
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
            
            
          <button onClick={handleClickDetails}>details</button>
          {statut==="active"?(
          <button onClick={handleClickBannir} >bannir</button>):
          (<button onClick={handleClickDeBannir}>débannir</button>)
            }
      </div>
      </div>
    )
}
export default Adherent