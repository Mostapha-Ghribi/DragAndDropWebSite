import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  nav:{
    display : "flex",
    height:"60px",
  },
  navBorder:{
    borderWidth:1,
    borderStyle: 'dashed',
    borderColor:'red',
  },
  SectionMain:{
    display : "flex",
    height :"300px",
    borderWidth:1,
    borderStyle: 'dashed',
    borderColor:'red',
  },
  toolbar: {  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  mainSection:{
    height: "85%",
    width: "92%",
    height: "85vh",
    width: "92vw",
    margin: "0",
    borderWidth:1,
    borderStyle: 'dashed',
    borderColor:'blue',
    position : "fixed",
  },
  rootMain: {
    display: 'flex',
  },
  paper: {
    marginTop: theme.spacing(1),
    marginBottom : theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height : "608px",
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  wrapper: {
        margin: theme.spacing(2),
        position: 'relative',
      },
      buttonSuccess: {
        backgroundColor: theme.palette.success.main,
        '&:hover': {
          backgroundColor: theme.palette.success.main,
        },
      },
      buttonProgress: {
        color: theme.palette.success.main,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
      },
      buttonFail: {
        backgroundColor: theme.palette.success.dark,
        '&:hover': {
          backgroundColor: theme.palette.success.dark,
        },
      },
      buttonFail: {
        color: theme.palette.success.dark,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
      },
}));