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
          <ListItem button key={"Sectioning Tags"}>
            <ListItemIcon><ViewCompactIcon/></ListItemIcon>
            <ListItemText primary={"Header"} />
          </ListItem>
        </List>
        <List>
          <ListItem button key={"Sectioning Tags"}>
            <ListItemIcon><ViewCompactIcon/></ListItemIcon>
            <ListItemText primary={"Footer"} />
          </ListItem>
        </List>
        <List>
          <ListItem button key={"Sectioning Tags"}>
            <ListItemIcon><ViewCompactIcon/></ListItemIcon>
            <ListItemText primary={"Section"} />
          </ListItem>
        </List>
        <Divider />
        </>
    )
}
