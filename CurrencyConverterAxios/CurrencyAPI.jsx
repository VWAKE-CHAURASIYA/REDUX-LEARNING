//STEP 1: HERE I NEED TO USE THE API FOR ACCESSING THE URL OF LIVE CURRENCY CONVERTER, WHICH I CALLED IT USING AXIOS:

import axios from "axios";

const api = axios.create({
    baseURL : "https://v6.exchangerate-api.com/v6/d6eb7aa40c1ef05c00b8f4d8", 
})
// d6eb7aa40c1ef05c00b8f4d8


//STEP 2: NOW , HERE I NEED TO DEFINE THE HTTPS METHODS: LIKE: GET ,PUT, POST, PATCH AND DELETE, TO ACCESS THE INFORMATION ABOUT THE API. 

export const GetAPIData = async(fromCurrency, toCurrency, amount)=>  //Here we assume when we call the method, we need to pass the fromcurrency , tocurrency and total amount, should be passed as argumet. 
{
    return await api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
}
