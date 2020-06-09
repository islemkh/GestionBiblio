import React from "react"
import './Adherent.css'
import profilepic from '../../assets/im1.png'
import { useRouteMatch,useHistory}from 'react-router-dom'
function Adherent(
   { id,
    nom,
    prenom}
)
{console.log(prenom,'tty')

const history = useHistory()
     let { path } = useRouteMatch()
     const handleClickDetails = () => {
        history.push(`${path}/${id}`);
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
        
           <button >banir</button>
          <button onClick={handleClickDetails}>details</button>
        
      </div>
      </div>
    )
}
export default Adherent