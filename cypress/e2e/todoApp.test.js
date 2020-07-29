
describe("test e2e",()=>{
/*   it("first test ",()=>{
     expect(true).to.equal(true)
 })
 it("successfully loads",()=>{
    cy.visit("/")
 })
 it("successfully create account", () => {
    cy.visit("/signup")
    cy.wait(1000)
    cy.get('#firstName').clear().type("emna")
    cy.wait(1000)
    cy.get('#lastName').clear().type("amri")
    cy.wait(1000)
    cy.get('#email').clear().type("emna@gmail.com")
    cy.wait(1000)
    cy.get('#password').clear().type("1234")
    cy.wait(1000)
    cy.get('[data-testid=submit]').click()
    cy.get('a').click()
    cy.url().should("include", "/login")
  })
  it("successfully login", () => {
    cy.visit("/login")
    cy.wait(1000)
    cy.get('#email').clear().type("admin@gmail.com")
    cy.wait(1000)
    cy.get('#password').clear().type("admin")
    cy.wait(1000)
    cy.get('.MuiButton-label').click()
   })
   it("error login", () => {
    cy.visit("/login")
    cy.wait(1000)
    cy.get('#email').type("test@gmail.com")
    cy.wait(1000)
    cy.get('#password').type("1234")
    cy.wait(1000)
    cy.get('.MuiButton-label').click()
    cy.wait(1000)

   })
   it("test lien vers  sign up",()=>{
    cy.visit("/login")
    cy.wait(1000)
    cy.get('a').click()
    cy.url().should("include", "/signup")  
   }) 
  it("successfully login", () => {
    cy.visit("/login")
    cy.wait(1000)
    cy.get('#email').clear().type("admin@gmail.com")
    cy.wait(1000)
    cy.get('#password').clear().type("admin")
    cy.wait(1000)
    cy.get('.MuiButton-label').click()
   }) 
   
 it("sénario d'emprunter livre", () => {
  const key ="livresTab"
  const tabLivres = [{"id":"1","titre":"Le Grand Meaulnes","auteur":"Victor Hugo","edition":2015,"NbExemplaires":20,"etat":"non archivé"},{"id":"2","titre":"Le Rouge et le Noir","auteur":"Victor Del Litto ","edition":1997,"NbExemplaires":5,"etat":"archivé"},{"id":"3","titre":"Le Petit Prince","auteur":"Antoine de Saint-Exupéry","edition":2014,"NbExemplaires":10,"etat":"archivé"},{"id":"4","titre":"Lettres de mon moulin","auteur":"Alphonse Daudet","edition":2005,"NbExemplaires":12,"etat":"archivé"},{"id":"5","titre":"La Mère","auteur":"Pearl Buck","edition":1971,"NbExemplaires":30,"etat":"non archivé"},{"id":"6","titre":"Les Fourmis","auteur":"Bernard Werber","edition":2002,"NbExemplaires":8,"etat":"non archivé"},{"id":"7","titre":"Si c'est un homme","auteur":"Primo Levi","edition":2007,"NbExemplaires":6,"etat":"non archivé"}]
  localStorage.setItem(key, JSON.stringify(tabLivres));

  const key2 = "emprunteTab"
  const emprunte = [{"id":"1","titre":"Le Grand Meaulnes","date_emprunte":"06-10-2020","date_retour":"Pas encore","emprunteur":"islem@gmail.com"},{"id":"2","titre":"Les Fourmis","date_emprunte":"6-20-2020","date_retour":"Pas encore","emprunteur":"islem@gmail.com"},{"id":"3","titre":"Si c'est un homme","date_emprunte":"6-19-2020","date_retour":"Pas encore","emprunteur":"emna@gmail.com"},{"id":"4","titre":"Les Fourmis","date_emprunte":"6-24-2020","date_retour":"Pas encore","emprunteur":"maryem@gmail.com"},{"id":"5","titre":"Les Fourmis","date_emprunte":"6-08-2020","date_retour":"Pas encore","emprunteur":"ahmed@gmail.com"}]
  localStorage.setItem(key2, JSON.stringify(emprunte));
  cy.visit("/login")
  cy.wait(1000)
  cy.get('#email').clear().type("admin@gmail.com")
  cy.wait(1000)
  cy.get('#password').clear().type("admin")
  cy.wait(1000)
  cy.get('.MuiButton-label').click()

  cy.visit("/biblio/livre")
  cy.get('.btnAdd').click()
  cy.get('[name="title"]').clear().type("Le Petit Prince ")
  cy.get('[name="auteur"]').clear().type("auteur")
  cy.get('[name="edition"]').clear().type("(23/02/1999)")
  cy.get('[type="number"]').clear().type(10)
  cy.get('[data-testid=submit]').click()

   })  */

   it.only("scénario d’emprunt livre", () => {
    const key ="livresTab"
    const tabLivres = [{"id":"1","titre":"Le Grand Meaulnes","auteur":"Victor Hugo","edition":2015,"NbExemplaires":20,"etat":"non archivé"},{"id":"2","titre":"Le Rouge et le Noir","auteur":"Victor Del Litto ","edition":1997,"NbExemplaires":5,"etat":"archivé"},{"id":"3","titre":"Le Petit Prince","auteur":"Antoine de Saint-Exupéry","edition":2014,"NbExemplaires":10,"etat":"archivé"},{"id":"4","titre":"Lettres de mon moulin","auteur":"Alphonse Daudet","edition":2005,"NbExemplaires":12,"etat":"archivé"},{"id":"5","titre":"La Mère","auteur":"Pearl Buck","edition":1971,"NbExemplaires":30,"etat":"non archivé"},{"id":"6","titre":"Les Fourmis","auteur":"Bernard Werber","edition":2002,"NbExemplaires":8,"etat":"non archivé"},{"id":"7","titre":"Si c'est un homme","auteur":"Primo Levi","edition":2007,"NbExemplaires":6,"etat":"non archivé"}]
    localStorage.setItem(key, JSON.stringify(tabLivres));
    
    const key2 = "emprunteTab"
    const emprunte = [{"id":"1","titre":"Le Grand Meaulnes","date_emprunte":"06-10-2020","date_retour":"Pas encore","emprunteur":"islem@gmail.com"},{"id":"2","titre":"Les Fourmis","date_emprunte":"6-20-2020","date_retour":"Pas encore","emprunteur":"islem@gmail.com"},{"id":"3","titre":"Si c'est un homme","date_emprunte":"6-19-2020","date_retour":"Pas encore","emprunteur":"emna@gmail.com"},{"id":"4","titre":"Les Fourmis","date_emprunte":"6-24-2020","date_retour":"Pas encore","emprunteur":"maryem@gmail.com"},{"id":"5","titre":"Les Fourmis","date_emprunte":"6-08-2020","date_retour":"Pas encore","emprunteur":"ahmed@gmail.com"}]
    localStorage.setItem(key2, JSON.stringify(emprunte));

    const key3 ="adherentsTab"
    const adherent = [{"id":"1","nom":"Islem","prenom":"Khemiri","email":"islem@gmail.com","password":"123","statut":"active"},{"id":"2","nom":"Emna","prenom":"Amri","email":"emna@gmail.com","password":"123","statut":"active"},{"id":"3","nom":"Maryem","prenom":"Souyah","email":"maryem@gmail.com","password":"123","statut":"banni"},{"id":"4","nom":"Sana","prenom":"Kthiri","email":"sana@gmail.com","password":"123","statut":"active"},{"id":"5","nom":"ines","prenom":"ben mheni","email":"ines@gmail.com","password":"123","statut":"active"},{"id":"6","nom":"Ahmed","prenom":"Amri","email":"ahmed@gmail.com","password":"123","statut":"active"}]
     localStorage.setItem(key3, JSON.stringify(adherent)); 
     
    cy.visit("/login")
    cy.wait(1000)
    cy.get('#email').clear().type("ines@gmail.com")
    cy.wait(1000)
    cy.get('#password').clear().type("123")
    cy.wait(1000)
    cy.get('.MuiButton-label').click()
    cy.visit("/adherent/livre")
    cy.wait(2000)
    cy.get(':nth-child(1) > :nth-child(3) > div > .emprunter').click()
    cy.get('.MuiAlert-action > .MuiButtonBase-root').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(3) > div > .emprunter').click()
    cy.get('.MuiAlert-action > .MuiButtonBase-root').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > :nth-child(3) > div > .emprunter').click()
    cy.wait(2000)

    cy.get('.MuiAlert-action > .MuiButtonBase-root').click()
    cy.wait(2000)

    cy.get(':nth-child(1) > :nth-child(3) > div > .desarch').click()
    cy.get('.MuiAlert-action > .MuiButtonBase-root').click()
    cy.wait(2000)

    cy.get(':nth-child(3) > :nth-child(3) > div > .emprunter').click()
    cy.wait(2000)

    cy.get('.MuiAlert-action > .MuiButtonBase-root').click()
   
     }) 
   })