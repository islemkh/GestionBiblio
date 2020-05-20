const adherentsTab = [
{
    id:"1",
    nom: "islem",
    prenom: "khemiri",
    email: "islem@gmail.com",
    statut : "banni"
},

{
    id:"2",
    nom: "emna",
    prenom: "amri",
    email: "amri.emna@gmail.com" ,
    statut : "active"

},

{
    id:"3",
    nom: "maryem",
    prenom: "souyah",
    email: "maryem@gmail.com",
    statut : "banni"

},

{
    id:"4",
    nom: "sana",
    prenom: "kthiri",
    email: "sana.kthiri@gmail.com",
    statut : "active"

},{
    id:"5",
    nom: "ahmed",
    prenom: "cherif",
    email: "ahmed@gmail.com",
    statut : "active"

}]

export  const addAdherents = function (nom, prenom,email,statut) {
    adherentsTab.push({nom: nom, prenom: prenom , email : email, statut:statut});
  console.log('adherent added successfully !!');
  console.log('-------------------------------------------------');
}
 


export const getAdherent = function (id) { 
    for(var i = 0; i < adherentsTab.length; i++) {
      if (adherentsTab[i].id === id) {
        return Promise.resolve(adherentsTab[i]);
      }
    }
    return null;
  }
 // console.log(getAdherent("2"));

 function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
 export const fetchAdherents = async () => {
  return adherentsTab
}
