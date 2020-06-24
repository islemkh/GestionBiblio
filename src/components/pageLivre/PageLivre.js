import React, { useState , useEffect } from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Livre from '../livres/Livre'
import ListeLivres from '../listeLivres/ListeLivres'

import './PageLivres.css'
import { MDBContainer,  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import { fetchLivres ,addLivre , archiver} from "../../services/livres.service"
import './PageLivres.css'


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
     function closeModal(){
      setIsOpen(false);
    }

  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  const handleChange = e => {
     setSearchValue(e.target.value)} 

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
  <div className="pageLivres">       
    <h1 className="h1"> Listes des livres </h1>
    <div className="searchBox" >
<label>Recherche d'un livre </label> 
<div className="App">
      <input
        type="search"
        placeholder="Search"
        value={searchValue}
        onChange={handleChange}
      /> 
    </div>
   <div className={hideStyle}>
         <button  onClick={openModal} className="btnAdd" > <i className="fa fa-plus" ></i></button> 
             </div>  
   </div>
   
<Paper>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell ><b>Titre</b></TableCell>
            <TableCell ><b>Auteur</b></TableCell>
            <TableCell ><b>Actions</b></TableCell>
          </TableRow>
        </TableHead>       
         <TableBody>
          {listLivres.map(n => {    
            return (
              test==="adherent"? (
                n.etat==="non archivé" &&(
              <TableRow key={n.id}>
                <Livre id={n.id} titre={n.titre} auteur={n.auteur} etat={n.etat}/>
                                
              </TableRow>)):(<TableRow key={n.id}>
                <Livre id={n.id} titre={n.titre} auteur={n.auteur} tabBook ={listLivres} archiverBook ={()=>archiver(listLivres,n.etat)} etat={n.etat} />                              
              </TableRow>)
            );
          })}
            
        </TableBody>
      </Table>
    </Paper> 
    <MDBContainer>
      <MDBModal  isOpen={modalIsOpen} >
        <MDBModalHeader >Ajouter Livre</MDBModalHeader>
        <MDBModalBody>
        <div >
      <input
        type="text"
        name="title"
        placeholder="ajouter titre"
        value={titre}
        className="inp"
        onChange={e =>setTitre(e.target.value)}
      />
      <input
        type="text"
        value={auteur}
        name="auteur"
        className="inp"
        onChange={e => setAuteur(e.target.value)}
        placeholder="Ajouter auteur"
      />
    
      <input
        className="inp"
        type="text"
        value={edition}
        name="edition"
        placeholder=" Ajouter edition"
        onChange={e => setEdition(e.target.value)}
      />
      
      <input
         className="inp"
        type="number"
        placeholder="nbre d'exemplaire"
        value={nbE}
        name="nbE"
        onChange={e => setNbE(e.target.value)}
      />
            </div>       
       </MDBModalBody>
        <MDBModalFooter>
          <button  onClick={closeModal} className="Bclose">Annuler</button>
          <button  onClick={handleAddBook} className="addLivre"> Ajouter</button>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    </div>
)
}

export default PageLivre