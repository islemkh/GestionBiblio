
const adherentsTab = [
{
    id:"1",
    nom: "Islem",
    prenom: "Khemiri",
    email: "islem@gmail.com",
    password:"123",
    statut : "banni"
},

{
    id:"2",
    nom: "Emna",
    prenom: "Amri",
    email: "emna@gmail.com" ,
    password:"123",
    statut : "active"

},

{
    id:"3",
    nom: "Maryem",
    prenom: "Souyah",
    email: "maryem@gmail.com",
    password:"333",
    statut : "banni"

},

{
    id:"4",
    nom: "Sana",
    prenom: "Kthiri",
    email: "sana@gmail.com",
    password:"123",
    statut : "active"

},{
    id:"5",
    nom: "Ahmed",
    prenom: "Cherif",
    email: "ahmed@gmail.com",
    password:"123",
    statut : "active"

}]

export  const addAdherents = function (tab,nom, prenom,email,password,statut) {
    tab.push({id:(tab.length+1).toString(),nom: nom, prenom: prenom , email : email, password:password, statut:statut});
  console.log('adherent added successfully !!');
  console.log('-------------------------------------------------');
}
 
export  const bannir = function (tab,idB) {
  for(var i = 0; i < tab.length; i++) {
    if (tab[i].id === idB) {
      if(tab[i].statut==="active"){
        tab[i].statut="banni";  
      return (tab[i]);
      }
      else{
       tab[i].statut="active";  
      return (tab[i]);
      }
    }
  }
    return null;
}

export  const updateTab = function (tab1,tab2) {
  for(var i = 0; i < tab1.length; i++) {
    if (tab1[i].nom === tab2.nom) {
       tab1[i]=tab2;  
      return (tab1);
      }
    }
    return null;
}
export const getAdherentById = function (tab,id) { 
    for(var i = 0; i < tab.length; i++) {
      if (tab[i].id === id) {
        return (tab[i]);
      }
    }
    return null;
  }
 // console.log(getAdherent("2"));


 export const fetchAdherents = async () => {
  return adherentsTab
}
 export const fetchAdUsernamePass = (tab,username , pass)  => {
  //return tasks
  return tab.find(ad => ad.email === username && ad.password === pass)
 //stanniiii
 //jebt lo5ra 8lot 5ater lo5ra include 5ali nfassr oss include yaani hata ken 7arf shih chyraja3 7aja
}

