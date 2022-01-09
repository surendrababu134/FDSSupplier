import * as types from '../constants';
import { toast } from "react-toastify";
import { cookies } from "../utils/utils";
import { addResturantService, getResturantService, updateResturantService } from '../services/resturants';

export function restObjectReducer(data){
    return {
        type: types.REST_DETAILS, data
    }
}

export function restGetObjectReducer(data){
    return {
        type: types.REST_GET_DETAILS, data
    }
}

export const addResturantAction = (restObject) => async dispatch => {
    try{
        let res = await addResturantService(restObject);
        if(res.failure){
            toast.error(res.msg);
        }else{
            cookies.set("RST_VL",res.data.key);
            dispatch(restObjectReducer(res));
        }
    }catch(err){
        console.error(err)
    }
}

export const updateResturantAction = (restObject) => async dispatch => {
    try{
        let res = await updateResturantService(restObject);
        if(res.failure){
            toast.error(res.msg);
        }else{
            cookies.set("RST_VL",res.data.key);
            dispatch(restObjectReducer(res));
        }
    }catch(err){
        console.error(err)
    }
}

export const getResturantAction = (restObject) => async dispatch => {
    try{
        let res = await getResturantService(restObject);
        if(res.failure){
            toast.error(res.msg);
        }else{
            cookies.set("RST_VL",res.data.key);
            dispatch(restGetObjectReducer(res));
        }
    }catch(err){
        console.error(err)
    }
}