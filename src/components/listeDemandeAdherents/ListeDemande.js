import React from "react"
import profilepic from '../../assets/im1.png'
function ListeDemande(
   { id,
    firstN,
    lastN,
    email}
)
{

// const history = useHistory()
//      let { path } = useRouteMatch()
//      const handleClickDetails = () => {
//         history.push(`${path}/${id}`);
//     }
    return (

        <div className='adherent'>
        <div>
        
        
        <img className='profilepic' src={profilepic} alt="profile"/> 
          <div className="title">
           <p>{firstN} {lastN}</p> 
            <p>{email}</p>

          </div>
        
      </div>
      <div className="action">
        
           <button >refuser</button>
          <button>accepter</button>
        
      </div>
      </div>
    )
}
export default ListeDemande