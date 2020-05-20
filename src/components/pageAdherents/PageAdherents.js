import React, { useState, useCallback, useEffect } from "react"
import ListeAdherents from '../listeAdherents/ListeAdherents'
import { fetchAdherents } from '../../services/adherents.service'

function PageAdherents() {
  const [adherents, setAdherents] = useState([])


useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAdherents()
      
      setAdherents(result)
      
      }
    fetchData()
  },[])
  
  
return (
 
  
    <div className="pageAdherents">
    <ListeAdherents adherents={adherents}/>
          
    </div>
)
}

export default PageAdherents