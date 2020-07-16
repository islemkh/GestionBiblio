import React, { useState , useEffect } from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Livre from '../livres/Livre'
import { MDBContainer,  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import { searchLivres ,addLivre, updateLivresById } from "../../services/livres.service"
import {nbEmprunte} from '../../services/emprunte.service'
import './listeLivres.css'
import Modal from 'react-modal';
import { fetchLivre } from '../../services/livres.service'
import {updateLivre} from '../../services/livres.service'

function PageLivre() {    
    var tabLivres = localStorage.getItem("livresTab");
    var listLivres = JSON.parse(tabLivres); 

   const [searchValue, setSearchValue] = useState("")
   const [livre, setLivre] = useState([])
   const [livres, setLivres] = useState(listLivres)
   const [loading, setLoading] = useState(false)
   const userMail = localStorage.getItem("userMail");
   var tabEmprunte = localStorage.getItem("emprunteTab");
   var emprunteTab = JSON.parse(tabEmprunte); 
   const [nbBook ,setNbBook]=useState(0)
   const test = localStorage.getItem("user");

   const hideStyle = test ==="bibliothecaire" ? "styledisplay-block" : "styleDisplay-none";

   const [titre, setTitre] = useState("")
   const [auteur, setAuteur] = useState("")
   const [edition, setEdition]= useState("")
   const [nbE, setNbE] = useState(0)
     //stokage des books
     useEffect(() => {
      const fetchData = async () => {
        const result = await fetchLivre()
        setLivre(result)
        }
      fetchData()
      localStorage.setItem("livresTab", JSON.stringify(livre));
    },[livre])
// addBook
   const handleAddBook = () => {
       addLivre(listLivres,titre,auteur,edition,nbE)
       localStorage.setItem("livresTab",JSON.stringify(listLivres))
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
  const handleChange = e => {
     setSearchValue(e.target.value)} 


    useEffect(() => {
      let didCancel = false
      const fetchData = async () => {
        setLoading(true)
        if (!searchValue) {
          setLivres(listLivres)
          setLoading(false)
        } else {
          const result = await searchLivres(listLivres,searchValue)
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
    
    useEffect(() => {
      const compterLivre = async () =>  {
        const resultC  = await nbEmprunte (emprunteTab,userMail);
       
      setNbBook(resultC)
      
      }
      compterLivre()
    },[emprunteTab,userMail] )

    const updateBook =(listLivres,id,titre,auteur) => {
      updateLivresById(listLivres,id,titre,auteur)
     }
    
return (
  <div className="pageLivres">       
    <h1 className="h1"> Listes des livres </h1>
    <div className="searchBox" >
     <div className="form-inline">
     <i className="fas fa-search" aria-hidden="true"></i>
  <input className="form-control form-control-sm ml-3 w-105" type="search" placeholder="Search"
    aria-label="Search" value={searchValue}
    onChange={handleChange}>
      </input> 
   <div className={hideStyle}>
         <button  onClick={openModal} className="btnAdd" > <i className="fa fa-plus" ></i></button> 
    </div>  
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
          {livres.map(n => {    
            return (        
          test==="adherent"? (
                n.etat==="non archivé" &&(
              <TableRow key={n.id}>
                <Livre id={n.id} titre={n.titre} auteur={n.auteur} etat={n.etat} tabBook ={listLivres} nbBook={nbBook} emprunteTab={emprunteTab} updateBook={updateBook} />
                                
              </TableRow>)):(<TableRow key={n.id}>
                <Livre id={n.id} titre={n.titre} auteur={n.auteur} tabBook ={listLivres} etat={n.etat} emprunteTab={emprunteTab} updateBook={updateBook} />
                                
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
        required
      />
      <input
        type="text"
        label="auteur"
        value={auteur}
        name="auteur"
        className="inp"
        onChange={e => setAuteur(e.target.value)}
        placeholder="Ajouter auteur"
        required
      />
    
      <input
        className="inp"
        type="text"
        value={edition}
        name="edition"
        label="edition"
        placeholder=" Ajouter edition"
        onChange={e => setEdition(e.target.value)}
        required
      />
      
      <input
         className="inp"
        type="number"
        label="nbre d'exemplaire"
        placeholder="nbre d'exemplaire"
        value={nbE}
        name="nbE"
        onChange={e => setNbE(e.target.value)}
        required
      />
            </div>       
       </MDBModalBody>
        <MDBModalFooter>
          <button  onClick={closeModal} className="Bclose" >Annuler</button>
          <button  onClick={handleAddBook} className="addLivre" data-testid="submit"> Ajouter</button>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>


    </div>
)
}

export default PageLivre