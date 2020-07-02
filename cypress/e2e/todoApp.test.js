describe("test e2e",()=>{
 /* it("first test ",()=>{
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
   */
  it("successfully login", () => {
    cy.visit("/login")
    cy.wait(1000)
    cy.get('#email').clear().type("admin@gmail.com")
    cy.wait(1000)
    cy.get('#password').clear().type("admin")
    cy.wait(1000)
    cy.get('.MuiButton-label').click()
   }) 
   
 it.only("successfully add livre", () => {
    cy.visit("/adherent")
   }) 
   
 /* cy.get("[data-testid=submit]").click()
   cy.get('[aria-label="Title"]').should("have.value", "learn")
   cy.get('[aria-label="duration"]').should("have.value", "0")
   cy.get(".task:last-child .title" ) 
     .should("have.value", "learn react (3h)")
  }) */

})