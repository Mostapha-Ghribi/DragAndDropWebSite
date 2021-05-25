import React from 'react';
import SB from "./SB";
import useStyles from './styles';



const Dashboard = () => {
  const classes = useStyles();

    return (
      <div className={classes.rootMain}>
        <SB/>
      </div>
    );
}

export default Dashboard;