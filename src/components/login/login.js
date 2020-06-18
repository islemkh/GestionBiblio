import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from "react"
import {Redirect} from 'react-router-dom'
import {fetchAdUsernamePass} from '../../services/adherents.service'
import AlertMassage from "../alert/AlertMassage";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));



export default function Login(props){
const [email, setEmail] = useState('')
const [password,setPassword] = useState('')
const [LoggedIn, setLoggedIn] = useState(false)
const [adh, setadh] = useState(false)
const [conxErr ,setconxErr]=useState("")
const [banniErr ,setbanniErr]=useState(false)




  
  var tabAdherents = localStorage.getItem("adherentsTab");
  var listAdherents = JSON.parse(tabAdherents);


const submitForm = event => {
  event.preventDefault();
 // console.log({ email, password });
  //console.log(value);
  if(email === "admin@gmail.com" && password === "admin"){
    localStorage.setItem("user","bibliothecaire")
    setLoggedIn(true)
  }
  else {
    const resultat = fetchAdUsernamePass(listAdherents,email,password)
    if(!resultat){
      //mail et pass incorecte
       setconxErr({ msg: "email ou mot de passe incorrectes !!! Veuillez réessayer", key: Math.random() ,severity : "error"});

    }else{
      //email w pass d'adherent trouvée 
      if(resultat["statut"]==="banni"){
 //mais adh d'etat banni
        setbanniErr({ msg: "ce adherent est d'etat banni :( ", key: Math.random() ,severity : "warning"});
      }
      //success 
      else{
       localStorage.setItem("user","adherent")
       setadh(true)
      }
    }

  }
  

}
 
  const classes = useStyles();
  if (LoggedIn){
    return <Redirect to="/biblio"></Redirect> 
  }
  if (adh){
    return (    
      <Redirect to="/adherent"></Redirect> )
  }
 
  return (
      <>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}  noValidate onSubmit={submitForm}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={e => setEmail(e.target.value)}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          {conxErr ? <AlertMassage key={conxErr.key} message={conxErr.msg} severity={conxErr.severity}/> : null}
          {banniErr ? <AlertMassage key={banniErr.key} message={banniErr.msg} severity={banniErr.severity}/> : null}

          <Grid container>
            <Grid item>
              <Link to="/login">
                {"Don't have an account? Sign Up"}  
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
    </>
     
      
      )
    
      }