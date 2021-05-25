import { useState } from "react";
import React from 'react';
import axios from 'axios';
import {Avatar, Button , Paper , Typography , Grid, Icon} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from "./Input"
import GoogleLogin from "react-google-login";
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {signin , signup} from '../Actions/auth'
import clsx from 'clsx';
import  useStyles  from './styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
const Auth = () => {
    
    const CheckLoginStatus = () =>{
        axios.get("http://localhost:5000/user/signin",{withCredentials : true}).then(res =>{
            console.log("logged in?",res);
        }).catch(error =>{
            console.log("error login ! => ",error)
        })
    }
    const initialState = {firstname : '', lastname :'', email:'', password:'', confirmpassword:''}

    const [FormData,setFormData] = useState(initialState);

    const dispatch = useDispatch();

    const history = useHistory();

    const classes = useStyles();

    const [loading, setLoading] = React.useState(false);

    const [success, setSuccess] = React.useState(false);

    const timer = React.useRef();

    const [ShowPass , SetShowPass] = useState(false);

    const [IsSignUp , SetIsSignUp] = useState(false);

    const handleShowPass = () => SetShowPass((prevShowPass) => !prevShowPass);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(IsSignUp){
            dispatch(signup(FormData,history))
        }else{
            dispatch(signin(FormData,history))
        }
    }

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
      });
    
    
    React.useEffect(() => {
        return () => {
          clearTimeout(timer.current);
        };
    }, []);
    
    const handleButtonClick = () => {
        if (!loading) {
          setSuccess(false);
          setLoading(true);
          timer.current = window.setTimeout(() => {
            setSuccess(true);
            setLoading(false);
          }, 2000);
        }
    };

    const handleChange = (e) => {
        setFormData({... FormData,[e.target.name] : e.target.value});
        CheckLoginStatus();
    }

    const switchMode = () => {
        SetIsSignUp((prevSignUp) => !prevSignUp);
        SetShowPass(false);
    }

    const googleSuccess = async (res) =>{
        const result = res?.profileObj;
        const token = res?.tokenId;
        try{
            dispatch({ type : "AUTH" , data: {result,token}});
            history.push('/Dashboard');
        }catch(error){
            console.log(error);
        }
    }

    const googleFailure = (err) =>{
        console.log(err);
        console.log("failed to sign in"); 
    }
    return(
        <Grid container component="main" className={classes.root}>
        <Grid item xs={12} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} >
            <Paper className={classes.paper} >
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">{IsSignUp ? "Sign Up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            IsSignUp && (
                                <>
                                    <Input name="firstname" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastname" label="Last Name" handleChange={handleChange} half  />
                                    
                                </>
                            )
                        }
                        <Input name="email" label="email Adress" handleChange={handleChange} type="email"/>
                        {!IsSignUp && <Input name="password" label="password" handleChange={handleChange}  type={ShowPass ? "text" : "password"} handleShowPass={handleShowPass} /> }
                        {IsSignUp && (
                            <>
                            <Input name="password" label="password" handleChange={handleChange} half type={ShowPass ? "text" : "password"} handleShowPass={handleShowPass} />
                            <Input name="confirmpassword" label="Confirm Password" handleChange={handleChange} type="password" half />
                            <div className={classes.wrapper}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={buttonClassname}
                                            disabled={loading}
                                            onClick={handleButtonClick}
                                        >
                                            Accept terms
                                        </Button>
                                        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                            </div>
                            <br/>
                            </>
                        )}
                    </Grid>
                    <GoogleLogin
                    clientId = "204391573036-7h4glqq3ahe4v696fpq2friv3ihppjqg.apps.googleusercontent.com"
                    render={(renderprops) => (
                        <Button 
                        className={classes.googleButton} 
                        color="primary" 
                        fullWidth onClick={renderprops.onClick} 
                        disable={renderprops.disable} 
                        startIcon={<Icon/>} 
                        variant="contained" >
                            Google Sign In
                        </Button>
                    )}
                    onSuccess = {googleSuccess}
                    onFailure = {googleFailure}
                    cookiePolicy = "single_host_origin"
                    />
                    <Button type="Submit" fullWidth variant="contained" color="primary" className={classes.submit}>{IsSignUp ? "Sign Up" : "Sign In"}</Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {IsSignUp ? "Already have an Account ? Sign In" : "Don't have an Account ? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
            </Grid>
        </Grid>
    )
}
export default Auth;

