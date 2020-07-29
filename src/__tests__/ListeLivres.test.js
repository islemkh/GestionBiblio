import React from 'react';
import { render,act ,fireEvent } from '@testing-library/react';
import PageLivre from '../components/listeLivres/ListeLivres';
import Livre from "../components/livres/Livre"
import { createMemoryHistory } from "history"
import { Router } from 'react-router-dom';
import user from '@testing-library/user-event'


describe("test livres list", () => {
  test("should render an array  livre ",  () => {
    const key ="livresTab"
    const tabLivres = [{"id":"1","titre":"Le Grand Meaulnes","auteur":"Victor Hugo","edition":2015,"NbExemplaires":20,"etat":"non archivé"},{"id":"2","titre":"Le Rouge et le Noir","auteur":"Victor Del Litto ","edition":1997,"NbExemplaires":5,"etat":"archivé"},{"id":"3","titre":"Le Petit Prince","auteur":"Antoine de Saint-Exupéry","edition":2014,"NbExemplaires":10,"etat":"archivé"},{"id":"4","titre":"Lettres de mon moulin","auteur":"Alphonse Daudet","edition":2005,"NbExemplaires":12,"etat":"archivé"},{"id":"5","titre":"La Mère","auteur":"Pearl Buck","edition":1971,"NbExemplaires":30,"etat":"non archivé"},{"id":"6","titre":"Les Fourmis","auteur":"Bernard Werber","edition":2002,"NbExemplaires":8,"etat":"non archivé"},{"id":"7","titre":"Si c'est un homme","auteur":"Primo Levi","edition":2007,"NbExemplaires":6,"etat":"non archivé"}]
    localStorage.setItem(key, JSON.stringify(tabLivres)); 
    expect(localStorage.getItem("livresTab")).toBe(JSON.stringify(tabLivres))
    const key2 = "emprunteTab"
    const emprunte = [{"id":"1","titre":"Le Grand Meaulnes","date_emprunte":"06-10-2020","date_retour":"Pas encore","emprunteur":"islem@gmail.com"},{"id":"2","titre":"Les Fourmis","date_emprunte":"6-20-2020","date_retour":"Pas encore","emprunteur":"islem@gmail.com"},{"id":"3","titre":"Si c'est un homme","date_emprunte":"6-19-2020","date_retour":"Pas encore","emprunteur":"emna@gmail.com"},{"id":"4","titre":"Les Fourmis","date_emprunte":"6-24-2020","date_retour":"Pas encore","emprunteur":"maryem@gmail.com"},{"id":"5","titre":"Les Fourmis","date_emprunte":"6-08-2020","date_retour":"Pas encore","emprunteur":"ahmed@gmail.com"}]
    localStorage.setItem(key2, JSON.stringify(emprunte));

    localStorage.setItem("user","bibliothecaire")
    window.localStorage.getItem("user")
    expect(localStorage.getItem("user")).toBe("bibliothecaire")

    const mockUpdateLivre = jest.fn()
    const mockLivre = [{
          id:"1",
          titre: "Le Grand Meaulnes",
          auteur: "Victor Hugo",
          edition: 2015,
          NbExemplaires: 20,
          etat : "non archivé"
        }]
        const MockWithOneEmprunt = [
          {"id":"1",
          "titre":"Le Grand Meaulnes",
          "date_emprunte":"06-10-2020",
          "date_retour":"Pas encore",
          "emprunteur":"islem@gmail.com"},
      ]

        
        const history = createMemoryHistory({ initialEntries: ["/"] })
        const { debug,getByTestId ,getAllByText , getByLabelText} = render(
          <Router history={history}> 
      <Livre updateBook={mockUpdateLivre} tabBook={mockLivre} emprunteTab={MockWithOneEmprunt} />
      </Router>

    )
 // expect(getAllByText('Modifier Livre')).toBeTruthy() 
     const UpdateButton1 = getAllByText('Modifier')
    fireEvent.click(UpdateButton1[0]) 


    const TextField =  getByLabelText(/title/i);
    debug(TextField);
    expect(TextField).toBeTruthy();
    expect(TextField).toHaveAttribute("type","text") 

    const TextAuteur =  getByLabelText(/auteur/i);
    debug(TextAuteur);
    expect(TextAuteur).toBeTruthy();
    expect(TextAuteur).toHaveAttribute("type","text") 

  const UpdateButton2 = getByTestId('updateLivres')
    fireEvent.click(UpdateButton2)

    expect(mockUpdateLivre).toBeTruthy() 
    expect(mockUpdateLivre).toHaveBeenCalled()
    expect(mockUpdateLivre).toHaveBeenCalledTimes(1)  


    
  })

  })


  describe("test livres list cas d'erreur", () => {
    test("should render an array  livre ",  () => {
      const key ="livresTab"
      const tabLivres = [{"id":"1","titre":"Le Grand Meaulnes","auteur":"Victor Hugo","edition":2015,"NbExemplaires":20,"etat":"non archivé"},{"id":"2","titre":"Le Rouge et le Noir","auteur":"Victor Del Litto ","edition":1997,"NbExemplaires":5,"etat":"archivé"},{"id":"3","titre":"Le Petit Prince","auteur":"Antoine de Saint-Exupéry","edition":2014,"NbExemplaires":10,"etat":"archivé"},{"id":"4","titre":"Lettres de mon moulin","auteur":"Alphonse Daudet","edition":2005,"NbExemplaires":12,"etat":"archivé"},{"id":"5","titre":"La Mère","auteur":"Pearl Buck","edition":1971,"NbExemplaires":30,"etat":"non archivé"},{"id":"6","titre":"Les Fourmis","auteur":"Bernard Werber","edition":2002,"NbExemplaires":8,"etat":"non archivé"},{"id":"7","titre":"Si c'est un homme","auteur":"Primo Levi","edition":2007,"NbExemplaires":6,"etat":"non archivé"}]
      localStorage.setItem(key, JSON.stringify(tabLivres)); 
      expect(localStorage.getItem("livresTab")).toBe(JSON.stringify(tabLivres))
      const key2 = "emprunteTab"
      const emprunte = [{"id":"1","titre":"Le Grand Meaulnes","date_emprunte":"06-10-2020","date_retour":"Pas encore","emprunteur":"islem@gmail.com"},{"id":"2","titre":"Les Fourmis","date_emprunte":"6-20-2020","date_retour":"Pas encore","emprunteur":"islem@gmail.com"},{"id":"3","titre":"Si c'est un homme","date_emprunte":"6-19-2020","date_retour":"Pas encore","emprunteur":"emna@gmail.com"},{"id":"4","titre":"Les Fourmis","date_emprunte":"6-24-2020","date_retour":"Pas encore","emprunteur":"maryem@gmail.com"},{"id":"5","titre":"Les Fourmis","date_emprunte":"6-08-2020","date_retour":"Pas encore","emprunteur":"ahmed@gmail.com"}]
      localStorage.setItem(key2, JSON.stringify(emprunte));
  
      localStorage.setItem("user","bibliothecaire")
      window.localStorage.getItem("user")
      expect(localStorage.getItem("user")).toBe("bibliothecaire")
  
      const mockUpdateLivre = jest.fn()
      const mockLivre = [{
            id:"1",
            titre: "Le Grand Meaulnes",
            auteur: "Victor Hugo",
            edition: 2015,
            NbExemplaires: 20,
            etat : "non archivé"
          }]
          const MockWithOneEmprunt = [
            {"id":"1",
            "titre":"Le Grand Meaulnes",
            "date_emprunte":"06-10-2020",
            "date_retour":"Pas encore",
            "emprunteur":"islem@gmail.com"},
        ]
  
          
          const history = createMemoryHistory({ initialEntries: ["/"] })
          const { debug,getByTestId ,getAllByText , getByLabelText} = render(
            <Router history={history}> 
        <Livre updateBook={mockUpdateLivre} tabBook={mockLivre} emprunteTab={MockWithOneEmprunt} />
        </Router>
  
      )
     
   // expect(getAllByText('Modifier Livre')).toBeTruthy() 
       const UpdateButton1 = getAllByText('Modifier')
      fireEvent.click(UpdateButton1[0]) 

      const TextField =  getByLabelText(/title/i);
      debug(TextField);
      expect(TextField).toBeTruthy();
      expect(TextField).toHaveAttribute("type","text") 
  
      const TextAuteur =  getByLabelText(/auteur/i);
      debug(TextAuteur);
      expect(TextAuteur).toBeTruthy();
      expect(TextAuteur).toHaveAttribute("type","text") 
  
    const UpdateButton2 = getByTestId('updateLivres')
      fireEvent.click(UpdateButton2)
  
      expect(mockUpdateLivre).toBeTruthy() 
      expect(mockUpdateLivre).toHaveBeenCalled()
      expect(mockUpdateLivre).toHaveBeenCalledTimes(1)  
  
  
      
    })
  
    }
  )
  