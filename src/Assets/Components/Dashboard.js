import React from 'react';
import Main from "./Main";
import SB from "./SB"


function Dashboard(props) {
    return (
        <div style={{display: "flex"}}>
                     <SB/>
                     <div style={{display: "flex"}}>

                   <Main/>
                   </div>
              </div>
    );
}

export default Dashboard;