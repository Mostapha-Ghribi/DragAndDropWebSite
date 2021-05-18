import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {N1} from './N1';
import Grid from '@material-ui/core/Grid';
import './StyleNav.css'
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: "90%",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const selected = (e) => {
  let target = e.currentTarget;
  target.classList.toggle('selected')
}

export const Nav1 = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const box = React.useRef("solid 1px white");

  return(
    <div style={modalStyle} className={classes.paper}>
      <Grid container spacing={3}>
        
        <Grid item xs={6} onClick={() => box.current.border = "solid 1px green"}>
            <N1/>
        </Grid>
      </Grid>
    </div>
  )
}