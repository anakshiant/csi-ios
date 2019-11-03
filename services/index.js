import axios from 'axios';

const client = axios.create({
    baseURL:"http://csi.sunriseweb.net/API"
});


export default client;


export const normalizeResponse = async (promise)=>{
    try{
        const response = await promise;
        return JSON.parse(response.data);
    }catch(exception){
        throw exception;
    }
}