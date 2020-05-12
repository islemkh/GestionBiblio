const livres = [
    {
        id:"1",
        titre: "Le Grand Meaulnes",
        auteur: "Victor Hugo",
        edition: 2015,
        NbExemplaires: 20
      }, 
      {
        id:"2",
        titre: "Le Rouge et le Noir",
        auteur: "Victor Del Litto ",
        edition: 1997,
        NbExemplaires: 5
      }, 
      {
        id:"3",
        titre: "Le Petit Prince",
        auteur: "Antoine de Saint-Exupéry",
        edition: 2014,
        NbExemplaires: 10
      }, 
      {
        id:"4",
        titre: "Lettres de mon moulin",
        auteur: "Alphonse Daudet",
        edition: 2005,
        NbExemplaires: 12
      }, 
      {
        id:"5",
        titre: "La Mère",
        auteur: "Pearl Buck",
        edition: 1971,
        NbExemplaires: 30
      },
      {
        id:"6",
        titre: "Les Fourmis",
        auteur: "Bernard Werber",
        edition: 2002,
        NbExemplaires: 8
      },
       {
        id:"7",
        titre: "Si c'est un homme",
        auteur: "Primo Levi",
        edition: 2007,
        NbExemplaires: 6

      }
    ]
  export const getLivres = function (id) {
        for(var i = 0; i < livres.length; i++) {
        if ( livres[i].id === id) {
          return Promise.resolve(livres[i]);
        }
      }
      return null;
    }
console.log(getLivres("1"))  

  export   const setTitre = function (id,titre) {
      for (let i = 0; i < livres.length; i++) {
        if(livres[i].id === id){
          livres[i].titre = titre
        }
      }
      console.log('titre: ', titre)
    }
   
export  const addLivre = function (titre, auteur,edition,NbExemplaires) {
  livres.push({titre: titre, auteur: auteur ,edition: edition , NbExemplaires : NbExemplaires});
  console.log('livre added successfully !!');
  console.log('-------------------------------------------------');
} 
 //addLivre('Midnight inking', true);



 function delay(ms){
  return new Promise (resolve =>setTimeout(resolve,ms) )
}

export const fetchLivresById = async(IdLivre) => {
await delay(2000)
return livres.find(livre => livre.id === IdLivre)
}

export const fetchLivres = async searchValue => {
  await delay(2000)
  return livres.filter(livre => livre.titre.includes(searchValue))
} 

