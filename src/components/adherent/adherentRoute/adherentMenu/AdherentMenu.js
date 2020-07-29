import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';

//localStorage.removeItem("token")


export const AdherentMenu = (
  <div>
     <Link to="/adherent" style={{ color: '#666666', textDecoration: 'none' }} replace>
     <ListItem button >
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Accueil" />
    </ListItem>
     </Link>
    
    
    <Link to="/adherent/livre" style={{ color: '#666666', textDecoration: 'none' }} replace>
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