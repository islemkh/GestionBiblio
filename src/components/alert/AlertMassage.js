import React,{useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AlertMassage({ message, severity }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    window.location.reload(false);

  };

  return (
    <div className={classes}>
      <Snackbar 
      open={open} 
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
        autoHideDuration={6000}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        action={[
          <IconButton key="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        ]}>
        <Alert onClose={handleClose} 
        severity={severity}>
        {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
