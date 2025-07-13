import { axiosClient } from "./axiosClient";

export const fetchCourses = async ({page,limit})=>{
    const res = await axiosClient.get('/courses',{params: {page,limit}});
    console.log(res.data);
    return res.data;
}

export const fetchCategory = async () =>{
    const res = await axiosClient.get('/category');
    return res.data;
}