import React, {useState} from 'react'
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import PanToolIcon from '@material-ui/icons/PanTool';

export const InputCompSB = () => {


    
    return (
        <>
        <List>
          <ListItem button key={"F1"}>
            <ListItemIcon><ViewCompactIcon/></ListItemIcon>
            <ListItemText primary={"FormExample..."} />
            <ListItemIcon style={{marginRight : "-30px"}}><PanToolIcon/></ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        </>
    )
}