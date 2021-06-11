import React, {useCallback} from 'react'
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { BackArrow } from '../BackArrow';
import {Form} from './Form';
import PanToolIcon from '@material-ui/icons/PanTool';
import {InputCompSB} from './InputCompSB';
export const FormsInputs = (props) => {
  const onDragStart = (e,v) =>{
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData( "text/plain", v )
}
    
    return (
        <>
        <List>
          <ListItem button key={"Form"}>
            <ListItemIcon><ViewCompactIcon/></ListItemIcon>
            <ListItemText primary={"Form"}/>
            <ListItemIcon style={{marginRight : "-30px"}}><PanToolIcon/></ListItemIcon>
          </ListItem>
        </List>
        <List>
          <ListItem button key={"Input"} draggable="true"  onDragStart={ (e) => onDragStart(e,"text")}>
            <ListItemIcon><ViewCompactIcon/></ListItemIcon>
            <ListItemText primary={"Input"} />
            <ListItemIcon style={{marginRight : "-30px"}}><PanToolIcon/></ListItemIcon>

          </ListItem>
        </List>
        <List>
          <ListItem button key={"Textarea"}>
            <ListItemIcon><ViewCompactIcon/></ListItemIcon>
            <ListItemText primary={"Textarea"} />
            <ListItemIcon style={{marginRight : "-30px"}}><PanToolIcon/></ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        </>
    )
}
