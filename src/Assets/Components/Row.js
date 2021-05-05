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

export default class RowContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          main : {},
          type : 4,
        }
        
    }


    allowDrop = ev =>{
        ev.preventDefault();
    }

    onDrop = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        console.log(e.dataTransfer.types);
        console.log("grid dropped");
        let {main} = this.state;
        const size = e.dataTransfer.getData("text/plain");
        main[nextId('row-')] = <Grid id={nextId('Griddd-')} size={size}/>;
        this.setState({ main });
        console.log(main);
    }
 render(){
    const {main} = this.state; 
    return (
    <Row id={nextId('Row-')} onDragOver={this.allowDrop} onDrop={this.onDrop} style={styles.Drag}>
        {
                  Object.entries(main)
                  .map( ([key, value]) => {
                      return value;
                  } )
                }
    </Row>
  )}
}

