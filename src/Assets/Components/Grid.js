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
      if ( e.length === 0 ) {
        return;
      }
        e.preventDefault();
        let {Container} = this.state;
        const data = e.dataTransfer.getData("comp");
        console.log(e.dataTransfer.types);
        console.log(data);
        Container.push(<Form><Inputwadia type={data} id={"T"+(Container.length+1)}/></Form>);
        this.setState({ Container });
        console.log("comp dropped");
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

