import React from 'react'
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

export const Header = () => {
    return (
        <>
        <List>
          <ListItem button key={"Sectioning Tags"} onClick={this.handleClick}>
            <ListItemIcon><ViewCompactIcon/></ListItemIcon>
            <ListItemText primary={"Sectioning Tags"} />
          </ListItem>
        </List>
        <Divider />
        </>
    )
}
