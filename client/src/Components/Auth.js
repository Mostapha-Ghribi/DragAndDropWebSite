import { useState } from "react";
import axios from 'axios';
import {Avatar, Button , Paper , Typography , Grid, Icon} from "@material-ui/core";
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Input from "./Input"
import GoogleLogin from "react-google-login";
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {signin , signup} from '../Actions/auth'
const Auth = () => {
    
    //const UserExist = JSON.stringify(JSONObject).includes("profile");
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

    const handleChange = (e) => {
        setFormData({... FormData,[e.target.name] : e.target.value});
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
        <>
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
                        <Input name="password" label="password" handleChange={handleChange}  type={ShowPass ? "text" : "password"} handleShowPass={handleShowPass} />
                        {IsSignUp && <Input name="confirmpassword" label="Confirm Password" handleChange={handleChange} type="password" />}
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
        </>
    )
}
export default Auth;