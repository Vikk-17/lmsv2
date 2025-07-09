import { axiosClient } from "./axiosClient";

export const fetchCourses = async ()=>{
    const res = await axiosClient.get('/courses');
    return res.data;
}

export const fetchCategory = async () =>{
    const res = await axiosClient.get('/category');
    return res.data;
}