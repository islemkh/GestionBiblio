import React, { useState , useEffect } from "react"
import {useRouteMatch, useHistory} from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Livre from './Livre'
import ModalBook from '../modalBook/ModalBook'
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import { fetchLivres } from "../../services/livres.service"

function PageLivre() {    
    var tabLivres = localStorage.getItem("livresTab");
    var listLivres = JSON.parse(tabLivres);
   
   const [show,setShow]=useState(false)
   const [searchValue, setSearchValue] = useState("")
   const [livres, setLivres] = useState([])
   const [loading, setLoading] = useState(false)

   const test = localStorage.getItem("user");

   const hideStyle = test ==="bibliothecaire" ? "styledisplay-block" : "styleDisplay-none";

  const showModal = () => {
    console.log("affichier ")
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };
    

    useEffect(() => {
      let didCancel = false
      const fetchData = async () => {
        setLoading(true)
        if (!searchValue) {
          setLivres([])
          setLoading(false)
        } else {
          const result = await fetchLivres(listLivres,searchValue)
          console.log("result: ", didCancel)
          if (!didCancel) {
            setLivres(result)
            setLoading(false)
          }
        }
      }
      fetchData()
      return () => {
        didCancel = true
      }
    }, [searchValue])

return (
  <div className="pageAdherents">       
    <h1 className="h1"> Listes des livres </h1>
    <div>
    <MDBCol md="4" className="search">
      <MDBFormInline className="md-form">
        <MDBIcon icon="search" />
        <input
        type="search" 
        placeholder="Search" 
        aria-label="Search" 
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        />
      </MDBFormInline>
       
    </MDBCol>
    <MDBCol md="4" className={hideStyle}>
         <button md="4" onClick={showModal} > <i className="fa fa-plus" ></i></button> 
             </MDBCol>

   </div>
<Paper>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell ><b>Titre</b></TableCell>
            <TableCell ><b>Auteur</b></TableCell>
          </TableRow>
        </TableHead>
        {loading ? (
          <div>Loading ... </div>
        ) : (
        
         <TableBody>
          {listLivres.map(n => {    
            return (
              <TableRow key={n.id}>
                <Livre id={n.id} titre={n.titre} auteur={n.auteur}/>
                                
              </TableRow>
            );
          })}
            
        </TableBody>
      
         )
        }
      </Table>
    </Paper> 
    <ModalBook show={show} handleClose={hideModal}>
          <p>Modal</p>
          <p>Data</p>
    </ModalBook>
    </div>
)
}

export default PageLivre