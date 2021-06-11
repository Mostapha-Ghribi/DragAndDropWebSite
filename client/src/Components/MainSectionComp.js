import React from 'react'
import section from './styles' 
import {Container , Row} from 'react-bootstrap'
import nextId from "react-id-generator";
import Grid from './Grid';
export const MainSectionComp = (props) => {
    const [main, setMain] = React.useState([]);
    const allowDropGrid = ev =>{
        ev.preventDefault();
    }

    const onDropGrid = (e) =>{
        e.preventDefault();
        const data = e.dataTransfer.getData("text/plain");
        //console.log(e.dataTransfer.types);
        //console.log("grid dropped");
        setMain(prevArray => [...prevArray, <Grid id={nextId('grid-')} md={4}/>])

        //main[nextId('grid-')] = <Grid id={1} size={4}/>;
    }

    const classes = section();
    return (
        <section className={classes.SectionMain} onDragOver={allowDropGrid} onDrop={onDropGrid}>
            <Container id={nextId('Container-')}>
                <Row>
        {
           main.map( (grid) => {
               return grid;
           } )
        }
        </Row>
        </Container>
        </section>
    )
}
