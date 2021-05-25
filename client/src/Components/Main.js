import React , {useState} from 'react'
import NavBar from './NavBar'
import {Container} from 'react-bootstrap'
import nextId from "react-id-generator";
import RowContainer from './Row';
import useStyles from './styles';
import { HeaderComp } from './HeaderComp';
import { MainSectionComp } from './MainSectionComp';
import Model from './Model';
import {StylingHeader} from './SideBarComponents/Section Tags/NavBarExamples/StylingHeader';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Nav1 } from './SideBarComponents/Section Tags/NavBarExamples/Nav1';

export default function Main(props) {

const main = {};
const classes = useStyles();

const allowDropGrid = ev =>{
        ev.preventDefault();
    }

    const onDropGrid = (e) =>{
        e.preventDefault();
        console.log(e.dataTransfer.types);
        console.log("grid dropped");
        let {main} = this.state;
        main[nextId('grid-')] = <RowContainer id={nextId('Section-')}/>;
        this.setState({ main });
        console.log(main);
    }


    
   
    return (
        <React.Fragment>
        <main className={classes.content} >
        <div className={classes.toolbar} />
        <section onDragOver={allowDropGrid} onDrop={onDropGrid} className={classes.mainSection}>
        <HeaderComp Header={props.Header} />
        <MainSectionComp Section={props.Section}/>
        <Container id={nextId('Container-')}>
        {
           
           Object.entries(main)
           .map( ([key, value]) => {
               return value;
           } )
        }
        </Container>
        </section>
      </main>
        </React.Fragment>
    )
}