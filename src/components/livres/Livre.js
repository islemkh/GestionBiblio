import React , {useState} from "react"
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {useRouteMatch, useHistory} from 'react-router-dom'
import './Livre.css'
import {updateTab, archiver} from '../../services/livres.service'
import './Livre.css'
import AlertMassage from "../alert/AlertMassage";

function Livre({
    id,
    titre,
    auteur,
    etat,
    archiverBook,
    tabBook
}
)
{
  const [etatA , setBook]=useState(tabBook)
    const test = localStorage.getItem("user");
    const history = useHistory()
    let { path } = useRouteMatch()
    const [alert ,setAlert]=useState("")
 const archiverLivre = () =>  {
   const resultA  = archiver (tabBook,id);
   console.log(resultA) 
 setBook(resultA)

 console.log("livre archiverrrrrrrr")
 }
 const handleClickArchiver = () =>{
   console.log(etatA)
 archiverLivre()
 updateTab(tabBook,etatA)
 localStorage.setItem("livresTab",JSON.stringify(tabBook))
 setAlert({ msg: "Livre archivé", key: Math.random() ,severity : "error"});

 }
 const handleClickDesArchiver = () =>{
  console.log(etatA)
archiverLivre()
updateTab(tabBook,etatA)
localStorage.setItem("livresTab",JSON.stringify(tabBook))
setAlert({ msg: "Livre désarchivé", key: Math.random() ,severity : "success"});

}
    return (
<>   
           <TableCell >{titre}</TableCell>
                <TableCell>{auteur}</TableCell>
              <TableCell>
               {test === "bibliothecaire"?(
                 <div> <button className="edit">Modifier</button>
                  {etat==="non archivé"? (<button className="arch" onClick ={handleClickArchiver}>Archiver</button>):(<button className="desarch" onClick ={handleClickDesArchiver}>Désarchiver</button>)}
                <button onClick =  {() =>history.push(`${path}/${id}`)} className="details">Details</button></div>
                ):(
                  <div><button  className="emprunter">Emprunter</button> 
                  <button onClick ={()=>history.push(`${path}/${id}`)}  className="details">Details</button></div>
                )}
      </TableCell>    
      {alert ? <AlertMassage key={alert.key} message={alert.msg} severity={alert.severity}/> : null}  
      </>
    )
}
export default Livre