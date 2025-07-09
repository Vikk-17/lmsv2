import { axiosClient } from "./axiosClient";

export const getUser = async ()=>{
    const res = await axiosClient.get('/user');
    return res.data;
};