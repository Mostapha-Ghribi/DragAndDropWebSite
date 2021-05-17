import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
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