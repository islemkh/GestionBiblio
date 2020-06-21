import React  from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {useRouteMatch, useHistory} from 'react-router-dom'
import './Livre.css'


function Livre({
    id,
    titre,
    auteur
}
)
{
    const test = localStorage.getItem("user");
    const history = useHistory()
    let { path } = useRouteMatch()
    
    return (
<>   
           <TableCell >{titre}</TableCell>
                <TableCell>{auteur}</TableCell>
              <TableCell>
               {test === "bibliothecaire"?(
                 <div> <button className="edit">Modifier</button>
                  <button className="arch">Archiver</button>
                <button onClick =  {() =>history.push(`${path}/${id}`)} className="details">Details</button></div>
                ):(
                  <div><button  className="emprunter">Emprunter</button> 
                  <button onClick ={()=>history.push(`${path}/${id}`)}  className="details">Details</button></div>
                )}
      </TableCell>    
      </>
    )
}
export default Livre