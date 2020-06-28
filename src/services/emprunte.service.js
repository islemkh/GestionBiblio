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

    export const fetchEmpruntes = async () => {
        return empruntes
      }

      export  const emprunter = function (tabBook,idE ,tabEmp,titre, user) {
        var today = new Date();
        var date_emprunte = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
        var date_retour = "Pas encore";
        tabEmp.push({id: (tabEmp.length+1).toString() ,titre: titre, date_emprunte: date_emprunte ,date_retour: date_retour,emprunteur:user });
        console.log('livre emprunter successfully !!');
        console.log('-------------------------------------------------');
        for(var i = 0; i < tabBook.length; i++) {
          if (tabBook[i].id === idE) {
      
            tabBook[i].NbExemplaires-=1;  
            return (tabBook);   
          } 
        }
        
      } 

      export  const retourner = function (tabEmp,titre, user) {
        var today = new Date();

        var retour = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
        retour=retour.toString()
        for(var i = 0; i < tabEmp.length; i++) {
            if (tabEmp[i].emprunteur === user && tabEmp[i].titre === titre) {
              tabEmp[i].date_retour= retour    
            } 
          } 
          return (tabEmp)
          } 
// MAJ le nbre d'exemplaire apres le retour du book
      export  const majNbE = function (tabBook,idE) {
       
        for(var j = 0; j < tabBook.length; j++) {
          if (tabBook[j].id === idE) {
      
            tabBook[j].NbExemplaires+=1;  
            return (tabBook);   
          } 
        }  
      } 

//calculer le nombre des livres empruntés par le user saisis
//besh kol user mayempruntish akther men zouz ktob
      export  const nbEmprunte = function (tabEmp, user) {
        var nbBook=0
        for(var i = 0; i < tabEmp.length; i++) {
            if (tabEmp[i].emprunteur === user && tabEmp[i].date_retour==="Pas encore" ) {
             nbBook +=1; 
                
            } 
          }
          return (nbBook);  
      } 

//verifier si le livre avec le titre saisis est emprunté par l'utilisateur saisis 
//sta3melneha besh ken l9ah y7ot retourner f blaset emprunter
      export  const titreEmprunte = function (tabEmp,titre, user) {
        var trouvé= false
        for(var i = 0; i < tabEmp.length; i++) {
            if (tabEmp[i].emprunteur === user && tabEmp[i].titre === titre && tabEmp[i].date_retour==="Pas encore" ) {
             trouvé = true;  
            } 
          }
          return (trouvé);  
      } 

//extraire tous les livres empruntés par le user saisis
//sta3melneha f details adherent
      export  const userEmprunte = function (tabEmp, user) {
        
        var tab= []
        for(var i = 0; i < tabEmp.length; i++) {
            if (tabEmp[i].emprunteur === user ) {
              tab.push (tabEmp[i])
              
            } 
          }
          return (tab);  
      }

      // trouver les livres en retard
      export  const retardF = function (tabEmp) {

        var today = new Date(Date.now());
        var tabR=[]
        for(var i = 0; i < tabEmp.length; i++) {
            if (tabEmp[i].date_retour==="Pas encore") {
              var emprunteD = new Date(tabEmp[i].date_emprunte);
              console.log(emprunteD)
              var timeDiff = Math.abs(today.getTime() - emprunteD.getTime());
              var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
             
              if (diffDays>15){
                tabR.push(tabEmp[i])
              }
            } 
          }
          console.log(tabR)
       return tabR
      } 
      //les livres en cours
      export  const enCoursF = function (tabEmp) {

        var today = new Date(Date.now());
        var tabR=[]
        for(var i = 0; i < tabEmp.length; i++) {
            if (tabEmp[i].date_retour==="Pas encore") {
              var emprunteD = new Date(tabEmp[i].date_emprunte);
              console.log(emprunteD)
              var timeDiff = Math.abs(today.getTime() - emprunteD.getTime());
              var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
             
              if (diffDays<15){
                tabR.push(tabEmp[i])
              }
            } 
          }
          console.log(tabR)
       return tabR
      } 