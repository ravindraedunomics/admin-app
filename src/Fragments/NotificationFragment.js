import React from 'react';
import Button from '@material-ui/core/Button';
import {Paper,Box, Typography} from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

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

 function NotificationFragment() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open1 } = state;

  const handleClick1 = (newState) => () => {
    setState({ open1: true, ...newState });
  };

  const handleClose1 = () => {
    setState({ ...state, open1: false });
  };

  const buttons = (
    <React.Fragment>
      <Button  onClick={handleClick1({ vertical: 'top', horizontal: 'center' })}>Top-Center</Button>
      <Button onClick={handleClick1({ vertical: 'top', horizontal: 'right' })}>Top-Right</Button>
      <Button onClick={handleClick1({ vertical: 'bottom', horizontal: 'right' })}>
        Bottom-Right
      </Button>
      <Button onClick={handleClick1({ vertical: 'bottom', horizontal: 'center' })}>
        Bottom-Center
      </Button>
      <Button onClick={handleClick1({ vertical: 'bottom', horizontal: 'left' })}>Bottom-Left</Button>
      <Button onClick={handleClick1({ vertical: 'top', horizontal: 'left' })}>Top-Left</Button>
    </React.Fragment>
  );

  return (
    <div className={classes.root}>
        <Paper>
            <Box  p={5}>
                <Typography variant="h4">Notifications</Typography>
            </Box>
        </Paper>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>


      <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open1}
        onClose={handleClose1}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </div>


      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert>

    </div>
  );
}


 

export default   NotificationFragment;