import React, { useState } from "react"
import {useRouteMatch, useHistory} from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './Livre.css'
import ModalBook from '../modalBook/ModalBook'
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

function PageAdherents() {    
    var tabLivres = localStorage.getItem("livresTab");
    var listLivres = JSON.parse(tabLivres);
    const history = useHistory()
    let { path } = useRouteMatch()
   const [show,setShow]=useState(false)
  
  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
    const test = localStorage.getItem("user")


return (
    <div className="pageAdherents">       
    <h1>Listes des livres </h1>
    <MDBCol md="5" className="search">
      <MDBFormInline className="md-form">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </MDBFormInline>
    </MDBCol>

<Paper>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell ><b>Titre</b></TableCell>
            <TableCell ><b>Auteur</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listLivres.map(n => {    
            return (
              <TableRow key={n.id}>
                <TableCell >{n.titre}</TableCell>
                <TableCell numeric>{n.auteur}</TableCell>
                {test === "bibliothecaire"?(
                <TableCell> <div><button onClick={showModal}>Ajouter</button> <button>Archiver</button>
                <button onClick =  {() =>history.push(`${path}/${n.id}`)} >Details</button></div></TableCell>
                ):(
                  <TableCell><div><button className="emp">Emprunter</button> 
                  <button onClick ={()=>history.push(`${path}/${n.id}`)} >Details</button></div></TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
    <ModalBook show={show} handleClose={hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </ModalBook>
    </div>
)
}

export default PageAdherents