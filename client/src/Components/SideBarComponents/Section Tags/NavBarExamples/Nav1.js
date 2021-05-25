import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {N1} from './N1';
import {N2} from './N2';
import Grid from '@material-ui/core/Grid';
import Nav1Img from '../../../../Assets/Navs/Nav1.png';
import Nav2Img from '../../../../Assets/Navs/Nav2.png';
import Typography from '@material-ui/core/Typography';
import { SettingsEthernetRounded } from '@material-ui/icons';

//import styles from  './StyleNav.css'
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

const useS = makeStyles(() => ({
  border: {
    border: '2px solid green',
  }
}));

export const Nav1 = (props) => {
  const classes = useStyles();
  const styles = useS();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const box = React.useRef();
    const {current} = box;
  const handleSelectedBox = () => box.current.classList.add(styles.border);

  const [isActive, setActive] = React.useState({
    index : "",
    item : null,
  });

  const countRef = React.useRef(0);
  const setN1 = () =>{
    props.setter(<N1/>);
    props.closeModel(false);
  }

  const setN2 = () =>{
    props.setter(<N2/>);
    props.closeModel(false);
  }
  return(
    <div style={modalStyle} className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item md={12}><Typography align="center" variant="h4">Choose One</Typography></Grid>
        <Grid item md={6} >
            <img id="Nav1Img" src={Nav1Img} onClick={setN1}/>
        </Grid>
        <Grid item md={6}>
        <img id="Nav2Img" src={Nav2Img} onClick={setN2}/>
        </Grid>
      </Grid>

    </div>
  )
}