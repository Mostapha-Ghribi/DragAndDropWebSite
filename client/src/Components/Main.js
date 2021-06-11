import React from 'react'
import useStyles from './styles';
import { HeaderComp } from './HeaderComp';
import { MainSectionComp } from './MainSectionComp';


export default function Main(props) {

const classes = useStyles();



    
   
    return (
        <React.Fragment>
        <main className={classes.content} >
        <div className={classes.toolbar} />
        <section  className={classes.mainSection}>
        <HeaderComp Header={props.Header} />
        <MainSectionComp Section={props.Section}/>
        

        </section>
      </main>
        </React.Fragment>
    )
}