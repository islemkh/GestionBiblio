import React from 'react';
import { render } from '@testing-library/react';
import PageLivre from '../components/pageLivre/PageLivre';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from "history"
import { screen } from '@testing-library/dom'

describe("test list livres",()=>{
    test("test comp",()=>{
      const key ="livresTab"
      const tabLivres = [{"id":"1","titre":"Le Grand Meaulnes","auteur":"Victor Hugo","edition":2015,"NbExemplaires":20,"etat":"non archivé"},{"id":"2","titre":"Le Rouge et le Noir","auteur":"Victor Del Litto ","edition":1997,"NbExemplaires":5,"etat":"archivé"},{"id":"3","titre":"Le Petit Prince","auteur":"Antoine de Saint-Exupéry","edition":2014,"NbExemplaires":10,"etat":"archivé"},{"id":"4","titre":"Lettres de mon moulin","auteur":"Alphonse Daudet","edition":2005,"NbExemplaires":12,"etat":"archivé"},{"id":"5","titre":"La Mère","auteur":"Pearl Buck","edition":1971,"NbExemplaires":30,"etat":"non archivé"},{"id":"6","titre":"Les Fourmis","auteur":"Bernard Werber","edition":2002,"NbExemplaires":8,"etat":"non archivé"},{"id":"7","titre":"Si c'est un homme","auteur":"Primo Levi","edition":2007,"NbExemplaires":6,"etat":"non archivé"}]
      localStorage.setItem(key, JSON.stringify(tabLivres)); 
      expect(localStorage.getItem("livresTab")).toBe(JSON.stringify(tabLivres))
      const key2 = "emprunteTab"
      const emprunte = [{"id":"1","titre":"Le Grand Meaulnes","date_emprunte":"06-10-2020","date_retour":"Pas encore","emprunteur":"islem@gmail.com"},{"id":"2","titre":"Les Fourmis","date_emprunte":"6-20-2020","date_retour":"Pas encore","emprunteur":"islem@gmail.com"},{"id":"3","titre":"Si c'est un homme","date_emprunte":"6-19-2020","date_retour":"Pas encore","emprunteur":"emna@gmail.com"},{"id":"4","titre":"Les Fourmis","date_emprunte":"6-24-2020","date_retour":"Pas encore","emprunteur":"maryem@gmail.com"},{"id":"5","titre":"Les Fourmis","date_emprunte":"6-08-2020","date_retour":"Pas encore","emprunteur":"ahmed@gmail.com"}]
      localStorage.setItem(key2, JSON.stringify(emprunte));

        const history = createMemoryHistory({ initialEntries: ["/"] })
        const {debug, getByLabelText, getByTestId} = render(
        <Router history={history}> 
        <PageLivre />
        </Router>
        )              
        
           
  
    })  
  } )
