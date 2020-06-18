import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import {Link } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import HomeIcon from '@material-ui/icons/Home';

//localStorage.removeItem("token")


export const mainListItems = (
  <div>
     <Link to="/biblio" style={{ color: '#666666', textDecoration: 'none' }}>
     <ListItem button >
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Accueil" />
    </ListItem>
     </Link>
    <Link to="/" style={{ color: '#666666', textDecoration: 'none' }}>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="emprunter " />
    </ListItem>
    </Link>
    
     
    <Link to="/biblio/adherents" style={{ color: '#666666', textDecoration: 'none' }} replace>
      <ListItem button >
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Liste des adherents" /> 
    </ListItem>
    </Link>
    
    <Link to="/biblio/demandes" style={{ color: '#666666', textDecoration: 'none' }} replace>
      <ListItem button >
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Liste des demandes" /> 
    </ListItem>
    </Link>

    <Link to="/biblio/livre" style={{ color: '#666666', textDecoration: 'none' }} replace>
    <ListItem button>
      <ListItemIcon>
        <ImportContactsIcon />
      </ListItemIcon>
      <ListItemText primary="Liste des livres" />
    </ListItem>
    </Link>
    
    <Link to="/login" style={{ color: '#666666	', textDecoration: 'none' }}>
     <ListItem button >
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Déconnexion" />
    </ListItem>
     </Link>
   
  </div>

)