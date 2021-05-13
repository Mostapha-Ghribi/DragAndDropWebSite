import {AUTH} from '../Constants/actionTypes';
import * as api from '../api/index'

export const signin = (FormData, history) => async (dispatch) => {
    try{
        // log in the user..
        history.push('/');
    }catch(error){
        console.log(error);
    }
}

export const signup = (FormData, history) => async (dispatch) => {
    try{
        // sign up the user..
        history.push('/');
    }catch(error){
        console.log(error);
    }
}