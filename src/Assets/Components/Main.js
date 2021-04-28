import React from 'react'
import Grid from './Grid'
import NavBar from './NavBar'
import {Container , Col , Row} from 'react-bootstrap'
export default class Main extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          Container1 : [],
        }
        
    }

    allowDropGrid = ev =>{
        ev.preventDefault();
    }

    onDropGrid = (e) =>{
        e.preventDefault();
        let {Container1} = this.state;
        const data = e.dataTransfer.getData("text/plain");
        Container1.push(<Grid id={"T"+(Container1.length+1)}/>);
        this.setState({ Container1 });
    }
    render(){
        const {Container1} = this.state;
    return (
        <React.Fragment>
        <div style={{display: 'block' ,width:'100%'}}>
        <nav>
        <NavBar/>
        </nav>
        <div style={{height:'90%', overflow: 'scroll initial', border :"solid 0.5px blue", borderStyle: 'dashed'}} onDragOver={this.allowDropGrid} onDrop={this.onDropGrid}>
        <Container>
            <Row>
        {
           
           Container1.map( itm =>{
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