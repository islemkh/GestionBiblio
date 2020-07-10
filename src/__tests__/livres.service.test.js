const{
    getLivresById ,
    searchLivres,
    addLivre,
    archiver,
    updateTab
    } = require("../services/livres.service")

    describe("test add livre ",()=>{
        test("add with success",()=>{
            const  tab=[{
                id:"1",
                titre: "Le Grand Meaulnes",
                auteur: "Victor Hugo",
                edition: 2015,
                NbExemplaires: 20,
                etat : "non archivé"
              }];

              const titre ="Le Rouge et le Noir" ;
              const auteur = "Victor Del Litto" ;
              const edition = " (01/01/1997)" ;
              const NbExemplaires = "10" ;
            let expected = 2
            expect(addLivre(tab,titre, auteur,edition,NbExemplaires)).toEqual(expected);  
          })  
           test("add with tab vide",()=>{
            const  tab=[];
            const titre ="Le Rouge et le Noir" ;
            const auteur = "Victor Del Litto" ;
            const edition = " (01/01/1997)" ;
            const NbExemplaires = "10" ;
            let expected = 1 ;
            expect(addLivre(tab,titre, auteur,edition,NbExemplaires)).toEqual(expected);  
          })  
    })

    describe("test function get livre by id ",()=>{
        test("test get livre",()=>{
            const  tab=[{
                id:"1",
                titre: "Le Grand Meaulnes",
                auteur: "Victor Hugo",
                edition: 2015,
                NbExemplaires: 20,
                etat : "non archivé"
              }];
            const id = "1";
           let expected = {
            id:"1",
            titre: "Le Grand Meaulnes",
            auteur: "Victor Hugo",
            edition: 2015,
            NbExemplaires: 20,
            etat : "non archivé"
          }
             expect(getLivresById(tab,id)).toEqual(expected)  
        })    
  })

  describe("test function archiver ",()=>{
    test("test archiver success",()=>{
        const  tab=[{
            id:"1",
            titre: "Le Grand Meaulnes",
            auteur: "Victor Hugo",
            edition: 2015,
            NbExemplaires: 20,
            etat : "non archivé"
          }];
          let expected = {
            id:"1",
            titre: "Le Grand Meaulnes",
            auteur: "Victor Hugo",
            edition: 2015,
            NbExemplaires: 20,
            etat : "archivé"
          };
          const idA ="1"
        expect(archiver(tab,idA)).toEqual(expected)  
    })
})
describe("test function update ",()=>{
    test("test update return null",()=>{
        const  tab1=[{
            id:"1",
            titre: "Le Grand Meaulnes",
            auteur: "Victor Hugo",
            edition: 2015,
            NbExemplaires: 20,
            etat : "non archivé"
          }];

           const  tab2=[{
            id:"1",
            titre: "Le Grand Meaulnes",
            auteur: "Victor ",
            edition: 2015,
            NbExemplaires: 20,
            etat : "non archivé"
          }];

        expect(updateTab(tab1,tab2)).toEqual(null)  
    })
})

