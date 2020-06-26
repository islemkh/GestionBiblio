import React, { useState , useEffect } from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Livre from '../livres/Livre'
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import { searchLivres ,addLivre } from "../../services/livres.service"
import {nbEmprunte} from '../../services/emprunte.service'
import './PageLivres.css'
import Modal from 'react-modal';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

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
// addBook
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
    
// recherche
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


    
return (
  <div className="pageLivres">       
    <h1 className="h1"> Listes des livres </h1>
    <div className="searchBox" >
    <MDBCol md="6" className="search">
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
        {loading ? (
          <div>Loading ... </div>
        ) : (
         <TableBody>
          {livres.map(n => {    
            return (
              test==="adherent"? (
                n.etat==="non archivé" &&(
              <TableRow key={n.id}>
                <Livre id={n.id} titre={n.titre} auteur={n.auteur} etat={n.etat} tabBook ={listLivres} nbBook={nbBook} emprunteTab={emprunteTab}/>
                                
              </TableRow>)):(<TableRow key={n.id}>
                <Livre id={n.id} titre={n.titre} auteur={n.auteur} tabBook ={listLivres} etat={n.etat} emprunteTab={emprunteTab} />
                                
              </TableRow>)
            );
          })}
            
        </TableBody>
      
         )
        }
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
        placeholder="edition"
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
          <button  onClick={closeModal} className="Bclose">close</button>
          <button  onClick={handleAddBook} className="addLivre"> add livre</button>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  
    </div>
)
}

export default PageLivre