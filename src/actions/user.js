import { signUpApiService, signInApiService } from "../services/users";
import * as types from '../constants';
import { toast } from "react-toastify";
import { cookies } from "../utils/utils";

export function signupReducer(data){
    return {
        type: types.SIGN_UP, data
    }
}

export function signinReducer (data){
    return {
        type: types.SIGN_IN, data
    }
}

export const signUpAction = (signupObject) => async dispatch => {
    try{
        let res = await signUpApiService(signupObject);
        if(res.failure){
            toast.error(res.msg);
        }else{
            cookies.set('login',JSON.stringify(true));
            cookies.set('USR_VLE',res.data.key);
            dispatch(signupReducer(res));
        }
    }catch(err){
        console.error(err)
    }
}

export const signInAction = (signInObject) => async dispatch =>{
    try{
        let res = await signInApiService(signInObject);
        if(res.failure){
            toast.error(res.msg);
        }else{
            cookies.set('login',JSON.stringify(true));
            cookies.set('USR_VLE',res.data.key);
            dispatch(signinReducer(res));
        }
    }catch(err){
        console.error(err)
    }
}