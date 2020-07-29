const adherentsTab = [{
  id:"1",
    nom: "Islem",
    prenom: "Khemiri",
    email: "islem@gmail.com",
    password:"123",
    statut : "active"
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
    password:"123",
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
    nom: "ines",
    prenom: "ben mheni",
    email: "ines@gmail.com",
    password:"123",
    statut : "active"

},{
  id:"6",
  nom: "Ahmed",
  prenom: "Amri",
  email: "ahmed@gmail.com",
  password:"123",
  statut : "active"

}]

//ajout sta3melneha ki nacceptiw demande
export  const addAdherents = function (tab,nom, prenom,email,password,statut) {
    return tab.push({id:(tab.length+1).toString(),nom: nom, prenom: prenom , email : email, password:password, statut:statut});
  
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
      }

    }
    //return null;
          return (tab1);

}

//sta3melneha f details
export const getAdherentById = function (tab,id) { 
    for(var i = 0; i < tab.length; i++) {
      if (tab[i].id === id) {
        return (tab[i]);
      }
    }
    return null;
  }

 export const fetchAdherents = async () => {
  return adherentsTab
}
//pour extraire l mot de passe et lmail de user besh najmou na3mlou login
 export const fetchAdUsernamePass = function (tab,username , pass) {
  return tab.find(ad => ad.email === username && ad.password === pass)
}

//sta3malneha pour mettre a jour le tableau eli fih les demandes
export const effacerAdherentById = function (tab,id) { 
  for(var i = 0; i < tab.length; i++) {
    if (tab[i].id === id) {
        tab.splice(i,1);
      return (tab);
    }
  }
  return null;
}

