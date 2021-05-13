import React, {useCallback} from 'react'
import {CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem} from 'cdbreact';
import TextField  from '../TextField.png'
import ListItem  from '../ListItem.png'
import {Container , Col , Row} from 'react-bootstrap'
import Grid1 from '../Grid.png';
export default class SideBarMenu extends React.Component {
        
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
                    <Col lg={6}>
                      <CDBSidebarMenuItem><img alt="ListItem" src={ListItem} height="40px" /></CDBSidebarMenuItem>
                    </Col>
                    <Col lg={6}>
                      <CDBSidebarMenuItem><img alt="TextField" src={TextField} height="40px" draggable="true"  onDragStart={ (e) => this.onDragStart(e, "text") }/></CDBSidebarMenuItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <CDBSidebarMenuItem><img alt="Grid" src={Grid1} height="40px" draggable="true"  onDragStart={ (e) => this.onDragStart(e,"Grid")}/></CDBSidebarMenuItem>
                    </Col>
                    <Col lg={6}>
                      <CDBSidebarMenuItem><img alt="Grid" src={Grid1} height="40px" draggable="true"  onDragStart={ (e) => this.onDragStart(e,"Row")}/></CDBSidebarMenuItem>
                    </Col>
                  </Row>
                </Container>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
    )}
}

