import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { useState} from "react"
import {Link ,BrowserRouter} from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


export default function SignUp() {
  var expressionReguliere = /^([a-z]|[0-9])+@([a-z]|[0-9])+\.[a-z]{2,6}$/;
const [firstName, setFirstName] = useState('')
const [lastName,setLastName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [alert ,setAlert]=useState("")

 const submitFormSignUp = event => {
  event.preventDefault();
   
 }
// nsajlou f localStorage
 var existingEntries = JSON.parse(localStorage.getItem("demandes"));
    if(existingEntries === null) existingEntries = [];
    const id=(existingEntries.length).toString();
    var entry = {
        "id":id,
        "firstName": firstName,
        "lastName": lastName,
        "email":email,
        "password" : password
    };
    
  const addDemande = () => { 
    
      //Handler for the Submit onPress
      if (firstName != '') {
        //Check for the Name TextInput
        if (lastName != '') {
          if (email != ''){
            if (password != '') {
              existingEntries.push(entry);
              localStorage.setItem("demandes", JSON.stringify(existingEntries));
              setAlert({ msg: "Your inscription have been saved successfully, u have to wait for the admin to accept ur demand so you can login", key: Math.random() ,severity : "success"});       
             } 
              
              else {
                setAlert({ msg: "You must Complete password", key: Math.random() ,severity : "error"}); 
                }
            }
            else {
              setAlert({ msg: "You must Complete mail", key: Math.random() ,severity : "error"}); 
              }}
              else {
                setAlert({ msg: "You must Complete last name", key: Math.random() ,severity : "error"}); 
                }}          
       else {
        setAlert({ msg: "You must Complete first name", key: Math.random() ,severity : "error"}); 
        }
    };
 

const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={submitFormSignUp}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                type="text"
                label="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                autoFocus
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                type="text"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}


              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
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
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            data-testid="submit"
            className={classes.submit}
            onClick={addDemande}

          >              
          Sign Up
          </Button>
          {alert ? <AlertMassage key={alert.key} message={alert.msg} severity={alert.severity}/> : null}

          <Grid container justify="flex-end">
            <Grid item>
            <BrowserRouter basename="/" forceRefresh={true}>
              <Link to="/login" >
                Already have an account? Sign in
              </Link> 
              </BrowserRouter>     
            </Grid>  
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
     
    </Container>
    
  );
}