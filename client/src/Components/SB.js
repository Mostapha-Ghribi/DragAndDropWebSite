import React ,{useState , useEffect} from 'react';
import clsx from 'clsx';
import Main from "./Main";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PanToolIcon from '@material-ui/icons/PanTool';
import {useDispatch} from 'react-redux';
import {useHistory , useLocation} from 'react-router-dom';
import IconClient from '../Assets/IconClient.png';
import MoreIcon from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { SectioningTags } from './SideBarComponents/Section Tags/SectioningTags';
import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {BackArrow} from './SideBarComponents/BackArrow'
import { FormsInputs } from './SideBarComponents/Forms and Input/FormsInputs';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {Nav1} from './SideBarComponents/Section Tags/NavBarExamples/Nav1';
import Model from './Model';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

export default function SB() {
  const [openM, setOpenM] = useState(false);
  const [content, setContent] = useState();

const onDragStart = (e,v) =>{
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData( "text/plain", v )
    console.log("comp draged");
}
  const handleDefaultHeader = () =>{
      //   props.Drawer(true);
      //   props.SetSB(props.contentSB);
         setOpenM(true);
         setContent(<Nav1 setter={setHeader} closeModel={setOpenM}/>);
     }
  const DefaultHeader = () => {
      return(
          <Button style={{display: 'flex',
           marginLeft:"40%",
           fontSize:30,}}><AddBoxIcon style={{color : "green",fontSize:30}} onClick={handleDefaultHeader}/>Add Header</Button>
      )
}
const DefaultMainSection = () => {
  return(
      <h1>Hello</h1>
  )
} 
  const [Header , setHeader] = React.useState(DefaultHeader);
  const [Section , setSection] = React.useState(DefaultMainSection);


    const DefaultMenu = () => {
      return(
      <>
      <List>
        <ListItem button key={"Sectioning Tags"} onClick={() => setSBMenu(
          <>
          <BackArrow Menu={DefaultMenu} name="Main Menu" setSBMenu={setSBMenu}/>
          <SectioningTags Menu={setSBMenu} name="Sectioning Tags" MainMenu={DefaultMenu} setter={setHeader} closeModel={setOpenM}/>
          {console.log("done !")}
          </>
        )}>
          <ListItemIcon><ViewCompactIcon/></ListItemIcon>
          <ListItemText primary={"Sectioning Tags"} />
          <ListItemIcon style={{marginRight : "-30px"}}><LowPriorityIcon/></ListItemIcon>
        </ListItem>
      </List>
      <List>
        <ListItem button key={"Forms and Input"} onClick={() => setSBMenu(
        <>
        <BackArrow Menu={DefaultMenu} name="Main Menu" setSBMenu={setSBMenu}/>
        <FormsInputs Menu={setSBMenu} name="Forms and Input" MainMenu={DefaultMenu} closeModel={setOpenM}/>
        </>
        )}>
          <ListItemIcon><ViewCompactIcon/></ListItemIcon>
          <ListItemText primary={"Forms and Input"} />
          <ListItemIcon style={{marginRight : "-30px"}}><LowPriorityIcon/></ListItemIcon>

        </ListItem>
      </List>
      <List>
        <ListItem button key={"Grid"} draggable="true"  onDragStart={ (e) => onDragStart(e,"text")}>
          <ListItemIcon><ViewCompactIcon/></ListItemIcon>
          <ListItemText primary={"Grid"} />
          <ListItemIcon style={{marginRight : "-30px"}}><PanToolIcon/></ListItemIcon>

        </ListItem>
      </List>
      <Divider />
    </>)
    }
    const [SBMenu,setSBMenu] = useState(DefaultMenu)
    const [User , setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const location = useLocation();
  
    useEffect(() => {
      setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);
    const dispatch = useDispatch();
    const history = useHistory();
    const logout = () => {
      dispatch({type:'LOGOUT'});
      history.push('/');
      setUser(null);
    }
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={logout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Typography className={classes.title} style={{marginTop:"10px"}} variant="h6" noWrap>
            {User.result.name}
          </Typography>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <img alt="image User" style={{width:"30px" , height:"30px" , borderRadius: 400/ 2}} src={User.result.imageUrl}/>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        {[...Array(15)].map(() =>
    <Divider/>
  )}
      {SBMenu}
      </Drawer>
    </div>
    <Main Drawer={setOpen} SetSB={setSBMenu} Header={Header} Section={Section}/>
    <Model open={openM} Hide={() => setOpenM(false)} Content={content}/>

    </>
  );
} 