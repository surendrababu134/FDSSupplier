import { BASE_URL, CREATERESTURANT, GETRESTURANT, UPDATERESTURANT } from "../utils/Api";


export const addResturantService = async (data) =>{

    return await fetch(BASE_URL+CREATERESTURANT,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res=>res.json());
}

export const updateResturantService = async (data) =>{

    return await fetch(BASE_URL+UPDATERESTURANT,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res=>res.json());
}

export const getResturantService = async (data) =>{

    return await fetch(`${BASE_URL}${GETRESTURANT}?userId=${data}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res=>res.json());
}