import React,{useState, useEffect} from "react"
import Emprunte from "../emprunte/Emprunte";
import './ListeEmprunte.css'
import {retardF, enCoursF} from '../../services/emprunte.service'



function ListeEmprunte() {    
   
   const userMail = localStorage.getItem("userMail");
   var tabEmprunte = localStorage.getItem("emprunteTab");
   var emprunteTab = JSON.parse(tabEmprunte); 
   const [retard,setRetard]=useState([])
   const [re,setRe]=useState(false)
   const [enCours,setEnCours]=useState([])
   const [cou,setCou]=useState(false)
   const [showC,setShowC]=useState(false)
   const [showR,setShowR]=useState(false)
 
//emprunte en retard
const bookRetard =  () => {
          
      const result = retardF(emprunteTab)
      setRetard(result)
      }
const handleRetard =  () => {
          
       bookRetard()
        setRe(true)
        setShowR(true)
        setShowC(false)
        }
//emprunte en cours
const bookEnCours =  () => {
          
    const result = enCoursF(emprunteTab)
    setEnCours(result)
    }
const handleBookEnCours =  () => {      
     bookEnCours()
      setCou(true)
      setShowR(false)
      setShowC(true)
      }

return (
  <div className="ListeEmpruntes">
    <h1 className="h1"> Listes des empruntes </h1> 
    <button className="enCours" onClick={handleBookEnCours}>La liste des empruntes en cours</button>
    <button className="retard" onClick={handleRetard}>La liste des empruntes en retard</button>

    {cou && ( enCours.map(e => {    
        return (  
     <div className="listEnCours"> 
    <Emprunte titre={e.titre} dateEmp={e.date_emprunte} dateRet={e.date_retour} emp={e.emprunteur} showC={showC} /></div> )})
    )}
    {re && ( retard.map(e => {    
        return (  
     <div className="listRetard"> 
    <Emprunte titre={e.titre} dateEmp={e.date_emprunte} dateRet={e.date_retour} emp={e.emprunteur} showR={showR} /></div> )})
    )}
    </div>
)
}

export default ListeEmprunte