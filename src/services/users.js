import { BASE_URL, SIGNUP } from "../utils/Api"

export const signUpApiService = async (data) =>{

    return await fetch(BASE_URL+SIGNUP,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res=>res.json());
}