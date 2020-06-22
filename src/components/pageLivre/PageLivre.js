import React, { useState , useEffect } from "react"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Livre from '../livres/Livre'
import { fetchLivres ,addLivre } from "../../services/livres.service"
import './PageLivres.css'
import { MDBContainer,  MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

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
    

    useEffect(() => {
      let didCancel = false
      const fetchData = async () => {
        //setLoading(true)
          const result = await fetchLivres(searchValue)
          console.log("result: ", didCancel)
          if (!didCancel) {
            setLivres(result)

            //setLoading(false)
         
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
        <input
            type="search"
            name="search"
            placeholder=" titre/nom auteur"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
          />

      <div className={hideStyle}>
      <div className="div2">
         <button  onClick={openModal} className="btnAdd" ><i className="fa fa-plus" ></i></button> 
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
              <TableRow key={n.id}>
                <Livre id={n.id} titre={n.titre} auteur={n.auteur}/>                          
              </TableRow>
            );
          })}
            
        </TableBody>
      </Table>
    </Paper> 

    <MDBContainer >
      <div className="fluid"></div>
      <MDBModal  isOpen={modalIsOpen}   >
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
=    </MDBContainer>
  
    </div>
)
}

export default PageLivre