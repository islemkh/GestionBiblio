const adherents = [
{
    id:"1",
    nom: "islem",
    prenom: "khemiri",
    email: "islem@gmail.com",
    password:"123",
    statut : "banni"
},

{
    id:"2",
    nom: "emna",
    prenom: "amri",
    email: "amri.emna@gmail.com" ,
    password:"123",
    statut : "active"

},

{
    id:"3",
    nom: "maryem",
    prenom: "souyah",
    email: "maryem@gmail.com",
    password:"333",
    statut : "banni"

},

{
    id:"4",
    nom: "sana",
    prenom: "kthiri",
    email: "sana.kthiri@gmail.com",
    password:"123",
    statut : "active"

},{
    id:"5",
    nom: "ahmed",
    prenom: "cherif",
    email: "ahmed@gmail.com",
    password:"123",
    statut : "active"

}]

export  const addAdherents = function (nom, prenom,email,statut) {
    adherents.push({nom: nom, prenom: prenom , email : email, statut:statut});
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

 export const fetchAdUsernamePass = (username , pass)  => {
  //return tasks
  return adherents.find(ad => ad.email === username && ad.password === pass)
 //stanniiii
 //jebt lo5ra 8lot 5ater lo5ra include 5ali nfassr oss include yaani hata ken 7arf shih chyraja3 7aja
}

