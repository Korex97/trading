import axios from "axios";
import qs from "qs";

import baseurl from "../../info";
import { deleteToken, getToken, setToken } from "./authSlice";

// login user
const login = async (credentials) => {
    const url = `${baseurl}login/`;
    const options = {
        method: "POST",
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(credentials),
        url
    }
    const response = await axios(options)

    if (response.data){
        setToken(response.data)
    }

    return response.data
}

const getUser = async () => {
    const url = `${baseurl}user/`;
    const user = await getToken();

    if (user !== undefined){
        const token = user.access_token
        const options = {
            method: "GET",
            headers: { 'Authorization': `Bearer ${token}` },
            url
        }

        const response = await axios(options)

        return response.data
    }else {
        throw new Error("Kindly Login to View this Resource")
    }

}

const register = async (userData) => {
    const url = `${baseurl}user/`
    const response = await axios.post(url, userData);

    if (response.data){
        setToken(response.data)
    }

    return response.data;
}


const authService = {
    login,
    register,
    getUser
}

export default authService;