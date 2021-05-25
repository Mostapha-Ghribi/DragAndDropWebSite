import React, {useCallback} from 'react'
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { BackArrow } from '../BackArrow';
import {Form} from './Form';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import {InputCompSB} from './InputCompSB';
export const FormsInputs = (props) => {
    
    return (
        <>
        <List>
          <ListItem button key={"Form"}  onClick={() => props.Menu(
              <>
              <BackArrow Menu={
                <>
                  <BackArrow Menu={props.MainMenu} name="Main Menu" setSBMenu={props.Menu}/>
                  <FormsInputs Menu={props.Menu}/>
                
                </>
              } name="Form" setSBMenu={props.Menu}/>
              <Form />
              </>
            )}
          
          >
            <ListItemIcon><ViewCompactIcon/></ListItemIcon>
            <ListItemText primary={"Form"}/>
            <ListItemIcon style={{marginRight : "-30px"}}><LowPriorityIcon/></ListItemIcon>
          </ListItem>
        </List>
        <List>
          <ListItem button key={"Input"} onClick={() => props.Menu(
              <>
              <BackArrow Menu={
                <>
                  <BackArrow Menu={props.MainMenu} name="Main Menu" setSBMenu={props.Menu}/>
                  <FormsInputs Menu={props.Menu}/>
                </>
              } name="Input" setSBMenu={props.Menu}/>
              <InputCompSB />
              </>
            )}
          >
            <ListItemIcon><ViewCompactIcon/></ListItemIcon>
            <ListItemText primary={"Input"} />
            <ListItemIcon style={{marginRight : "-30px"}}><LowPriorityIcon/></ListItemIcon>

          </ListItem>
        </List>
        <List>
          <ListItem button key={"Textarea"}>
            <ListItemIcon><ViewCompactIcon/></ListItemIcon>
            <ListItemText primary={"Textarea"} />
            <ListItemIcon style={{marginRight : "-30px"}}><LowPriorityIcon/></ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        </>
    )
}
