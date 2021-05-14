import {AUTH} from '../Constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (FormData, history) => async (dispatch) => {
    try{
        const {data} = await api.signIn(FormData);
        dispatch({type : AUTH , data});
        history.push('/Dashboard');
    }catch(error){
        console.log(error);
    }
}

export const signup = (FormData, history) => async (dispatch) => {
    try{
        const {data} = await api.signUp(FormData);
        dispatch({type : AUTH , data});
        history.push('/Dashboard');
    }catch(error){
        console.log(error);
    }
}