import { axiosClient } from "./axiosClient";

export const loginUser = (credentials)=>{
    return axiosClient.post('/login',credentials);
};

export const registerUser = (userData)=>{
    return axiosClient.post('/register', userData);
}