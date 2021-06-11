import React from 'react';
import {ListItemIcon, ListItemText, List, ListItem} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const BackArrow = (props) =>{
    return(
      <List>
      <ListItem button key={"Back"} onClick={() => props.setSBMenu(props.Menu)}>
        <ListItemIcon><ArrowBackIcon/></ListItemIcon>
        <ListItemText primary={`Back to ${props.name}`} />
      </ListItem>
    </List>
    )
  }