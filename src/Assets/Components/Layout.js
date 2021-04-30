import React from 'react';
import Main from "./Main";
import SB from "./SB"

function Layout(props) {
    return (
            <div id="body" style={{display: "flex"}}>
                <SB/>
                <Main/>
            </div>
    );
}

export default Layout;