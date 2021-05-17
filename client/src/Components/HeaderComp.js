import React from 'react'
import head from './styles'
import AddBoxIcon from '@material-ui/icons/AddBox';
import {Avatar, Button , Paper , Typography , Grid, Icon} from "@material-ui/core";

export const HeaderComp = () => {
    const classes = head();
    return (
        <nav className={classes.nav}>
            <Button style={{display: 'flex',
                 marginLeft:"40%",
                 fontSize:30,}}><AddBoxIcon style={{color : "green",fontSize:30}} />Add Header</Button>
                 
        </nav>
    )
}
