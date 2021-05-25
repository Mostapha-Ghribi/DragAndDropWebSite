import React from 'react';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import BorderStyleIcon from '@material-ui/icons/BorderStyle';
import TocIcon from '@material-ui/icons/Toc';
export const StylingHeader = () => {
    return (
        <>
        <List>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
  <Button startIcon={<TocIcon/>}>Content</Button>
  <Button startIcon={<BorderStyleIcon/>}>Styling</Button>
        </ButtonGroup>
        </List>

        <Divider />
        </>
    )
}