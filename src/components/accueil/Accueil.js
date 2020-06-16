import React,{useState,useEffect} from 'react';
import {fetchAdherents} from '../../services/adherents.service'
import {Link} from 'react-router-dom'
import './Accueil.css'
import { Slideshow } from '../slideGalery/SlideGal';
export default function Accueil() {
  const [adherents, setAdherents] = useState([])


useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAdherents()
      setAdherents(result)
      
      }
    fetchData()
    localStorage.setItem("adherentsTab", JSON.stringify(adherents));
  },[adherents])
  return (
    <div className="accueilStyle">
      <div className="header">
      <Slideshow/>
      </div>
      <Link to="/login">
     <button type="button">
          Login
     </button>
 </Link>
 <Link to="/signup">
     <button type="button">
          Register
     </button>
 </Link>
   </div>
  );
}
