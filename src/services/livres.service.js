const livres = [
    {
        id:"1",
        titre: "Le Grand Meaulnes",
        auteur: "Victor Hugo",
        edition: 2015,
        NbExemplaires: 20,
        etat : "non archivé"
      }, 
      {
        id:"2",
        titre: "Le Rouge et le Noir",
        auteur: "Victor Del Litto ",
        edition: 1997,
        NbExemplaires: 5,
        etat : "archivé"
      }, 
      {
        id:"3",
        titre: "Le Petit Prince",
        auteur: "Antoine de Saint-Exupéry",
        edition: 2014,
        NbExemplaires: 10,
        etat : "archivé"
      }, 
      {
        id:"4",
        titre: "Lettres de mon moulin",
        auteur: "Alphonse Daudet",
        edition: 2005,
        NbExemplaires: 12,
        etat : "archivé"
      }, 
      {
        id:"5",
        titre: "La Mère",
        auteur: "Pearl Buck",
        edition: 1971,
        NbExemplaires: 30,
        etat : "non archivé"
      },
      {
        id:"6",
        titre: "Les Fourmis",
        auteur: "Bernard Werber",
        edition: 2002,
        NbExemplaires: 8,
        etat : "non archivé"
      },
       {
        id:"7",
        titre: "Si c'est un homme",
        auteur: "Primo Levi",
        edition: 2007,
        NbExemplaires: 6,
        etat : "non archivé"

      }
    ]
  export const getLivresById = function (tab,id) {
        for(var i = 0; i < tab.length; i++) {
        if ( tab[i].id === id) {
          return (tab[i]);
        }
      }
      return null;
    }


  export   const setTitre = function (id,titre) {
      for (let i = 0; i < livres.length; i++) {
        if(livres[i].id === id){
          livres[i].titre = titre
        }
      }
      console.log('titre: ', titre)
    }
   
export  const addLivre = function (tab,titre, auteur,edition,NbExemplaires) {
  
  tab.push({id: (tab.length+1).toString() ,titre: titre, auteur: auteur ,edition: edition , NbExemplaires : NbExemplaires,etat : "non archivé" });
  console.log('livre added successfully !!');
  console.log('-------------------------------------------------');
} 
 //addLivre('Midnight inking', true);

 export  const emprunter = function (tabBook,idE ,tabEmp,titre, date_emprunte, date_retour, user) {
  for(var i = 0; i < tabBook.length; i++) {
    if (tabBook[i].id === idE) {

      tabBook[i].NbExemplaires=-1;  
      return (tabBook);   
    }
  }
  tabEmp.push({id: (tabEmp.length).toString() ,titre: titre, date_emprunte: date_emprunte ,date_retour: date_retour,user:user });
  console.log('livre emprunter successfully !!');
  console.log('-------------------------------------------------');
} 

 function delay(ms){
  return new Promise (resolve =>setTimeout(resolve,ms) )
}

export const fetchLivresById = async(IdLivre) => {
await delay(2000)
return livres.find(livre => livre.id === IdLivre)
}

export const searchLivres = async (tab,searchValue) => {
  await delay(2000)
  return tab.filter(livre => livre.titre.toLowerCase().includes(searchValue) ||livre.auteur.toLowerCase().includes(searchValue))
} 

export const fetchLivre = async () => {
  return livres
}

export  const archiver = function (tab,idA) {
  
  for(var i = 0; i < tab.length; i++) {
    if (tab[i].id === idA) {
      if(tab[i].etat==="archivé"){
        tab[i].etat="non archivé";  
      return (tab[i]);
      }
      else{
       tab[i].etat="archivé";  
      return (tab[i]);
      }
    }
  }
    return null;
    
}

export  const updateTab = function (tab1,tab2) {
  for(var i = 0; i < tab1.length; i++) {
    if (tab1[i].id === tab2.id) {
       tab1[i]=tab2;  
      return (tab1);
      }
    }
    return null;
}