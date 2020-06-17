import React, { useEffect, useState } from "react"
import { bannir, updateTab } from "../../services/adherents.service"
import { useParams} from "react-router-dom"
import img1 from '../../assets/im1.png'

function BannirAdherent() {

  
  var tabAdherents = localStorage.getItem("adherentsTab");
  var listAdherents =JSON.parse(tabAdherents);
  const [adherentB, setAdherentB] = useState(listAdherents)
  
  const { bannirId } = useParams()

  useEffect(() => {
    
    const bannirAdh = async () => {
      const Banniresult = await bannir(adherentB,bannirId)
      console.log(bannirId)
      console.log(Banniresult)
      setAdherentB(Banniresult)
    }
    bannirAdh()
  }, [bannirId])

  updateTab(listAdherents,adherentB)
  console.log(listAdherents)
  localStorage.setItem("adherentsTab",JSON.stringify(listAdherents))
  return (
    <div className="adherent-details"> 
        <img src={img1} alt='img'/>
        <div  className='infos'>
          <div className="label" > L'adherent {adherentB.nom} {adherentB.prenom} est {adherentB.statut}</div>
         
         </div>
        
      
    </div>
  )
}

export default BannirAdherent
