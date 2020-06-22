import React, { useEffect, useState } from "react"
import { getLivresById } from "../../services/livres.service"
import { useParams} from "react-router-dom"

function LivreDetails() {

  const [loading, setLoading] = useState(false)
  var tabLivres = localStorage.getItem("livresTab");
  var listLivres =JSON.parse(tabLivres);
  const [livre, setLivre] = useState(listLivres)
  
  const { livreId } = useParams()
  
  useEffect(() => {
    
    const fetchData = async () => {
      
      setLoading(true)
      const result = await getLivresById(livre,livreId)
      setLivre(result)
      setLoading(false)
    }
    fetchData()
  }, [livreId])

  return (
    <div className="adherent-details">
      <div className="headerAd">Book details</div>  
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
        
        <div  className='infos'>
          <div className="label" > Titre : <span className="value">{livre.titre}</span></div>
          <div className="label"> Auteur : <span className="value">{livre.auteur}</span></div>
          <div className="label"> Edition : <span className="value">{livre.edition}</span></div>
         <div className="label"> Nombre d'exemplaires : <span className="value">{livre.NbExemplaires}</span></div>
         <div className="label"> Etat : <span className="value">{livre.etat}</span></div>
         </div>
        </>
      )}
    </div>
  )
}

export default LivreDetails
