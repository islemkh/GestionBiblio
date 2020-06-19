import React , {useState}from 'react'
import './ModalBook.css'
import {addLivre} from '../../services/livres.service'
export default function Modal ({ handleClose, show, children }) {

    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const [titre, setTitre] = useState("")
    const [auteur, setAuteur] = useState("")
    const [edition, setEdition]= useState("")
    const [nbE, setNbE] = useState(0)
    var tabLivres = localStorage.getItem("livresTab");
    var listLivres = JSON.parse(tabLivres);
    const handleAddBook = () => {
        addLivre(listLivres,titre,auteur,edition,nbE)
        localStorage.setItem("livresTab",JSON.stringify(listLivres))
      }
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
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
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    );
  }