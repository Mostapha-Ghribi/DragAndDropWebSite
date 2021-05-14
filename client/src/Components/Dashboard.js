import React from 'react';
import Main from "./Main";
import SB from "./SB";
import useStyles from './styles';



const Dashboard = () => {
  const classes = useStyles();

    return (
      <div className={classes.rootMain}>
        <SB/>
        <Main/>
      </div>
    );
}

export default Dashboard;