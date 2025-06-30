import { axiosClient } from "./axiosClient";

export const getUser = ()=>{
    return axiosClient.get('/user');
};