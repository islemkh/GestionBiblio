import React from 'react';
import { render } from '@testing-library/react';
import ListeAdherents from '../components/ListeAdherents/ListeAdherents';
import mockAdherent from '../mock/mockLivre'
import { createMemoryHistory } from "history"
import { Router } from 'react-router-dom';

describe("test list livres",()=>{
    test("test snapshots",()=>{
         const key ="adherentsTab"
        const adherent = [{"id":"1","nom":"Islem","prenom":"Khemiri","email":"islem@gmail.com","password":"123","statut":"active"},{"id":"2","nom":"Emna","prenom":"Amri","email":"emna@gmail.com","password":"123","statut":"active"},{"id":"3","nom":"Maryem","prenom":"Souyah","email":"maryem@gmail.com","password":"123","statut":"banni"},{"id":"4","nom":"Sana","prenom":"Kthiri","email":"sana@gmail.com","password":"123","statut":"active"},{"id":"5","nom":"ines","prenom":"ben mheni","email":"ines@gmail.com","password":"123","statut":"banni"},{"id":"6","nom":"Ahmed","prenom":"Amri","email":"ahmed@gmail.com","password":"123","statut":"active"}]
         localStorage.setItem(key, JSON.stringify(adherent)); 
          expect(localStorage.getItem("adherentsTab")).toBe(JSON.stringify(adherent))
       const history = createMemoryHistory({ initialEntries: ["/"] })
    const AdherentComponent = render(
      <Router history={history}> 
                <ListeAdherents Adherent={mockAdherent} />
      </Router>)              
        expect(AdherentComponent).toMatchSnapshot()    
  
    })    
  } )