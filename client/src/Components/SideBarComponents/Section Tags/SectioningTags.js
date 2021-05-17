import React, {useCallback} from 'react'
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import {Header} from './Header';
import { BackArrow } from '../BackArrow';
import LowPriorityIcon from '@material-ui/icons/LowPriority';

export const SectioningTags = (props) => {
    
    return (
        <>
        <List>
          <ListItem button key={"Sectioning Tags"}  onClick={() => props.Menu(
              <>
              <BackArrow Menu={
                <>
                  <BackArrow Menu={props.MainMenu} name="Main Menu" setSBMenu={props.Menu}/>
                  <SectioningTags Menu={props.Menu}/>
                </>
              } name="Sectioning Tags" setSBMenu={props.Menu}/>
              <Header/>
              </>
            )}
          
          >
            <ListItemIcon><ViewCompactIcon/></ListItemIcon>
            <ListItemText primary={"Header"}/>
            <ListItemIcon style={{marginRight : "-30px"}}><LowPriorityIcon/></ListItemIcon>

          </ListItem>
        </List>
        <List>
          <ListItem button key={"Sectioning Tags"}>
            <ListItemIcon><ViewCompactIcon/></ListItemIcon>
            <ListItemText primary={"Footer"} />
            <ListItemIcon style={{marginRight : "-30px"}}><LowPriorityIcon/></ListItemIcon>

          </ListItem>
        </List>
        <List>
          <ListItem button key={"Sectioning Tags"}>
            <ListItemIcon><ViewCompactIcon/></ListItemIcon>
            <ListItemText primary={"Section"} />
            <ListItemIcon style={{marginRight : "-30px"}}><LowPriorityIcon/></ListItemIcon>

          </ListItem>
        </List>
        <Divider />
        </>
    )
}
