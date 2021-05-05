import React from 'react'
import {CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem} from 'cdbreact';
import TextField  from '../TextField.png'
import ListItem  from '../ListItem.png'
import {Container , Col , Row} from 'react-bootstrap'
import Grid1 from '../Grid.png';
export default class SBMenuInput extends React.Component {

onDragStart = (e,v) =>{
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData( "text/plain", v )
    console.log("comp draged");
}
    render(){
    return (
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a
              href="/"
              className="text-decoration-none"
              style={{ color: 'inherit' }}
            >
              FizFaz
            </a>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
                <Container>
                  <Row>
                    <Col lg={12}>
                    <CDBSidebarMenuItem><img alt="ListItem" src={TextField} height="40px" draggable="true"  onDragStart={ (e) => this.onDragStart(e,4)}/>col-md-4</CDBSidebarMenuItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <CDBSidebarMenuItem><img alt="ListItem" src={TextField} height="40px" draggable="true"  onDragStart={ (e) => this.onDragStart(e,3)}/>col-md-3</CDBSidebarMenuItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <CDBSidebarMenuItem><img alt="ListItem" src={TextField} height="40px" draggable="true"  onDragStart={ (e) => this.onDragStart(e,6)}/>col-md-6</CDBSidebarMenuItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <CDBSidebarMenuItem><img alt="ListItem" src={TextField} height="40px" draggable="true"  onDragStart={ (e) => this.onDragStart(e,12)}/>col-md-12</CDBSidebarMenuItem>
                    </Col>
                  </Row>
                </Container>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
    )}
}

