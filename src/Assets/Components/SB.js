import React from 'react';
import {CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem} from 'cdbreact';
import TextField  from '../TextField.png'
import ListItem  from '../ListItem.png'
import {Container , Col , Row} from 'react-bootstrap'
import Grid from '../Grid.png';

export default class SB extends React.Component {

    
onDragStart = (e,v) =>{
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData( "text/plain", v )
}

onDragGrid = (e) =>{
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData( "text")
}


    render() {
        return(
        <div
        style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
      >
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
                      <CDBSidebarMenuItem><img src={ListItem} height="40px" draggable="true"  onDragStart={ (e) => this.onDragStart(e,"select")}/></CDBSidebarMenuItem>
                    </Col>
                    <Col lg={6}>
                      <CDBSidebarMenuItem><img src={TextField} height="40px" draggable="true"  onDragStart={ (e) => this.onDragStart(e, "text") }/></CDBSidebarMenuItem>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <CDBSidebarMenuItem><img src={Grid} height="40px" draggable="true"  onDragGrid={ (e) => this.onDragGrid(e)}/></CDBSidebarMenuItem>
                    </Col>
                  </Row>
                </Container>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
        )
    }
  }
