import axios from "axios";
import { AxiosResponse } from "axios";

axios.defaults.baseURL = 'https://api.p-rd.com/Fuse2_RestAPI/api';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const API = {
    getApiToken: (): Promise<AxiosResponse> => {
        return new Promise((resolve, reject) => {
            axios.post('/GetToken', {
                username: 'api.Fuse2@p-rd.com',
                grant_type: 'password',
                password: 'Clarifying2358*2681' 
            }, {headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }})
            .then(response => {
                console.log(response, "sdlkfjklsjdkfljld")
                axios.defaults.headers.common['Authorization'] = `${response.data?.access_token}`;
            })
            .catch(error => reject(error))
        })
    }
}

export default API;