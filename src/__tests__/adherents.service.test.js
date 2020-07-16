const{
    addAdherents ,
    fetchAdUsernamePass,
    bannir,
    updateTab,
    getAdherentById,
    effacerAdherentById
    } = require("../services/adherents.service.js")

    describe("test add adherents ",()=>{
        test("add with success",()=>{
            const  tab=[{
                id:"1",
                  nom: "Islem",
                  prenom: "Khemiri",
                  email: "islem@gmail.com",
                  password:"123",
                  statut : "active"}];

              const nom ="Ahmed" ;
              const prenom = "Amri" ;
              const email = "ahmed@gmail.com" ;
              const password = "123" ;
              const statut = "active" ;
            let expected = 2
            expect(addAdherents(tab,nom,prenom,email,password,statut)).toEqual(expected);  
          })  
        /*   test("erreur nom not defined ",()=>{
            const  tab=[{
                id:"1",
                  nom: "Islem",
                  prenom: "Khemiri",
                  email: "islem@gmail.com",
                  password:"123",
                  statut : "active"}];
              const prenom = "Amri" ;
              const email = "ahmed@gmail.com" ;
              const password = "123" ;
              const statut = "active" ;
            let expected = 2
            expect(()=>addAdherents(tab,nom,prenom,email,password,statut)).toThrowError(/err nom is not defined/gi);  
          })  */
          test("add with tab vide",()=>{
            const  tab=[];
              const nom ="Ahmed" ;
              const prenom = "Amri" ;
              const email = "ahmed@gmail.com" ;
              const password = "123" ;
              const statut = "active" ;
            let expected = 1
            expect(addAdherents(tab,nom,prenom,email,password,statut)).toEqual(expected);  
          }) 
    })
    describe("test function fetchAdUsernamePass ",()=>{
        test("test email et password existe",()=>{
            const  tab=[{
                  id:"1",
                  nom: "Islem",
                  prenom: "Khemiri",
                  email: "islem@gmail.com",
                  password:"123",
                  statut : "active"},{
                    id:"6",
                    nom: "Ahmed",
                    prenom: "Amri",
                    email: "ahmed@gmail.com",
                    password:"123",
                    statut : "active"
                  
                  }];
              const username = "islem@gmail.com" ;
              const pass = "123" ;
               let expected = {"email": "islem@gmail.com", "id": "1", "nom": "Islem", "password": "123", "prenom": "Khemiri", "statut": "active"}
               expect(fetchAdUsernamePass(tab,username , pass)).toEqual(expected);  
          }) 
          /* test("test email et password n'existe pas",()=>{
            const  tab=[{
                  id:"1",
                  nom: "Islem",
                  prenom: "Khemiri",
                  email: "islem@gmail.com",
                  password:"123",
                  statut : "active" }];
              const username = "emna@gmail.com" ;
              const pass = "123" ;
               expect(()=> fetchAdUsernamePass(tab,username , pass)).toThrowError(/email et pass undefined/gi);  
          })  */
    })
    describe("test function get user by id ",()=>{
          test("test get adherent",()=>{
            const  tab=[{
                  id:"1",
                  nom: "Islem",
                  prenom: "Khemiri",
                  email: "islem@gmail.com",
                  password:"123",
                  statut : "active" }];
              const id = "1";
             let expected = {
                id:"1",
                nom: "Islem",
                prenom: "Khemiri",
                email: "islem@gmail.com",
                password:"123",
                statut : "active" }
               expect(getAdherentById(tab,id)).toEqual(expected)  
          }) 
          /* test("test get adherent id n'existe pas",()=>{
            const  tab=[{
                  id:"1",
                  nom: "Islem",
                  prenom: "Khemiri",
                  email: "islem@gmail.com",
                  password:"123",
                  statut : "active" }];
              const id = "3";
               expect(getAdherentById(tab,id)).toThrowError(/id undefined/gi);  
          })  */
    })

   describe("test function banir ",()=>{
          test("test bannir",()=>{
            const  tab=[{
                  id:"1",
                  nom: "Islem",
                  prenom: "Khemiri",
                  email: "islem@gmail.com",
                  password:"123",
                  statut : "active" }];
              const idB = "1";
             let expected = {
       //"statut": "active",
        "email": "islem@gmail.com",
       "id": "1",
       "nom": "Islem",
       "password": "123",
       "prenom": "Khemiri",
       "statut": "banni"}
               expect(bannir(tab,idB)).toEqual(expected)  
          }) 
         
    })
    describe("test function update ",()=>{
        test("test update return null",()=>{
            const  tab1=[{
                id:"1",
                nom: "Islem",
                prenom: "Khemiri",
                email: "islem@gmail.com",
                password:"123",
                statut : "bannir" }];
                const  tab2=[{
                id:"1",
                nom: "Islem",
                prenom: "Khemiri",
                email: "islem@gmail.com",
                password:"123",
                statut : "débannir" }];
            expect(updateTab(tab1,tab2)).toEqual(tab1)  
        })
         
    })

    describe("test function effacerAdherentById ",()=>{
        test("test effacerAdherentById tab vide",()=>{
            const  tab=[{
                  id:"1",
                  nom: "Islem",
                  prenom: "Khemiri",
                  email: "islem@gmail.com",
                  password:"123",statut : "active"}];
                const id = "1" ;
               let expected = []
               expect(effacerAdherentById(tab,id)).toEqual(expected);  
          }) 
        })