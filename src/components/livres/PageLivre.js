import React, { useState, useEffect } from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fetchLivre } from '../../services/livres.service'
import './Livre.css'

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
  
    const test = localStorage.getItem("user")
    let button;
    if (test === "bibliothecaire") {
      button = <div><button>Ajouter</button> <button>Archiver</button><button>Details</button></div>;
    } else {
      button = <div><button className="emp">Emprunter</button> <button>Details</button></div>;
    }

return (
    <div className="pageAdherents">
{/*     <ListeLivres livres={Livres}/>
 */}          
    <h1>Listes des livres </h1>
<Paper>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell ><b>Titre</b></TableCell>
            <TableCell ><b>Auteur</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Livres.map(n => {    
            return (
              <TableRow key={n.id}>
                <TableCell >{n.titre}</TableCell>
                <TableCell numeric>{n.auteur}</TableCell>
                <TableCell> {button} </TableCell>
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