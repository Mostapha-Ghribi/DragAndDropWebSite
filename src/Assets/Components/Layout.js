import React from 'react';
import Main from "./Main";
import NavBar from "./NavBar"
import SB from "./SB"
import {Container , Col , Row} from 'react-bootstrap'

function Layout(props) {
    return (
            <div style={{display: "flex"}}>
                <SB/>
                <Main/>
            </div>
    );
}

export default Layout;