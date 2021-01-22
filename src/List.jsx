import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import DogTwo from '../src/assets/images/dog-2.jpg';
import DogThree from '../src/assets/images/dog-3.jpg';
import BlackDog from '../src/assets/images/small-black-dog.jpg';
import fb from '../src/assets/images/fb.png';
import cam from '../src/assets/images/cam.png';
import mail from '../src/assets/images/mail.png';
import call from '../src/assets/images/call.png';


import './App.css';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));



export default function AlignItemsList() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (

    
    <div style={{marginTop: '5px'}}>


    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Details</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
        <Avatar alt="Remy Sharp" variant="rounded" className={classes.rounded} src={DogTwo} style ={{height: '150px', width: '200px', boxShadow:  '0 0 7px  rgba(0,0,0,0.5)', marginLeft: '0px', marginBottom: '10px'}}/>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(20)]
              .map(
                () => `info`,
              )
              .join('\n')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    <List className={classes.root}>
      <button className="Buttons" onClick={handleClickOpen('paper')}>
      
      <ListItem style={{height: '200px'}}>
        <ListItemAvatar >
          <Avatar alt="Remy Sharp" variant="rounded" className={classes.rounded} src={DogTwo} style ={{height: '150px', width: '200px', boxShadow:  '0 0 7px  rgba(0,0,0,0.5)', marginLeft: '40px'}}/>
        </ListItemAvatar>
        <div style={{ minWidth: '160px', marginRight: '10px', overflow: 'none'}}>
        <ListItemText
          style={{marginLeft: '110px', marginTop: '-60px', fontSize: '30px'}}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
              <div style={{marginTop: '48px', minWidth: '50px'}}><span style={{ fontSize: '32px', fontFamily: 'Arial, Helvetica, sans-serif', color: '#2F2F2F', fontWeight: '800', fontStretch: 'semi-expanded'}}>Charlie</span></div>
              </Typography>
              <div style={{overflow: 'none', minWidth: '50px'}}>
                <div>Owner: Ali Connors</div>
                <div >Age: 13</div>
                <div>Breed: 13</div>
                <div>Weight: 50 lbs</div>
                <div>Diet: Meat</div>
                <div>Other: Meat</div>
              </div>
            </React.Fragment>
          }
        />
        </div>
        <div style={{marginLeft: '20px', marginTop: '5px', marginRight: '15px', width: '45%', border: '2px solid #D8D8D8', borderRadius: '1Opx', padding: '10px', height: '120px'}}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(10)]
              .map(
                () => `info info info`,
              )
              .join('\n')}
          </DialogContentText>
          </div>
        <div style={{marginLeft: '10px', float: 'right', minWidth: '50px'}}>
        <img alt='' src={fb} style={{marginRight: '9px', marginTop: '150px', height: '25px', width: '25px'}}></img>
        <img alt='' src={cam} style={{marginRight: '9px', marginTop: '150px', height: '25px', width: '25px'}}></img>
        <img alt='' src={mail} style={{marginRight: '9px', marginTop: '150px', height: '25px', width: '25px'}}></img>
        <img alt='' src={call} style={{marginRight: '9px', marginTop: '150px', height: '25px', width: '25px'}}></img>
        </div>
      </ListItem>
      </button>

      <Divider variant="inset" component="li" style={{width: '100%'}}/>

      <button className="Buttons" onClick={handleClickOpen('paper')}>
      <ListItem style={{height: '200px'}}>
        <ListItemAvatar>
          <Avatar variant="rounded" className={classes.rounded} alt="Remy Sharp" src={BlackDog} style={{height: '150px', width: '200px', boxShadow:  '0 0 7px  rgba(0,0,0,0.5)', marginLeft: '40px'}}/>
        </ListItemAvatar>
        <ListItemText
          style={{marginLeft: '110px', marginTop: '-60px', fontSize: '30px'}}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <div><h1>Benny</h1></div>
                Owner: Ali Connors
              </Typography>
              <div>Age: 13</div>
            </React.Fragment>
          }
        />
      </ListItem>
      </button>
      <Divider variant="inset" component="li" style={{width: '100%'}}/>

      <ListItem style={{height: '200px'}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" variant="rounded" className={classes.rounded} src={DogThree} style ={{height: '150px', width: '200px', boxShadow:  '0 0 7px  rgba(0,0,0,0.5)', marginLeft: '40px'}}/>
        </ListItemAvatar>
        <ListItemText
          style={{marginLeft: '110px', marginTop: '-60px', fontSize: '30px'}}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <div><h1>Sunny</h1></div>
                Owner: Ali Connors
              </Typography>
              <div>Age: 13</div>
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" style={{width: '100%'}}/>

      <ListItem style={{height: '200px'}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" variant="rounded" className={classes.rounded} src={DogTwo} style ={{height: '150px', width: '200px', boxShadow:  '0 0 7px  rgba(0,0,0,0.5)', marginLeft: '40px'}}/>
        </ListItemAvatar>
        <ListItemText
          style={{marginLeft: '110px', marginTop: '-60px', fontSize: '30px'}}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <div><h1>Apollo</h1></div>
                Owner: Ali Connors
              </Typography>
              <div>Age: 13</div>
            </React.Fragment>
          }
        />
      </ListItem>

      <Divider variant="inset" component="li" style={{width: '100%'}}/>

      <ListItem style={{height: '200px'}}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" variant="rounded" className={classes.rounded} src={DogTwo} style ={{height: '150px', width: '200px', boxShadow:  '0 0 7px  rgba(0,0,0,0.5)', marginLeft: '40px'}}/>
        </ListItemAvatar>
        <ListItemText
          style={{marginLeft: '110px', marginTop: '-60px', fontSize: '30px'}}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                <div><h1>Apollo</h1></div>
                Owner: Ali Connors
              </Typography>
              <div>Age: 13</div>
            </React.Fragment>
          }
        />
      </ListItem>

    </List>
    </div>
  );
}
