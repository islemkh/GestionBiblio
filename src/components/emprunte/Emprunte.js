import React,{useState , useEffect}  from "react"
import {userEmprunte} from '../../services/emprunte.service'


function Emprunte(
   { id,
    titre,
    dateEmp,
    emp,
    showR,
    showC,
    affisher,
    user
    }
)
{
    var tabEmprunte = localStorage.getItem("emprunteTab");
    var emprunteTab = JSON.parse(tabEmprunte); 
    const [emprunteBooks,setEmprunteBooks]= useState([])


     //fetch books of mta3 specific user
    useEffect(() => {
    
        const fetchData = async () => {
          
          const result = await userEmprunte(emprunteTab,user)
          setEmprunteBooks(result)
        }
        fetchData()
      }, [user])
    
    return (
        <div className='Emprunte'>
        {/* affichage mta3 les empruntes eli teb3in user mou3ayen */}
       { affisher &&(<div>
        <hr></hr>
        {(emprunteBooks.length )=== 0? (<div className="label">Pas de Livres empruntés </div>): (
            <> 
            
            <div className="label">Livres empruntés </div>
            
             {emprunteBooks.map(e => {   
                  
        return ( 
            
            
          <div className="title">
              
              <div className="label"> titre : <span className="value">{e.titre}</span></div>
              <div className="label"> date d'emprunte : <span className="value">{e.date_emprunte}</span></div>
              <div className="label"> date de retour : <span className="value">{e.date_retour}</span></div>
              <hr></hr>
          </div>
   
    )
        })}
         </>
         )}
      </div>)}
      {/* affichage mta3 les empruntes eli f liste des empruntes */}
      <div className="affisher-emprunte">
             {/* affichage mta3 les empruntes en cours */} 
            { showR && (
              <div >
            <div className="label"> titre : <span className="value">{titre}</span></div>
              <div className="label"> Emprunteur : <span className="value">{emp}</span></div>
              <div className="label"> date d'emprunte : <span className="value">{dateEmp}</span></div>
              <hr></hr>
              </div>
              )}
              {/* affichage mta3 les empruntes en retard*/}
              { showC && (
              <div >
            <div className="label"> titre : <span className="value">{titre}</span></div>
              <div className="label"> Emprunteur : <span className="value">{emp}</span></div>
              <div className="label"> date d'emprunte : <span className="value">{dateEmp}</span></div>
              <hr></hr>
              </div>
              )} 
    </div>
      </div>
    )
}
export default Emprunte