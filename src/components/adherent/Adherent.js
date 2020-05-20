import React from "react"
import {Link,useRouteMatch} from 'react-router-dom'
import './Adherent.css'
import profilepic from '../../assets/im1.png'

function Adherent(
   { id,
    nom,
    prenom,
    email,
    statut}
)
{console.log(prenom,'tty')
    // let { path } = useRouteMatch()
    return (

        <div className='adherent'>
        <div>
        
        {/* <Link to={`${path}/${id}`}> */}
        <img className='profilepic' src={profilepic} alt="profile"/> 
          <div className="title">
           <p>{nom} {prenom}</p> 
           <p>{email}</p> 
            Statut :{statut}
          </div>
        {/* </Link> */}
      </div>
      <div className="actions">
        <div>
          <button onClick={() => (id)}>banir</button>
          <button onClick={() => (id)}>details</button>
        </div>
      </div>
      </div>
    )
}
export default Adherent