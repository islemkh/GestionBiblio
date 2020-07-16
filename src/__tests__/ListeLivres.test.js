import React from 'react';
import { render,act } from '@testing-library/react';
import PageLivre from '../components/listeLivres/ListeLivres';
import { createMemoryHistory } from "history"
import { Router } from 'react-router-dom';
import user from '@testing-library/user-event'


describe("test livres list", () => {
  test("should render an array of tasks list",  () => {
    const key ="livresTab"
    const tabLivres = [{"id":"1","titre":"Le Grand Meaulnes","auteur":"Victor Hugo","edition":2015,"NbExemplaires":20,"etat":"non archivé"},{"id":"2","titre":"Le Rouge et le Noir","auteur":"Victor Del Litto ","edition":1997,"NbExemplaires":5,"etat":"archivé"},{"id":"3","titre":"Le Petit Prince","auteur":"Antoine de Saint-Exupéry","edition":2014,"NbExemplaires":10,"etat":"archivé"},{"id":"4","titre":"Lettres de mon moulin","auteur":"Alphonse Daudet","edition":2005,"NbExemplaires":12,"etat":"archivé"},{"id":"5","titre":"La Mère","auteur":"Pearl Buck","edition":1971,"NbExemplaires":30,"etat":"non archivé"},{"id":"6","titre":"Les Fourmis","auteur":"Bernard Werber","edition":2002,"NbExemplaires":8,"etat":"non archivé"},{"id":"7","titre":"Si c'est un homme","auteur":"Primo Levi","edition":2007,"NbExemplaires":6,"etat":"non archivé"}]
    localStorage.setItem(key, JSON.stringify(tabLivres)); 
    expect(localStorage.getItem("livresTab")).toBe(JSON.stringify(tabLivres))
    const key2 = "emprunteTab"
    const emprunte = [{"id":"1","titre":"Le Grand Meaulnes","date_emprunte":"06-10-2020","date_retour":"Pas encore","emprunteur":"islem@gmail.com"},{"id":"2","titre":"Les Fourmis","date_emprunte":"6-20-2020","date_retour":"Pas encore","emprunteur":"islem@gmail.com"},{"id":"3","titre":"Si c'est un homme","date_emprunte":"6-19-2020","date_retour":"Pas encore","emprunteur":"emna@gmail.com"},{"id":"4","titre":"Les Fourmis","date_emprunte":"6-24-2020","date_retour":"Pas encore","emprunteur":"maryem@gmail.com"},{"id":"5","titre":"Les Fourmis","date_emprunte":"6-08-2020","date_retour":"Pas encore","emprunteur":"ahmed@gmail.com"}]
    localStorage.setItem(key2, JSON.stringify(emprunte));

    localStorage.setItem("user","bibliothecaire")
    
    const mockUpdateLivre = jest.fn(()=>Promise.resolve())
    const mockLivre = [{
          id:"1",
          titre: "Le Grand Meaulnes",
          auteur: "Victor Hugo",
          edition: 2015,
          NbExemplaires: 20,
          etat : "non archivé"
        }]
        const history = createMemoryHistory({ initialEntries: ["/"] })
        const { getByTestId } = render(
          <Router history={history}> 
      <PageLivre updateBook={mockUpdateLivre} livres={mockLivre} />
      </Router>

    )
    const UpdateButton1 = getByTestId("update1")
    user.click(UpdateButton1)
    const UpdateButton = getByTestId("updateLivres")
    user.click(UpdateButton)
    expect(mockUpdateLivre).toHaveBeenCalled()
    expect(mockUpdateLivre).toHaveBeenCalledTimes(1)
  })
  }
  )