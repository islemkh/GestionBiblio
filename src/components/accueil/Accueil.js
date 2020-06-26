import React,{useState,useEffect} from 'react';
import {fetchAdherents} from '../../services/adherents.service'
import {Link} from 'react-router-dom'
import { fetchLivre } from '../../services/livres.service'
import './Accueil.css'
import { Slideshow } from '../slideGalery/SlideGal';
import { fetchEmpruntes } from '../../services/emprunte.service';
export default function Accueil() {

  const [adherents, setAdherents] = useState([])
  const [livres, setLivres] = useState([])
  const [emprunte,setEmprunte] = useState([])
  
  //stokage des books
      useEffect(() => {
          const fetchData = async () => {
            const result = await fetchLivre()
            setLivres(result)
            }
          fetchData()
          localStorage.setItem("livresTab", JSON.stringify(livres));
        },[livres])
//stokage des adherents
useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAdherents()
      setAdherents(result)
      
      }
    fetchData()
    localStorage.setItem("adherentsTab", JSON.stringify(adherents));
  },[adherents])

  //stokage des empruntes
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchEmpruntes()
      setEmprunte(result)
      }
    fetchData()
    localStorage.setItem("emprunteTab", JSON.stringify(emprunte));
  },[emprunte])

  return (
<div className="accueilStyle">
      <div className="header">
      <Slideshow/>
      </div>
      <br></br>
<div className="bt"> 
  <Link to="/login">
    <button type="button">Login</button>
 </Link>
 <Link to="/signup">
     <button type="button">Register</button>
 </Link>
   </div>
   </div>
  );
}
