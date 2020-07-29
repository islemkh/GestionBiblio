const{
    fetchEmpruntes ,
    emprunter,
    retourner,
    majNbE,
    nbEmprunte,
    titreEmprunte,
    userEmprunte,
    retardF,
    enCoursF
    } = require("../services/emprunte.service.js")
    
describe("test emprunter service ", () => { 
     test("test fetch emprunter", () => { 
        const empruntes = [
            {
                id:"1",
                titre: "Le Grand Meaulnes",
                date_emprunte: "06-10-2020",
                date_retour: "Pas encore",
                emprunteur: "islem@gmail.com",
                
              }, 
              {
                id:"2",
                titre: "Les Fourmis",
                date_emprunte: "6-20-2020",
                date_retour: "Pas encore",
                emprunteur: "islem@gmail.com",
              }, 
              {
                id:"3",
                titre: "Si c'est un homme",
                date_emprunte: "6-19-2020",
                date_retour: "Pas encore",
                emprunteur: "emna@gmail.com",
              }, 
              {
                id:"4",
                titre: "Les Fourmis",
                date_emprunte: "6-24-2020",
                date_retour: "Pas encore",
                emprunteur: "maryem@gmail.com",
              },
              {
                id:"5",
                titre: "Les Fourmis",
                date_emprunte: "6-08-2020",
                date_retour: "Pas encore",
                emprunteur: "ahmed@gmail.com",
              }
            ]
        expect(fetchEmpruntes()).toEqual(empruntes)
    }) 

    test("test emprunter function",()=>{
        const tabEmp = [
            {
                id:"1",
                titre: "Le Grand Meaulnes",
                date_emprunte: "06-10-2020",
                date_retour: "Pas encore",
                emprunteur: "islem@gmail.com",                   
              }, 
              {
                id:"2",
                titre: "Les Fourmis",
                date_emprunte: "6-20-2020",
                date_retour: "Pas encore",
                emprunteur: "islem@gmail.com",
              }
            ]  
        const  tabBook=[{
        id:"1",
        titre: "Le Grand Meaulnes",
        auteur: "Victor Hugo",
        edition: 2015,
        NbExemplaires: 20,
        etat : "non archivé"
              }];
            
          const idE = "1" ;
          const titre = "Le Grand Meaulnes" ;
          const user ="islem@gmail.com"
           let expected =[{
            id:"1",
            titre: "Le Grand Meaulnes",
            auteur: "Victor Hugo",
            edition: 2015,
            NbExemplaires: 19,
            etat : "non archivé"
                  }];
           expect(emprunter(tabBook,idE ,tabEmp,titre, user)).toEqual(expected);  
      }) 

      test("test retourner function " ,()=>{
        const tabEmp = [
            {
                id:"1",
                titre: "Le Grand Meaulnes",
                date_emprunte: "06-10-2020",
                date_retour: "Pas encore",
                emprunteur: "islem@gmail.com",                   
              }, 
              {
                id:"2",
                titre: "Les Fourmis",
                date_emprunte: "6-20-2020",
                date_retour: "Pas encore",
                emprunteur: "islem@gmail.com",
              }
            ]
            const expected = [
                {
                    id:"1",
                    titre: "Le Grand Meaulnes",
                    date_emprunte: "06-10-2020",
                    date_retour: "7-29-2020",
                    emprunteur: "islem@gmail.com",                   
                  }, 
                  {
                    id:"2",
                    titre: "Les Fourmis",
                    date_emprunte: "6-20-2020",
                    date_retour: "Pas encore",
                    emprunteur: "islem@gmail.com",
                  }
                ]
                const titre="Le Grand Meaulnes"
                const user ="islem@gmail.com"
        expect(retourner(tabEmp,titre, user)).toEqual(expected);  
      })

      test("test mise a jour nbre d'exemplaire apres retourner  " ,()=>{
        const  tabBook=[{
            id:"1",
            titre: "Le Grand Meaulnes",
            auteur: "Victor Hugo",
            edition: 2015,
            NbExemplaires: 20,
            etat : "non archivé"
                  }];
            const expected = [{
                id:"1",
                titre: "Le Grand Meaulnes",
                auteur: "Victor Hugo",
                edition: 2015,
                NbExemplaires: 21,
                etat : "non archivé"
                      }]
                const idE="1"
        expect(majNbE(tabBook,idE)).toEqual(expected);  
      })
      test("calculer le nombre des livres empruntés par le user saisis" ,()=>{  
        const tabEmp = [
            {
                id:"1",
                titre: "Le Grand Meaulnes",
                date_emprunte: "06-10-2020",
                date_retour: "Pas encore",
                emprunteur: "islem@gmail.com",                   
              }, 
              {
                id:"2",
                titre: "Les Fourmis",
                date_emprunte: "6-20-2020",
                date_retour: "Pas encore",
                emprunteur: "islem@gmail.com",
              }
            ]  
        const user="islem@gmail.com"
        expect(nbEmprunte(tabEmp, user)).toEqual(2);  
      })

      test("verifier si le livre avec le titre saisis est emprunté par l'utilisateur saisis" ,()=>{  
        const tabEmp = [
            {
                id:"1",
                titre: "Le Grand Meaulnes",
                date_emprunte: "06-10-2020",
                date_retour: "Pas encore",
                emprunteur: "islem@gmail.com",                   
              }, 
              {
                id:"2",
                titre: "Les Fourmis",
                date_emprunte: "6-20-2020",
                date_retour: "Pas encore",
                emprunteur: "islem@gmail.com",
              }
            ]  
        const user="islem@gmail.com"
        const titre ="Le Grand Meaulnes"
        expect(titreEmprunte(tabEmp,titre, user)).toEqual(true);  
      })
      test("extraire tous les livres empruntés par le user saisis" ,()=>{  
        const tabEmp = [
            {
                id:"1",
                titre: "Le Grand Meaulnes",
                date_emprunte: "06-10-2020",
                date_retour: "Pas encore",
                emprunteur: "islem@gmail.com",                   
              }, 
              {
                id:"2",
                titre: "Les Fourmis",
                date_emprunte: "6-20-2020",
                date_retour: "Pas encore",
                emprunteur: "emna@gmail.com",
              }
            ]  
           const expected= [
            {
                id:"2",
                titre: "Les Fourmis",
                date_emprunte: "6-20-2020",
                date_retour: "Pas encore",
                emprunteur: "emna@gmail.com",
              } ]    
             const user="emna@gmail.com"
        expect(userEmprunte(tabEmp, user)).toEqual(expected);  
      })

      test(" trouver les livres en retard" ,()=>{  
        const tabEmp = [
            {
                id:"1",
                titre: "Le Grand Meaulnes",
                date_emprunte: "07-20-2020",
                date_retour: "Pas encore",
                emprunteur: "islem@gmail.com",                   
              }, 
              {
                id:"2",
                titre: "Les Fourmis",
                date_emprunte: "6-20-2020",
                date_retour: "Pas encore",
                emprunteur: "emna@gmail.com",
              }
            ]  
           const expected= [
            {
                id:"2",
                titre: "Les Fourmis",
                date_emprunte: "6-20-2020",
                date_retour: "Pas encore",
                emprunteur: "emna@gmail.com",
              } ]    
        expect(retardF(tabEmp)).toEqual(expected);  
      })



      test("les livres en cours " ,()=>{  
        const tabEmp = [
            {
                id:"1",
                titre: "Le Grand Meaulnes",
                date_emprunte: "07-20-2020",
                date_retour: "Pas encore",
                emprunteur: "islem@gmail.com",                   
              }, 
              {
                id:"2",
                titre: "Les Fourmis",
                date_emprunte: "6-20-2020",
                date_retour: "Pas encore",
                emprunteur: "emna@gmail.com",
              }
            ]  
           const expected= [
            {
                id:"1",
                titre: "Le Grand Meaulnes",
                date_emprunte: "07-20-2020",
                date_retour: "Pas encore",
                emprunteur: "islem@gmail.com"
              } ]    
        expect(enCoursF(tabEmp)).toEqual(expected);  
      })
})