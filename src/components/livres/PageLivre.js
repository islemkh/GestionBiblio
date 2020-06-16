import React, { useState, useEffect } from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fetchLivre } from '../../services/livres.service'


function PageAdherents() {
    const [Livres, setLivres] = useState([])


    useEffect(() => {
        const fetchData = async () => {
          const result = await fetchLivre()
          setLivres(result)
          console.log('result: ', result);
          }
        fetchData()
      },[])
  
  
return (
    <div className="pageAdherents">
{/*     <ListeLivres livres={Livres}/>
 */}          
    <h1>listes des livres </h1>

<Paper>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell >titre</TableCell>
            <TableCell>auteur</TableCell>
            <TableCell >edtion </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Livres.map(n => {    
            
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row" numeric> 
                  {n.id}
                </TableCell>
                <TableCell >{n.titre}</TableCell>
                <TableCell numeric>{n.auteur}</TableCell>
                <TableCell numeric>{n.edition}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    </div>
)
}

export default PageAdherents