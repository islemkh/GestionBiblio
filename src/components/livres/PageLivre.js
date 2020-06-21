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
import { fetchLivres , addLivre} from "../../services/livres.service"
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
function PageLivre() {    
    var tabLivres = localStorage.getItem("livresTab");
    var listLivres = JSON.parse(tabLivres);
   
   
   const [searchValue, setSearchValue] = useState("")
   const [livres, setLivres] = useState([])
   const [loading, setLoading] = useState(false)

   const test = localStorage.getItem("user");

   const hideStyle = test ==="bibliothecaire" ? "styledisplay-block" : "styleDisplay-none";
   const [titre, setTitre] = useState("")
   const [auteur, setAuteur] = useState("")
   const [edition, setEdition]= useState("")
   const [nbE, setNbE] = useState(0)
   var tabLivres = localStorage.getItem("livresTab");
   var listLivres = JSON.parse(tabLivres);

   const handleAddBook = () => {
       addLivre(listLivres,titre,auteur,edition,nbE)
       localStorage.setItem("livresTab",JSON.stringify(listLivres))
       setIsOpen(false);
     }

  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
 
  function closeModal(){
    setIsOpen(false);
  }
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
    <button onClick={openModal}><i className="fa fa-plus" ></i></button> 
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
               test==="adherent"? (
                n.etat==="non archivé" &&(
              <TableRow key={n.id}>
                <Livre id={n.id} titre={n.titre} auteur={n.auteur}/>
                                
              </TableRow>)):(<TableRow key={n.id}>
                <Livre id={n.id} titre={n.titre} auteur={n.auteur}/>
                                
              </TableRow>)
              
            );
          })}
            
        </TableBody>
      
         )
        }
      </Table>
    </Paper> 
    <div>
        
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="addBook-form">
      <input
        type="text"
        name="title"
        value={titre}
        onChange={e =>setTitre(e.target.value)}
      />
      <input
        type="text"
        value={auteur}
        name="auteur"
        onChange={e => setAuteur(e.target.value)}
      />
      <input
        type="text"
        value={edition}
        name="edition"
        onChange={e => setEdition(e.target.value)}
      />
      <input
        type="text"
        value={nbE}
        name="nbE"
        onChange={e => setNbE(e.target.value)}
      />
      <button className="button" onClick={handleAddBook}>
        Add a book
      </button>
      </div>
        </Modal>
      </div>
    </div>
)
}

export default PageLivre