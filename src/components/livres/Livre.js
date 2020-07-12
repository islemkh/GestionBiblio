import React , {useState,useEffect} from "react"
import TableCell from '@material-ui/core/TableCell';
import {useRouteMatch, useHistory} from 'react-router-dom'
import {updateTab, archiver, updateLivre} from '../../services/livres.service'
import {emprunter, titreEmprunte, retourner,majNbE} from '../../services/emprunte.service'
import './Livre.css'
import { MDBContainer,  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import AlertMassage from "../alert/AlertMassage";

function Livre({
    id,
    titre,
    auteur,
    etat,
    tabBook,
    nbBook,
    emprunteTab})
{
  const [etatA , setBook]=useState(tabBook)
   
    const test = localStorage.getItem("user");
    const userMail = localStorage.getItem("userMail");
    const history = useHistory()
    let {path} = useRouteMatch()
    const [alert ,setAlert]=useState("")
    const [trouvé ,setTrouvé]=useState(false)

    const [titleToUpdate, setTitleToUpdate] = useState(titre)
    const [AuteurToUpdate, setAuteurToUpdate] = useState(auteur)

  const handleUpdateTask = () => {
    updateLivre(id,titleToUpdate, AuteurToUpdate)
    setIsOpen(false);
    window.location.reload(false);
   }

   function closeModal(){
    setIsOpen(false);
  }

const [modalIsOpen,setIsOpen] = React.useState(false);
function openModal() {
  setIsOpen(true);
}
 //arshiver
 const archiverLivre = () =>  {
   const resultA  = archiver (tabBook,id);
   console.log(resultA) 
 setBook(resultA)
 console.log("livre archiver")
 }

 const handleClickArchiver = () =>{
   console.log(etatA)
 archiverLivre()
 updateTab(tabBook,etatA)
 localStorage.setItem("livresTab",JSON.stringify(tabBook))
 setAlert({ msg: "Livre archivé", key: Math.random() ,severity : "error"});
 //window.location.reload(false);

 }
 const handleClickDesArchiver = () =>{
  console.log(etatA)
archiverLivre()
updateTab(tabBook,etatA)
localStorage.setItem("livresTab",JSON.stringify(tabBook))
setAlert({ msg: "Livre désarchivé", key: Math.random() ,severity : "success"});
}


// emprunter
const emprunterLivre = () =>  {
  const resultA  = emprunter (tabBook,id,emprunteTab,titre,userMail);
  console.log(resultA) 
setBook(resultA)
console.log("livre emprunter")
}
const handleClickEmprunter= () =>{
  console.log(nbBook)
  if(nbBook < 2){
    emprunterLivre()
    updateTab(tabBook,etatA)
    localStorage.setItem("livresTab",JSON.stringify(tabBook))
    localStorage.setItem("emprunteTab",JSON.stringify(emprunteTab))
    setAlert({ msg: "Livre emprunter", key: Math.random() ,severity : "success"});
  }
    else{setAlert({ msg: "Vous ne pouvez pas emprunter plus de deux livres", key: Math.random() ,severity : "error"});
  }

}
// Retourner book
const retournerLivre = () =>  {
  const resultA  = retourner (emprunteTab,titre,userMail);
  setBook(resultA)
  const resultMAJ  = majNbE (tabBook,id);
  tabBook=resultMAJ; 


console.log("livre emprunter")
}

const handleClickRetourner= () =>{
    retournerLivre()
    updateTab(tabBook,etatA)
    localStorage.setItem("livresTab",JSON.stringify(tabBook))
    localStorage.setItem("emprunteTab",JSON.stringify(emprunteTab))
    setAlert({ msg: "Livre retourner", key: Math.random() ,severity : "success"});}
//find book emprunter par le user courant
useEffect(() => {
  const findLivre = async () =>  {
    const resultC  = await titreEmprunte (emprunteTab,titre,userMail);
   setTrouvé(resultC)
  }
  findLivre()
},[emprunteTab,titre,userMail] )

    return (
<>   
           <TableCell >{titre}</TableCell>
                <TableCell>{auteur}</TableCell>
              <TableCell>
               {test === "bibliothecaire"?(
                 <div> 
                <button onClick={openModal} className="edit">Modifier</button>         
                {etat==="non archivé"? (<button className="arch" onClick ={handleClickArchiver} >Archiver</button>):
                  (<button className="desarch" onClick ={handleClickDesArchiver}>Désarchiver</button>)}
                <button onClick =  {() =>history.push(`${path}/${id}`)} className="details">Details</button></div>
                ):(
                  <div>
                    {trouvé===false? (<button  className="emprunter"onClick ={handleClickEmprunter}>Emprunter</button>):
                    (<button  className="desarch"onClick ={handleClickRetourner}>Retourner</button>)}
                  <button onClick ={()=>history.push(`${path}/${id}`)}  className="details">Details</button>
                  
                  </div>
                )}
      </TableCell>    
      {alert ? <AlertMassage key={alert.key} message={alert.msg} severity={alert.severity}/> : null}  
      <MDBContainer>
      <MDBModal  isOpen={modalIsOpen} >
        <MDBModalHeader >Modifier Livre</MDBModalHeader>
        <MDBModalBody>
        <div >
      <input
        type="text"
        name="title"
        value={titleToUpdate}
        className="inp"
        onChange={e => setTitleToUpdate(e.target.value)}
        />
      <input
        type="text"
        label="auteur"
        value={AuteurToUpdate}
        name="auteur"
        className="inp"
        onChange={e => setAuteurToUpdate(e.target.value)}
      />
      </div>       
       </MDBModalBody>
        <MDBModalFooter>
          <button  onClick={closeModal} className="Bclose" >Annuler</button>
          <button onClick={handleUpdateTask} className="addLivre" > Modifier</button>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
      </>
    )
}
export default Livre