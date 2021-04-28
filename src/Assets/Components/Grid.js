import React from "react";
import { Col } from "react-bootstrap";
import Inputwadia from './inputComp'
import Form from '../../Form' 

const styles = {
    Drag : {
        width: 'auto',
        height: '250px',
      border: '1px solid black',
      flex: 1,
      flexDirection:'row'
    }
}

export default class Grid extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          Container : [],
        }
        
    }

    allowDrop = ev =>{
        ev.preventDefault();
    }

    onDrop = (e) =>{
        e.preventDefault();
        let {Container} = this.state;
        const data = e.dataTransfer.getData("text/plain");
        Container.push(<Form><Inputwadia type={data} id={"T"+(Container.length+1)}/></Form>);
        this.setState({ Container });
    }
 render(){
    const {Container} = this.state; 
    return (
    <Col id={1} md={4} onDragOver={this.allowDrop} onDrop={this.onDrop} style={styles.Drag}>
        {
                  Container.map( itm =>{
                    return itm;
                  })
                }
    </Col>
  )}
}

