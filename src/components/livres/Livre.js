import React  from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TableRow from '@material-ui/core/TableRow';
import {useRouteMatch, useHistory} from 'react-router-dom'


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
        <div className='livre'>
         <Table >
        <TableBody>
              
            
              <TableRow key={id}>
                <TableCell > {titre}</TableCell>
                <TableCell numeric>{auteur}</TableCell>
                 <TableCell><div className="action">     
      {test === "bibliothecaire"?(
                 <div> <button>Archiver</button>
                <button onClick =  {() =>history.push(`${path}/${id}`)} >Details</button></div>
                ):(
                  <div><button className="emp">Emprunter</button> 
                  <button onClick ={()=>history.push(`${path}/${id}`)} >Details</button></div>
                )}
      </div></TableCell>                 
              </TableRow>
           
        
        </TableBody>
      </Table>
              
      
      </div>
    )
}
export default Livre