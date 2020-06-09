import React, { useEffect, useState } from "react"
import { getAdherentById } from "../../services/adherents.service"
import { useParams} from "react-router-dom"
import './AdherentDetails.css'
import img1 from '../../assets/im1.png'

function AdherentDetails() {
  const [loading, setLoading] = useState(false)
  const [adherent, setAdherent] = useState({})
  const { adherentId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result = await getAdherentById(adherentId)
      console.log(result)

      setAdherent(result)
      setLoading(false)
    }
    fetchData()
  }, [adherentId])

  return (
    <div className="adherent-details">
      <div className="header">Adherent details</div>  
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <>
        <img src={img1} alt='img'/>
        <div  className='infos'>
          <div className="label" > nom : <span className="value">{adherent.nom}</span></div>
          <div className="label"> prenom : <span className="value">{adherent.prenom}</span></div>
          <div className="label"> email : <span className="value">{adherent.email}</span></div>
         <div className="label"> statut : <span className="value">{adherent.statut}</span></div>
         </div>
        </>
      )}
    </div>
  )
}

export default AdherentDetails
