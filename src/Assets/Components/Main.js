import React from 'react'
import Grid from './Grid'
import NavBar from './NavBar'
import {Container , Row} from 'react-bootstrap'
import nextId from "react-id-generator";
export default class Main extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          main : [],
        }
        
    }

    allowDropGrid = ev =>{
        ev.preventDefault();
    }

    onDropGrid = (e) =>{
        e.preventDefault();
        console.log(e.dataTransfer.types);
        console.log("grid dropped");
        let {main} = this.state;
        const data = e.dataTransfer.getData("text/plain");
        console.log(data);
        main.push(<Grid id={nextId('Section-')} size={4}/>);
        this.setState({ main });
    }
    render(){
        const {main} = this.state;
    return (
        <React.Fragment>
        <div id="block" style={{display: 'block' ,width:'100%'}}>
        <nav id="nav">
        <NavBar/>
        </nav>
        <div id="main" style={{height:'90%', overflow: 'scroll initial', border :"solid 0.5px blue", borderStyle: 'dashed'}} onDragOver={this.allowDropGrid} onDrop={this.onDropGrid}>
        <Container id={nextId('Container-')}>
            <Row id={nextId('Row-')}>
        {
           
           main.map( itm =>{
            return itm;
          })    
        }
        </Row>
        </Container>
        </div>
        </div>
        </React.Fragment>
    )}
}