import React from 'react'
import {CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem} from 'cdbreact';
import TextField  from '../Assets/TextField.png'
import {Container , Col , Row} from 'react-bootstrap'
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
                      <CDBSidebarMenuItem><img alt="ListItem" src={TextField} height="40px" draggable="true"  onDragStart={ (e) => this.onDragStart(e,"text")}/>Text</CDBSidebarMenuItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <CDBSidebarMenuItem><img alt="ListItem" src={TextField} height="40px" draggable="true"  onDragStart={ (e) => this.onDragStart(e,"email")}/>email</CDBSidebarMenuItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <CDBSidebarMenuItem><img alt="ListItem" src={TextField} height="40px" draggable="true"  onDragStart={ (e) => this.onDragStart(e,"tel")}/>tel</CDBSidebarMenuItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <CDBSidebarMenuItem><img alt="ListItem" src={TextField} height="40px" draggable="true"  onDragStart={ (e) => this.onDragStart(e,"password")}/>password</CDBSidebarMenuItem>
                    </Col>
                  </Row>
                </Container>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
    )}
}

