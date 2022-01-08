import { BASE_URL, CREATERESTURANT } from "../utils/Api";


export const addResturantService = async (data) =>{

    return await fetch(BASE_URL+CREATERESTURANT,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res=>res.json());
}