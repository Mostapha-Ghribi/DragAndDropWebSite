import React, {useState} from 'react'
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {StylingHeader} from './NavBarExamples/StylingHeader';
import {Nav1} from './NavBarExamples/Nav1';
import Model from '../../Model';
import { BackArrow } from '../BackArrow';
export const SectioningTags = (props) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
    return (
        <>
        <List>
          <ListItem button key={"Sectioning Tags"}  onClick={() => {setOpen(true); setContent(<Nav1 setter={props.setter} closeModel={props.closeModel}/>)}}
          
          >
            <ListItemIcon><ViewCompactIcon/></ListItemIcon>
            <ListItemText primary={"Header"}/>
            <ListItemIcon style={{marginRight : "-30px"}}><KeyboardArrowRightIcon/></ListItemIcon>

          </ListItem>
        </List>
        <List>
          <ListItem button key={"Sectioning Tags"} onClick={() => props.Menu(
              <>
              <BackArrow Menu={
                <>
                  <BackArrow Menu={props.MainMenu} name="Main Menu" setSBMenu={props.Menu}/>
                  <SectioningTags Menu={props.Menu}/>
                </>
              } name="Form" setSBMenu={props.Menu}/>
              <StylingHeader />
              </>
            )}>
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
        <Model open={open} Hide={() => setOpen(false)} Content={content}/>
        <Divider />
        </>
    )
}
