import { BASE_URL, SIGNUP,SIGNIN } from "../utils/Api"

export const signUpApiService = async (data) =>{

    return await fetch(BASE_URL+SIGNUP,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res=>res.json());
}

export const signInApiService = async (data) =>{
    return await fetch(BASE_URL+SIGNIN,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res=>res.json());
}