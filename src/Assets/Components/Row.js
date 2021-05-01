import React from "react";
import { Row } from "react-bootstrap";
import nextId from "react-id-generator";
import Grid from './Grid'

const styles = {
    Drag : {
        width: 'auto',
        height: '250px',
      border: '1px solid red',
      flex: 1,
      flexDirection:'row'
    }
}

export default class Row extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          main : {},
        }
        
    }


    allowDrop = ev =>{
        ev.preventDefault();
    }

    onDrop = (e) =>{
        e.preventDefault();
        console.log(e.dataTransfer.types);
        console.log("grid dropped");
        let {main} = this.state;
        const data = e.dataTransfer.getData("text/plain");
        main[nextId('row-')] = <Grid id={nextId('Section-')} size={4}/>;
        this.setState({ main });
        console.log(main);
    }
 render(){
    const {Container} = this.state; 
    return (
    <Col id={this.props.id} md={this.props.size} onDragOver={this.allowDrop} onDrop={this.onDrop} style={styles.Drag}>
        {
                  Container.map( itm =>{
                    return itm;
                  })
                }
    </Col>
  )}
}

