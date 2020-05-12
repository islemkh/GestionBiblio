const adherents = [
{
    id:"1",
    nom: "islem",
    prenom: "khemiri",
    dateNaissance: "23/12/1995",
    statut : "banni"
},

{
    id:"2",
    nom: "emna",
    prenom: "amri",
    dateNaissance: "23/12/1996" ,
    statut : "active"

},

{
    id:"3",
    nom: "maryem",
    prenom: "souyah",
    dateNaissance: "12/12/1996",
    statut : "banni"

},

{
    id:"4",
    nom: "sana",
    prenom: "kthiri",
    dateNaissance: "14/06/1995",
    statut : "active"

},{
    id:"5",
    nom: "ahmed",
    prenom: "cherif",
    dateNaissance: "12/03/1996",
    statut : "active"

}]

export  const addAdherents = function (nom, prenom,dateNaissance,statut) {
    adherents.push({nom: nom, prenom: prenom , dateNaissance : dateNaissance, statut:statut});
  console.log('adherent added successfully !!');
  console.log('-------------------------------------------------');
}
 

export const getAdherent = function (id) { 
    for(var i = 0; i < adherents.length; i++) {
      if (adherents[i].id === id) {
        return Promise.resolve(adherents[i]);
      }
    }
    return null;
  }
 // console.log(getAdherent("2"));


